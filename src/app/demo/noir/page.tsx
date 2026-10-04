"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "@/components/Logo";
import { demoCategories, demoGuides, demoNav, demoPicks, demoStats } from "../demo-data";

export default function NoirHomePage() {
  const [open, setOpen] = useState(false);

  return (
    <main className="demo-noir relative min-h-screen overflow-hidden bg-[#070708] pb-24 text-[#f3ece2]">
      <div className="demo-grain" />

      <header className="relative z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
          <Logo variant="full" className="brightness-110" />
          <nav className="hidden items-center gap-8 lg:flex">
            {demoNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[13px] uppercase tracking-[0.22em] text-[#f3ece2]/70 transition hover:text-[#d4b483]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Link
              href="/gidsen"
              className="hidden rounded-full border border-[#d4b483]/40 px-4 py-2 text-xs uppercase tracking-[0.2em] text-[#d4b483] transition hover:bg-[#d4b483] hover:text-black sm:inline-flex"
            >
              Koopgidsen
            </Link>
            <button
              type="button"
              className="rounded-full border border-white/15 px-3 py-2 text-xs uppercase tracking-[0.18em] lg:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
            >
              Menu
            </button>
          </div>
        </div>
        {open && (
          <div className="border-t border-white/10 bg-black/90 px-5 py-4 lg:hidden">
            {demoNav.map((link) => (
              <Link key={link.href} href={link.href} className="block py-2 text-sm tracking-wide text-white/80">
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </header>

      <section className="relative mx-auto grid max-w-7xl items-end gap-10 px-5 pb-8 pt-8 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:pt-4">
        <div>
          <p className="mb-5 text-xs uppercase tracking-[0.42em] text-[#d4b483]">Editie · Nederland</p>
          <h1
            className="max-w-xl text-[2.7rem] leading-[0.95] text-[#f7f1e8] sm:text-6xl lg:text-[4.6rem]"
            style={{ fontFamily: "var(--font-demo-serif)" }}
          >
            De beste tech,
            <em className="block not-italic text-[#d4b483]">zorgvuldig gerangschikt.</em>
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-[#f3ece2]/65 sm:text-lg">
            Onafhankelijke Top 10-lijsten en koopgidsen. Eerst snappen wat je nodig hebt, daarna vergelijken
            op Bol.com en Coolblue.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="#categorieen"
              className="rounded-full bg-[#d4b483] px-6 py-3 text-sm font-semibold text-[#1a140f] transition hover:bg-[#e4c79a]"
            >
              Bekijk categorieën
            </Link>
            <Link
              href="/trending"
              className="rounded-full border border-white/15 px-6 py-3 text-sm text-white/80 hover:border-[#d4b483]/50 hover:text-[#d4b483]"
            >
              Trending deze week
            </Link>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[32px] border border-white/10">
          <img
            src="https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=1600&auto=format&fit=crop"
            alt="Premium smartphone"
            className="demo-kenburns h-[420px] w-full object-cover sm:h-[520px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#d4b483]">Cover pick</p>
            <p className="mt-2 text-2xl" style={{ fontFamily: "var(--font-demo-serif)" }}>
              Telefoons die de standaard zetten
            </p>
            <Link href="/top-10/telefoons" className="mt-3 inline-block text-sm text-white/70 underline decoration-[#d4b483]/50 underline-offset-4">
              Open de lijst
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px sm:grid-cols-4">
          {demoStats.map((stat) => (
            <div key={stat.label} className="px-6 py-8">
              <p className="text-3xl text-[#d4b483]" style={{ fontFamily: "var(--font-demo-serif)" }}>
                {stat.value}
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/45">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#d4b483]">Redactie</p>
            <h2 className="mt-2 text-4xl sm:text-5xl" style={{ fontFamily: "var(--font-demo-serif)" }}>
              Vanavond in de spotlight
            </h2>
          </div>
          <Link href="/trending" className="hidden text-sm text-[#d4b483] sm:inline">
            Alles trending →
          </Link>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {demoPicks.map((pick) => (
            <Link
              key={pick.name}
              href={pick.href}
              className="group overflow-hidden rounded-[28px] border border-white/10 bg-[#111111] transition hover:border-[#d4b483]/40"
            >
              <div className="flex h-56 items-center justify-center bg-black">
                <img src={pick.image} alt="" className="demo-float max-h-44 object-contain" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.22em] text-[#d4b483]">
                  <span>{pick.rank}</span>
                  <span>{pick.category}</span>
                </div>
                <h3 className="mt-3 text-2xl" style={{ fontFamily: "var(--font-demo-serif)" }}>
                  {pick.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{pick.blurb}</p>
                <p className="mt-4 text-sm text-white/80">{pick.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="categorieen" className="mx-auto max-w-7xl px-5 pb-20 sm:px-8">
        <h2 className="mb-8 text-4xl sm:text-5xl" style={{ fontFamily: "var(--font-demo-serif)" }}>
          Categorieën
        </h2>
        <div className="grid gap-5 md:grid-cols-2">
          {demoCategories.map((category) => (
            <Link
              key={category.id}
              href={category.link}
              className="group relative min-h-[280px] overflow-hidden rounded-[30px]"
            >
              <img
                src={category.image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10" />
              <div className="relative flex h-full min-h-[280px] flex-col justify-end p-7">
                <p className="text-[11px] uppercase tracking-[0.28em] text-[#d4b483]">{category.kicker}</p>
                <h3 className="mt-2 text-3xl" style={{ fontFamily: "var(--font-demo-serif)" }}>
                  {category.title}
                </h3>
                <p className="mt-2 max-w-sm text-sm text-white/70">{category.description}</p>
                <span className="mt-4 text-sm text-[#d4b483]">Bekijk Top 10 →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#0c0c0e]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#d4b483]">Methode</p>
            <h2 className="mt-3 text-4xl" style={{ fontFamily: "var(--font-demo-serif)" }}>
              Eerst de gids.
              <br />
              Dan de lijst.
            </h2>
            <p className="mt-4 max-w-sm text-white/55">
              We rangschikken niet op wie het hardst schreeuwt. Specificaties, gebruik en prijs in Nederland.
            </p>
          </div>
          <div className="space-y-4">
            {demoGuides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="flex items-start justify-between gap-6 border-b border-white/10 py-5 transition hover:border-[#d4b483]/40"
              >
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[#d4b483]">
                    {guide.category} · {guide.readTime}
                  </p>
                  <h3 className="mt-2 text-xl" style={{ fontFamily: "var(--font-demo-serif)" }}>
                    {guide.title}
                  </h3>
                  <p className="mt-1 text-sm text-white/50">{guide.excerpt}</p>
                </div>
                <span className="mt-2 text-[#d4b483]">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-12 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-center">
          <p className="text-sm text-white/40">© {new Date().getFullYear()} Top 10 Vandaag · Demo-ontwerp Noir</p>
          <div className="flex gap-6 text-sm text-white/50">
            <Link href="/privacy">Privacy</Link>
            <Link href="/affiliate-disclosure">Affiliate</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
