import type { Metadata } from "next";
import { guides } from "@/data/guides";
import { articleJsonLd, breadcrumbJsonLd, createMetadata } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";

type Props = {
  children: React.ReactNode;
  params: { slug: string };
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const guide = guides.find((g) => g.slug === params.slug);

  if (!guide) {
    return createMetadata({
      title: "Gids niet gevonden",
      path: `/gidsen/${params.slug}`,
      noIndex: true,
    });
  }

  return createMetadata({
    title: guide.title,
    description: guide.excerpt,
    path: `/gidsen/${guide.slug}`,
    keywords: [guide.category, "koopgids", "top 10", "vergelijking"],
    type: "article",
    publishedTime: guide.publishedAt,
  });
}

export default function GuideLayout({ children, params }: Props) {
  const guide = guides.find((g) => g.slug === params.slug);

  if (!guide) return children;

  const faqJsonLd =
    guide.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: guide.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Gidsen", path: "/gidsen" },
            { name: guide.title, path: `/gidsen/${guide.slug}` },
          ]),
          articleJsonLd({
            title: guide.title,
            description: guide.excerpt,
            path: `/gidsen/${guide.slug}`,
            publishedAt: guide.publishedAt,
          }),
          ...(faqJsonLd ? [faqJsonLd] : []),
        ]}
      />
      {children}
    </>
  );
}
