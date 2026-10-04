import { getBolAffiliateSiteId } from "./config";

const AFFILIATE_BASE = "https://partner.bol.com/click/click";

export function createBolAffiliateUrl(
  productUrl: string,
  productName: string
): string {
  const siteId = getBolAffiliateSiteId();
  const params = new URLSearchParams({
    p: "2",
    t: "url",
    s: siteId,
    f: "TXL",
    url: productUrl,
    name: productName,
  });

  return `${AFFILIATE_BASE}?${params.toString()}`;
}

export function buildBolProductUrlFromId(bolProductId: string): string {
  return `https://www.bol.com/nl/nl/p/-/${bolProductId}/`;
}

export function extractBolProductUrl(link?: string | null): string | null {
  if (!link || link === "#") return null;

  try {
    const url = new URL(link);
    const host = url.hostname.replace(/^www\./, "");

    if (host === "partner.bol.com") {
      return url.searchParams.get("url");
    }

    if (host === "bol.com" || host.endsWith(".bol.com")) {
      return link;
    }
  } catch {
    return null;
  }

  return null;
}

export function toBolAffiliateUrl({
  link,
  productName,
  bolProductId,
  affiliateUrl,
  productUrl,
}: {
  link?: string;
  productName: string;
  bolProductId?: string;
  affiliateUrl?: string | null;
  productUrl?: string | null;
}): string {
  if (affiliateUrl) return affiliateUrl;

  const destination =
    extractBolProductUrl(productUrl) ??
    extractBolProductUrl(link) ??
    (bolProductId ? buildBolProductUrlFromId(bolProductId) : null);

  if (!destination) {
    return link && link !== "#" ? link : "#";
  }

  return createBolAffiliateUrl(destination, productName);
}
