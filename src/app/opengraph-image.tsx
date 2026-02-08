import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Scholarships Central — Find scholarships worldwide";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

const pillStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  borderRadius: 9999,
  padding: "10px 16px",
  fontSize: 20,
  fontWeight: 700,
  color: "rgba(255,255,255,0.9)",
  backgroundColor: "rgba(255,255,255,0.12)",
  border: "1px solid rgba(255,255,255,0.18)",
};

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 72,
          background:
            "radial-gradient(900px 500px at 15% 15%, rgba(37, 99, 235, 0.35), transparent 60%), radial-gradient(800px 500px at 85% 60%, rgba(16, 185, 129, 0.25), transparent 60%), linear-gradient(135deg, #0b1020 0%, #0b1220 35%, #0f172a 100%)",
          color: "white",
          fontFamily:
            'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif',
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 76,
              fontWeight: 900,
              letterSpacing: -2,
              lineHeight: 1.05,
            }}
          >
            Scholarships Central
          </div>

          <div
            style={{
              fontSize: 34,
              lineHeight: 1.25,
              color: "rgba(255,255,255,0.88)",
              maxWidth: 980,
            }}
          >
            Find scholarships worldwide. Browse by country, degree, and funding
            type — external links only.
          </div>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 10 }}>
            <div style={pillStyle}>No accounts</div>
            <div style={pillStyle}>No forms</div>
            <div style={pillStyle}>SEO-first</div>
          </div>

          <div
            style={{
              marginTop: 18,
              fontSize: 22,
              fontWeight: 700,
              color: "rgba(255,255,255,0.7)",
            }}
          >
            scholarshipscentral.com
          </div>
        </div>
      </div>
    ),
    size
  );
}

