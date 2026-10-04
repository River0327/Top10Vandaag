import "./globals.css";
import type { Metadata } from "next";
import { Space_Grotesk, Syne } from "next/font/google";
import SiteFooter from "../components/SiteFooter";
import JsonLd from "../components/JsonLd";
import { organizationJsonLd, websiteJsonLd } from "../lib/seo";
import { getSiteUrl, SITE_DESCRIPTION, SITE_NAME } from "../lib/site";

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
    default: `${SITE_NAME} – Top 10 lijsten & koopgidsen`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: getSiteUrl(),
    images: [{ url: "/logo.svg", width: 280, height: 64, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Top10Vandaag",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
  icons: {
    icon: "/logo-icon.svg",
    apple: "/logo-icon.svg",
    shortcut: "/logo-icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <body className={`${spaceGrotesk.className} ${spaceGrotesk.variable} ${syne.variable} bg-[#05070f] text-slate-100`}>
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
