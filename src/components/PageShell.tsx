interface PageShellProps {
  children: React.ReactNode;
}

export default function PageShell({ children }: PageShellProps) {
  return (
    <section className="relative pt-24 pb-20 overflow-hidden min-h-screen">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.025) 1px, transparent 1px)
          `,
          backgroundSize: "30px 30px",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              rgba(255,255,255,0.01) 0px,
              rgba(255,255,255,0.01) 1px,
              transparent 1px,
              transparent 30px
            )
          `,
          opacity: 0.5,
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03),transparent_800px)]" />
      <div className="container mx-auto px-4 relative z-10">{children}</div>
    </section>
  );
}
