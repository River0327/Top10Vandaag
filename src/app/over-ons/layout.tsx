import type { Metadata } from "next";
import { createMetadata, webPageJsonLd } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";

const TITLE = "Over Top 10 Vandaag (Top10Vandaag)";
const DESCRIPTION =
  "Top 10 Vandaag, ook Top10Vandaag, is de Nederlandse site voor de top 10 beste telefoons, laptops en tv's. Zo stellen we onze lijsten samen.";
const PATH = "/over-ons";

export const metadata: Metadata = createMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: ["Top 10 Vandaag", "Top10Vandaag", "top 10 vandaag", "over ons", "vergelijkingssite"],
});

export default function OverOnsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={webPageJsonLd({
          name: TITLE,
          description: DESCRIPTION,
          path: PATH,
          type: "AboutPage",
        })}
      />
      {children}
    </>
  );
}
