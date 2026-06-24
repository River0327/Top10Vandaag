import Link from "next/link";

type LogoProps = {
  variant?: "full" | "icon";
  className?: string;
  href?: string;
};

export default function Logo({ variant = "full", className = "", href = "/" }: LogoProps) {
  const src = variant === "icon" ? "/logo-icon.svg" : "/logo.svg";
  const widthClass = variant === "icon" ? "h-9 w-9" : "h-9 w-auto";

  const image = (
    <img
      src={src}
      alt="Top 10 Vandaag"
      className={`${widthClass} ${className}`.trim()}
    />
  );

  if (!href) return image;

  return (
    <Link
      href={href}
      className="inline-flex items-center shrink-0 touch-manipulation mr-4 md:mr-6"
      aria-label="Top 10 Vandaag – Home"
    >
      {image}
    </Link>
  );
}
