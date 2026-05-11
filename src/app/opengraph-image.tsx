import { ImageResponse } from "next/og";
import { PHRASE_LIBRARY } from "@/lib/brand";

export const runtime = "edge";
export const alt =
  "The Healing Ground Geneva — holistic, naturopathic & mind-body practice";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  // Pick a phrase deterministically from the daily rotation so the social
  // preview rotates with the site rather than being frozen.
  const now = new Date();
  const start = Date.UTC(now.getUTCFullYear(), 0, 0);
  const dayOfYear = Math.floor((now.getTime() - start) / 86_400_000);
  const phrase = PHRASE_LIBRARY[dayOfYear % PHRASE_LIBRARY.length];

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
          background:
            "linear-gradient(135deg, #FAF6F0 0%, #F4ECDF 55%, #E8DCC9 100%)",
          fontFamily: "serif",
          color: "#2A2724"
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <span
            style={{
              fontSize: 20,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#8A847B"
            }}
          >
            The Healing Ground · Geneva
          </span>
          <span
            style={{
              fontSize: 16,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#A8A39A",
              marginTop: 4
            }}
          >
            Holistic Practitioner · Naturopathic & Mind-Body
          </span>
        </div>

        <div style={{ display: "flex", position: "relative" }}>
          <p
            style={{
              fontSize: 76,
              lineHeight: 1.05,
              letterSpacing: -1,
              margin: 0,
              maxWidth: 900,
              fontWeight: 400,
              fontStyle: "italic"
            }}
          >
            “{phrase}”
          </p>
          {/* a single sage detail — the brief asks for one quiet accent */}
          <div
            style={{
              position: "absolute",
              right: 0,
              top: 24,
              width: 84,
              height: 1,
              background: "#A8B59A"
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 20,
            color: "#5C564E"
          }}
        >
          <span>Celia de Mestral · Geneva</span>
          <span
            style={{
              letterSpacing: 4,
              textTransform: "uppercase",
              fontSize: 16
            }}
          >
            EN · FR · ES
          </span>
        </div>
      </div>
    ),
    size
  );
}
