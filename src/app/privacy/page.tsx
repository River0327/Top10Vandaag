"use client";

import Navigation from "../../components/Navigation";
import PageShell from "../../components/PageShell";
import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <PageShell>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 gradient-text text-center">Privacybeleid</h1>

          <div className="glass-effect rounded-xl p-8 space-y-6 text-gray-300 leading-relaxed text-sm">
            <p>
              <em>Laatst bijgewerkt: juni 2025, voorbeeldconcept. Pas aan vóór live publicatie.</em>
            </p>

            <h2 className="text-xl font-bold text-white">1. Wie zijn wij?</h2>
            <p>
              Top 10 Vandaag is een informatieve website over tech en elektronica. Contact:{" "}
              <a href="mailto:Top10Vandaag@hotmail.com" className="text-purple-300 hover:underline">
                Top10Vandaag@hotmail.com
              </a>
            </p>

            <h2 className="text-xl font-bold text-white">2. Welke gegevens verzamelen we?</h2>
            <p>
              Wij verzamelen geen persoonsgegevens via accounts of formulieren, behalve als je zelf contact
              opneemt per e-mail. Onze site kan anonieme analytics gebruiken (bezoekersaantallen, populaire
              pagina&apos;s) om de site te verbeteren.
            </p>

            <h2 className="text-xl font-bold text-white">3. Cookies en affiliate links</h2>
            <p>
              Affiliate links naar Bol.com, Coolblue en andere partners kunnen cookies plaatsen wanneer je
              op een link klikt. Dit is nodig om commissies correct toe te kennen. Zie ook onze{" "}
              <Link href="/affiliate-disclosure" className="text-purple-300 hover:underline">
                affiliate disclosure
              </Link>
              .
            </p>

            <h2 className="text-xl font-bold text-white">4. Jouw rechten</h2>
            <p>
              Je hebt recht op inzage, correctie en verwijdering van persoonsgegevens die wij van je hebben.
              Mail ons hiervoor op het bovenstaande adres.
            </p>

            <h2 className="text-xl font-bold text-white">5. Wijzigingen</h2>
            <p>
              Wij kunnen dit privacybeleid aanpassen. De meest recente versie staat altijd op deze pagina.
            </p>
          </div>
        </div>
      </PageShell>
    </main>
  );
}
