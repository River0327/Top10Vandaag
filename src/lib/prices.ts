export function decodeAffiliateUrl(affiliateLink: string, store: string): string {
  try {
    const url = new URL(affiliateLink);
    if (store === "Bol.com") {
      const target = url.searchParams.get("url");
      if (target) return decodeURIComponent(target);
    }
    if (store === "Coolblue") {
      const target = url.searchParams.get("ued");
      if (target) return decodeURIComponent(target);
    }
  } catch {
    return affiliateLink;
  }
  return affiliateLink;
}

export function extractPriceFromHtml(html: string, store: string): string | null {
  const offerPriceMatch = html.match(
    /"offers"\s*:\s*\{[\s\S]{0,400}?"price"\s*:\s*"?([\d]+(?:[.,]\d+)?)"?/
  );
  if (offerPriceMatch?.[1]) return offerPriceMatch[1];

  const jsonLdMatch = html.match(/"price"\s*:\s*"?([\d]+(?:[.,]\d+)?)"?/);
  if (jsonLdMatch?.[1]) return jsonLdMatch[1];

  if (store === "Coolblue") {
    const metaMatch = html.match(/itemprop="price"\s+content="([\d.,]+)"/);
    if (metaMatch?.[1]) return metaMatch[1];
  }

  if (store === "Bol.com") {
    const bolMatch = html.match(
      /"sellingPrice"[\s\S]{0,160}?"price"\s*,\s*\{[\s\S]{0,120}?([\d]+(?:[.,]\d+)?)/
    );
    if (bolMatch?.[1]) return bolMatch[1];

    const bolAmount = html.match(
      /"listPrice"[\s\S]{0,80}?"amount"\s*:\s*([\d]+(?:[.,]\d+)?)/
    );
    if (bolAmount?.[1]) return bolAmount[1];
  }

  return null;
}

export function formatApproxPrice(
  raw: string | number | null | undefined
): string | null {
  if (raw == null || raw === "") return null;
  const normalized = String(raw).replace(",", ".");
  const num = parseFloat(normalized);
  if (Number.isNaN(num) || num < 1) return null;

  const rounded = Math.round(num);
  const formatted = new Intl.NumberFormat("nl-NL", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(rounded);
  return `€ ${formatted}`;
}

export function buildBolProductUrl(bolProductId: string): string {
  return `https://www.bol.com/nl/nl/p/-/${bolProductId}/`;
}
