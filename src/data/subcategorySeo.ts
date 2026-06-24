export interface SubcategorySeo {
  title: string;
  description: string;
  category: string;
}

export const subcategorySeo: Record<string, SubcategorySeo> = {
  apple: {
    title: "Top 10 Populaire Apple iPhones van 2026",
    description:
      "De populairste iPhones op dit moment, gerangschikt op prestaties en gebruiksgemak. Vergelijk modellen met voor- en nadelen.",
    category: "telefoons",
  },
  ipad: {
    title: "Top 10 Populaire Apple iPads van 2026",
    description:
      "Een overzicht van de meest gekozen iPads, met de belangrijkste verschillen op een rij.",
    category: "telefoons",
  },
  samsung: {
    title: "Top 10 Populaire Samsung Galaxy Telefoons van 2026",
    description:
      "De populairste Samsung smartphones gerangschikt op prestaties en gebruikerservaringen.",
    category: "telefoons",
  },
  oneplus: {
    title: "Top 10 Populaire OnePlus Telefoons van 2026",
    description:
      "De populairste OnePlus smartphones gerangschikt op verkoopcijfers en gebruikerservaringen.",
    category: "telefoons",
  },
  google: {
    title: "Top 10 Populaire Google Pixel Telefoons van 2026",
    description: "De meest gekozen Pixel-telefoons, met duidelijk wat elk model je biedt.",
    category: "telefoons",
  },
  oppo: {
    title: "Top 10 Populaire OPPO Telefoons van 2026",
    description:
      "De populairste OPPO smartphones gerangschikt op verkoopcijfers en gebruikerservaringen.",
    category: "telefoons",
  },
  playstation: {
    title: "Top 10 Beste PlayStation Producten van 2025",
    description:
      "De populairste PlayStation games en accessoires gerangschikt op verkoopcijfers en gebruikerservaringen.",
    category: "gaming",
  },
  xbox: {
    title: "Top 10 Beste Xbox Producten van 2025",
    description:
      "De populairste Xbox games en accessoires gerangschikt op verkoopcijfers en gebruikerservaringen.",
    category: "gaming",
  },
  nintendo: {
    title: "Top 10 Beste Nintendo Producten van 2025",
    description:
      "De populairste Nintendo games en accessoires gerangschikt op verkoopcijfers en gebruikerservaringen.",
    category: "gaming",
  },
  laptops: {
    title: "Top 10 Beste Laptops van 2025",
    description: "De populairste laptops gerangschikt op prestaties en gebruikerservaringen.",
    category: "computers",
  },
  desktops: {
    title: "Top 10 Beste Desktop PC's van 2025",
    description: "De populairste desktop computers gerangschikt op prestaties en gebruikerservaringen.",
    category: "computers",
  },
  components: {
    title: "Top 10 Beste PC Componenten van 2025",
    description: "De beste GPU's, CPU's en andere PC-onderdelen vergeleken.",
    category: "computers",
  },
  gaming_monitors: {
    title: "Top 10 Beste Gaming Monitoren van 2025",
    description: "Gaming monitoren met hoge refresh rate en lage input lag vergeleken.",
    category: "schermen",
  },
  office_monitors: {
    title: "Top 10 Beste Office Monitoren van 2025",
    description: "Monitoren voor werk en kantoor, gerangschikt op beeldkwaliteit en comfort.",
    category: "schermen",
  },
  controllers: {
    title: "Top 10 Beste Controllers van 2025",
    description: "De beste gamecontrollers voor PC, PlayStation en Xbox vergeleken.",
    category: "gaming",
  },
  headsets: {
    title: "Top 10 Beste Koptelefoons van 2025",
    description: "De beste gaming headsets en koptelefoons vergeleken op geluid en comfort.",
    category: "gaming",
  },
  keyboards: {
    title: "Top 10 Beste Toetsenborden van 2025",
    description: "De beste gaming en office toetsenborden vergeleken.",
    category: "gaming",
  },
  mice: {
    title: "Top 10 Beste Muizen van 2025",
    description: "De beste gaming muizen vergeleken op sensor, gewicht en ergonomie.",
    category: "gaming",
  },
  tvs: {
    title: "Top 10 meest populaire TV's van 2026",
    description: "Smart TV's met OLED en QLED voor film, sport en gaming vergeleken.",
    category: "schermen",
  },
};

export const subcategorySlugs = Object.keys(subcategorySeo);

export function getSubcategorySeo(slug: string): SubcategorySeo | undefined {
  return subcategorySeo[slug];
}
