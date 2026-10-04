export function formatBolCurrency(
  amount: number | null | undefined
): string | null {
  if (amount == null || Number.isNaN(amount)) return null;

  const isWholeEuro = Math.round(amount * 100) % 100 === 0;

  if (isWholeEuro) {
    const euros = new Intl.NumberFormat("nl-NL", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
    return `€ ${euros},-`;
  }

  return new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: "EUR",
  }).format(amount);
}

function parseDutchPriceString(price: string): number | null {
  const cleaned = price.replace(/€\s?/g, "").trim();
  if (!cleaned) return null;

  const normalized = cleaned.includes(",")
    ? cleaned.replace(/\./g, "").replace(",", ".")
    : cleaned.replace(/\./g, "");

  const amount = Number.parseFloat(normalized);
  return Number.isNaN(amount) ? null : amount;
}

export function formatApproxPrice(
  price: string | undefined
): string | undefined {
  if (!price?.trim()) return undefined;
  if (price.includes(",-")) return price;

  const amount = parseDutchPriceString(price);
  if (amount == null) return price;

  return formatBolCurrency(amount) ?? price;
}

export function getBolPriceFallback(hasPrice: boolean): string | undefined {
  return hasPrice ? undefined : "Bekijk prijs";
}