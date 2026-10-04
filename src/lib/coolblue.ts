const AWIN_MID = "85161";
const AWIN_AFFID = "1940197";

export function toCoolblueAffiliateUrl(link?: string): string {
  if (!link || link === "#") return "#";

  try {
    const url = new URL(link);
    const host = url.hostname.replace(/^www\./, "");

    if (host === "awin1.com") {
      return link;
    }

    if (host === "coolblue.nl" || host.endsWith(".coolblue.nl")) {
      return `https://www.awin1.com/cread.php?awinmid=${AWIN_MID}&awinaffid=${AWIN_AFFID}&ued=${encodeURIComponent(link)}`;
    }
  } catch {
    return link;
  }

  return link;
}
