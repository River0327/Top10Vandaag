"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { layoutDemos } from "./layouts/catalog";

const themeOptions = [
  { href: "/demo", label: "Overzicht" },
  { href: "/demo/layouts", label: "10 layouts" },
  { href: "/demo/noir", label: "Noir" },
  { href: "/demo/galerie", label: "Galerie" },
  { href: "/demo/pulse", label: "Pulse" },
];

export default function DemoSwitcher() {
  const pathname = usePathname();
  const onLayouts = pathname.startsWith("/demo/layouts");

  if (onLayouts) {
    return (
      <div className="fixed bottom-4 left-1/2 z-[80] w-[min(96vw,52rem)] -translate-x-1/2 px-2">
        <nav
          aria-label="Layout demos"
          className="flex flex-wrap items-center justify-center gap-1 rounded-2xl border border-white/20 bg-black/75 p-1.5 shadow-2xl backdrop-blur-xl"
        >
          <Link
            href="/demo/layouts"
            className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
              pathname === "/demo/layouts" ? "bg-white text-black" : "text-white/80 hover:bg-white/10"
            }`}
          >
            Alle
          </Link>
          {layoutDemos.map((layout) => {
            const href = `/demo/layouts/${layout.slug}`;
            const active = pathname === href;
            return (
              <Link
                key={layout.slug}
                href={href}
                title={layout.name}
                className={`rounded-full px-2.5 py-1.5 text-xs font-semibold ${
                  active ? "bg-white text-black" : "text-white/80 hover:bg-white/10"
                }`}
              >
                {layout.slug}
              </Link>
            );
          })}
        </nav>
      </div>
    );
  }

  return (
    <div className="fixed bottom-5 left-1/2 z-[80] -translate-x-1/2 px-3">
      <nav
        aria-label="Demo designs"
        className="flex items-center gap-1 rounded-full border border-white/20 bg-black/70 p-1.5 shadow-2xl backdrop-blur-xl"
      >
        {themeOptions.map((option) => {
          const active = pathname === option.href;
          return (
            <Link
              key={option.href}
              href={option.href}
              className={`rounded-full px-3 py-1.5 text-xs font-semibold tracking-wide transition-colors sm:px-4 sm:text-sm ${
                active ? "bg-white text-black" : "text-white/80 hover:bg-white/10 hover:text-white"
              }`}
            >
              {option.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
