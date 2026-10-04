import Link from "next/link";
import { layoutDemos } from "./catalog";

export default function LayoutChooserPage() {
  return (
    <main className="min-h-screen bg-[#0e0e10] pb-28 text-[#ece7df]">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-xs uppercase tracking-[0.3em] text-[#c4b49a]">Intern · 10 layouts</p>
        <h1 className="font-display mt-3 max-w-2xl text-4xl leading-tight sm:text-5xl">
          Tien homepage-structuren.
          <span className="block text-white/40">Zelfde merk, andere indeling.</span>
        </h1>
        <p className="mt-4 max-w-xl text-white/50">
          Open een nummer, kijk of het overzichtelijk voelt op pc, en wissel onderaan. De live homepage blijft
          ongewijzigd tot je een keuze maakt.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {layoutDemos.map((layout) => (
            <Link
              key={layout.slug}
              href={`/demo/layouts/${layout.slug}`}
              className="rounded-2xl border border-white/10 bg-[#161618] p-5 transition hover:border-[#c4b49a]/40"
            >
              <p className="text-xs uppercase tracking-[0.22em] text-[#c4b49a]">
                {layout.slug} · {layout.tag}
              </p>
              <h2 className="font-display mt-3 text-2xl">{layout.name}</h2>
              <p className="mt-2 text-sm leading-relaxed text-white/45">{layout.blurb}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
