export interface GuideSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface GuideFAQ {
  question: string;
  answer: string;
}

export interface Guide {
  slug: string;
  title: string;
  excerpt: string;
  readTime: string;
  category: string;
  top10Link: string;
  top10Label: string;
  publishedAt: string;
  sections: GuideSection[];
  faqs: GuideFAQ[];
}

export const guides: Guide[] = [
  {
    slug: "beste-gaming-muis-2025",
    title: "Beste gaming muis kiezen in 2025",
    excerpt:
      "FPS, MMO of kantoorwerk, ontdek welke specificaties het verschil maken en welke muis bij jouw speelstijl past.",
    readTime: "4 min",
    category: "Accessoires",
    top10Link: "/top-10/gaming/mice",
    top10Label: "Bekijk Top 10 gaming muizen",
    publishedAt: "2025-06-01",
    sections: [
      {
        heading: "Waarom de juiste muis zo veel uitmaakt",
        paragraphs: [
          "Een gaming muis is meer dan een aanwijsapparaat. Gewicht, sensor en vorm bepalen hoe nauwkeurig je aimt, hoe comfortabel je urenlang speelt en of je muis geschikt is voor jouw gripstijl.",
          "In deze gids leggen we uit waar je op moet letten vóór je koopt en linken we door naar onze actuele Top 10 met de populairste modellen op Bol.com en Coolblue.",
        ],
      },
      {
        heading: "Waar let je op bij het kiezen?",
        paragraphs: ["Deze vijf factoren bepalen 90% van je ervaring:"],
        bullets: [
          "Gewicht, ultralicht (onder 65 g) voor FPS; zwaarder voor MMO met veel knoppen",
          "Sensor, HERO, Focus Pro of vergelijkbaar; minimaal 25.000 DPI voor headroom",
          "Draadloos vs bedraad, moderne draadloos heeft vrijwel geen input lag meer",
          "Vorm, ergonomisch (DeathAdder) vs symmetrisch (Viper) voor claw/palm/fingertip grip",
          "Batterij, oplaadbaar vs AA-batterij (G305: maanden op één batterij)",
        ],
      },
      {
        heading: "Welke muis past bij jou?",
        paragraphs: [
          "Competitieve FPS-spelers kiezen bijna altijd een lichte draadloze muis zoals de Logitech G Pro X Superlight 2 of Razer Viper V3 Pro. MMO-spelers hebben juist veel zijknoppen nodig, denk aan de Corsair Scimitar.",
          "Werk je ook veel op kantoor? Overweeg dan een productiviteitsmuis zoals de MX Master 3S naast je gaming setup, of een allrounder zoals de G502 X Plus als je één muis wilt voor alles.",
        ],
      },
      {
        heading: "Onze aanbeveling",
        paragraphs: [
          "Begin met je budget en speelstijl. Onder de €50 is de Logitech G305 Lightspeed een uitstekende instap. Wil je het beste van het beste? Kijk naar de Superlight 2 of Viper V3 Pro.",
          "Bekijk onze volledige ranglijst met voor- en nadelen per model:",
        ],
      },
    ],
    faqs: [
      {
        question: "Hoe zwaar moet een gaming muis zijn?",
        answer:
          "Voor FPS is 55–70 gram ideaal. Voor MMO of productiviteit mag een muis gerust 90–120 gram wegen als je meer knoppen en ergonomie wilt.",
      },
      {
        question: "Is draadloos net zo snel als bedraad?",
        answer:
          "Met LIGHTSPEED, HyperSpeed of vergelijkbare technologie merk je in de praktijk geen verschil meer ten opzichte van bedraad.",
      },
      {
        question: "Welke gripstijl heb ik?",
        answer:
          "Palm: hele hand op de muis. Claw: vingertoppen + handpalm rust licht. Fingertip: alleen vingertoppen. Kies de vorm die daarbij past.",
      },
    ],
  },
  {
    slug: "oled-vs-qled-tv",
    title: "OLED vs QLED: welke TV past bij jou?",
    excerpt:
      "Diep zwart of extreme helderheid? We leggen het verschil uit zodat je de juiste TV kiest voor film, sport en gaming.",
    readTime: "4 min",
    category: "Schermen",
    top10Link: "/top-10/schermen/tvs",
    top10Label: "Bekijk Top 10 TV's",
    publishedAt: "2025-06-01",
    sections: [
      {
        heading: "Het korte antwoord",
        paragraphs: [
          "Kijk je vooral 's avonds in een donkere kamer? Kies OLED, perfect zwart en filmische contrasten. Zit je in een lichte woonkamer of kijk je veel sport overdag? Dan is QLED (of Mini LED) vaak de betere keuze vanwege de hogere helderheid.",
        ],
      },
      {
        heading: "Wat is OLED?",
        paragraphs: [
          "Bij OLED licht elke pixel zelf op. Zwarte pixels staan echt uit, geen grijs-zwart zoals bij LED-TV's. Dat geeft diepe contrasten en prachtige films.",
          "Nadelen: OLED is gevoeliger voor inbranden bij statische beelden (nieuwszenders, HUD's) en minder helder in felle zonlicht.",
        ],
        bullets: [
          "Perfect zwart en hoog contrast",
          "Ideaal voor film en series in donkere ruimtes",
          "Snelle responstijd, uitstekend voor gaming",
        ],
      },
      {
        heading: "Wat is QLED?",
        paragraphs: [
          "QLED-TV's van Samsung (en vergelijkbare Quantum Dot-modellen) gebruiken een LED-achtergrond met een quantum-dot-laag voor rijke kleuren. Nieuwere modellen zoals de Q7F-serie combineren dit met Mini LED voor betere lokale dimming.",
          "QLED wint op helderheid en is minder gevoelig voor inbranden, prettig bij daglicht en sport.",
        ],
        bullets: [
          "Hogere piekhelderheid",
          "Beter in lichte kamers",
          "Vaak scherper geprijsd in grote formaten (75\"+)",
        ],
      },
      {
        heading: "Gaming op TV: waar let je op?",
        paragraphs: [
          "Check HDMI 2.1, 120 Hz en ALLM (Auto Low Latency Mode). OLED-modellen zoals de Samsung S90F en LG C5 scoren hoog op input lag. QLED is prima voor casual gaming, maar controleer altijd de game-modus.",
          "Onze Top 10 TV's is samengesteld op populariteit, beschikbaarheid en prijs-kwaliteit bij Nederlandse retailers.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is OLED de moeite waard in 2025?",
        answer:
          "Ja, zeker als je veel films kijkt in een donkere ruimte. De prijzen zijn gedaald en modellen als de LG C5 en Samsung S90F bieden uitstekende waarde.",
      },
      {
        question: "Wat is QD-OLED?",
        answer:
          "Samsung's combinatie van OLED met quantum dots, meer helderheid dan traditioneel OLED, met behoud van diep zwart.",
      },
      {
        question: "Welk formaat moet ik kiezen?",
        answer:
          "Vuistregel: bank op 2,5–3 meter afstand → 55\". Op 3–3,5 meter → 65\". Grotere woonkamers: 75\" of groter.",
      },
    ],
  },
  {
    slug: "beste-gaming-headset-2025",
    title: "Beste gaming headset kiezen in 2025",
    excerpt: "Draadloos, ruisonderdrukking of puur gaming-geluid, zo vind je de headset die bij jou past.",
    readTime: "2 min",
    category: "Accessoires",
    top10Link: "/top-10/gaming/headsets",
    top10Label: "Bekijk Top 10 headsets",
    publishedAt: "2025-06-01",
    sections: [
      {
        heading: "Gaming vs hybride gebruik",
        paragraphs: [
          "Pure gaming headsets (SteelSeries Arctis, HyperX Cloud) zijn geoptimaliseerd voor positional audio en een lichte microfoon. Wil je ook muziek en reizen? Kijk naar ANC-modellen zoals de Sony WH-1000XM5 of Bose QC Ultra.",
        ],
      },
      {
        heading: "Draadloos: 2,4 GHz vs Bluetooth",
        paragraphs: [
          "Voor competitief gamen is 2,4 GHz (Lightspeed, HyperSpeed) betrouwbaarder dan Bluetooth. Veel headsets bieden beide, ideaal om tussen PC en telefoon te wisselen.",
        ],
        bullets: [
          "2,4 GHz, laagste latency voor gaming",
          "Bluetooth, handig voor mobiel en Switch",
          "Batterijduur, minimaal 30 uur wenselijk voor draadloos",
        ],
      },
    ],
    faqs: [
      {
        question: "Heb ik 7.1 surround nodig?",
        answer: "Stereogeluid met goede drivers is voor de meeste gamers voldoende. Spatial audio is een nice-to-have, geen must.",
      },
    ],
  },
  {
    slug: "beste-gaming-monitor-2025",
    title: "Beste gaming monitor kiezen in 2025",
    excerpt: "Refresh rate, resolutie en paneeltype, alles wat je moet weten vóór je een gaming monitor koopt.",
    readTime: "2 min",
    category: "Schermen",
    top10Link: "/top-10/schermen/gaming_monitors",
    top10Label: "Bekijk Top 10 gaming monitoren",
    publishedAt: "2025-06-01",
    sections: [
      {
        heading: "1080p, 1440p of 4K?",
        paragraphs: [
          "1080p @ 240 Hz voor competitieve esports. 1440p is de sweet spot voor de meeste gamers, scherp beeld én hoge framerates. 4K alleen met een krachtige GPU (RTX 4070+).",
        ],
      },
      {
        heading: "OLED of IPS voor gaming?",
        paragraphs: [
          "OLED-monitoren bieden het beste contrast en de snelste responstijd, premium keuze. IPS is betaalbaarder, heeft bredere kijkhoeken en is minder gevoelig voor inbranden bij statische HUD's.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is 144 Hz genoeg?",
        answer: "Voor de meeste spelers ja. Alleen hardcore competitive gamers profiteren echt van 240 Hz of hoger.",
      },
    ],
  },
  {
    slug: "laptop-vs-desktop-gamen",
    title: "Laptop vs desktop: wat is beter om te gamen?",
    excerpt: "Mobiliteit of maximale prestaties per euro? We vergelijken beide opties voor Nederlandse gamers.",
    readTime: "2 min",
    category: "Computers",
    top10Link: "/top-10/computers/laptops",
    top10Label: "Bekijk Top 10 laptops",
    publishedAt: "2025-06-01",
    sections: [
      {
        heading: "Wanneer kies je een laptop?",
        paragraphs: [
          "Een gaming laptop is logisch als je op meerdere plekken speelt, aan de universiteit werkt én gamet, of weinig ruimte hebt. Moderne laptops met RTX 4050/4060 draaien de meeste games op medium-hoge instellingen.",
        ],
      },
      {
        heading: "Wanneer kies je een desktop?",
        paragraphs: [
          "Een desktop levert meer prestaties per euro, is makkelijker te upgraden en koelt beter bij lange sessies. Ideaal als je een vast gaming-setup hebt thuis.",
        ],
        bullets: [
          "Desktop, beste prijs-prestatie en upgradebaar",
          "Laptop, draagbaar en alles-in-één",
          "Hybride, laptop voor onderweg + monitor thuis",
        ],
      },
    ],
    faqs: [
      {
        question: "Kan ik een laptop aansluiten op een monitor?",
        answer: "Ja, via HDMI of USB-C. Zo speel je thuis op een groot scherm en neem je de laptop mee onderweg.",
      },
    ],
  },
  {
    slug: "beste-smartphone-kiezen",
    title: "Beste smartphone kiezen in 2025",
    excerpt: "iPhone, Samsung, OnePlus of Google Pixel, zo bepaal je welk toestel bij jouw budget en gebruik past.",
    readTime: "2 min",
    category: "Telefoons",
    top10Link: "/top-10/telefoons/apple",
    top10Label: "Bekijk Top 10 iPhones",
    publishedAt: "2025-06-01",
    sections: [
      {
        heading: "Ecosysteem of vrijheid?",
        paragraphs: [
          "Apple biedt de beste integratie met Mac, iPad en Apple Watch. Android (Samsung, OnePlus, Google) geeft meer keuzevrijheid, betere prijs-prestatie en flexibielere bestandsbeheer.",
        ],
      },
      {
        heading: "Waar let je op?",
        paragraphs: ["Deze punten wegen het zwaarst bij een nieuwe telefoon:"],
        bullets: [
          "Camera, Pixel en iPhone voor fotografie; Samsung voor zoom",
          "Batterijduur, OnePlus en Samsung vaak sterk",
          "Software-updates, iPhone en Pixel: 5+ jaar; check Android-toezegging per merk",
          "Budget, instap vanaf ~€300; flagship €900+",
        ],
      },
    ],
    faqs: [
      {
        question: "Is een ouder flagship nog een goede keuze?",
        answer: "Ja, als de prijs flink is gedaald. Let wel op resterende software-updates en batterijconditie.",
      },
    ],
  },
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}
