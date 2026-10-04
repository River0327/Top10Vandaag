"use client";

interface StoreLinkProps {
  name: string;
  link: string;
  priceLabel?: string;
  priceFallback?: string;
  className?: string;
}

export default function StoreLink({
  name,
  link,
  priceLabel,
  priceFallback,
  className,
}: StoreLinkProps) {
  if (!link || link === "#") return null;

  const isCoolblue = name === "Coolblue";
  const baseClass =
    className ??
    `inline-flex flex-col items-center text-center text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200 shadow-lg ${
      isCoolblue ? "bg-orange-500 hover:bg-orange-600" : "bg-blue-600 hover:bg-blue-700"
    }`;

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className={baseClass}>
      <span>Bekijk op {name}</span>
      {(priceLabel || priceFallback) && (
        <span className="flex flex-col items-center mt-0.5 gap-0.5">
          {priceLabel && (
            <span className="text-[11px] font-normal opacity-90">{priceLabel}</span>
          )}
          {!priceLabel && priceFallback && (
            <span className="text-[11px] font-normal opacity-75">{priceFallback}</span>
          )}
        </span>
      )}
    </a>
  );
}
