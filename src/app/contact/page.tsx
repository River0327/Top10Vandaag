'use client';

import Navigation from '../../components/Navigation';
import { useEffect, useState } from 'react';

export default function Contact() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      
      {/* Hero Section */}
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
        
        {/* Main Content */}
        <div className={`container mx-auto px-4 relative z-10 transition-all duration-1000 transform ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {/* Header */}
          <h1 className="text-6xl font-bold mb-6 gradient-text text-center">
            Enige suggesties? Stuur ze op!
          </h1>
          <div className="max-w-2xl mx-auto text-center mb-16">
            <p className="text-xl text-gray-300">
              Heb jij nog suggesties voor Top10's? Stuur nu een mailtje naar{' '}
              <a href="mailto:Top10Vandaag@hotmail.com" className="gradient-text hover:scale-105 inline-block transition-transform">
                Top10Vandaag@hotmail.com
              </a>
              {' '}of stuur ons een bericht op{' '}
              <a href="https://twitter.com/Top10Vandaag" target="_blank" rel="noopener noreferrer" className="gradient-text hover:scale-105 inline-block transition-transform">
                X (@Top10Vandaag)
              </a>
            </p>
          </div>

          {/* Contact Methods */}
          <div className="flex justify-center gap-6 mb-24">
            <a href="mailto:Top10Vandaag@hotmail.com"
              className="glass-effect glow px-8 py-4 rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              Stuur een Email
            </a>
            <a href="https://twitter.com/Top10Vandaag" target="_blank" rel="noopener noreferrer"
              className="glass-effect glow px-8 py-4 rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-3">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              Volg ons op X
            </a>
          </div>

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto mb-24">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Veelgestelde vragen</h2>
            <div className="space-y-6">
              {[
                {
                  q: "Hoe snel krijg ik antwoord?",
                  a: "We streven ernaar om binnen 24 uur te reageren op alle berichten."
                },
                {
                  q: "Wat gebeurt er met mijn suggestie?",
                  a: "Elke suggestie wordt zorgvuldig bekeken en geëvalueerd. Als we je suggestie gebruiken, laten we je dit weten!"
                },
                {
                  q: "Kan ik meerdere suggesties insturen?",
                  a: "Jazeker! Je kunt zoveel suggesties insturen als je wilt."
                }
              ].map((faq, index) => (
                <div key={index} className="glass-effect p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-2 gradient-text">{faq.q}</h3>
                  <p className="text-gray-300">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">Blijf op de hoogte</h2>
            <p className="text-gray-300 mb-8">
              Schrijf je in voor onze nieuwsbrief en ontvang als eerste nieuwe Top10 lijsten!
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Jouw email adres"
                className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
              />
              <button className="glass-effect glow px-6 py-2 rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-105 active:scale-95">
                Inschrijven
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 