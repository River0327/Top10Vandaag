'use client';

import { useEffect, useRef } from 'react';
import Navigation from '../../../../components/Navigation';
import Link from 'next/link';
import Head from 'next/head';

interface Product {
  name: string;
  description: string;
  rating: number;
  image: string;
  pros: string[];
  cons: string[];
  stores: {
    name: string;
    link: string;
  }[];
}

interface SubcategoryData {
  title: string;
  description: string;
  products: Product[];
}

const subcategoryData: { [key: string]: SubcategoryData } = {
  apple: {
    title: "Top 10 Populaire Apple iPhones van 2026",
    description: "De populairste iPhones op dit moment, gerangschikt op prestaties en gebruiksgemak.",
    products: [
      {
        name: "Apple iPhone 17 Pro Max",
        description: "De iPhone 17 Pro Max is het absolute topmodel van Apple met het grootste scherm en de sterkste prestaties. Perfect voor wie het maximale uit foto's, video en multitasking wil halen.",
        rating: 4.8,
        image: "https://media.s-bol.com/0KDNEKOJNj5V/DRL6Ayq/163x210.jpg",
        pros: [
          "Scherm: 6,9 inch OLED",
          "Camera: 48 MP",
          "Chip: A19 Pro"
        ],
        cons: [],
        stores: [
          {
            name: "Coolblue",
            link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F969451%2Fapple-iphone-17-pro-max-256gb-blauw.html"
          },
          {
            name: "Bol.com",
            link: "https://partner.bol.com/click/click?p=2&t=url&s=1508333&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Fapple-iphone-17-pro-max-256gb-cosmic-orange%2F9300000240171924%2F&name=Apple%20iPhone%2017%20Pro%20Max%20-%20Cosmic%20Orange%20-%20256GB%20-%2018MP%20camera"
          }
        ]
      },
      {
        name: "Apple iPhone 17 Pro",
        description: "De iPhone 17 Pro combineert Pro-camera's en topchip in een iets compacter formaat dan de Max. Ideaal als je Pro-functies wilt zonder het grootste toestel.",
        rating: 4.7,
        image: "https://media.s-bol.com/ZMLZDjvwX10Q/xGw7X1P/550x679.jpg",
        pros: [
          "Scherm: 6,3 inch OLED",
          "Camera: 48 MP",
          "Chip: A19 Pro"
        ],
        cons: [],
        stores: [
          {
            name: "Coolblue",
            link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F979992%2Fapple-iphone-17-pro-256gb-blauw-snellader.html"
          },
          {
            name: "Bol.com",
            link: "https://partner.bol.com/click/click?p=2&t=url&s=1508333&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Fapple-iphone-17-pro-256gb-cosmic-orange%2F9300000240171763%2F&name=Apple%20iPhone%2017%20Pro%20-%20256GB%20-%20Cosmic%20Orange%20-%20Nieuw%20camera%20systeem"
          }
        ]
      },
      {
        name: "Apple iPhone 17",
        description: "De standaard iPhone 17 biedt de nieuwste generatie features voor een breder publiek. Een uitstekende keuze als je een actuele iPhone zoekt zonder Pro-prijs.",
        rating: 4.7,
        image: "https://media.s-bol.com/4ZBWqNmEYgK0/WnXj4zJ/168x208.jpg",
        pros: [
          "Scherm: 6,3 inch OLED",
          "Camera: 48 MP",
          "Chip: A19"
        ],
        cons: [],
        stores: [
          {
            name: "Coolblue",
            link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F979991%2Fapple-iphone-17-256gb-zwart-snellader.html"
          },
          {
            name: "Bol.com",
            link: "https://partner.bol.com/click/click?p=2&t=url&s=1508333&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Fapple-iphone-17-256gb-zwart%2F9300000240171936%2F&name=Apple%20iPhone%2017%20-%20256GB%20-%20Black%20-%206%2C3%20inch%20Super%20Retina%20XDR-display"
          }
        ]
      },
      {
        name: "Apple iPhone 17e",
        description: "De iPhone 17e is het instapmodel van de nieuwste lijn met de belangrijkste iPhone-ervaring tegen een scherpere prijs. Slimme keuze voor wie modern iOS wil zonder flagship-budget.",
        rating: 4.6,
        image: "https://media.s-bol.com/k3mJkmGzmq3N/0VRjv5X/168x204.jpg",
        pros: [
          "Scherm: 6,1 inch OLED",
          "Camera: 48 MP",
          "Chip: A19"
        ],
        cons: [],
        stores: [
          {
            name: "Coolblue",
            link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F979995%2Fapple-iphone-17e-256gb-zwart-snellader.html"
          },
          {
            name: "Bol.com",
            link: "https://partner.bol.com/click/click?p=2&t=url&s=1508333&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Fapple-iphone-17e-5g-256gb-zwart%2F9300000266256313%2F&name=Apple%20iPhone%2017e%20-%20256%20GB%20-%20Zwart"
          }
        ]
      },
      {
        name: "Apple iPhone 16 Pro Max",
        description: "De iPhone 16 Pro Max blijft een krachtig vlaggenschip met groot scherm en Pro-camera's. Aantrekkelijk als je top-specificaties wilt tegen een iets lagere prijs dan de 17-serie.",
        rating: 4.5,
        image: "https://media.s-bol.com/EEgORmq4zqLY/XD9zJW8/168x210.jpg",
        pros: [
          "Scherm: 6,9 inch OLED",
          "Camera: 48 MP",
          "Chip: A18 Pro"
        ],
        cons: [],
        stores: [
          {
            name: "Bol.com",
            link: "https://partner.bol.com/click/click?p=2&t=url&s=1508333&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Fapple-iphone-16-pro-max-17-5-cm-dual-sim-ios-18-5g-usb-type-c-256-gb-zwart%2F9300000189439873%2F&name=Apple%20iPhone%2016%20Pro%20Max%20-%20256GB%20-%20Zwart%20Titanium%20-%20A18%20Pro-chip"
          }
        ]
      },
      {
        name: "Apple iPhone 16 Pro (Refurbished)",
        description: "Een gereviseerde iPhone 16 Pro levert Pro-prestaties en premium design voor minder geld. Duurzame keuze met dezelfde kernervaring als een nieuw exemplaar.",
        rating: 4.7,
        image: "https://media.s-bol.com/6qBjPmL8EoMN/mZmVxVn/168x207.jpg",
        pros: [
          "Scherm: 6,3 inch OLED",
          "Camera: 48 MP",
          "Chip: A18 Pro"
        ],
        cons: [],
        stores: [
          {
            name: "Bol.com",
            link: "https://partner.bol.com/click/click?p=2&t=url&s=1508333&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Fapple-iphone-16-pro-16-cm-dual-sim-ios-18-5g-usb-type-c-128-gb-zand%2F9300000189454726%2F&name=Apple%20iPhone%2016%20Pro%2016%20cm%20(6.3%22)%20Dual%20SIM%20iOS%2018%205G%20USB%20Type-C%20128%20GB%20Zand"
          }
        ]
      },
      {
        name: "Apple iPhone 16",
        description: "De iPhone 16 brengt het nieuwe camerasysteem en de A18-chip naar het reguliere formaat. Sterk allround-toestel voor dagelijks gebruik en contentcreatie.",
        rating: 4.8,
        image: "https://media.s-bol.com/vyMq25G8wP10/9rEwKz3/168x206.jpg",
        pros: [
          "Scherm: 6,1 inch OLED",
          "Camera: 48 MP",
          "Chip: A18"
        ],
        cons: [],
        stores: [
          {
            name: "Coolblue",
            link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F952114%2Fapple-iphone-16-128gb-zwart.html"
          },
            {
            name: "Bol.com",
            link: "https://partner.bol.com/click/click?p=2&t=url&s=1508333&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Fiphone-16-zwart%2F9300000189439876%2F&name=Apple%20iPhone%2016%20-%20128GB%20opslag%20-%20Zwart%20-%20Nieuw%20camerasysteem%20-%20A18-chip"
          }
        ]
      },
      {
        name: "Apple iPhone 15",
        description: "De iPhone 15 introduceerde Dynamic Island en USB-C en blijft zeer capabel in 2026. Nog steeds een betrouwbare iPhone met moderne basis en goede camera.",
        rating: 4.9,
        image: "https://media.s-bol.com/BYw3mMMkYNyk/Z4wxAzR/160x210.jpg",
        pros: [
          "Scherm: 6,1 inch OLED",
          "Camera: 48 MP",
          "Chip: A16 Bionic"
        ],
        cons: [],
        stores: [
          {
            name: "Coolblue",
            link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F935188%2Fapple-iphone-15-128gb-zwart.html"
          },
          {
            name: "Bol.com",
            link: "https://partner.bol.com/click/click?p=2&t=url&s=1508333&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Fapple-iphone-15-128gb-zwart%2F9300000161136294%2F&name=Apple%20iPhone%2015%20-%20128GB%20-%20Black%20-%20Dynamic%20Island%20-%20A16%20Bionic%20chip"
          }
        ]
      },
      {
        name: "Apple iPhone 15 Plus (Refurbished)",
        description: "De iPhone 15 Plus refurbished biedt een groot 6,7-inch scherm en lange gebruiksduur voor een lagere prijs. Fijn als je veel media kijkt en een Plus-formaat zoekt.",
        rating: 4.7,
        image: "https://media.s-bol.com/5ozp2OOMoQ1Z/98O1ml4/157x210.jpg",
        pros: [
          "Scherm: 6,7 inch OLED",
          "Camera: 48 MP",
          "Chip: A16 Bionic"
        ],
        cons: [],
        stores: [
          {
            name: "Bol.com",
            link: "https://partner.bol.com/click/click?p=2&t=url&s=1508333&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Fapple-iphone-15-plus-128gb-black%2F9300000161136553%2F&name=Apple%20iPhone%2015%20Plus%20-%20Dynamic%20Island%20-%20USB-C%20-%20128GB%20-%20Zwart"
          }
        ]
      },
      {
        name: "Apple iPhone 14",
        description: "De iPhone 14 is een bewezen model met solide cameras en crashdetectie. Interessant als instap in het Apple-ecosysteem met lagere aanschafkosten.",
        rating: 4.6,
        image: "https://media.s-bol.com/k0AqNRGQBVY6/vgY3O50/159x210.jpg",
        pros: [
          "Scherm: 6,1 inch OLED",
          "Camera: 12 MP",
          "Chip: A15 Bionic"
        ],
        cons: [],
        stores: [
          {
            name: "Bol.com",
            link: "https://partner.bol.com/click/click?p=2&t=url&s=1508333&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Fapple-iphone-14-128gb-middernacht%2F9300000123038693%2F&name=Apple%20iPhone%2014%20-%20128GB%20-%20Dualcamera%20-%20Crashdetectie%20-%20Middernacht"
          }
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
          {
            name: "Bol.com",
            link: "https://partner.bol.com/click/click?p=2&t=url&s=1508333&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Fapple-ipad-a16-11-inch-wi-fi-128gb-blue%2F9300000226757671%2F&name=Apple%20iPad%20A16%202025%20-%2011e%20generatie%20-%2011%20inch%20-%20Wi-Fi%20-%20128GB"
          },
          {
            name: "Coolblue",
            link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F961491%2Fapple-ipad-2025-11-inch-128gb-wifi-blauw.html"
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
          {
            name: "Bol.com",
            link: "https://partner.bol.com/click/click?p=2&t=url&s=1508333&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Fapple-ipad-air-11-inch-m1-128gb-blauw-wi-fi%2F9300000266298200%2F&name=Apple%20iPad%20Air%20(2026)%20-%2011%20inch%20-%20M4%20-%20128GB%20-%20Blauw-%20Wi-Fi"
          },
          {
            name: "Coolblue",
            link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F976740%2Fapple-ipad-air-2026-11-inch-256gb-wifi-grijs.html"
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
          {
            name: "Bol.com",
            link: "https://partner.bol.com/click/click?p=2&t=url&s=1508333&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Fapple-ipad-air-13-inch-m4-1-tb-grijs-wi-fi%2F9300000266298148%2F&name=Apple%20iPad%20Air%20(2026)%20-%2013%20inch%20-%20M4%20-%201%20TB%20-%20Grijs-%20Wi-Fi"
          },
          {
            name: "Coolblue",
            link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F976753%2Fapple-ipad-air-2026-13-inch-256gb-wifi-grijs.html"
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
          {
            name: "Bol.com",
            link: "https://partner.bol.com/click/click?p=2&t=url&s=1508333&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Fapple-ipad-pro-11-inch-wi-fi-5g-256gb-space-black%2F9300000244057427%2F&name=Apple%20iPad%20Pro%20(2025)%20-%2011%20inch%20-%20Wi-Fi%20%2B%205G%20-%20256GB%20-%20Space%20Black"
          },
          {
            name: "Coolblue",
            link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F971060%2Fapple-ipad-pro-2025-11-inch-256gb-wifi-zwart.html"
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
            name: "Coolblue",
            link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F971072%2Fapple-ipad-pro-2025-13-inch-256gb-wifi-zwart.html"
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
          {
            name: "Bol.com",
            link: "https://partner.bol.com/click/click?p=2&t=url&s=1508333&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Fapple-ipad-mini-5g-td-lte-fdd-lte-128-gb-21-1-cm-wi-fi-6e-ipados-18-grijs%2F9300000193725381%2F&name=Apple%20iPad%20Mini%20(2024)%20Wi-Fi%20%2B%205G%20-%20128GB%20-%20Grijs%20-%207e%20generatie"
          },
          {
            name: "Coolblue",
            link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F956098%2Fapple-ipad-mini-7-2024-128gb-wifi-5g-space-gray.html"
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
          {
            name: "Bol.com",
            link: "https://partner.bol.com/click/click?p=2&t=url&s=1508333&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Fapple-ipad-a16-11-inch-wi-fi-256gb-silver%2F9300000226757636%2F&name=Apple%20iPad%20A16%20(2025)%20-%2011e%20generatie%20-%20256GB%20-%20Wi-Fi%20-%20Silver"
          },
          {
            name: "Coolblue",
            link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F960491%2Fapple-ipad-2025-11-inch-256gb-wifi-zilver.html"
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
          {
            name: "Bol.com",
            link: "https://partner.bol.com/click/click?p=2&t=url&s=1508333&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Fapple-ipad-air-11-inch-m1-256gb-blauw-wi-fi%2F9300000266298419%2F&name=Apple%20iPad%20Air%20(2026)%20-%2011%20inch%20-%20M4%20-%20256GB%20-%20Blauw%20-%20Wi-Fi"
          },
          {
            name: "Coolblue",
            link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F976740%2Fapple-ipad-air-2026-11-inch-256gb-wifi-grijs.html"
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
          {
            name: "Bol.com",
            link: "https://partner.bol.com/click/click?p=2&t=url&s=1508333&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Fapple-ipad-air-13-inch-m4-256-gb-grijs-wi-fi%2F9300000266298197%2F&name=Apple%20iPad%20Air%20(2026)%20-%2013%20inch%20-%20M4%20-%20256%20GB%20-%20Grijs%20-%20Wi-Fi"
          },
          {
            name: "Coolblue",
            link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F976753%2Fapple-ipad-air-2026-13-inch-256gb-wifi-grijs.html"
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
          {
            name: "Bol.com",
            link: "https://partner.bol.com/click/click?p=2&t=url&s=1508333&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Fapple-ipad-air-m3-11-inch-wi-fi-cellular-256gb-space-grey%2F9300000226757746%2F&name=Apple%20iPad%20Air%20M3%20(2025)%20-%2011%20inch%20-%20Wi-Fi%20%2B%20Cellular%20-%20256GB%20-%20Space%20Grey"
          },
          {
            name: "Coolblue",
            link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F960497%2Fapple-ipad-air-2025-11-inch-256gb-wifi-space-gray.html"
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
          { name: "Bol.com", link: "https://partner.bol.com/click/click?p=2&t=url&s=1508333&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Fsamsung-galaxy-s26-ultra-256gb-black%2F9300000265051702%2F&name=Samsung%20Galaxy%20S26%20Ultra%20-%20256GB%20-%20Black" },
          { name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F975476%2Fsamsung-galaxy-s26-ultra-512gb-zwart-5g.html" }
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
          { name: "Bol.com", link: "https://partner.bol.com/click/click?p=2&t=url&s=1508333&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Fsamsung-galaxy-s26-256gb-zwart%2F9300000265030601%2F&name=Samsung%20Galaxy%20S26%20Plus%20-%20256GB%20-%20Black" },
          { name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F975462%2Fsamsung-galaxy-s26-plus-256gb-zwart-5g.html" }
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
          { name: "Bol.com", link: "https://partner.bol.com/click/click?p=2&t=url&s=1508333&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Fsamsung-galaxy-s26-256gb-black%2F9300000265051690%2F&name=Samsung%20Galaxy%20S26%20-%20256GB%20-%20Black" },
          { name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F975476%2Fsamsung-galaxy-s26-ultra-512gb-zwart-5g.html" }
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
          { name: "Bol.com", link: "https://partner.bol.com/click/click?p=2&t=url&s=1508333&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Fsamsung-galaxy-s26-ultra-256gb-black%2F9300000265051702%2F&name=Samsung%20Galaxy%20S26%20Ultra%20-%20256GB%20-%20Black" },
          { name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F975476%2Fsamsung-galaxy-s26-ultra-512gb-zwart-5g.html" }
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
          { name: "Bol.com", link: "https://partner.bol.com/click/click?p=2&t=url&s=1508333&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Fsamsung-galaxy-a57-5g-256gb-donkerblauw%2F9300000271900488%2F&name=Samsung%20Galaxy%20A57%205G%20-%20256GB%20-%20Donkerblauw" },
          { name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F976545%2Fsamsung-galaxy-a57-256gb-grijs-5g.html" }
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
          { name: "Bol.com", link: "https://partner.bol.com/click/click?p=2&t=url&s=1508333&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Fsamsung-galaxy-a56-5g-8gb-256gb-awesome-graphite%2F9300000225539117%2F&name=Samsung%20Galaxy%20A56%205G%20-%20256GB%20-%20Awesome%20Graphite%20-%20AI%20tools" },
          { name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F960968%2Fsamsung-galaxy-a56-128gb-zwart-5g.html" }
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
          { name: "Bol.com", link: "https://partner.bol.com/click/click?p=2&t=url&s=1508333&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Fsamsung-galaxy-a37-5g-128gb-awesome-lavender-1-jaar-extra-garantie%2F9300000265834600%2F&name=Samsung%20Galaxy%20A37%205G%20-%20128GB%20-%20Awesome%20Lavender%20%2B%201%20jaar%20extra%20garantie" },
          { name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F976536%2Fsamsung-galaxy-a37-256gb-zwart-5g.html" }
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
          { name: "Bol.com", link: "https://partner.bol.com/click/click?p=2&t=url&s=1508333&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Fsamsung-galaxy-a26-5g-128gb-black-1-jaar-extra-garantie%2F9300000233562433%2F&name=Samsung%20Galaxy%20A26%205G%20-%20128GB%20-%20Zwart%20-%20IP67%20waterbestendig" },
          { name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F960931%2Fsamsung-galaxy-a26-128gb-zwart-5g.html" }
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
          { name: "Bol.com", link: "https://partner.bol.com/click/click?p=2&t=url&s=1508333&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Fsmartphone-samsung-galaxy-a17-5g-6-7-128-gb-zwart-6-gb-ram%2F9300000237500868%2F&name=Samsung%20Galaxy%20A17%205G%20-%20128GB%20opslag%20-%2050MP%20camera%20-%20Zwart" },
          { name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F967620%2Fsamsung-galaxy-a17-128gb-zwart-5g.html" }
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
          { name: "Bol.com", link: "https://partner.bol.com/click/click?p=2&t=url&s=1508333&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Fsamsung-galaxy-z-fold7-256gb-jet-black%2F9300000236074232%2F&name=Samsung%20Galaxy%20Z%20Fold7%205G%20-%20256GB%20-%20JetBlack%20-%2012%20maanden%20garantie" },
          { name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F966261%2Fsamsung-galaxy-z-fold-7-512gb-blauw-5g.html" }
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
          { name: "Bol.com", link: "https://partner.bol.com/click/click?p=2&t=url&s=1508333&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Foneplus-15-5g-16gb-512gb-zwart-dual-sim%2F9300000243169165%2F&name=OnePlus%2015%20-%2016GB%2F512GB%20-%20Infinite%20Black" },
          { name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F970468%2Foneplus-15-512gb-zwart-5g.html" }
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
          { name: "Bol.com", link: "https://partner.bol.com/click/click?p=2&t=url&s=1508333&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Foneplus-13-256gb-12gb-black-eclipse%2F9300000220363404%2F&name=OnePlus%2013%20-%20256GB%20-%20Black%20Eclipse%20-%20IP68%20%26%20IP69%20-%20Triple%2050MP%20camera" },
          { name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F957541%2Foneplus-13-512gb-blauw-5g.html" }
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
          { name: "Bol.com", link: "https://partner.bol.com/click/click?p=2&t=url&s=1508333&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Foneplus-15r-12gb-512gb-charcoal-black%2F9300000252612783%2F&name=OnePlus%2015R%20-%2012GB%2F512GB%20-%20Charcoal%20Black" },
          { name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F973314%2Foneplus-15r-256gb-zwart-5g.html" }
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
          { name: "Bol.com", link: "https://partner.bol.com/click/click?p=2&t=url&s=1508333&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Foneplus-nord-5-256gb-8gb-marble-sands%2F9300000233834189%2F&name=OnePlus%20Nord%205%20-%20256GB%2F8GB%20-%20Marble%20Sands" },
          { name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F966129%2Foneplus-nord-5-512gb-blauw-5g.html" }
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
          { name: "Bol.com", link: "https://partner.bol.com/click/click?p=2&t=url&s=1508333&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Foneplus-nord-ce5-256gb-8gb-black-infinity%2F9300000233834183%2F&name=OnePlus%20Nord%20CE5%20-%20256GB%2F8GB%20-%20Black%20Infinity%20-%20120%20Hz%20AMOLED-scherm" },
          { name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F966132%2Foneplus-nord-ce-5-256gb-zwart-5g.html" }
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
          { name: "Bol.com", link: "https://partner.bol.com/click/click?p=2&t=url&s=1508333&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Foneplus-open-512gb-zwart%2F9300000169556063%2F&name=OnePlus%20Open%20Foldable%20telefoon%20-%20512GB%20-%20Zwart%20-%205G%20-%2048MP%20camera" }
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
          { name: "Bol.com", link: "https://partner.bol.com/click/click?p=2&t=url&s=1508333&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Foneplus-12-cph2581-europe-512gb-16gb-silky-black-eu%2F9300000171714141%2F&name=OnePlus%2012%20-%20512GB%20opslag%20-%2016GB%20RAM%20-%20Silky%20Black" }
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
          { name: "Bol.com", link: "https://partner.bol.com/click/click?p=2&t=url&s=1508333&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Foneplus-nord-4-256gb-obsidian-midnight%2F9300000183792422%2F&name=OnePlus%20Nord%204%20-%20256GB%20-%20Obsidian%20Midnight%20-%2050MP%20camera%20-%20120Hz%20OLED-scherm" }
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
          { name: "Bol.com", link: "https://partner.bol.com/click/click?p=2&t=url&s=1508333&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Foneplus-nord-ce4-lite-5g-8gb-256gb-mega-blauw%2F9300000181988617%2F&name=OnePlus%20Nord%20CE4%20Lite%205G%20-%20256GB%20opslag%20-%20Mega%20Blauw" }
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
          {
            name: "Bol.com",
            link: "https://partner.bol.com/click/click?p=2&t=url&s=1508333&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Fgoogle-pixel-10-pro-xl-17-3-cm-dual-sim-android-16-0-5g-16-gb-512-gb-5200-mah-zwart%2F9300000238713396%2F&name=Google%20Pixel%2010%20Pro%20XL%205G%20-%20512GB%20opslag%20-%2016GB%20RAM%20-%20Zwart"
          }
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
          {
            name: "Bol.com",
            link: "https://partner.bol.com/click/click?p=2&t=url&s=1508333&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Fgoogle-pixel-10-pro-5g-16gb-128gb-zwart-dual-sim%2F9300000238634856%2F&name=Google%20Pixel%2010%20Pro%20-%205G%2016GB%2F128GB%20-%20Obsidian%20-%20Dual%20SIM"
          },
          {
            name: "Coolblue",
            link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F969262%2Fgoogle-pixel-10-pro-256gb-zwart-5g.html"
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
          {
            name: "Bol.com",
            link: "https://partner.bol.com/click/click?p=2&t=url&s=1508333&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Fgoogle-pixel-10-5g-12gb-128gb-zwart-dual-sim%2F9300000238634854%2F&name=Google%20Pixel%2010%205G%20-%20128GB%20opslag%20-%2012GB%20RAM%20-%20Zwart"
          },
          {
            name: "Coolblue",
            link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F969260%2Fgoogle-pixel-10-256gb-zwart-5g.html"
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
          {
            name: "Bol.com",
            link: "https://partner.bol.com/click/click?p=2&t=url&s=1508333&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Fgoogle-pixel-9-pro-fold-256gb-zwart%2F9300000187345078%2F&name=Google%20Pixel%209%20Pro%20Fold%20-%20Nieuwe%20opvouwbare%20smartphone%20-%20256GB%20-%20Zwart"
          }
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
          {
            name: "Bol.com",
            link: "https://partner.bol.com/click/click?p=2&t=url&s=1508333&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Fgoogle-pixel-9-pro-xl-128gb-zwart%2F9300000187294767%2F&name=Google%20Pixel%209%20Pro%20XL%20-%20128GB%20-%20Zwart%20-%20Krachtige%20camera%20-%20Super%20Actua-scherm"
          }
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
          {
            name: "Bol.com",
            link: "https://partner.bol.com/click/click?p=2&t=url&s=1508333&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Fgoogle-pixel-9-pro-256gb-zwart%2F9300000187294755%2F&name=Google%20Pixel%209%20Pro%20-%20256GB%20opslag%20-%20Zwart%20-%2012%20GB%20RAM%20-%20Actua-scherm"
          },
          {
            name: "Coolblue",
            link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F956831%2Fgoogle-pixel-9-pro-256gb-zwart-5g.html"
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
          {
            name: "Bol.com",
            link: "https://partner.bol.com/click/click?p=2&t=url&s=1508333&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Fgoogle-pixel-9-128gb-zwart%2F9300000187251827%2F&name=Google%20Pixel%209%20-%20Telefoon%20-%20128GB%20-%2050MP%20camera%20-%206.3%20inch%20Actua-display"
          }
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
          {
            name: "Bol.com",
            link: "https://partner.bol.com/click/click?p=2&t=url&s=1508333&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Fgoogle-pixel-9a-dual-sim-128gb-zwart%2F9300000228637472%2F&name=Google%20Pixel%209a%20-%20128GB%20-%20Zwart"
          },
          {
            name: "Coolblue",
            link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F964141%2Fgoogle-pixel-9a-128gb-zwart-5g.html"
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
          {
            name: "Bol.com",
            link: "https://partner.bol.com/click/click?p=2&t=url&s=1508333&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Fgoogle-pixel-8-pro-12-128gb-black%2F9300000163877263%2F&name=Google%20Pixel%208%20Pro%20-%2012GB%2F128GB%20-%20Black%20-%2050MP%20camera%20-%206.7%20inch%20OLED"
          }
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
          {
            name: "Bol.com",
            link: "https://partner.bol.com/click/click?p=2&t=url&s=1508333&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Fgoogle-pixel-8a-8-128gb-zwart%2F9300000179545228%2F&name=Google%20Pixel%208a%20-%208GB%20RAM%20-%20128GB%20opslag%20-%20Zwart"
          }
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
          { name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F970480%2Foppo-find-x9-pro-512gb-grijs-5g.html" }
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
          { name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F975002%2Foppo-reno15-pro-512gb-bruin-5g.html" },
          { name: "Bol.com", link: "https://partner.bol.com/click/click?p=2&t=url&s=1508333&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Foppo-reno15-pro-5g-12-512gb-dusk-black%2F9300000252393152%2F&name=OPPO%20Reno15%20Pro%205G%2012%2B512GB%20Dusk%20Black" }
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
          { name: "Bol.com", link: "https://partner.bol.com/click/click?p=2&t=url&s=1508333&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Foppo-reno14-f-5g-8-256gb-luminous-green-extra-garantie%2F9300000235379854%2F&name=OPPO%20Reno14%20F%205G%208%2B256GB%20Luminous%20Green%20-%20Extra%20Garantie" }
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
          { name: "Bol.com", link: "https://partner.bol.com/click/click?p=2&t=url&s=1508333&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Foppo-a5-pro-5g-8-256gb-black-brown%2F9300000228516775%2F&name=OPPO%20A5%20Pro%205G%20-%20256GB%20-%20Black%20Brown%20-%20Water-%20en%20stofbestendig%20-%205800%20mAh" }
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
          { name: "Bol.com", link: "https://partner.bol.com/click/click?p=2&t=url&s=1508333&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Fa5-5g-4-128gb-black-green-extra-garantie%2F9300000233109672%2F&name=OPPO%20A5%205G%20-%20128GB%20opslag%20-%20Black%20Green%20-%20Waterdicht%20-%206000%20mAh%20batterij" }
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
          { name: "Bol.com", link: "https://partner.bol.com/click/click?p=2&t=url&s=1508333&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Foppo-13-pro-5g-17-4-cm-dual-sim-android-15-usb-type-c-12-gb-512-gb-5800-mah-grafiet-grijs-paars%2F9300000226494304%2F&name=OPPO%20Reno13%20Pro%205G%20-%2012GB%20RAM%20-%20512GB%20opslag%20-%20Grafiet%20Grijs" }
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
          { name: "Bol.com", link: "https://partner.bol.com/click/click?p=2&t=url&s=1508333&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Foppo-a80-5g-16-9-cm-8-gb-256-gb-50-mp-android-14-paars%2F9300000185745967%2F&name=OPPO%20A80%205G%20-%20256GB%20opslag%20-%208GB%20RAM%20-%2050MP%20camera%20-%20Paars" }
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
          { name: "Bol.com", link: "https://partner.bol.com/click/click?p=2&t=url&s=1508333&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Foppo-a98-5g-256-gb-blauw%2F9300000152276508%2F&name=OPPO%20A98%205G%20-%20256GB%20-%20Blauw" }
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
          { name: "Coolblue", link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F960614%2Foppo-reno12-256gb-zwart-5g.html" },
          { name: "Bol.com", link: "https://partner.bol.com/click/click?p=2&t=url&s=1508333&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Foppo-reno-12-5g-dual-sim-12-256gb-black-brown%2F9300000183436436%2F&name=OPPO%20Reno%2012%205G%20-%20256GB%20-%20AMOLED%20120Hz%20-%2050MP%20camera%20-%20Black%20Brown" }
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
    title: "Top 10 Beste PlayStation Producten van 2025",
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
    title: "Top 10 Beste Xbox Producten van 2025",
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
    title: "Top 10 Beste Nintendo Producten van 2025",
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
    title: "Top 10 Beste Laptops van 2025",
    description: "De populairste laptops gerangschikt op prestaties en gebruikerservaringen",
    products: [
      {
        name: "Apple MacBook Air",
        description: "Dunne en lichte Apple-laptop met krachtige Apple Silicon-chip, lange batterijduur en premium build quality.",
        rating: 4.9,
        image: "",
        pros: ["Apple Silicon", "Lange batterijduur", "Dun en licht"],
        cons: ["Beperkte poorten", "Prijzig"],
        stores: [{ name: "Coolblue", link: "#" }]
      },
      {
        name: "Samsung Galaxy Book4",
        description: "Veelzijdige Samsung-laptop met helder scherm, solide prestaties en naadloze integratie met Galaxy-apparaten.",
        rating: 4.7,
        image: "",
        pros: ["Galaxy-ecosysteem", "Helder scherm", "Goede prestaties"],
        cons: ["Windows bloatware"],
        stores: [{ name: "Coolblue", link: "#" }, { name: "Bol.com", link: "#" }]
      },
      {
        name: "Lenovo IdeaPad Slim 3 15IRH10",
        description: "Betaalbare 15-inch laptop voor dagelijks gebruik, studie en licht productief werk.",
        rating: 4.5,
        image: "",
        pros: ["Betaalbaar", "15-inch scherm", "IdeaPad betrouwbaarheid"],
        cons: ["Plastic behuizing", "Basis display"],
        stores: [{ name: "Bol.com", link: "#" }]
      },
      {
        name: "MSI Modern 15",
        description: "Stijlvolle MSI-laptop voor werk en studie met lichtgewicht design en solide dagelijkse prestaties.",
        rating: 4.5,
        image: "",
        pros: ["Lichtgewicht", "Modern design", "MSI kwaliteit"],
        cons: ["Geen dedicated GPU"],
        stores: [{ name: "Bol.com", link: "#" }]
      },
      {
        name: "ASUS Vivobook 15 X1504VA",
        description: "Populaire allround 15-inch laptop met Intel-processor, compact design en goede prijs-kwaliteit.",
        rating: 4.6,
        image: "",
        pros: ["Allround laptop", "Compact", "Goede prijs"],
        cons: ["Basis speakers", "Geen premium afwerking"],
        stores: [{ name: "Coolblue", link: "#" }, { name: "Bol.com", link: "#" }]
      },
      {
        name: "Lenovo V15 G4 Ryzen 5",
        description: "Zakelijke budget-laptop met AMD Ryzen 5-processor voor efficiënt werken en studeren.",
        rating: 4.5,
        image: "",
        pros: ["Ryzen 5", "Betaalbaar", "Zakelijk design"],
        cons: ["Dikker formaat", "Basis scherm"],
        stores: [{ name: "Bol.com", link: "#" }]
      },
      {
        name: "HP 15-fd0700nd",
        description: "HP 15-inch laptop voor dagelijks gebruik met betrouwbare prestaties en vertrouwd HP-design.",
        rating: 4.4,
        image: "",
        pros: ["HP betrouwbaarheid", "15-inch", "Betaalbaar"],
        cons: ["Plastic chassis", "Basis features"],
        stores: [{ name: "Bol.com", link: "#" }]
      },
      {
        name: "Lenovo IdeaPad Slim 3 14M868",
        description: "Compacte 14-inch IdeaPad voor onderweg met slank design en solide prestaties voor studie en werk.",
        rating: 4.5,
        image: "",
        pros: ["Compact 14 inch", "Slank design", "Draagbaar"],
        cons: ["Kleiner scherm", "Beperkte poorten"],
        stores: [{ name: "Bol.com", link: "#" }]
      },
      {
        name: "ASUS TUF Gaming A16 RTX 4050",
        description: "Krachtige gaming laptop met AMD-processor en NVIDIA RTX 4050 voor moderne games op medium-hoge instellingen.",
        rating: 4.7,
        image: "",
        pros: ["RTX 4050", "Gaming prestaties", "TUF robuustheid"],
        cons: ["Korte batterijduur", "Zwaar"],
        stores: [{ name: "Bol.com", link: "#" }]
      },
      {
        name: "ACEMAGIC LX15Pro",
        description: "Betaalbare laptop met solide specificaties voor dagelijks gebruik, studie en lichte multitasking.",
        rating: 4.3,
        image: "",
        pros: ["Betaalbaar", "Solide specs", "Allround"],
        cons: ["Minder bekend merk", "Basis afwerking"],
        stores: [{ name: "Bol.com", link: "#" }]
      }
    ]
  },
  desktops: {
    title: "Top 10 Beste Desktop PC's van 2025",
    description: "De populairste desktop computers gerangschikt op prestaties en gebruikerservaringen",
    products: [
      {
        name: "Lenovo LOQ Tower 17IRR9",
        description: "Lenovo gaming desktop uit de LOQ-serie met solide prestaties voor moderne games en dagelijks gebruik.",
        rating: 4.7,
        image: "",
        pros: ["Lenovo LOQ-serie", "Gaming prestaties", "Upgradebaar"],
        cons: ["Basis RGB", "Groot formaat"],
        stores: [{ name: "Bol.com", link: "#" }]
      },
      {
        name: "PCSpecialist Impact 99 RTX 3050",
        description: "Custom gaming PC van PCSpecialist met NVIDIA RTX 3050 — ideaal instapmodel voor 1080p-gaming.",
        rating: 4.6,
        image: "",
        pros: ["RTX 3050", "Custom build", "PCSpecialist kwaliteit"],
        cons: ["Instap GPU", "Beperkt voor zware games"],
        stores: [{ name: "Coolblue", link: "#" }]
      },
      {
        name: "Intel Gaming PC RTX 3050",
        description: "Intel-gebaseerde gaming desktop met RTX 3050 voor betaalbaar gamen en alledaags gebruik.",
        rating: 4.5,
        image: "",
        pros: ["RTX 3050", "Intel processor", "Betaalbaar"],
        cons: ["Instap specificaties", "Basis behuizing"],
        stores: [{ name: "Bol.com", link: "#" }]
      },
      {
        name: "VIST PC Gaming Ryzen 7 5700X RTX 5060",
        description: "Krachtige gaming PC met AMD Ryzen 7 5700X en RTX 5060 voor vloeiende gameplay op hoge instellingen.",
        rating: 4.8,
        image: "",
        pros: ["Ryzen 7 5700X", "RTX 5060", "Sterke prijs-prestatie"],
        cons: ["Minder bekend merk"],
        stores: [{ name: "Bol.com", link: "#" }]
      },
      {
        name: "Sedatech Silent Gaming PC Ryzen 5 RTX 5060",
        description: "Stille gaming desktop met Ryzen 5 en RTX 5060 — geschikt voor gamen zonder storend geluid.",
        rating: 4.7,
        image: "",
        pros: ["Stil design", "RTX 5060", "Ryzen 5"],
        cons: ["Compacte koeling", "Minder upgrade-ruimte"],
        stores: [{ name: "Bol.com", link: "#" }]
      },
      {
        name: "HYPER BYTE Essential Gaming PC",
        description: "Betaalbare instap gaming PC voor beginnende gamers en lichte tot middelzware titels.",
        rating: 4.4,
        image: "",
        pros: ["Betaalbaar", "Instap gaming", "Plug-and-play"],
        cons: ["Basis specificaties", "Beperkte upgrade-opties"],
        stores: [{ name: "Bol.com", link: "#" }]
      },
      {
        name: "HP Victus Gaming Desktop",
        description: "HP Victus gaming desktop met betrouwbare HP-kwaliteit en solide prestaties voor moderne games.",
        rating: 4.7,
        image: "",
        pros: ["HP betrouwbaarheid", "Victus gaming", "Goede airflow"],
        cons: ["Basis RGB", "Prijzig voor specs"],
        stores: [{ name: "Coolblue", link: "#" }]
      },
      {
        name: "Lenovo Legion Tower 5",
        description: "Lenovo Legion gaming tower met krachtige hardware, goede koeling en premium Legion-design.",
        rating: 4.8,
        image: "",
        pros: ["Legion premium", "Goede koeling", "Upgradebaar"],
        cons: ["Groot formaat", "Duur"],
        stores: [{ name: "Coolblue", link: "#" }]
      },
      {
        name: "MSI MAG Infinite S3",
        description: "MSI gaming desktop uit de MAG-serie met compact design en solide gamingprestaties.",
        rating: 4.7,
        image: "",
        pros: ["MSI MAG-serie", "Compact design", "Gaming prestaties"],
        cons: ["Beperkte upgrade-ruimte"],
        stores: [{ name: "Coolblue", link: "#" }]
      },
      {
        name: "Acer Nitro Gaming PC",
        description: "Acer Nitro gaming desktop voor betaalbaar gamen met betrouwbare prestaties en Nitro-gamingdesign.",
        rating: 4.6,
        image: "",
        pros: ["Acer Nitro-serie", "Betaalbaar", "Gaming design"],
        cons: ["Basis koeling", "Instap-middenklasse GPU"],
        stores: [{ name: "Bol.com", link: "#" }]
      }
    ]
  },
  components: {
    title: "Top 10 Beste PC Componenten van 2025",
    description: "De populairste PC onderdelen gerangschikt op prestaties en prijs-kwaliteit verhouding",
    products: [
      {
        name: "AMD Ryzen 7 7800X3D",
        description: "De populairste gaming-CPU met 3D V-Cache-technologie voor topprestaties in games en solide allround performance.",
        rating: 4.9,
        image: "",
        pros: ["3D V-Cache", "Top gaming CPU", "AM5 platform"],
        cons: ["Geen integrated graphics", "Koeler apart nodig"],
        stores: [{ name: "Coolblue", link: "#" }, { name: "Bol.com", link: "#" }]
      },
      {
        name: "ASUS Prime GeForce RTX 5070 OC",
        description: "ASUS Prime videokaart met RTX 5070 en factory overclock voor krachtige 1440p-gaming en ray tracing.",
        rating: 4.8,
        image: "",
        pros: ["RTX 5070", "Factory OC", "ASUS Prime kwaliteit"],
        cons: ["Prijzig", "Groot formaat"],
        stores: [{ name: "Coolblue", link: "#" }, { name: "Bol.com", link: "#" }]
      },
      {
        name: "MSI GeForce RTX 5070 Ventus 2X OC",
        description: "MSI Ventus RTX 5070 met compact dual-fan design en solide prestaties voor moderne games.",
        rating: 4.8,
        image: "",
        pros: ["RTX 5070", "Compact dual-fan", "MSI betrouwbaarheid"],
        cons: ["Basis koeling vs premium modellen"],
        stores: [{ name: "Coolblue", link: "#" }, { name: "Bol.com", link: "#" }]
      },
      {
        name: "Sapphire Pulse Radeon RX 9060 XT",
        description: "AMD Radeon RX 9060 XT van Sapphire Pulse — sterke prijs-prestatie GPU voor 1080p en 1440p gaming.",
        rating: 4.6,
        image: "",
        pros: ["RX 9060 XT", "Goede prijs-prestatie", "Compact design"],
        cons: ["Minder ray tracing dan NVIDIA"],
        stores: [{ name: "Bol.com", link: "#" }]
      },
      {
        name: "Gigabyte GeForce RTX 5060 Windforce",
        description: "Instap-middenklasse NVIDIA RTX 5060 van Gigabyte voor betaalbaar gamen op 1080p met DLSS-ondersteuning.",
        rating: 4.6,
        image: "",
        pros: ["RTX 5060", "DLSS", "Betaalbaar"],
        cons: ["Beperkt voor 4K gaming"],
        stores: [{ name: "Bol.com", link: "#" }]
      },
      {
        name: "Acer Nitro Arc B580 OC",
        description: "Intel Arc B580 videokaart met factory overclock — aantrekkelijke budget GPU voor 1080p gaming.",
        rating: 4.5,
        image: "",
        pros: ["Intel Arc B580", "Factory OC", "Betaalbaar"],
        cons: ["Driver-maturiteit", "Minder bekend"],
        stores: [{ name: "Bol.com", link: "#" }]
      },
      {
        name: "RTX 5050 MSI Gaming OC",
        description: "MSI Gaming RTX 5050 — instap NVIDIA GPU voor lichte gaming en alledaags gebruik tegen scherpe prijs.",
        rating: 4.4,
        image: "",
        pros: ["RTX 5050", "Instap gaming", "MSI Gaming"],
        cons: ["Beperkte prestaties", "Niet voor zware titels"],
        stores: [{ name: "Bol.com", link: "#" }]
      },
      {
        name: "AMD Ryzen 7 9700X",
        description: "Krachtige AMD Zen 5-processor met 8 cores voor gaming, streaming en productief multitasken op AM5.",
        rating: 4.8,
        image: "",
        pros: ["Zen 5 architectuur", "8 cores", "Efficiënt"],
        cons: ["Prijzig", "Koeler apart nodig"],
        stores: [{ name: "Coolblue", link: "#" }]
      },
      {
        name: "Intel Core Ultra 7 265K",
        description: "Intel Core Ultra 7 desktopprocessor met NPU voor AI-taken, solide gaming en productiviteit.",
        rating: 4.7,
        image: "",
        pros: ["Core Ultra serie", "NPU voor AI", "Sterke single-core"],
        cons: ["Hoog stroomverbruik", "Duur platform"],
        stores: [{ name: "Coolblue", link: "#" }]
      },
      {
        name: "Corsair Vengeance DDR5 32GB",
        description: "Populair 32GB DDR5-geheugenkit van Corsair Vengeance voor snelle, stabiele prestaties in gaming en werk.",
        rating: 4.8,
        image: "",
        pros: ["32GB DDR5", "Corsair betrouwbaarheid", "Breed compatibel"],
        cons: ["Geen RGB op alle varianten"],
        stores: [{ name: "Coolblue", link: "#" }, { name: "Bol.com", link: "#" }]
      }
    ]
  },
  gaming_monitors: {
    title: "Top 10 Beste Gaming Monitoren van 2025",
    description: "De populairste gaming monitoren gerangschikt op prestaties en gebruikerservaringen",
    products: [
      {
        name: "Samsung Odyssey OLED G8",
        description: "Best overall premium OLED gaming monitor met diep zwart, hoge refresh rate en Samsung's Odyssey-kwaliteit voor serieuze gamers.",
        rating: 4.9,
        image: "",
        pros: ["OLED paneel", "Premium gaming", "Zeer populair"],
        cons: ["Prijzig", "Burn-in risico"],
        stores: []
      },
      {
        name: "LG UltraGear 27GR95QE-B",
        description: "Een van de meest verkochte OLED gamingmonitoren op bol.com.",
        rating: 4.9,
        image: "",
        pros: ["OLED paneel", "Premium gaming", "Zeer populair"],
        cons: ["27 inch kan klein zijn voor sommigen"],
        stores: []
      },
      {
        name: "Alienware AW2725DF",
        description: "QD‑OLED esportsfavoriet met extreem hoge refreshrate.",
        rating: 4.8,
        image: "",
        pros: ["QD-OLED paneel", "Esports-niveau", "Hoge refresh rate"],
        cons: ["Duur", "Beperkte HDR"],
        stores: []
      },
      {
        name: "MSI MPG 271QRX",
        description: "Premium QD-OLED gaming monitor met scherpe beelden, snelle response en MSI Gaming-kwaliteit.",
        rating: 4.8,
        image: "",
        pros: ["QD-OLED paneel", "Premium gaming", "Snelle response"],
        cons: ["Prijzig"],
        stores: [{ name: "Bol.com", link: "#" }, { name: "Coolblue", link: "#" }]
      },
      {
        name: "ASUS ROG Strix OLED",
        description: "ROG gaming monitor met OLED-paneel voor diepe contrasten en vloeiende gameplay in premium ASUS-kwaliteit.",
        rating: 4.8,
        image: "",
        pros: ["OLED paneel", "ROG gaming", "Diep contrast"],
        cons: ["Duur"],
        stores: [{ name: "Bol.com", link: "#" }, { name: "Coolblue", link: "#" }]
      },
      {
        name: "Samsung Odyssey OLED G8 G81SF",
        description: "Samsung Odyssey OLED gaming monitor met curved design en premium beeldkwaliteit voor meeslepend gamen.",
        rating: 4.7,
        image: "",
        pros: ["OLED curved", "Odyssey-serie", "Premium beeld"],
        cons: ["Curved niet voor iedereen"],
        stores: [{ name: "Coolblue", link: "#" }]
      },
      {
        name: "AOC OLED Q27G41ZDF",
        description: "Betaalbare OLED gaming monitor met 27-inch QHD-scherm en snelle refresh rate voor competitief spelen.",
        rating: 4.6,
        image: "",
        pros: ["OLED paneel", "QHD 27 inch", "Goede prijs"],
        cons: ["Minder premium afwerking"],
        stores: [{ name: "Bol.com", link: "#" }]
      },
      {
        name: "LG 27GX790A-B",
        description: "LG UltraGear gaming monitor met OLED-technologie en hoge refresh rate voor vloeiende esports-prestaties.",
        rating: 4.7,
        image: "",
        pros: ["OLED paneel", "UltraGear", "Hoge refresh rate"],
        cons: ["Prijzig"],
        stores: [{ name: "Bol.com", link: "#" }]
      },
      {
        name: "MSI MAG QD-OLED",
        description: "MSI MAG-serie QD-OLED monitor met uitstekende kleuren, snelle response en gaming-georiënteerde features.",
        rating: 4.6,
        image: "",
        pros: ["QD-OLED paneel", "MSI MAG-serie", "Scherpe kleuren"],
        cons: ["Basis standaard"],
        stores: [{ name: "Bol.com", link: "#" }]
      },
      {
        name: "LG UltraGear OLED-serie (diverse modellen)",
        description: "Populaire LG UltraGear OLED-lijn met meerdere formaten en specificaties — breed verkrijgbaar voor elke gamer.",
        rating: 4.7,
        image: "",
        pros: ["OLED paneel", "Diverse modellen", "Breed verkrijgbaar"],
        cons: ["Specificaties variëren per model"],
        stores: [{ name: "Bol.com", link: "#" }, { name: "Coolblue", link: "#" }]
      }
    ]
  },
  office_monitors: {
    title: "Top 10 Beste Office Monitoren van 2025",
    description: "De populairste monitoren voor kantoor en thuiswerken gerangschikt op beeldkwaliteit en comfort",
    products: [
      {
        name: "Dell Ultrasharp U4924DW",
        description: "Best overall ultrawide kantoormonitor met 49-inch curved QHD-scherm, USB-C hub en KVM-switch voor productief multitasken.",
        rating: 4.9,
        image: "",
        pros: ["49-inch ultrawide", "USB-C hub", "KVM-switch"],
        cons: ["Groot bureau nodig", "Prijzig"],
        stores: []
      },
      {
        name: "Dell UltraSharp U2424H",
        description: "Een van de populairste kantoorseries dankzij ergonomie, betrouwbaarheid en beeldkwaliteit.",
        rating: 4.8,
        image: "",
        pros: ["Ergonomisch design", "Betrouwbaar", "Heldere beeldkwaliteit"],
        cons: ["1080p resolutie"],
        stores: []
      },
      {
        name: "LG 32UN880K-B Ergo",
        description: "Populaire ergonomische 4K-monitor met monitorarm en USB‑C.",
        rating: 4.8,
        image: "",
        pros: ["Ingebouwde monitorarm", "4K resolutie", "USB-C"],
        cons: ["32 inch kan groot zijn", "Arm niet verstelbaar voor iedereen"],
        stores: []
      },
      {
        name: "Samsung ViewFinity S6",
        description: "Veelzijdige 4K kantoor monitor met USB-C, ergonomische standaard en strak Samsung-design voor dagelijks werk.",
        rating: 4.7,
        image: "",
        pros: ["4K IPS", "USB-C", "Ergonomische stand"],
        cons: ["Basis HDR"],
        stores: [{ name: "Bol.com", link: "#" }, { name: "Coolblue", link: "#" }]
      },
      {
        name: "BenQ GW2790",
        description: "Betaalbare 27-inch kantoor monitor met Eye-Care-technologie en flicker-free display voor lange werkdagen.",
        rating: 4.6,
        image: "",
        pros: ["Eye-Care technologie", "Flicker-free", "Betaalbaar"],
        cons: ["1080p", "Basis features"],
        stores: [{ name: "Bol.com", link: "#" }]
      },
      {
        name: "Philips 27B2G5500/00",
        description: "27-inch QHD monitor met USB-C, ingebouwde webcam en microfoon — ideaal voor thuiswerken en videovergaderingen.",
        rating: 4.6,
        image: "",
        pros: ["QHD resolutie", "Ingebouwde webcam", "USB-C"],
        cons: ["Webcam kwaliteit beperkt"],
        stores: [{ name: "Bol.com", link: "#" }]
      },
      {
        name: "Dell UltraSharp U2724D",
        description: "27-inch QHD kantoor monitor uit de UltraSharp-serie met IPS Black-technologie voor dieper zwart en scherp contrast.",
        rating: 4.7,
        image: "",
        pros: ["IPS Black panel", "QHD", "USB-C hub"],
        cons: ["Geen 4K"],
        stores: [{ name: "Bol.com", link: "#" }]
      },
      {
        name: "Dell UltraSharp U3423WE",
        description: "34-inch ultrawide WQHD-monitor met USB-C hub en IPS Black-panel voor efficiënt multitasken op kantoor.",
        rating: 4.7,
        image: "",
        pros: ["Ultrawide WQHD", "USB-C hub", "IPS Black"],
        cons: ["Groot formaat", "Prijzig"],
        stores: [{ name: "Bol.com", link: "#" }]
      },
      {
        name: "LG 32QP880-B Ergo",
        description: "32-inch QHD monitor met ergonomische monitorarm, USB-C en hoogte-/kantelverstelling voor comfortabel werken.",
        rating: 4.6,
        image: "",
        pros: ["Ergonomische arm", "QHD 32 inch", "USB-C"],
        cons: ["Arm past niet op elk bureau"],
        stores: [{ name: "Bol.com", link: "#" }]
      },
      {
        name: "Samsung S70D 4K",
        description: "32-inch 4K Smart Monitor met ingebouwde streaming-apps en USB-C — monitor en entertainment in één.",
        rating: 4.7,
        image: "",
        pros: ["4K resolutie", "Smart TV-functies", "USB-C"],
        cons: ["Smart functies niet voor iedereen nodig"],
        stores: [{ name: "Bol.com", link: "#" }, { name: "Coolblue", link: "#" }]
      }
    ]
  },
  controllers: {
    title: "Top 10 Beste Controllers van 2025",
    description: "De populairste gamecontrollers voor PC, PlayStation, Xbox en Nintendo Switch",
    products: [
      {
        name: "Microsoft Xbox Wireless Controller",
        description: "De standaard Xbox-controller met Bluetooth en Share-knop. Werkt naadloos op Xbox Series X|S, Xbox One en PC.",
        rating: 4.8,
        image: "",
        pros: ["Bluetooth voor PC", "Ergonomisch design", "Breed beschikbaar"],
        cons: ["Geen oplaadbare batterij standaard"],
        stores: [{ name: "Coolblue", link: "#" }, { name: "Bol.com", link: "#" }]
      },
      {
        name: "DualSense Wireless Controller Sony",
        description: "Officiële PlayStation 5-controller met haptische feedback en adaptive triggers voor meeslepend gamen.",
        rating: 4.8,
        image: "",
        pros: ["Haptische feedback", "Adaptive triggers", "Ingebouwde microfoon"],
        cons: ["Batterijduur beperkt"],
        stores: [{ name: "Coolblue", link: "#" }, { name: "Bol.com", link: "#" }]
      },
      {
        name: "Nintendo Switch Pro Controller",
        description: "Premium controller voor de Nintendo Switch met HD-rumble, motion controls en lange batterijduur.",
        rating: 4.7,
        image: "",
        pros: ["HD-rumble", "40 uur batterij", "Comfortabel voor lange sessies"],
        cons: ["Geen koptelefoonaansluiting"],
        stores: [{ name: "Bol.com", link: "#" }]
      },
      {
        name: "Turtle Beach Stealth Pivot Controller",
        description: "Modulaire Xbox-controller met draaibare handgrepen en aanpasbare knoppen voor extra comfort.",
        rating: 4.5,
        image: "",
        pros: ["Draaibare handgrepen", "Aanpasbare knoppen", "Xbox en PC"],
        cons: ["Groter formaat"],
        stores: [{ name: "Coolblue", link: "#" }]
      },
      {
        name: "Turtle Beach Rematch Core Xbox Controller",
        description: "Betaalbare wired Xbox-controller met remappable knoppen en robuuste bouwkwaliteit.",
        rating: 4.4,
        image: "",
        pros: ["Remappable knoppen", "Betaalbaar", "Betrouwbaar wired"],
        cons: ["Geen draadloos"],
        stores: [{ name: "Bol.com", link: "#" }]
      },
      {
        name: "Xbox Elite Wireless Controller Series 2",
        description: "Premium Xbox-controller met instelbare stickspanning, extra paddles en oplaadbare batterij.",
        rating: 4.7,
        image: "",
        pros: ["Instelbare sticks", "Extra paddles", "Oplaadbare batterij"],
        cons: ["Hoge prijs"],
        stores: [{ name: "Coolblue", link: "#" }]
      },
      {
        name: "PowerA Enhanced Xbox Controller",
        description: "Officieel gelicenseerde Xbox-controller met extra programmabare knoppen en mappable profielen.",
        rating: 4.3,
        image: "",
        pros: ["Programmabare knoppen", "Officieel gelicenseerd", "Goede prijs"],
        cons: ["AA-batterijen nodig"],
        stores: [{ name: "Bol.com", link: "#" }]
      },
      {
        name: "PDP Afterglow Switch Controller",
        description: "Officieel gelicenseerde Switch-controller met RGB-verlichting en transparante behuizing.",
        rating: 4.2,
        image: "",
        pros: ["RGB-verlichting", "Officieel gelicenseerd", "Betaalbaar"],
        cons: ["Geen HD-rumble"],
        stores: [{ name: "Bol.com", link: "#" }]
      },
      {
        name: "Trust GXT gaming controller",
        description: "Veelzijdige wired gaming-controller compatibel met PC, PlayStation en Nintendo Switch.",
        rating: 4.1,
        image: "",
        pros: ["Multi-platform", "Betaalbaar", "Plug-and-play"],
        cons: ["Geen draadloos"],
        stores: [{ name: "Bol.com", link: "#" }]
      },
      {
        name: "Nacon Revolution 5 Pro",
        description: "Premium PS5/PC-controller met Hall-effect sticks, draadloos en bedraad, plus aanpasbare gewichten.",
        rating: 4.6,
        image: "",
        pros: ["Hall-effect sticks", "Draadloos + bedraad", "Aanpasbare gewichten"],
        cons: ["Duur"],
        stores: [{ name: "Coolblue", link: "#" }]
      }
    ]
  },
  headsets: {
    title: "Top 10 Beste Koptelefoons van 2025",
    description: "Van noise-cancelling tot gaming — de populairste draadloze koptelefoons",
    products: [
      {
        name: "Sony WH-1000XM5 Wireless Headphones",
        description: "Premium noise-cancelling koptelefoon met brancheleidende ANC, heldere call-kwaliteit en tot 30 uur batterij.",
        rating: 4.9,
        image: "",
        pros: ["Beste noise cancelling", "Lichtgewicht", "Multipoint Bluetooth"],
        cons: ["Duur"],
        stores: [{ name: "Coolblue", link: "#" }]
      },
      {
        name: "Sennheiser Momentum 4 Wireless Headphones",
        description: "Luxe draadloze koptelefoon met rijke audiokwaliteit, adaptieve ANC en maar liefst 60 uur batterijduur.",
        rating: 4.8,
        image: "",
        pros: ["60 uur batterij", "Uitstekende audiokwaliteit", "Adaptieve ANC"],
        cons: ["Groot formaat"],
        stores: [{ name: "Coolblue", link: "#" }]
      },
      {
        name: "Bose QuietComfort Ultra",
        description: "Topklasse Bose-koptelefoon met immersive audio, krachtige noise cancelling en premium comfort.",
        rating: 4.8,
        image: "",
        pros: ["Immersive audio", "Krachtige ANC", "Zachte oorkussens"],
        cons: ["Hoge prijs"],
        stores: [{ name: "Coolblue", link: "#" }]
      },
      {
        name: "JBL Tune 770NC",
        description: "Betaalbare over-ear koptelefoon met actieve noise cancelling en JBL Pure Bass-geluid.",
        rating: 4.5,
        image: "",
        pros: ["Actieve noise cancelling", "JBL Pure Bass", "Goede prijs"],
        cons: ["Minder premium afwerking"],
        stores: [{ name: "Coolblue", link: "#" }, { name: "Bol.com", link: "#" }]
      },
      {
        name: "Sony WH-CH720N",
        description: "Instapmodel van Sony met noise cancelling, lichtgewicht design en lange batterijduur voor dagelijks gebruik.",
        rating: 4.4,
        image: "",
        pros: ["Lichtgewicht", "Noise cancelling", "Betaalbaar"],
        cons: ["Minder premium geluid dan XM5"],
        stores: [{ name: "Coolblue", link: "#" }, { name: "Bol.com", link: "#" }]
      },
      {
        name: "JBL Live 770NC",
        description: "Draadloze over-ear koptelefoon met adaptieve noise cancelling en JBL Signature Sound.",
        rating: 4.5,
        image: "",
        pros: ["Adaptieve ANC", "JBL Signature Sound", "Comfortabel"],
        cons: ["App vereist voor instellingen"],
        stores: [{ name: "Coolblue", link: "#" }]
      },
      {
        name: "Apple AirPods Max",
        description: "Premium Apple-koptelefoon met computational audio, spatial audio en naadloze integratie met Apple-apparaten.",
        rating: 4.7,
        image: "",
        pros: ["Spatial audio", "Apple-ecosysteem", "Premium bouwkwaliteit"],
        cons: ["Zwaar", "Duur"],
        stores: [{ name: "Coolblue", link: "#" }]
      },
      {
        name: "SteelSeries Arctis Nova 7",
        description: "Draadloze gaming headset met 2.4GHz + Bluetooth, lange batterijduur en heldere microfoon.",
        rating: 4.8,
        image: "",
        pros: ["2.4GHz + Bluetooth", "30 uur batterij", "Comfortabel"],
        cons: ["Prijzig"],
        stores: [{ name: "Coolblue", link: "#" }]
      },
      {
        name: "HyperX Cloud III Wireless",
        description: "Lichtgewicht draadloze gaming headset met DTS Headphone:X spatial audio en verwijderbare microfoon.",
        rating: 4.7,
        image: "",
        pros: ["Lichtgewicht", "Goede microfoon", "Multi-platform"],
        cons: ["Geen actieve noise cancelling"],
        stores: [{ name: "Coolblue", link: "#" }, { name: "Bol.com", link: "#" }]
      },
      {
        name: "Logitech G Pro X 2 Lightspeed",
        description: "Esports gaming headset met PRO-G GRAPHENE-drivers, Lightspeed draadloos en draaibare microfoon.",
        rating: 4.8,
        image: "",
        pros: ["PRO-G GRAPHENE drivers", "Lightspeed draadloos", "Esports-kwaliteit"],
        cons: ["Duur"],
        stores: [{ name: "Coolblue", link: "#" }]
      }
    ]
  },
  keyboards: {
    title: "Top 10 Beste Toetsenborden van 2025",
    description: "Van productiviteitstoetsenborden tot mechanische gaming boards — de populairste keuzes voor werk en gamen",
    products: [
      {
        name: "Logitech MX Mechanical Wireless Keyboard",
        description: "Premium draadloos mechanisch toetsenbord met tactile switches, multi-device Bluetooth en backlit toetsen voor productief werken.",
        rating: 4.8,
        image: "",
        pros: ["Mechanische switches", "Multi-device", "Draadloos"],
        cons: ["Prijzig", "Geen gaming RGB"],
        stores: [{ name: "Coolblue", link: "#" }, { name: "Bol.com", link: "#" }]
      },
      {
        name: "Logitech G915 X LIGHTSPEED Wireless Gaming Keyboard",
        description: "Ultradun draadloos gaming toetsenbord met low-profile GL-switches, LIGHTSPEED-verbinding en per-key RGB-verlichting.",
        rating: 4.8,
        image: "",
        pros: ["Ultradun design", "LIGHTSPEED draadloos", "Per-key RGB"],
        cons: ["Duur", "Low-profile switches"],
        stores: [{ name: "Coolblue", link: "#" }]
      },
      {
        name: "Logitech MX Mechanical Mini Keyboard",
        description: "Compact draadloos mechanisch toetsenbord zonder numpad. Ideaal voor kleinere bureaus met dezelfde MX-kwaliteit.",
        rating: 4.7,
        image: "",
        pros: ["Compact formaat", "Mechanisch", "Multi-device"],
        cons: ["Geen numpad", "Prijzig"],
        stores: [{ name: "Coolblue", link: "#" }, { name: "Bol.com", link: "#" }]
      },
      {
        name: "Logitech G Pro X TKL",
        description: "Esports toetsenbord in tenkeyless formaat met hot-swappable GX-switches en compact design voor competitief gamen.",
        rating: 4.8,
        image: "",
        pros: ["Hot-swappable", "Compact TKL", "GX switches"],
        cons: ["Geen numpad", "Bedraad"],
        stores: [{ name: "Coolblue", link: "#" }]
      },
      {
        name: "Logitech MX Keys S",
        description: "Slim draadloos toetsenbord met spherically-dished toetsen, backlit keys en naadloze multi-device switching.",
        rating: 4.7,
        image: "",
        pros: ["Stille toetsen", "Backlit", "Multi-device"],
        cons: ["Geen mechanisch", "Niet voor gaming"],
        stores: [{ name: "Coolblue", link: "#" }, { name: "Bol.com", link: "#" }]
      },
      {
        name: "SteelSeries Apex Pro TKL",
        description: "Premium gaming toetsenbord met instelbare OmniPoint 2.0-switches en OLED Smart Display in compact TKL-formaat.",
        rating: 4.8,
        image: "",
        pros: ["Instelbare switches", "OLED display", "Compact TKL"],
        cons: ["Duur"],
        stores: [{ name: "Coolblue", link: "#" }]
      },
      {
        name: "Keychron K8 Pro",
        description: "Hot-swappable mechanisch toetsenbord in TKL-formaat met QMK/VIA-ondersteuning en Bluetooth + bedraad.",
        rating: 4.6,
        image: "",
        pros: ["Hot-swap", "QMK/VIA", "Bluetooth + kabel"],
        cons: ["Geen numpad"],
        stores: [{ name: "Bol.com", link: "#" }]
      },
      {
        name: "Corsair K70 RGB Pro",
        description: "Full-size gaming toetsenbord met Cherry MX-switches, per-key RGB en aluminium frame voor lange gaming sessies.",
        rating: 4.6,
        image: "",
        pros: ["Cherry MX switches", "Aluminium frame", "Per-key RGB"],
        cons: ["Groot formaat", "Bedraad"],
        stores: [{ name: "Bol.com", link: "#" }]
      },
      {
        name: "Ducky One 3 Gaming Keyboard",
        description: "Premium mechanisch toetsenbord met hot-swap PCB, PBT keycaps en Ducky's befaamde bouwkwaliteit.",
        rating: 4.7,
        image: "",
        pros: ["Hot-swap PCB", "PBT keycaps", "Premium bouw"],
        cons: ["Geen draadloos"],
        stores: [{ name: "Bol.com", link: "#" }]
      },
      {
        name: "Ducky One 3 Classic White SF Gaming Keyboard",
        description: "Compact 65% mechanisch toetsenbord in classic white met Cherry MX-switches en hot-swap ondersteuning.",
        rating: 4.7,
        image: "",
        pros: ["Compact 65%", "Cherry MX", "Hot-swap"],
        cons: ["Geen numpad of F-rij", "Bedraad"],
        stores: [{ name: "Bol.com", link: "#" }]
      }
    ]
  },
  mice: {
    title: "Top 10 Beste Muizen van 2025",
    description: "Van productiviteitsmuizen tot esports-gamingmuizen — de populairste muizen voor werk en gamen",
    products: [
      {
        name: "Logitech MX Master 3S Mouse",
        description: "De ultieme productiviteitsmuis met MagSpeed-scrollwiel, 8K DPI-lasersensor en stille klikken. Verbindt met tot 3 apparaten via Bluetooth of USB-ontvanger.",
        rating: 4.9,
        image: "",
        pros: ["MagSpeed scrollwiel", "Multi-device", "Ergonomisch design"],
        cons: ["Niet geschikt voor gaming", "Prijzig"],
        stores: [{ name: "Coolblue", link: "#" }, { name: "Bol.com", link: "#" }]
      },
      {
        name: "Logitech G502 X Mouse",
        description: "Iconische gaming muis vernieuwd met LIGHTFORCE-schakelaars, HERO 25K-sensor en aanpasbaar gewicht.",
        rating: 4.7,
        image: "",
        pros: ["LIGHTFORCE schakelaars", "HERO 25K sensor", "Aanpasbaar gewicht"],
        cons: ["Bedraad"],
        stores: [{ name: "Coolblue", link: "#" }]
      },
      {
        name: "Logitech G Pro X Superlight 2",
        description: "Ultralichte draadloze esports muis van slechts 60 gram met HERO 2-sensor en Lightspeed-verbinding.",
        rating: 4.9,
        image: "",
        pros: ["60g gewicht", "HERO 2 sensor", "Lightspeed"],
        cons: ["Duur"],
        stores: [{ name: "Coolblue", link: "#" }]
      },
      {
        name: "Razer DeathAdder V3 Pro",
        description: "Ergonomische draadloze gaming muis met Focus Pro 30K-sensor en tot 90 uur batterijduur.",
        rating: 4.8,
        image: "",
        pros: ["Ergonomisch", "Lange batterij", "Precieze sensor"],
        cons: ["Rechtshandig only"],
        stores: [{ name: "Coolblue", link: "#" }]
      },
      {
        name: "Razer Viper V3 Pro",
        description: "Ultralichte esports muis met Focus Pro 35K-sensor, 54 gram gewicht en HyperSpeed draadloos.",
        rating: 4.9,
        image: "",
        pros: ["54g ultralicht", "Focus Pro 35K", "Esports-kwaliteit"],
        cons: ["Duur", "Symmetrisch — minder ergonomisch"],
        stores: [{ name: "Coolblue", link: "#" }]
      },
      {
        name: "Logitech Lift Vertical",
        description: "Verticale ergonomische muis die je hand in een natuurlijke handshake-positie houdt. Ideaal voor lange werkdagen.",
        rating: 4.6,
        image: "",
        pros: ["Verticaal design", "Ergonomisch", "Stille klikken"],
        cons: ["Even wennen", "Niet voor gaming"],
        stores: [{ name: "Coolblue", link: "#" }, { name: "Bol.com", link: "#" }]
      },
      {
        name: "Logitech G305 Lightspeed",
        description: "Betaalbare draadloze gaming muis met HERO-sensor en tot 250 uur batterijduur op één AA-batterij.",
        rating: 4.7,
        image: "",
        pros: ["Betaalbaar", "250 uur batterij", "Lightspeed draadloos"],
        cons: ["Geen oplaadbare batterij"],
        stores: [{ name: "Coolblue", link: "#" }, { name: "Bol.com", link: "#" }]
      },
      {
        name: "SteelSeries Aerox 3 Wireless",
        description: "Lichtgewicht draadloze gaming muis van 66 gram met AquaBarrier en TrueMove Air-sensor.",
        rating: 4.6,
        image: "",
        pros: ["66g lichtgewicht", "Waterbestendig", "Multi-platform"],
        cons: ["Kleiner formaat"],
        stores: [{ name: "Coolblue", link: "#" }]
      },
      {
        name: "Logitech M720 Triathlon",
        description: "Veelzijdige multi-device muis die naadloos schakelt tussen drie apparaten via Bluetooth of Unifying-ontvanger.",
        rating: 4.5,
        image: "",
        pros: ["3 apparaten", "Lange batterijduur", "Betaalbaar"],
        cons: ["Basis sensor", "Geen gaming"],
        stores: [{ name: "Coolblue", link: "#" }, { name: "Bol.com", link: "#" }]
      },
      {
        name: "Corsair Scimitar Elite RGB",
        description: "MMO-gaming muis met 16 programmeerbare zijknoppen, 26K DPI-sensor en snel verwisselbare zijpanelen.",
        rating: 4.5,
        image: "",
        pros: ["16 zijknoppen", "26K DPI sensor", "MMO-gaming"],
        cons: ["Groot formaat", "Bedraad"],
        stores: [{ name: "Bol.com", link: "#" }]
      }
    ]
  },
  tvs: {
    title: "Top 10 Beste TV's van 2025",
    description: "Smart TV's met OLED en QLED voor film, sport en gaming",
    products: [
      {
        name: "LG OLED evo AI Smart TV",
        description: "Best overall OLED-tv met AI-beeldverwerking, diep zwart en slimme webOS-functies voor film, sport en gaming.",
        rating: 4.9,
        image: "",
        pros: ["OLED evo paneel", "AI-beeldverwerking", "webOS smart TV"],
        cons: ["Prijzig"],
        stores: []
      },
      {
        name: "Sony BRAVIA 8 OLED",
        description: "Topklasse OLED-tv met uitstekende beeldverwerking en filmkwaliteit.",
        rating: 4.9,
        image: "",
        pros: ["Sony beeldverwerking", "Filmkwaliteit", "OLED paneel"],
        cons: ["Duur"],
        stores: []
      },
      {
        name: "LG OLED evo G5",
        description: "Premium OLED met extreem hoge helderheid en sterke gamingprestaties.",
        rating: 4.8,
        image: "",
        pros: ["Extreem hoge helderheid", "Sterke gaming", "Premium OLED"],
        cons: ["Zeer duur", "Gallery design niet voor iedereen"],
        stores: []
      },
      {
        name: "Samsung S90D OLED",
        description: "Populaire Samsung OLED-tv met QD-OLED-technologie, heldere kleuren en 4K-gaming via HDMI 2.1.",
        rating: 4.8,
        image: "",
        pros: ["QD-OLED", "HDMI 2.1 gaming", "Helder beeld"],
        cons: ["Geen ingebouwde One Connect box op alle modellen"],
        stores: [{ name: "Bol.com", link: "#" }, { name: "Coolblue", link: "#" }]
      },
      {
        name: "TCL C805",
        description: "Mini LED TV met hoge helderheid, Google TV en uitstekende prijs-kwaliteitverhouding voor film en sport.",
        rating: 4.6,
        image: "",
        pros: ["Mini LED", "Google TV", "Goede prijs"],
        cons: ["Viewing angles minder goed dan OLED"],
        stores: [{ name: "Bol.com", link: "#" }, { name: "Coolblue", link: "#" }]
      },
      {
        name: "LG C5 OLED",
        description: "Instapmodel in LG's OLED-lijn met evo-technologie, webOS en solide gamingfeatures voor dagelijks gebruik.",
        rating: 4.7,
        image: "",
        pros: ["OLED evo", "webOS", "Gaming via HDMI 2.1"],
        cons: ["Minder helder dan G-serie"],
        stores: [{ name: "Bol.com", link: "#" }, { name: "Coolblue", link: "#" }]
      },
      {
        name: "Samsung S95D OLED",
        description: "Topklasse Samsung QD-OLED met maximale helderheid, diep zwart en premium beeld voor thuisbioscoop.",
        rating: 4.9,
        image: "",
        pros: ["QD-OLED topklasse", "Maximale helderheid", "Premium beeld"],
        cons: ["Zeer duur"],
        stores: [{ name: "Coolblue", link: "#" }]
      },
      {
        name: "Sony Bravia 7",
        description: "Sony Mini LED-tv met krachtige beeldverwerker, hoge helderheid en uitstekende upscaling voor elke content.",
        rating: 4.7,
        image: "",
        pros: ["Mini LED", "Sony beeldverwerking", "Hoge helderheid"],
        cons: ["Prijzig"],
        stores: [{ name: "Coolblue", link: "#" }]
      },
      {
        name: "Philips OLED809",
        description: "Philips OLED Ambilight-tv met meeslepende verlichting, Dolby Vision en Ambilight voor unieke kijkervaring.",
        rating: 4.7,
        image: "",
        pros: ["Ambilight", "OLED paneel", "Dolby Vision"],
        cons: ["Ambilight niet voor iedereen"],
        stores: [{ name: "Bol.com", link: "#" }, { name: "Coolblue", link: "#" }]
      },
      {
        name: "TCL QM8-serie / C855-serie",
        description: "TCL's premium Mini LED-lijn met hoge helderheid, Google TV en sterke prijs-kwaliteit voor grote schermen.",
        rating: 4.6,
        image: "",
        pros: ["Mini LED premium", "Google TV", "Goede prijs-kwaliteit"],
        cons: ["Specificaties variëren per model"],
        stores: [{ name: "Bol.com", link: "#" }]
      }
    ]
  },
};

function BolComAffiliateImage() {
  const ref: React.MutableRefObject<HTMLDivElement | null> = useRef(null);
  useEffect(() => {
    if (ref.current) {
      const script1 = document.createElement('script');
      script1.type = 'text/javascript';
      script1.innerHTML = 'var bol_sitebar_v2={"id":"bol_1746801268764", "baseUrl":"partner.bol.com","productId":"9300000084961830","familyId":"","siteId":"1445110","target":true,"rating":false,"price":false,"deliveryDescription":false,"button":false,"linkName":"Apple%20iPhone%20SE%20%282022%29%20-%2064GB%20-%20Zwart","linkSubId":""};';
      ref.current.appendChild(script1);
      const script2 = document.createElement('script');
      script2.type = 'text/javascript';
      script2.src = 'https://partner.bol.com/promotion/static/js/partnerProductlinkV2.js';
      script2.id = 'bol_1746801268764';
      ref.current.appendChild(script2);
    }
  }, []);
  return <div ref={ref} style={{width: '100%', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#e5e7eb', borderRadius: '1rem', marginBottom: '1rem'}} />;
}

export default function SubcategoryPage({ params }: { params: { category: string; subcategory: string } }) {
  const data = subcategoryData[params.subcategory];

  if (!data) {
    return (
      <main className="min-h-screen">
        <Navigation />
        <div className="container mx-auto px-4 pt-24">
          <h1 className="text-4xl text-center text-white">Subcategorie niet gevonden</h1>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      
      <section className="relative pt-24 pb-20 overflow-hidden">
        {/* Professional dark background with subtle patterns */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0" style={{ 
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.025) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px'
        }}></div>
        
        {/* Diagonal lines pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              rgba(255,255,255,0.01) 0px,
              rgba(255,255,255,0.01) 1px,
              transparent 1px,
              transparent 30px
            )
          `,
          opacity: 0.5
        }}></div>

        {/* Subtle radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03),transparent_800px)]"></div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4 text-white/90">{data.title}</h1>
            <p className="text-xl text-gray-400">{data.description}</p>
          </div>

          {/* Products */}
          <div className="max-w-5xl mx-auto">
            {data.products.map((product, index) => (
              <div key={product.name} className="bg-white/[0.02] backdrop-blur-md border border-white/[0.05] rounded-xl p-6 mb-6 shadow-xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-1">
                    <div className="relative">
                      <span className="absolute top-2 left-2 bg-black/80 text-white px-3 py-1 rounded-full">
                        #{index + 1}
                      </span>
                      <div className="bg-white/[0.02] rounded-lg flex justify-center items-center">
                        {product.image ? (
                          <img
                            src={product.image}
                            alt={product.name}
                            style={{
                              width: '100%%',
                              height: '200px',
                              objectFit: 'contain',
                              borderRadius: '1rem',
                              marginBottom: '1rem'
                            }}
                          />
                        ) : product.name === "Apple iPhone SE (3e generatie) 64GB Midnight" ? (
                          <img
                            src="/images/iphone-se.png"
                            alt="Apple iPhone SE"
                            style={{
                              width: '100%%',
                              height: '200px',
                              objectFit: 'contain',
                              borderRadius: '1rem',
                              marginBottom: '1rem'
                            }}
                          />
                        ) : (
                          <div style={{width: '100%%', height: '200px', background: '#e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#888', fontSize: '1.2rem', borderRadius: '1rem', marginBottom: '1rem'}}>Geen afbeelding</div>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="md:col-span-2">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h2 className="text-2xl font-bold text-white/90 mb-2">{product.name}</h2>
                        <p className="text-gray-400">{product.description}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 mb-6">
                      <div>
                        <h3 className="text-white/90 font-semibold mb-2">Voordelen</h3>
                        <ul className="space-y-2">
                          {product.pros.slice(0, 3).map((pro, i) => (
                            <li key={i} className="text-green-400 flex items-center bg-white/[0.02] p-2 rounded-lg">
                              <span className="mr-2">✓</span>
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex gap-4">
                        {product.stores && product.stores.find(s => s.name === 'Coolblue') && (() => {
                          const coolblue = product.stores.find(s => s.name === 'Coolblue');
                          if (!coolblue) return null;
                          return (
                            <a
                              href={coolblue.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200 shadow-lg"
                            >
                              Bekijk op Coolblue
                            </a>
                          );
                        })()}
                        {product.name === "Apple iPhone SE (3e generatie) 64GB Midnight" ? (
                          <a
                            href="https://partner.bol.com/click/click?p=1&t=url&s=1445110&f=PDL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fp%2Fiphone-se-3-64gb%2F9300000084961830%2F&name=Apple%20iPhone%20SE%20(2022)%20-%2064GB%20-%20Zwart"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200 shadow-lg"
                          >
                            Bekijk op Bol.com
                          </a>
                        ) : (
                          product.stores && product.stores.find(s => s.name === 'Bol.com') && (() => {
                            const bol = product.stores.find(s => s.name === 'Bol.com');
                            if (!bol) return null;
                            return (
                              <a
                                href={bol.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200 shadow-lg"
                              >
                                Bekijk op Bol.com 
                              </a>
                            );
                          })()
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 