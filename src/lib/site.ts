export const SITE_NAME = "Top 10 Vandaag";

export const SITE_NAME_ALIASES = [
  "Top10Vandaag",
  "Top 10 Vandaag",
  "top10vandaag",
  "top 10 vandaag",
  "top10vandaag.nl",
];

export const SITE_DESCRIPTION =
  "Top 10 Vandaag (Top10Vandaag) is de Nederlandse vergelijkingssite voor de top 10 beste telefoons, laptops, tv's en accessoires. Actuele lijsten met prijzen bij Bol.com en Coolblue.";

export const SITE_LOCALE = "nl_NL";

/** Live host: Vercel serves www and 307s the apex. Canonicals must match www. */
export const CANONICAL_ORIGIN = "https://www.top10vandaag.nl";

export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");
  if (!raw) return CANONICAL_ORIGIN;

  try {
    const parsed = new URL(raw);
    if (parsed.hostname === "top10vandaag.nl" || parsed.hostname === "www.top10vandaag.nl") {
      return CANONICAL_ORIGIN;
    }
    return `${parsed.protocol}//${parsed.host}`.replace(/\/$/, "");
  } catch {
    return CANONICAL_ORIGIN;
  }
}
