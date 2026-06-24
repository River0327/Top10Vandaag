import type { Metadata } from "next";
import { getSiteUrl, SITE_DESCRIPTION, SITE_LOCALE, SITE_NAME } from "./site";

type PageMetadataOptions = {
  title: string;
  description?: string;
  path?: string;
  keywords?: string[];
  noIndex?: boolean;
  type?: "website" | "article";
  publishedTime?: string;
};

export function createMetadata({
  title,
  description = SITE_DESCRIPTION,
  path = "",
  keywords,
  noIndex = false,
  type = "website",
  publishedTime,
}: PageMetadataOptions): Metadata {
  const url = `${getSiteUrl()}${path}`;
  const fullTitle = path === "" || path === "/" ? title : `${title} | ${SITE_NAME}`;

  return {
    title: fullTitle,
    description,
    keywords,
    metadataBase: new URL(getSiteUrl()),
    alternates: {
      canonical: url,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
    openGraph: {
      type,
      locale: SITE_LOCALE,
      url,
      siteName: SITE_NAME,
      title: fullTitle,
      description,
      ...(publishedTime && type === "article" ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      site: "@Top10Vandaag",
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${getSiteUrl()}${item.path}`,
    })),
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: getSiteUrl(),
    logo: `${getSiteUrl()}/logo.svg`,
    email: "Top10Vandaag@hotmail.com",
    sameAs: ["https://twitter.com/Top10Vandaag"],
    description: SITE_DESCRIPTION,
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: getSiteUrl(),
    description: SITE_DESCRIPTION,
    inLanguage: "nl-NL",
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
    },
  };
}

export function articleJsonLd({
  title,
  description,
  path,
  publishedAt,
}: {
  title: string;
  description: string;
  path: string;
  publishedAt: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    inLanguage: "nl-NL",
    datePublished: publishedAt,
    dateModified: publishedAt,
    author: {
      "@type": "Organization",
      name: SITE_NAME,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
    },
    mainEntityOfPage: `${getSiteUrl()}${path}`,
  };
}

export function webPageJsonLd({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url: `${getSiteUrl()}${path}`,
    inLanguage: "nl-NL",
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: getSiteUrl(),
    },
  };
}
