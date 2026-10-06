import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Affiliate disclosure",
  description:
    "Transparantie over affiliate links op Top 10 Vandaag. We kunnen commissie ontvangen via Bol.com, Coolblue en andere partners, zonder extra kosten voor jou.",
  path: "/affiliate-disclosure",
});

export default function AffiliateDisclosureLayout({ children }: { children: React.ReactNode }) {
  return children;
}
