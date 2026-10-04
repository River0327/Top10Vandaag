export const layoutDemos = [
  {
    slug: "01",
    name: "Atlas",
    tag: "Compact",
    blurb: "Hero + cijfers, vier categorieën op één rij, picks en gidsen naast elkaar.",
  },
  {
    slug: "02",
    name: "Vitrine",
    tag: "2×2",
    blurb: "Grote gelijke tegels. Overzichtelijk, museumachtig.",
  },
  {
    slug: "03",
    name: "Cover",
    tag: "Uitgelicht",
    blurb: "Eén grote cover-categorie, drie smalle ernaast.",
  },
  {
    slug: "04",
    name: "Index",
    tag: "Typografie",
    blurb: "Categorieën als redactionele lijst met kleine beelden.",
  },
  {
    slug: "05",
    name: "Bento",
    tag: "Mozaïek",
    blurb: "Ongelijk raster: één breed vak, drie kleinere.",
  },
  {
    slug: "06",
    name: "Rail",
    tag: "Zijbalk",
    blurb: "Categorieën links als menu, inhoud rechts.",
  },
  {
    slug: "07",
    name: "Banieren",
    tag: "Stroken",
    blurb: "Elke categorie als brede fotostrook.",
  },
  {
    slug: "08",
    name: "Podium",
    tag: "Product eerst",
    blurb: "Aanbevolen producten bovenaan, categorieën als knoppen.",
  },
  {
    slug: "09",
    name: "Krant",
    tag: "Drie kolommen",
    blurb: "Categorieën, picks en gidsen in drie gelijke kolommen.",
  },
  {
    slug: "10",
    name: "Focus",
    tag: "Smal",
    blurb: "Gecentreerd, weinig ruis, categorieën als rustige knoppen.",
  },
] as const;

export type LayoutSlug = (typeof layoutDemos)[number]["slug"];
