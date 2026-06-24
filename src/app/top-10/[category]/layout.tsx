import type { Metadata } from "next";
import { getCategory } from "@/data/categories";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";

type Props = {
  children: React.ReactNode;
  params: { category: string };
};

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
    title: `Top 10 ${category.title}`,
    description: `${category.description} Bekijk onze Top 10 lijsten per subcategorie met voor- en nadelen en links naar Bol.com en Coolblue.`,
    path: `/top-10/${params.category}`,
    keywords: [category.title, "top 10", "vergelijking", "koopgids"],
  });
}

export default function CategoryLayout({ children, params }: Props) {
  const category = getCategory(params.category);

  if (!category) return children;

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: category.title, path: `/top-10/${params.category}` },
        ])}
      />
      {children}
    </>
  );
}
