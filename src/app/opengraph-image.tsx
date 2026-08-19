import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0a0a0a",
          color: "#fafafa",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#8b8b8b",
            marginBottom: 24,
          }}
        >
          Portfolio
        </div>
        <div style={{ display: "flex", fontSize: 72, fontWeight: 700 }}>
          {profile.name}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 36,
            color: "#b0b0b0",
            marginTop: 20,
          }}
        >
          {profile.role}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 26,
            color: "#7dd3fc",
            marginTop: 40,
            maxWidth: 900,
          }}
        >
          {profile.headline}
        </div>
      </div>
    ),
    { ...size }
  );
}
