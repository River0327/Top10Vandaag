import { writeFileSync } from "fs";
import { join } from "path";
import { subcategoryData } from "../src/data/subcategoryProducts";
import { subcategorySeo } from "../src/data/subcategorySeo";
import { categoryData } from "../src/data/categories";

const base = "https://www.top10vandaag.nl";
const lines: string[] = [];

lines.push("TOP 10 VANDAAG - ALLE TOP 10 LIJSTEN");
lines.push(`Gegenereerd: ${new Date().toISOString().slice(0, 10)}`);
lines.push("=".repeat(80));
lines.push("");

for (const slug of Object.keys(subcategorySeo)) {
  const seo = subcategorySeo[slug];
  const data = subcategoryData[slug];
  if (!data) continue;

  const catTitle = categoryData[seo.category]?.title ?? seo.category;
  const pageUrl = `${base}/top-10/${seo.category}/${slug}`;

  lines.push(`LIJST: ${data.title}`);
  lines.push(`Categorie: ${catTitle}`);
  lines.push(`Pagina: ${pageUrl}`);
  lines.push("-".repeat(80));

  data.products.forEach((product, index) => {
    lines.push("");
    lines.push(`${index + 1}. ${product.name ?? "Product"}`);

    if (product.stores.length === 0) {
      lines.push("   (geen winkels)");
      return;
    }

    for (const store of product.stores) {
      const link =
        store.link ??
        (store.bolProductId ? `Bol product ID: ${store.bolProductId}` : "-");
      const price = store.approxPrice ? ` [${store.approxPrice}]` : "";
      lines.push(`   - ${store.name}${price}`);
      lines.push(`     ${link}`);
    }
  });

  lines.push("");
  lines.push("=".repeat(80));
  lines.push("");
}

const outPath = join(process.cwd(), "top-10-overzicht.txt");
writeFileSync(outPath, lines.join("\n"), "utf-8");
console.log(`Written: ${outPath}`);
