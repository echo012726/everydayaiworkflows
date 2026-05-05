"use client";

// SETUP: Replace BEEHIIV_EMBED_URL with your actual Beehiiv embed iframe src
// 1. Sign up free at beehiiv.com
// 2. Go to Settings → Publication → Embed Subscribe Form
// 3. Copy the iframe src URL and replace "BEEHIIV_EMBED_URL" below
const BEEHIIV_EMBED_URL = "BEEHIIV_EMBED_URL";

const IS_CONFIGURED = BEEHIIV_EMBED_URL !== "BEEHIIV_EMBED_URL";

export default function NewsletterCapture({ darkMode }: { darkMode?: boolean }) {
  const bg = darkMode ? "rgba(255,255,255,0.05)" : "#f0f4ff";
  const border = darkMode ? "1px solid rgba(124,58,237,0.3)" : "1px solid #c4b5fd";
  const headingColor = darkMode ? "#e0d4ff" : "#4c1d95";
  const subColor = darkMode ? "rgba(255,255,255,0.6)" : "#6b7280";
  const benefitColor = darkMode ? "rgba(255,255,255,0.75)" : "#374151";

  return (
    <div style={{
      background: bg,
      border,
      borderRadius: "16px",
      padding: "32px",
      margin: "48px 0",
      textAlign: "center",
    }}>
      <div style={{ fontSize: "2rem", marginBottom: "12px" }}>✉️</div>
      <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: headingColor, marginBottom: "8px" }}>
        Get AI workflows in your inbox
      </h2>
      <p style={{ color: subColor, fontSize: "0.95rem", marginBottom: "20px", maxWidth: "400px", margin: "0 auto 20px" }}>
        One weekly email with real-world AI workflows, prompts that actually work, and tool recommendations. No fluff.
      </p>

      <div style={{ display: "flex", justifyContent: "center", gap: "24px", marginBottom: "24px", flexWrap: "wrap" }}>
        {["📬 Weekly, not daily", "🔧 Practical workflows only", "🔕 Unsubscribe anytime"].map((item) => (
          <span key={item} style={{ fontSize: "0.85rem", color: benefitColor }}>{item}</span>
        ))}
      </div>

      {IS_CONFIGURED ? (
        <iframe
          src={BEEHIIV_EMBED_URL}
          style={{ width: "100%", maxWidth: "480px", height: "120px", border: "none", borderRadius: "8px" }}
          title="Newsletter signup"
        />
      ) : (
        <div style={{
          background: darkMode ? "rgba(124,58,237,0.15)" : "#ede9fe",
          border: "2px dashed #7c3aed",
          borderRadius: "10px",
          padding: "16px",
          color: darkMode ? "#c4b5fd" : "#5b21b6",
          fontSize: "0.85rem",
        }}>
          <strong>Newsletter coming soon</strong> — subscribe form launching shortly!
        </div>
      )}
    </div>
  );
}
