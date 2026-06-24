"use client";

import Navigation from "../../../components/Navigation";
import PageShell from "../../../components/PageShell";
import Link from "next/link";
import { getGuideBySlug } from "../../../data/guides";

export default function GuidePage({ params }: { params: { slug: string } }) {
  const guide = getGuideBySlug(params.slug);

  if (!guide) {
    return (
      <main className="min-h-screen bg-black">
        <Navigation />
        <PageShell>
          <h1 className="text-3xl text-center text-white">Gids niet gevonden</h1>
          <p className="text-center text-gray-400 mt-4">
            <Link href="/gidsen" className="text-purple-300 hover:underline">
              Terug naar alle gidsen
            </Link>
          </p>
        </PageShell>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <PageShell>
        <article className="max-w-3xl mx-auto">
          <Link href="/gidsen" className="text-sm text-gray-400 hover:text-white transition-colors">
            ← Alle gidsen
          </Link>

          <header className="mt-6 mb-10">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="text-xs font-medium text-purple-300 bg-purple-500/10 px-2 py-1 rounded">
                {guide.category}
              </span>
              <span className="text-xs text-gray-500">{guide.readTime} leestijd</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{guide.title}</h1>
            <p className="text-lg text-gray-400 leading-relaxed">{guide.excerpt}</p>
          </header>

          <div className="prose-custom space-y-10">
            {guide.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-2xl font-bold text-white mb-4">{section.heading}</h2>
                {section.paragraphs.map((p, i) => (
                  <p key={i} className="text-gray-300 leading-relaxed mb-4">
                    {p}
                  </p>
                ))}
                {section.bullets && (
                  <ul className="space-y-2 mt-4">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="text-gray-300 flex items-start gap-2">
                        <span className="text-green-400 mt-1">✓</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <div className="my-12 glass-effect rounded-xl p-6 border border-purple-500/20">
            <h2 className="text-xl font-bold text-white mb-2">Onze Top 10 aanbevelingen</h2>
            <p className="text-gray-400 mb-4">
              Klaar om te vergelijken? Bekijk onze actuele ranglijst met voor- en nadelen per product.
            </p>
            <Link
              href={guide.top10Link}
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              {guide.top10Label}
            </Link>
          </div>

          {guide.faqs.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">Veelgestelde vragen</h2>
              <div className="space-y-4">
                {guide.faqs.map((faq) => (
                  <div key={faq.question} className="glass-effect rounded-xl p-5">
                    <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                    <p className="text-gray-400">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          <p className="text-xs text-gray-500 border-t border-white/5 pt-6">
            Affiliate disclosure: deze gids bevat links naar onze Top 10 pagina&apos;s en retailers.
            Wij kunnen een commissie ontvangen als je via onze links koopt. Dit beïnvloedt onze
            rangschikking niet.{" "}
            <Link href="/affiliate-disclosure" className="underline hover:text-gray-400">
              Meer lezen
            </Link>
          </p>
        </article>
      </PageShell>
    </main>
  );
}
