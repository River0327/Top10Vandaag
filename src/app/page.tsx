'use client';

import Navigation from '../components/Navigation';
import { SocialIconLinks } from '../components/SocialLinks';
import PageShell from '../components/PageShell';
import Link from 'next/link';

const categories = [
  {
    id: 4,
    title: "Telefoons en tablets",
    description: "Apple, Samsung, OnePlus, Oppo, Google.",
    image: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=1000&auto=format&fit=crop",
    link: "/top-10/telefoons",
  },
  {
    id: 1,
    title: "Accessoires",
    description: "Controllers, Koptelefoons, Toetsenborden, Muizen.",
    image: "https://images.pexels.com/photos/7031690/pexels-photo-7031690.jpeg",
    link: "/top-10/gaming",
  },
  {
    id: 2,
    title: "Schermen",
    description: "Monitoren, Televisies.",
    image: "https://images.pexels.com/photos/3459979/pexels-photo-3459979.jpeg",
    link: "/top-10/schermen",
  },
  {
    id: 3,
    title: "Computers",
    description: "Laptops, PC's.",
    image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=1000&auto=format&fit=crop",
    link: "/top-10/computers",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />

      <PageShell>
        <header className="text-center mb-12 md:mb-16">
          <p className="text-sm font-medium text-purple-300 mb-3 tracking-wide uppercase">
            Top 10 Vandaag
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-5 gradient-text leading-tight max-w-4xl mx-auto">
            Ontdek hier alle elektronische Top 10-lijsten die je nodig hebt!
          </h1>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
            Ontdek de beste producten in elke categorie, zorgvuldig getest en vergeleken.
          </p>
        </header>

        <section id="categorieen" className="mb-14 md:mb-20">
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Categorieën</h2>
            <p className="text-gray-400 text-sm mt-1">Kies een categorie om de Top 10 te bekijken</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={category.link}
                className="group relative block overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] hover:border-white/[0.15] transition-all duration-300 touch-manipulation"
              >
                <div className="aspect-[16/10] relative overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1">
                      {category.title}
                    </h3>
                    <p className="text-gray-300 text-sm sm:text-base">{category.description}</p>
                    <span className="inline-block mt-3 text-sm text-purple-300 opacity-0 group-hover:opacity-100 transition-opacity">
                      Bekijk Top 10 →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="glass-effect rounded-xl p-8 md:p-10 text-center mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
            Niet zeker wat je nodig hebt?
          </h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto mb-6">
            Lees eerst onze koopgidsen, daarna vergelijk je eenvoudig in onze Top 10 lijsten.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/gidsen"
              className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg font-semibold text-white text-sm transition-colors"
            >
              Bekijk alle gidsen
            </Link>
            <Link
              href="/trending"
              className="glass-effect px-6 py-3 rounded-lg hover:bg-white/10 transition-colors text-sm text-white"
            >
              Trending producten
            </Link>
          </div>
        </section>

        <section className="md:hidden py-6 border-t border-white/10">
          <SocialIconLinks className="flex justify-center gap-6" />
        </section>
      </PageShell>
    </main>
  );
}
