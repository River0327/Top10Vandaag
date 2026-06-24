import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Over ons",
  description:
    "Top 10 Vandaag is een Nederlandse vergelijkingssite voor tech en elektronica. Lees hoe wij Top 10 lijsten en koopgidsen samenstellen.",
  path: "/over-ons",
});

export default function OverOnsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
