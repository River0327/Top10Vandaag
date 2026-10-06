import type { Metadata } from "next";
import { guides } from "@/data/guides";
import { articleJsonLd, breadcrumbJsonLd, createMetadata, faqJsonLd } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";

type Props = {
  children: React.ReactNode;
  params: { slug: string };
};

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

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
    keywords: [guide.category, "koopgids", "vergelijken", "Nederland", ...guide.title.split(" ").slice(0, 4)],
    type: "article",
    publishedTime: guide.publishedAt,
    modifiedTime: guide.updatedAt ?? guide.publishedAt,
  });
}

export default function GuideLayout({ children, params }: Props) {
  const guide = guides.find((g) => g.slug === params.slug);

  if (!guide) return children;

  const faq = faqJsonLd(guide.faqs);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Koopgidsen", path: "/gidsen" },
            { name: guide.title, path: `/gidsen/${guide.slug}` },
          ]),
          articleJsonLd({
            title: guide.title,
            description: guide.excerpt,
            path: `/gidsen/${guide.slug}`,
            publishedAt: guide.publishedAt,
            modifiedAt: guide.updatedAt ?? guide.publishedAt,
          }),
          ...(faq ? [faq] : []),
        ]}
      />
      {children}
    </>
  );
}
