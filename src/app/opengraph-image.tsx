import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Zidan Khainur — Fullstack Developer & AI Enthusiast";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    // Catatan: @vercel/og renderer menggunakan flex layout model.
    // Setiap div harus memiliki display: 'flex' secara eksplisit.
    <div
      style={{
        background: "#000000",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "72px 80px",
        fontFamily: "system-ui, -apple-system, sans-serif",
        position: "relative",
      }}
    >
      {/* Decorative Cyber Violet circle — top right */}
      <div
        style={{
          position: "absolute",
          top: -140,
          right: -140,
          width: 520,
          height: 520,
          borderRadius: "50%",
          background: "#7D39EB",
          opacity: 0.1,
          display: "flex",
        }}
      />

      {/* Decorative Electric Lime line — left edge */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: "12%",
          bottom: "20%",
          width: 3,
          background: "#C6FF33",
          opacity: 0.5,
          display: "flex",
        }}
      />

      {/* Available badge */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          alignSelf: "flex-start",
          background: "#C6FF33",
          color: "#000000",
          padding: "6px 20px",
          fontSize: 15,
          fontWeight: 800,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          border: "2.5px solid #000000",
          marginBottom: 50,
        }}
      >
        ✦ Available for Internship 2026
      </div>

      {/* Name — ZIDAN */}
      <div
        style={{
          display: "flex",
          color: "#FFFFFF",
          fontSize: 108,
          fontWeight: 900,
          lineHeight: 0.88,
          letterSpacing: "-0.04em",
          textTransform: "uppercase",
        }}
      >
        ZIDAN
      </div>

      {/* Name — KHAINUR */}
      <div
        style={{
          display: "flex",
          color: "#C6FF33",
          fontSize: 90,
          fontWeight: 900,
          lineHeight: 0.88,
          letterSpacing: "-0.04em",
          textTransform: "uppercase",
          marginBottom: 44,
        }}
      >
        KHAINUR
      </div>

      {/* Role separator row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 18,
          marginBottom: 32,
        }}
      >
        <div
          style={{
            width: 44,
            height: 3,
            background: "#C6FF33",
            display: "flex",
          }}
        />
        <div
          style={{
            display: "flex",
            color: "rgba(255,255,255,0.45)",
            fontSize: 20,
            fontWeight: 600,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          Fullstack Developer · AI Enthusiast · UNSIKA
        </div>
      </div>

      {/* Tech stack badges */}
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        {["Next.js 15", "React 19", "TypeScript", "Python", "AI/ML", "IoT"].map(
          (t) => (
            <div
              key={t}
              style={{
                display: "flex",
                background: "#7D39EB",
                color: "#FFFFFF",
                padding: "5px 16px",
                fontSize: 13,
                fontWeight: 800,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                border: "2px solid #7D39EB",
              }}
            >
              {t}
            </div>
          ),
        )}
      </div>
    </div>,
    { ...size },
  );
}
