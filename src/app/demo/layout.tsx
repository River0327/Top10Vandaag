import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { DM_Sans, Fraunces, Outfit, Playfair_Display, Space_Grotesk, Syne } from "next/font/google";
import DemoChrome from "./DemoChrome";
import DemoSwitcher from "./DemoSwitcher";
import "./demo.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-demo-serif",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-demo-sans",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-demo-display",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-demo-body",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-demo-headline",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-demo-tech",
});

export const metadata: Metadata = createMetadata({
  title: "Homepage designs",
  description: "Interne designvarianten. Deze pagina is niet bedoeld voor zoekmachines.",
  path: "/demo",
  noIndex: true,
});

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`demo-root ${playfair.variable} ${outfit.variable} ${fraunces.variable} ${dmSans.variable} ${syne.variable} ${spaceGrotesk.variable}`}
    >
      <DemoChrome />
      {children}
      <DemoSwitcher />
    </div>
  );
}
