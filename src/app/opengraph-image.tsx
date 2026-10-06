import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Top 10 Vandaag – Top 10 lijsten en koopgidsen voor tech";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #05070f 0%, #10182c 55%, #1a1230 100%)",
          padding: "72px 80px",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 28,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#ffb089",
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "#ff7a3d",
            }}
          />
          Top 10 Vandaag
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -1.5,
              maxWidth: 980,
            }}
          >
            Top 10 lijsten & koopgidsen voor tech
          </div>
          <div style={{ fontSize: 28, color: "rgba(255,255,255,0.68)", maxWidth: 860 }}>
            Vergelijk smartphones, laptops, tv’s en accessoires bij Bol.com en Coolblue.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            color: "rgba(255,255,255,0.5)",
          }}
        >
          <span>Nederland · 2026</span>
          <span>top10vandaag.nl</span>
        </div>
      </div>
    ),
    size
  );
}
