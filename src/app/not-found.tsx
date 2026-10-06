import Link from "next/link";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Pagina niet gevonden",
  description: "Deze pagina bestaat niet. Ga terug naar de homepage van Top 10 Vandaag voor Top 10-lijsten en koopgidsen.",
  path: "/404",
  noIndex: true,
});

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#05070f] px-6 text-center text-slate-100">
      <p className="text-sm uppercase tracking-[0.2em] text-[#ffb089]">404</p>
      <h1 className="mt-3 text-3xl font-bold">Pagina niet gevonden</h1>
      <p className="mt-3 max-w-md text-white/60">
        De pagina die je zoekt bestaat niet of is verplaatst.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-black hover:bg-slate-200"
      >
        Naar de homepage
      </Link>
    </main>
  );
}
