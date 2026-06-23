import Link from "next/link";

const footerLinks = [
  { href: "/gidsen", label: "Gidsen" },
  { href: "/over-ons", label: "Over ons" },
  { href: "/affiliate-disclosure", label: "Affiliate disclosure" },
  { href: "/privacy", label: "Privacy" },
  { href: "/contact", label: "Contact" },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="text-lg font-semibold text-white">Top 10 Vandaag</p>
            <p className="text-sm text-gray-400 mt-1 max-w-md">
              Onafhankelijke koopgidsen en Top 10 lijsten voor tech en elektronica in Nederland.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <p className="text-xs text-gray-500 mt-8 border-t border-white/5 pt-6">
          © {new Date().getFullYear()} Top 10 Vandaag. Sommige links op deze site zijn affiliate links.
          Je betaalt niet meer, maar wij ontvangen een commissie. Zie onze{" "}
          <Link href="/affiliate-disclosure" className="underline hover:text-gray-300">
            affiliate disclosure
          </Link>{" "}
          voor meer informatie.
        </p>
      </div>
    </footer>
  );
}
