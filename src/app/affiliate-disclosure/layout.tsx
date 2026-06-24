import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Affiliate disclosure",
  description:
    "Hoe Top 10 Vandaag affiliate links gebruikt. Transparantie over commissies via Bol.com, Coolblue en andere partners.",
  path: "/affiliate-disclosure",
});

export default function AffiliateDisclosureLayout({ children }: { children: React.ReactNode }) {
  return children;
}
