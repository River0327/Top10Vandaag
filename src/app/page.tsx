'use client';

import Navigation from '../components/Navigation';
import { SocialIconLinks } from '../components/SocialLinks';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const categories = [
    {
      id: 4,
      title: "Telefoons en tablets",
      description: "Apple, Samsung, OnePlus, Oppo, Google.",
      image: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=1000&auto=format&fit=crop",
      link: "/top-10/telefoons"
    },
    {
      id: 1,
      title: "Accessoires",
      description: "Controllers, Koptelefoons, Toetsenborden, Muizen.",
      image: "https://images.pexels.com/photos/7031690/pexels-photo-7031690.jpeg",
      link: "/top-10/gaming"
    },
    {
      id: 2,
      title: "Schermen",
      description: "Monitoren, Televisies.",
      image: "https://images.pexels.com/photos/3459979/pexels-photo-3459979.jpeg",
      link: "/top-10/schermen"
    },
    {
      id: 3,
      title: "Computers",
      description: "Laptops, PC's.",
      image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=1000&auto=format&fit=crop",
      link: "/top-10/computers"
    }
  ];

  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      
      {/* Hero Section with enhanced effects */}
      <section className="relative pt-20 pb-12 md:pt-24 md:pb-20 overflow-hidden">
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
        
        {/* Glowing orbs */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Content */}
        <div className={`container mx-auto px-4 relative z-10 transition-all duration-1000 transform ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 leading-tight gradient-text text-center float px-2">
            Ontdek hier alle elektronische Top 10-lijsten die je nodig hebt!
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 text-center text-gray-300 shine px-2 max-w-2xl mx-auto">
            Ontdek de beste producten in elke categorie, zorgvuldig getest en vergeleken.
          </p>
        </div>
      </section>

      {/* Categories Grid with enhanced cards */}
      <section className="py-10 md:py-16 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {categories.map((category, index) => (
              <a
                key={category.id}
                href={category.link}
                className={`group relative overflow-hidden rounded-2xl glass-effect glow hover:scale-105 transition-all duration-500 transform ${
                  isLoaded 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-20 opacity-0'
                } shine`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 to-transparent group-hover:from-midnight/95 transition-all duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 transform group-hover:translate-y-0 transition-transform duration-500">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 md:mb-2 gradient-text group-hover:scale-105 transition-transform duration-500">{category.title}</h2>
                    <p className="text-gray-300 text-sm sm:text-base md:text-lg transform group-hover:translate-x-2 transition-all duration-500">{category.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
        
        {/* Background Decorative Elements */}
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </section>

      <section className="md:hidden py-8 border-t border-white/10">
        <SocialIconLinks className="flex justify-center gap-6" />
      </section>
    </main>
  );
} 