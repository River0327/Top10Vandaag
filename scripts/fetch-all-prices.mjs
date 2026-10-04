import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import fetch from "node-fetch";
import {
  decodeAffiliateUrl,
  extractPriceFromHtml,
  formatApproxPrice,
  buildBolProductUrl,
} from "../src/lib/prices.ts";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const PRICE_DATE = new Date().toISOString().slice(0, 10);
const cachePath = path.join(root, `scripts/price-cache-${PRICE_DATE}.json`);

function loadEnvLocal() {
  const envPath = path.join(root, ".env.local");
  if (!fs.existsSync(envPath)) return;
  for (const line of fs.readFileSync(envPath, "utf8").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    let value = trimmed.slice(eq + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (!process.env[key]) process.env[key] = value;
  }
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function extractStoresFromFile(content) {
  const stores = [];

  const linkRegex =
    /name:\s*"((?:\\.|[^"\\])*)",\s*(?:\n\s*)?link:\s*"((?:\\.|[^"\\])*)"/g;
  let m;
  while ((m = linkRegex.exec(content)) !== null) {
    stores.push({ name: m[1], link: m[2] });
  }

  const bolIdRegex =
    /name:\s*"Bol\.com",\s*(?:\n\s*)?bolProductId:\s*"(\d+)"/g;
  while ((m = bolIdRegex.exec(content)) !== null) {
    stores.push({ name: "Bol.com", bolProductId: m[1] });
  }

  return stores;
}

function cacheKey(entry) {
  if (entry.bolProductId) return `Bol.com::bolProductId:${entry.bolProductId}`;
  return `${entry.name}::${entry.link}`;
}

let bolToken = null;
let bolTokenExpiresAt = 0;

async function getBolToken() {
  if (bolToken && Date.now() < bolTokenExpiresAt - 60_000) return bolToken;

  const clientId = process.env.BOL_CLIENT_ID?.trim();
  const clientSecret = process.env.BOL_CLIENT_SECRET?.trim();
  if (!clientId || !clientSecret) return null;

  const encoded = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");
  const res = await fetch("https://login.bol.com/token?grant_type=client_credentials", {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Basic ${encoded}`,
    },
  });
  if (!res.ok) return null;

  const data = await res.json();
  bolToken = data.access_token;
  bolTokenExpiresAt = Date.now() + data.expires_in * 1000;
  return bolToken;
}

async function fetchBolPriceViaApi(bolProductId) {
  const token = await getBolToken();
  if (!token) return null;

  const headers = {
    Accept: "application/json",
    Authorization: `Bearer ${token}`,
    "Accept-Language": "nl",
  };

  const eanRes = await fetch(
    `https://api.bol.com/marketing/catalog/v1/products/${encodeURIComponent(bolProductId)}/to-ean`,
    { headers }
  );
  if (!eanRes.ok) return null;
  const eanData = await eanRes.json();
  const ean = eanData?.ean;
  if (!ean) return null;

  const offerRes = await fetch(
    `https://api.bol.com/marketing/catalog/v1/products/${encodeURIComponent(ean)}/offers/best?country-code=NL`,
    { headers }
  );
  if (!offerRes.ok) return null;
  const offer = await offerRes.json();
  if (offer?.price == null) return null;
  return String(offer.price);
}

async function fetchPriceFromPage(url, store) {
  const res = await fetch(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      Accept: "text/html,application/xhtml+xml",
      "Accept-Language": "nl-NL,nl;q=0.9",
    },
    redirect: "follow",
  });

  if (!res.ok) {
    throw new Error(`HTTP ${res.status}`);
  }

  const html = await res.text();
  const raw = extractPriceFromHtml(html, store);
  if (!raw) throw new Error("Prijs niet gevonden");
  return raw;
}

async function fetchStorePrice(entry) {
  if (entry.name === "Bol.com" && entry.bolProductId) {
    const apiRaw = await fetchBolPriceViaApi(entry.bolProductId);
    if (apiRaw) return apiRaw;

    const url = buildBolProductUrl(entry.bolProductId);
    return fetchPriceFromPage(url, "Bol.com");
  }

  if (!entry.link) throw new Error("Geen link");

  const productUrl = decodeAffiliateUrl(entry.link, entry.name);
  return fetchPriceFromPage(productUrl, entry.name);
}

function dedupeStores(stores) {
  const seen = new Set();
  return stores.filter((store) => {
    const key = cacheKey(store);
    if (seen.has(key)) return false;
    seen.add(key);
    return store.name === "Bol.com" || store.name === "Coolblue";
  });
}

loadEnvLocal();

const files = [
  path.join(root, "src/data/subcategoryProducts.ts"),
  path.join(root, "src/app/trending/page.tsx"),
];

const allStores = files.flatMap((file) =>
  extractStoresFromFile(fs.readFileSync(file, "utf8"))
);
const entries = dedupeStores(allStores);

const retryFailed = process.argv.includes("--retry-failed");
const cache = fs.existsSync(cachePath)
  ? JSON.parse(fs.readFileSync(cachePath, "utf8"))
  : {};

console.log(`Datum: ${PRICE_DATE}`);
console.log(`Unieke store-links: ${entries.length}`);
console.log(`Reeds in cache: ${Object.keys(cache).length}`);

let ok = 0;
let err = 0;

for (const store of entries) {
  const key = cacheKey(store);
  if (cache[key]?.formatted && !retryFailed) continue;
  if (cache[key]?.error && !retryFailed) continue;

  try {
    const raw = await fetchStorePrice(store);
    const formatted = formatApproxPrice(raw);
    if (!formatted) throw new Error("Ongeldige prijs");

    cache[key] = { raw, formatted, fetchedAt: PRICE_DATE };
    ok++;
    console.log(`OK  ${store.name.padEnd(10)} ${formatted}`);
  } catch (e) {
    cache[key] = {
      error: e instanceof Error ? e.message : String(e),
      fetchedAt: PRICE_DATE,
    };
    err++;
    console.log(`ERR ${store.name.padEnd(10)} ${cache[key].error}`);
  }

  fs.writeFileSync(cachePath, JSON.stringify(cache, null, 2));
  await sleep(350);
}

console.log(`\nKlaar: ${ok} OK, ${err} mislukt`);
console.log(`Cache: ${cachePath}`);
