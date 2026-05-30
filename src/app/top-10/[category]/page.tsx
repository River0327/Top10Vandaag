'use client';

import Navigation from '../../../components/Navigation';
import Link from 'next/link';

interface Subcategory {
  name: string;
  slug: string;
  image: string;
  description: string;
  logo?: string;
}

interface CategoryInfo {
  title: string;
  description: string;
  subcategories: Subcategory[];
}

interface CategoryData {
  [key: string]: CategoryInfo;
}

const categoryData: CategoryData = {
  telefoons: {
    title: "Telefoons en tablets",
    description: "Kies de categorie waar jouw telefoon bij hoort",
    subcategories: [
      { 
        name: "Apple", 
        slug: "apple", 
        image: "/images/subcategories/subcat-apple.png",
        description: "iPhones",
        logo: "https://cdn.simpleicons.org/apple/ffffff"
      },
      { 
        name: "Samsung", 
        slug: "samsung", 
        image: "/images/subcategories/subcat-samsung.png",
        description: "Galaxy smartphones",
        logo: "https://cdn.simpleicons.org/samsung/ffffff"
      },
      { 
        name: "OnePlus", 
        slug: "oneplus", 
        image: "/images/subcategories/subcat-oneplus.png",
        description: "OnePlus toestellen",
        logo: "https://cdn.simpleicons.org/oneplus/ffffff"
      },
      { 
        name: "Oppo", 
        slug: "oppo", 
        image: "/images/subcategories/subcat-oppo.png",
        description: "Oppo smartphones"
      },
      { 
        name: "Google", 
        slug: "google", 
        image: "/images/subcategories/subcat-google.png",
        description: "Pixel smartphones",
        logo: "https://cdn.simpleicons.org/google/ffffff"
      },
      { 
        name: "iPad",
        slug: "ipad",
        image: "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg",
        description: "iPads",
        logo: "https://cdn.simpleicons.org/apple/ffffff"
      }
    ]
  },
  gaming: {
    title: "Accessoires",
    description: "Kies het accessoire dat je zoekt",
    subcategories: [
      { 
        name: "Controllers", 
        slug: "controllers", 
        image: "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&q=80",
        description: "Controllers" 
      },
      { 
        name: "Koptelefoons", 
        slug: "headsets", 
        image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80",
        description: "Headsets" 
      },
      { 
        name: "Toetsenborden", 
        slug: "keyboards", 
        image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&q=80",
        description: "Toetsenborden" 
      },
      { 
        name: "Muizen", 
        slug: "mice", 
        image: "https://images.unsplash.com/photo-1623820919239-0d0ff10797a1?auto=format&fit=crop&q=80",
        description: "Muizen" 
      }
    ]
  },
  computers: {
    title: "Computers",
    description: "Kies tussen laptops, desktops of componenten",
    subcategories: [
      { 
        name: "Laptops", 
        slug: "laptops", 
        image: "https://images.unsplash.com/photo-1637761582862-4dbf5c0e2a37?auto=format&fit=crop&q=80",
        description: "Draagbare computers" 
      },
      { 
        name: "Desktop PC's", 
        slug: "desktops", 
        image: "https://media.s-bol.com/7rPEr2n9op6A/xGvV1yB/159x210.jpg",
        description: "Vaste computers" 
      },
      { 
        name: "Componenten", 
        slug: "components", 
        image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&q=80",
        description: "GPU's, CPU's en meer" 
      }
    ]
  },
  schermen: {
    title: "Schermen",
    description: "Kies het soort scherm dat je zoekt",
    subcategories: [
      { 
        name: "TV's", 
        slug: "tvs", 
        image: "https://images.pexels.com/photos/5202957/pexels-photo-5202957.jpeg",
        description: "Smart TV's en televisies" 
      },
      { 
        name: "Gaming monitoren", 
        slug: "gaming_monitors", 
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80",
        description: "Hoge refresh rate" 
      },
      { 
        name: "Professionele monitoren", 
        slug: "professional_monitors", 
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80",
        description: "Voor werk en design" 
      },
      { 
        name: "Budget monitoren", 
        slug: "budget_monitors", 
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80",
        description: "Betaalbare keuzes" 
      }
    ]
  }
};

const brandSlugs = new Set(['apple', 'samsung', 'oneplus', 'oppo', 'google', 'ipad']);

export default function CategoryPage({ params }: { params: { category: string } }) {
  const data = categoryData[params.category];
  const getBrandTitleClass = (slug: string) => {
    if (slug === 'samsung') return 'text-[2rem] font-extrabold tracking-[0.08em] uppercase';
    if (slug === 'oppo') return 'text-[2rem] font-bold tracking-wide uppercase';
    if (slug === 'google') return 'text-[2rem] font-semibold tracking-tight';
    if (slug === 'oneplus') return 'text-[1.9rem] font-semibold tracking-tight';
    return 'text-[2rem] font-bold';
  };

  if (!data) {
    return (
      <main className="min-h-screen">
        <Navigation />
        <div className="container mx-auto px-4 pt-24">
          <h1 className="text-4xl text-center text-white">Categorie niet gevonden</h1>
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
          <div className="text-center mb-10">
            <p className="text-2xl text-gray-100 font-medium">{data.description}</p>
          </div>

          <div className="mx-auto max-w-[1400px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center">
            {data.subcategories.map((subcategory) => {
              const isBrandCard = brandSlugs.has(subcategory.slug);

              return (
                <Link
                  key={subcategory.slug}
                  href={`/top-10/${params.category}/${subcategory.slug}`}
                  className="group relative w-full max-w-[250px] h-[370px] rounded-2xl overflow-hidden border border-white/10 bg-[#0b0f16] transform hover:-translate-y-1 hover:border-white/25 transition-all duration-300"
                >
                  <div className="absolute inset-0">
                    {subcategory.image ? (
                      <img
                        src={subcategory.image}
                        alt={subcategory.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="h-full w-full bg-[#1a1f2e] flex items-center justify-center text-gray-500 text-sm">
                        Geen afbeelding
                      </div>
                    )}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 z-10 p-4">
                    {isBrandCard ? (
                      <>
                        <h2
                          className={`text-white flex items-center gap-1 ${subcategory.slug === 'samsung' ? 'mb-[-2.5rem] leading-none' : 'mb-1 leading-tight'} ${getBrandTitleClass(subcategory.slug)}`}
                        >
                          {subcategory.logo && (
                            <img
                              src={subcategory.logo}
                              alt={`${subcategory.name} logo`}
                              className={subcategory.slug === 'samsung' ? 'h-[7.5rem] w-auto object-contain opacity-95' : 'w-6 h-6 object-contain opacity-95'}
                            />
                          )}
                          {subcategory.slug !== 'samsung' && (
                            <span>{subcategory.slug === 'google' ? 'oogle' : subcategory.name}</span>
                          )}
                        </h2>
                        <p className="text-sm text-gray-200">{subcategory.description}</p>
                      </>
                    ) : (
                      <>
                        <h2 className="text-xl font-bold text-white mb-1 leading-tight">{subcategory.name}</h2>
                        <p className="text-sm text-gray-200">{subcategory.description}</p>
                      </>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
