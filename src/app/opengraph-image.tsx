import { ImageResponse } from "next/og";
import { LogoMark } from "@/lib/logo-mark";

export const alt = "Ozimani — building materials, quoted simply. Coming soon.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "linear-gradient(180deg, #edf8fe 0%, #ffffff 85%)",
          color: "#1b202b",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <LogoMark width={64} />
          <div style={{ fontSize: 44, fontWeight: 600, letterSpacing: -1 }}>
            Ozimani
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 88,
              fontWeight: 600,
              letterSpacing: -3,
              lineHeight: 1.1,
            }}
          >
            Building materials,
          </div>
          <div
            style={{
              fontSize: 88,
              fontWeight: 600,
              letterSpacing: -3,
              lineHeight: 1.1,
              color: "#3d6bab",
            }}
          >
            quoted simply.
          </div>
        </div>

        <div style={{ fontSize: 32, color: "#3d6bab", fontWeight: 600 }}>
          Coming soon
        </div>
      </div>
    ),
    size,
  );
}
