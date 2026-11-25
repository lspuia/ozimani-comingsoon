import { ImageResponse } from "next/og";

export const alt = "Ozimani — building materials, quoted simply. Coming soon.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

function LogoMark({ width }: { width: number }) {
  return (
    <svg
      width={width}
      height={(width * 21.4574) / 24}
      viewBox="0 0 24 21.4574"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.0731 0L0 10.6364L11.4007 21.4574L12.7173 20.0669C12.098 19.6622 11.5066 19.1943 10.951 18.6672C5.94029 13.9126 5.72893 5.98924 10.4788 0.973215C10.5773 0.869662 10.6769 0.76785 10.7771 0.667839L10.0731 0Z"
        fill="#1B202B"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.8775 0.973987C7.12835 5.99026 7.33893 13.9131 12.3489 18.6682C12.9048 19.1958 13.4967 19.6622 14.1158 20.0674L17.7224 16.2572C16.9202 15.8067 16.159 15.2502 15.4604 14.5879C11.8031 11.1171 10.9631 5.78765 13.0153 1.46498L12.1758 0.669572C12.0754 0.768863 11.976 0.869654 11.8775 0.973987Z"
        fill="#76B1E8"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.1419 1.20787C12.09 5.5303 12.9312 10.86 16.5881 14.3313C17.2859 14.9936 18.0469 15.5496 18.8496 16.0011L24 10.5626L14.1419 1.20787Z"
        fill="#3D6BAB"
      />
    </svg>
  );
}

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
