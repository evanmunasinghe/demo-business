import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "DEMO — Licensed Land Surveyors in Sri Lanka";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const bg = await readFile(join(process.cwd(), "public/wallpaper.jpg"));
  const src = `data:image/jpeg;base64,${bg.toString("base64")}`;

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", position: "relative" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt="" width={1200} height={630} style={{ position: "absolute", objectFit: "cover" }} />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: 80,
            background: "linear-gradient(90deg, rgba(2,6,23,0.85), rgba(2,6,23,0.35))",
            color: "white",
          }}
        >
          <div style={{ fontSize: 96, fontWeight: 800 }}>DEMO</div>
          <div style={{ fontSize: 52, marginTop: 16 }}>Licensed Land Surveyors</div>
          <div style={{ fontSize: 32, marginTop: 24, color: "#cbd5e1" }}>
            Boundary · Bank Loan · Topographic · Bim Saviya — Sri Lanka
          </div>
        </div>
      </div>
    ),
    size,
  );
}
