import type { Metadata } from "next";
import { createMetadata, itemListJsonLd, webPageJsonLd } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";

const TITLE = "Trending tech van 2026";
const DESCRIPTION =
  "De populairste tech van dit moment: iPhone 17 Pro Max, OLED-tv's, koptelefoons en gaming-muizen. Met actuele prijzen bij Bol.com en Coolblue.";
const PATH = "/trending";

export const metadata: Metadata = createMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: ["trending tech", "populair 2026", "iPhone 17 Pro Max", "OLED tv", "koptelefoon", "gaming muis"],
});

export default function TrendingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            name: TITLE,
            description: DESCRIPTION,
            path: PATH,
          }),
          itemListJsonLd({
            name: TITLE,
            description: DESCRIPTION,
            path: PATH,
            items: [
              { name: "Sony WH-1000XM5", url: PATH, image: "/images/headsets/01-sony-xm5.png" },
              { name: "Logitech G Pro X Superlight 2", url: PATH, image: "/images/mice/03-g-pro-x-superlight-2.png" },
              { name: "LG OLED evo C5", url: PATH, image: "/images/tvs/01-lg-oled-evo-c5.png" },
              { name: "Apple iPhone 17 Pro Max", url: PATH, image: "/images/iphone/iph_1.png" },
              { name: "Logitech MX Mechanical", url: PATH, image: "/images/keyboards/01-mx-mechanical.png" },
              { name: "Samsung S95F OLED", url: PATH, image: "/images/tvs/07-samsung-s95f.png" },
            ],
          }),
        ]}
      />
      {children}
    </>
  );
}
