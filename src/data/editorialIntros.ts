export interface EditorialIntro {
  intro: string;
  guideSlug?: string;
}

export const editorialIntros: Record<string, EditorialIntro> = {
  mice: {
    intro:
      "De beste gaming muizen in 2025 verschillen sterk per speelstijl: FPS-gamers willen licht en draadloos, MMO-spelers hebben veel knoppen nodig en thuiswerkers zoeken ergonomie. In deze lijst vergelijken we populaire modellen op sensor, gewicht, comfort en prijs, zodat je snel de juiste keuze maakt.",
    guideSlug: "beste-gaming-muis-2025",
  },
  headsets: {
    intro:
      "Een goede headset maakt het verschil in competitieve games én lange werkdagen. We rangschikken modellen op geluidskwaliteit, microfoon, draadloos comfort en prijs, van budget tot premium ANC.",
    guideSlug: "beste-gaming-headset-2025",
  },
  keyboards: {
    intro:
      "Mechanisch of membraan? Draadloos of bedraad? Deze Top 10 toetsenborden is samengesteld voor gamers én thuiswerkers die een toetsenbord zoeken dat past bij hun bureau en budget.",
  },
  controllers: {
    intro:
      "Of je nu op Xbox, PlayStation, PC of Switch speelt: de juiste controller bepaalt je comfort en precisie. We vergelijken de populairste pads op build-kwaliteit, features en compatibiliteit.",
  },
  tvs: {
    intro:
      "OLED of QLED? 55 of 65 inch? Deze lijst helpt je de beste TV te vinden voor film, sport en gaming, gerangschikt op beeldkwaliteit, smart-functies en beschikbaarheid bij Nederlandse retailers.",
    guideSlug: "oled-vs-qled-tv",
  },
  gaming_monitors: {
    intro:
      "Refresh rate, resolutie en paneeltype bepalen je game-ervaring. Van budget 1080p tot premium OLED, dit zijn de gaming monitoren die nu het meest gekozen worden.",
    guideSlug: "beste-gaming-monitor-2025",
  },
  office_monitors: {
    intro:
      "Voor kantoorwerk telt leescomfort, kleurweergave en ergonomie meer dan Hz. Deze monitoren zijn geselecteerd op productiviteit, oogcomfort en prijs-kwaliteit.",
  },
  laptops: {
    intro:
      "Gaming laptops moeten prestaties, koeling en draagbaarheid combineren. We vergelijken populaire modellen op GPU, scherm en prijs, voor gamers die ook onderweg willen spelen.",
    guideSlug: "laptop-vs-desktop-gamen",
  },
  desktops: {
    intro:
      "Een gaming desktop levert de meeste prestaties per euro en is makkelijk te upgraden. Deze lijst toont populaire kant-en-klare systemen voor elk budget.",
    guideSlug: "laptop-vs-desktop-gamen",
  },
  components: {
    intro:
      "GPU, CPU of RAM upgraden? Deze componenten zijn populair bij Nederlandse bouwers, geselecteerd op prijs-prestatie en beschikbaarheid.",
  },
  apple: {
    intro:
      "Welke iPhone past bij jouw budget en ecosysteem? We rangschikken de populairste Apple-toestellen op camera, batterij, prestaties en prijs.",
    guideSlug: "beste-smartphone-kiezen",
  },
  samsung: {
    intro:
      "Samsung Galaxy-toestellen bieden sterke schermen en veelzijdige camera's. Dit zijn de modellen die nu het meest verkocht worden in Nederland.",
    guideSlug: "beste-smartphone-kiezen",
  },
};

export const defaultEditorialIntro: EditorialIntro = {
  intro:
    "Deze Top 10 is samengesteld op populariteit, gebruikerservaringen en prijs-kwaliteit. Elk product is beoordeeld op de belangrijkste specificaties voor deze categorie.",
};
