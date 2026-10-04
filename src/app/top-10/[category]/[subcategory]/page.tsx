import SubcategoryPageClient from "./SubcategoryPageClient";
import { subcategoryData } from "@/data/subcategoryProducts";
import {
  collectBolProductIdsFromSubcategory,
  enrichSubcategoryData,
  getBolProducts,
} from "@/lib/bol";

export default async function SubcategoryPage({
  params,
}: {
  params: { category: string; subcategory: string };
}) {
  const rawData = subcategoryData[params.subcategory];

  if (!rawData) {
    return <SubcategoryPageClient params={params} data={null} />;
  }

  const bolProductIds = collectBolProductIdsFromSubcategory(rawData);
  const bolDataMap =
    bolProductIds.length > 0 ? await getBolProducts(bolProductIds) : {};

  const data = enrichSubcategoryData(rawData, bolDataMap);

  return <SubcategoryPageClient params={params} data={data} />;
}
