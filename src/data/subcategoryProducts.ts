export interface ProductStore {
  name: string;
  link?: string;
  bolProductId?: string;
  approxPrice?: string;
}

export interface Product {
  name?: string;
  description?: string;
  rating?: number;
  image?: string;
  pros: string[];
  cons: string[];
  stores: ProductStore[];
}

export interface SubcategoryData {
  title: string;
  description: string;
  products: Product[];
}

export const subcategoryData: { [key: string]: SubcategoryData } = {
  apple: {
    title: "Top 10 Populaire Apple iPhones van 2026",
    description: "De populairste iPhones op dit moment, gerangschikt op prestaties en gebruiksgemak.",
    products: [
      {
        name: "Apple iPhone 17 Pro Max",
        description: "De iPhone 17 Pro Max is het absolute topmodel van Apple met het grootste scherm en de sterkste prestaties. Perfect voor wie het maximale uit foto's, video en multitasking wil halen.",
        rating: 4.8,
        image: "/images/iphone/iph_1.png",
        pros: [
          "Scherm: 6,9 inch OLED",
          "Camera: 48 MP",
          "Chip: A19 Pro"
        ],
        cons: [],
        stores: [
          {
            name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F969451%2Fapple-iphone-17-pro-max-256gb-blauw.html", approxPrice: "€ 1.369"
          },
          {
            name: "Bol.com", bolProductId: "9300000240171924", approxPrice: "€ 1.219"
          }
        ]
      },
      {
        name: "Apple iPhone 17 Pro",
        description: "De iPhone 17 Pro combineert Pro-camera's en topchip in een iets compacter formaat dan de Max. Ideaal als je Pro-functies wilt zonder het grootste toestel.",
        rating: 4.7,
        image: "/images/iphone/iph_2.png",
        pros: [
          "Scherm: 6,3 inch OLED",
          "Camera: 48 MP",
          "Chip: A19 Pro"
        ],
        cons: [],
        stores: [
          {
            name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F979992%2Fapple-iphone-17-pro-256gb-blauw-snellader.html", approxPrice: "€ 1.279"
          },
          { name: "Bol.com", bolProductId: "9300000240171763", approxPrice: "€ 1.138" }
        ]
      },
      {
        name: "Apple iPhone 17",
        description: "De standaard iPhone 17 biedt de nieuwste generatie features voor een breder publiek. Een uitstekende keuze als je een actuele iPhone zoekt zonder Pro-prijs.",
        rating: 4.7,
        image: "/images/iphone/iph_3.png",
        pros: [
          "Scherm: 6,3 inch OLED",
          "Camera: 48 MP",
          "Chip: A19"
        ],
        cons: [],
        stores: [
          {
            name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F979991%2Fapple-iphone-17-256gb-zwart-snellader.html", approxPrice: "€ 1.139"
          },
          { name: "Bol.com", bolProductId: "9300000240171936", approxPrice: "€ 979" }
        ]
      },
      {
        name: "Apple iPhone 17e",
        description: "De iPhone 17e is het instapmodel van de nieuwste lijn met de belangrijkste iPhone-ervaring tegen een scherpere prijs. Slimme keuze voor wie modern iOS wil zonder flagship-budget.",
        rating: 4.6,
        image: "/images/iphone/iph_4.png",
        pros: [
          "Scherm: 6,1 inch OLED",
          "Camera: 48 MP",
          "Chip: A19"
        ],
        cons: [],
        stores: [
          {
            name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F979995%2Fapple-iphone-17e-256gb-zwart-snellader.html", approxPrice: "€ 884"
          },
          { name: "Bol.com", bolProductId: "9300000266256313", approxPrice: "€ 819" }
        ]
      },
      {
        name: "Apple iPhone 16 Pro Max",
        description: "De iPhone 16 Pro Max blijft een krachtig vlaggenschip met groot scherm en Pro-camera's. Aantrekkelijk als je top-specificaties wilt tegen een iets lagere prijs dan de 17-serie.",
        rating: 4.5,
        image: "/images/iphone/iph_5.png",
        pros: [
          "Scherm: 6,9 inch OLED",
          "Camera: 48 MP",
          "Chip: A18 Pro"
        ],
        cons: [],
        stores: [
          { name: "Bol.com", bolProductId: "9300000189439873", approxPrice: "€ 1.589" }
        ]
      },
      {
        name: "Apple iPhone 16 Pro (Refurbished)",
        description: "Een gereviseerde iPhone 16 Pro levert Pro-prestaties en premium design voor minder geld. Duurzame keuze met dezelfde kernervaring als een nieuw exemplaar.",
        rating: 4.7,
        image: "/images/iphone/iph_6.png",
        pros: [
          "Scherm: 6,3 inch OLED",
          "Camera: 48 MP",
          "Chip: A18 Pro"
        ],
        cons: [],
        stores: [
          { name: "Bol.com", bolProductId: "9300000189454726", approxPrice: "€ 1.385" }
        ]
      },
      {
        name: "Apple iPhone 16",
        description: "De iPhone 16 brengt het nieuwe camerasysteem en de A18-chip naar het reguliere formaat. Sterk allround-toestel voor dagelijks gebruik en contentcreatie.",
        rating: 4.8,
        image: "/images/iphone/iph_7.png",
        pros: [
          "Scherm: 6,1 inch OLED",
          "Camera: 48 MP",
          "Chip: A18"
        ],
        cons: [],
        stores: [
          {
            name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F952114%2Fapple-iphone-16-128gb-zwart.html", approxPrice: "€ 969"
          },
            { name: "Bol.com", bolProductId: "9300000189439876", approxPrice: "€ 849" }
        ]
      },
      {
        name: "Apple iPhone 15",
        description: "De iPhone 15 introduceerde Dynamic Island en USB-C en blijft zeer capabel in 2026. Nog steeds een betrouwbare iPhone met moderne basis en goede camera.",
        rating: 4.9,
        image: "/images/iphone/iph_8.png",
        pros: [
          "Scherm: 6,1 inch OLED",
          "Camera: 48 MP",
          "Chip: A16 Bionic"
        ],
        cons: [],
        stores: [
          {
            name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F935188%2Fapple-iphone-15-128gb-zwart.html", approxPrice: "€ 709"
          },
          { name: "Bol.com", bolProductId: "9300000161136294", approxPrice: "€ 709" }
        ]
      },
      {
        name: "Apple iPhone 15 Plus (Refurbished)",
        description: "De iPhone 15 Plus refurbished biedt een groot 6,7-inch scherm en lange gebruiksduur voor een lagere prijs. Fijn als je veel media kijkt en een Plus-formaat zoekt.",
        rating: 4.7,
        image: "/images/iphone/iph_9.png",
        pros: [
          "Scherm: 6,7 inch OLED",
          "Camera: 48 MP",
          "Chip: A16 Bionic"
        ],
        cons: [],
        stores: [
          { name: "Bol.com", bolProductId: "9300000161136553", approxPrice: "€ 490" }
        ]
      },
      {
        name: "Apple iPhone 14",
        description: "De iPhone 14 is een bewezen model met solide cameras en crashdetectie. Interessant als instap in het Apple-ecosysteem met lagere aanschafkosten.",
        rating: 4.6,
        image: "/images/iphone/iph_10.png",
        pros: [
          "Scherm: 6,1 inch OLED",
          "Camera: 12 MP",
          "Chip: A15 Bionic"
        ],
        cons: [],
        stores: [
          { name: "Bol.com", bolProductId: "9300000123038693", approxPrice: "€ 849" }
        ]
      }
    ]
  },
  ipad: {
    title: "Top 10 Populaire Apple iPads van 2026",
    description: "Een overzicht van de meest gekozen iPads, met de belangrijkste verschillen op een rij",
    products: [
      {
        name: 'Apple iPad (2025) 11" 128GB',
        description: "De instap in de nieuwe iPad-lijn. Met 11 inch scherm en 128 GB heb je genoeg voor school, studie en dagelijks gebruik.",
        rating: 0,
        image: "/images/ipad/ip_1.png",
        pros: [
          "11 inch Liquid Retina scherm",
          "128 GB opslag",
          "Laagste instapprijs in deze lijst"
        ],
        cons: [],
        stores: [
          { name: "Bol.com", bolProductId: "9300000226757671", approxPrice: "€ 450" },
          {
            name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F961491%2Fapple-ipad-2025-11-inch-128gb-wifi-blauw.html", approxPrice: "€ 486"
          }
        ]
      },
      {
        name: 'Apple iPad Air (2026) 11" M4',
        description: "De Air zit tussen de gewone iPad en de Pro in. Met de M4-chip voelt hij snel aan, ook als je tekent, werkt of meerdere apps open hebt.",
        rating: 0,
        image: "/images/ipad/ip_2.png",
        pros: [
          "11 inch scherm, makkelijk mee te nemen",
          "M4-chip voor studie en werk",
          "Geschikt voor Apple Pencil Pro"
        ],
        cons: [],
        stores: [
          { name: "Bol.com", bolProductId: "9300000266298200", approxPrice: "€ 749" },
          {
            name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F976740%2Fapple-ipad-air-2026-11-inch-256gb-wifi-grijs.html", approxPrice: "€ 849"
          }
        ]
      },
      {
        name: 'Apple iPad Air (2026) 13" M4',
        description: "Dezelfde kracht als de Air van 11 inch, met een groter scherm. Fijn als je vaker met twee vensters naast elkaar werkt of veel video kijkt.",
        rating: 0,
        image: "/images/ipad/ip_3.png",
        pros: [
          "13 inch scherm met meer werkruimte",
          "M4-chip",
          "Lichter en vaak goedkoper dan de Pro 13 inch"
        ],
        cons: [],
        stores: [
          { name: "Bol.com", bolProductId: "9300000266298148", approxPrice: "€ 924" },
          {
            name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F976753%2Fapple-ipad-air-2026-13-inch-256gb-wifi-grijs.html", approxPrice: "€ 1.049"
          }
        ]
      },
      {
        name: 'Apple iPad Pro (2025) 11" M5',
        description: "De compacte Pro voor wie serieus met video, design of zware apps werkt, maar geen groot tablet wil. De M5-chip en het 120 Hz-scherm maken het verschil merkbaar.",
        rating: 0,
        image: "/images/ipad/ip_4.png",
        pros: [
          "11 inch Pro-scherm met 120 Hz",
          "M5-chip voor professioneel gebruik",
          "Past beter in de hand dan de 13 inch Pro"
        ],
        cons: [],
        stores: [
          { name: "Bol.com", bolProductId: "9300000244057427", approxPrice: "€ 1.529" },
          {
            name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F971060%2Fapple-ipad-pro-2025-11-inch-256gb-wifi-zwart.html", approxPrice: "€ 1.269"
          }
        ]
      },
      {
        name: 'Apple iPad Pro (2025) 13" M5',
        description: "Apples krachtigste tablet met het grootste scherm. Bedoeld voor creatief werk, professionele apps en wie het maximale uit een iPad wil halen.",
        rating: 0,
        image: "/images/ipad/ip_5.png",
        pros: [
          "13 inch scherm met Pro-kwaliteit",
          "M5-chip",
          "Geschikt voor video, design en zware apps"
        ],
        cons: [],
        stores: [
          {
            name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F971072%2Fapple-ipad-pro-2025-13-inch-256gb-wifi-zwart.html", approxPrice: "€ 1.529"
          }
        ]
      },
      {
        name: "Apple iPad Mini 7 (2024) 5G",
        description: "De kleinste iPad in het overzicht, met mobiel internet. Handig om te lezen en onderweg online te blijven, ook zonder wifi.",
        rating: 0,
        image: "/images/ipad/ip_6.png",
        pros: [
          "8,3 inch scherm in compact formaat",
          "5G voor internet buiten wifi",
          "128 GB opslag"
        ],
        cons: [],
        stores: [
          { name: "Bol.com", bolProductId: "9300000193725381", approxPrice: "€ 915" },
          {
            name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F956098%2Fapple-ipad-mini-7-2024-128gb-wifi-5g-space-gray.html", approxPrice: "€ 859"
          }
        ]
      },
      {
        name: 'Apple iPad (2025) 11" 256GB',
        description: "Hetzelfde toestel als de iPad van 128 GB, maar met twee keer zoveel opslag. Een logische keuze als je veel apps, foto’s of offline content bewaart.",
        rating: 0,
        image: "/images/ipad/ip_7.png",
        pros: [
          "11 inch scherm",
          "256 GB opslag",
          "Meer ruimte zonder Air- of Pro-prijs"
        ],
        cons: [],
        stores: [
          { name: "Bol.com", bolProductId: "9300000226757636", approxPrice: "€ 615" },
          {
            name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F960491%2Fapple-ipad-2025-11-inch-256gb-wifi-zilver.html", approxPrice: "€ 605"
          }
        ]
      },
      {
        name: 'Apple iPad Air (2026) 11" 256GB',
        description: "De populaire Air van 11 inch met extra opslag. Past goed bij studenten en thuiswerkers die veel documenten, apps en bestanden op het toestel bewaren.",
        rating: 0,
        image: "/images/ipad/ip_8.png",
        pros: [
          "11 inch scherm",
          "256 GB opslag",
          "M4-chip met ruimte voor groei"
        ],
        cons: [],
        stores: [
          { name: "Bol.com", bolProductId: "9300000266298419", approxPrice: "€ 749" },
          {
            name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F976740%2Fapple-ipad-air-2026-11-inch-256gb-wifi-grijs.html", approxPrice: "€ 849"
          }
        ]
      },
      {
        name: 'Apple iPad Air (2026) 13" 256GB',
        description: "Combineert een groot 13 inch scherm met 256 GB opslag. Geschikt voor wie veel projecten, PDF’s en apps op één tablet wil houden.",
        rating: 0,
        image: "/images/ipad/ip_9.png",
        pros: [
          "13 inch scherm",
          "256 GB opslag",
          "M4-chip voor intensiever gebruik"
        ],
        cons: [],
        stores: [
          { name: "Bol.com", bolProductId: "9300000266298197", approxPrice: "€ 1.070" },
          {
            name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F976753%2Fapple-ipad-air-2026-13-inch-256gb-wifi-grijs.html", approxPrice: "€ 1.049"
          }
        ]
      },
      {
        name: 'Apple iPad Air (2025) 11" M3 256GB',
        description: "De vorige Air-generatie met M3-chip en 256 GB opslag. Nog steeds krachtig genoeg voor studie en werk, met extra ruimte voor apps en bestanden.",
        rating: 0,
        image: "/images/ipad/ip_10.png",
        pros: [
          "11 inch Liquid Retina scherm",
          "M3-chip en 256 GB opslag",
          "Vaak scherper geprijsd dan de Air 2026 met 256 GB"
        ],
        cons: [],
        stores: [
          { name: "Bol.com", bolProductId: "9300000226757746", approxPrice: "€ 815" },
          {
            name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F960497%2Fapple-ipad-air-2025-11-inch-256gb-wifi-space-gray.html", approxPrice: "€ 745"
          }
        ]
      }
    ]
  },
  samsung: {
    title: "Top 10 Populaire Samsung Galaxy Telefoons van 2026",
    description: "De populairste Samsung smartphones gerangschikt op prestaties en gebruikerservaringen",
    products: [
      {
        name: "Samsung Galaxy S26 Ultra",
        description: "De Galaxy S26 Ultra is Samsung's absolute top met S Pen, 200 MP camera en het grootste scherm. De beste keuze voor power users en creatievelingen.",
        rating: 0,
        image: "/images/samsung/ss_1.png",
        pros: [
          "Scherm: 6,9 inch Dynamic AMOLED 2X",
          "Camera: 200 MP met 5x optische zoom",
          "S Pen en titanium behuizing"
        ],
        cons: [],
        stores: [
          { name: "Bol.com", bolProductId: "9300000265051702", approxPrice: "€ 925" },
          { name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F975476%2Fsamsung-galaxy-s26-ultra-512gb-zwart-5g.html", approxPrice: "€ 1.419" }
        ]
      },
      {
        name: "Samsung Galaxy S26 Plus",
        description: "De S26 Plus biedt vlaggenschipprestaties in een groot maar handig formaat. Ideale balans tussen scherm, batterij en dagelijkse snelheid.",
        rating: 0,
        image: "/images/samsung/ss_2.png",
        pros: [
          "Scherm: 6,7 inch Dynamic AMOLED 2X",
          "Camera: 50 MP driedubbel systeem",
          "Batterij: 5000 mAh met snelladen"
        ],
        cons: [],
        stores: [
          { name: "Bol.com", bolProductId: "9300000265030601", approxPrice: "€ 929" },
          { name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F975462%2Fsamsung-galaxy-s26-plus-256gb-zwart-5g.html", approxPrice: "€ 1.029" }
        ]
      },
      {
        name: "Samsung Galaxy S26",
        description: "De compacte S26 levert premium hardware in een enkel-hand-vriendelijk formaat. Perfect als je een echt vlaggenschip wilt zonder enorm toestel.",
        rating: 0,
        image: "/images/samsung/ss_3.png",
        pros: [
          "Scherm: 6,2 inch Dynamic AMOLED 2X",
          "Camera: 50 MP driedubbel systeem",
          "Compact vlaggenschipformaat"
        ],
        cons: [],
        stores: [
          { name: "Bol.com", bolProductId: "9300000265051690", approxPrice: "€ 725" },
          { name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F975476%2Fsamsung-galaxy-s26-ultra-512gb-zwart-5g.html", approxPrice: "€ 1.419" }
        ]
      },
      {
        name: "Samsung Galaxy S25 Ultra",
        description: "De S25 Ultra blijft een camera- en productiviteitsbeest met S Pen en groot display. Slim als je vorige generatie topklasse zoekt tegen scherpere prijs.",
        rating: 0,
        image: "/images/samsung/ss_4.png",
        pros: [
          "Scherm: 6,9 inch Dynamic AMOLED 2X",
          "Camera: 200 MP met S Pen",
          "Chip: Snapdragon 8 Gen 3"
        ],
        cons: [],
        stores: [
          { name: "Bol.com", bolProductId: "9300000220317959", approxPrice: "€ 930" },
          { name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F975476%2Fsamsung-galaxy-s26-ultra-512gb-zwart-5g.html", approxPrice: "€ 1.419" }
        ]
      },
      {
        name: "Samsung Galaxy A57 5G",
        description: "De Galaxy A57 5G is het sterke middenklassemodel van Samsung met 120Hz-scherm en IP67. Uitstekende dagelijkse telefoon met premium trekjes.",
        rating: 0,
        image: "/images/samsung/ss_5.png",
        pros: [
          "Scherm: 6,7 inch Super AMOLED 120Hz",
          "Camera: 50 MP met optische beeldstabilisatie",
          "IP67 en 5000 mAh batterij"
        ],
        cons: [],
        stores: [
          { name: "Bol.com", bolProductId: "9300000271900488", approxPrice: "€ 400" },
          { name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F976545%2Fsamsung-galaxy-a57-256gb-grijs-5g.html", approxPrice: "€ 480" }
        ]
      },
      {
        name: "Samsung Galaxy A56 5G",
        description: "De A56 5G combineert AI-tools en 120Hz AMOLED in een betaalbare A-serie behuizing. Goede keuze voor wie slimme Samsung-features wil zonder S-prijs.",
        rating: 0,
        image: "/images/samsung/ss_6.png",
        pros: [
          "Scherm: 6,7 inch Super AMOLED 120Hz",
          "Camera: 50 MP dubbele camera",
          "5G en Knox-beveiliging"
        ],
        cons: [],
        stores: [
          { name: "Bol.com", bolProductId: "9300000225539117", approxPrice: "€ 359" },
          { name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F960968%2Fsamsung-galaxy-a56-128gb-zwart-5g.html", approxPrice: "€ 377" }
        ]
      },
      {
        name: "Samsung Galaxy A37 5G",
        description: "De A37 5G richt zich op gebruikers die een groot scherm en lange batterij willen voor weinig geld. Solide 5G-middenklasser voor alledaags werk.",
        rating: 0,
        image: "/images/samsung/ss_7.png",
        pros: [
          "Scherm: 6,6 inch Super AMOLED",
          "Camera: 50 MP hoofdcamera",
          "Lange batterijduur met 5G"
        ],
        cons: [],
        stores: [
          { name: "Bol.com", bolProductId: "9300000265834600", approxPrice: "€ 329" },
          { name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F976536%2Fsamsung-galaxy-a37-256gb-zwart-5g.html", approxPrice: "€ 429" }
        ]
      },
      {
        name: "Samsung Galaxy A26 5G",
        description: "De A26 5G levert essentiële Samsung-kwaliteit met 5G en een scherpe prijs. Instap in de A-serie zonder in te leveren op formaat.",
        rating: 0,
        image: "/images/samsung/ss_8.png",
        pros: [
          "Scherm: 6,7 inch groot display",
          "Camera: 50 MP hoofdcamera",
          "5G met scherpe prijs-kwaliteit"
        ],
        cons: [],
        stores: [
          { name: "Bol.com", bolProductId: "9300000233562433", approxPrice: "€ 249" },
          { name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F960931%2Fsamsung-galaxy-a26-128gb-zwart-5g.html", approxPrice: "€ 259" }
        ]
      },
      {
        name: "Samsung Galaxy A17 5G",
        description: "De A17 5G is het budgetinstapmodel met groot scherm en 5G voor dagelijks gebruik. Ideaal als eerste smartphone of spare toestel.",
        rating: 0,
        image: "/images/samsung/ss_9.png",
        pros: [
          "Scherm: 6,7 inch groot display",
          "5G ondersteuning",
          "Budgetvriendelijk met lange batterijduur"
        ],
        cons: [],
        stores: [
          { name: "Bol.com", bolProductId: "9300000237500868", approxPrice: "€ 195" },
          { name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F967620%2Fsamsung-galaxy-a17-128gb-zwart-5g.html", approxPrice: "€ 229" }
        ]
      },
      {
        name: "Samsung Galaxy Z Fold 7",
        description: "De Z Fold 7 verandert van telefoon in tablet met een imposant vouwscherm. Voor wie multitasken, productiviteit en innovatie centraal zet.",
        rating: 0,
        image: "/images/samsung/ss_10.png",
        pros: [
          "Scherm: 7,6 inch opvouwbaar + 6,4 inch cover",
          "Multitasking op groot vouwscherm",
          "Chip: Snapdragon 8 Elite"
        ],
        cons: [],
        stores: [
          { name: "Bol.com", bolProductId: "9300000236074232", approxPrice: "€ 1.355" },
          { name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F966261%2Fsamsung-galaxy-z-fold-7-512gb-blauw-5g.html", approxPrice: "€ 1.959" }
        ]
      }
    ]
  },
  oneplus: {
    title: "Top 10 Populaire OnePlus Telefoons van 2026",
    description: "De populairste OnePlus smartphones gerangschikt op verkoopcijfers en gebruikerservaringen",
    products: [
      {
        name: "OnePlus 15",
        description: "De OnePlus 15 is het nieuwste vlaggenschip met Hasselblad-camera's en razendsnel 100W-laden. Voor liefhebbers van snelle OxygenOS en sterke hardware.",
        rating: 0,
        image: "/images/oneplus/op_1nb.png",
        pros: [
          "Scherm: 6,82 inch LTPO AMOLED 120Hz",
          "Camera: Hasselblad driedubbel systeem",
          "100W SUPERVOOC snelladen"
        ],
        cons: [],
        stores: [
          { name: "Bol.com", bolProductId: "9300000243169165", approxPrice: "€ 1.395" },
          { name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F970468%2Foneplus-15-512gb-zwart-5g.html", approxPrice: "€ 919" }
        ]
      },
      {
        name: "OnePlus 13",
        description: "De OnePlus 13 combineert Hasselblad-fotografie met Snapdragon 8 Gen 3 in een verfijnd design. Nog steeds topkeuze als je het vorige vlaggenschip zoekt.",
        rating: 0,
        image: "/images/oneplus/op_2nb.png",
        pros: [
          "Scherm: 6,7 inch LTPO AMOLED",
          "Camera: Hasselblad driedubbel systeem",
          "Chip: Snapdragon 8 Gen 3"
        ],
        cons: [],
        stores: [
          { name: "Bol.com", bolProductId: "9300000220363404", approxPrice: "€ 1.068" },
          { name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F957541%2Foneplus-13-512gb-blauw-5g.html", approxPrice: "€ 849" }
        ]
      },
      {
        name: "OnePlus 15R",
        description: "De 15R is de performance-variant met grote batterij en gamingkracht. Perfect voor gamers en heavy users die snelheid boven alles zetten.",
        rating: 0,
        image: "/images/oneplus/op_3nb.png",
        pros: [
          "Scherm: 6,78 inch AMOLED 120Hz",
          "Chip: Snapdragon 8 Gen 3",
          "Grote batterij met gamingprestaties"
        ],
        cons: [],
        stores: [
          { name: "Bol.com", bolProductId: "9300000252612783", approxPrice: "€ 710" },
          { name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F973314%2Foneplus-15r-256gb-zwart-5g.html", approxPrice: "€ 579" }
        ]
      },
      {
        name: "OnePlus Nord 5",
        description: "De Nord 5 brengt snelle 80W-lading en een vlot scherm naar de populaire Nord-lijn. Sterke middenklasser met typische OnePlus-waarde.",
        rating: 0,
        image: "/images/oneplus/op_4nb.png",
        pros: [
          "Scherm: 6,7 inch AMOLED 120Hz",
          "Chip: Snapdragon 7 Gen 3",
          "80W SUPERVOOC snelladen"
        ],
        cons: [],
        stores: [
          { name: "Bol.com", bolProductId: "9300000233834189", approxPrice: "€ 384" },
          { name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F966129%2Foneplus-nord-5-512gb-blauw-5g.html", approxPrice: "€ 549" }
        ]
      },
      {
        name: "OnePlus Nord CE5",
        description: "De Nord CE5 is de betaalbare Nord voor wie OxygenOS en 5G wil zonder top-prijs. Eerlijk alledaags toestel met snelladen.",
        rating: 0,
        image: "/images/oneplus/op_5nb.png",
        pros: [
          "Scherm: 6,7 inch AMOLED",
          "5G met OxygenOS",
          "Betaalbare middenklasser met snelladen"
        ],
        cons: [],
        stores: [
          { name: "Bol.com", bolProductId: "9300000233834183", approxPrice: "€ 366" },
          { name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F966132%2Foneplus-nord-ce-5-256gb-zwart-5g.html", approxPrice: "€ 352" }
        ]
      },
      {
        name: "OnePlus Open",
        description: "De OnePlus Open is een opvouwbare met groot intern scherm en Hasselblad-optiek. Uniek als je tabletcomfort in je broekzak wilt.",
        rating: 0,
        image: "/images/oneplus/op_6nb.png",
        pros: [
          "Scherm: groot opvouwbaar intern display",
          "Camera: Hasselblad driedubbel systeem",
          "Multitasking met OxygenOS"
        ],
        cons: [],
        stores: [
          { name: "Bol.com", bolProductId: "9300000169556063" }
        ]
      },
      {
        name: "OnePlus 12",
        description: "De OnePlus 12 blijft een krachtig vlaggenschip met 100W-laden en Hasselblad-triple camera. Aantrekkelijk als vorige generatie topmodel.",
        rating: 0,
        image: "/images/oneplus/op_7nb.png",
        pros: [
          "Chip: Snapdragon 8 Gen 3",
          "Camera: Hasselblad driedubbel systeem",
          "100W SUPERVOOC snelladen"
        ],
        cons: [],
        stores: [
          { name: "Bol.com", bolProductId: "9300000171714141", approxPrice: "€ 820" }
        ]
      },
      {
        name: "OnePlus Nord 4 (Refurbished)",
        description: "Een gereviseerde Nord 4 levert snelle 7+ Gen 3 en 80W-laden voor minder. Slimme middenklasser met bijna nieuwe ervaring.",
        rating: 0,
        image: "/images/oneplus/op_8nb.png",
        pros: [
          "Scherm: 6,74 inch AMOLED",
          "Chip: Snapdragon 7+ Gen 3",
          "80W SUPERVOOC snelladen"
        ],
        cons: [],
        stores: [
          { name: "Bol.com", bolProductId: "9300000183792422", approxPrice: "€ 345" }
        ]
      },
      {
        name: "OnePlus Nord CE4 Lite",
        description: "De Nord CE4 Lite is het budget-Nord-model met 5G en groot scherm. Basis-OnePlus-ervaring tegen de laagste instapprijs.",
        rating: 0,
        image: "/images/oneplus/op_9nb.png",
        pros: [
          "Scherm: 6,7 inch groot display",
          "5G met OxygenOS",
          "Budgetvriendelijk met lange batterijduur"
        ],
        cons: [],
        stores: [
          { name: "Bol.com", bolProductId: "9300000181988617" }
        ]
      },
      {
        name: "Binnenkort...",
        description: "",
        rating: 0,
        image: "https://upload.wikimedia.org/wikipedia/commons/3/39/BLACK.PNG",
        pros: [

        ],
        cons: [],
        stores: [{ name: "#", link: "#" }]
      }
    ]
  },
  google: {
    title: "Top 10 Populaire Google Pixel Telefoons van 2026",
    description: "De meest gekozen Pixel-telefoons, met duidelijk wat elk model je biedt",
    products: [
      {
        name: "Google Pixel 10 Pro XL",
        description: "De grootste Pixel met het beste scherm en de sterkste zoom. Een logische keuze als je veel fotografeert en een groot, helder display belangrijk vindt.",
        rating: 0,
        image: "/images/google/gp_1.png",
        pros: [
          "6,8 inch scherm met 120 Hz",
          "5x optische zoom",
          "Tot 512 GB opslag en 7 jaar updates"
        ],
        cons: [],
        stores: [
          { name: "Bol.com", bolProductId: "9300000238713396", approxPrice: "€ 989" }
        ]
      },
      {
        name: "Google Pixel 10 Pro",
        description: "De Pro-ervaring in een formaat dat je makkelijker met één hand bedient. Je krijgt de sterke camera's en snelheid van de Pro-lijn, zonder het XL-formaat.",
        rating: 0,
        image: "/images/google/gp_2.png",
        pros: [
          "6,3 inch scherm, prettig in de hand",
          "Drie camera's, ook bij weinig licht",
          "16 GB werkgeheugen en 7 jaar updates"
        ],
        cons: [],
        stores: [
          { name: "Bol.com", bolProductId: "9300000238634856", approxPrice: "€ 720" },
          {
            name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F969262%2Fgoogle-pixel-10-pro-256gb-zwart-5g.html", approxPrice: "€ 949"
          }
        ]
      },
      {
        name: "Google Pixel 10",
        description: "De nieuwste standaard Pixel voelt in het dagelijks gebruik snel en soepel aan. Je krijgt een sterke camera en zeven jaar updates, meestal voor een lagere prijs dan de Pro.",
        rating: 0,
        image: "/images/google/gp_3.png",
        pros: [
          "6,3 inch scherm met 120 Hz",
          "Dubbele camera met 5x zoom",
          "12 GB RAM en 7 jaar software-updates"
        ],
        cons: [],
        stores: [
          { name: "Bol.com", bolProductId: "9300000238634854", approxPrice: "€ 561" },
          {
            name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F969260%2Fgoogle-pixel-10-256gb-zwart-5g.html", approxPrice: "€ 728"
          }
        ]
      },
      {
        name: "Google Pixel 9 Pro Fold",
        description: "Een opvouwbare Pixel die in je zak compact blijft en uitgeklapt een groot scherm geeft. Handig als je series kijkt, mail leest of onderweg veel op je telefoon werkt.",
        rating: 0,
        image: "/images/google/gp_4.png",
        pros: [
          "Binnen- en buitenscherm",
          "Pro-camerasysteem",
          "256 GB opslag"
        ],
        cons: [],
        stores: [
          { name: "Bol.com", bolProductId: "9300000187345078" }
        ]
      },
      {
        name: "Google Pixel 9 Pro XL",
        description: "Nog steeds een sterke keuze als je een groot Pixel-scherm wilt met goede zoom. Vaak interessant geprijsd ten opzichte van de nieuwste XL.",
        rating: 0,
        image: "/images/google/gp_5.png",
        pros: [
          "6,8 inch scherm met 120 Hz",
          "5x optische zoom",
          "7 jaar Android-updates"
        ],
        cons: [],
        stores: [
          { name: "Bol.com", bolProductId: "9300000187294767", approxPrice: "€ 609" }
        ]
      },
      {
        name: "Google Pixel 9 Pro",
        description: "De Pro-lijn in een normaal formaat, met drie camera's, een vloeiend scherm en lange software-ondersteuning. Past goed als je geen extra groot toestel nodig hebt.",
        rating: 0,
        image: "/images/google/gp_6.png",
        pros: [
          "6,3 inch scherm met 120 Hz",
          "Drie camera's met zoom",
          "256 GB opslag en 12 GB RAM"
        ],
        cons: [],
        stores: [
          { name: "Bol.com", bolProductId: "9300000187294755", approxPrice: "€ 988" },
          {
            name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F956831%2Fgoogle-pixel-9-pro-256gb-zwart-5g.html", approxPrice: "€ 1.199"
          }
        ]
      },
      {
        name: "Google Pixel 9",
        description: "Een complete Pixel voor dagelijks gebruik, met goede camera, 5G en jaren updates. Je mist vooral de extra Pro-camera's, niet de basiservaring.",
        rating: 0,
        image: "/images/google/gp_7.png",
        pros: [
          "6,3 inch scherm",
          "50 MP hoofdcamera",
          "128 GB opslag en 7 jaar updates"
        ],
        cons: [],
        stores: [
          { name: "Bol.com", bolProductId: "9300000187251827", approxPrice: "€ 399" }
        ]
      },
      {
        name: "Google Pixel 9a",
        description: "De betaalbare Pixel in deze lijst. Je krijgt grotendeels dezelfde software en updatebelofte als bij duurdere modellen, voor een duidelijk lagere prijs.",
        rating: 0,
        image: "/images/google/gp_8.png",
        pros: [
          "Scherpe prijs voor een Pixel",
          "Sterke camera in deze prijsklasse",
          "7 jaar software-updates"
        ],
        cons: [],
        stores: [
          { name: "Bol.com", bolProductId: "9300000228637472", approxPrice: "€ 395" },
          {
            name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F964141%2Fgoogle-pixel-9a-128gb-zwart-5g.html", approxPrice: "€ 395"
          }
        ]
      },
      {
        name: "Google Pixel 8 Pro",
        description: "Een oudere Pro die nog steeds overtuigt met groot scherm en sterke camera's. Vooral interessant als je Pro-wil hebt maar de nieuwste generatie te duur vindt.",
        rating: 0,
        image: "/images/google/gp_9.png",
        pros: [
          "6,7 inch scherm",
          "Drie camera's van 50 MP",
          "128 GB opslag en 12 GB RAM"
        ],
        cons: [],
        stores: [
          { name: "Bol.com", bolProductId: "9300000163877263", approxPrice: "€ 596" }
        ]
      },
      {
        name: "Google Pixel 8a",
        description: "De compacte en betaalbare Pixel. Geschikt voor wie vooral WhatsApp, internet en foto's gebruikt en geen topmodel nodig heeft.",
        rating: 0,
        image: "/images/google/gp_10.png",
        pros: [
          "Compact 6,1 inch scherm",
          "64 MP hoofdcamera",
          "8 GB RAM en 128 GB opslag"
        ],
        cons: [],
        stores: [
          { name: "Bol.com", bolProductId: "9300000179545228", approxPrice: "€ 695" }
        ]
      }
    ]
  },
  oppo: {
    title: "Top 10 Populaire OPPO Telefoons van 2026",
    description: "De populairste OPPO smartphones gerangschikt op verkoopcijfers en gebruikerservaringen",
    products: [
      {
        name: "OPPO Find X9 Pro",
        description: "De Find X9 Pro is OPPO's top met Hasselblad en Snapdragon 8 Elite. Voor wie premium design en cameraprestaties eisen.",
        rating: 0,
        image: "/images/oppo/op_1.png",
        pros: [
          "Scherm: 6,82 inch LTPO AMOLED 120Hz",
          "Camera: Hasselblad driedubbel systeem",
          "Chip: Snapdragon 8 Elite"
        ],
        cons: [],
        stores: [
          { name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F970480%2Foppo-find-x9-pro-512gb-grijs-5g.html", approxPrice: "€ 1.259" }
        ]
      },
      {
        name: "OPPO Reno15 Pro",
        description: "De Reno15 Pro balanceert stijl, snelle 80W-lading en sterke camera's. De populaire Reno-lijn voor moderne gebruikers.",
        rating: 0,
        image: "/images/oppo/op_2.png",
        pros: [
          "Scherm: 6,7 inch AMOLED 120Hz",
          "Camera: 50 MP driedubbel systeem",
          "80W SUPERVOOC snelladen"
        ],
        cons: [],
        stores: [
          { name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F975002%2Foppo-reno15-pro-512gb-bruin-5g.html", approxPrice: "€ 649" },
          { name: "Bol.com", bolProductId: "9300000252393152" }
        ]
      },
      {
        name: "OPPO Reno14 F 5G",
        description: "De Reno14 F 5G is de toegankelijke Reno met 5G en stijlvol design. Frisse middenklasser voor jonge en modebewuste gebruikers.",
        rating: 0,
        image: "/images/oppo/op_3.png",
        pros: [
          "Scherm: 6,7 inch AMOLED",
          "Camera: 50 MP hoofdcamera",
          "5G met stijlvol Reno-design"
        ],
        cons: [],
        stores: [
          { name: "Bol.com", bolProductId: "9300000235379854" }
        ]
      },
      {
        name: "OPPO A5 Pro 5G",
        description: "De A5 Pro 5G is een sterke budgettelefoon met opvallende IP69-bescherming. Duurzaam dagelijks toestel dat nat en stof aankan.",
        rating: 0,
        image: "/images/oppo/op_4.png",
        pros: [
          "Scherm: 6,67 inch groot display",
          "5G met IP69 waterbestendigheid",
          "Sterke batterij voor dagelijks gebruik"
        ],
        cons: [],
        stores: [
          { name: "Bol.com", bolProductId: "9300000228516775" }
        ]
      },
      {
        name: "OPPO A5x 4G",
        description: "De A5x 4G is het instap-OPPO zonder 5G maar met groot scherm. Eenvoudige, betaalbare telefoon voor basisbehoeften.",
        rating: 0,
        image: "/images/oppo/op_5.png",
        pros: [
          "Scherm: 6,67 inch groot display",
          "Betaalbaar 4G instapmodel",
          "Lange batterijduur"
        ],
        cons: [],
        stores: [
          { name: "Bol.com", bolProductId: "9300000233109672" }
        ]
      },
      {
        name: "OPPO Reno13 Pro",
        description: "De Reno13 Pro combineert slank design met 80W SUPERVOOC en een dubbele camera. Vorige Reno-generatie met bewezen snelladen.",
        rating: 0,
        image: "/images/oppo/op_6.png",
        pros: [
          "Scherm: 6,7 inch AMOLED 120Hz",
          "Camera: 50 MP dubbele camera",
          "80W SUPERVOOC snelladen"
        ],
        cons: [],
        stores: [
          { name: "Bol.com", bolProductId: "9300000226494304" }
        ]
      },
      {
        name: "OPPO A80 5G",
        description: "De A80 5G is een budgetvriendelijke 5G-OPPO met groot display. Solide keuze als eerste smartphone of tweede toestel.",
        rating: 0,
        image: "/images/oppo/op_7.png",
        pros: [
          "Scherm: 6,67 inch groot display",
          "5G ondersteuning",
          "Budgetvriendelijk met degelijke batterij"
        ],
        cons: [],
        stores: [
          { name: "Bol.com", bolProductId: "9300000185745967" }
        ]
      },
      {
        name: "OPPO A98 5G",
        description: "De A98 5G biedt snelle 67W-lading en een groot scherm in de A-serie. Degelijke 5G-middenklasser met goede prijs.",
        rating: 0,
        image: "/images/oppo/op_8.png",
        pros: [
          "Scherm: 6,72 inch groot display",
          "5G met 67W SUPERVOOC",
          "Goede prijs-kwaliteit in A-serie"
        ],
        cons: [],
        stores: [
          { name: "Bol.com", bolProductId: "9300000152276508" }
        ]
      },
      {
        name: "OPPO Reno12",
        description: "De Reno12 levert ColorOS en een dubbele camera in een stijlvol Reno-jasje. Betrouwbare middenklasser voor alledaags gebruik.",
        rating: 0,
        image: "/images/oppo/op_9.png",
        pros: [
          "Scherm: 6,7 inch AMOLED",
          "Camera: 50 MP dubbele camera",
          "Stijlvol Reno-design met ColorOS"
        ],
        cons: [],
        stores: [
          { name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F960614%2Foppo-reno12-256gb-zwart-5g.html", approxPrice: "€ 549" },
          { name: "Bol.com", bolProductId: "9300000183436436" }
        ]
      },
      {
        name: "Binnenkort...",
        description: "",
        rating: 0,
        image: "https://upload.wikimedia.org/wikipedia/commons/3/39/BLACK.PNG",
        pros: [

        ],
        cons: [],
        stores: []
      }
    ]
  },
  playstation: {
    title: "Top 10 Beste PlayStation Producten van 2026",
    description: "De populairste PlayStation games en accessoires gerangschikt op verkoopcijfers en gebruikerservaringen",
    products: [
      {
        name: "PlayStation 5 Pro",
        description: "De krachtigste PlayStation console ooit met 8K gaming support",
        rating: 9.8,
        image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3",
        pros: ["8K gaming", "Ray tracing", "SSD opslag", "4K/120fps"],
        cons: ["Hoge prijs", "Groot formaat"],
        stores: [
          {
            name: "Coolblue",
            link: "https://www.coolblue.nl/product/playstation-5-pro"
          },
          {
            name: "Bol.com",
            link: "https://www.bol.com/nl/p/playstation-5-pro"
          }
        ]
      },
      {
        name: "DualSense Edge Controller",
        description: "Premium controller met aanpasbare knoppen en profielen",
        rating: 9.7,
        image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3",
        pros: ["Aanpasbare knoppen", "Extra profielen", "Premium build"],
        cons: ["Hoge prijs", "Batterijduur"],
        stores: [
          {
            name: "Coolblue",
            link: "https://www.coolblue.nl/product/dualsense-edge"
          },
          {
            name: "Bol.com",
            link: "https://www.bol.com/nl/p/dualsense-edge"
          }
        ]
      },
      {
        name: "PlayStation VR2",
        description: "Next-gen VR voor de ultieme gaming ervaring",
        rating: 9.6,
        image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3",
        pros: ["4K HDR", "Eye tracking", "Haptic feedback"],
        cons: ["Alleen voor PS5", "Prijzig"],
        stores: [
          {
            name: "Coolblue",
            link: "https://www.coolblue.nl/product/playstation-vr2"
          },
          {
            name: "Bol.com",
            link: "https://www.bol.com/nl/p/playstation-vr2"
          }
        ]
      },
      {
        name: "Marvel's Spider-Man 2",
        description: "Epische superhelden actie in een open wereld",
        rating: 9.5,
        image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3",
        pros: ["Prachtige graphics", "Meeslepend verhaal", "Co-op"],
        cons: ["Relatief kort", "DLC prijzig"],
        stores: [
          {
            name: "Coolblue",
            link: "https://www.coolblue.nl/product/spiderman-2"
          },
          {
            name: "Bol.com",
            link: "https://www.bol.com/nl/p/spiderman-2"
          }
        ]
      },
      {
        name: "God of War Ragnarök",
        description: "Episch Norse mythologie avontuur",
        rating: 9.4,
        image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3",
        pros: ["Episch verhaal", "Geweldige graphics", "Veel content"],
        cons: ["Lineair", "Moeilijk"],
        stores: [
          {
            name: "Coolblue",
            link: "https://www.coolblue.nl/product/god-of-war"
          },
          {
            name: "Bol.com",
            link: "https://www.bol.com/nl/p/god-of-war"
          }
        ]
      },
      {
        name: "PS5 HD Camera",
        description: "1080p camera voor streaming en content creatie",
        rating: 9.3,
        image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3",
        pros: ["Hoge kwaliteit", "Makkelijk setup", "Dual lenzen"],
        cons: ["Alleen voor PS5", "Beperkte features"],
        stores: [
          {
            name: "Coolblue",
            link: "https://www.coolblue.nl/product/ps5-camera"
          },
          {
            name: "Bol.com",
            link: "https://www.bol.com/nl/p/ps5-camera"
          }
        ]
      },
      {
        name: "Pulse 3D Headset",
        description: "Draadloze gaming headset met 3D audio",
        rating: 9.2,
        image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3",
        pros: ["3D audio", "Comfortabel", "Goede microfoon"],
        cons: ["Batterijduur", "Plastic build"],
        stores: [
          {
            name: "Coolblue",
            link: "https://www.coolblue.nl/product/pulse-3d"
          },
          {
            name: "Bol.com",
            link: "https://www.bol.com/nl/p/pulse-3d"
          }
        ]
      },
      {
        name: "DualSense Controller",
        description: "Standaard PS5 controller met haptic feedback",
        rating: 9.1,
        image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3",
        pros: ["Haptic feedback", "Adaptive triggers", "Ergonomisch"],
        cons: ["Batterijduur", "Prijs"],
        stores: [
          {
            name: "Coolblue",
            link: "https://www.coolblue.nl/product/dualsense"
          },
          {
            name: "Bol.com",
            link: "https://www.bol.com/nl/p/dualsense"
          }
        ]
      },
      {
        name: "PS5 Media Remote",
        description: "Afstandsbediening voor media content",
        rating: 9.0,
        image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3",
        pros: ["Handig design", "Media knoppen", "Bluetooth"],
        cons: ["Beperkt gebruik", "Basis functionaliteit"],
        stores: [
          {
            name: "Coolblue",
            link: "https://www.coolblue.nl/product/ps5-remote"
          },
          {
            name: "Bol.com",
            link: "https://www.bol.com/nl/p/ps5-remote"
          }
        ]
      },
      {
        name: "PS5 Charging Station",
        description: "Oplaadstation voor twee DualSense controllers",
        rating: 8.9,
        image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3",
        pros: ["Laadt 2 controllers", "Past bij PS5", "Snel laden"],
        cons: ["Basis functionaliteit", "Prijs"],
        stores: [
          {
            name: "Coolblue",
            link: "https://www.coolblue.nl/product/ps5-charging"
          },
          {
            name: "Bol.com",
            link: "https://www.bol.com/nl/p/ps5-charging"
          }
        ]
      }
    ]
  },
  xbox: {
    title: "Top 10 Beste Xbox Producten van 2026",
    description: "De populairste Xbox games en accessoires gerangschikt op verkoopcijfers en gebruikerservaringen",
    products: [
      {
        name: "Xbox Series X",
        description: "De krachtigste Xbox console met 4K gaming",
        rating: 9.8,
        image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d",
        pros: ["4K gaming", "Quick Resume", "Game Pass", "Backwards compatibility"],
        cons: ["Groot formaat", "Beperkte exclusives"],
        stores: [
          {
            name: "Coolblue",
            link: "https://www.coolblue.nl/product/xbox-series-x"
          },
          {
            name: "Bol.com",
            link: "https://www.bol.com/nl/p/xbox-series-x"
          }
        ]
      },
      {
        name: "Xbox Elite Controller Series 2",
        description: "Premium controller met aanpasbare onderdelen",
        rating: 9.7,
        image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d",
        pros: ["Aanpasbaar", "Premium build", "Lange batterijduur"],
        cons: ["Hoge prijs", "Complex voor casual gamers"],
        stores: [
          {
            name: "Coolblue",
            link: "https://www.coolblue.nl/product/xbox-elite-2"
          },
          {
            name: "Bol.com",
            link: "https://www.bol.com/nl/p/xbox-elite-2"
          }
        ]
      },
      {
        name: "Xbox Series S",
        description: "Compacte digitale console voor 1440p gaming",
        rating: 9.6,
        image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d",
        pros: ["Compact", "Betaalbaar", "Game Pass", "Quick Resume"],
        cons: ["Geen disc drive", "Minder krachtig"],
        stores: [
          {
            name: "Coolblue",
            link: "https://www.coolblue.nl/product/xbox-series-s"
          },
          {
            name: "Bol.com",
            link: "https://www.bol.com/nl/p/xbox-series-s"
          }
        ]
      },
      {
        name: "Xbox Wireless Headset",
        description: "Official Xbox headset met spatial audio",
        rating: 9.5,
        image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d",
        pros: ["Spatial audio", "Bluetooth", "Goede microfoon"],
        cons: ["Plastic build", "Basis EQ"],
        stores: [
          {
            name: "Coolblue",
            link: "https://www.coolblue.nl/product/xbox-headset"
          },
          {
            name: "Bol.com",
            link: "https://www.bol.com/nl/p/xbox-headset"
          }
        ]
      },
      {
        name: "Starfield",
        description: "Epische sci-fi RPG van Bethesda",
        rating: 9.4,
        image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d",
        pros: ["Enorme wereld", "Veel vrijheid", "Mooi verhaal"],
        cons: ["Bugs", "Lange laadtijden"],
        stores: [
          {
            name: "Coolblue",
            link: "https://www.coolblue.nl/product/starfield"
          },
          {
            name: "Bol.com",
            link: "https://www.bol.com/nl/p/starfield"
          }
        ]
      },
      {
        name: "Forza Motorsport",
        description: "Next-gen racing simulator",
        rating: 9.3,
        image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d",
        pros: ["Realistische physics", "Prachtige graphics", "Veel content"],
        cons: ["Steep learning curve", "Online vereist"],
        stores: [
          {
            name: "Coolblue",
            link: "https://www.coolblue.nl/product/forza-motorsport"
          },
          {
            name: "Bol.com",
            link: "https://www.bol.com/nl/p/forza-motorsport"
          }
        ]
      },
      {
        name: "Xbox Storage Expansion Card",
        description: "1TB extra snelle opslag voor Series X|S",
        rating: 9.2,
        image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d",
        pros: ["Snelle laadtijden", "Plug & play", "Portable"],
        cons: ["Zeer duur", "Alleen voor Series X|S"],
        stores: [
          {
            name: "Coolblue",
            link: "https://www.coolblue.nl/product/xbox-storage"
          },
          {
            name: "Bol.com",
            link: "https://www.bol.com/nl/p/xbox-storage"
          }
        ]
      },
      {
        name: "Xbox Wireless Controller",
        description: "Standaard controller voor Xbox Series X|S",
        rating: 9.1,
        image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d",
        pros: ["Vertrouwd design", "Goede d-pad", "Share knop"],
        cons: ["Batterijen nodig", "Basis features"],
        stores: [
          {
            name: "Coolblue",
            link: "https://www.coolblue.nl/product/xbox-controller"
          },
          {
            name: "Bol.com",
            link: "https://www.bol.com/nl/p/xbox-controller"
          }
        ]
      },
      {
        name: "Play & Charge Kit",
        description: "Oplaadbare batterij voor Xbox controllers",
        rating: 9.0,
        image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d",
        pros: ["Oplaadbaar", "Lange batterijduur", "USB-C"],
        cons: ["Prijs", "Één batterij"],
        stores: [
          {
            name: "Coolblue",
            link: "https://www.coolblue.nl/product/xbox-battery"
          },
          {
            name: "Bol.com",
            link: "https://www.bol.com/nl/p/xbox-battery"
          }
        ]
      },
      {
        name: "Xbox Media Remote",
        description: "Afstandsbediening voor media content",
        rating: 8.9,
        image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d",
        pros: ["Verlichte knoppen", "Media controls", "IR blaster"],
        cons: ["Basis functionaliteit", "Batterijen nodig"],
        stores: [
          {
            name: "Coolblue",
            link: "https://www.coolblue.nl/product/xbox-remote"
          },
          {
            name: "Bol.com",
            link: "https://www.bol.com/nl/p/xbox-remote"
          }
        ]
      }
    ]
  },
  nintendo: {
    title: "Top 10 Beste Nintendo Producten van 2026",
    description: "De populairste Nintendo games en accessoires gerangschikt op verkoopcijfers en gebruikerservaringen",
    products: [
      {
        name: "Nintendo Switch 2",
        description: "De nieuwe generatie Nintendo console met 4K support",
        rating: 9.8,
        image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e",
        pros: ["4K gaming", "Betere batterij", "Backwards compatible"],
        cons: ["Hogere prijs", "Groot formaat"],
        stores: [
          {
            name: "Coolblue",
            link: "https://www.coolblue.nl/product/switch-2"
          },
          {
            name: "Bol.com",
            link: "https://www.bol.com/nl/p/switch-2"
          }
        ]
      },
      {
        name: "The Legend of Zelda: BOTW 2",
        description: "Het langverwachte vervolg op Breath of the Wild",
        rating: 9.7,
        image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e",
        pros: ["Grote open wereld", "Innovatieve gameplay", "Prachtige graphics"],
        cons: ["Hoge systeemeisen", "DLC prijzig"],
        stores: [
          {
            name: "Coolblue",
            link: "https://www.coolblue.nl/product/zelda-botw2"
          },
          {
            name: "Bol.com",
            link: "https://www.bol.com/nl/p/zelda-botw2"
          }
        ]
      },
      {
        name: "Switch Pro Controller",
        description: "Premium controller voor de Nintendo Switch",
        rating: 9.6,
        image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e",
        pros: ["Comfortabel", "Lange batterijduur", "Amiibo support"],
        cons: ["Hoge prijs", "Geen analoge triggers"],
        stores: [
          {
            name: "Coolblue",
            link: "https://www.coolblue.nl/product/switch-pro"
          },
          {
            name: "Bol.com",
            link: "https://www.bol.com/nl/p/switch-pro"
          }
        ]
      },
      {
        name: "Mario Kart 9",
        description: "Nieuwe Mario Kart met next-gen features",
        rating: 9.5,
        image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e",
        pros: ["Nieuwe banen", "Online multiplayer", "4K graphics"],
        cons: ["DLC nodig", "Weinig innovatie"],
        stores: [
          {
            name: "Coolblue",
            link: "https://www.coolblue.nl/product/mario-kart-9"
          },
          {
            name: "Bol.com",
            link: "https://www.bol.com/nl/p/mario-kart-9"
          }
        ]
      },
      {
        name: "Nintendo Switch Dock 2",
        description: "Nieuwe dock met 4K output en ethernet",
        rating: 9.4,
        image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e",
        pros: ["4K output", "Meer poorten", "Betere koeling"],
        cons: ["Hoge prijs", "Groot formaat"],
        stores: [
          {
            name: "Coolblue",
            link: "https://www.coolblue.nl/product/switch-dock-2"
          },
          {
            name: "Bol.com",
            link: "https://www.bol.com/nl/p/switch-dock-2"
          }
        ]
      },
      {
        name: "Joy-Con Pair",
        description: "Set van twee Joy-Con controllers",
        rating: 9.3,
        image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e",
        pros: ["Veelzijdig", "HD rumble", "Motion controls"],
        cons: ["Drift issues", "Hoge prijs"],
        stores: [
          {
            name: "Coolblue",
            link: "https://www.coolblue.nl/product/joy-con"
          },
          {
            name: "Bol.com",
            link: "https://www.bol.com/nl/p/joy-con"
          }
        ]
      },
      {
        name: "Nintendo Switch Online + Expansion Pack",
        description: "Online gaming service met extra content",
        rating: 9.2,
        image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e",
        pros: ["Retro games", "Online play", "Cloud saves"],
        cons: ["Jaarlijks", "Beperkte features"],
        stores: [
          {
            name: "Coolblue",
            link: "https://www.coolblue.nl/product/switch-online"
          },
          {
            name: "Bol.com",
            link: "https://www.bol.com/nl/p/switch-online"
          }
        ]
      },
      {
        name: "Nintendo Switch Case",
        description: "Premium beschermhoes voor de Switch",
        rating: 9.1,
        image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e",
        pros: ["Stevig", "Kaarthouders", "Standaard"],
        cons: ["Basis design", "Beperkte ruimte"],
        stores: [
          {
            name: "Coolblue",
            link: "https://www.coolblue.nl/product/switch-case"
          },
          {
            name: "Bol.com",
            link: "https://www.bol.com/nl/p/switch-case"
          }
        ]
      },
      {
        name: "amiibo",
        description: "Interactieve figuren voor Nintendo games",
        rating: 9.0,
        image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e",
        pros: ["Collectible", "In-game content", "Hoge kwaliteit"],
        cons: ["Prijzig verzamelen", "Beperkte functionaliteit"],
        stores: [
          {
            name: "Coolblue",
            link: "https://www.coolblue.nl/product/amiibo"
          },
          {
            name: "Bol.com",
            link: "https://www.bol.com/nl/p/amiibo"
          }
        ]
      },
      {
        name: "Nintendo Switch Screen Protector",
        description: "Tempered glass bescherming voor het scherm",
        rating: 8.9,
        image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e",
        pros: ["Krasbestendig", "Makkelijk aan te brengen", "Helder"],
        cons: ["Basis accessoire", "Moet vervangen worden"],
        stores: [
          {
            name: "Coolblue",
            link: "https://www.coolblue.nl/product/switch-protector"
          },
          {
            name: "Bol.com",
            link: "https://www.bol.com/nl/p/switch-protector"
          }
        ]
      }
    ]
  },
  laptops: {
    title: "Top 10 Beste Laptops van 2026",
    description: "De populairste laptops gerangschikt op prestaties en gebruikerservaringen",
    products: [
      {
        name: "Apple MacBook Air 15 inch (2026) M5",
        description: "15,3 inch MacBook Air met M5-chip, 16 GB RAM en 512 GB SSD. Licht, stil en sterk genoeg voor studie, werk en lichte beeldbewerking.",
        rating: 4.9,
        image: "/images/laptops/l_1.png",
        pros: ["Apple M5 (10 CPU / 10 GPU)", "15,3 inch Liquid Retina", "16 GB RAM / 512 GB SSD"],
        cons: ["Geen HDMI-poort", "Oplader niet meegeleverd"],
        stores: [
          {
            name: "Coolblue",
            link: "https://www.coolblue.nl/product/976873/apple-macbook-air-15-inch-2026-m5-10-cpu-10-gpu-16gb-512gb-zilver-qwerty.html",
            approxPrice: "€ 1.729"
          },
          { name: "Bol.com", bolProductId: "9300000266631390", approxPrice: "€ 1.729" }
        ]
      },
      {
        name: "Samsung Galaxy Book4",
        description: "Veelzijdige Samsung-laptop met helder scherm, solide prestaties en naadloze integratie met Galaxy-apparaten.",
        rating: 4.7,
        image: "/images/laptops/l_2.png",
        pros: ["Galaxy-ecosysteem", "Helder scherm", "Goede prestaties"],
        cons: ["Windows bloatware"],
        stores: [{ name: "Bol.com", bolProductId: "9300000228663832", approxPrice: "€ 699" }]
      },
      {
        name: "Lenovo IdeaPad Slim 3 15IRH10",
        description: "Betaalbare 15-inch laptop voor dagelijks gebruik, studie en licht productief werk.",
        rating: 4.5,
        image: "/images/laptops/l_3.png",
        pros: ["Betaalbaar", "15-inch scherm", "IdeaPad betrouwbaarheid"],
        cons: ["Plastic behuizing", "Basis display"],
        stores: [{ name: "Bol.com", bolProductId: "9300000230888720", approxPrice: "€ 749" }]
      },
      {
        name: "MSI Modern 15",
        description: "Stijlvolle MSI-laptop voor werk en studie met lichtgewicht design en solide dagelijkse prestaties.",
        rating: 4.5,
        image: "/images/laptops/l_4.png",
        pros: ["Lichtgewicht", "Modern design", "MSI kwaliteit"],
        cons: ["Geen dedicated GPU"],
        stores: [{ name: "Bol.com", bolProductId: "9300000224390007", approxPrice: "€ 699" }]
      },
      {
        name: "ASUS Vivobook 15 X1504VA",
        description: "Populaire allround 15-inch laptop met Intel-processor, compact design en goede prijs-kwaliteit.",
        rating: 4.6,
        image: "/images/laptops/l_5.png",
        pros: ["Allround laptop", "Compact", "Goede prijs"],
        cons: ["Basis speakers", "Geen premium afwerking"],
        stores: [
          {
            name: "Coolblue",
            link: "https://www.coolblue.nl/product/972841/asus-vivobook-15-x1504va-bq5377w.html",
            approxPrice: "€ 623"
          },
          { name: "Bol.com", bolProductId: "9300000277833427", approxPrice: "€ 699" }
        ]
      },
      {
        name: "Lenovo V15 G4 Ryzen 5",
        description: "Zakelijke budget-laptop met AMD Ryzen 5-processor voor efficiënt werken en studeren.",
        rating: 4.5,
        image: "/images/laptops/l_6.png",
        pros: ["Ryzen 5", "Betaalbaar", "Zakelijk design"],
        cons: ["Dikker formaat", "Basis scherm"],
        stores: [{ name: "Bol.com", bolProductId: "9300000245771630", approxPrice: "€ 509" }]
      },
      {
        name: "HP 15-fd0700nd",
        description: "HP 15-inch laptop voor dagelijks gebruik met betrouwbare prestaties en vertrouwd HP-design.",
        rating: 4.4,
        image: "/images/laptops/l_7.png",
        pros: ["HP betrouwbaarheid", "15-inch", "Betaalbaar"],
        cons: ["Plastic chassis", "Basis features"],
        stores: [{ name: "Bol.com", bolProductId: "9300000250384073", approxPrice: "€ 389" }]
      },
      {
        name: "Lenovo IdeaPad Slim 3 14M868",
        description: "Compacte 14-inch IdeaPad voor onderweg met slank design en solide prestaties voor studie en werk.",
        rating: 4.5,
        image: "/images/laptops/l_8.png",
        pros: ["Compact 14 inch", "Slank design", "Draagbaar"],
        cons: ["Kleiner scherm", "Beperkte poorten"],
        stores: [{ name: "Bol.com", bolProductId: "9300000181320464", approxPrice: "€ 339" }]
      },
      {
        name: "ASUS TUF Gaming A16 RTX 4050",
        description: "Krachtige gaming laptop met AMD-processor en NVIDIA RTX 4050 voor moderne games op medium-hoge instellingen.",
        rating: 4.7,
        image: "/images/laptops/l_9.png",
        pros: ["RTX 4050", "Gaming prestaties", "TUF robuustheid"],
        cons: ["Korte batterijduur", "Zwaar"],
        stores: [{ name: "Bol.com", bolProductId: "9300000252975565", approxPrice: "€ 1.099" }]
      },
      {
        name: "ACEMAGIC LX15Pro",
        description: "Betaalbare laptop met solide specificaties voor dagelijks gebruik, studie en lichte multitasking.",
        rating: 4.3,
        image: "/images/laptops/l_10.png",
        pros: ["Betaalbaar", "Solide specs", "Allround"],
        cons: ["Minder bekend merk", "Basis afwerking"],
        stores: [{ name: "Bol.com", bolProductId: "9300000264824023", approxPrice: "€ 999" }]
      }
    ]
  },
  desktops: {
    title: "Top 10 Beste Desktop PC's van 2026",
    description: "De populairste desktop computers gerangschikt op prestaties en gebruikerservaringen",
    products: [
      {
        name: "Lenovo LOQ Tower 17IRR9",
        description: "Lenovo gaming desktop uit de LOQ-serie met solide prestaties voor moderne games en dagelijks gebruik.",
        rating: 4.7,
        image: "/images/desktops/dp_1.png",
        pros: ["Lenovo LOQ-serie", "Gaming prestaties", "Upgradebaar"],
        cons: ["Basis RGB", "Groot formaat"],
        stores: [
          {
            name: "Coolblue",
            link: "https://www.coolblue.nl/product/968477/lenovo-loq-tower-17irr9-90x000g9mh.html",
            approxPrice: "€ 1.269"
          },
          { name: "Bol.com", bolProductId: "9300000242236393", approxPrice: "€ 1.276" }
        ]
      },
      {
        name: "PCSpecialist Impact 99 RTX 3050",
        description: "Custom gaming PC van PCSpecialist met NVIDIA RTX 3050, ideaal instapmodel voor 1080p-gaming.",
        rating: 4.6,
        image: "/images/desktops/dp_2.png",
        pros: ["RTX 3050", "Custom build", "PCSpecialist kwaliteit"],
        cons: ["Instap GPU", "Beperkt voor zware games"],
        stores: [{
          name: "Coolblue",
          link: "https://www.coolblue.nl/product/964357/pcspecialist-impact-272.html",
          approxPrice: "€ 2.549"
        }]
      },
      {
        name: "Intel Gaming PC RTX 3050",
        description: "Intel-gebaseerde gaming desktop met RTX 3050 voor betaalbaar gamen en alledaags gebruik.",
        rating: 4.5,
        image: "/images/desktops/dp_3.png",
        pros: ["RTX 3050", "Intel processor", "Betaalbaar"],
        cons: ["Instap specificaties", "Basis behuizing"],
        stores: [{ name: "Bol.com", bolProductId: "9200000084352567", approxPrice: "€ 799" }]
      },
      {
        name: "VIST PC Gaming Ryzen 7 5700X RTX 5060",
        description: "Krachtige gaming PC met AMD Ryzen 7 5700X en RTX 5060 voor vloeiende gameplay op hoge instellingen.",
        rating: 4.8,
        image: "/images/desktops/dp_4.png",
        pros: ["Ryzen 7 5700X", "RTX 5060", "Sterke prijs-prestatie"],
        cons: ["Minder bekend merk"],
        stores: [{ name: "Bol.com", bolProductId: "9300000290089066", approxPrice: "€ 1.320" }]
      },
      {
        name: "Sedatech Silent Gaming PC Ryzen 5 RTX 5060",
        description: "Stille gaming desktop met Ryzen 5 en RTX 5060, geschikt voor gamen zonder storend geluid.",
        rating: 4.7,
        image: "/images/desktops/dp_5.png",
        pros: ["Stil design", "RTX 5060", "Ryzen 5"],
        cons: ["Compacte koeling", "Minder upgrade-ruimte"],
        stores: [{ name: "Bol.com", bolProductId: "9300000247488260", approxPrice: "€ 1.470" }]
      },
      {
        name: "HP OMEN 16L TG03-0960nd",
        description: "Compacte HP OMEN gaming desktop met Intel Core i7, RTX 5060 en 1 TB SSD voor soepel Full HD-gamen en streamen.",
        rating: 4.6,
        image: "/images/desktops/dp_6.png",
        pros: ["RTX 5060", "Intel Core i7", "Compact OMEN-design"],
        cons: ["16 GB RAM", "Beperkte upgrade-ruimte"],
        stores: [{
          name: "Coolblue",
          link: "https://www.coolblue.nl/product/965132/hp-omen-16l-tg03-0960nd.html",
          approxPrice: "€ 1.619"
        }]
      },
      {
        name: "HP Victus Gaming Desktop",
        description: "HP Victus gaming desktop met betrouwbare HP-kwaliteit en solide prestaties voor moderne games.",
        rating: 4.7,
        image: "/images/desktops/dp_7.png",
        pros: ["HP betrouwbaarheid", "Victus gaming", "Goede airflow"],
        cons: ["Basis RGB", "Prijzig voor specs"],
        stores: [
          {
            name: "Coolblue",
            link: "https://www.coolblue.nl/product/950177/hp-victus-tg02-2966nd.html",
            approxPrice: "€ 1.359"
          },
          { name: "Bol.com", bolProductId: "9300000123214896", approxPrice: "€ 1.229" }
        ]
      },
      {
        name: "Lenovo Legion Tower 5",
        description: "Lenovo Legion gaming tower met krachtige hardware, goede koeling en premium Legion-design.",
        rating: 4.8,
        image: "/images/desktops/dp_8.png",
        pros: ["Legion premium", "Goede koeling", "Upgradebaar"],
        cons: ["Groot formaat", "Duur"],
        stores: [
          {
            name: "Coolblue",
            link: "https://www.coolblue.nl/product/967341/lenovo-legion-t5-30agb10-90yj0067mh.html",
            approxPrice: "€ 2.369"
          },
          { name: "Bol.com", bolProductId: "9300000264944495", approxPrice: "€ 2.499" }
        ]
      },
      {
        name: "MSI MAG Infinite S3",
        description: "MSI gaming desktop uit de MAG-serie met compact design en solide gamingprestaties.",
        rating: 4.7,
        image: "/images/desktops/dp_9.png",
        pros: ["MSI MAG-serie", "Compact design", "Gaming prestaties"],
        cons: ["Beperkte upgrade-ruimte"],
        stores: [{
          name: "Coolblue",
          link: "https://www.coolblue.nl/product/963763/cobalt-x-powered-by-msi-tier-2-rtx-5070-ryzen-7-9700x-32gb-2tb-ssd.html",
          approxPrice: "€ 2.079"
        }]
      },
      {
        name: "Acer Nitro Gaming PC",
        description: "Acer Nitro gaming desktop voor betaalbaar gamen met betrouwbare prestaties en Nitro-gamingdesign.",
        rating: 4.6,
        image: "/images/desktops/dp_10.png",
        pros: ["Acer Nitro-serie", "Betaalbaar", "Gaming design"],
        cons: ["Basis koeling", "Instap-middenklasse GPU"],
        stores: [
          {
            name: "Coolblue",
            link: "https://www.coolblue.nl/product/963209/acer-nitro-n50-656-i56516.html",
            approxPrice: "€ 1.349"
          },
          { name: "Bol.com", bolProductId: "9300000238114207", approxPrice: "€ 1.399" }
        ]
      }
    ]
  },
  components: {
    title: "Top 10 Beste PC Componenten van 2026",
    description: "De populairste PC onderdelen gerangschikt op prestaties en prijs-kwaliteit verhouding",
    products: [
      {
        name: "AMD Ryzen 7 7800X3D",
        description: "De populairste gaming-CPU met 3D V-Cache-technologie voor topprestaties in games en solide allround performance.",
        rating: 4.9,
        image: "/images/components/c_1.png",
        pros: ["3D V-Cache", "Top gaming CPU", "AM5 platform"],
        cons: ["Geen integrated graphics", "Koeler apart nodig"],
        stores: [
          {
            name: "Coolblue",
            link: "https://www.coolblue.nl/product/928327/amd-ryzen-7-7800x3d.html",
            approxPrice: "€ 411"
          },
          { name: "Bol.com", bolProductId: "9300000145270342", approxPrice: "€ 364" }
        ]
      },
      {
        name: "ASUS Prime GeForce RTX 5070 OC",
        description: "ASUS Prime videokaart met RTX 5070 en factory overclock voor krachtige 1440p-gaming en ray tracing.",
        rating: 4.8,
        image: "/images/components/c_2.png",
        pros: ["RTX 5070", "Factory OC", "ASUS Prime kwaliteit"],
        cons: ["Prijzig", "Groot formaat"],
        stores: [{ name: "Bol.com", bolProductId: "9300000226496774", approxPrice: "€ 934" }]
      },
      {
        name: "MSI GeForce RTX 5070 Ventus 2X OC",
        description: "MSI Ventus RTX 5070 met compact dual-fan design en solide prestaties voor moderne games.",
        rating: 4.8,
        image: "/images/components/c_3.png",
        pros: ["RTX 5070", "Compact dual-fan", "MSI betrouwbaarheid"],
        cons: ["Basis koeling vs premium modellen"],
        stores: [
          {
            name: "Coolblue",
            link: "https://www.coolblue.nl/product/965303/msi-geforce-rtx-5070-ventus-2x-oc.html",
            approxPrice: "€ 929"
          },
          { name: "Bol.com", bolProductId: "9300000225811493", approxPrice: "€ 889" }
        ]
      },
      {
        name: "Sapphire Pulse Radeon RX 9060 XT",
        description: "AMD Radeon RX 9060 XT van Sapphire Pulse, sterke prijs-prestatie GPU voor 1080p en 1440p gaming.",
        rating: 4.6,
        image: "/images/components/c_4.png",
        pros: ["RX 9060 XT", "Goede prijs-prestatie", "Compact design"],
        cons: ["Minder ray tracing dan NVIDIA"],
        stores: [{ name: "Bol.com", bolProductId: "9300000232646322", approxPrice: "€ 625" }]
      },
      {
        name: "Gigabyte GeForce RTX 5060 Windforce",
        description: "Instap-middenklasse NVIDIA RTX 5060 van Gigabyte voor betaalbaar gamen op 1080p met DLSS-ondersteuning.",
        rating: 4.6,
        image: "/images/components/c_5.png",
        pros: ["RTX 5060", "DLSS", "Betaalbaar"],
        cons: ["Beperkt voor 4K gaming"],
        stores: [{ name: "Bol.com", bolProductId: "9300000247374528", approxPrice: "€ 449" }]
      },
      {
        name: "Acer Nitro Arc B580 OC",
        description: "Intel Arc B580 videokaart met factory overclock, aantrekkelijke budget GPU voor 1080p gaming.",
        rating: 4.5,
        image: "/images/components/c_6.png",
        pros: ["Intel Arc B580", "Factory OC", "Betaalbaar"],
        cons: ["Driver-maturiteit", "Minder bekend"],
        stores: [{ name: "Bol.com", bolProductId: "9300000220254410", approxPrice: "€ 543" }]
      },
      {
        name: "RTX 5050 MSI Gaming OC",
        description: "MSI Gaming RTX 5050, instap NVIDIA GPU voor lichte gaming en alledaags gebruik tegen scherpe prijs.",
        rating: 4.4,
        image: "/images/components/c_7.png",
        pros: ["RTX 5050", "Instap gaming", "MSI Gaming"],
        cons: ["Beperkte prestaties", "Niet voor zware titels"],
        stores: [{ name: "Bol.com", bolProductId: "9300000235040912", approxPrice: "€ 458" }]
      },
      {
        name: "AMD Ryzen 7 9700X",
        description: "Krachtige AMD Zen 5-processor met 8 cores voor gaming, streaming en productief multitasken op AM5.",
        rating: 4.8,
        image: "/images/components/c_8.png",
        pros: ["Zen 5 architectuur", "8 cores", "Efficiënt"],
        cons: ["Prijzig", "Koeler apart nodig"],
        stores: [
          {
            name: "Coolblue",
            link: "https://www.coolblue.nl/product/957553/amd-ryzen-7-9700x.html",
            approxPrice: "€ 305"
          },
          { name: "Bol.com", bolProductId: "9300000184607889", approxPrice: "€ 317" }
        ]
      },
      {
        name: "Intel Core Ultra 7 265K",
        description: "Intel Core Ultra 7 desktopprocessor met NPU voor AI-taken, solide gaming en productiviteit.",
        rating: 4.7,
        image: "/images/components/c_9.png",
        pros: ["Core Ultra serie", "NPU voor AI", "Sterke single-core"],
        cons: ["Hoog stroomverbruik", "Duur platform"],
        stores: [
          {
            name: "Coolblue",
            link: "https://www.coolblue.nl/product/962385/intel-core-ultra-7-265k.html",
            approxPrice: "€ 319"
          },
          { name: "Bol.com", bolProductId: "9300000194084031", approxPrice: "€ 339" }
        ]
      },
      {
        name: "Corsair Vengeance DDR5 32GB",
        description: "Populair 32GB DDR5-geheugenkit van Corsair Vengeance voor snelle, stabiele prestaties in gaming en werk.",
        rating: 4.8,
        image: "/images/components/c_10.png",
        pros: ["32GB DDR5", "Corsair betrouwbaarheid", "Breed compatibel"],
        cons: ["Geen RGB op alle varianten"],
        stores: [{ name: "Bol.com", bolProductId: "9300000170349653", approxPrice: "€ 550" }]
      }
    ]
  },
  gaming_monitors: {
    title: "Top 10 Beste Gaming Monitoren van 2026",
    description: "De populairste gaming monitoren op bol.com en Coolblue, gerangschikt op populariteit en prijs-kwaliteit",
    products: [
      {
        name: "Samsung Odyssey G5 G55C 27\"",
        description: "Zeer populair mainstream model met curved QHD-scherm en 165Hz. Coolblue toont 180+ reviews voor de G5-serie.",
        rating: 4.8,
        image: "/images/gaming-monitors/gm_1.png",
        pros: ["27 inch QHD curved", "165Hz verversing", "Populair instapmodel"],
        cons: ["Niet in hoogte verstelbaar"],
        stores: [
          { name: "Bol.com", bolProductId: "9300000168579873", approxPrice: "€ 146" },
          { name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F943229%2Fsamsung-odyssey-g5-g55c-ls27cg552euxen.html", approxPrice: "€ 156" }
        ]
      },
      {
        name: "AOC Q27G4XF 27\" QHD",
        description: "Sterke prijs-kwaliteit met QHD-resolutie en 180Hz IPS-paneel. Populair AOC-model voor competitief gamen.",
        rating: 4.7,
        image: "/images/gaming-monitors/gm_2.png",
        pros: ["27 inch QHD IPS", "180Hz", "Instelbare standaard"],
        cons: ["Geen ingebouwde luidsprekers"],
        stores: [
          { name: "Bol.com", bolProductId: "9300000189750777", approxPrice: "€ 157" },
          { name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F963007%2Faoc-q27g4xf.html", approxPrice: "€ 179" }
        ]
      },
      {
        name: "LG UltraGear 27GS85Q-B",
        description: "27 inch QHD Nano IPS-monitor met 180Hz (OC 200Hz). Coolblue's keuze voor meeslepende games met vloeiende beelden.",
        rating: 4.8,
        image: "/images/gaming-monitors/gm_3.png",
        pros: ["27 inch QHD Nano IPS", "180Hz (OC 200Hz)", "G-Sync Compatible"],
        cons: ["Prijzig voor Full HD-gamers"],
        stores: [
          { name: "Bol.com", bolProductId: "9300000183450868", approxPrice: "€ 219" },
          { name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F950457%2Flg-ultragear-27gs85q-b.html", approxPrice: "€ 218" }
        ]
      },
      {
        name: "Samsung Odyssey G5 LC34G55TWWPXEN 34\" Curved",
        description: "Ultrawide curved gamingmonitor die bij Coolblue tot de best verkochte gamingmonitoren behoort. Meer schermruimte voor RPG's en racing.",
        rating: 4.7,
        image: "/images/gaming-monitors/gm_4.png",
        pros: ["34 inch ultrawide QHD", "165Hz curved VA", "Meeslepend 21:9"],
        cons: ["Veel bureauplaats nodig"],
        stores: [
          { name: "Bol.com", bolProductId: "9300000018877944", approxPrice: "€ 243" },
          { name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F874223%2Fsamsung-odyssey-g5-lc34g55twwpxen.html", approxPrice: "€ 271" }
        ]
      },
      {
        name: "AOC 25G3ZM/BK",
        description: "Staat in Coolblue's bestverkochte selectie als goedkoop competitief model met hoge 240Hz refresh rate op 25 inch.",
        rating: 4.6,
        image: "/images/gaming-monitors/gm_5.png",
        pros: ["25 inch Full HD", "240Hz VA-paneel", "In hoogte verstelbaar"],
        cons: ["Geen QHD-resolutie"],
        stores: [
          { name: "Bol.com", bolProductId: "9300000125670404", approxPrice: "€ 146" },
          { name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F916237%2Faoc-25g3zm-bk.html", approxPrice: "€ 108" }
        ]
      },
      {
        name: "MSI MAG 242C 24\" Curved",
        description: "Staat hoog in bol.com's actuele bestverkochte gamingmonitorlijst. Compact curved scherm met 180Hz voor budget-gamers.",
        rating: 4.6,
        image: "/images/gaming-monitors/gm_6.png",
        pros: ["24 inch curved VA", "180Hz", "Bol.com-bestseller"],
        cons: ["Full HD alleen"],
        stores: [
          { name: "Bol.com", bolProductId: "9300000226839359", approxPrice: "€ 319" },
          { name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F963520%2Fmsi-mag-242c.html", approxPrice: "€ 129" }
        ]
      },
      {
        name: "AOC 24G4HRE 24\" 200Hz",
        description: "Veel performance voor weinig geld: 200Hz IPS-scherm met ingebouwde speakers. Hoog in bol.com's bestsellerlijst.",
        rating: 4.7,
        image: "/images/gaming-monitors/gm_7.png",
        pros: ["24 inch Full HD IPS", "200Hz", "Ingebouwde speakers"],
        cons: ["Kleiner scherm"],
        stores: [
          { name: "Bol.com", bolProductId: "9300000231097161", approxPrice: "€ 99" },
          { name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F969074%2Faoc-24g4hre.html", approxPrice: "€ 99" }
        ]
      },
      {
        name: "LG UltraGear 24G411A-B 24\"",
        description: "Aantrekkelijk instapmodel uit bol.com's bestsellerlijst met 144Hz IPS-paneel en G-Sync Compatible.",
        rating: 4.6,
        image: "/images/gaming-monitors/gm_8.png",
        pros: ["24 inch Full HD IPS", "144Hz", "Compact instapmodel"],
        cons: ["5 ms responstijd"],
        stores: [
          { name: "Bol.com", bolProductId: "9300000234313751", approxPrice: "€ 95" },
          { name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F969787%2Flg-ultragear-24g411a-b.html", approxPrice: "€ 83" }
        ]
      },
      {
        name: "MSI MAG 27C6F 27\" 180Hz Curved",
        description: "Curved 27 inch gamingmonitor met 180Hz Rapid VA-paneel. Komt voor in bol.com's huidige bestsellerlijst.",
        rating: 4.6,
        image: "/images/gaming-monitors/gm_9.png",
        pros: ["27 inch curved", "180Hz", "0,5 ms responstijd"],
        cons: ["Full HD op 27 inch"],
        stores: [
          { name: "Bol.com", bolProductId: "9300000174536652", approxPrice: "€ 319" },
          { name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F954670%2Fmsi-mag-27c6f.html", approxPrice: "€ 104" }
        ]
      },
      {
        name: "LG UltraGear 27GR83Q-B 27\" QHD",
        description: "Bekend 240Hz QHD-model met HDMI 2.1. Coolblue toont hem in de gamingmonitorcategorie met veel reviews.",
        rating: 4.8,
        image: "/images/gaming-monitors/gm_10.png",
        pros: ["27 inch QHD IPS", "240Hz", "HDMI 2.1"],
        cons: ["Duurder instap QHD"],
        stores: [
          { name: "Bol.com", bolProductId: "9300000151067627", approxPrice: "€ 320" },
          { name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F941574%2Flg-ultragear-27gr83q-b.html", approxPrice: "€ 329" }
        ]
      }
    ]
  },
  office_monitors: {
    title: "Top 10 Beste Office Monitoren van 2026",
    description: "De populairste kantoor- en thuiswerkmonitoren op bol.com en Coolblue, gerangschikt op ergonomie, beeldkwaliteit en prijs-kwaliteit",
    products: [
      {
        name: "Philips 272B1G/00 – 27\"",
        description: "Sterke thuiswerkmonitor; Coolblue noemt hem expliciet hun keuze voor een 27 inch (thuis)werkplek en hij heeft zeer veel reviews.",
        rating: 4.8,
        image: "/images/office-monitors/om_1.png",
        pros: ["27 inch Full HD IPS", "PowerSensor energiebesparing", "In hoogte verstelbaar"],
        cons: ["Geen QHD-resolutie"],
        stores: [
          { name: "Bol.com", bolProductId: "9300000001949294", approxPrice: "€ 179" },
          { name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F877344%2Fphilips-272b1g-00.html", approxPrice: "€ 179" }
        ]
      },
      {
        name: "Philips 242B1G/00 – 24\"",
        description: "Zeer populaire zakelijke 24 inch monitor met PowerSensor en energiezuinig ontwerp. Hoog in Coolblue's zakelijke selectie.",
        rating: 4.8,
        image: "/images/office-monitors/om_2.png",
        pros: ["24 inch Full HD IPS", "349+ Coolblue-reviews", "Energiezuinig B-line model"],
        cons: ["Kleiner scherm dan 27 inch"],
        stores: [
          { name: "Bol.com", bolProductId: "9300000020641203", approxPrice: "€ 139" },
          { name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F877343%2Fphilips-242b1g-00.html", approxPrice: "€ 139" }
        ]
      },
      {
        name: "Philips 27B2G5500/00 – 27\" QHD",
        description: "QHD IPS-monitor met 100 Hz, ergonomische standaard en door Coolblue uitgelicht als energiezuinige 27 inch keuze voor kantoor.",
        rating: 4.7,
        image: "/images/office-monitors/om_3.png",
        pros: ["27 inch QHD IPS", "100 Hz", "PowerSensor & LightSensor"],
        cons: ["Geen USB-C"],
        stores: [
          { name: "Bol.com", bolProductId: "9300000196139026", approxPrice: "€ 229" },
          { name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F958196%2Fphilips-27b2g5500-00.html", approxPrice: "€ 229" }
        ]
      },
      {
        name: "Philips 27E1N1600AE – 27\" QHD",
        description: "Interessante betaalbare QHD-kantoormonitor met USB-C 65W en ingebouwde speakers. Momenteel verkrijgbaar bij Coolblue.",
        rating: 4.7,
        image: "/images/office-monitors/om_4.png",
        pros: ["27 inch QHD IPS", "USB-C 65W", "100 Hz"],
        cons: ["Geen pivot-functie"],
        stores: [
          { name: "Bol.com", bolProductId: "9300000174565019", approxPrice: "€ 179" },
          { name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F947592%2Fphilips-27e1n1600ae-00.html", approxPrice: "€ 179" }
        ]
      },
      {
        name: "Dell P2725D – 27\" QHD",
        description: "Sterke zakelijke Dell met QHD-resolutie, 100 Hz IPS-paneel en EPEAT Climate+-certificering. Goede keuze voor productiviteit.",
        rating: 4.7,
        image: "/images/office-monitors/om_5.png",
        pros: ["27 inch QHD IPS", "100 Hz", "Ergonomisch verstelbaar"],
        cons: ["Geen ingebouwde USB-C hub"],
        stores: [
          { name: "Bol.com", bolProductId: "9300000227898310", approxPrice: "€ 225" }
        ]
      },
      {
        name: "Samsung ViewFinity S6 S61F – 27\" QHD",
        description: "Samsung's zakelijke ViewFinity-lijn met QHD-resolutie en 100 Hz IPS-paneel. Veel werkruimte voor spreadsheets en multitasken.",
        rating: 4.6,
        image: "/images/office-monitors/om_6.png",
        pros: ["27 inch QHD IPS", "100 Hz", "Ergonomische HAS-standaard"],
        cons: ["Geen USB-C"],
        stores: [
          { name: "Bol.com", bolProductId: "9300000225192719", approxPrice: "€ 215" }
        ]
      },
      {
        name: "LG 27BA550-B – 27\" IPS",
        description: "Zakelijke LG-monitor met Full HD IPS-paneel, 100 Hz en ergonomische standaard. Gericht op dagelijks kantoorwerk.",
        rating: 4.6,
        image: "/images/office-monitors/om_7.png",
        pros: ["27 inch Full HD IPS", "100 Hz", "USB-hub"],
        cons: ["Full HD op 27 inch"],
        stores: [
          { name: "Bol.com", bolProductId: "9300000178574998", approxPrice: "€ 149" }
        ]
      },
      {
        name: "Dell P2725DE – 27\" QHD USB-C Hub",
        description: "Ideaal voor laptopgebruikers: ingebouwde USB-C hub met 90W power delivery en RJ45-netwerkaansluiting in één monitor.",
        rating: 4.8,
        image: "/images/office-monitors/om_8.png",
        pros: ["27 inch QHD IPS", "USB-C hub 90W", "RJ45 Ethernet"],
        cons: ["Prijziger dan instap QHD"],
        stores: [
          { name: "Bol.com", bolProductId: "9300000227898306", approxPrice: "€ 305" }
        ]
      },
      {
        name: "Lenovo ThinkVision P27h – 27\"",
        description: "Populaire zakelijke ThinkVision-serie met QHD-resolutie en USB-C docking. Bol.com toont dit model momenteel in de assortimentslijst.",
        rating: 4.7,
        image: "/images/office-monitors/om_9.png",
        pros: ["27 inch QHD", "USB-C docking", "ThinkVision zakelijke lijn"],
        cons: ["Geen 100 Hz"],
        stores: [
          { name: "Bol.com", bolProductId: "9200000076883603" },
          { name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F934566%2Flenovo-thinkvision-p27h-30.html", approxPrice: "€ 388" }
        ]
      },
      {
        name: "LG 27UP83AK-W – 27\" 4K",
        description: "Duurdere optie voor wie scherper beeld wil: 4K IPS met 95% DCI-P3 en 184 reviews bij Coolblue voor foto- en videobewerking.",
        rating: 4.8,
        image: "/images/office-monitors/om_10.png",
        pros: ["27 inch 4K IPS", "95% DCI-P3", "USB-C 90W"],
        cons: ["Duurder dan QHD-modellen"],
        stores: [
          { name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F943525%2Flg-27up83ak-w.html", approxPrice: "€ 343" }
        ]
      }
    ]
  },
  controllers: {
    title: "Top 10 Beste Controllers van 2026",
    description: "De populairste gamecontrollers voor PC, PlayStation, Xbox en Nintendo Switch",
    products: [
      {
        name: "Microsoft Xbox Wireless Controller",
        description: "De standaard Xbox-controller met Bluetooth en Share-knop. Werkt naadloos op Xbox Series X|S, Xbox One en PC.",
        rating: 4.8,
        image: "/images/controllers/01-xbox-wireless.png",
        pros: ["Bluetooth voor PC", "Ergonomisch design", "Breed beschikbaar"],
        cons: ["Geen oplaadbare batterij standaard"],
        stores: [
          { name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F870176%2Fmicrosoft-xbox-series-x-en-s-wireless-controller-robot-wit.html", approxPrice: "€ 53" },
          { name: "Bol.com", bolProductId: "9300000009936880", approxPrice: "€ 60" }
        ]
      },
      {
        name: "DualSense Wireless Controller Sony",
        description: "Officiële PlayStation 5-controller met haptische feedback en adaptive triggers voor meeslepend gamen.",
        rating: 4.8,
        image: "/images/controllers/02-dualsense.png",
        pros: ["Haptische feedback", "Adaptive triggers", "Ingebouwde microfoon"],
        cons: ["Batterijduur beperkt"],
        stores: [
          { name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F883860%2Fsony-playstation-5-dualsense-draadloze-controller-cosmic-red.html", approxPrice: "€ 75" },
          { name: "Bol.com", bolProductId: "9300000039086009", approxPrice: "€ 72" }
        ]
      },
      {
        name: "Nintendo Switch Pro Controller",
        description: "Premium controller voor de Nintendo Switch met HD-rumble, motion controls en lange batterijduur.",
        rating: 4.7,
        image: "/images/controllers/03-switch-pro.png",
        pros: ["HD-rumble", "40 uur batterij", "Comfortabel voor lange sessies"],
        cons: ["Geen koptelefoonaansluiting"],
        stores: [
          { name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F762434%2Fnintendo-switch-pro-controller.html", approxPrice: "€ 62" },
          { name: "Bol.com", link: "https://partner.bol.com/click/click?p=2&t=url&s=1508333&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Fnintendo-pro-controller-zwart-nintendo-switch%2F9200000073684267%2F&name=Nintendo%20Switch%20Pro%20Controller%20-%20Zwart%20-%20Draadloos%20-%2040%20uur%20batterijduur", approxPrice: "€ 67" }
        ]
      },
      {
        name: "Turtle Beach Stealth Pivot Controller",
        description: "Modulaire Xbox-controller met draaibare handgrepen en aanpasbare knoppen voor extra comfort.",
        rating: 4.5,
        image: "/images/controllers/04-stealth-pivot.png",
        pros: ["Draaibare handgrepen", "Aanpasbare knoppen", "Xbox en PC"],
        cons: ["Groter formaat"],
        stores: [
          { name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F958817%2Fturtle-beach-stealth-pivot-controller.html", approxPrice: "€ 109" },
          { name: "Bol.com", bolProductId: "9300000197111175", approxPrice: "€ 97" }
        ]
      },
      {
        name: "Turtle Beach Rematch Core Xbox Controller",
        description: "Betaalbare wired Xbox-controller met remappable knoppen en robuuste bouwkwaliteit.",
        rating: 4.4,
        image: "/images/controllers/05-rematch-core.png",
        pros: ["Remappable knoppen", "Betaalbaar", "Betrouwbaar wired"],
        cons: ["Geen draadloos"],
        stores: [{ name: "Bol.com", bolProductId: "9300000230797755", approxPrice: "€ 30" }]
      },
      {
        name: "Xbox Elite Wireless Controller Series 2",
        description: "Premium Xbox-controller met instelbare stickspanning, extra paddles en oplaadbare batterij.",
        rating: 4.7,
        image: "/images/controllers/06-elite-series-2.png",
        pros: ["Instelbare sticks", "Extra paddles", "Oplaadbare batterij"],
        cons: ["Hoge prijs"],
        stores: [{ name: "Bol.com", link: "https://partner.bol.com/click/click?p=2&t=url&s=1508333&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Fxbox-elite-series-2-draadloze-controller-zwart-xbox-series-x-s-xbox-one-pc%2F9200000113983766%2F&name=Xbox%20Elite%20Series%202%20Controller%20-%20Draadloos%20-%20Zwart%20-%20Xbox%20Series%20X%2FS%2C%20Xbox%20One%20%26%20PC", approxPrice: "€ 158" }]
      },
      {
        name: "PowerA Enhanced Xbox Controller",
        description: "Officieel gelicenseerde Xbox-controller met extra programmabare knoppen en mappable profielen.",
        rating: 4.3,
        image: "/images/controllers/07-powera-enhanced.png",
        pros: ["Programmabare knoppen", "Officieel gelicenseerd", "Goede prijs"],
        cons: ["AA-batterijen nodig"],
        stores: [{ name: "Bol.com", bolProductId: "9300000018942625" }]
      },
      {
        name: "PDP Afterglow Switch Controller",
        description: "Officieel gelicenseerde Switch-controller met RGB-verlichting en transparante behuizing.",
        rating: 4.2,
        image: "/images/controllers/08-pdp-afterglow.png",
        pros: ["RGB-verlichting", "Officieel gelicenseerd", "Betaalbaar"],
        cons: ["Geen HD-rumble"],
        stores: [{ name: "Bol.com", bolProductId: "9300000230534100", approxPrice: "€ 52" }]
      },
      {
        name: "Trust GXT gaming controller",
        description: "Veelzijdige wired gaming-controller compatibel met PC, PlayStation en Nintendo Switch.",
        rating: 4.1,
        image: "/images/controllers/09-trust-gxt.png",
        pros: ["Multi-platform", "Betaalbaar", "Plug-and-play"],
        cons: ["Geen draadloos"],
        stores: [{ name: "Bol.com", bolProductId: "9300000133590435", approxPrice: "€ 36" }]
      },
      {
        name: "Nacon Revolution 5 Pro",
        description: "Premium PS5/PC-controller met Hall-effect sticks, draadloos en bedraad, plus aanpasbare gewichten.",
        rating: 4.6,
        image: "/images/controllers/10-nacon-revolution.png",
        pros: ["Hall-effect sticks", "Draadloos + bedraad", "Aanpasbare gewichten"],
        cons: ["Duur"],
        stores: [{ name: "Bol.com", bolProductId: "9300000162046256", approxPrice: "€ 176" }]
      }
    ]
  },
  headsets: {
    title: "Top 10 Beste Koptelefoons van 2026",
    description: "Van noise-cancelling tot gaming, de populairste draadloze koptelefoons",
    products: [
      {
        name: "Sony WH-1000XM5 Wireless Headphones",
        description: "Premium noise-cancelling koptelefoon met brancheleidende ANC, heldere call-kwaliteit en tot 30 uur batterij.",
        rating: 4.9,
        image: "/images/headsets/01-sony-xm5.png",
        pros: ["Beste noise cancelling", "Lichtgewicht", "Multipoint Bluetooth"],
        cons: ["Duur"],
        stores: [
          { name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F905648%2Fsony-wh-1000xm5-zwart.html", approxPrice: "€ 232" },
          { name: "Bol.com", bolProductId: "9300000096972714", approxPrice: "€ 239,99" }
        ]
      },
      {
        name: "Sennheiser Momentum 4 Wireless Headphones",
        description: "Luxe draadloze koptelefoon met rijke audiokwaliteit, adaptieve ANC en maar liefst 60 uur batterijduur.",
        rating: 4.8,
        image: "/images/headsets/02-sennheiser-momentum4.png",
        pros: ["60 uur batterij", "Uitstekende audiokwaliteit", "Adaptieve ANC"],
        cons: ["Groot formaat"],
        stores: [
          { name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F911912%2Fsennheiser-momentum-4-wireless-zwart.html", approxPrice: "€ 211" },
          { name: "Bol.com", bolProductId: "9300000118315140", approxPrice: "€ 197" }
        ]
      },
      {
        name: "Bose QuietComfort Ultra",
        description: "Topklasse Bose-koptelefoon met immersive audio, krachtige noise cancelling en premium comfort.",
        rating: 4.8,
        image: "/images/headsets/03-bose-qc-ultra.png",
        pros: ["Immersive audio", "Krachtige ANC", "Zachte oorkussens"],
        cons: ["Hoge prijs"],
        stores: [
          { name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F968677%2Fbose-quietcomfort-ultra-headphones-2e-gen-zwart.html", approxPrice: "€ 414" },
          { name: "Bol.com", bolProductId: "9300000242085612", approxPrice: "€ 394" }
        ]
      },
      {
        name: "JBL Tune 770NC",
        description: "Betaalbare over-ear koptelefoon met actieve noise cancelling en JBL Pure Bass-geluid.",
        rating: 4.5,
        image: "/images/headsets/04-jbl-tune-770nc.png",
        pros: ["Actieve noise cancelling", "JBL Pure Bass", "Goede prijs"],
        cons: ["Minder premium afwerking"],
        stores: [
          { name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F930309%2Fjbl-tune-770nc-zwart.html", approxPrice: "€ 81" },
          { name: "Bol.com", bolProductId: "9300000149873801", approxPrice: "€ 81" }
        ]
      },
      {
        name: "Sony WH-CH720N",
        description: "Instapmodel van Sony met noise cancelling, lichtgewicht design en lange batterijduur voor dagelijks gebruik.",
        rating: 4.4,
        image: "/images/headsets/05-sony-ch720n.png",
        pros: ["Lichtgewicht", "Noise cancelling", "Betaalbaar"],
        cons: ["Minder premium geluid dan XM5"],
        stores: [
          { name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F923501%2Fsony-wh-ch720n-zwart.html", approxPrice: "€ 74" },
          { name: "Bol.com", bolProductId: "9300000139579321", approxPrice: "€ 77" }
        ]
      },
      {
        name: "JBL Live 770NC",
        description: "Draadloze over-ear koptelefoon met adaptieve noise cancelling en JBL Signature Sound.",
        rating: 4.5,
        image: "/images/headsets/06-jbl-live-770nc.png",
        pros: ["Adaptieve ANC", "JBL Signature Sound", "Comfortabel"],
        cons: ["App vereist voor instellingen"],
        stores: [
          { name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F934400%2Fjbl-live-770nc-zwart.html", approxPrice: "€ 180" },
          { name: "Bol.com", bolProductId: "9300000151669587", approxPrice: "€ 85" }
        ]
      },
      {
        name: "SteelSeries Arctis Nova 7",
        description: "Draadloze gaming headset met 2.4GHz + Bluetooth, lange batterijduur en heldere microfoon.",
        rating: 4.8,
        image: "/images/headsets/08-arctis-nova-7.png",
        pros: ["2.4GHz + Bluetooth", "30 uur batterij", "Comfortabel"],
        cons: ["Prijzig"],
        stores: [
          { name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F968284%2Fsteelseries-arctis-nova-7-gen-2-zwart.html", approxPrice: "€ 169" },
          { name: "Bol.com", bolProductId: "9300000242454183", approxPrice: "€ 169" }
        ]
      },
      {
        name: "HyperX Cloud III Wireless",
        description: "Lichtgewicht draadloze gaming headset met DTS Headphone:X spatial audio en verwijderbare microfoon.",
        rating: 4.7,
        image: "/images/headsets/09-hyperx-cloud-iii.png",
        pros: ["Lichtgewicht", "Goede microfoon", "Multi-platform"],
        cons: ["Geen actieve noise cancelling"],
        stores: [
          { name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F965458%2Fhyperx-cloud-iii-s-wireless-rood-zwart.html", approxPrice: "€ 108" },
          { name: "Bol.com", bolProductId: "9300000196268345", approxPrice: "€ 119" }
        ]
      },
      {
        name: "Logitech G Pro X 2 Lightspeed",
        description: "Esports gaming headset met PRO-G GRAPHENE-drivers, Lightspeed draadloos en draaibare microfoon.",
        rating: 4.8,
        image: "/images/headsets/10-logitech-gpro-x2.png",
        pros: ["PRO-G GRAPHENE drivers", "Lightspeed draadloos", "Esports-kwaliteit"],
        cons: ["Duur"],
        stores: [
          { name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F928437%2Flogitech-g-pro-x-2-lightspeed-wireless-gaming-headset-zwart.html", approxPrice: "€ 170" },
          { name: "Bol.com", bolProductId: "9300000151053944", approxPrice: "€ 139" }
        ]
      }
    ]
  },
  keyboards: {
    title: "Top 10 Beste Toetsenborden van 2026",
    description: "Van productiviteitstoetsenborden tot mechanische gaming boards, de populairste keuzes voor werk en gamen",
    products: [
      {
        name: "Logitech MX Mechanical Wireless Keyboard",
        description: "Premium draadloos mechanisch toetsenbord met tactile switches, multi-device Bluetooth en backlit toetsen voor productief werken.",
        rating: 4.8,
        image: "/images/keyboards/01-mx-mechanical.png",
        pros: ["Mechanische switches", "Multi-device", "Draadloos"],
        cons: ["Prijzig", "Geen gaming RGB"],
        stores: [
          { name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F908468%2Flogitech-mx-mechanical-draadloos-toetsenbord-metaal.html", approxPrice: "€ 151" },
          { name: "Bol.com", bolProductId: "9300000104777042", approxPrice: "€ 159,50" }
        ]
      },
      {
        name: "Logitech G915 X LIGHTSPEED Wireless Gaming Keyboard",
        description: "Ultradun draadloos gaming toetsenbord met low-profile GL-switches, LIGHTSPEED-verbinding en per-key RGB-verlichting.",
        rating: 4.8,
        image: "/images/keyboards/02-g915-x.png",
        pros: ["Ultradun design", "LIGHTSPEED draadloos", "Per-key RGB"],
        cons: ["Duur", "Low-profile switches"],
        stores: [
          { name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F953305%2Flogitech-g915-x-lightspeed-wireless-gaming-toetsenbord-zwart-qwerty.html", approxPrice: "€ 139" },
          { name: "Bol.com", bolProductId: "9300000185453659", approxPrice: "€ 125" }
        ]
      },
      {
        name: "Logitech MX Mechanical Mini Keyboard",
        description: "Compact draadloos mechanisch toetsenbord zonder numpad. Ideaal voor kleinere bureaus met dezelfde MX-kwaliteit.",
        rating: 4.7,
        image: "/images/keyboards/03-mx-mechanical-mini.png",
        pros: ["Compact formaat", "Mechanisch", "Multi-device"],
        cons: ["Geen numpad", "Prijzig"],
        stores: [
          { name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F915980%2Flogitech-mx-mechanical-mini-voor-mac-space-grey.html", approxPrice: "€ 137" },
          { name: "Bol.com", bolProductId: "9300000096887783", approxPrice: "€ 137" }
        ]
      },
      {
        name: "Logitech G Pro X TKL",
        description: "Esports toetsenbord in tenkeyless formaat met hot-swappable GX-switches en compact design voor competitief gamen.",
        rating: 4.8,
        image: "/images/keyboards/04-g-pro-x-tkl.png",
        pros: ["Hot-swappable", "Compact TKL", "GX switches"],
        cons: ["Geen numpad", "Bedraad"],
        stores: [
          { name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F953347%2Flogitech-g915-x-lightspeed-tkl-wireless-gaming-toetsenbord-zwart-qwerty.html", approxPrice: "€ 139" },
          { name: "Bol.com", bolProductId: "9300000160446071", approxPrice: "€ 113" }
        ]
      },
      {
        name: "Logitech MX Keys S",
        description: "Slim draadloos toetsenbord met spherically-dished toetsen, backlit keys en naadloze multi-device switching.",
        rating: 4.7,
        image: "/images/keyboards/05-mx-keys-s.png",
        pros: ["Stille toetsen", "Backlit", "Multi-device"],
        cons: ["Geen mechanisch", "Niet voor gaming"],
        stores: [
          { name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F930939%2Flogitech-mx-keys-s-grafiet-qwerty.html", approxPrice: "€ 89" },
          { name: "Bol.com", bolProductId: "9300000151546985", approxPrice: "€ 130" }
        ]
      },
      {
        name: "SteelSeries Apex Pro TKL",
        description: "Premium gaming toetsenbord met instelbare OmniPoint 2.0-switches en OLED Smart Display in compact TKL-formaat.",
        rating: 4.8,
        image: "/images/keyboards/06-apex-pro-tkl.png",
        pros: ["Instelbare switches", "OLED display", "Compact TKL"],
        cons: ["Duur"],
        stores: [
          { name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F954992%2Fsteelseries-apex-pro-tkl-gen-3-gaming-toetsenbord-qwerty.html", approxPrice: "€ 214" },
          { name: "Bol.com", bolProductId: "9300000191126533", approxPrice: "€ 214" }
        ]
      },
      {
        name: "Keychron B1 Pro Ultra-Slim",
        description: "Ultradun draadloos toetsenbord met laag profiel, multi-device Bluetooth en stille toetsen, ideaal voor een opgeruimd bureau en productief werken.",
        rating: 4.6,
        image: "/images/keyboards/07-keychron-b1-pro.png",
        pros: ["Ultra-slim design", "Draadloos", "Multi-device Bluetooth"],
        cons: ["Geen mechanische switches", "Geen numpad"],
        stores: [{ name: "Bol.com", bolProductId: "9300000184565230", approxPrice: "€ 57" }]
      },
      {
        name: "Corsair K70 RGB Pro",
        description: "Full-size gaming toetsenbord met Cherry MX-switches, per-key RGB en aluminium frame voor lange gaming sessies.",
        rating: 4.6,
        image: "/images/keyboards/08-corsair-k70.png",
        pros: ["Cherry MX switches", "Aluminium frame", "Per-key RGB"],
        cons: ["Groot formaat", "Bedraad"],
        stores: [{ name: "Bol.com", bolProductId: "9300000162693627", approxPrice: "€ 80" }]
      },
      {
        name: "Ducky One 3 Gaming Keyboard",
        description: "Premium mechanisch toetsenbord met hot-swap PCB, PBT keycaps en Ducky's befaamde bouwkwaliteit.",
        rating: 4.7,
        image: "/images/keyboards/09-ducky-one-3.png",
        pros: ["Hot-swap PCB", "PBT keycaps", "Premium bouw"],
        cons: ["Geen draadloos"],
        stores: [{ name: "Bol.com", bolProductId: "9300000156023426" }]
      },
      {
        name: "Ducky One 3 Classic White SF Gaming Keyboard",
        description: "Compact 65% mechanisch toetsenbord in classic white met Cherry MX-switches en hot-swap ondersteuning.",
        rating: 4.7,
        image: "/images/keyboards/10-ducky-one-3-sf.png",
        pros: ["Compact 65%", "Cherry MX", "Hot-swap"],
        cons: ["Geen numpad of F-rij", "Bedraad"],
        stores: [{ name: "Bol.com", bolProductId: "9300000146131604" }]
      }
    ]
  },
  mice: {
    title: "Top 10 Beste Muizen van 2026",
    description: "Van productiviteitsmuizen tot esports-gamingmuizen, de populairste muizen voor werk en gamen",
    products: [
      {
        name: "Logitech MX Master 3S Mouse",
        description: "De ultieme productiviteitsmuis met MagSpeed-scrollwiel, 8K DPI-lasersensor en stille klikken. Verbindt met tot 3 apparaten via Bluetooth of USB-ontvanger.",
        rating: 4.9,
        image: "/images/mice/01-mx-master-3s.png",
        pros: ["MagSpeed scrollwiel", "Multi-device", "Ergonomisch design"],
        cons: ["Niet geschikt voor gaming", "Prijzig"],
        stores: [{ name: "Bol.com", bolProductId: "9300000096887779", approxPrice: "€ 99" }]
      },
      {
        name: "Logitech G502 X Plus",
        description: "Draadloze versie van de iconische G502 met LIGHTFORCE-schakelaars, HERO 25K-sensor, LIGHTSPEED-verbinding en RGB-verlichting.",
        rating: 4.8,
        image: "/images/mice/02-g502-x-plus.png",
        pros: ["LIGHTSPEED draadloos", "LIGHTFORCE schakelaars", "HERO 25K sensor", "RGB-verlichting"],
        cons: ["Prijziger dan bedrade G502 X"],
        stores: [{ name: "Bol.com", bolProductId: "9300000121723023", approxPrice: "€ 95" }]
      },
      {
        name: "Logitech G Pro X Superlight 2",
        description: "Ultralichte draadloze esports muis van slechts 60 gram met HERO 2-sensor en Lightspeed-verbinding.",
        rating: 4.9,
        image: "/images/mice/03-g-pro-x-superlight-2.png",
        pros: ["60g gewicht", "HERO 2 sensor", "Lightspeed"],
        cons: ["Duur"],
        stores: [{ name: "Bol.com", bolProductId: "9300000160446074", approxPrice: "€ 121" }, { name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F936061%2Flogitech-g-pro-x-superlight-2-lightspeed-draadloze-gaming-muis-zwart.html", approxPrice: "€ 110" }]
      },
      {
        name: "Razer DeathAdder V3 Pro",
        description: "Ergonomische draadloze gaming muis met Focus Pro 30K-sensor en tot 90 uur batterijduur.",
        rating: 4.8,
        image: "/images/mice/04-deathadder-v3-pro.png",
        pros: ["Ergonomisch", "Lange batterij", "Precieze sensor"],
        cons: ["Rechtshandig only"],
        stores: [{ name: "Bol.com", bolProductId: "9300000120836646", approxPrice: "€ 105" }]
      },
      {
        name: "Razer Viper V3 Pro",
        description: "Ultralichte esports muis met Focus Pro 35K-sensor, 54 gram gewicht en HyperSpeed draadloos.",
        rating: 4.9,
        image: "/images/mice/05-viper-v3-pro.png",
        pros: ["54g ultralicht", "Focus Pro 35K", "Esports-kwaliteit"],
        cons: ["Duur", "Symmetrisch, minder ergonomisch"],
        stores: [{ name: "Bol.com", bolProductId: "9300000178188178", approxPrice: "€ 109" }, { name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F953160%2Frazer-viper-v3-pro-wireless-gaming-muis-zwart.html", approxPrice: "€ 133" }]
      },
      {
        name: "Logitech Lift Vertical",
        description: "Verticale ergonomische muis die je hand in een natuurlijke handshake-positie houdt. Ideaal voor lange werkdagen.",
        rating: 4.6,
        image: "/images/mice/06-lift-vertical.png",
        pros: ["Verticaal design", "Ergonomisch", "Stille klikken"],
        cons: ["Even wennen", "Niet voor gaming"],
        stores: [{ name: "Bol.com", bolProductId: "9300000082834969", approxPrice: "€ 44" }, { name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F905909%2Flogitech-lift-verticale-ergonomische-muis-zwart.html", approxPrice: "€ 63" }]
      },
      {
        name: "Logitech G305 Lightspeed",
        description: "Betaalbare draadloze gaming muis met HERO-sensor en tot 250 uur batterijduur op één AA-batterij.",
        rating: 4.7,
        image: "/images/mice/07-g305-lightspeed.png",
        pros: ["Betaalbaar", "250 uur batterij", "Lightspeed draadloos"],
        cons: ["Geen oplaadbare batterij"],
        stores: [{ name: "Bol.com", link: "https://partner.bol.com/click/click?p=2&t=url&s=1508333&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Fwireless-muis-910-005282%2F9200000093446803%2F&name=Logitech%20G305%20Lightspeed%20draadloze%20muis%20-%20Gaming%20-%20Zwart%20-%20Rechtshandig", approxPrice: "€ 33" }, { name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F813678%2Flogitech-g305-lightspeed-draadloze-gaming-muis.html", approxPrice: "€ 35" }]
      },
      {
        name: "SteelSeries Aerox 3 Wireless",
        description: "Lichtgewicht draadloze gaming muis van 66 gram met AquaBarrier en TrueMove Air-sensor.",
        rating: 4.6,
        image: "/images/mice/08-aerox-3-wireless.png",
        pros: ["66g lichtgewicht", "Waterbestendig", "Multi-platform"],
        cons: ["Kleiner formaat"],
        stores: [{ name: "Bol.com", bolProductId: "9300000053677967", approxPrice: "€ 69" }, { name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F893852%2Fsteelseries-aerox-3-wireless-onyx.html", approxPrice: "€ 93" }]
      },
      {
        name: "Logitech M720 Triathlon",
        description: "Veelzijdige multi-device muis die naadloos schakelt tussen drie apparaten via Bluetooth of Unifying-ontvanger.",
        rating: 4.5,
        image: "/images/mice/09-m720-triathlon.png",
        pros: ["3 apparaten", "Lange batterijduur", "Betaalbaar"],
        cons: ["Basis sensor", "Geen gaming"],
        stores: [{ name: "Bol.com", link: "https://partner.bol.com/click/click?p=2&t=url&s=1508333&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Flogitech-m720-draadloze-muis-zwart%2F9200000063622433%2F&name=Logitech%20M720%20Triathlon%20Muis%20-%20Draadloos%20-%20Bluetooth%20-%20Zwart", approxPrice: "€ 49" }]
      },
      {
        name: "Corsair Scimitar Elite RGB",
        description: "MMO-gaming muis met 16 programmeerbare zijknoppen, 26K DPI-sensor en snel verwisselbare zijpanelen.",
        rating: 4.5,
        image: "/images/mice/10-scimitar-elite.png",
        pros: ["16 zijknoppen", "26K DPI sensor", "MMO-gaming"],
        cons: ["Groot formaat", "Bedraad"],
        stores: [{ name: "Bol.com", link: "https://partner.bol.com/click/click?p=2&t=url&s=1508333&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Fcorsair-scimitar-rgb-elite-gaming-muis-18000-dpi-zwart%2F9200000128199372%2F&name=Corsair%20Scimitar%20RGB%20Elite%20Gaming%20Mouse%20-%2018000%20DPI%20-%2017%20programmeerbare%20knoppen", approxPrice: "€ 82" }, { name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F856099%2Fcorsair-scimitar-elite-rgb-gaming-muis.html", approxPrice: "€ 59" }]
      }
    ]
  },
  airpods: {
    title: "Top 10 Beste AirPods van 2026",
    description: "De populairste Apple AirPods vergeleken op geluid, noise cancelling en prijs",
    products: [
      {
        name: "Apple AirPods Pro 2 (USB-C)",
        description: "Flagship in-ear met actieve noise cancelling, Adaptive Audio en USB-C-opladen. De standaardkeuze voor iPhone-gebruikers.",
        rating: 4.9,
        image: "/images/headsets/07-airpods-max.png",
        pros: ["Actieve noise cancelling", "Adaptive Audio", "USB-C"],
        cons: ["Duur", "Geen lossless audio"],
        stores: []
      },
      {
        name: "Apple AirPods 4 (Active Noise Cancellation)",
        description: "Nieuwste AirPods 4-variant met ANC, spatial audio en open-fit comfort zonder siliconen tips.",
        rating: 4.8,
        image: "/images/headsets/07-airpods-max.png",
        pros: ["ANC in open-fit design", "Spatial audio", "USB-C case"],
        cons: ["Minder isolatie dan Pro", "Duurder dan standaard AirPods 4"],
        stores: []
      },
      {
        name: "Apple AirPods 4",
        description: "Instapmodel met H2-chip, spatial audio en verbeterde batterijduur in een lichter design.",
        rating: 4.7,
        image: "/images/headsets/07-airpods-max.png",
        pros: ["H2-chip", "Spatial audio", "Betaalbaarder dan Pro"],
        cons: ["Geen ANC", "Geen siliconen tips"],
        stores: []
      },
      {
        name: "Apple AirPods Max (2e generatie)",
        description: "Premium over-ear met computational audio, spatial audio en USB-C. Naadloze integratie met Apple-apparaten.",
        rating: 4.7,
        image: "/images/headsets/07-airpods-max.png",
        pros: ["Spatial audio", "Premium bouwkwaliteit", "USB-C"],
        cons: ["Zwaar", "Duur"],
        stores: [
          { name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F977430%2Fapple-airpods-max-2-middernacht.html", approxPrice: "€ 579" },
          { name: "Bol.com", bolProductId: "9300000189466513", approxPrice: "€ 409" }
        ]
      },
      {
        name: "Apple AirPods (3e generatie)",
        description: "Populair instapmodel met spatial audio, Adaptive EQ en MagSafe-oplaadcase.",
        rating: 4.6,
        image: "/images/headsets/07-airpods-max.png",
        pros: ["Spatial audio", "MagSafe case", "Betaalbaar"],
        cons: ["Geen ANC", "Oudere chip dan AirPods 4"],
        stores: []
      },
      {
        name: "Apple AirPods Pro (1e generatie)",
        description: "Voorganger van de Pro 2 met ANC en Transparency mode. Nog steeds populair tegen lagere prijs.",
        rating: 4.5,
        image: "/images/headsets/07-airpods-max.png",
        pros: ["ANC", "Goede prijs used/refurb", "Bewezen model"],
        cons: ["Lightning case", "Oudere chip"],
        stores: []
      },
      {
        name: "Apple AirPods Pro 2 (Lightning)",
        description: "Zelfde Pro 2-ervaring met Lightning-oplaadcase. Interessant als je oude Lightning-accessoires hebt.",
        rating: 4.8,
        image: "/images/headsets/07-airpods-max.png",
        pros: ["Pro 2-kwaliteit", "ANC", "Vaak goedkoper"],
        cons: ["Lightning i.p.v. USB-C", "Wordt uitgefaseerd"],
        stores: []
      },
      {
        name: "Apple AirPods Max (1e generatie)",
        description: "Eerste generatie over-ear AirPods met Lightning. Nog beschikbaar via outlets en refurbished.",
        rating: 4.5,
        image: "/images/headsets/07-airpods-max.png",
        pros: ["Lagere prijs", "Premium geluid", "ANC"],
        cons: ["Lightning", "Zwaar"],
        stores: []
      },
      {
        name: "Apple AirPods 2",
        description: "Klassieker met H1-chip en draadloze oplaadcase. Budgetvriendelijke keuze voor basale Apple-integratie.",
        rating: 4.3,
        image: "/images/headsets/07-airpods-max.png",
        pros: ["Betaalbaar", "Betrouwbaar", "H1-chip"],
        cons: ["Geen spatial audio", "Verouderd design"],
        stores: []
      },
      {
        name: "Apple AirPods 4 (refurbished)",
        description: "Gecertificeerd refurbished AirPods 4 via bol.com en Coolblue. Goede optie als je op prijs let.",
        rating: 4.6,
        image: "/images/headsets/07-airpods-max.png",
        pros: ["Lagere prijs", "Gecertificeerd refurbished", "Zelfde features"],
        cons: ["Beperkte voorraad", "Geen volledige garantie als nieuw"],
        stores: []
      }
    ]
  },
  tvs: {
    title: "Top 10 meest populaire TV's van 2026",
    description: "Smart TV's met OLED en QLED voor film, sport en gaming",
    products: [
      {
        name: "LG C5 OLED65C55LA",
        description: "Best overall OLED-tv met AI-beeldverwerking, diep zwart en slimme webOS-functies voor film, sport en gaming.",
        rating: 4.9,
        image: "/images/tvs/01-lg-oled-evo-c5.png",
        pros: ["65 inch 4K OLED evo", "AI-beeldverwerking", "webOS smart TV"],
        cons: ["Prijzig"],
        stores: [{ name: "Bol.com", bolProductId: "9300000230515237", approxPrice: "€ 1.718" }, { name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F963246%2Flg-65-oled-evo-c54-4k-2025.html", approxPrice: "€ 1.589" }]
      },
      {
        name: "Sony BRAVIA 8 OLED",
        description: "Topklasse OLED-tv met uitstekende beeldverwerking en filmkwaliteit.",
        rating: 4.9,
        image: "/images/tvs/02-sony-bravia-8.png",
        pros: ["Sony beeldverwerking", "Filmkwaliteit", "OLED paneel"],
        cons: ["Duur"],
        stores: [{ name: "Bol.com", bolProductId: "9300000177672020", approxPrice: "€ 1.999" }, { name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F949407%2Fsony-55-bravia-8-oled-4k-2024.html", approxPrice: "€ 1.199" }]
      },
      {
        name: "LG OLED evo G5",
        description: "Premium OLED met extreem hoge helderheid en sterke gamingprestaties.",
        rating: 4.8,
        image: "/images/tvs/03-lg-g5-oled.png",
        pros: ["Extreem hoge helderheid", "Sterke gaming", "Premium OLED"],
        cons: ["Zeer duur", "Gallery design niet voor iedereen"],
        stores: [{ name: "Bol.com", bolProductId: "9300000229178466", approxPrice: "€ 1.849" }, { name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F963241%2Flg-65-oled-evo-g56-4k-2025.html", approxPrice: "€ 1.879" }]
      },
      {
        name: "Samsung S90F OLED",
        description: "Nieuwe generatie Samsung QD-OLED met verbeterde helderheid, diep zwart en 4K-gaming via HDMI 2.1 met lage input lag.",
        rating: 4.8,
        image: "/images/tvs/04-samsung-s90f.png",
        pros: ["QD-OLED paneel", "HDMI 2.1 gaming", "Verbeterde helderheid"],
        cons: ["Geen ingebouwde One Connect box op alle modellen"],
        stores: [{ name: "Bol.com", bolProductId: "9300000234157119", approxPrice: "€ 1.776" }]
      },
      {
        name: "Samsung Q7F QLED",
        description: "Populaire Samsung QLED-tv uit 2025 met Quantum Dot-technologie, helder Mini-LED-beeld en Tizen smart TV, breed verkrijgbaar in meerdere formaten.",
        rating: 4.6,
        image: "/images/tvs/05-samsung-q7f.png",
        pros: ["QLED Quantum Dot", "Helder Mini-LED-beeld", "Tizen smart TV", "Goede prijs-kwaliteit"],
        cons: ["Geen OLED, minder diep zwart"],
        stores: [{ name: "Bol.com", bolProductId: "9300000230943478", approxPrice: "€ 1.099" }]
      },
      {
        name: "LG C5 OLED",
        description: "Instapmodel in LG's OLED-lijn met evo-technologie, webOS en solide gamingfeatures voor dagelijks gebruik.",
        rating: 4.7,
        image: "/images/tvs/06-lg-c5-oled.png",
        pros: ["OLED evo", "webOS", "Gaming via HDMI 2.1"],
        cons: ["Minder helder dan G-serie"],
        stores: [{ name: "Bol.com", bolProductId: "9300000230515238", approxPrice: "€ 779" }, { name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F963247%2Flg-55-oled-evo-c54-4k-2025.html", approxPrice: "€ 1.099" }]
      },
      {
        name: "Samsung S95F OLED",
        description: "Topklasse Samsung QD-OLED uit 2025 met maximale helderheid, Glare Free-technologie en premium beeld voor thuisbioscoop.",
        rating: 4.9,
        image: "/images/tvs/07-samsung-s95f.png",
        pros: ["QD-OLED topklasse", "Glare Free", "Maximale helderheid"],
        cons: ["Zeer duur"],
        stores: [{ name: "Bol.com", bolProductId: "9300000232685854" }, { name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F963453%2Fsamsung-65-oled-s95f-4k-2025.html", approxPrice: "€ 1.959" }]
      },
      {
        name: "Sony Bravia 5",
        description: "Sony Mini LED-tv met krachtige beeldverwerker, hoge helderheid en uitstekende upscaling voor elke content.",
        rating: 4.7,
        image: "/images/tvs/08-sony-bravia-5.png",
        pros: ["Mini LED", "Sony beeldverwerking", "Hoge helderheid"],
        cons: ["Prijzig"],
        stores: [{ name: "Bol.com", bolProductId: "9300000228487631", approxPrice: "€ 1.229" }, { name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F962916%2Fsony-bravia-5-65-xr-mini-led-2025.html", approxPrice: "€ 1.269" }]
      },
      {
        name: "Philips OLED849",
        description: "Philips OLED Ambilight-tv met meeslepende verlichting, Dolby Vision en Ambilight voor unieke kijkervaring.",
        rating: 4.7,
        image: "/images/tvs/09-philips-oled849.png",
        pros: ["Ambilight", "OLED paneel", "Dolby Vision"],
        cons: ["Ambilight niet voor iedereen"],
        stores: [{ name: "Bol.com", bolProductId: "9300000176604392", approxPrice: "€ 799" }]
      },
      {
        name: "TCL 85T8D",
        description: "TCL's premium Mini LED-lijn met hoge helderheid, Google TV en sterke prijs-kwaliteit voor grote schermen.",
        rating: 4.6,
        image: "/images/tvs/10-tcl-85t8d.png",
        pros: ["Mini LED premium", "Google TV", "Goede prijs-kwaliteit"],
        cons: ["Specificaties variëren per model"],
        stores: [{ name: "Bol.com", bolProductId: "9300000273452844", approxPrice: "€ 682" }]
      }
    ]
  },
};
