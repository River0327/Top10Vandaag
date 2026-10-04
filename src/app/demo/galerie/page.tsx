"use client";

import Link from "next/link";
import { useState } from "react";
import { demoCategories, demoGuides, demoNav, demoPicks, demoStats } from "../demo-data";

export default function GalerieHomePage() {
  const [open, setOpen] = useState(false);

  return (
    <main className="demo-galerie relative min-h-screen bg-[#0e0e10] pb-24 text-[#ece7df]">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage: "radial-gradient(rgba(236,231,223,0.08) 0.6px, transparent 0.6px)",
          backgroundSize: "18px 18px",
        }}
      />

      <header className="relative z-20 border-b border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
          <Link href="/" className="flex items-center gap-3">
            <span className="text-2xl tracking-tight" style={{ fontFamily: "var(--font-demo-display)" }}>
              Top 10 Vandaag
            </span>
          </Link>
          <nav className="hidden items-center gap-7 md:flex">
            {demoNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/55 transition hover:text-[#ece7df]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <button
            type="button"
            className="rounded-full border border-white/15 px-3 py-1.5 text-sm md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            Menu
          </button>
        </div>
        {open && (
          <div className="border-t border-white/10 px-5 py-4 md:hidden">
            {demoNav.map((link) => (
              <Link key={link.href} href={link.href} className="block py-2 text-sm text-white/80">
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </header>

      <section className="relative mx-auto max-w-6xl px-5 pb-6 pt-16 sm:px-8 sm:pt-24">
        <p className="mb-6 text-xs font-medium uppercase tracking-[0.35em] text-[#c4b49a]">
          Onafhankelijke ranglijsten
        </p>
        <h1
          className="max-w-4xl text-5xl leading-[0.95] tracking-tight sm:text-7xl lg:text-[5.6rem]"
          style={{ fontFamily: "var(--font-demo-display)" }}
        >
          Kies rustig.
          <span className="block text-[#c4b49a]">Koop zeker.</span>
        </h1>
        <p
          className="mt-8 max-w-xl text-lg leading-relaxed text-white/55"
          style={{ fontFamily: "var(--font-demo-body)" }}
        >
          Galerie-achtige overzichten van smartphones, schermen, computers en accessoires. Geen ruis, wel
          context — zodat je in één keer de juiste Top 10 opent.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="#categorieen"
            className="rounded-full bg-[#ece7df] px-7 py-3 text-sm font-medium text-[#0e0e10] hover:bg-white"
          >
            Naar de collectie
          </Link>
          <Link
            href="/gidsen"
            className="rounded-full border border-white/15 px-7 py-3 text-sm text-white/80 hover:border-white/40"
          >
            Lees een gids
          </Link>
        </div>
      </section>

      <section id="categorieen" className="relative mx-auto mt-10 max-w-6xl px-5 sm:px-8">
        <div className="mb-8">
          <h2 className="text-4xl sm:text-5xl" style={{ fontFamily: "var(--font-demo-display)" }}>
            Collectie
          </h2>
          <p className="mt-2 text-sm text-white/45">Vier categorieën, gelijke kaders.</p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {demoCategories.map((category) => (
            <Link
              key={category.id}
              href={category.link}
              className="group relative block aspect-[4/3] overflow-hidden rounded-[28px]"
            >
              <img
                src={category.image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                <p className="text-xs uppercase tracking-[0.25em] text-[#c4b49a]">{category.kicker}</p>
                <h3 className="mt-2 text-3xl leading-tight" style={{ fontFamily: "var(--font-demo-display)" }}>
                  {category.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm text-white/70">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="relative mx-auto mt-24 max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          {demoStats.map((stat) => (
            <div key={stat.label} className="border-t border-white/10 pt-5">
              <p className="text-4xl" style={{ fontFamily: "var(--font-demo-display)" }}>
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-white/45">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative mx-auto mt-24 max-w-6xl px-5 sm:px-8">
        <div className="mb-12 flex items-end justify-between">
          <h2 className="text-4xl sm:text-5xl" style={{ fontFamily: "var(--font-demo-display)" }}>
            Aanbevolen stukken
          </h2>
          <Link href="/trending" className="text-sm text-[#c4b49a]">
            Trending →
          </Link>
        </div>
        <div className="grid gap-10 md:grid-cols-3">
          {demoPicks.map((pick) => (
            <Link key={pick.name} href={pick.href} className="group">
              <div className="flex aspect-square items-center justify-center rounded-[32px] bg-[#161618]">
                <img
                  src={pick.image}
                  alt=""
                  className="max-h-[70%] object-contain transition duration-500 group-hover:-translate-y-1"
                />
              </div>
              <p className="mt-5 text-xs uppercase tracking-[0.22em] text-[#c4b49a]">
                {pick.rank} · {pick.category}
              </p>
              <h3 className="mt-2 text-2xl" style={{ fontFamily: "var(--font-demo-display)" }}>
                {pick.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/50">{pick.blurb}</p>
              <p className="mt-3 text-sm text-white/80">{pick.price}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="relative mx-auto mt-28 max-w-6xl px-5 sm:px-8">
        <div className="rounded-[40px] border border-white/10 bg-[#161618] px-8 py-14 sm:px-14">
          <p className="text-xs uppercase tracking-[0.3em] text-[#c4b49a]">Lezen vóór je koopt</p>
          <h2 className="mt-4 max-w-lg text-4xl sm:text-5xl" style={{ fontFamily: "var(--font-demo-display)" }}>
            Gidsen die de keuze kleiner maken.
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {demoGuides.map((guide) => (
              <Link key={guide.href} href={guide.href} className="border-t border-white/10 pt-5">
                <p className="text-xs text-[#c4b49a]">
                  {guide.category} · {guide.readTime}
                </p>
                <h3 className="mt-3 text-xl leading-snug">{guide.title}</h3>
                <p className="mt-2 text-sm text-white/45">{guide.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer className="relative mx-auto mt-20 max-w-6xl px-5 pb-8 sm:px-8">
        <div className="flex flex-col justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/40 md:flex-row">
          <p>© {new Date().getFullYear()} Top 10 Vandaag · Demo-ontwerp Galerie</p>
          <div className="flex gap-6">
            <Link href="/privacy">Privacy</Link>
            <Link href="/affiliate-disclosure">Affiliate</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
