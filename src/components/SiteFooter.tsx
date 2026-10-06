import Link from "next/link";
import Logo from "./Logo";
import { SocialIconLinks } from "./SocialLinks";

const footerLinks = [
  { href: "/gidsen", label: "Gidsen" },
  { href: "/over-ons", label: "Over ons" },
  { href: "/affiliate-disclosure", label: "Affiliate disclosure" },
  { href: "/privacy", label: "Privacy" },
  { href: "/contact", label: "Contact" },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#05070f]">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <Logo variant="full" href="/" className="mb-3" />
            <p className="mt-3 max-w-md text-sm text-white/45">
              Top 10 Vandaag (Top10Vandaag): de top 10 beste telefoons, laptops, tv’s en accessoires in Nederland.
            </p>
            <SocialIconLinks className="mt-5 flex gap-3" />
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/45 transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <p className="mt-10 border-t border-white/10 pt-6 text-xs text-white/35">
          © {new Date().getFullYear()} Top 10 Vandaag. Sommige links op deze site zijn affiliate links.
          Je betaalt niet meer, maar wij ontvangen een commissie. Zie onze{" "}
          <Link href="/affiliate-disclosure" className="underline hover:text-white/60">
            affiliate disclosure
          </Link>{" "}
          voor meer informatie.
        </p>
      </div>
    </footer>
  );
}
