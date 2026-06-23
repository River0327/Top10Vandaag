"use client";

import Navigation from "../../components/Navigation";
import PageShell from "../../components/PageShell";
import Link from "next/link";

export default function OverOnsPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <PageShell>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text text-center">Over Top 10 Vandaag</h1>

          <div className="glass-effect rounded-xl p-8 space-y-6 text-gray-300 leading-relaxed">
            <p>
              Top 10 Vandaag is een Nederlandse vergelijkingssite voor tech en elektronica. Wij helpen
              consumenten snel de beste producten te vinden, zonder urenlang zelf te moeten zoeken.
            </p>
            <p>
              Onze aanpak is simpel: eerst een <strong className="text-white">koopgids</strong> die uitlegt
              waar je op moet letten, daarna een <strong className="text-white">Top 10 lijst</strong> met
              concrete aanbevelingen, voor- en nadelen en links naar betrouwbare retailers zoals Bol.com en
              Coolblue.
            </p>

            <h2 className="text-2xl font-bold text-white pt-4">Wat maakt ons anders?</h2>
            <ul className="space-y-3">
              {[
                "Redactionele gidsen die je helpen kiezen, niet alleen productlijsten",
                "Top 10 ranglijsten per categorie, bijgewerkt op populariteit en beschikbaarheid",
                "Transparant over affiliate links, zie onze disclosure",
                "Nederlandse focus: producten die verkrijgbaar zijn bij NL-retailers",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold text-white pt-4">Contact</h2>
            <p>
              Vragen, suggesties of feedback? Mail naar{" "}
              <a href="mailto:Top10Vandaag@hotmail.com" className="text-purple-300 hover:underline">
                Top10Vandaag@hotmail.com
              </a>{" "}
              of volg ons op{" "}
              <a
                href="https://twitter.com/Top10Vandaag"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-300 hover:underline"
              >
                X (@Top10Vandaag)
              </a>
              .
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/gidsen" className="glass-effect px-6 py-3 rounded-lg hover:bg-white/10 transition-colors">
              Bekijk gidsen
            </Link>
            <Link href="/affiliate-disclosure" className="glass-effect px-6 py-3 rounded-lg hover:bg-white/10 transition-colors">
              Affiliate disclosure
            </Link>
          </div>
        </div>
      </PageShell>
    </main>
  );
}
