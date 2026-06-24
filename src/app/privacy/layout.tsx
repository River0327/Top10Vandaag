import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Privacybeleid",
  description: "Privacybeleid van Top 10 Vandaag. Lees hoe wij omgaan met gegevens en cookies op onze vergelijkingssite.",
  path: "/privacy",
});

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
