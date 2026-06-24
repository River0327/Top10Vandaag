import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Koopgidsen & advies",
  description:
    "Eerst begrijpen, dan kiezen. Onze koopgidsen helpen je de juiste tech en elektronica te vinden, met links naar actuele Top 10 lijsten.",
  path: "/gidsen",
  keywords: ["koopgids", "advies", "gaming", "smartphone", "tv", "laptop"],
});

export default function GidsenLayout({ children }: { children: React.ReactNode }) {
  return children;
}
