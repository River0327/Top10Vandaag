import "server-only";

import { unstable_cache } from "next/cache";
import {
  buildBolProductUrlFromId,
  createBolAffiliateUrl,
} from "./affiliate";
import { getBolAccessToken } from "./auth";
import { bolCatalogFetch } from "./client";
import {
  BOL_EAN_CACHE_SECONDS,
  BOL_PRODUCT_CACHE_SECONDS,
} from "./config";
import type {
  BolBestOfferResponse,
  BolCatalogProduct,
  BolProductData,
  BolToEanResponse,
} from "./types";

async function fetchBolEanFromProductId(
  bolProductId: string
): Promise<string | null> {
  const data = await bolCatalogFetch<BolToEanResponse>(
    `/products/${encodeURIComponent(bolProductId)}/to-ean`,
    { revalidate: BOL_EAN_CACHE_SECONDS }
  );
  return data?.ean ?? null;
}

export async function getBolEanFromProductId(
  bolProductId: string
): Promise<string | null> {
  const token = await getBolAccessToken();
  if (!token) {
    return fetchBolEanFromProductId(bolProductId);
  }

  return unstable_cache(
    () => fetchBolEanFromProductId(bolProductId),
    [`bol-ean-v2-${bolProductId}`],
    { revalidate: BOL_EAN_CACHE_SECONDS }
  )();
}

async function fetchBolCatalogProduct(
  ean: string
): Promise<BolCatalogProduct | null> {
  return bolCatalogFetch<BolCatalogProduct>(
    `/products/${encodeURIComponent(ean)}`,
    {
      revalidate: BOL_PRODUCT_CACHE_SECONDS,
      searchParams: {
        "country-code": "NL",
        "include-offer": "true",
        "include-image": "true",
        "include-rating": "true",
      },
    }
  );
}

async function fetchBolBestOffer(
  ean: string
): Promise<BolBestOfferResponse | null> {
  return bolCatalogFetch<BolBestOfferResponse>(
    `/products/${encodeURIComponent(ean)}/offers/best`,
    {
      revalidate: BOL_PRODUCT_CACHE_SECONDS,
      searchParams: {
        "country-code": "NL",
      },
    }
  );
}

function mapToBolProductData(
  bolProductId: string,
  ean: string | null,
  product: BolCatalogProduct | null,
  bestOffer: BolBestOfferResponse | null
): BolProductData {
  const title = product?.title ?? null;
  const productUrl =
    product?.url ?? bestOffer?.url ?? buildBolProductUrlFromId(bolProductId);
  const price = bestOffer?.price ?? product?.offer?.price ?? null;
  const strikethroughPrice =
    bestOffer?.strikethroughPrice ?? product?.offer?.strikethroughPrice ?? null;
  const availability =
    bestOffer?.deliveryDescription ??
    product?.offer?.deliveryDescription ??
    null;
  const image = product?.image?.url ?? null;
  const rating = product?.rating ?? null;

  const affiliateUrl =
    productUrl && title
      ? createBolAffiliateUrl(productUrl, title)
      : productUrl
        ? createBolAffiliateUrl(productUrl, `Product ${bolProductId}`)
        : null;

  return {
    bolProductId,
    ean,
    title,
    price,
    strikethroughPrice,
    availability,
    image,
    rating,
    productUrl,
    affiliateUrl,
  };
}

async function fetchBolProductData(
  bolProductId: string
): Promise<BolProductData | null> {
  const ean = await getBolEanFromProductId(bolProductId);
  if (!ean) {
    const fallbackUrl = buildBolProductUrlFromId(bolProductId);
    return {
      bolProductId,
      ean: null,
      title: null,
      price: null,
      strikethroughPrice: null,
      availability: null,
      image: null,
      rating: null,
      productUrl: fallbackUrl,
      affiliateUrl: createBolAffiliateUrl(fallbackUrl, `Product ${bolProductId}`),
    };
  }

  const [product, bestOffer] = await Promise.all([
    fetchBolCatalogProduct(ean),
    fetchBolBestOffer(ean),
  ]);

  return mapToBolProductData(bolProductId, ean, product, bestOffer);
}

export async function getBolProductData(
  bolProductId: string
): Promise<BolProductData | null> {
  const token = await getBolAccessToken();
  if (!token) {
    return fetchBolProductData(bolProductId);
  }

  return unstable_cache(
    () => fetchBolProductData(bolProductId),
    [`bol-product-data-v2-${bolProductId}`],
    { revalidate: BOL_PRODUCT_CACHE_SECONDS }
  )();
}

export async function getBolProducts(
  bolProductIds: string[]
): Promise<Record<string, BolProductData | null>> {
  const uniqueIds = Array.from(new Set(bolProductIds.filter(Boolean)));
  const entries = await Promise.all(
    uniqueIds.map(async (bolProductId) => {
      try {
        const product = await getBolProductData(bolProductId);
        return [bolProductId, product] as const;
      } catch (error) {
        console.error("[bol] Failed to load product", bolProductId, error);
        return [bolProductId, null] as const;
      }
    })
  );

  return Object.fromEntries(entries);
}
