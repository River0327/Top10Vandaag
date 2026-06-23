"use client";

import Navigation from "../../components/Navigation";
import PageShell from "../../components/PageShell";
import Link from "next/link";

const contactMethods = [
  {
    title: "E-mail",
    description: "Voor suggesties, vragen over producten of feedback op onze gidsen.",
    detail: "Top10Vandaag@hotmail.com",
    href: "mailto:Top10Vandaag@hotmail.com?subject=Vraag%20via%20Top10Vandaag",
    cta: "Stuur een e-mail",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "X (Twitter)",
    description: "Volg ons voor nieuwe Top 10 lijsten, updates en korte tips.",
    detail: "@Top10Vandaag",
    href: "https://twitter.com/Top10Vandaag",
    cta: "Volg op X",
    external: true,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

const reasons = [
  {
    title: "Product suggestie",
    text: "Mis je een product in een Top 10? Laat weten welke categorie en welk model we moeten toevoegen.",
  },
  {
    title: "Fout of verouderde info",
    text: "Zie je een fout in een beschrijving, link of rangschikking? Meld het en we kijken het na.",
  },
  {
    title: "Samenwerking",
    text: "Vragen over affiliate partnerships of samenwerkingen? Stuur een bericht met je voorstel.",
  },
];

const faqs: { id: string; q: string; a: string }[] = [
  {
    id: "response",
    q: "Hoe snel krijg ik antwoord?",
    a: "We reageren meestal binnen 24 uur op werkdagen. In het weekend kan het iets langer duren.",
  },
  {
    id: "suggestion",
    q: "Wat gebeurt er met mijn suggestie?",
    a: "We bekijken elke suggestie en beoordelen of het past bij de categorie en onze lezers. Als we je tip gebruiken, laten we dat graag weten.",
  },
  {
    id: "recommendation",
    q: "Kunnen jullie een specifiek product aanbevelen?",
    a: "Onze koopgidsen en Top 10 lijsten zijn een goed startpunt. Staat je vraag er niet tussen? Mail ons met je budget en gebruik.",
  },
  {
    id: "affiliate",
    q: "Hoe verdienen jullie geld?",
    a: "Via affiliate links naar retailers zoals Bol.com en Coolblue. Dat verandert niets aan onze rangschikking.",
  },
];

export default function Contact() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <PageShell>
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Contact</h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Vragen, suggesties of feedback? We horen graag van je. Kies hieronder hoe je contact wilt opnemen.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {contactMethods.map((method) => (
              <div key={method.title} className="glass-effect rounded-xl p-6 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-white/5 text-purple-300">{method.icon}</div>
                  <h2 className="text-xl font-bold text-white">{method.title}</h2>
                </div>
                <p className="text-gray-400 text-sm mb-3 flex-1">{method.description}</p>
                <p className="text-white font-medium mb-4">{method.detail}</p>
                <a
                  href={method.href}
                  target={method.external ? "_blank" : undefined}
                  rel={method.external ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-lg font-semibold transition-colors text-sm"
                >
                  {method.cta}
                </a>
              </div>
            ))}
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Waarom contact opnemen?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {reasons.map((reason) => (
                <div key={reason.title} className="glass-effect rounded-xl p-5">
                  <h3 className="text-white font-semibold mb-2">{reason.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{reason.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Veelgestelde vragen</h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.id} className="glass-effect rounded-xl p-5">
                  <h3 className="text-lg font-semibold text-white mb-2">{faq.q}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {faq.a}
                    {faq.id === "affiliate" && (
                      <>
                        {" "}
                        Lees meer op onze{" "}
                        <Link href="/affiliate-disclosure" className="text-purple-300 hover:underline">
                          affiliate disclosure
                        </Link>
                        .
                      </>
                    )}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="glass-effect rounded-xl p-8 text-center">
            <h2 className="text-xl font-bold text-white mb-2">Nog ergens anders mee geholpen?</h2>
            <p className="text-gray-400 text-sm mb-6">
              Bekijk onze koopgidsen of lees meer over hoe wij producten selecteren.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/gidsen"
                className="glass-effect px-5 py-2.5 rounded-lg hover:bg-white/10 transition-colors text-sm text-white"
              >
                Koopgidsen
              </Link>
              <Link
                href="/over-ons"
                className="glass-effect px-5 py-2.5 rounded-lg hover:bg-white/10 transition-colors text-sm text-white"
              >
                Over ons
              </Link>
              <Link
                href="/"
                className="glass-effect px-5 py-2.5 rounded-lg hover:bg-white/10 transition-colors text-sm text-white"
              >
                Alle categorieën
              </Link>
            </div>
          </section>
        </div>
      </PageShell>
    </main>
  );
}
