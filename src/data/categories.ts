export interface Subcategory {
  name: string;
  slug: string;
  image: string;
  description: string;
  logo?: string;
}

export interface CategoryInfo {
  title: string;
  question: string;
  seoTitle: string;
  description: string;
  intro: string;
  keywords: string[];
  faqs: { question: string; answer: string }[];
  subcategories: Subcategory[];
}

export type CategoryData = Record<string, CategoryInfo>;

export const categoryData: CategoryData = {
  telefoons: {
    title: "Smartphones en tablets",
    question: "Wat is de beste telefoon?",
    seoTitle: "Wat is de beste telefoon? Top 10 van 2026",
    description:
      "Wat is de beste telefoon van 2026? Kies iPhone, Samsung, Pixel, OnePlus of OPPO en bekijk de Top 10 met prijzen bij Bol.com en Coolblue.",
    intro:
      "Wat is de beste telefoon? Dat hangt af van merk, camera en budget. Op Top 10 Vandaag kies je een merk en zie je daarna de actuele Top 10 — inclusief voor- en nadelen en Nederlandse prijzen.",
    keywords: [
      "wat is de beste telefoon",
      "wat is de beste smartphone",
      "welke telefoon kopen",
      "top 10 beste telefoons",
      "beste telefoon 2026",
    ],
    faqs: [
      {
        question: "Wat is de beste telefoon?",
        answer:
          "Er is niet één beste telefoon voor iedereen. iPhone wint op ecosysteem en video, Pixel op foto, Samsung op zoom. Kies hieronder een merk en bekijk de Top 10.",
      },
      {
        question: "Wat is de beste smartphone van 2026?",
        answer:
          "In 2026 zijn iPhone 17 Pro Max, de nieuwste Galaxy S Ultra en Pixel Pro de meest genoemde vlaggenschepen. Welke het beste is, zie je per merk in onze lijsten.",
      },
      {
        question: "Welke telefoon moet ik kopen?",
        answer:
          "Zit je in Apple? Start bij iPhones. Wil je Android en de beste camera, kies Pixel. Voor zoom en veel features: Samsung. Voor prijs-kwaliteit: OnePlus of OPPO.",
      },
      {
        question: "Is een iPhone beter dan Android?",
        answer:
          "iPhone is sterker in updates en Apple-apparaten. Android (Samsung, Pixel, OnePlus) biedt meer keuze en vaak meer voor je geld. Het hangt af van je andere apparaten.",
      },
    ],
    subcategories: [
      {
        name: "Apple",
        slug: "apple",
        image: "/images/subcategories/subcat-apple.png",
        description: "iPhones",
        logo: "https://cdn.simpleicons.org/apple/ffffff",
      },
      {
        name: "Samsung",
        slug: "samsung",
        image: "/images/subcategories/subcat-samsung.png",
        description: "Galaxy smartphones",
        logo: "https://cdn.simpleicons.org/samsung/ffffff",
      },
      {
        name: "OnePlus",
        slug: "oneplus",
        image: "/images/subcategories/subcat-oneplus.png",
        description: "OnePlus toestellen",
        logo: "https://cdn.simpleicons.org/oneplus/ffffff",
      },
      {
        name: "Oppo",
        slug: "oppo",
        image: "/images/subcategories/subcat-oppo.png",
        description: "Oppo smartphones",
      },
      {
        name: "Google",
        slug: "google",
        image: "/images/subcategories/subcat-google.png",
        description: "Pixel smartphones",
        logo: "https://cdn.simpleicons.org/google/ffffff",
      },
      {
        name: "iPad",
        slug: "ipad",
        image: "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg",
        description: "iPads",
        logo: "https://cdn.simpleicons.org/apple/ffffff",
      },
    ],
  },
  gaming: {
    title: "Gaming accessoires",
    question: "Wat is het beste gaming accessoire?",
    seoTitle: "Wat is de beste controller of headset? Top 10",
    description:
      "Wat is de beste controller, koptelefoon, muis of AirPods? Bekijk de Top 10 gaming accessoires van 2026.",
    intro:
      "Wat is de beste controller of koptelefoon? Kies hieronder het type accessoire en open de Top 10 met de populairste modellen in Nederland.",
    keywords: [
      "wat is de beste controller",
      "wat is de beste koptelefoon",
      "wat is de beste muis",
      "beste gaming accessoires",
    ],
    faqs: [
      {
        question: "Wat is de beste controller?",
        answer: "Open de Top 10 controllers: DualSense en Xbox-controllers zijn de meest gekozen startpunten.",
      },
      {
        question: "Wat is de beste koptelefoon?",
        answer: "Voor ANC Sony of Bose; voor games een 2,4 GHz-headset. Zie de Top 10 koptelefoons.",
      },
      {
        question: "Wat is de beste gaming muis?",
        answer: "Een lichte draadloze muis zoals de Superlight 2. Bekijk de Top 10 muizen.",
      },
    ],
    subcategories: [
      {
        name: "Controllers",
        slug: "controllers",
        image: "/images/subcategories/subcat-controllers.png",
        description: "Controllers",
      },
      {
        name: "Koptelefoons",
        slug: "headsets",
        image: "/images/subcategories/subcat-headsets.png",
        description: "Headsets",
      },
      {
        name: "Toetsenborden",
        slug: "keyboards",
        image: "/images/subcategories/subcat-keyboards.png",
        description: "Toetsenborden",
      },
      {
        name: "Muizen",
        slug: "mice",
        image: "/images/subcategories/subcat-mice.png",
        description: "Muizen",
      },
      {
        name: "AirPods",
        slug: "airpods",
        image: "/images/headsets/07-airpods-max.png",
        description: "AirPods",
      },
    ],
  },
  computers: {
    title: "Computers",
    question: "Wat is de beste laptop?",
    seoTitle: "Wat is de beste laptop of PC? Top 10 van 2026",
    description:
      "Wat is de beste laptop, desktop-pc of GPU van 2026? Vergelijk computers en onderdelen in onze Top 10.",
    intro:
      "Wat is de beste laptop of desktop? Kies laptops, desktops of componenten en bekijk de Top 10 met specs en Nederlandse prijzen.",
    keywords: ["wat is de beste laptop", "wat is de beste desktop", "welke laptop kopen", "beste gaming pc"],
    faqs: [
      {
        question: "Wat is de beste laptop?",
        answer: "Dat hangt af van werk of games. Open de Top 10 laptops voor de populairste modellen van 2026.",
      },
      {
        question: "Wat is beter: laptop of desktop?",
        answer:
          "Desktop levert meer prestaties per euro. Laptop wint als je hem meeneemt. We hebben lijsten voor beide.",
      },
      {
        question: "Wat is de beste gaming PC?",
        answer: "Kijk bij desktop-pc’s naar GPU en koeling. Onze Top 10 desktops toont complete systemen.",
      },
    ],
    subcategories: [
      {
        name: "Laptops",
        slug: "laptops",
        image: "/images/subcategories/subcat-laptops.png",
        description: "Draagbare computers",
      },
      {
        name: "Desktop PC's",
        slug: "desktops",
        image: "/images/subcategories/subcat-desktops.png",
        description: "Vaste computers",
      },
      {
        name: "Componenten",
        slug: "components",
        image: "/images/subcategories/subcat-components.png",
        description: "GPU's, CPU's en meer",
      },
    ],
  },
  schermen: {
    title: "TV's en monitoren",
    question: "Wat is de beste tv?",
    seoTitle: "Wat is de beste tv of monitor? Top 10 van 2026",
    description:
      "Wat is de beste tv, gaming monitor of kantoorscherm van 2026? OLED, QLED en hoge Hz vergeleken.",
    intro:
      "Wat is de beste tv of monitor? Kies TV’s, gaming monitoren of office monitoren en open de Top 10 met beeldkwaliteit en prijs.",
    keywords: ["wat is de beste tv", "welke tv kopen", "wat is de beste gaming monitor", "OLED of QLED"],
    faqs: [
      {
        question: "Wat is de beste tv?",
        answer:
          "OLED voor films, QLED of Mini LED voor een lichte kamer. Open de Top 10 tv’s voor de actuele ranglijst.",
      },
      {
        question: "Wat is de beste gaming monitor?",
        answer: "Hoge refresh rate en lage input lag. Zie de Top 10 gaming monitoren.",
      },
      {
        question: "OLED of QLED?",
        answer:
          "OLED = diep zwart. QLED = meer helderheid overdag. We hebben een koopgids én aparte Top 10 tv’s.",
      },
    ],
    subcategories: [
      {
        name: "TV's",
        slug: "tvs",
        image: "/images/subcategories/subcat-tvs.png",
        description: "Smart TV's en televisies",
      },
      {
        name: "Gaming monitoren",
        slug: "gaming_monitors",
        image: "/images/subcategories/subcat-gaming-monitors.png",
        description: "Hoge refresh rate",
      },
      {
        name: "Office monitoren",
        slug: "office_monitors",
        image: "/images/subcategories/subcat-office-monitors.png",
        description: "Voor werk en kantoor",
      },
    ],
  },
};

export function getCategory(slug: string): CategoryInfo | undefined {
  return categoryData[slug];
}

export const categorySlugs = Object.keys(categoryData);
