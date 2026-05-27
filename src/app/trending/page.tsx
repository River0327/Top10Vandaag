'use client';

import { useEffect, useState } from 'react';
import Navigation from '../../components/Navigation';
import Link from 'next/link';

const trendingItems = [
  {
    category: "gaming",
    name: "Logitech G Pro X Superlight",
    description: "Ultralichte draadloze gaming muis",
    rating: 9.8,
    image: "https://image.coolblue.nl/max/500x500/products/1784657",
    stores: [
      {
        name: "Coolblue",
        link: "https://www.coolblue.nl/product/logitech-g-pro-x-superlight"
      },
      {
        name: "Bol.com",
        link: "https://www.bol.com/nl/p/logitech-g-pro-x-superlight"
      }
    ]
  },
  {
    category: "schermen",
    name: "LG 27GP950",
    description: "4K gaming monitor met 144Hz",
    rating: 9.7,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf",
    stores: [
      {
        name: "Coolblue",
        link: "https://www.coolblue.nl/product/lg-27gp950"
      },
      {
        name: "Bol.com",
        link: "https://www.bol.com/nl/p/lg-27gp950"
      }
    ]
  },
  {
    category: "telefoons",
    name: "iPhone 15 Pro",
    description: "Apple's beste smartphone",
    rating: 9.8,
    image: "/images/iphone-se.png",
    stores: [
      {
        name: "Coolblue",
        link: "https://www.coolblue.nl/product/iphone-15-pro"
      },
      {
        name: "Bol.com",
        link: "https://www.bol.com/nl/p/iphone-15-pro"
      }
    ]
  },
  {
    category: "computers",
    name: "MacBook Pro 14\"",
    description: "M1 Pro chip, beste voor creatives",
    rating: 9.8,
    image: "https://images.unsplash.com/photo-1639249227523-78502e9b01c6",
    stores: [
      {
        name: "Coolblue",
        link: "https://www.coolblue.nl/product/macbook-pro-14"
      },
      {
        name: "Bol.com",
        link: "https://www.bol.com/nl/p/macbook-pro-14"
      }
    ]
  }
];

export default function TrendingPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

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
            <h1 className="text-5xl font-bold mb-4 text-white/90">Trending Producten</h1>
            <p className="text-xl text-gray-400">De meest populaire producten van dit moment</p>
          </div>

          {/* Trending Items with updated glass effect */}
          <div className="max-w-4xl mx-auto">
            {trendingItems.map((item) => (
              <div
                key={item.name}
                className="block mb-6"
              >
                <div className="bg-white/[0.02] backdrop-blur-md border border-white/[0.05] p-6 rounded-xl shadow-xl hover:bg-white/[0.04] transition-all duration-300">
                  <div className="flex gap-6">
                    <div className="w-48 h-48 relative rounded-lg overflow-hidden bg-white/[0.02] p-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <Link href={`/top-10/${item.category}`} className="hover:underline">
                            <h2 className="text-2xl font-semibold mb-2 text-white/90">{item.name}</h2>
                          </Link>
                          <p className="text-gray-400">{item.description}</p>
                        </div>
                      </div>
                      <div className="flex justify-end items-end">
                        <div className="flex flex-col gap-2 w-[300px]">
                          {item.stores.map((store) => (
                            <a
                              key={store.name}
                              href={store.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white/90 px-4 py-2 rounded-lg transition-all duration-200 flex justify-center items-center w-full shadow-lg hover:shadow-xl"
                            >
                              <span>Bekijk bij {store.name}</span>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Categories Overview with updated styling */}
          <div className="max-w-4xl mx-auto mt-16">
          </div>
        </div>
      </section>
    </main>
  );
} 