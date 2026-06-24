export interface Subcategory {
  name: string;
  slug: string;
  image: string;
  description: string;
  logo?: string;
}

export interface CategoryInfo {
  title: string;
  description: string;
  subcategories: Subcategory[];
}

export type CategoryData = Record<string, CategoryInfo>;

export const categoryData: CategoryData = {
  telefoons: {
    title: "Telefoons en tablets",
    description: "Selecteer het merk van het product waar jij naar op zoek bent!",
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
    title: "Accessoires",
    description: "Kies het accessoire dat je zoekt",
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
    ],
  },
  computers: {
    title: "Computers",
    description: "Kies tussen laptops, desktops of componenten",
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
    title: "Schermen",
    description: "Kies het soort scherm dat je zoekt",
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
