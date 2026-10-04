'use client';

import Navigation from '../../../../components/Navigation';
import Link from 'next/link';
import { editorialIntros, defaultEditorialIntro } from '../../../../data/editorialIntros';
import { sortStores } from '../../../../lib/stores';
import StoreLink from '../../../../components/StoreLink';
import type { EnrichedSubcategoryData } from '../../../../lib/bol/types';

interface SubcategoryPageClientProps {
  params: { category: string; subcategory: string };
  data: EnrichedSubcategoryData | null;
}

export default function SubcategoryPageClient({ params, data }: SubcategoryPageClientProps) {
  const editorial = editorialIntros[params.subcategory] ?? defaultEditorialIntro;

  if (!data) {
    return (
      <main className="min-h-screen">
        <Navigation />
        <div className="container mx-auto px-4 pt-24">
          <h1 className="text-4xl text-center text-white">Subcategorie niet gevonden</h1>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black"></div>
        
        <div className="absolute inset-0" style={{ 
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.025) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px'
        }}></div>
        
        <div className="absolute inset-0" style={{
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              rgba(255,255,255,0.01) 0px,
              rgba(255,255,255,0.01) 1px,
              transparent 1px,
              transparent 30px
            )
          `,
          opacity: 0.5
        }}></div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03),transparent_800px)]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4 text-white/90">{data.title}</h1>
            <p className="text-xl text-gray-400">{data.description}</p>
          </div>

          <div className="max-w-3xl mx-auto mb-12 glass-effect rounded-xl p-6 border border-white/10">
            <p className="text-gray-300 leading-relaxed mb-4">{editorial.intro}</p>
            {editorial.guideSlug && (
              <Link
                href={`/gidsen/${editorial.guideSlug}`}
                className="text-purple-300 hover:text-purple-200 text-sm font-medium transition-colors"
              >
                Lees de volledige koopgids →
              </Link>
            )}
            <p className="text-xs text-gray-500 mt-4 pt-4 border-t border-white/5">
              Bol.com-prijzen worden automatisch opgehaald (max. 30 min oud). Overige prijzen zijn indicatief. Controleer altijd de actuele prijs op de retailerwebsite.{" "}
              Affiliate disclosure: wij kunnen commissie ontvangen via links op deze pagina.{" "}
              <Link href="/affiliate-disclosure" className="underline hover:text-gray-400">
                Meer info
              </Link>
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {data.products.map((product, index) => (
              <div key={`${product.name}-${index}`} className="bg-white/[0.02] backdrop-blur-md border border-white/[0.05] rounded-xl p-6 mb-6 shadow-xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-1">
                    <div className="relative">
                      <span className="absolute top-2 left-2 bg-black/80 text-white px-3 py-1 rounded-full">
                        #{index + 1}
                      </span>
                      <div className="product-image-frame rounded-lg overflow-hidden flex justify-center items-center mb-4 p-3">
                        {product.image ? (
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-[200px] object-contain"
                          />
                        ) : (
                          <div style={{width: '100%', height: '200px', background: '#e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#888', fontSize: '1.2rem', borderRadius: '1rem', marginBottom: '1rem'}}>Geen afbeelding</div>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="md:col-span-2">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h2 className="text-2xl font-bold text-white/90 mb-2">{product.name}</h2>
                        <p className="text-gray-400">{product.description}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 mb-6">
                      <div>
                        <h3 className="text-white/90 font-semibold mb-2">Voordelen</h3>
                        <ul className="space-y-2">
                          {product.pros.slice(0, 3).map((pro, i) => (
                            <li key={i} className="text-green-400 flex items-center bg-white/[0.02] p-2 rounded-lg">
                              <span className="mr-2">✓</span>
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex gap-4">
                        {sortStores(product.stores).map((store) => (
                          <StoreLink
                            key={store.name}
                            name={store.name}
                            link={store.link}
                            priceLabel={store.priceLabel}
                            priceFallback={store.priceFallback}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
