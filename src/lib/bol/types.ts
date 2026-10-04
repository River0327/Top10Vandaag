export interface BolTokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
}

export interface BolToEanResponse {
  ean: string;
}

export interface BolProductOffer {
  price: number;
  strikethroughPrice?: number;
  deliveryDescription?: string;
}

export interface BolProductImage {
  mimeType: string;
  width: number;
  height: number;
  url: string;
}

export interface BolCatalogProduct {
  ean: string;
  bolProductId: number;
  title: string;
  description?: string;
  url: string;
  image?: BolProductImage;
  rating?: number;
  offer?: BolProductOffer;
}

export interface BolBestOfferResponse {
  ean: string;
  countryCode: "NL" | "BE";
  condition?: string;
  isPreOrder?: boolean;
  price: number;
  strikethroughPrice?: number;
  deliveryDescription?: string;
  url?: string;
}

export interface BolProductData {
  bolProductId: string;
  ean: string | null;
  title: string | null;
  price: number | null;
  strikethroughPrice: number | null;
  availability: string | null;
  image: string | null;
  rating: number | null;
  productUrl: string | null;
  affiliateUrl: string | null;
}

export interface EnrichedStore {
  name: string;
  link: string;
  priceLabel?: string;
  priceFallback?: string;
  availability?: string;
}

export interface EnrichedProduct {
  name: string;
  description: string;
  rating: number;
  image: string;
  pros: string[];
  cons: string[];
  stores: EnrichedStore[];
}

export interface EnrichedSubcategoryData {
  title: string;
  description: string;
  products: EnrichedProduct[];
}

export interface BolApiErrorBody {
  title?: string;
  detail?: string;
  status?: number;
}
