import HomePage from "./HomePage";
import { createMetadata } from "@/lib/seo";
import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/site";

export const metadata = createMetadata({
  title: `${SITE_NAME} – Top 10 lijsten & koopgidsen voor tech`,
  description: SITE_DESCRIPTION,
  path: "/",
  keywords: [
    "top 10",
    "vergelijkingssite",
    "smartphone",
    "laptop",
    "gaming",
    "tv",
    "koopgids",
    "Nederland",
    "Bol.com",
    "Coolblue",
  ],
});

export default function Page() {
  return <HomePage />;
}
