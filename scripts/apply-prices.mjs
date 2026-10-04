import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const PRICE_DATE = new Date().toISOString().slice(0, 10);
const cachePath = path.join(root, `scripts/price-cache-${PRICE_DATE}.json`);

if (!fs.existsSync(cachePath)) {
  console.error(`Geen price cache gevonden: ${cachePath}`);
  console.error("Run eerst: node scripts/fetch-all-prices.mjs");
  process.exit(1);
}

const cache = JSON.parse(fs.readFileSync(cachePath, "utf8"));

function getPrice(storeName, link) {
  const entry = cache[`${storeName}::${link}`];
  return entry?.formatted ?? null;
}

function getBolProductPrice(bolProductId) {
  const entry = cache[`Bol.com::bolProductId:${bolProductId}`];
  return entry?.formatted ?? null;
}

function upsertApproxPrice(block, price) {
  if (/approxPrice:\s*"/.test(block)) {
    return block.replace(/approxPrice:\s*"[^"]*"/, `approxPrice: "${price}"`);
  }
  return block.replace(/\n(\s*)\}/, `,\n$1approxPrice: "${price}"\n$1}`);
}

function injectPrices(content) {
  let updated = content;
  let count = 0;

  updated = updated.replace(
    /(\{\s*)name:\s*"((?:\\.|[^"\\])*)",\s*(?:\n(\s*))?link:\s*"((?:\\.|[^"\\])*)"(?:,\s*(?:\n\s*)?approxPrice:\s*"[^"]*")?/g,
    (match, open, storeName, indent, link) => {
      const price = getPrice(storeName, link);
      if (!price) return match;
      count++;
      if (indent) {
        return `${open}name: "${storeName}",\n${indent}link: "${link}",\n${indent}approxPrice: "${price}"`;
      }
      return `${open}name: "${storeName}", link: "${link}", approxPrice: "${price}"`;
    }
  );

  updated = updated.replace(
    /(\{\s*)name:\s*"Bol\.com",\s*(?:\n(\s*))?bolProductId:\s*"(\d+)"(?:,\s*(?:\n\s*)?approxPrice:\s*"[^"]*")?/g,
    (match, open, indent, bolProductId) => {
      const price = getBolProductPrice(bolProductId);
      if (!price) return match;
      count++;
      if (indent) {
        return `${open}name: "Bol.com",\n${indent}bolProductId: "${bolProductId}",\n${indent}approxPrice: "${price}"`;
      }
      return `${open}name: "Bol.com", bolProductId: "${bolProductId}", approxPrice: "${price}"`;
    }
  );

  return { updated, count };
}

const targets = [
  "src/data/subcategoryProducts.ts",
  "src/app/trending/page.tsx",
];

let total = 0;
for (const rel of targets) {
  const file = path.join(root, rel);
  const { updated, count } = injectPrices(fs.readFileSync(file, "utf8"));
  fs.writeFileSync(file, updated);
  total += count;
  console.log(`${rel}: ${count} prijzen bijgewerkt`);
}

const ok = Object.values(cache).filter((v) => v.formatted).length;
const failed = Object.values(cache).filter((v) => v.error).length;
console.log(`\nTotaal bijgewerkt: ${total}`);
console.log(`Cache: ${ok} OK, ${failed} mislukt (${PRICE_DATE})`);
