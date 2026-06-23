"use client";

import Navigation from "../../components/Navigation";
import PageShell from "../../components/PageShell";
import Link from "next/link";
import { guides } from "../../data/guides";

export default function GidsenPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <PageShell>
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Koopgidsen & Advies</h1>
          <p className="text-lg text-gray-400">
            Eerst begrijpen, dan kiezen. Onze gidsen helpen je de juiste producten te vinden 
            met links naar onze actuele Top 10 lijsten.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {guides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/gidsen/${guide.slug}`}
              className="glass-effect rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group flex flex-col"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-medium text-purple-300 bg-purple-500/10 px-2 py-1 rounded">
                  {guide.category}
                </span>
                {guide.isConcept && (
                  <span className="text-xs text-gray-500 border border-white/10 px-2 py-1 rounded">
                    Concept
                  </span>
                )}
              </div>
              <h2 className="text-xl font-bold text-white mb-2 group-hover:text-purple-200 transition-colors">
                {guide.title}
              </h2>
              <p className="text-gray-400 text-sm flex-1 mb-4">{guide.excerpt}</p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>{guide.readTime} leestijd</span>
                <span className="text-purple-300 group-hover:translate-x-1 transition-transform">
                  Lees gids →
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="max-w-2xl mx-auto mt-16 text-center glass-effect rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-3">Liever direct vergelijken?</h2>
          <p className="text-gray-400 mb-6">
            Bekijk onze Top 10 lijsten per categorie, met voor- en nadelen, ratings en links naar retailers.
          </p>
          <Link
            href="/"
            className="inline-block bg-gradient-main text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Naar categorieën
          </Link>
        </div>
      </PageShell>
    </main>
  );
}
