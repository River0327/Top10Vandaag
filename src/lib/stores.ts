const STORE_ORDER = ["Bol.com", "Coolblue"];

export function sortStores<T extends { name: string }>(stores: T[]): T[] {
  return [...stores].sort(
    (a, b) => STORE_ORDER.indexOf(a.name) - STORE_ORDER.indexOf(b.name)
  );
}
