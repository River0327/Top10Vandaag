import "server-only";

export function getBolAffiliateSiteId(): string {
  return process.env.BOL_AFFILIATE_SITE_ID?.trim() || "1513819";
}

export const BOL_TOKEN_URL =
  "https://login.bol.com/token?grant_type=client_credentials";

export const BOL_CATALOG_BASE = "https://api.bol.com/marketing/catalog/v1";

export const BOL_EAN_CACHE_SECONDS = 60 * 60 * 24;
export const BOL_PRODUCT_CACHE_SECONDS = 60 * 30;
