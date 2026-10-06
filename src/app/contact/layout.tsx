import type { Metadata } from "next";
import { createMetadata, webPageJsonLd } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";

const TITLE = "Contact";
const DESCRIPTION =
  "Neem contact op met Top 10 Vandaag voor vragen, producttips of correcties op onze Top 10-lijsten en koopgidsen.";
const PATH = "/contact";

export const metadata: Metadata = createMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: ["contact", "Top 10 Vandaag", "feedback"],
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={webPageJsonLd({
          name: TITLE,
          description: DESCRIPTION,
          path: PATH,
          type: "ContactPage",
        })}
      />
      {children}
    </>
  );
}
