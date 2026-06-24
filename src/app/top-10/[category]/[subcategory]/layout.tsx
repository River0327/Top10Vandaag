import type { Metadata } from "next";
import { getCategory } from "@/data/categories";
import { getSubcategorySeo } from "@/data/subcategorySeo";
import { breadcrumbJsonLd, createMetadata, webPageJsonLd } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";

type Props = {
  children: React.ReactNode;
  params: { category: string; subcategory: string };
};

export async function generateMetadata({
  params,
}: {
  params: { category: string; subcategory: string };
}): Promise<Metadata> {
  const seo = getSubcategorySeo(params.subcategory);

  if (!seo) {
    return createMetadata({
      title: "Subcategorie niet gevonden",
      path: `/top-10/${params.category}/${params.subcategory}`,
      noIndex: true,
    });
  }

  return createMetadata({
    title: seo.title,
    description: seo.description,
    path: `/top-10/${params.category}/${params.subcategory}`,
    keywords: [seo.title, "top 10", "vergelijking", "Bol.com", "Coolblue"],
  });
}

export default function SubcategoryLayout({ children, params }: Props) {
  const seo = getSubcategorySeo(params.subcategory);
  const category = getCategory(params.category);

  if (!seo || !category) return children;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: category.title, path: `/top-10/${params.category}` },
            { name: seo.title, path: `/top-10/${params.category}/${params.subcategory}` },
          ]),
          webPageJsonLd({
            name: seo.title,
            description: seo.description,
            path: `/top-10/${params.category}/${params.subcategory}`,
          }),
        ]}
      />
      {children}
    </>
  );
}
