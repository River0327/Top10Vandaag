"use client";

import Link from "next/link";
import Navigation from "../components/Navigation";
import { homeCategories, homeGuides, homePicks } from "@/data/home";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#05070f] pb-10 text-slate-100">
      <div className="pointer-events-none absolute -left-24 top-0 h-80 w-80 rounded-full bg-[#3b5bff]/25 blur-[110px]" />
      <div className="pointer-events-none absolute right-0 top-24 h-72 w-72 rounded-full bg-[#ff7a3d]/18 blur-[100px]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <Navigation />

      <div className="relative mx-auto max-w-6xl px-5 pt-24 sm:px-8">
        <section className="flex flex-col gap-5 py-7 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-[#ffb089]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#ff7a3d]" />
              Actuele lijsten
            </div>
            <h1 className="font-display max-w-3xl text-3xl font-bold uppercase leading-[0.95] tracking-tight text-white sm:text-4xl lg:text-5xl">
              Gerangschikt op populariteit
            </h1>
            <p className="mt-3 max-w-md text-sm text-white/55">
              Top 10-lijsten voor smartphones, schermen, computers en accessoires.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="#categorieen"
              className="rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-black hover:bg-slate-200"
            >
              Categorieën
            </Link>
            <Link
              href="/gidsen"
              className="rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 text-sm hover:bg-white/10"
            >
              Gidsen
            </Link>
          </div>
        </section>

        <section id="categorieen" className="pb-8">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {homeCategories.map((category) => (
              <Link
                key={category.id}
                href={category.link}
                className="group relative block aspect-[16/10] overflow-hidden rounded-3xl border border-white/10 touch-manipulation"
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="absolute inset-0 h-full w-full object-cover opacity-70 transition duration-500 group-hover:scale-[1.04] group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05070f] via-[#05070f]/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#ff7a3d]">
                    {category.kicker}
                  </p>
                  <h2 className="font-display mt-1 text-2xl font-bold uppercase leading-tight sm:text-3xl">
                    {category.title}
                  </h2>
                  <p className="mt-1 hidden text-sm text-white/60 sm:block">{category.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="grid gap-4 pb-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur">
            <div className="mb-3 flex items-center justify-between px-1">
              <h2 className="font-display text-sm font-bold uppercase tracking-wide">Featured stack</h2>
              <Link href="/trending" className="text-xs font-semibold uppercase tracking-wider text-[#ff7a3d]">
                Trending →
              </Link>
            </div>
            <div className="space-y-2">
              {homePicks.map((pick) => (
                <Link
                  key={pick.name}
                  href={pick.href}
                  className="flex items-center gap-3 rounded-2xl border border-white/5 bg-black/30 p-3 transition hover:border-[#ff7a3d]/40"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-black">
                    <img src={pick.image} alt="" className="max-h-10 object-contain" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] uppercase tracking-[0.18em] text-[#8da2ff]">
                      {pick.rank} · {pick.category}
                    </p>
                    <h3 className="truncate font-semibold">{pick.name}</h3>
                  </div>
                  <span className="text-sm text-white/50">{pick.price}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#11183a] to-[#05070f] p-5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8da2ff]">Guides</p>
            <h2 className="font-display mt-2 text-xl font-bold uppercase">Eerst de specs.</h2>
            <div className="mt-4 space-y-3">
              {homeGuides.map((guide) => (
                <Link key={guide.href} href={guide.href} className="block border-t border-white/10 pt-3">
                  <p className="text-[11px] text-[#ffb089]">
                    {guide.category} · {guide.readTime}
                  </p>
                  <h3 className="mt-1 text-sm font-medium leading-snug">{guide.title}</h3>
                </Link>
              ))}
            </div>
            <Link href="/gidsen" className="mt-5 inline-block text-sm font-semibold text-[#ff7a3d]">
              Alle gidsen →
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
