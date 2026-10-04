import Link from "next/link";

const designs = [
  {
    href: "/demo/noir",
    name: "Noir",
    tag: "Cinematisch",
    headline: "Donker, redactioneel, goud.",
    copy: "Een magazine-achtige homepage met full-bleed fotografie, serif-titels en champagne-accenten. Luxe zonder kitsch.",
    tone: "from-[#1a1410] via-[#0c0b0a] to-black",
    accent: "text-[#d4b483]",
    preview: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=1200&auto=format&fit=crop",
  },
  {
    href: "/demo/galerie",
    name: "Galerie",
    tag: "Donker & editorial",
    headline: "Museumachtig, rustig, groots.",
    copy: "Donkere galerie met gelijke kaders, ruime typografie en stille productkaarten. Minder goud, meer lucht.",
    tone: "from-[#1a1a1c] via-[#0e0e10] to-black",
    accent: "text-[#c4b49a]",
    preview: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=1200&auto=format&fit=crop",
  },
  {
    href: "/demo/pulse",
    name: "Pulse",
    tag: "Tech platform",
    headline: "Scherp, kinetisch, nu.",
    copy: "Diep navy, neon-oranje en asymmetrische grids. Voelt als een modern product discovery-platform.",
    tone: "from-[#0a1024] via-[#070b16] to-[#05070f]",
    accent: "text-[#ff7a3d]",
    preview: "https://images.pexels.com/photos/3459979/pexels-photo-3459979.jpeg",
  },
];

export default function DemoChooserPage() {
  return (
    <main className="demo-root min-h-screen bg-[#08080a] pb-28 text-white">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute -left-24 top-0 h-80 w-80 rounded-full bg-[#d4b483]/10 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-20 h-72 w-72 rounded-full bg-[#ff7a3d]/10 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-white/50">
            Top 10 Vandaag · intern
          </p>
          <h1
            className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl"
            style={{ fontFamily: "var(--font-demo-serif)" }}
          >
            Drie homepage-ontwerpen.
            <span className="block text-white/45">Kies de richting die bij het merk past.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
            Begin bij de tien layouts, of vergelijk de drie visuele richtingen. De live site blijft ongewijzigd.
          </p>
          <Link
            href="/demo/layouts"
            className="mt-8 inline-flex rounded-full bg-[#ece7df] px-6 py-2.5 text-sm font-semibold text-black hover:bg-white"
          >
            Open 10 layouts →
          </Link>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-6 px-5 pb-8 sm:px-8 lg:grid-cols-3">
        {designs.map((design, index) => (
          <Link
            key={design.href}
            href={design.href}
            className={`group relative overflow-hidden rounded-[28px] bg-gradient-to-b ${design.tone} ring-1 ring-white/10 transition duration-500 hover:-translate-y-1 hover:ring-white/25`}
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={design.preview}
                alt=""
                className="h-full w-full object-cover opacity-70 transition duration-700 group-hover:scale-105 group-hover:opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
              <div className="mb-3 flex items-center justify-between text-xs uppercase tracking-[0.22em]">
                <span className={design.accent}>0{index + 1} · {design.tag}</span>
                <span className="text-white/50">Open →</span>
              </div>
              <h2
                className="text-3xl text-white"
                style={{ fontFamily: "var(--font-demo-serif)" }}
              >
                {design.name}
              </h2>
              <p className="mt-2 text-sm font-medium text-white/80">{design.headline}</p>
              <p className="mt-2 text-sm leading-relaxed text-white/55">{design.copy}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
