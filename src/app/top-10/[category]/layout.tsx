import type { Metadata } from "next";
import { categorySlugs, getCategory } from "@/data/categories";
import { breadcrumbJsonLd, createMetadata, faqJsonLd, itemListJsonLd, webPageJsonLd } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";

type Props = {
  children: React.ReactNode;
  params: { category: string };
};

export function generateStaticParams() {
  return categorySlugs.map((category) => ({ category }));
}

export async function generateMetadata({ params }: { params: { category: string } }): Promise<Metadata> {
  const category = getCategory(params.category);

  if (!category) {
    return createMetadata({
      title: "Categorie niet gevonden",
      path: `/top-10/${params.category}`,
      noIndex: true,
    });
  }

  return createMetadata({
    title: category.seoTitle,
    description: category.description,
    path: `/top-10/${params.category}`,
    keywords: [...category.keywords, category.question],
  });
}

export default function CategoryLayout({ children, params }: Props) {
  const category = getCategory(params.category);

  if (!category) return children;

  const path = `/top-10/${params.category}`;

  const schema = [
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: category.title, path },
    ]),
    webPageJsonLd({
      name: category.seoTitle,
      description: category.description,
      path,
      type: "CollectionPage",
    }),
    itemListJsonLd({
      name: category.seoTitle,
      description: category.description,
      path,
      items: category.subcategories.map((sub) => ({
        name: sub.name,
        image: sub.image,
        url: `${path}/${sub.slug}`,
      })),
    }),
  ];
  const faq = faqJsonLd(category.faqs);

  return (
    <>
      <JsonLd data={faq ? [...schema, faq] : schema} />
      {children}
    </>
  );
}
