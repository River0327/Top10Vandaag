import type { Product, SubcategoryData } from "@/data/subcategoryProducts";
import { toCoolblueAffiliateUrl } from "@/lib/coolblue";
import { toBolAffiliateUrl } from "./affiliate";
import { formatApproxPrice, formatBolCurrency, getBolPriceFallback } from "./format";
import type {
  BolProductData,
  EnrichedProduct,
  EnrichedStore,
  EnrichedSubcategoryData,
} from "./types";

function hasUsableStoreLink(link?: string): boolean {
  return Boolean(link && link !== "#");
}

function bolSearchUrl(productName: string): string {
  return `https://www.bol.com/nl/nl/s/?searchtext=${encodeURIComponent(productName)}`;
}

function coolblueSearchUrl(productName: string): string {
  return `https://www.coolblue.nl/zoeken?query=${encodeURIComponent(productName)}`;
}

function enrichStore(
  store: Product["stores"][number],
  bolData: BolProductData | null | undefined,
  productName: string
): EnrichedStore | null {
  if (store.name !== "Bol.com" && store.name !== "Coolblue") {
    return null;
  }

  if (store.name === "Bol.com") {
    const priceLabel =
      store.bolProductId && bolData?.price != null
        ? formatBolCurrency(bolData.price) ?? undefined
        : formatApproxPrice(store.approxPrice);

    return {
      name: store.name,
      link: toBolAffiliateUrl({
        link: hasUsableStoreLink(store.link) ? store.link : bolSearchUrl(productName),
        productName,
        bolProductId: store.bolProductId,
        affiliateUrl: store.bolProductId ? bolData?.affiliateUrl : null,
        productUrl: store.bolProductId ? bolData?.productUrl : null,
      }),
      priceLabel,
      priceFallback: store.bolProductId
        ? getBolPriceFallback(Boolean(priceLabel))
        : undefined,
      availability: store.bolProductId ? bolData?.availability ?? undefined : undefined,
    };
  }

  return {
    name: store.name,
    link: toCoolblueAffiliateUrl(
      hasUsableStoreLink(store.link) ? store.link : coolblueSearchUrl(productName)
    ),
    priceLabel: formatApproxPrice(store.approxPrice),
    priceFallback: undefined,
  };
}

export function enrichProduct(
  product: Product,
  bolDataMap: Record<string, BolProductData | null>
): EnrichedProduct {
  const bolStore = product.stores.find((store) => store.bolProductId);
  const bolData = bolStore?.bolProductId
    ? bolDataMap[bolStore.bolProductId]
    : null;

  const image =
    product.image?.startsWith("/images/")
      ? product.image
      : bolData?.image ?? product.image ?? "";

  return {
    name: bolData?.title ?? product.name ?? "Product",
    description: product.description ?? "",
    rating: bolData?.rating ?? product.rating ?? 0,
    image,
    pros: product.pros,
    cons: product.cons,
    stores: product.stores
      .map((store) =>
        enrichStore(
          store,
          store.bolProductId ? bolDataMap[store.bolProductId] : null,
          bolData?.title ?? product.name ?? "Product"
        )
      )
      .filter((store): store is EnrichedStore => store != null),
  };
}

export function enrichSubcategoryData(
  data: SubcategoryData,
  bolDataMap: Record<string, BolProductData | null>
): EnrichedSubcategoryData {
  return {
    title: data.title,
    description: data.description,
    products: data.products.map((product) => enrichProduct(product, bolDataMap)),
  };
}

export function collectBolProductIdsFromSubcategory(
  data: SubcategoryData
): string[] {
  const ids = new Set<string>();
  for (const product of data.products) {
    for (const store of product.stores) {
      if (store.bolProductId) ids.add(store.bolProductId);
    }
  }
  return Array.from(ids);
}
