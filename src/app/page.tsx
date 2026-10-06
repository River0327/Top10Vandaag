import HomePage from "./HomePage";
import JsonLd from "../components/JsonLd";
import { createMetadata, faqJsonLd } from "@/lib/seo";
import { SITE_DESCRIPTION } from "@/lib/site";
import { homeFaqs } from "@/data/home";

export const metadata = createMetadata({
  title: "Top 10 Vandaag | Wat is de beste telefoon, laptop of tv?",
  description: SITE_DESCRIPTION,
  path: "/",
  keywords: [
    "Top 10 Vandaag",
    "Top10Vandaag",
    "wat is de beste telefoon",
    "wat is de beste laptop",
    "wat is de beste tv",
    "welke telefoon kopen",
    "top 10 beste telefoons",
    "Bol.com",
    "Coolblue",
  ],
});

export default function Page() {
  const faq = faqJsonLd(homeFaqs);
  return (
    <>
      {faq && <JsonLd data={faq} />}
      <HomePage />
    </>
  );
}
