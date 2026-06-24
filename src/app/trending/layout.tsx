import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Trending producten",
  description:
    "De populairste tech en elektronica op Top 10 Vandaag. Bekijk trending producten met links naar onze Top 10 lijsten en retailers.",
  path: "/trending",
  keywords: ["trending", "populair", "tech", "elektronica", "top 10"],
});

export default function TrendingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
