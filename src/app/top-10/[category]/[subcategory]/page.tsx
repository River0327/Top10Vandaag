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
  price: number;
  pros: string[];
  cons: string[];
  stores: {
    name: string;
    price: number;
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
    title: "Top 10 Populairste iPhones bij Coolblue & bol.com (2025)",
    description: "De populairste iPhones van dit moment bij Coolblue en bol.com.",
    products: [
      {
        name: "Apple iPhone 16 Pro 256GB Black Titanium",
        description: "Scherm: 6,1 inch OLED | Camera: 48 MP hoofdcamera | Chip: A18 Pro",
        rating: 4.8,
        image: "https://ik.imagekit.io/aflisw3mk7/iphone16promax.PNG?updatedAt=1747660283274",
        price: 1229,
        pros: [
          "6,1 inch OLED-scherm",
          "48 MP hoofdcamera",
          "A18 Pro chip"
        ],
        cons: [],
        stores: [
          {
            name: "Coolblue",
            price: 1199,
            link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fen%2Fproduct%2F953037%2Fapple-iphone-16-pro-256gb-black-titanium.html"
          },
          {
            name: "Bol.com",
            price: 1150,
            link: "https://partner.bol.com/click/click?p=2&t=url&s=1445110&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Fapple-iphone-16-pro-256gb-zwart-titanium%2F9300000189439947%2F&name=Apple%20iPhone%2016%20Pro%20-%20256GB%20-%20Zwart%20Titanium"
          }
        ]
      },
      {
        name: "Apple iPhone 15 128GB Zwart",
        description: "Scherm: 6,1 inch OLED | Camera: 48 MP hoofdcamera | Chip: A16 Bionic",
        rating: 4.7,
        image: "https://ik.imagekit.io/aflisw3mk7/Iphone15-128gb-zwart.jpg?updatedAt=1747662369687",
        price: 729,
        pros: [
          "6,1 inch OLED-scherm",
          "48 MP hoofdcamera",
          "A16 Bionic chip"
        ],
        cons: [],
        stores: [
          {
            name: "Coolblue",
            price: 729,
            link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fen%2Fproduct%2F935188%2Fapple-iphone-15-128gb-black.html"
          },
          {
            name: "Bol.com",
            price: 719,
            link: "https://partner.bol.com/click/click?p=2&t=url&s=1445110&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Fapple-iphone-15-128gb-zwart%2F9300000161136294%2F&name=Apple%20iPhone%2015%20-%20128GB%20-%20Black"
          }
        ]
      },
      {
        name: "Apple iPhone 13 mini 128GB Midnight",
        description: "Scherm: 5,4 inch OLED | Camera: 12 MP dual-camera | Chip: A15 Bionic",
        rating: 4.7,
        image: "https://ik.imagekit.io/aflisw3mk7/Apple%20iPhone%2013%20128GB%20Middernacht.jpg?updatedAt=1747662369654",
        price: 342,
        pros: [
          "5,4 inch OLED-scherm",
          "12 MP dual-camera",
          "A15 Bionic chip"
        ],
        cons: [],
        stores: [
          {
            name: "Bol.com",
            price: 342,
            link: "https://partner.bol.com/click/click?p=2&t=url&s=1445110&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Fapple-iphone-13-mini-128gb-middernacht%2F9300000052189837%2F&name=Apple%20iPhone%2013%20mini%20-%20128GB%20-%20Middernacht"
          }
        ]
      },
      {
        name: "Apple iPhone 16 128GB Zwart",
        description: "Scherm: 6,1 inch OLED | Camera: 48 MP hoofdcamera | Chip: A18 Bionic",
        rating: 4.6,
        image: "https://ik.imagekit.io/aflisw3mk7/Apple%20iPhone%2016%20128GB%20Zwart.jpg?updatedAt=1747662369579",
        price: 789,
        pros: [
          "6,1 inch OLED-scherm",
          "48 MP hoofdcamera",
          "A18 Bionic chip"
        ],
        cons: [],
        stores: [
          {
            name: "Coolblue",
            price: 819,
            link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fen%2Fproduct%2F952114%2Fapple-iphone-16-128gb-black.html"
          },
          {
            name: "Bol.com",
            price: 789,
            link: "https://partner.bol.com/click/click?p=2&t=url&s=1445110&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Fapple-iphone-16-128gb-zwart%2F9300000189439876%2F&name=Apple%20iPhone%2016%20-%20128GB%20-%20Zwart"
          }
        ]
      },
      {
        name: "Apple iPhone 13 128GB Middernacht",
        description: "Scherm: 6,1 inch OLED | Camera: 12 MP dual-camera | Chip: A15 Bionic",
        rating: 4.5,
        image: "https://ik.imagekit.io/aflisw3mk7/Iphone13-mini-128gb-midnight.jpg?updatedAt=1747662369650",
        price: 489,
        pros: [
          "6,1 inch OLED-scherm",
          "12 MP dual-camera",
          "A15 Bionic chip"
        ],
        cons: [],
        stores: [
          {
            name: "Bol.com",
            price: 489,
            link: "https://partner.bol.com/click/click?p=2&t=url&s=1445110&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Fapple-iphone-13-15-5-cm-dual-sim-ios-15-5g-128-gb-zwart%2F9300000052191184%2F&name=Apple%20iPhone%2013%20-%20128GB%20-%20Middernacht"
          },
          {
            name: "Coolblue",
            price: 559,
            link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fen%2Fproduct%2F892007%2Fapple-iphone-13-128gb-black.html"
          }
        ]
      },
      {
        name: "Apple iPhone 14 128GB Middernacht",
        description: "Scherm: 6,1 inch OLED | Camera: 12 MP dual-camera | Chip: A15 Bionic",
        rating: 4.7,
        image: "https://ik.imagekit.io/aflisw3mk7/Apple%20iPhone%2014%20128GB%20Middernacht.jpg?updatedAt=1747662369680",
        price: 569,
        pros: [
          "6,1 inch OLED-scherm",
          "12 MP dual-camera",
          "A15 Bionic chip"
        ],
        cons: [],
        stores: [
          {
            name: "Bol.com",
            price: 569,
            link: "https://partner.bol.com/click/click?p=2&t=url&s=1445110&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Fapple-iphone-14-128gb-middernacht%2F9300000123038693%2F&name=Apple%20iPhone%2014%20-%20128GB%20-%20Middernacht"
          }
        ]
      },
      {
        name: "Apple iPhone 13 Pro 128GB Goud",
        description: "Scherm: 6,1 inch OLED | Camera: 12 MP triple-camera | Chip: A15 Bionic",
        rating: 4.8,
        image: "https://ik.imagekit.io/aflisw3mk7/Apple%20iPhone%2013%20Pro%20128GB%20Goud.jpg?updatedAt=1747662369712",
        price: 788,
        pros: [
          "6,1 inch OLED-scherm",
          "12 MP triple-camera",
          "A15 Bionic chip"
        ],
        cons: [],
        stores: [
          {
            name: "Bol.com",
            price: 788,
            link: "https://partner.bol.com/click/click?p=2&t=url&s=1445110&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Fapple-iphone-13-pro-128gb-goud%2F9300000052189828%2F&name=Apple%20iPhone%2013%20Pro%20-%20128GB%20-%20Goud"
          }
        ]
      },
      {
        name: "Apple iPhone 16 Pro Max 256GB Black Titanium",
        description: "Scherm: 6,7 inch OLED | Camera: 48 MP triple-camera | Chip: A18 Pro",
        rating: 4.9,
        image: "https://ik.imagekit.io/aflisw3mk7/iphone16promax.PNG?updatedAt=1747660283274",
        price: 1189,
        pros: [
          "6,7 inch OLED-scherm",
          "48 MP triple-camera",
          "A18 Pro chip"
        ],
        cons: [],
        stores: [
          {
            name: "Coolblue",
            price: 1299,
            link: "https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1940197&ued=https%3A%2F%2Fwww.coolblue.nl%2Fen%2Fproduct%2F953051%2Fapple-iphone-16-pro-max-256gb-black-titanium.html"
          },
          {
            name: "Bol.com",
            price: 1189,
            link: "https://partner.bol.com/click/click?p=2&t=url&s=1445110&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Fapple-iphone-16-pro-max-256gb-zwart-titanium%2F9300000189439873%2F&name=Apple%20iPhone%2016%20Pro%20Max%20-%20256GB%20-%20Zwart%20Titanium"
          }
        ]
      },
      {
        name: "Apple iPhone 15 Pro 128GB Zwart Titanium",
        description: "Scherm: 6,1 inch OLED | Camera: 48 MP triple-camera | Chip: A17 Pro",
        rating: 4.7,
        image: "https://ik.imagekit.io/aflisw3mk7/Apple%20iPhone%2015%20Pro%20128GB%20Zwart%20Titanium.jpg?updatedAt=1747662369575",
        price: 1165,
        pros: [
          "6,1 inch OLED-scherm",
          "48 MP triple-camera",
          "A17 Pro chip"
        ],
        cons: [],
        stores: [
          {
            name: "Bol.com",
            price: 1165,
            link: "https://partner.bol.com/click/click?p=2&t=url&s=1445110&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Fapple-iphone-15-pro-128gb-zwart-titanium%2F9300000161136275%2F&name=Apple%20iPhone%2015%20Pro%20-%20128GB%20-%20Zwart%20Titanium"
          }
        ]
      },
      {
        name: "Apple iPhone SE (2022) 64GB Midnight",
        description: "Scherm: 4,7 inch LCD | Camera: 12 MP single-camera | Chip: A15 Bionic",
        rating: 4.6,
        image: "https://ik.imagekit.io/aflisw3mk7/iphone%20se.jpg?updatedAt=1747663068193",
        price: 459,
        pros: [
          "4,7 inch LCD-scherm",
          "12 MP single-camera",
          "A15 Bionic chip"
        ],
        cons: [],
        stores: [
          {
            name: "Bol.com",
            price: 459,
            link: "https://partner.bol.com/click/click?p=2&t=url&s=1445110&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Fapple-iphone-se-64gb-zwart%2F9300000084961830%2F&name=Apple%20iPhone%20SE%20(2022)%20-%2064GB%20-%20Zwart"
          }
        ]
      }
    ]
  },
  ipad: {
    title: "Top 10 Beste iPads (2025)",
    description: "De populairste iPads gerangschikt op prestaties en gebruiksgemak",
    products: [
      {
        name: "Apple iPad 10.9 inch (2022) 64GB Wi-Fi",
        description: "10,9 inch iPad met A14 Bionic chip, ideaal voor werk, studie en entertainment.",
        rating: 4.6,
        image: "",
        price: 489,
        pros: [
          "10,9 inch scherm",
          "A14 Bionic chip",
          "Snelle performance voor dagelijkse taken"
        ],
        cons: ["Geen 5G (Wi-Fi versie)", "64GB opslag kan beperkt zijn"],
        stores: [
          {
            name: "Coolblue",
            price: 489,
            link: "#"
          },
          {
            name: "Bol.com",
            price: 479,
            link: "#"
          }
        ]
      }
    ]
  },
  samsung: {
    title: "Top 10 Beste Samsung Telefoons en tablets (mei 2025)",
    description: "De populairste Samsung smartphones gerangschikt op prestaties en gebruikerservaringen",
    products: [
      {
        name: "Samsung Galaxy A56 5G (256 GB)",
        description: "Soepele midrange met 5G en ruime 256 GB opslag",
        rating: 0,
        image: "",
        price: 0,
        pros: [
          "5G ondersteuning",
          "256 GB opslag",
          "Vloeiend scherm"
        ],
        cons: [],
        stores: [{ name: "Bol.com", price: 0, link: "#" }, { name: "Coolblue", price: 0, link: "#" }]
      },
      {
        name: "Samsung Galaxy A56 5G (128 GB)",
        description: "Betaalbare 5G-smartphone met 128 GB opslag",
        rating: 0,
        image: "",
        price: 0,
        pros: [
          "5G ondersteuning",
          "Goede prijs-kwaliteit",
          "Vloeiend scherm"
        ],
        cons: [],
        stores: [{ name: "Bol.com", price: 0, link: "#" }, { name: "Coolblue", price: 0, link: "#" }]
      },
      {
        name: "Samsung Galaxy A16 4G (LTE)",
        description: "Instapmodel met 4G en lange batterijduur",
        rating: 0,
        image: "",
        price: 0,
        pros: [
          "Lange batterijduur",
          "Betaalbaar",
          "Groot scherm"
        ],
        cons: [],
        stores: [{ name: "Bol.com", price: 0, link: "#" }, { name: "Coolblue", price: 0, link: "#" }]
      },
      {
        name: "Samsung Galaxy A16 5G",
        description: "Budget 5G-telefoon voor dagelijks gebruik",
        rating: 0,
        image: "",
        price: 0,
        pros: [
          "5G ondersteuning",
          "Budgetvriendelijk",
          "Modern design"
        ],
        cons: [],
        stores: [{ name: "Bol.com", price: 0, link: "#" }, { name: "Coolblue", price: 0, link: "#" }]
      },
      {
        name: "Samsung Galaxy A26 5G",
        description: "Instap 5G-model met degelijke prestaties",
        rating: 0,
        image: "",
        price: 0,
        pros: [
          "5G ondersteuning",
          "Scherpe prijs",
          "Groot scherm"
        ],
        cons: [],
        stores: [{ name: "Bol.com", price: 0, link: "#" }, { name: "Coolblue", price: 0, link: "#" }]
      },
      {
        name: "Samsung Galaxy A36 5G (128 GB)",
        description: "Populaire middenklasser met 128 GB opslag",
        rating: 0,
        image: "",
        price: 0,
        pros: [
          "Goede prijs-kwaliteit",
          "5G ondersteuning",
          "Prima camera"
        ],
        cons: [],
        stores: [{ name: "Bol.com", price: 0, link: "#" }, { name: "Coolblue", price: 0, link: "#" }]
      },
      {
        name: "Samsung Galaxy A05s (4G)",
        description: "Zeer betaalbare 4G-smartphone voor basisgebruik",
        rating: 0,
        image: "",
        price: 0,
        pros: [
          "Budgetvriendelijk",
          "Groot scherm",
          "Degelijke batterij"
        ],
        cons: [],
        stores: [{ name: "Bol.com", price: 0, link: "#" }, { name: "Coolblue", price: 0, link: "#" }]
      },
      {
        name: "Samsung Galaxy A36 5G (256 GB)",
        description: "A36 met extra 256 GB opslag voor meer ruimte",
        rating: 0,
        image: "",
        price: 0,
        pros: [
          "256 GB opslag",
          "5G ondersteuning",
          "Vloeiend scherm"
        ],
        cons: [],
        stores: [{ name: "Bol.com", price: 0, link: "#" }, { name: "Coolblue", price: 0, link: "#" }]
      },
      {
        name: "Samsung Galaxy S25 5G (256 GB)",
        description: "Nieuwste S-serie met 5G en 256 GB opslag",
        rating: 0,
        image: "",
        price: 0,
        pros: [
          "High-end prestaties",
          "Uitstekende camera",
          "5G ondersteuning"
        ],
        cons: [],
        stores: [{ name: "Bol.com", price: 0, link: "#" }, { name: "Coolblue", price: 0, link: "#" }]
      },
      {
        name: "Samsung Galaxy S25 5G (512 GB)",
        description: "S25 met royale 512 GB opslag voor power users",
        rating: 0,
        image: "",
        price: 0,
        pros: [
          "512 GB opslag",
          "High-end prestaties",
          "Uitstekende camera"
        ],
        cons: [],
        stores: [{ name: "Bol.com", price: 0, link: "#" }, { name: "Coolblue", price: 0, link: "#" }]
      }
    ]
  },
  oneplus: {
    title: "Top 10 Beste OnePlus Phones van 2025",
    description: "De populairste OnePlus smartphones gerangschikt op verkoopcijfers en gebruikerservaringen",
    products: [
      {
        name: "OnePlus 12",
        description: "Het nieuwe vlaggenschip met Snapdragon 8 Gen 3",
        rating: 9.7,
        image: "https://images.unsplash.com/photo-1675785732030-3f80c7d95ed5",
        price: 969,
        pros: ["Snapdragon 8 Gen 3", "100W laden", "Hasselblad camera's"],
        cons: ["Prijzig voor OnePlus", "Groot formaat"],
        stores: [
          {
            name: "Coolblue",
            price: 969,
            link: "https://www.coolblue.nl/product/oneplus-12"
          },
          {
            name: "Bol.com",
            price: 959,
            link: "https://www.bol.com/nl/p/oneplus-12"
          }
        ]
      },
      {
        name: "OnePlus 12R",
        description: "Gaming-focused met grote batterij en scherpe prijs",
        rating: 9.5,
        image: "https://images.unsplash.com/photo-1675785732030-3f80c7d95ed5",
        price: 699,
        pros: ["Grote batterij", "Gaming features", "Goede prijs"],
        cons: ["Basis camera", "Geen draadloos laden"],
        stores: [
          {
            name: "Coolblue",
            price: 699,
            link: "https://www.coolblue.nl/product/oneplus-12r"
          },
          {
            name: "Bol.com",
            price: 689,
            link: "https://www.bol.com/nl/p/oneplus-12r"
          }
        ]
      },
      {
        name: "OnePlus Nord 3",
        description: "De beste mid-range smartphone van OnePlus",
        rating: 9.3,
        image: "https://images.unsplash.com/photo-1675785732030-3f80c7d95ed5",
        price: 449,
        pros: ["Goede prijs-kwaliteit", "80W laden", "OxygenOS"],
        cons: ["Plastic frame", "Geen draadloos laden"],
        stores: [
          {
            name: "Coolblue",
            price: 449,
            link: "https://www.coolblue.nl/product/oneplus-nord-3"
          },
          {
            name: "Bol.com",
            price: 439,
            link: "https://www.bol.com/nl/p/oneplus-nord-3"
          }
        ]
      },
      {
        name: "OnePlus Nord CE 3",
        description: "Betaalbare alleskunner met 5G",
        rating: 9.2,
        image: "https://images.unsplash.com/photo-1675785732030-3f80c7d95ed5",
        price: 349,
        pros: ["Scherpe prijs", "5G", "Snelladen"],
        cons: ["Basis camera", "Plastic design"],
        stores: [
          {
            name: "Coolblue",
            price: 349,
            link: "https://www.coolblue.nl/product/oneplus-nord-ce-3"
          },
          {
            name: "Bol.com",
            price: 339,
            link: "https://www.bol.com/nl/p/oneplus-nord-ce-3"
          }
        ]
      },
      {
        name: "OnePlus Open",
        description: "De eerste vouwbare smartphone van OnePlus",
        rating: 9.1,
        image: "https://images.unsplash.com/photo-1675785732030-3f80c7d95ed5",
        price: 1799,
        pros: ["Innovatief design", "Hasselblad camera's", "OxygenOS"],
        cons: ["Zeer hoge prijs", "Eerste generatie"],
        stores: [
          {
            name: "Coolblue",
            price: 1799,
            link: "https://www.coolblue.nl/product/oneplus-open"
          },
          {
            name: "Bol.com",
            price: 1789,
            link: "https://www.bol.com/nl/p/oneplus-open"
          }
        ]
      },
      {
        name: "OnePlus 11",
        description: "Vorig vlaggenschip voor een scherpe prijs",
        rating: 9.0,
        image: "https://images.unsplash.com/photo-1675785732030-3f80c7d95ed5",
        price: 699,
        pros: ["Goede prijs", "Hasselblad camera's", "Snelladen"],
        cons: ["Geen draadloos laden", "Oudere processor"],
        stores: [
          {
            name: "Coolblue",
            price: 699,
            link: "https://www.coolblue.nl/product/oneplus-11"
          },
          {
            name: "Bol.com",
            price: 689,
            link: "https://www.bol.com/nl/p/oneplus-11"
          }
        ]
      },
      {
        name: "OnePlus Nord N30",
        description: "Budget-vriendelijke 5G smartphone",
        rating: 8.9,
        image: "https://images.unsplash.com/photo-1675785732030-3f80c7d95ed5",
        price: 299,
        pros: ["Zeer betaalbaar", "5G", "Grote batterij"],
        cons: ["Basis camera", "Plastic bouw"],
        stores: [
          {
            name: "Coolblue",
            price: 299,
            link: "https://www.coolblue.nl/product/oneplus-nord-n30"
          },
          {
            name: "Bol.com",
            price: 289,
            link: "https://www.bol.com/nl/p/oneplus-nord-n30"
          }
        ]
      },
      {
        name: "OnePlus Nord 2T",
        description: "Nog steeds een uitstekende mid-ranger",
        rating: 8.8,
        image: "https://images.unsplash.com/photo-1675785732030-3f80c7d95ed5",
        price: 369,
        pros: ["Goede prijs", "80W laden", "OxygenOS"],
        cons: ["Oudere chip", "Basis camera's"],
        stores: [
          {
            name: "Coolblue",
            price: 369,
            link: "https://www.coolblue.nl/product/oneplus-nord-2t"
          },
          {
            name: "Bol.com",
            price: 359,
            link: "https://www.bol.com/nl/p/oneplus-nord-2t"
          }
        ]
      },
      {
        name: "OnePlus Nord CE 2",
        description: "Budget-vriendelijk met goede features",
        rating: 8.7,
        image: "https://images.unsplash.com/photo-1675785732030-3f80c7d95ed5",
        price: 299,
        pros: ["Betaalbaar", "Snelladen", "Licht"],
        cons: ["Oudere processor", "Basis camera"],
        stores: [
          {
            name: "Coolblue",
            price: 299,
            link: "https://www.coolblue.nl/product/oneplus-nord-ce-2"
          },
          {
            name: "Bol.com",
            price: 289,
            link: "https://www.bol.com/nl/p/oneplus-nord-ce-2"
          }
        ]
      },
      {
        name: "OnePlus Nord N20",
        description: "De meest betaalbare OnePlus",
        rating: 8.6,
        image: "https://images.unsplash.com/photo-1675785732030-3f80c7d95ed5",
        price: 249,
        pros: ["Zeer betaalbaar", "AMOLED scherm", "Snelladen"],
        cons: ["Basis specs", "Plastic bouw"],
        stores: [
          {
            name: "Coolblue",
            price: 249,
            link: "https://www.coolblue.nl/product/oneplus-nord-n20"
          },
          {
            name: "Bol.com",
            price: 239,
            link: "https://www.bol.com/nl/p/oneplus-nord-n20"
          }
        ]
      }
    ]
  },
  google: {
    title: "Top 10 Beste Google Phones van 2025",
    description: "De populairste Google Pixel smartphones gerangschikt op verkoopcijfers en gebruikerservaringen",
    products: [
      {
        name: "Google Pixel 8 Pro",
        description: "De ultieme AI-smartphone met 7 jaar updates",
        rating: 9.7,
        image: "https://images.unsplash.com/photo-1675785732030-3f80c7d95ed5",
        price: 1099,
        pros: ["Beste AI features", "7 jaar updates", "Geweldige camera's"],
        cons: ["Hoge prijs", "Beperkte beschikbaarheid"],
        stores: [
          {
            name: "Coolblue",
            price: 1099,
            link: "https://www.coolblue.nl/product/google-pixel-8-pro"
          },
          {
            name: "Bol.com",
            price: 1089,
            link: "https://www.bol.com/nl/p/google-pixel-8-pro"
          }
        ]
      },
      {
        name: "Google Pixel 8",
        description: "Compact powerhouse met alle AI features",
        rating: 9.6,
        image: "https://images.unsplash.com/photo-1675785732030-3f80c7d95ed5",
        price: 799,
        pros: ["Compact", "7 jaar updates", "AI features"],
        cons: ["Geen telelens", "Prijzig"],
        stores: [
          {
            name: "Coolblue",
            price: 799,
            link: "https://www.coolblue.nl/product/google-pixel-8"
          },
          {
            name: "Bol.com",
            price: 789,
            link: "https://www.bol.com/nl/p/google-pixel-8"
          }
        ]
      },
      {
        name: "Google Pixel Fold",
        description: "De eerste vouwbare Pixel met stock Android",
        rating: 9.4,
        image: "https://images.unsplash.com/photo-1675785732030-3f80c7d95ed5",
        price: 1899,
        pros: ["Uniek design", "Pure Android", "Goede camera's"],
        cons: ["Zeer hoge prijs", "Zwaar", "Eerste generatie"],
        stores: [
          {
            name: "Coolblue",
            price: 1899,
            link: "https://www.coolblue.nl/product/google-pixel-fold"
          },
          {
            name: "Bol.com",
            price: 1889,
            link: "https://www.bol.com/nl/p/google-pixel-fold"
          }
        ]
      },
      {
        name: "Google Pixel 7a",
        description: "De beste mid-range smartphone met pure Android",
        rating: 9.3,
        image: "https://images.unsplash.com/photo-1675785732030-3f80c7d95ed5",
        price: 509,
        pros: ["Goede prijs", "Pure Android", "Geweldige camera"],
        cons: ["Plastic bouw", "Geen telelens"],
        stores: [
          {
            name: "Coolblue",
            price: 509,
            link: "https://www.coolblue.nl/product/google-pixel-7a"
          },
          {
            name: "Bol.com",
            price: 499,
            link: "https://www.bol.com/nl/p/google-pixel-7a"
          }
        ]
      },
      {
        name: "Google Pixel 7 Pro",
        description: "Nog steeds een toptoestel met geweldige camera's",
        rating: 9.2,
        image: "https://images.unsplash.com/photo-1675785732030-3f80c7d95ed5",
        price: 899,
        pros: ["Scherpe prijs", "Goede camera's", "Pure Android"],
        cons: ["Oudere processor", "Kortere updates"],
        stores: [
          {
            name: "Coolblue",
            price: 899,
            link: "https://www.coolblue.nl/product/google-pixel-7-pro"
          },
          {
            name: "Bol.com",
            price: 889,
            link: "https://www.bol.com/nl/p/google-pixel-7-pro"
          }
        ]
      },
      {
        name: "Google Pixel 7",
        description: "Pure Android ervaring voor een scherpe prijs",
        rating: 9.1,
        image: "https://images.unsplash.com/photo-1675785732030-3f80c7d95ed5",
        price: 649,
        pros: ["Goede prijs", "Pure Android", "Compacte behuizing"],
        cons: ["Basis camera", "Kortere updates"],
        stores: [
          {
            name: "Coolblue",
            price: 649,
            link: "https://www.coolblue.nl/product/google-pixel-7"
          },
          {
            name: "Bol.com",
            price: 639,
            link: "https://www.bol.com/nl/p/google-pixel-7"
          }
        ]
      },
      {
        name: "Google Pixel 6a",
        description: "Budget-vriendelijke Pixel met goede prestaties",
        rating: 9.0,
        image: "https://images.unsplash.com/photo-1675785732030-3f80c7d95ed5",
        price: 399,
        pros: ["Zeer betaalbaar", "Pure Android", "Compact"],
        cons: ["Oudere hardware", "60Hz scherm"],
        stores: [
          {
            name: "Coolblue",
            price: 399,
            link: "https://www.coolblue.nl/product/google-pixel-6a"
          },
          {
            name: "Bol.com",
            price: 389,
            link: "https://www.bol.com/nl/p/google-pixel-6a"
          }
        ]
      },
      {
        name: "Google Pixel 6 Pro",
        description: "Voormalig vlaggenschip voor een scherpe prijs",
        rating: 8.9,
        image: "https://images.unsplash.com/photo-1675785732030-3f80c7d95ed5",
        price: 699,
        pros: ["Scherpe prijs", "Goede camera's", "Pure Android"],
        cons: ["Oudere hardware", "Beperkte updates"],
        stores: [
          {
            name: "Coolblue",
            price: 699,
            link: "https://www.coolblue.nl/product/google-pixel-6-pro"
          },
          {
            name: "Bol.com",
            price: 689,
            link: "https://www.bol.com/nl/p/google-pixel-6-pro"
          }
        ]
      },
      {
        name: "Google Pixel 6",
        description: "Basis Pixel met pure Android ervaring",
        rating: 8.8,
        image: "https://images.unsplash.com/photo-1675785732030-3f80c7d95ed5",
        price: 549,
        pros: ["Goede prijs", "Pure Android", "Degelijke camera"],
        cons: ["Oudere hardware", "Beperkte updates"],
        stores: [
          {
            name: "Coolblue",
            price: 549,
            link: "https://www.coolblue.nl/product/google-pixel-6"
          },
          {
            name: "Bol.com",
            price: 539,
            link: "https://www.bol.com/nl/p/google-pixel-6"
          }
        ]
      },
      {
        name: "Google Pixel 5",
        description: "Klassieke Pixel voor de liefhebber",
        rating: 8.7,
        image: "https://images.unsplash.com/photo-1675785732030-3f80c7d95ed5",
        price: 449,
        pros: ["Compact", "Pure Android", "Betaalbaar"],
        cons: ["Verouderde specs", "Geen updates meer"],
        stores: [
          {
            name: "Coolblue",
            price: 449,
            link: "https://www.coolblue.nl/product/google-pixel-5"
          },
          {
            name: "Bol.com",
            price: 439,
            link: "https://www.bol.com/nl/p/google-pixel-5"
          }
        ]
      }
    ]
  },
  oppo: {
    title: "Top 10 Beste OPPO Phones van 2025",
    description: "De populairste OPPO smartphones gerangschikt op verkoopcijfers en gebruikerservaringen",
    products: [
      {
        name: "OPPO Find X7 Ultra",
        description: "Het nieuwe vlaggenschip met revolutionaire camera's",
        rating: 9.6,
        image: "https://images.unsplash.com/photo-1675785732030-3f80c7d95ed5",
        price: 1299,
        pros: ["Hasselblad camera's", "Snapdragon 8 Gen 3", "Prachtig design"],
        cons: ["Zeer hoge prijs", "Beperkte beschikbaarheid"],
        stores: [
          {
            name: "Coolblue",
            price: 1299,
            link: "https://www.coolblue.nl/product/oppo-find-x7-ultra"
          },
          {
            name: "Bol.com",
            price: 1289,
            link: "https://www.bol.com/nl/p/oppo-find-x7-ultra"
          }
        ]
      },
      {
        name: "OPPO Find N3",
        description: "Premium vouwbare smartphone met Hasselblad camera's",
        rating: 9.5,
        image: "https://images.unsplash.com/photo-1675785732030-3f80c7d95ed5",
        price: 1899,
        pros: ["Innovatief design", "Hasselblad camera's", "Groot scherm"],
        cons: ["Zeer hoge prijs", "Beperkte beschikbaarheid"],
        stores: [
          {
            name: "Coolblue",
            price: 1899,
            link: "https://www.coolblue.nl/product/oppo-find-n3"
          },
          {
            name: "Bol.com",
            price: 1889,
            link: "https://www.bol.com/nl/p/oppo-find-n3"
          }
        ]
      },
      {
        name: "OPPO Find N3 Flip",
        description: "Stijlvolle vouwbare smartphone met groot coverscherm",
        rating: 9.4,
        image: "https://images.unsplash.com/photo-1675785732030-3f80c7d95ed5",
        price: 1199,
        pros: ["Uniek design", "Goede camera's", "Compact opgevouwen"],
        cons: ["Hoge prijs", "Batterijduur"],
        stores: [
          {
            name: "Coolblue",
            price: 1199,
            link: "https://www.coolblue.nl/product/oppo-find-n3-flip"
          },
          {
            name: "Bol.com",
            price: 1189,
            link: "https://www.bol.com/nl/p/oppo-find-n3-flip"
          }
        ]
      },
      {
        name: "OPPO Reno11 Pro",
        description: "Premium midrange met uitstekende camera's",
        rating: 9.3,
        image: "https://images.unsplash.com/photo-1675785732030-3f80c7d95ed5",
        price: 799,
        pros: ["Mooi design", "Goede camera's", "Snelladen"],
        cons: ["Midrange processor", "Prijzig"],
        stores: [
          {
            name: "Coolblue",
            price: 799,
            link: "https://www.coolblue.nl/product/oppo-reno11-pro"
          },
          {
            name: "Bol.com",
            price: 789,
            link: "https://www.bol.com/nl/p/oppo-reno11-pro"
          }
        ]
      },
      {
        name: "OPPO Reno11",
        description: "Stijlvolle midrange smartphone",
        rating: 9.2,
        image: "https://images.unsplash.com/photo-1675785732030-3f80c7d95ed5",
        price: 599,
        pros: ["Goed design", "Prima camera's", "Snelladen"],
        cons: ["Plastic frame", "Basis processor"],
        stores: [
          {
            name: "Coolblue",
            price: 599,
            link: "https://www.coolblue.nl/product/oppo-reno11"
          },
          {
            name: "Bol.com",
            price: 589,
            link: "https://www.bol.com/nl/p/oppo-reno11"
          }
        ]
      },
      {
        name: "OPPO Find X6 Pro",
        description: "Vorig vlaggenschip met top specs",
        rating: 9.1,
        image: "https://images.unsplash.com/photo-1675785732030-3f80c7d95ed5",
        price: 999,
        pros: ["Goede prijs", "Top camera's", "Snelladen"],
        cons: ["Oudere processor", "Geen nieuwste features"],
        stores: [
          {
            name: "Coolblue",
            price: 999,
            link: "https://www.coolblue.nl/product/oppo-find-x6-pro"
          },
          {
            name: "Bol.com",
            price: 989,
            link: "https://www.bol.com/nl/p/oppo-find-x6-pro"
          }
        ]
      },
      {
        name: "OPPO A79 5G",
        description: "Betaalbare 5G smartphone met goede specs",
        rating: 9.0,
        image: "https://images.unsplash.com/photo-1675785732030-3f80c7d95ed5",
        price: 329,
        pros: ["5G", "Grote batterij", "Scherpe prijs"],
        cons: ["Basis camera", "Plastic design"],
        stores: [
          {
            name: "Coolblue",
            price: 329,
            link: "https://www.coolblue.nl/product/oppo-a79-5g"
          },
          {
            name: "Bol.com",
            price: 319,
            link: "https://www.bol.com/nl/p/oppo-a79-5g"
          }
        ]
      },
      {
        name: "OPPO A58",
        description: "Budget-vriendelijke smartphone met goede features",
        rating: 8.9,
        image: "https://images.unsplash.com/photo-1675785732030-3f80c7d95ed5",
        price: 249,
        pros: ["Zeer betaalbaar", "Groot scherm", "Goede batterij"],
        cons: ["Basis specs", "Plastic bouw"],
        stores: [
          {
            name: "Coolblue",
            price: 249,
            link: "https://www.coolblue.nl/product/oppo-a58"
          },
          {
            name: "Bol.com",
            price: 239,
            link: "https://www.bol.com/nl/p/oppo-a58"
          }
        ]
      },
      {
        name: "OPPO A38",
        description: "Entry-level smartphone met goede batterij",
        rating: 8.8,
        image: "https://images.unsplash.com/photo-1675785732030-3f80c7d95ed5",
        price: 179,
        pros: ["Zeer betaalbaar", "Lange batterijduur", "Degelijk"],
        cons: ["Basis camera", "Basis scherm"],
        stores: [
          {
            name: "Coolblue",
            price: 179,
            link: "https://www.coolblue.nl/product/oppo-a38"
          },
          {
            name: "Bol.com",
            price: 169,
            link: "https://www.bol.com/nl/p/oppo-a38"
          }
        ]
      },
      {
        name: "OPPO A18",
        description: "De meest betaalbare OPPO smartphone",
        rating: 8.7,
        image: "https://images.unsplash.com/photo-1675785732030-3f80c7d95ed5",
        price: 149,
        pros: ["Zeer goedkoop", "Basis functies", "Degelijk"],
        cons: ["Minimale specs", "Basis camera"],
        stores: [
          {
            name: "Coolblue",
            price: 149,
            link: "https://www.coolblue.nl/product/oppo-a18"
          },
          {
            name: "Bol.com",
            price: 139,
            link: "https://www.bol.com/nl/p/oppo-a18"
          }
        ]
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
        price: 599,
        pros: ["8K gaming", "Ray tracing", "SSD opslag", "4K/120fps"],
        cons: ["Hoge prijs", "Groot formaat"],
        stores: [
          {
            name: "Coolblue",
            price: 599,
            link: "https://www.coolblue.nl/product/playstation-5-pro"
          },
          {
            name: "Bol.com",
            price: 589,
            link: "https://www.bol.com/nl/p/playstation-5-pro"
          }
        ]
      },
      {
        name: "DualSense Edge Controller",
        description: "Premium controller met aanpasbare knoppen en profielen",
        rating: 9.7,
        image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3",
        price: 239,
        pros: ["Aanpasbare knoppen", "Extra profielen", "Premium build"],
        cons: ["Hoge prijs", "Batterijduur"],
        stores: [
          {
            name: "Coolblue",
            price: 239,
            link: "https://www.coolblue.nl/product/dualsense-edge"
          },
          {
            name: "Bol.com",
            price: 229,
            link: "https://www.bol.com/nl/p/dualsense-edge"
          }
        ]
      },
      {
        name: "PlayStation VR2",
        description: "Next-gen VR voor de ultieme gaming ervaring",
        rating: 9.6,
        image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3",
        price: 599,
        pros: ["4K HDR", "Eye tracking", "Haptic feedback"],
        cons: ["Alleen voor PS5", "Prijzig"],
        stores: [
          {
            name: "Coolblue",
            price: 599,
            link: "https://www.coolblue.nl/product/playstation-vr2"
          },
          {
            name: "Bol.com",
            price: 589,
            link: "https://www.bol.com/nl/p/playstation-vr2"
          }
        ]
      },
      {
        name: "Marvel's Spider-Man 2",
        description: "Epische superhelden actie in een open wereld",
        rating: 9.5,
        image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3",
        price: 79,
        pros: ["Prachtige graphics", "Meeslepend verhaal", "Co-op"],
        cons: ["Relatief kort", "DLC prijzig"],
        stores: [
          {
            name: "Coolblue",
            price: 79,
            link: "https://www.coolblue.nl/product/spiderman-2"
          },
          {
            name: "Bol.com",
            price: 69,
            link: "https://www.bol.com/nl/p/spiderman-2"
          }
        ]
      },
      {
        name: "God of War Ragnarök",
        description: "Episch Norse mythologie avontuur",
        rating: 9.4,
        image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3",
        price: 69,
        pros: ["Episch verhaal", "Geweldige graphics", "Veel content"],
        cons: ["Lineair", "Moeilijk"],
        stores: [
          {
            name: "Coolblue",
            price: 69,
            link: "https://www.coolblue.nl/product/god-of-war"
          },
          {
            name: "Bol.com",
            price: 59,
            link: "https://www.bol.com/nl/p/god-of-war"
          }
        ]
      },
      {
        name: "PS5 HD Camera",
        description: "1080p camera voor streaming en content creatie",
        rating: 9.3,
        image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3",
        price: 69,
        pros: ["Hoge kwaliteit", "Makkelijk setup", "Dual lenzen"],
        cons: ["Alleen voor PS5", "Beperkte features"],
        stores: [
          {
            name: "Coolblue",
            price: 69,
            link: "https://www.coolblue.nl/product/ps5-camera"
          },
          {
            name: "Bol.com",
            price: 59,
            link: "https://www.bol.com/nl/p/ps5-camera"
          }
        ]
      },
      {
        name: "Pulse 3D Headset",
        description: "Draadloze gaming headset met 3D audio",
        rating: 9.2,
        image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3",
        price: 99,
        pros: ["3D audio", "Comfortabel", "Goede microfoon"],
        cons: ["Batterijduur", "Plastic build"],
        stores: [
          {
            name: "Coolblue",
            price: 99,
            link: "https://www.coolblue.nl/product/pulse-3d"
          },
          {
            name: "Bol.com",
            price: 89,
            link: "https://www.bol.com/nl/p/pulse-3d"
          }
        ]
      },
      {
        name: "DualSense Controller",
        description: "Standaard PS5 controller met haptic feedback",
        rating: 9.1,
        image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3",
        price: 69,
        pros: ["Haptic feedback", "Adaptive triggers", "Ergonomisch"],
        cons: ["Batterijduur", "Prijs"],
        stores: [
          {
            name: "Coolblue",
            price: 69,
            link: "https://www.coolblue.nl/product/dualsense"
          },
          {
            name: "Bol.com",
            price: 59,
            link: "https://www.bol.com/nl/p/dualsense"
          }
        ]
      },
      {
        name: "PS5 Media Remote",
        description: "Afstandsbediening voor media content",
        rating: 9.0,
        image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3",
        price: 29,
        pros: ["Handig design", "Media knoppen", "Bluetooth"],
        cons: ["Beperkt gebruik", "Basis functionaliteit"],
        stores: [
          {
            name: "Coolblue",
            price: 29,
            link: "https://www.coolblue.nl/product/ps5-remote"
          },
          {
            name: "Bol.com",
            price: 25,
            link: "https://www.bol.com/nl/p/ps5-remote"
          }
        ]
      },
      {
        name: "PS5 Charging Station",
        description: "Oplaadstation voor twee DualSense controllers",
        rating: 8.9,
        image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3",
        price: 29,
        pros: ["Laadt 2 controllers", "Past bij PS5", "Snel laden"],
        cons: ["Basis functionaliteit", "Prijs"],
        stores: [
          {
            name: "Coolblue",
            price: 29,
            link: "https://www.coolblue.nl/product/ps5-charging"
          },
          {
            name: "Bol.com",
            price: 25,
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
        price: 499,
        pros: ["4K gaming", "Quick Resume", "Game Pass", "Backwards compatibility"],
        cons: ["Groot formaat", "Beperkte exclusives"],
        stores: [
          {
            name: "Coolblue",
            price: 499,
            link: "https://www.coolblue.nl/product/xbox-series-x"
          },
          {
            name: "Bol.com",
            price: 489,
            link: "https://www.bol.com/nl/p/xbox-series-x"
          }
        ]
      },
      {
        name: "Xbox Elite Controller Series 2",
        description: "Premium controller met aanpasbare onderdelen",
        rating: 9.7,
        image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d",
        price: 179,
        pros: ["Aanpasbaar", "Premium build", "Lange batterijduur"],
        cons: ["Hoge prijs", "Complex voor casual gamers"],
        stores: [
          {
            name: "Coolblue",
            price: 179,
            link: "https://www.coolblue.nl/product/xbox-elite-2"
          },
          {
            name: "Bol.com",
            price: 169,
            link: "https://www.bol.com/nl/p/xbox-elite-2"
          }
        ]
      },
      {
        name: "Xbox Series S",
        description: "Compacte digitale console voor 1440p gaming",
        rating: 9.6,
        image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d",
        price: 299,
        pros: ["Compact", "Betaalbaar", "Game Pass", "Quick Resume"],
        cons: ["Geen disc drive", "Minder krachtig"],
        stores: [
          {
            name: "Coolblue",
            price: 299,
            link: "https://www.coolblue.nl/product/xbox-series-s"
          },
          {
            name: "Bol.com",
            price: 289,
            link: "https://www.bol.com/nl/p/xbox-series-s"
          }
        ]
      },
      {
        name: "Xbox Wireless Headset",
        description: "Official Xbox headset met spatial audio",
        rating: 9.5,
        image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d",
        price: 99,
        pros: ["Spatial audio", "Bluetooth", "Goede microfoon"],
        cons: ["Plastic build", "Basis EQ"],
        stores: [
          {
            name: "Coolblue",
            price: 99,
            link: "https://www.coolblue.nl/product/xbox-headset"
          },
          {
            name: "Bol.com",
            price: 89,
            link: "https://www.bol.com/nl/p/xbox-headset"
          }
        ]
      },
      {
        name: "Starfield",
        description: "Epische sci-fi RPG van Bethesda",
        rating: 9.4,
        image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d",
        price: 79,
        pros: ["Enorme wereld", "Veel vrijheid", "Mooi verhaal"],
        cons: ["Bugs", "Lange laadtijden"],
        stores: [
          {
            name: "Coolblue",
            price: 79,
            link: "https://www.coolblue.nl/product/starfield"
          },
          {
            name: "Bol.com",
            price: 69,
            link: "https://www.bol.com/nl/p/starfield"
          }
        ]
      },
      {
        name: "Forza Motorsport",
        description: "Next-gen racing simulator",
        rating: 9.3,
        image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d",
        price: 79,
        pros: ["Realistische physics", "Prachtige graphics", "Veel content"],
        cons: ["Steep learning curve", "Online vereist"],
        stores: [
          {
            name: "Coolblue",
            price: 79,
            link: "https://www.coolblue.nl/product/forza-motorsport"
          },
          {
            name: "Bol.com",
            price: 69,
            link: "https://www.bol.com/nl/p/forza-motorsport"
          }
        ]
      },
      {
        name: "Xbox Storage Expansion Card",
        description: "1TB extra snelle opslag voor Series X|S",
        rating: 9.2,
        image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d",
        price: 219,
        pros: ["Snelle laadtijden", "Plug & play", "Portable"],
        cons: ["Zeer duur", "Alleen voor Series X|S"],
        stores: [
          {
            name: "Coolblue",
            price: 219,
            link: "https://www.coolblue.nl/product/xbox-storage"
          },
          {
            name: "Bol.com",
            price: 209,
            link: "https://www.bol.com/nl/p/xbox-storage"
          }
        ]
      },
      {
        name: "Xbox Wireless Controller",
        description: "Standaard controller voor Xbox Series X|S",
        rating: 9.1,
        image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d",
        price: 59,
        pros: ["Vertrouwd design", "Goede d-pad", "Share knop"],
        cons: ["Batterijen nodig", "Basis features"],
        stores: [
          {
            name: "Coolblue",
            price: 59,
            link: "https://www.coolblue.nl/product/xbox-controller"
          },
          {
            name: "Bol.com",
            price: 49,
            link: "https://www.bol.com/nl/p/xbox-controller"
          }
        ]
      },
      {
        name: "Play & Charge Kit",
        description: "Oplaadbare batterij voor Xbox controllers",
        rating: 9.0,
        image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d",
        price: 24,
        pros: ["Oplaadbaar", "Lange batterijduur", "USB-C"],
        cons: ["Prijs", "Één batterij"],
        stores: [
          {
            name: "Coolblue",
            price: 24,
            link: "https://www.coolblue.nl/product/xbox-battery"
          },
          {
            name: "Bol.com",
            price: 19,
            link: "https://www.bol.com/nl/p/xbox-battery"
          }
        ]
      },
      {
        name: "Xbox Media Remote",
        description: "Afstandsbediening voor media content",
        rating: 8.9,
        image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d",
        price: 24,
        pros: ["Verlichte knoppen", "Media controls", "IR blaster"],
        cons: ["Basis functionaliteit", "Batterijen nodig"],
        stores: [
          {
            name: "Coolblue",
            price: 24,
            link: "https://www.coolblue.nl/product/xbox-remote"
          },
          {
            name: "Bol.com",
            price: 19,
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
        price: 399,
        pros: ["4K gaming", "Betere batterij", "Backwards compatible"],
        cons: ["Hogere prijs", "Groot formaat"],
        stores: [
          {
            name: "Coolblue",
            price: 399,
            link: "https://www.coolblue.nl/product/switch-2"
          },
          {
            name: "Bol.com",
            price: 389,
            link: "https://www.bol.com/nl/p/switch-2"
          }
        ]
      },
      {
        name: "The Legend of Zelda: BOTW 2",
        description: "Het langverwachte vervolg op Breath of the Wild",
        rating: 9.7,
        image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e",
        price: 69,
        pros: ["Grote open wereld", "Innovatieve gameplay", "Prachtige graphics"],
        cons: ["Hoge systeemeisen", "DLC prijzig"],
        stores: [
          {
            name: "Coolblue",
            price: 69,
            link: "https://www.coolblue.nl/product/zelda-botw2"
          },
          {
            name: "Bol.com",
            price: 59,
            link: "https://www.bol.com/nl/p/zelda-botw2"
          }
        ]
      },
      {
        name: "Switch Pro Controller",
        description: "Premium controller voor de Nintendo Switch",
        rating: 9.6,
        image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e",
        price: 69,
        pros: ["Comfortabel", "Lange batterijduur", "Amiibo support"],
        cons: ["Hoge prijs", "Geen analoge triggers"],
        stores: [
          {
            name: "Coolblue",
            price: 69,
            link: "https://www.coolblue.nl/product/switch-pro"
          },
          {
            name: "Bol.com",
            price: 59,
            link: "https://www.bol.com/nl/p/switch-pro"
          }
        ]
      },
      {
        name: "Mario Kart 9",
        description: "Nieuwe Mario Kart met next-gen features",
        rating: 9.5,
        image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e",
        price: 59,
        pros: ["Nieuwe banen", "Online multiplayer", "4K graphics"],
        cons: ["DLC nodig", "Weinig innovatie"],
        stores: [
          {
            name: "Coolblue",
            price: 59,
            link: "https://www.coolblue.nl/product/mario-kart-9"
          },
          {
            name: "Bol.com",
            price: 49,
            link: "https://www.bol.com/nl/p/mario-kart-9"
          }
        ]
      },
      {
        name: "Nintendo Switch Dock 2",
        description: "Nieuwe dock met 4K output en ethernet",
        rating: 9.4,
        image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e",
        price: 99,
        pros: ["4K output", "Meer poorten", "Betere koeling"],
        cons: ["Hoge prijs", "Groot formaat"],
        stores: [
          {
            name: "Coolblue",
            price: 99,
            link: "https://www.coolblue.nl/product/switch-dock-2"
          },
          {
            name: "Bol.com",
            price: 89,
            link: "https://www.bol.com/nl/p/switch-dock-2"
          }
        ]
      },
      {
        name: "Joy-Con Pair",
        description: "Set van twee Joy-Con controllers",
        rating: 9.3,
        image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e",
        price: 79,
        pros: ["Veelzijdig", "HD rumble", "Motion controls"],
        cons: ["Drift issues", "Hoge prijs"],
        stores: [
          {
            name: "Coolblue",
            price: 79,
            link: "https://www.coolblue.nl/product/joy-con"
          },
          {
            name: "Bol.com",
            price: 69,
            link: "https://www.bol.com/nl/p/joy-con"
          }
        ]
      },
      {
        name: "Nintendo Switch Online + Expansion Pack",
        description: "Online gaming service met extra content",
        rating: 9.2,
        image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e",
        price: 39,
        pros: ["Retro games", "Online play", "Cloud saves"],
        cons: ["Jaarlijks", "Beperkte features"],
        stores: [
          {
            name: "Coolblue",
            price: 39,
            link: "https://www.coolblue.nl/product/switch-online"
          },
          {
            name: "Bol.com",
            price: 35,
            link: "https://www.bol.com/nl/p/switch-online"
          }
        ]
      },
      {
        name: "Nintendo Switch Case",
        description: "Premium beschermhoes voor de Switch",
        rating: 9.1,
        image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e",
        price: 24,
        pros: ["Stevig", "Kaarthouders", "Standaard"],
        cons: ["Basis design", "Beperkte ruimte"],
        stores: [
          {
            name: "Coolblue",
            price: 24,
            link: "https://www.coolblue.nl/product/switch-case"
          },
          {
            name: "Bol.com",
            price: 19,
            link: "https://www.bol.com/nl/p/switch-case"
          }
        ]
      },
      {
        name: "amiibo",
        description: "Interactieve figuren voor Nintendo games",
        rating: 9.0,
        image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e",
        price: 14,
        pros: ["Collectible", "In-game content", "Hoge kwaliteit"],
        cons: ["Prijzig verzamelen", "Beperkte functionaliteit"],
        stores: [
          {
            name: "Coolblue",
            price: 14,
            link: "https://www.coolblue.nl/product/amiibo"
          },
          {
            name: "Bol.com",
            price: 12,
            link: "https://www.bol.com/nl/p/amiibo"
          }
        ]
      },
      {
        name: "Nintendo Switch Screen Protector",
        description: "Tempered glass bescherming voor het scherm",
        rating: 8.9,
        image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e",
        price: 9,
        pros: ["Krasbestendig", "Makkelijk aan te brengen", "Helder"],
        cons: ["Basis accessoire", "Moet vervangen worden"],
        stores: [
          {
            name: "Coolblue",
            price: 9,
            link: "https://www.coolblue.nl/product/switch-protector"
          },
          {
            name: "Bol.com",
            price: 7,
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
        name: "MacBook Pro 16 M3 Max",
        description: "De krachtigste MacBook ooit met M3 Max chip",
        rating: 9.8,
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca4",
        price: 3499,
        pros: ["M3 Max chip", "Mini-LED display", "Lange batterijduur"],
        cons: ["Zeer hoge prijs", "Zwaar"],
        stores: [
          {
            name: "Coolblue",
            price: 3499,
            link: "https://www.coolblue.nl/product/macbook-pro-16-m3"
          },
          {
            name: "Bol.com",
            price: 3489,
            link: "https://www.bol.com/nl/p/macbook-pro-16-m3"
          }
        ]
      },
      {
        name: "Dell XPS 16 (2025)",
        description: "Premium Windows laptop met OLED display",
        rating: 9.7,
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca4",
        price: 2499,
        pros: ["4K OLED", "RTX 4070", "Premium build"],
        cons: ["Prijzig", "Warm onder load"],
        stores: [
          {
            name: "Coolblue",
            price: 2499,
            link: "https://www.coolblue.nl/product/dell-xps-16"
          },
          {
            name: "Bol.com",
            price: 2489,
            link: "https://www.bol.com/nl/p/dell-xps-16"
          }
        ]
      },
      {
        name: "Lenovo ThinkPad X1 Carbon Gen 12",
        description: "Zakelijke ultrabook met uitstekende bouwkwaliteit",
        rating: 9.6,
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca4",
        price: 1999,
        pros: ["Licht", "Geweldig toetsenbord", "Lange batterijduur"],
        cons: ["Prijzig", "Beperkte GPU"],
        stores: [
          {
            name: "Coolblue",
            price: 1999,
            link: "https://www.coolblue.nl/product/thinkpad-x1"
          },
          {
            name: "Bol.com",
            price: 1989,
            link: "https://www.bol.com/nl/p/thinkpad-x1"
          }
        ]
      },
      {
        name: "ASUS ROG Zephyrus G16",
        description: "Krachtige gaming laptop met Mini-LED",
        rating: 9.5,
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca4",
        price: 2299,
        pros: ["RTX 4080", "Mini-LED", "Uitstekende koeling"],
        cons: ["Korte batterijduur", "Luid onder load"],
        stores: [
          {
            name: "Coolblue",
            price: 2299,
            link: "https://www.coolblue.nl/product/asus-rog-g16"
          },
          {
            name: "Bol.com",
            price: 2289,
            link: "https://www.bol.com/nl/p/asus-rog-g16"
          }
        ]
      },
      {
        name: "MacBook Air 15 M3",
        description: "Dunne en lichte laptop met M3 chip",
        rating: 9.4,
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca4",
        price: 1499,
        pros: ["M3 chip", "Fanless design", "Groot display"],
        cons: ["Beperkte poorten", "Prijzig"],
        stores: [
          {
            name: "Coolblue",
            price: 1499,
            link: "https://www.coolblue.nl/product/macbook-air-15"
          },
          {
            name: "Bol.com",
            price: 1489,
            link: "https://www.bol.com/nl/p/macbook-air-15"
          }
        ]
      },
      {
        name: "HP Spectre x360 16",
        description: "Premium 2-in-1 laptop met OLED",
        rating: 9.3,
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca4",
        price: 1799,
        pros: ["Veelzijdig", "OLED display", "Pen support"],
        cons: ["Zwaar als tablet", "Prijzig"],
        stores: [
          {
            name: "Coolblue",
            price: 1799,
            link: "https://www.coolblue.nl/product/hp-spectre-16"
          },
          {
            name: "Bol.com",
            price: 1789,
            link: "https://www.bol.com/nl/p/hp-spectre-16"
          }
        ]
      },
      {
        name: "Acer Swift Edge 16",
        description: "Ultralichte laptop met OLED display",
        rating: 9.2,
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca4",
        price: 1299,
        pros: ["Zeer licht", "OLED", "Goede prijs"],
        cons: ["Plastic chassis", "Basis speakers"],
        stores: [
          {
            name: "Coolblue",
            price: 1299,
            link: "https://www.coolblue.nl/product/acer-swift-edge"
          },
          {
            name: "Bol.com",
            price: 1289,
            link: "https://www.bol.com/nl/p/acer-swift-edge"
          }
        ]
      },
      {
        name: "MSI Stealth 16 Studio",
        description: "Creatieve laptop met krachtige GPU",
        rating: 9.1,
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca4",
        price: 1999,
        pros: ["RTX 4070", "4K display", "Stil"],
        cons: ["Duur", "Matige batterij"],
        stores: [
          {
            name: "Coolblue",
            price: 1999,
            link: "https://www.coolblue.nl/product/msi-stealth-16"
          },
          {
            name: "Bol.com",
            price: 1989,
            link: "https://www.bol.com/nl/p/msi-stealth-16"
          }
        ]
      },
      {
        name: "Lenovo Legion Pro 7",
        description: "High-end gaming laptop",
        rating: 9.0,
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca4",
        price: 2499,
        pros: ["RTX 4090", "165Hz display", "Uitstekende koeling"],
        cons: ["Zwaar", "Korte batterijduur"],
        stores: [
          {
            name: "Coolblue",
            price: 2499,
            link: "https://www.coolblue.nl/product/legion-pro-7"
          },
          {
            name: "Bol.com",
            price: 2489,
            link: "https://www.bol.com/nl/p/legion-pro-7"
          }
        ]
      },
      {
        name: "ASUS Zenbook 14",
        description: "Compacte laptop met OLED display",
        rating: 8.9,
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca4",
        price: 999,
        pros: ["OLED", "Licht", "Betaalbaar"],
        cons: ["Integrated GPU", "Beperkte poorten"],
        stores: [
          {
            name: "Coolblue",
            price: 999,
            link: "https://www.coolblue.nl/product/zenbook-14"
          },
          {
            name: "Bol.com",
            price: 989,
            link: "https://www.bol.com/nl/p/zenbook-14"
          }
        ]
      }
    ]
  },
  desktops: {
    title: "Top 10 Beste Desktop PCs van 2025",
    description: "De populairste desktop computers gerangschikt op prestaties en gebruikerservaringen",
    products: [
      {
        name: "Mac Studio M3 Ultra",
        description: "De krachtigste Mac desktop voor professionals",
        rating: 9.8,
        image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5",
        price: 4999,
        pros: ["M3 Ultra chip", "Tot 192GB RAM", "Stil"],
        cons: ["Zeer duur", "Niet upgradeable"],
        stores: [
          {
            name: "Coolblue",
            price: 4999,
            link: "https://www.coolblue.nl/product/mac-studio"
          },
          {
            name: "Bol.com",
            price: 4989,
            link: "https://www.bol.com/nl/p/mac-studio"
          }
        ]
      },
      {
        name: "HP Omen 45L",
        description: "High-end gaming desktop met waterkoeking",
        rating: 9.7,
        image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5",
        price: 3499,
        pros: ["RTX 4090", "Cryo cooling", "Makkelijk upgraden"],
        cons: ["Groot formaat", "Prijzig"],
        stores: [
          {
            name: "Coolblue",
            price: 3499,
            link: "https://www.coolblue.nl/product/hp-omen-45l"
          },
          {
            name: "Bol.com",
            price: 3489,
            link: "https://www.bol.com/nl/p/hp-omen-45l"
          }
        ]
      },
      {
        name: "Corsair One i300",
        description: "Compacte high-end gaming PC",
        rating: 9.6,
        image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5",
        price: 4299,
        pros: ["Compact", "Waterkoeling", "RTX 4080"],
        cons: ["Duur", "Beperkt upgradebaar"],
        stores: [
          {
            name: "Coolblue",
            price: 4299,
            link: "https://www.coolblue.nl/product/corsair-one"
          },
          {
            name: "Bol.com",
            price: 4289,
            link: "https://www.bol.com/nl/p/corsair-one"
          }
        ]
      },
      {
        name: "MSI MEG Aegis Ti6",
        description: "Futuristisch gaming desktop",
        rating: 9.5,
        image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5",
        price: 3999,
        pros: ["Uniek design", "RTX 4090", "RGB"],
        cons: ["Zeer groot", "Prijzig"],
        stores: [
          {
            name: "Coolblue",
            price: 3999,
            link: "https://www.coolblue.nl/product/msi-aegis"
          },
          {
            name: "Bol.com",
            price: 3989,
            link: "https://www.bol.com/nl/p/msi-aegis"
          }
        ]
      },
      {
        name: "iMac M3 24-inch",
        description: "All-in-one desktop met M3 chip",
        rating: 9.4,
        image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5",
        price: 1699,
        pros: ["Slank design", "4.5K display", "M3 chip"],
        cons: ["Niet upgradeable", "Beperkte poorten"],
        stores: [
          {
            name: "Coolblue",
            price: 1699,
            link: "https://www.coolblue.nl/product/imac-24"
          },
          {
            name: "Bol.com",
            price: 1689,
            link: "https://www.bol.com/nl/p/imac-24"
          }
        ]
      },
      {
        name: "Lenovo Legion Tower 7",
        description: "Krachtige gaming desktop",
        rating: 9.3,
        image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5",
        price: 2999,
        pros: ["RTX 4080", "Goede koeling", "Tool-less design"],
        cons: ["Groot", "Basic RGB"],
        stores: [
          {
            name: "Coolblue",
            price: 2999,
            link: "https://www.coolblue.nl/product/legion-tower"
          },
          {
            name: "Bol.com",
            price: 2989,
            link: "https://www.bol.com/nl/p/legion-tower"
          }
        ]
      },
      {
        name: "Dell XPS Desktop",
        description: "Stijlvolle desktop voor werk en gaming",
        rating: 9.2,
        image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5",
        price: 1999,
        pros: ["Compact", "RTX 4070", "Stil"],
        cons: ["Beperkte RGB", "Prijzig"],
        stores: [
          {
            name: "Coolblue",
            price: 1999,
            link: "https://www.coolblue.nl/product/xps-desktop"
          },
          {
            name: "Bol.com",
            price: 1989,
            link: "https://www.bol.com/nl/p/xps-desktop"
          }
        ]
      },
      {
        name: "ASUS ROG Strix G35",
        description: "Gaming desktop met uniek design",
        rating: 9.1,
        image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5",
        price: 2499,
        pros: ["RTX 4070 Ti", "Goede airflow", "RGB"],
        cons: ["Groot formaat", "Luid onder load"],
        stores: [
          {
            name: "Coolblue",
            price: 2499,
            link: "https://www.coolblue.nl/product/rog-strix"
          },
          {
            name: "Bol.com",
            price: 2489,
            link: "https://www.bol.com/nl/p/rog-strix"
          }
        ]
      },
      {
        name: "HP Pavilion Gaming",
        description: "Budget-vriendelijke gaming PC",
        rating: 9.0,
        image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5",
        price: 1299,
        pros: ["RTX 4060", "Compact", "Betaalbaar"],
        cons: ["Basic koeling", "Beperkt RGB"],
        stores: [
          {
            name: "Coolblue",
            price: 1299,
            link: "https://www.coolblue.nl/product/pavilion-gaming"
          },
          {
            name: "Bol.com",
            price: 1289,
            link: "https://www.bol.com/nl/p/pavilion-gaming"
          }
        ]
      },
      {
        name: "Acer Aspire TC",
        description: "Betaalbare desktop voor thuisgebruik",
        rating: 8.9,
        image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5",
        price: 699,
        pros: ["Goede prijs", "Stil", "Compact"],
        cons: ["Integrated graphics", "Basis design"],
        stores: [
          {
            name: "Coolblue",
            price: 699,
            link: "https://www.coolblue.nl/product/aspire-tc"
          },
          {
            name: "Bol.com",
            price: 689,
            link: "https://www.bol.com/nl/p/aspire-tc"
          }
        ]
      }
    ]
  },
  components: {
    title: "Top 10 Beste PC Componenten van 2025",
    description: "De populairste PC onderdelen gerangschikt op prestaties en prijs-kwaliteit verhouding",
    products: [
      {
        name: "NVIDIA GeForce RTX 5090",
        description: "De snelste gaming GPU ter wereld",
        rating: 9.8,
        image: "https://images.unsplash.com/photo-1591488320449-011701bb6704",
        price: 1999,
        pros: ["Ongekende prestaties", "Ray tracing", "DLSS 4.0"],
        cons: ["Zeer duur", "Hoog stroomverbruik"],
        stores: [
          {
            name: "Coolblue",
            price: 1999,
            link: "https://www.coolblue.nl/product/rtx-5090"
          },
          {
            name: "Bol.com",
            price: 1989,
            link: "https://www.bol.com/nl/p/rtx-5090"
          }
        ]
      },
      {
        name: "Intel Core i9-15900K",
        description: "High-end desktop processor",
        rating: 9.7,
        image: "https://images.unsplash.com/photo-1591488320449-011701bb6704",
        price: 699,
        pros: ["32 cores", "Hoge kloksnelheid", "PCIe 5.0"],
        cons: ["Prijzig", "Stroomverbruik"],
        stores: [
          {
            name: "Coolblue",
            price: 699,
            link: "https://www.coolblue.nl/product/i9-15900k"
          },
          {
            name: "Bol.com",
            price: 689,
            link: "https://www.bol.com/nl/p/i9-15900k"
          }
        ]
      },
      {
        name: "Samsung 990 Pro 4TB",
        description: "Ultra-snelle PCIe 5.0 NVMe SSD",
        rating: 9.6,
        image: "https://images.unsplash.com/photo-1591488320449-011701bb6704",
        price: 499,
        pros: ["13GB/s reads", "Lange levensduur", "Heatsink"],
        cons: ["Hoge prijs", "Overkill voor gaming"],
        stores: [
          {
            name: "Coolblue",
            price: 499,
            link: "https://www.coolblue.nl/product/990-pro"
          },
          {
            name: "Bol.com",
            price: 489,
            link: "https://www.bol.com/nl/p/990-pro"
          }
        ]
      },
      {
        name: "AMD Ryzen 9 8950X",
        description: "High-end AMD processor",
        rating: 9.5,
        image: "https://images.unsplash.com/photo-1591488320449-011701bb6704",
        price: 649,
        pros: ["24 cores", "Efficient", "AM5 socket"],
        cons: ["Dure moederborden", "Prijzig"],
        stores: [
          {
            name: "Coolblue",
            price: 649,
            link: "https://www.coolblue.nl/product/ryzen-8950x"
          },
          {
            name: "Bol.com",
            price: 639,
            link: "https://www.bol.com/nl/p/ryzen-8950x"
          }
        ]
      },
      {
        name: "ASUS ROG Maximus Z890 Hero",
        description: "High-end Intel moederbord",
        rating: 9.4,
        image: "https://images.unsplash.com/photo-1591488320449-011701bb6704",
        price: 799,
        pros: ["PCIe 5.0", "WiFi 7", "Uitstekende VRMs"],
        cons: ["Zeer duur", "Overkill features"],
        stores: [
          {
            name: "Coolblue",
            price: 799,
            link: "https://www.coolblue.nl/product/maximus-hero"
          },
          {
            name: "Bol.com",
            price: 789,
            link: "https://www.bol.com/nl/p/maximus-hero"
          }
        ]
      },
      {
        name: "Corsair Dominator Platinum RGB",
        description: "DDR5-8000 RAM kit (32GB)",
        rating: 9.3,
        image: "https://images.unsplash.com/photo-1591488320449-011701bb6704",
        price: 399,
        pros: ["Extreme snelheid", "RGB", "Goede koeling"],
        cons: ["Zeer duur", "Overkill"],
        stores: [
          {
            name: "Coolblue",
            price: 399,
            link: "https://www.coolblue.nl/product/dominator-ddr5"
          },
          {
            name: "Bol.com",
            price: 389,
            link: "https://www.bol.com/nl/p/dominator-ddr5"
          }
        ]
      },
      {
        name: "be quiet! Dark Power 13",
        description: "1500W ATX 3.0 voeding",
        rating: 9.2,
        image: "https://images.unsplash.com/photo-1591488320449-011701bb6704",
        price: 399,
        pros: ["Titanium efficiency", "Stil", "Modulair"],
        cons: ["Hoge prijs", "Overkill voor veel builds"],
        stores: [
          {
            name: "Coolblue",
            price: 399,
            link: "https://www.coolblue.nl/product/dark-power"
          },
          {
            name: "Bol.com",
            price: 389,
            link: "https://www.bol.com/nl/p/dark-power"
          }
        ]
      },
      {
        name: "Lian Li O11 Dynamic 3",
        description: "Premium PC behuizing",
        rating: 9.1,
        image: "https://images.unsplash.com/photo-1591488320449-011701bb6704",
        price: 199,
        pros: ["Uitstekende airflow", "Tool-less", "Mooi design"],
        cons: ["Prijzig", "Groot formaat"],
        stores: [
          {
            name: "Coolblue",
            price: 199,
            link: "https://www.coolblue.nl/product/o11-dynamic"
          },
          {
            name: "Bol.com",
            price: 189,
            link: "https://www.bol.com/nl/p/o11-dynamic"
          }
        ]
      },
      {
        name: "ARCTIC Liquid Freezer III",
        description: "360mm AIO waterkoeling",
        rating: 9.0,
        image: "https://images.unsplash.com/photo-1591488320449-011701bb6704",
        price: 179,
        pros: ["Uitstekende koeling", "Stil", "Goede prijs"],
        cons: ["Groot radiator", "Basic RGB"],
        stores: [
          {
            name: "Coolblue",
            price: 179,
            link: "https://www.coolblue.nl/product/liquid-freezer"
          },
          {
            name: "Bol.com",
            price: 169,
            link: "https://www.bol.com/nl/p/liquid-freezer"
          }
        ]
      },
      {
        name: "Noctua NH-D15 chromax.black",
        description: "Premium CPU luchtkoeler",
        rating: 8.9,
        image: "https://images.unsplash.com/photo-1591488320449-011701bb6704",
        price: 109,
        pros: ["Uitstekende koeling", "Zeer stil", "Duurzaam"],
        cons: ["Groot formaat", "RAM clearance"],
        stores: [
          {
            name: "Coolblue",
            price: 109,
            link: "https://www.coolblue.nl/product/nh-d15"
          },
          {
            name: "Bol.com",
            price: 99,
            link: "https://www.bol.com/nl/p/nh-d15"
          }
        ]
      }
    ]
  },
  gaming_monitors: {
    title: "Top 10 Beste Gaming Monitoren van 2025",
    description: "De populairste gaming monitoren gerangschikt op prestaties en gebruikerservaringen",
    products: [
      {
        name: "ASUS ROG Swift PG32UCDM",
        description: "Premium 32-inch 4K Mini-LED gaming monitor",
        rating: 9.8,
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf",
        price: 1299,
        pros: ["4K 240Hz", "Mini-LED", "HDR 1600", "G-Sync Ultimate"],
        cons: ["Zeer duur", "Groot formaat"],
        stores: [
          {
            name: "Coolblue",
            price: 1299,
            link: "https://www.coolblue.nl/product/rog-swift-pg32ucdm"
          },
          {
            name: "Bol.com",
            price: 1289,
            link: "https://www.bol.com/nl/p/rog-swift-pg32ucdm"
          }
        ]
      },
      {
        name: "Samsung Odyssey OLED G9",
        description: "49-inch ultrawide OLED gaming monitor",
        rating: 9.7,
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf",
        price: 1499,
        pros: ["5120x1440", "OLED", "240Hz", "Perfect blacks"],
        cons: ["Zeer duur", "Enorm formaat"],
        stores: [
          {
            name: "Coolblue",
            price: 1499,
            link: "https://www.coolblue.nl/product/odyssey-oled-g9"
          },
          {
            name: "Bol.com",
            price: 1489,
            link: "https://www.bol.com/nl/p/odyssey-oled-g9"
          }
        ]
      },
      {
        name: "LG 32GR93U",
        description: "32-inch 4K gaming monitor met OLED",
        rating: 9.6,
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf",
        price: 999,
        pros: ["4K 144Hz", "OLED", "G-Sync", "HDR"],
        cons: ["Prijzig", "Burn-in risico"],
        stores: [
          {
            name: "Coolblue",
            price: 999,
            link: "https://www.coolblue.nl/product/lg-32gr93u"
          },
          {
            name: "Bol.com",
            price: 989,
            link: "https://www.bol.com/nl/p/lg-32gr93u"
          }
        ]
      },
      {
        name: "Alienware AW2725DF",
        description: "27-inch QD-OLED gaming monitor",
        rating: 9.5,
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf",
        price: 899,
        pros: ["1440p 360Hz", "QD-OLED", "G-Sync"],
        cons: ["Hoge prijs", "Beperkte HDR"],
        stores: [
          {
            name: "Coolblue",
            price: 899,
            link: "https://www.coolblue.nl/product/alienware-aw2725df"
          },
          {
            name: "Bol.com",
            price: 889,
            link: "https://www.bol.com/nl/p/alienware-aw2725df"
          }
        ]
      },
      {
        name: "MSI MPG 321URX",
        description: "32-inch 4K gaming monitor",
        rating: 9.4,
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf",
        price: 799,
        pros: ["4K 160Hz", "HDR 600", "KVM switch"],
        cons: ["IPS glow", "Groot formaat"],
        stores: [
          {
            name: "Coolblue",
            price: 799,
            link: "https://www.coolblue.nl/product/msi-mpg-321urx"
          },
          {
            name: "Bol.com",
            price: 789,
            link: "https://www.bol.com/nl/p/msi-mpg-321urx"
          }
        ]
      },
      {
        name: "AOC 27G3X",
        description: "27-inch gaming monitor met hoge refresh rate",
        rating: 9.3,
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf",
        price: 299,
        pros: ["1080p 280Hz", "Adaptive Sync", "Goede prijs"],
        cons: ["Basis HDR", "1080p op 27 inch"],
        stores: [
          {
            name: "Coolblue",
            price: 299,
            link: "https://www.coolblue.nl/product/aoc-27g3x"
          },
          {
            name: "Bol.com",
            price: 289,
            link: "https://www.bol.com/nl/p/aoc-27g3x"
          }
        ]
      },
      {
        name: "ViewSonic XG271QG",
        description: "27-inch 1440p gaming monitor",
        rating: 9.2,
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf",
        price: 499,
        pros: ["1440p 240Hz", "IPS", "G-Sync"],
        cons: ["Matige HDR", "Prijzig"],
        stores: [
          {
            name: "Coolblue",
            price: 499,
            link: "https://www.coolblue.nl/product/viewsonic-xg271qg"
          },
          {
            name: "Bol.com",
            price: 489,
            link: "https://www.bol.com/nl/p/viewsonic-xg271qg"
          }
        ]
      },
      {
        name: "BenQ MOBIUZ EX2710R",
        description: "27-inch curved gaming monitor",
        rating: 9.1,
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf",
        price: 399,
        pros: ["1440p 165Hz", "Curved", "HDR"],
        cons: ["VA panel", "Basic design"],
        stores: [
          {
            name: "Coolblue",
            price: 399,
            link: "https://www.coolblue.nl/product/benq-ex2710r"
          },
          {
            name: "Bol.com",
            price: 389,
            link: "https://www.bol.com/nl/p/benq-ex2710r"
          }
        ]
      },
      {
        name: "Gigabyte M27Q X",
        description: "27-inch gaming monitor met KVM",
        rating: 9.0,
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf",
        price: 449,
        pros: ["1440p 240Hz", "KVM switch", "Goede prijs"],
        cons: ["Basic design", "Matige HDR"],
        stores: [
          {
            name: "Coolblue",
            price: 449,
            link: "https://www.coolblue.nl/product/gigabyte-m27q-x"
          },
          {
            name: "Bol.com",
            price: 439,
            link: "https://www.bol.com/nl/p/gigabyte-m27q-x"
          }
        ]
      },
      {
        name: "ASUS TUF Gaming VG259QM",
        description: "25-inch esports gaming monitor",
        rating: 8.9,
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf",
        price: 299,
        pros: ["1080p 280Hz", "ELMB-Sync", "Betaalbaar"],
        cons: ["Klein scherm", "Basic HDR"],
        stores: [
          {
            name: "Coolblue",
            price: 299,
            link: "https://www.coolblue.nl/product/asus-vg259qm"
          },
          {
            name: "Bol.com",
            price: 289,
            link: "https://www.bol.com/nl/p/asus-vg259qm"
          }
        ]
      }
    ]
  },
  professional_monitors: {
    title: "Top 10 Beste Professionele Monitoren van 2025",
    description: "De populairste monitoren voor professionals gerangschikt op beeldkwaliteit en kleurnauwkeurigheid",
    products: [
      {
        name: "Apple Pro Display XDR 2",
        description: "32-inch 6K professionele monitor",
        rating: 9.8,
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf",
        price: 5999,
        pros: ["6K resolutie", "Mini-LED", "Perfect kleurbereik"],
        cons: ["Extreem duur", "Stand apart verkrijgbaar"],
        stores: [
          {
            name: "Coolblue",
            price: 5999,
            link: "https://www.coolblue.nl/product/pro-display-xdr-2"
          },
          {
            name: "Bol.com",
            price: 5989,
            link: "https://www.bol.com/nl/p/pro-display-xdr-2"
          }
        ]
      },
      {
        name: "ASUS ProArt PA32UCR",
        description: "32-inch 4K professionele monitor",
        rating: 9.7,
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf",
        price: 2999,
        pros: ["4K Mini-LED", "Calman verified", "Thunderbolt 4"],
        cons: ["Zeer duur", "Complex menu"],
        stores: [
          {
            name: "Coolblue",
            price: 2999,
            link: "https://www.coolblue.nl/product/proart-pa32ucr"
          },
          {
            name: "Bol.com",
            price: 2989,
            link: "https://www.bol.com/nl/p/proart-pa32ucr"
          }
        ]
      },
      {
        name: "Dell UltraSharp U4024QW",
        description: "40-inch ultrawide professionele monitor",
        rating: 9.6,
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf",
        price: 2199,
        pros: ["5K2K resolutie", "Thunderbolt 4", "KVM"],
        cons: ["Hoge prijs", "Groot formaat"],
        stores: [
          {
            name: "Coolblue",
            price: 2199,
            link: "https://www.coolblue.nl/product/dell-u4024qw"
          },
          {
            name: "Bol.com",
            price: 2189,
            link: "https://www.bol.com/nl/p/dell-u4024qw"
          }
        ]
      },
      {
        name: "LG UltraFine 32EP950",
        description: "32-inch 4K OLED monitor",
        rating: 9.5,
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf",
        price: 2999,
        pros: ["OLED", "Perfect zwart", "99% Adobe RGB"],
        cons: ["Zeer duur", "Burn-in risico"],
        stores: [
          {
            name: "Coolblue",
            price: 2999,
            link: "https://www.coolblue.nl/product/lg-32ep950"
          },
          {
            name: "Bol.com",
            price: 2989,
            link: "https://www.bol.com/nl/p/lg-32ep950"
          }
        ]
      },
      {
        name: "BenQ SW321C",
        description: "32-inch 4K monitor voor fotografen",
        rating: 9.4,
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf",
        price: 1999,
        pros: ["4K IPS", "Hardware kalibratie", "16-bit 3D LUT"],
        cons: ["Prijzig", "Basis HDR"],
        stores: [
          {
            name: "Coolblue",
            price: 1999,
            link: "https://www.coolblue.nl/product/benq-sw321c"
          },
          {
            name: "Bol.com",
            price: 1989,
            link: "https://www.bol.com/nl/p/benq-sw321c"
          }
        ]
      },
      {
        name: "ViewSonic ColorPro VP2786-4K",
        description: "27-inch 4K monitor voor creators",
        rating: 9.3,
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf",
        price: 1099,
        pros: ["4K", "Pantone validated", "USB-C"],
        cons: ["Basic HDR", "Prijzig"],
        stores: [
          {
            name: "Coolblue",
            price: 1099,
            link: "https://www.coolblue.nl/product/viewsonic-vp2786"
          },
          {
            name: "Bol.com",
            price: 1089,
            link: "https://www.bol.com/nl/p/viewsonic-vp2786"
          }
        ]
      },
      {
        name: "Philips 279P1",
        description: "27-inch 4K USB-C monitor",
        rating: 9.2,
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf",
        price: 599,
        pros: ["4K IPS", "USB-C", "Goede prijs"],
        cons: ["Basic HDR", "Basis design"],
        stores: [
          {
            name: "Coolblue",
            price: 599,
            link: "https://www.coolblue.nl/product/philips-279p1"
          },
          {
            name: "Bol.com",
            price: 589,
            link: "https://www.bol.com/nl/p/philips-279p1"
          }
        ]
      },
      {
        name: "Dell P2724DE",
        description: "27-inch QHD USB-C monitor",
        rating: 9.1,
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf",
        price: 449,
        pros: ["QHD", "USB-C", "Ergonomisch"],
        cons: ["Geen HDR", "Basic speakers"],
        stores: [
          {
            name: "Coolblue",
            price: 449,
            link: "https://www.coolblue.nl/product/dell-p2724de"
          },
          {
            name: "Bol.com",
            price: 439,
            link: "https://www.bol.com/nl/p/dell-p2724de"
          }
        ]
      },
      {
        name: "HP Z27k G3",
        description: "27-inch 4K USB-C monitor",
        rating: 9.0,
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf",
        price: 699,
        pros: ["4K", "USB-C", "Factory gekalibreerd"],
        cons: ["Prijzig", "Basic HDR"],
        stores: [
          {
            name: "Coolblue",
            price: 699,
            link: "https://www.coolblue.nl/product/hp-z27k"
          },
          {
            name: "Bol.com",
            price: 689,
            link: "https://www.bol.com/nl/p/hp-z27k"
          }
        ]
      },
      {
        name: "ASUS ProArt PA278CV",
        description: "27-inch professionele monitor",
        rating: 8.9,
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf",
        price: 399,
        pros: ["QHD", "100% sRGB", "USB-C"],
        cons: ["Geen HDR", "Basic design"],
        stores: [
          {
            name: "Coolblue",
            price: 399,
            link: "https://www.coolblue.nl/product/proart-pa278cv"
          },
          {
            name: "Bol.com",
            price: 389,
            link: "https://www.bol.com/nl/p/proart-pa278cv"
          }
        ]
      }
    ]
  },
  budget_monitors: {
    title: "Top 10 Beste Budget Monitoren van 2025",
    description: "De populairste betaalbare monitoren gerangschikt op prijs-kwaliteit verhouding",
    products: [
      {
        name: "AOC 24G2SP",
        description: "24-inch gaming monitor",
        rating: 9.4,
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf",
        price: 169,
        pros: ["144Hz", "IPS", "Adaptive Sync"],
        cons: ["1080p", "Basic HDR"],
        stores: [
          {
            name: "Coolblue",
            price: 169,
            link: "https://www.coolblue.nl/product/aoc-24g2sp"
          },
          {
            name: "Bol.com",
            price: 159,
            link: "https://www.bol.com/nl/p/aoc-24g2sp"
          }
        ]
      },
      {
        name: "Samsung S27A336",
        description: "27-inch IPS monitor",
        rating: 9.3,
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf",
        price: 149,
        pros: ["IPS panel", "75Hz", "AMD FreeSync"],
        cons: ["1080p op 27 inch", "Basis stand"],
        stores: [
          {
            name: "Coolblue",
            price: 149,
            link: "https://www.coolblue.nl/product/samsung-s27a336"
          },
          {
            name: "Bol.com",
            price: 139,
            link: "https://www.bol.com/nl/p/samsung-s27a336"
          }
        ]
      },
      {
        name: "LG 24GN60R",
        description: "24-inch gaming monitor",
        rating: 9.2,
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf",
        price: 179,
        pros: ["144Hz", "1ms response", "FreeSync"],
        cons: ["1080p", "TN panel"],
        stores: [
          {
            name: "Coolblue",
            price: 179,
            link: "https://www.coolblue.nl/product/lg-24gn60r"
          },
          {
            name: "Bol.com",
            price: 169,
            link: "https://www.bol.com/nl/p/lg-24gn60r"
          }
        ]
      },
      {
        name: "Philips 242V8A",
        description: "24-inch IPS monitor",
        rating: 9.1,
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf",
        price: 129,
        pros: ["IPS", "75Hz", "Ingebouwde speakers"],
        cons: ["1080p", "Basic design"],
        stores: [
          {
            name: "Coolblue",
            price: 129,
            link: "https://www.coolblue.nl/product/philips-242v8a"
          },
          {
            name: "Bol.com",
            price: 119,
            link: "https://www.bol.com/nl/p/philips-242v8a"
          }
        ]
      },
      {
        name: "ASUS VA24DQ",
        description: "24-inch kantoor monitor",
        rating: 9.0,
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf",
        price: 139,
        pros: ["IPS", "75Hz", "Eye Care"],
        cons: ["1080p", "Basis features"],
        stores: [
          {
            name: "Coolblue",
            price: 139,
            link: "https://www.coolblue.nl/product/asus-va24dq"
          },
          {
            name: "Bol.com",
            price: 129,
            link: "https://www.bol.com/nl/p/asus-va24dq"
          }
        ]
      },
      {
        name: "BenQ GW2475H",
        description: "24-inch IPS monitor",
        rating: 8.9,
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf",
        price: 119,
        pros: ["IPS", "Flicker-free", "Eye Care"],
        cons: ["60Hz", "Geen VESA"],
        stores: [
          {
            name: "Coolblue",
            price: 119,
            link: "https://www.coolblue.nl/product/benq-gw2475h"
          },
          {
            name: "Bol.com",
            price: 109,
            link: "https://www.bol.com/nl/p/benq-gw2475h"
          }
        ]
      },
      {
        name: "iiyama ProLite E2483HSU-B5",
        description: "24-inch gaming monitor",
        rating: 8.8,
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf",
        price: 149,
        pros: ["75Hz", "FreeSync", "USB hub"],
        cons: ["TN panel", "Basic design"],
        stores: [
          {
            name: "Coolblue",
            price: 149,
            link: "https://www.coolblue.nl/product/iiyama-e2483hsu"
          },
          {
            name: "Bol.com",
            price: 139,
            link: "https://www.bol.com/nl/p/iiyama-e2483hsu"
          }
        ]
      },
      {
        name: "ViewSonic VA2432-H",
        description: "24-inch IPS monitor",
        rating: 8.7,
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf",
        price: 129,
        pros: ["IPS", "75Hz", "Slim design"],
        cons: ["Geen VESA", "Basic features"],
        stores: [
          {
            name: "Coolblue",
            price: 129,
            link: "https://www.coolblue.nl/product/viewsonic-va2432h"
          },
          {
            name: "Bol.com",
            price: 119,
            link: "https://www.bol.com/nl/p/viewsonic-va2432h"
          }
        ]
      },
      {
        name: "HP M24f",
        description: "24-inch design monitor",
        rating: 8.6,
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf",
        price: 139,
        pros: ["IPS", "Mooi design", "AMD FreeSync"],
        cons: ["60Hz", "Geen VESA"],
        stores: [
          {
            name: "Coolblue",
            price: 139,
            link: "https://www.coolblue.nl/product/hp-m24f"
          },
          {
            name: "Bol.com",
            price: 129,
            link: "https://www.bol.com/nl/p/hp-m24f"
          }
        ]
      },
      {
        name: "Acer K243Y",
        description: "24-inch basis monitor",
        rating: 8.5,
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf",
        price: 109,
        pros: ["VA panel", "Betaalbaar", "VESA"],
        cons: ["60Hz", "Basic features"],
        stores: [
          {
            name: "Coolblue",
            price: 109,
            link: "https://www.coolblue.nl/product/acer-k243y"
          },
          {
            name: "Bol.com",
            price: 99,
            link: "https://www.bol.com/nl/p/acer-k243y"
          }
        ]
      }
    ]
  }
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
                              Bekijk op Coolblue (€{coolblue.price})
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
                            Bekijk op Bol.com (€457,99)
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
                                Bekijk op Bol.com (€{bol.price})
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