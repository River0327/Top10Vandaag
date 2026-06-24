export const SITE_NAME = "Top 10 Vandaag";

export const SITE_DESCRIPTION =
  "Onafhankelijke Top 10 lijsten en koopgidsen voor tech en elektronica in Nederland. Vergelijk smartphones, laptops, TV's en gaming accessoires.";

export const SITE_LOCALE = "nl_NL";

export function getSiteUrl(): string {
  const url = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (url) return url.replace(/\/$/, "");
  return "https://top10vandaag.nl";
}
