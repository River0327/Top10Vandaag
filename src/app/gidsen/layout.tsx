import type { Metadata } from "next";
import { createMetadata, itemListJsonLd, webPageJsonLd } from "@/lib/seo";
import { guides } from "@/data/guides";
import JsonLd from "@/components/JsonLd";

const TITLE = "Koopgidsen voor tech";
const DESCRIPTION =
  "Eerst begrijpen, dan kopen. Koopgidsen voor smartphones, tv's, laptops en gaming accessoires, met links naar actuele Top 10-lijsten.";
const PATH = "/gidsen";

export const metadata: Metadata = createMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: ["koopgids", "tech advies", "smartphone kiezen", "OLED vs QLED", "gaming muis", "laptop vs desktop"],
});

export default function GidsenLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            name: TITLE,
            description: DESCRIPTION,
            path: PATH,
            type: "CollectionPage",
          }),
          itemListJsonLd({
            name: TITLE,
            description: DESCRIPTION,
            path: PATH,
            items: guides.map((guide) => ({
              name: guide.title,
              url: `/gidsen/${guide.slug}`,
            })),
          }),
        ]}
      />
      {children}
    </>
  );
}
