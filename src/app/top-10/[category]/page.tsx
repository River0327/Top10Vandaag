'use client';

import Navigation from '../../../components/Navigation';
import PageShell from '../../../components/PageShell';
import Link from 'next/link';
import { categoryData } from '../../../data/categories';

const brandSlugs = new Set(['apple', 'samsung', 'oneplus', 'oppo', 'google', 'ipad']);
const accessorySlugs = new Set(['controllers', 'headsets', 'keyboards', 'mice']);
const productImageSlugs = new Set([
  'controllers', 'headsets', 'keyboards', 'mice',
  'tvs', 'gaming_monitors', 'office_monitors',
  'laptops', 'desktops', 'components',
]);

function getBrandTitleClass(slug: string) {
  if (slug === 'samsung') return 'text-[2rem] font-extrabold tracking-[0.08em] uppercase';
  if (slug === 'oppo') return 'text-[2rem] font-bold tracking-wide uppercase';
  if (slug === 'google') return 'text-[2rem] font-semibold tracking-tight';
  if (slug === 'oneplus') return 'text-[1.9rem] font-semibold tracking-tight';
  return 'text-[2rem] font-bold';
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const data = categoryData[params.category];
  const itemCount = data?.subcategories.length ?? 0;
  const gridClass =
    itemCount <= 3
      ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl'
      : itemCount === 4
        ? 'grid-cols-2 lg:grid-cols-4 max-w-5xl'
        : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-3 max-w-5xl';

  if (!data) {
    return (
      <main className="min-h-screen bg-black">
        <Navigation />
        <PageShell>
          <h1 className="text-4xl text-center text-white">Categorie niet gevonden</h1>
        </PageShell>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <PageShell>
        <div className="max-w-6xl mx-auto">
          <Link
            href="/"
            className="text-sm text-gray-400 hover:text-white transition-colors mb-6 inline-block"
          >
            ← Terug naar home
          </Link>

          <header className="text-center mb-10 md:mb-12">
            <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-3">{data.title}</h1>
            <p className="text-lg text-gray-400">{data.description}</p>
          </header>

          <div className={`mx-auto grid ${gridClass} gap-5 md:gap-6 justify-items-center`}>
            {data.subcategories.map((subcategory) => {
              const isBrandCard = brandSlugs.has(subcategory.slug);
              const isAccessoryCard = accessorySlugs.has(subcategory.slug);
              const usesProductImage = productImageSlugs.has(subcategory.slug);

              return (
                <Link
                  key={subcategory.slug}
                  href={`/top-10/${params.category}/${subcategory.slug}`}
                  className="group relative block w-full max-w-[260px] aspect-[3/4] rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0b0f16] hover:border-white/20 transition-all duration-300 touch-manipulation"
                >
                  <div className="pointer-events-none absolute inset-0">
                    {subcategory.image ? (
                      <img
                        src={subcategory.image}
                        alt={subcategory.name}
                        className={`h-full w-full transition-transform duration-500 group-hover:scale-105 ${
                          usesProductImage ? 'object-contain p-6' : 'object-cover'
                        }`}
                      />
                    ) : (
                      <div className="h-full w-full bg-[#1a1f2e] flex items-center justify-center text-gray-500 text-sm">
                        Geen afbeelding
                      </div>
                    )}
                  </div>

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />

                  <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 p-4 md:p-5">
                    {isBrandCard ? (
                      <>
                        <h2
                          className={`text-white flex items-center gap-1 ${
                            subcategory.slug === 'samsung'
                              ? 'mb-[-2.5rem] leading-none'
                              : 'mb-1 leading-tight'
                          } ${getBrandTitleClass(subcategory.slug)}`}
                        >
                          {subcategory.logo && (
                            <img
                              src={subcategory.logo}
                              alt={`${subcategory.name} logo`}
                              className={
                                subcategory.slug === 'samsung'
                                  ? 'h-[7.5rem] w-auto object-contain opacity-95'
                                  : 'w-6 h-6 object-contain opacity-95'
                              }
                            />
                          )}
                          {subcategory.slug !== 'samsung' && (
                            <span>
                              {subcategory.slug === 'google' ? 'oogle' : subcategory.name}
                            </span>
                          )}
                        </h2>
                        <p className="text-sm text-gray-300">{subcategory.description}</p>
                      </>
                    ) : (
                      <>
                        <h2 className="text-xl font-bold text-white mb-1 leading-tight">
                          {subcategory.name}
                        </h2>
                        {!isAccessoryCard && (
                          <p className="text-sm text-gray-300">{subcategory.description}</p>
                        )}
                      </>
                    )}
                    <span className="inline-block mt-2 text-xs text-purple-300 opacity-0 group-hover:opacity-100 transition-opacity">
                      Bekijk Top 10 →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </PageShell>
    </main>
  );
}
