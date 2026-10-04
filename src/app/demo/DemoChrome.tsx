"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function DemoChrome() {
  const pathname = usePathname();

  useEffect(() => {
    const theme = pathname.includes("/pulse")
      ? "demo-theme-pulse"
      : pathname.includes("/noir")
        ? "demo-theme-noir"
        : "demo-theme-galerie";

    document.body.classList.add("demo-active", theme);
    return () => {
      document.body.classList.remove(
        "demo-active",
        "demo-theme-galerie",
        "demo-theme-pulse",
        "demo-theme-noir",
        "demo-theme-chooser",
      );
    };
  }, [pathname]);

  return null;
}
