"use client";

import Link from "next/link";
import Navigation from "@/components/Navigation";
import { homeCategories, homeGuides, homePicks, homeStats } from "@/data/home";
import { layoutDemos, type LayoutSlug } from "./catalog";

function Shell({ slug, children }: { slug: LayoutSlug; children: React.ReactNode }) {
  const meta = layoutDemos.find((item) => item.slug === slug);
  return (
    <main className="min-h-screen bg-[#0e0e10] pb-24 text-[#ece7df]">
      <Navigation />
      <p className="relative z-10 border-b border-white/10 px-5 pt-[4.75rem] pb-2 text-center text-[11px] uppercase tracking-[0.22em] text-white/35 sm:px-8">
        Layout {slug} · {meta?.name} · demo
      </p>
      {children}
    </main>
  );
}

function Overlay({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/50 to-transparent p-4">
      <p className="text-[10px] uppercase tracking-[0.22em] text-[#c4b49a]">{kicker}</p>
      <h3 className="font-display text-xl leading-tight">{title}</h3>
    </div>
  );
}

export default function LayoutFrame({ slug }: { slug: LayoutSlug }) {
  if (slug === "01") {
    return (
      <Shell slug={slug}>
        <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8">
          <div className="grid items-end gap-8 lg:grid-cols-[1.4fr_0.8fr]">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[#c4b49a]">Onafhankelijke ranglijsten</p>
              <h1 className="font-display text-4xl leading-[0.95] sm:text-5xl">
                Kies rustig. <span className="text-[#c4b49a]">Koop zeker.</span>
              </h1>
              <div className="mt-5 flex gap-3">
                <Link href="#categorieen" className="rounded-full bg-[#ece7df] px-5 py-2 text-sm text-black">
                  Categorieën
                </Link>
                <Link href="/gidsen" className="rounded-full border border-white/15 px-5 py-2 text-sm">
                  Gidsen
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 lg:border-l lg:border-white/10 lg:pl-8">
              {homeStats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-2xl">{stat.value}</p>
                  <p className="text-xs text-white/40">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div id="categorieen" className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {homeCategories.map((category) => (
              <Link key={category.id} href={category.link} className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                <img src={category.image} alt="" className="h-full w-full object-cover" />
                <Overlay kicker={category.kicker} title={category.title} />
              </Link>
            ))}
          </div>
          <div className="mt-8 grid gap-6 border-t border-white/10 pt-8 lg:grid-cols-2">
            <div className="space-y-2">
              {homePicks.map((pick) => (
                <Link key={pick.name} href={pick.href} className="flex items-center gap-3 rounded-xl border border-white/10 p-3">
                  <img src={pick.image} alt="" className="h-12 w-12 object-contain" />
                  <span className="font-display">{pick.name}</span>
                </Link>
              ))}
            </div>
            <div className="space-y-3">
              {homeGuides.map((guide) => (
                <Link key={guide.href} href={guide.href} className="block border-t border-white/10 pt-3">
                  {guide.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Shell>
    );
  }

  if (slug === "02") {
    return (
      <Shell slug={slug}>
        <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8">
          <h1 className="font-display mb-6 text-4xl sm:text-5xl">Kies rustig. Koop zeker.</h1>
          <div className="grid gap-4 sm:grid-cols-2">
            {homeCategories.map((category) => (
              <Link key={category.id} href={category.link} className="relative aspect-[16/10] overflow-hidden rounded-3xl">
                <img src={category.image} alt="" className="h-full w-full object-cover" />
                <Overlay kicker={category.kicker} title={category.title} />
              </Link>
            ))}
          </div>
        </div>
      </Shell>
    );
  }

  if (slug === "03") {
    const [cover, ...rest] = homeCategories;
    return (
      <Shell slug={slug}>
        <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8">
          <p className="mb-2 text-xs uppercase tracking-[0.3em] text-[#c4b49a]">Cover</p>
          <h1 className="font-display mb-6 text-4xl">De collectie in één blik.</h1>
          <div className="grid gap-3 lg:grid-cols-3">
            <Link href={cover.link} className="relative min-h-[280px] overflow-hidden rounded-3xl lg:col-span-2 lg:row-span-3 lg:min-h-0">
              <img src={cover.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
              <Overlay kicker={cover.kicker} title={cover.title} />
            </Link>
            {rest.map((category) => (
              <Link key={category.id} href={category.link} className="relative min-h-[120px] overflow-hidden rounded-2xl">
                <img src={category.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
                <Overlay kicker={category.kicker} title={category.title} />
              </Link>
            ))}
          </div>
        </div>
      </Shell>
    );
  }

  if (slug === "04") {
    return (
      <Shell slug={slug}>
        <div className="mx-auto max-w-4xl px-5 py-10 sm:px-8">
          <h1 className="font-display text-5xl leading-none">Inhoud.</h1>
          <p className="mt-3 text-white/50">Vier hoofdstukken. Open wat je zoekt.</p>
          <ol className="mt-10 divide-y divide-white/10 border-y border-white/10">
            {homeCategories.map((category, index) => (
              <li key={category.id}>
                <Link href={category.link} className="flex items-center gap-5 py-5">
                  <span className="font-display text-2xl text-[#c4b49a]">0{index + 1}</span>
                  <img src={category.image} alt="" className="h-16 w-24 rounded-lg object-cover" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/40">{category.kicker}</p>
                    <h2 className="font-display text-2xl">{category.title}</h2>
                  </div>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </Shell>
    );
  }

  if (slug === "05") {
    return (
      <Shell slug={slug}>
        <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8">
          <h1 className="font-display mb-6 text-4xl">Collectie</h1>
          <div className="grid auto-rows-[160px] grid-cols-2 gap-3 md:grid-cols-4 md:auto-rows-[180px]">
            {homeCategories.map((category, index) => (
              <Link
                key={category.id}
                href={category.link}
                className={`relative overflow-hidden rounded-2xl ${index === 0 ? "col-span-2 row-span-2" : ""}`}
              >
                <img src={category.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
                <Overlay kicker={category.kicker} title={category.title} />
              </Link>
            ))}
          </div>
        </div>
      </Shell>
    );
  }

  if (slug === "06") {
    return (
      <Shell slug={slug}>
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-8 sm:px-8 lg:grid-cols-[220px_1fr]">
          <aside>
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#c4b49a]">Categorieën</p>
            <nav className="space-y-2">
              {homeCategories.map((category) => (
                <Link
                  key={category.id}
                  href={category.link}
                  className="block rounded-lg px-3 py-2 text-sm text-white/70 hover:bg-white/5 hover:text-white"
                >
                  {category.title}
                </Link>
              ))}
            </nav>
          </aside>
          <div>
            <h1 className="font-display text-4xl sm:text-5xl">Kies rustig. Koop zeker.</h1>
            <p className="mt-3 max-w-lg text-white/50">Open een lijst via het menu, of begin bij wat nu speelt.</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {homePicks.map((pick) => (
                <Link key={pick.name} href={pick.href} className="rounded-2xl border border-white/10 p-4">
                  <img src={pick.image} alt="" className="mx-auto h-24 object-contain" />
                  <p className="font-display mt-3 text-center">{pick.name}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Shell>
    );
  }

  if (slug === "07") {
    return (
      <Shell slug={slug}>
        <div className="mx-auto max-w-6xl px-5 py-6 sm:px-8">
          <h1 className="font-display mb-4 text-3xl sm:text-4xl">Kies een baan.</h1>
          <div className="space-y-2">
            {homeCategories.map((category) => (
              <Link key={category.id} href={category.link} className="relative block h-28 overflow-hidden rounded-2xl sm:h-32">
                <img src={category.image} alt="" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-black/45" />
                <div className="absolute inset-0 flex items-center justify-between px-6">
                  <h2 className="font-display text-2xl sm:text-3xl">{category.title}</h2>
                  <span className="text-sm text-[#c4b49a]">Open →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Shell>
    );
  }

  if (slug === "08") {
    return (
      <Shell slug={slug}>
        <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h1 className="font-display text-4xl">Nu in de lijsten</h1>
            <div className="flex flex-wrap gap-2">
              {homeCategories.map((category) => (
                <Link
                  key={category.id}
                  href={category.link}
                  className="rounded-full border border-white/15 px-4 py-1.5 text-sm text-white/70 hover:border-white/40 hover:text-white"
                >
                  {category.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {homePicks.map((pick) => (
              <Link key={pick.name} href={pick.href} className="rounded-3xl bg-[#161618] p-6">
                <img src={pick.image} alt="" className="mx-auto h-32 object-contain" />
                <p className="mt-4 text-xs uppercase tracking-[0.2em] text-[#c4b49a]">
                  {pick.rank} · {pick.category}
                </p>
                <h2 className="font-display mt-1 text-2xl">{pick.name}</h2>
                <p className="mt-1 text-sm text-white/45">{pick.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </Shell>
    );
  }

  if (slug === "09") {
    return (
      <Shell slug={slug}>
        <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8">
          <h1 className="font-display mb-8 text-center text-4xl">Editie vandaag</h1>
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#c4b49a]">Categorieën</p>
              {homeCategories.map((category) => (
                <Link key={category.id} href={category.link} className="mb-3 block overflow-hidden rounded-xl">
                  <img src={category.image} alt="" className="h-24 w-full object-cover" />
                  <p className="font-display mt-2">{category.title}</p>
                </Link>
              ))}
            </div>
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#c4b49a]">Aanbevolen</p>
              {homePicks.map((pick) => (
                <Link key={pick.name} href={pick.href} className="mb-4 flex gap-3 border-b border-white/10 pb-4">
                  <img src={pick.image} alt="" className="h-14 w-14 object-contain" />
                  <span>{pick.name}</span>
                </Link>
              ))}
            </div>
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#c4b49a]">Gidsen</p>
              {homeGuides.map((guide) => (
                <Link key={guide.href} href={guide.href} className="mb-4 block border-b border-white/10 pb-4">
                  <p className="text-xs text-[#c4b49a]">{guide.readTime}</p>
                  <p className="mt-1">{guide.title}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Shell>
    );
  }

  return (
    <Shell slug={slug}>
      <div className="mx-auto max-w-2xl px-5 py-16 text-center sm:px-8">
        <p className="text-xs uppercase tracking-[0.3em] text-[#c4b49a]">Top 10 Vandaag</p>
        <h1 className="font-display mt-4 text-5xl leading-none sm:text-6xl">
          Kies rustig.
          <span className="block text-[#c4b49a]">Koop zeker.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-md text-white/50">Vier lijsten. Geen ruis.</p>
        <div className="mt-10 grid gap-3">
          {homeCategories.map((category) => (
            <Link
              key={category.id}
              href={category.link}
              className="rounded-full border border-white/15 px-6 py-3 text-lg hover:border-[#c4b49a]/50"
            >
              {category.title}
            </Link>
          ))}
        </div>
        <Link href="/gidsen" className="mt-8 inline-block text-sm text-[#c4b49a]">
          Of lees eerst een gids →
        </Link>
      </div>
    </Shell>
  );
}
