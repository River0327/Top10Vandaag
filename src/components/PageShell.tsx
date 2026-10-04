interface PageShellProps {
  children: React.ReactNode;
}

export default function PageShell({ children }: PageShellProps) {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#05070f] pt-24 pb-20">
      <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#3b5bff]/20 blur-[100px]" />
      <div className="pointer-events-none absolute right-0 top-32 h-64 w-64 rounded-full bg-[#ff7a3d]/10 blur-[90px]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">{children}</div>
    </section>
  );
}
