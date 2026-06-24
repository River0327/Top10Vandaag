"use client";

import Navigation from "../../components/Navigation";
import PageShell from "../../components/PageShell";
import Link from "next/link";
import { sortStores } from "../../lib/stores";

interface TrendingItem {
  rank: number;
  name: string;
  description: string;
  rating: number;
  image: string;
  categoryLabel: string;
  listHref: string;
  listLabel: string;
  tag?: string;
  stores: { name: string; link: string }[];
}

const trendingItems: TrendingItem[] = [
  {
    rank: 1,
    name: "Sony WH-1000XM5 Wireless Headphones",
    description: "Premium noise-cancelling koptelefoon met brancheleidende ANC en tot 30 uur batterij.",
    rating: 4.9,
    image: "/images/headsets/01-sony-xm5.png",
    categoryLabel: "Koptelefoons",
    listHref: "/top-10/gaming/headsets",
    listLabel: "Top 10 headsets",
    tag: "Meest populair",
    stores: [
      { name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F905648%2Fsony-wh-1000xm5-zwart.html" },
      { name: "Bol.com", link: "https://partner.bol.com/click/click?p=2&t=url&s=1508333&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Fsony-wh-1000xm5-draadloze-koptelefoon-met-noise-cancelling-zwart%2F9300000096972714%2F&name=Sony%20WH-1000XM5%20-%20Draadloze%20Koptelefoon%20met%20Noise%20Cancelling%20-%20Zwart" },
    ],
  },
  {
    rank: 2,
    name: "Logitech G Pro X Superlight 2",
    description: "Ultralichte draadloze esports muis van 60 gram met HERO 2-sensor.",
    rating: 4.9,
    image: "/images/mice/03-g-pro-x-superlight-2.png",
    categoryLabel: "Muizen",
    listHref: "/top-10/gaming/mice",
    listLabel: "Top 10 muizen",
    tag: "Gaming favoriet",
    stores: [
      { name: "Bol.com", link: "https://partner.bol.com/click/click?p=2&t=url&s=1508333&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Flogitech-g-pro-x-superlight-2-draadloze-gaming-muis-lightspeed-wit%2F9300000160446074%2F&name=Logitech%20G%20Pro%20X%20Superlight%202%20-%20Draadloze%20Gaming%20Muis%20-%2060%20gram%20-%20Wit" },
      { name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F936061%2Flogitech-g-pro-x-superlight-2-lightspeed-draadloze-gaming-muis-zwart.html" },
    ],
  },
  {
    rank: 3,
    name: "LG OLED evo AI Smart TV",
    description: "Best overall OLED-tv met AI-beeldverwerking en webOS voor film, sport en gaming.",
    rating: 4.9,
    image: "/images/tvs/01-lg-oled-evo-c5.png",
    categoryLabel: "TV's",
    listHref: "/top-10/schermen/tvs",
    listLabel: "Top 10 TV's",
    tag: "Beste OLED",
    stores: [
      { name: "Bol.com", link: "https://partner.bol.com/click/click?p=2&t=url&s=1508333&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Flg-c5-oled55c55la-55-inch-4k-oled-evo-2025%2F9300000230515238%2F&name=LG%20C5%20OLED55C55LA%20-%2055%20inch%20-%204K%20OLED%20Evo%20-%202025%20-%20Smart%20TV" },
      { name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F963247%2Flg-55-oled-evo-c54-4k-2025.html" },
    ],
  },
  {
    rank: 4,
    name: "Apple iPhone 17 Pro Max",
    description: "Apples topmodel met het grootste scherm, A19 Pro-chip en de sterkste camera.",
    rating: 4.8,
    image: "https://media.s-bol.com/0KDNEKOJNj5V/DRL6Ayq/163x210.jpg",
    categoryLabel: "Telefoons",
    listHref: "/top-10/telefoons/apple",
    listLabel: "Top 10 iPhones",
    tag: "Nieuw",
    stores: [
      { name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F969451%2Fapple-iphone-17-pro-max-256gb-blauw.html" },
      { name: "Bol.com", link: "https://partner.bol.com/click/click?p=2&t=url&s=1508333&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Fapple-iphone-17-pro-max-256gb-cosmic-orange%2F9300000240171924%2F&name=Apple%20iPhone%2017%20Pro%20Max%20-%20Cosmic%20Orange%20-%20256GB%20-%2018MP%20camera" },
    ],
  },
  {
    rank: 5,
    name: "Logitech MX Mechanical Wireless Keyboard",
    description: "Premium draadloos mechanisch toetsenbord voor productief werken met multi-device Bluetooth.",
    rating: 4.8,
    image: "/images/keyboards/01-mx-mechanical.png",
    categoryLabel: "Toetsenborden",
    listHref: "/top-10/gaming/keyboards",
    listLabel: "Top 10 toetsenborden",
    stores: [
      { name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F908468%2Flogitech-mx-mechanical-draadloos-toetsenbord-metaal.html" },
      { name: "Bol.com", link: "https://partner.bol.com/click/click?p=2&t=url&s=1508333&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Flogitech-mx-mechanical-toetsenbord-rf-draadloos-bluetooth-qwertz-duits-grafiet-grijs%2F9300000104777042%2F&name=LOGITECH%20MX%20MECHANICAL%20WIRELESS%20ILLUMINATED%20PERFORMANCE%20KEYBOARD%20AZERTY%20FR" },
    ],
  },
  {
    rank: 6,
    name: "Samsung S95F OLED",
    description: "Topklasse QD-OLED met maximale helderheid en Glare Free-technologie voor thuisbioscoop.",
    rating: 4.9,
    image: "/images/tvs/07-samsung-s95f.png",
    categoryLabel: "TV's",
    listHref: "/top-10/schermen/tvs",
    listLabel: "Top 10 TV's",
    tag: "Premium keuze",
    stores: [
      { name: "Bol.com", link: "https://partner.bol.com/click/click?p=2&t=url&s=1508333&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Fsamsung-qe65s95f-65-inch-4k-qd-oled-2025%2F9300000232685854%2F&name=Samsung%20QE65S95F%20-%2065%20inch%20-%204K%20QD-OLED%20-%202025%20-%20Smart%20TV" },
      { name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F963453%2Fsamsung-65-oled-s95f-4k-2025.html" },
    ],
  },
];

const categoryLinks = [
  { label: "Accessoires", href: "/top-10/gaming" },
  { label: "Schermen", href: "/top-10/schermen" },
  { label: "Telefoons", href: "/top-10/telefoons" },
  { label: "Computers", href: "/top-10/computers" },
];

function StoreButton({ name, link }: { name: string; link: string }) {
  const isCoolblue = name === "Coolblue";
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-center text-sm font-semibold text-white px-4 py-2.5 rounded-lg transition-colors ${
        isCoolblue ? "bg-orange-500 hover:bg-orange-600" : "bg-blue-600 hover:bg-blue-700"
      }`}
    >
      Bekijk op {name}
    </a>
  );
}

export default function TrendingPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <PageShell>
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Trending</h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              De populairste producten op Top 10 Vandaag. Geselecteerd op populariteit, reviews en
              beschikbaarheid bij Nederlandse retailers.
            </p>
          </header>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categoryLinks.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="text-sm px-4 py-2 rounded-full glass-effect hover:bg-white/10 transition-colors text-gray-300"
              >
                {cat.label}
              </Link>
            ))}
          </div>

          <div className="space-y-5">
            {trendingItems.map((item) => (
              <article
                key={item.name}
                className="glass-effect rounded-xl p-5 md:p-6 hover:bg-white/[0.04] transition-colors"
              >
                <div className="flex flex-col md:flex-row gap-5 md:gap-6">
                  <div className="relative shrink-0 mx-auto md:mx-0">
                    <span className="absolute -top-2 -left-2 z-10 bg-black/90 text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center border border-white/10">
                      {item.rank}
                    </span>
                    <div className="w-40 h-40 md:w-44 md:h-44 rounded-lg overflow-hidden bg-white/[0.02] flex items-center justify-center p-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="product-image max-w-full max-h-full object-contain"
                      />
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <Link
                        href={item.listHref}
                        className="text-xs font-medium text-purple-300 bg-purple-500/10 px-2 py-1 rounded hover:bg-purple-500/20 transition-colors"
                      >
                        {item.categoryLabel}
                      </Link>
                      {item.tag && (
                        <span className="text-xs text-amber-400/90 border border-amber-400/20 px-2 py-1 rounded">
                          {item.tag}
                        </span>
                      )}
                      <span className="text-xs text-gray-500 ml-auto">★ {item.rating}/5</span>
                    </div>

                    <h2 className="text-xl md:text-2xl font-bold text-white mb-2">{item.name}</h2>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">{item.description}</p>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                      <Link
                        href={item.listHref}
                        className="text-sm text-purple-300 hover:text-purple-200 transition-colors"
                      >
                        {item.listLabel} →
                      </Link>
                      <div className="flex flex-col sm:flex-row gap-2 sm:ml-auto sm:min-w-[280px]">
                        {sortStores(item.stores).map((store) => (
                          <StoreButton key={store.name} name={store.name} link={store.link} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <section className="mt-12 glass-effect rounded-xl p-8 text-center">
            <h2 className="text-xl font-bold text-white mb-2">Meer producten ontdekken?</h2>
            <p className="text-gray-400 text-sm mb-6">
              Bekijk onze koopgidsen voor advies, of ga direct naar een Top 10 lijst.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/gidsen"
                className="glass-effect px-5 py-2.5 rounded-lg hover:bg-white/10 transition-colors text-sm text-white"
              >
                Koopgidsen
              </Link>
              <Link
                href="/"
                className="bg-orange-500 hover:bg-orange-600 px-5 py-2.5 rounded-lg transition-colors text-sm text-white font-semibold"
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
