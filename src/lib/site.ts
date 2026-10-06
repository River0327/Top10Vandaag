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

export function getSiteUrl(): string {
  const url = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (url) return url.replace(/\/$/, "");
  return "https://top10vandaag.nl";
}
