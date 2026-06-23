"use client";

import Navigation from "../../components/Navigation";
import PageShell from "../../components/PageShell";
import Link from "next/link";

export default function AffiliateDisclosurePage() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <PageShell>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 gradient-text text-center">Affiliate disclosure</h1>

          <div className="glass-effect rounded-xl p-8 space-y-6 text-gray-300 leading-relaxed">
            <p>
              Top 10 Vandaag verdient geld via <strong className="text-white">affiliate partnerships</strong>.
              Als je op een link op onze site klikt en een aankoop doet bij een partner (zoals Bol.com of
              Coolblue), ontvangen wij een commissie, zonder dat jij extra betaalt.
            </p>

            <h2 className="text-xl font-bold text-white">Hoe werkt het?</h2>
            <p>
              Onze links bevatten trackingcodes van affiliate netwerken (zoals Bol.com Partnerprogramma
              en Awin voor Coolblue). De retailer weet dan dat je via onze site bent gekomen. De prijs
              voor jou blijft hetzelfde.
            </p>

            <h2 className="text-xl font-bold text-white">Beïnvloedt dit onze aanbevelingen?</h2>
            <p>
              <strong className="text-white">Nee.</strong> Onze Top 10 ranglijsten en koopgidsen zijn gebaseerd
              op productkwaliteit, populariteit, gebruikerservaringen en beschikbaarheid, niet op wie de
              hoogste commissie betaalt. We tonen alleen producten die wij daadwerkelijk zouden aanbevelen.
            </p>

            <h2 className="text-xl font-bold text-white">Welke partners gebruiken we?</h2>
            <ul className="space-y-2">
              <li>• Bol.com, via het Bol.com Partnerprogramma</li>
              <li>• Coolblue, via Awin affiliate netwerk</li>
            </ul>

            <h2 className="text-xl font-bold text-white">Vragen?</h2>
            <p>
              Neem contact op via{" "}
              <Link href="/contact" className="text-purple-300 hover:underline">
                onze contactpagina
              </Link>
              .
            </p>
          </div>
        </div>
      </PageShell>
    </main>
  );
}
