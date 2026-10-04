"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "@/components/Logo";
import { demoCategories, demoGuides, demoNav, demoPicks, demoStats } from "../demo-data";

const brands = ["Apple", "Samsung", "Sony", "LG", "Logitech", "Razer", "Google", "OnePlus"];

export default function PulseHomePage() {
  const [open, setOpen] = useState(false);

  return (
    <main className="demo-pulse relative min-h-screen overflow-hidden bg-[#05070f] pb-24 text-slate-100">
      <div className="pointer-events-none absolute -left-32 top-0 h-[28rem] w-[28rem] rounded-full bg-[#3b5bff]/25 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-40 h-[26rem] w-[26rem] rounded-full bg-[#ff7a3d]/20 blur-[110px]" />

      <header className="relative z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <Logo variant="full" />
          <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-xl md:flex">
            {demoNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm text-white/70 transition hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/trending"
            className="hidden rounded-full bg-[#ff7a3d] px-4 py-2 text-sm font-semibold text-black hover:bg-[#ff8f5c] sm:inline-flex"
          >
            Live rankings
          </Link>
          <button
            type="button"
            className="rounded-full border border-white/15 px-3 py-2 text-sm md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            Menu
          </button>
        </div>
        {open && (
          <div className="mx-5 rounded-2xl border border-white/10 bg-[#0b1020] p-4 md:hidden">
            {demoNav.map((link) => (
              <Link key={link.href} href={link.href} className="block py-2 text-sm text-white/80">
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </header>

      <section className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-10 pt-10 sm:px-8 lg:grid-cols-2 lg:pt-16">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-[#ffb089]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#ff7a3d]" />
            Ranking engine live
          </div>
          <h1
            className="text-5xl font-bold uppercase leading-[0.9] tracking-tight sm:text-7xl"
            style={{ fontFamily: "var(--font-demo-headline)" }}
          >
            Tech
            <span className="block text-transparent" style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.85)" }}>
              ranked
            </span>
            daily.
          </h1>
          <p className="mt-6 max-w-md text-lg text-white/60" style={{ fontFamily: "var(--font-demo-tech)" }}>
            Top 10-lijsten die bewegen met de markt. Prijzen van Bol en Coolblue, context uit onze gidsen,
            geen ruis.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="#categorieen"
              className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-slate-200"
            >
              Start vergelijken
            </Link>
            <Link
              href="/gidsen"
              className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm hover:bg-white/10"
            >
              Open gidsen
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {demoStats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-demo-headline)" }}>
                  {stat.value}
                </p>
                <p className="text-[11px] uppercase tracking-wider text-white/40">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-[40px] bg-gradient-to-br from-[#3b5bff]/30 via-transparent to-[#ff7a3d]/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0b1020]/80 p-4 backdrop-blur">
            <div className="mb-4 flex items-center justify-between px-2 text-xs uppercase tracking-[0.2em] text-white/40">
              <span>Featured stack</span>
              <span className="text-[#ff7a3d]">Live</span>
            </div>
            <div className="space-y-3">
              {demoPicks.map((pick) => (
                <Link
                  key={pick.name}
                  href={pick.href}
                  className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.03] p-3 transition hover:border-[#ff7a3d]/40 hover:bg-white/[0.06]"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-black">
                    <img src={pick.image} alt="" className="max-h-12 object-contain" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-semibold">{pick.name}</p>
                    <p className="truncate text-sm text-white/45">{pick.blurb}</p>
                  </div>
                  <span className="text-sm text-[#ffb089]">{pick.rank}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative mt-6 overflow-hidden border-y border-white/10 py-4">
        <div className="demo-marquee text-sm uppercase tracking-[0.35em] text-white/30">
          {[...brands, ...brands].map((brand, i) => (
            <span key={`${brand}-${i}`}>{brand}</span>
          ))}
        </div>
      </section>

      <section id="categorieen" className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-4xl font-bold uppercase sm:text-5xl" style={{ fontFamily: "var(--font-demo-headline)" }}>
            Enter a lane
          </h2>
          <p className="hidden max-w-xs text-right text-sm text-white/40 md:block">
            Vier hoofdroutes. Daarna merken, specs en winkels.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {demoCategories.map((category, index) => (
            <Link
              key={category.id}
              href={category.link}
              className={`group relative overflow-hidden rounded-3xl border border-white/10 ${
                index === 0 ? "md:col-span-2 min-h-[320px]" : "min-h-[240px]"
              }`}
            >
              <img
                src={category.image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-50 transition duration-500 group-hover:scale-105 group-hover:opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#05070f] via-[#05070f]/70 to-transparent" />
              <div className="relative flex h-full min-h-[240px] flex-col justify-end p-7">
                <p className="text-xs uppercase tracking-[0.28em] text-[#ff7a3d]">{category.kicker}</p>
                <h3
                  className="mt-2 text-3xl font-bold uppercase sm:text-4xl"
                  style={{ fontFamily: "var(--font-demo-headline)" }}
                >
                  {category.title}
                </h3>
                <p className="mt-2 max-w-md text-sm text-white/60">{category.description}</p>
                <span className="mt-4 text-sm font-semibold text-white">
                  {category.count} →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-5 pb-20 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {demoGuides.map((guide, index) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-[#3b5bff]/50 hover:bg-white/[0.05]"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-[#8da2ff]">
                0{index + 1} · {guide.readTime}
              </p>
              <h3 className="mt-4 text-2xl font-semibold" style={{ fontFamily: "var(--font-demo-headline)" }}>
                {guide.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/50">{guide.excerpt}</p>
              <span className="mt-6 inline-block text-sm text-[#ff7a3d]">Lees gids →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-5 pb-16 sm:px-8">
        <div className="overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-[#11183a] to-[#05070f] p-8 sm:p-12">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h2 className="text-3xl font-bold uppercase sm:text-4xl" style={{ fontFamily: "var(--font-demo-headline)" }}>
                Niet zeker? Start bij de gids.
              </h2>
              <p className="mt-3 max-w-lg text-white/55">
                Daarna is de Top 10 een check, geen raadsel.
              </p>
            </div>
            <Link
              href="/gidsen"
              className="inline-flex rounded-xl bg-[#ff7a3d] px-6 py-3 font-semibold text-black hover:bg-[#ff8f5c]"
            >
              Alle gidsen
            </Link>
          </div>
        </div>
      </section>

      <footer className="relative mx-auto max-w-7xl px-5 pb-8 sm:px-8">
        <div className="flex flex-col justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/40 md:flex-row">
          <p>© {new Date().getFullYear()} Top 10 Vandaag · Demo-ontwerp Pulse</p>
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
