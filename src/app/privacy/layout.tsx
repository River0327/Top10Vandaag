import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Privacybeleid",
  description:
    "Privacybeleid van Top 10 Vandaag: hoe we omgaan met gegevens, cookies en analytics op onze Nederlandse vergelijkingssite.",
  path: "/privacy",
});

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
