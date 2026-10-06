import type { Metadata } from "next";
import type { ReactNode } from "react";
import JsonLd from "../components/JsonLd";
import SiteFooter from "../components/SiteFooter";
import { organizationJsonLd, websiteJsonLd } from "../lib/seo";
import { getSiteUrl, SITE_DESCRIPTION, SITE_NAME } from "../lib/site";
import { Space_Grotesk, Syne } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: `${SITE_NAME} | Top 10 beste telefoons, laptops en tv's`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: getSiteUrl() }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "technology",
  keywords: [
    "Top 10 Vandaag",
    "Top10Vandaag",
    "top 10 vandaag",
    "top 10 beste telefoons",
    "top 10 beste laptops",
    "top 10 beste tv",
    "koopgids",
    "Bol.com",
    "Coolblue",
    "Nederland",
  ],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Top 10 beste telefoons, laptops en tv's`,
    description: SITE_DESCRIPTION,
    url: getSiteUrl(),
  },
  twitter: {
    card: "summary_large_image",
    site: "@Top10Vandaag",
    creator: "@Top10Vandaag",
    title: `${SITE_NAME} | Top 10 beste telefoons, laptops en tv's`,
    description: SITE_DESCRIPTION,
  },
  icons: {
    icon: "/logo-icon.svg",
    apple: "/logo-icon.svg",
    shortcut: "/logo-icon.svg",
  },
  other: {
    "theme-color": "#05070f",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="nl-NL">
      <body className={`${spaceGrotesk.className} ${spaceGrotesk.variable} ${syne.variable} bg-[#05070f] text-slate-100`}>
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
