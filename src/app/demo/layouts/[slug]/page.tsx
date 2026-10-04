import { notFound } from "next/navigation";
import LayoutFrame from "../LayoutFrame";
import { layoutDemos, type LayoutSlug } from "../catalog";

export function generateStaticParams() {
  return layoutDemos.map((layout) => ({ slug: layout.slug }));
}

export default function LayoutDemoPage({ params }: { params: { slug: string } }) {
  const match = layoutDemos.find((layout) => layout.slug === params.slug);
  if (!match) notFound();
  return <LayoutFrame slug={match.slug as LayoutSlug} />;
}
