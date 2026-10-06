import type { Metadata } from "next";
import { getCategory } from "@/data/categories";
import { subcategoryData } from "@/data/subcategoryProducts";
import { getSubcategorySeo, subcategorySlugs, subcategorySeo } from "@/data/subcategorySeo";
import { breadcrumbJsonLd, createMetadata, faqJsonLd, itemListJsonLd, webPageJsonLd } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";

type Props = {
  children: React.ReactNode;
  params: { category: string; subcategory: string };
};

export function generateStaticParams() {
  return subcategorySlugs.map((subcategory) => ({
    category: subcategorySeo[subcategory].category,
    subcategory,
  }));
}

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
    keywords: [...seo.keywords, seo.question],
  });
}

export default function SubcategoryLayout({ children, params }: Props) {
  const seo = getSubcategorySeo(params.subcategory);
  const category = getCategory(params.category);
  const products = subcategoryData[params.subcategory]?.products ?? [];

  if (!seo || !category) return children;

  const path = `/top-10/${params.category}/${params.subcategory}`;

  const schema = [
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: category.title, path: `/top-10/${params.category}` },
      { name: seo.question, path },
    ]),
    webPageJsonLd({
      name: seo.title,
      description: seo.description,
      path,
      type: "CollectionPage",
    }),
    itemListJsonLd({
      name: seo.title,
      description: seo.description,
      path,
      items: products
        .filter((product) => product.name)
        .map((product) => ({
          name: product.name as string,
          image: product.image,
          url: path,
        })),
    }),
  ];
  const faq = faqJsonLd(seo.faqs);

  return (
    <>
      <JsonLd data={faq ? [...schema, faq] : schema} />
      {children}
    </>
  );
}
