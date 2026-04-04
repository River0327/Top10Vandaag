'use client';

import { useEffect, useState } from 'react';
import Navigation from '../../../components/Navigation';
import Link from 'next/link';

interface Subcategory {
  name: string;
  slug: string;
  image: string;
  description: string;
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
    description: "Ontdek de beste smartphones en tablets per merk",
    subcategories: [
      { 
        name: "Apple Telefoons", 
        slug: "apple", 
        image: "https://images.pexels.com/photos/198192/pexels-photo-198192.jpeg",
        description: "iPhones" 
      },
      { 
        name: "Samsung", 
        slug: "samsung", 
        image: "https://images.pexels.com/photos/30466740/pexels-photo-30466740.jpeg",
        description: "Galaxy smartphones" 
      },
      { 
        name: "OnePlus", 
        slug: "oneplus", 
        image: "https://ibb.co/N6SXJbbb",
        description: "OnePlus toestellen" 
      },
      { 
        name: "Oppo", 
        slug: "oppo", 
        image: "https://images.pexels.com/photos/30165503/pexels-photo-30165503.jpeg",
        description: "Oppo smartphones" 
      },
      { 
        name: "Google", 
        slug: "google", 
        image: "https://ibb.co/mCS0jZ2W",
        description: "Pixel smartphones" 
      },
      { 
        name: "Ipad",
        slug: "ipad",
        image: "",
        description: "iPads"
      }
    ]
  },
  gaming: {
    title: "Accessoires",
    description: "De beste accessoires",
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
    description: "Kies tussen laptops of desktop PC's",
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
      }
    ]
  },
  schermen: {
    title: "Schermen",
    description: "TV's en monitoren voor elk gebruik",
    subcategories: [
      { 
        name: "TV's", 
        slug: "tvs", 
        image: "https://images.pexels.com/photos/5202957/pexels-photo-5202957.jpeg",
        description: "Smart TV's en televisies" 
      },
      { 
        name: "Monitoren", 
        slug: "monitors", 
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80",
        description: "Computer monitoren" 
      }
    ]
  }
};

export default function CategoryPage({ params }: { params: { category: string } }) {
  const data = categoryData[params.category];

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
        {/* Professional dark background with subtle patterns */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0" style={{ 
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.025) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px'
        }}></div>
        
        {/* Diagonal lines pattern */}
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

        {/* Subtle radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03),transparent_800px)]"></div>
        
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4 text-white">{data.title}</h1>
            <p className="text-xl text-gray-300">{data.description}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {data.subcategories.map((subcategory) => (
              <Link
                key={subcategory.slug}
                href={`/top-10/${params.category}/${subcategory.slug}`}
                className="glass-effect rounded-xl p-6 w-full max-w-xs transform hover:scale-[1.02] transition-all duration-300 flex flex-col items-center"
              >
                <div className="relative w-full aspect-[4/3] flex items-center justify-center mb-4">
                  {subcategory.image ? (
                    <img
                      src={subcategory.image}
                      alt={subcategory.name}
                      className="object-contain h-48 mx-auto block"
                    />
                  ) : (
                    <div style={{width: '100%', height: '192px', background: '#e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#888', fontSize: '1.2rem', borderRadius: '1rem'}}>Geen afbeelding</div>
                  )}
                </div>
                <div className="text-center">
                  <h2 className="text-2xl font-semibold mb-2">{subcategory.name}</h2>
                  <p className="text-gray-300">{subcategory.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}