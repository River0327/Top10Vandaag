export type SeoFaq = { question: string; answer: string };

export interface SubcategorySeo {
  title: string;
  question: string;
  description: string;
  category: string;
  keywords: string[];
  faqs: SeoFaq[];
}

export const subcategorySeo: Record<string, SubcategorySeo> = {
  apple: {
    question: "Wat is de beste iPhone?",
    title: "Wat is de beste iPhone? Top 10 van 2026",
    description:
      "Wat is de beste iPhone van 2026? Bekijk onze Top 10 iPhones met camera, batterij, chip en prijzen bij Bol.com en Coolblue.",
    category: "telefoons",
    keywords: ["wat is de beste iPhone", "beste iPhone 2026", "welke iPhone kopen", "iPhone 17 Pro Max"],
    faqs: [
      {
        question: "Wat is de beste iPhone?",
        answer:
          "Op Top 10 Vandaag staat de iPhone 17 Pro Max nu bovenaan: grootste scherm, A19 Pro-chip en de sterkste camera. Welke iPhone het beste is, hangt af van budget en formaat — vergelijk de Top 10 op deze pagina.",
      },
      {
        question: "Wat is de beste iPhone van 2026?",
        answer:
          "In 2026 is de iPhone 17-serie de nieuwste lijn. De Pro Max is de topkeuze; de iPhone 17 en 17e zijn sterke opties als je minder wilt uitgeven.",
      },
      {
        question: "Welke iPhone moet ik kopen?",
        answer:
          "Kies Pro Max voor het grootste scherm en de beste camera, Pro voor een compacter Pro-toestel, standaard 17 voor de nieuwste features zonder Pro-prijs, of 17e als instapper.",
      },
      {
        question: "Is een oudere iPhone nog een goede keuze?",
        answer:
          "Ja. iPhone 16 en 15 blijven sterk, vooral als de prijs is gedaald. Let op resterende software-updates en batterijconditie.",
      },
    ],
  },
  ipad: {
    question: "Wat is de beste iPad?",
    title: "Wat is de beste iPad? Top 10 van 2026",
    description:
      "Wat is de beste iPad van 2026? Vergelijk iPad Pro, Air, mini en standaard op scherm, chip en prijs.",
    category: "telefoons",
    keywords: ["wat is de beste iPad", "beste iPad 2026", "welke iPad kopen", "iPad Pro"],
    faqs: [
      {
        question: "Wat is de beste iPad?",
        answer:
          "De beste iPad hangt af van gebruik. Voor tekenen en video is de iPad Pro de topkeuze; voor dagelijks gebruik is de Air of standaard iPad vaak genoeg. Zie onze Top 10.",
      },
      {
        question: "Welke iPad moet ik kopen?",
        answer:
          "Kies Pro voor maximale prestaties, Air voor een dunne allrounder, mini voor onderweg en de standaard iPad voor de scherpste prijs.",
      },
      {
        question: "Is de iPad Pro de moeite waard?",
        answer:
          "Ja als je veel tekent, monteert of met een Pencil werkt. Voor mail, Netflix en notities is een goedkopere iPad meestal voldoende.",
      },
    ],
  },
  samsung: {
    question: "Wat is de beste Samsung telefoon?",
    title: "Wat is de beste Samsung? Top 10 van 2026",
    description:
      "Wat is de beste Samsung Galaxy van 2026? Vergelijk camera, zoom, batterij en prijs in onze Top 10.",
    category: "telefoons",
    keywords: ["wat is de beste Samsung", "beste Galaxy 2026", "welke Samsung kopen", "Galaxy S"],
    faqs: [
      {
        question: "Wat is de beste Samsung telefoon?",
        answer:
          "De Ultra-modellen staan meestal bovenaan door camera en zoom. Een standaard Galaxy S is vaak de betere deal. Vergelijk de Top 10 Galaxy-toestellen op deze pagina.",
      },
      {
        question: "Wat is de beste Samsung van 2026?",
        answer:
          "In 2026 zijn de nieuwste Galaxy S- en foldables de top. Kijk in onze ranglijst welk model het best scoort op populariteit en prijs in Nederland.",
      },
      {
        question: "Welke Samsung moet ik kopen?",
        answer:
          "Kies Ultra voor zoom en S Pen, Plus/standaard S voor scherm en batterij, of een A-serie als je een scherpere prijs wilt.",
      },
    ],
  },
  oneplus: {
    question: "Wat is de beste OnePlus?",
    title: "Wat is de beste OnePlus? Top 10 van 2026",
    description:
      "Wat is de beste OnePlus telefoon van 2026? Vergelijk snelladen, scherm en prestaties in onze Top 10.",
    category: "telefoons",
    keywords: ["wat is de beste OnePlus", "beste OnePlus 2026", "welke OnePlus kopen"],
    faqs: [
      {
        question: "Wat is de beste OnePlus?",
        answer:
          "Het vlaggenschip van de Open- of nummerreeks staat meestal bovenaan. Kijk in onze Top 10 welk model nu het populairst is bij Bol.com en Coolblue.",
      },
      {
        question: "Welke OnePlus moet ik kopen?",
        answer:
          "Kies het vlaggenschip voor camera en chip, of een Nord-model als je maximale prijs-kwaliteit wilt.",
      },
      {
        question: "Is OnePlus beter dan Samsung?",
        answer:
          "OnePlus scoort vaak op snelladen en prijs. Samsung wint meestal op zoom, software-aanbod en vouwbare toestellen. Vergelijk beide Top 10’s.",
      },
    ],
  },
  google: {
    question: "Wat is de beste Google Pixel?",
    title: "Wat is de beste Pixel? Top 10 van 2026",
    description:
      "Wat is de beste Google Pixel van 2026? Vergelijk camera, Tensor-chip en updates in onze Top 10.",
    category: "telefoons",
    keywords: ["wat is de beste Pixel", "beste Google Pixel 2026", "welke Pixel kopen"],
    faqs: [
      {
        question: "Wat is de beste Google Pixel?",
        answer:
          "De nieuwste Pixel Pro is meestal de beste Pixel voor foto’s. De standaard Pixel is vaak de slimmere koop. Zie de Top 10 op deze pagina.",
      },
      {
        question: "Welke Pixel moet ik kopen?",
        answer:
          "Kies Pro voor telelens en groter scherm, de standaard Pixel voor de beste camera per euro, of een a-model als instapper.",
      },
      {
        question: "Is een Pixel beter voor foto’s dan een iPhone?",
        answer:
          "Pixels blinken uit in rekenfotografie en nachtopnames. iPhones winnen vaak op video en consistentie. Het hangt af van hoe je fotografeert.",
      },
    ],
  },
  oppo: {
    question: "Wat is de beste OPPO telefoon?",
    title: "Wat is de beste OPPO? Top 10 van 2026",
    description:
      "Wat is de beste OPPO van 2026? Vergelijk camera, snelladen en prijs in onze Top 10.",
    category: "telefoons",
    keywords: ["wat is de beste OPPO", "beste OPPO 2026", "welke OPPO kopen"],
    faqs: [
      {
        question: "Wat is de beste OPPO telefoon?",
        answer:
          "Find X-modellen zijn de toppers; Reno-modellen bieden vaak de beste prijs-kwaliteit. Vergelijk de Top 10 OPPO-toestellen hier.",
      },
      {
        question: "Welke OPPO moet ik kopen?",
        answer:
          "Kies Find X voor flagship-camera’s of Reno als je een sterke middenklasser wilt met snel opladen.",
      },
    ],
  },
  playstation: {
    question: "Wat is het beste PlayStation product?",
    title: "Wat is het beste PlayStation product? Top 10",
    description:
      "Wat is het beste PlayStation product van 2026? Consoles, games en accessoires vergeleken in onze Top 10.",
    category: "gaming",
    keywords: ["beste PlayStation", "beste PS5", "PS5 accessoires"],
    faqs: [
      {
        question: "Wat is het beste PlayStation product?",
        answer:
          "De PS5-console is de basis. Daarna scoren DualSense-controllers en populaire games hoog. Zie onze Top 10 PlayStation-producten.",
      },
      {
        question: "Welke PS5 moet ik kopen?",
        answer:
          "Kies Slim of Pro afhankelijk van 4K-gaming en opslag. Accessoires zoals DualSense Edge zijn extra voor competitiespelers.",
      },
    ],
  },
  xbox: {
    question: "Wat is het beste Xbox product?",
    title: "Wat is het beste Xbox product? Top 10 van 2026",
    description:
      "Wat is het beste Xbox product van 2026? Consoles, games en controllers in onze Top 10.",
    category: "gaming",
    keywords: ["beste Xbox", "Xbox Series X", "welke Xbox kopen"],
    faqs: [
      {
        question: "Wat is het beste Xbox product?",
        answer:
          "Xbox Series X is de krachtigste console. Series S is voordeliger voor Game Pass. Bekijk de Top 10 voor accessoires en games.",
      },
      {
        question: "Welke Xbox moet ik kopen?",
        answer:
          "Series X voor 4K en schijven, Series S voor digitale Game Pass in Full HD of 1440p.",
      },
    ],
  },
  nintendo: {
    question: "Wat is het beste Nintendo product?",
    title: "Wat is het beste Nintendo product? Top 10",
    description:
      "Wat is het beste Nintendo product van 2026? Switch en accessoires vergeleken in onze Top 10.",
    category: "gaming",
    keywords: ["beste Nintendo", "beste Switch", "Nintendo accessoires"],
    faqs: [
      {
        question: "Wat is het beste Nintendo product?",
        answer:
          "De Switch-console is het startpunt. Daarna scoren first-party games en Pro Controllers hoog in onze Top 10.",
      },
      {
        question: "Welke Nintendo Switch moet ik kopen?",
        answer:
          "Kies OLED voor het beste scherm in handheld, of een voordeliger model als je vooral docked speelt.",
      },
    ],
  },
  laptops: {
    question: "Wat is de beste laptop?",
    title: "Wat is de beste laptop? Top 10 van 2026",
    description:
      "Wat is de beste laptop van 2026? Vergelijk werk-, studie- en gaming laptops op chip, scherm en prijs.",
    category: "computers",
    keywords: ["wat is de beste laptop", "beste laptop 2026", "welke laptop kopen"],
    faqs: [
      {
        question: "Wat is de beste laptop?",
        answer:
          "Er is geen één beste laptop voor iedereen. Voor werk scoren lichte ultrabooks, voor games dikkere RTX-modellen. Onze Top 10 toont de populairste keuzes in Nederland.",
      },
      {
        question: "Wat is de beste laptop van 2026?",
        answer:
          "In 2026 zijn MacBook- en Windows-modellen met recente chips de toppers. Kijk in de ranglijst welk model nu #1 is.",
      },
      {
        question: "Welke laptop moet ik kopen?",
        answer:
          "Kies 16 GB RAM als minimum voor werk, een dedicated GPU voor games, en 14–16 inch als je veel onderweg bent. Gebruik de voor- en nadelen per model.",
      },
      {
        question: "Is een MacBook beter dan een Windows-laptop?",
        answer:
          "MacBooks winnen op batterij en bouw. Windows wint op games, aansluitingen en prijs. Het hangt af van je software.",
      },
    ],
  },
  desktops: {
    question: "Wat is de beste desktop PC?",
    title: "Wat is de beste desktop PC? Top 10 van 2026",
    description:
      "Wat is de beste desktop of gaming PC van 2026? Vergelijk prestaties, koeling en prijs in onze Top 10.",
    category: "computers",
    keywords: ["wat is de beste desktop", "beste gaming pc", "welke pc kopen"],
    faqs: [
      {
        question: "Wat is de beste desktop PC?",
        answer:
          "De beste desktop hangt af van budget. Gaming towers met recente GPU’s staan vaak bovenaan. Vergelijk onze Top 10 desktop-pc’s.",
      },
      {
        question: "Welke gaming PC moet ik kopen?",
        answer:
          "Let op GPU (RTX-klasse), koeling en of je later wilt upgraden. Onze lijst toont populaire complete systemen bij Bol.com en Coolblue.",
      },
      {
        question: "Is een desktop beter dan een laptop om te gamen?",
        answer:
          "Ja per euro: meer prestaties, beter koel en makkelijker te upgraden. Een laptop wint op mobiliteit.",
      },
    ],
  },
  components: {
    question: "Wat is het beste pc-onderdeel?",
    title: "Wat is de beste GPU of CPU? Top 10 van 2026",
    description:
      "Wat is de beste GPU, CPU of ander pc-onderdeel van 2026? Vergelijk componenten in onze Top 10.",
    category: "computers",
    keywords: ["wat is de beste GPU", "beste CPU 2026", "pc onderdelen vergelijken"],
    faqs: [
      {
        question: "Wat is de beste GPU?",
        answer:
          "De beste videokaart hangt af van resolutie en budget. In onze Top 10 componenten zie je de populairste GPU’s en CPU’s van 2026.",
      },
      {
        question: "Wat is de beste CPU voor gaming?",
        answer:
          "Recente AMD- en Intel-chips in het midden- tot high-endsegment zijn het meest gekozen. Check de ranglijst voor actuele modellen.",
      },
      {
        question: "Welke pc-onderdelen moet ik als eerste upgraden?",
        answer:
          "Bij games meestal de GPU, daarna RAM of opslag. Onze lijst helpt je de meest gekozen upgrades te zien.",
      },
    ],
  },
  gaming_monitors: {
    question: "Wat is de beste gaming monitor?",
    title: "Wat is de beste gaming monitor? Top 10 2026",
    description:
      "Wat is de beste gaming monitor van 2026? Vergelijk refresh rate, OLED en IPS in onze Top 10.",
    category: "schermen",
    keywords: ["wat is de beste gaming monitor", "beste 240 Hz monitor", "OLED monitor"],
    faqs: [
      {
        question: "Wat is de beste gaming monitor?",
        answer:
          "Voor esports telt hoge Hz (240+). Voor singleplayer is 1440p OLED of IPS vaak fijner. Zie onze Top 10 gaming monitoren.",
      },
      {
        question: "Is 144 Hz genoeg?",
        answer:
          "Voor de meeste spelers ja. Alleen competitieve FPS-spelers merken écht verschil bij 240 Hz of hoger.",
      },
      {
        question: "OLED of IPS voor gamen?",
        answer:
          "OLED wint op contrast en responstijd. IPS is voordeliger en minder gevoelig voor inbranden bij statische HUD’s.",
      },
    ],
  },
  office_monitors: {
    question: "Wat is de beste kantoormonitor?",
    title: "Wat is de beste office monitor? Top 10 2026",
    description:
      "Wat is de beste monitor voor kantoor of thuiswerken? Vergelijk USB-C, ergonomie en beeld in onze Top 10.",
    category: "schermen",
    keywords: ["wat is de beste kantoormonitor", "beste thuiswerk monitor", "USB-C monitor"],
    faqs: [
      {
        question: "Wat is de beste kantoormonitor?",
        answer:
          "Een 27-inch 4K- of QHD-scherm met USB-C en in hoogte verstelbare voet is voor de meeste mensen het fijnst. Zie de Top 10 office monitoren.",
      },
      {
        question: "Welke monitor voor thuiswerken?",
        answer:
          "Kies minimaal 27 inch, goede kijkhoek (IPS) en USB-C als je een laptop dockt. Onze lijst is daarop geselecteerd.",
      },
    ],
  },
  controllers: {
    question: "Wat is de beste controller?",
    title: "Wat is de beste controller? Top 10 van 2026",
    description:
      "Wat is de beste gamecontroller van 2026? DualSense, Xbox en pc-controllers vergeleken in onze Top 10.",
    category: "gaming",
    keywords: ["wat is de beste controller", "beste DualSense", "beste Xbox controller"],
    faqs: [
      {
        question: "Wat is de beste controller?",
        answer:
          "DualSense is favoriet voor PlayStation-features, Xbox voor compatibiliteit op pc. Elite-modellen zijn voor wie extra paddles wil. Zie de Top 10.",
      },
      {
        question: "Wat is de beste controller voor pc?",
        answer:
          "Xbox-controllers werken het soepelst op Windows. DualSense kan ook, soms met extra software. Vergelijk de lijst.",
      },
      {
        question: "Welke controller moet ik kopen?",
        answer:
          "Standaard DualSense of Xbox als je een bewezen model wilt; Pro/Elite als je veel competitiespeelt.",
      },
    ],
  },
  headsets: {
    question: "Wat is de beste koptelefoon?",
    title: "Wat is de beste koptelefoon? Top 10 van 2026",
    description:
      "Wat is de beste koptelefoon of headset van 2026? Noise cancelling en gaming-geluid vergeleken in onze Top 10.",
    category: "gaming",
    keywords: ["wat is de beste koptelefoon", "beste noise cancelling", "beste gaming headset"],
    faqs: [
      {
        question: "Wat is de beste koptelefoon?",
        answer:
          "Voor reizen en kantoor scoren Sony WH-1000XM5 en Bose hoog op noise cancelling. Voor games kies je 2,4 GHz-headsets. Zie de Top 10.",
      },
      {
        question: "Wat is de beste koptelefoon met noise cancelling?",
        answer:
          "Sony XM5 staat bij ons hoog vanwege ANC en batterij. Bose QC Ultra is het premium alternatief.",
      },
      {
        question: "Wat is de beste gaming headset?",
        answer:
          "Kies 2,4 GHz (Lightspeed/HyperSpeed) voor lage latency. Microfoon en comfort wegen zwaarder dan 7.1-surround.",
      },
    ],
  },
  keyboards: {
    question: "Wat is het beste toetsenbord?",
    title: "Wat is het beste toetsenbord? Top 10 van 2026",
    description:
      "Wat is het beste toetsenbord van 2026? Mechanisch en draadloos vergeleken voor werk en gaming.",
    category: "gaming",
    keywords: ["wat is het beste toetsenbord", "beste mechanisch toetsenbord", "MX Mechanical"],
    faqs: [
      {
        question: "Wat is het beste toetsenbord?",
        answer:
          "Voor kantoor scoren MX Mechanical en MX Keys. Voor games kies je hot-swap of TKL-boards. Bekijk de Top 10 toetsenborden.",
      },
      {
        question: "Mechanisch of membraan?",
        answer:
          "Mechanisch voelt preciezer en gaat langer mee. Membraan is stiller en goedkoper. De meeste toppers in onze lijst zijn mechanisch.",
      },
      {
        question: "Welk toetsenbord voor werk?",
        answer:
          "Kies draadloos, multi-device en een rustige switch. Logitech MX-modellen zijn daarvoor het meest gekozen.",
      },
    ],
  },
  mice: {
    question: "Wat is de beste muis?",
    title: "Wat is de beste muis? Top 10 van 2026",
    description:
      "Wat is de beste gaming muis of kantoormuis van 2026? Gewicht, sensor en grip in onze Top 10.",
    category: "gaming",
    keywords: ["wat is de beste muis", "beste gaming muis", "Superlight 2", "welke muis kopen"],
    faqs: [
      {
        question: "Wat is de beste muis?",
        answer:
          "Voor FPS is een lichte draadloze muis zoals de G Pro X Superlight 2 de standaard. Voor kantoor is de MX Master 3S populair. Zie de Top 10.",
      },
      {
        question: "Wat is de beste gaming muis?",
        answer:
          "Ultralicht (rond 60 gram) met HERO- of Focus-sensor. Superlight 2 en Viper V3 Pro staan hoog in onze lijst.",
      },
      {
        question: "Welke muis moet ik kopen?",
        answer:
          "Kies symmetrisch voor claw/fingertip, ergonomisch voor palm grip. Productiviteit: verticale of MX Master-muis.",
      },
    ],
  },
  airpods: {
    question: "Wat zijn de beste AirPods?",
    title: "Wat zijn de beste AirPods? Top 10 van 2026",
    description:
      "Wat zijn de beste AirPods van 2026? Pro, Max en standaard vergeleken op ANC, geluid en prijs.",
    category: "gaming",
    keywords: ["wat zijn de beste AirPods", "beste AirPods Pro", "AirPods Max"],
    faqs: [
      {
        question: "Wat zijn de beste AirPods?",
        answer:
          "AirPods Pro zijn voor de meeste mensen de beste keuze door ANC. Max is de over-ear top. Standaard AirPods zijn voordeliger zonder ANC.",
      },
      {
        question: "AirPods Pro of AirPods Max?",
        answer:
          "Pro voor onderweg en sport. Max voor thuis en maximale ANC. Max is zwaarder en duurder.",
      },
      {
        question: "Welke AirPods moet ik kopen?",
        answer:
          "Kies Pro 2/USB-C voor ANC, 4 voor een nieuw instapmodel, Max als je over-ear wilt. Zie de Top 10.",
      },
    ],
  },
  tvs: {
    question: "Wat is de beste tv?",
    title: "Wat is de beste tv? Top 10 van 2026",
    description:
      "Wat is de beste tv van 2026? OLED, QLED en Mini LED vergeleken voor film, sport en gaming.",
    category: "schermen",
    keywords: ["wat is de beste tv", "beste OLED tv", "welke tv kopen 2026"],
    faqs: [
      {
        question: "Wat is de beste tv?",
        answer:
          "Voor film in een donkere kamer is OLED (zoals LG C5) meestal het best. Voor een lichte woonkamer wint QLED of Mini LED op helderheid. Zie de Top 10 tv’s.",
      },
      {
        question: "Wat is de beste OLED tv?",
        answer:
          "LG C5 is de populairste allrounder. Samsung S95F is de premium QD-OLED. Onze ranglijst toont actuele prijzen.",
      },
      {
        question: "OLED of QLED: welke tv moet ik kopen?",
        answer:
          "OLED voor diep zwart en films. QLED voor helderheid overdag en sport. Lees ook onze koopgids OLED vs QLED.",
      },
      {
        question: "Welk tv-formaat moet ik kiezen?",
        answer:
          "Bank op 2,5–3 meter: 55 inch. Op 3–3,5 meter: 65 inch. Grotere kamers: 75 inch of meer.",
      },
    ],
  },
};

export const subcategorySlugs = Object.keys(subcategorySeo);

export function getSubcategorySeo(slug: string): SubcategorySeo | undefined {
  return subcategorySeo[slug];
}
