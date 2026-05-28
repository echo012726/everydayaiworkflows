import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Newsletter | Everyday AI Workflows",
  description: "One weekly email with real-world AI workflows, prompts that actually work, and tool recommendations. No fluff. No spam.",
};

export default function NewsletterPage() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0d1b2a 100%)",
      color: "#fff",
      fontFamily: "system-ui, -apple-system, sans-serif",
      padding: "2rem 1.5rem",
    }}>
      <div style={{ maxWidth: "680px", margin: "0 auto", paddingTop: "2rem" }}>

        <a href="/" style={{ color: "#00d4ff", fontSize: "0.9rem", textDecoration: "none" }}>← Home</a>

        <div style={{ marginTop: "2.5rem", marginBottom: "2rem" }}>
          <h1 style={{ fontSize: "2.4rem", fontWeight: 700, lineHeight: 1.2, marginBottom: "1rem" }}>
            Get AI Workflows in Your Inbox
          </h1>
          <p style={{ color: "#9ca3af", fontSize: "1.05rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
            One weekly email with real-world AI workflows, prompts that actually work, and tool recommendations. No fluff. No spam.
          </p>

          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.5rem", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            {[
              "Real workflow walkthroughs",
              "Prompts you can copy-paste",
              "Tool recommendations with honest takes",
              "Unsubscribe anytime",
            ].map((benefit) => (
              <li key={benefit} style={{ display: "flex", alignItems: "center", gap: "0.6rem", color: "#d1d5db", fontSize: "0.95rem" }}>
                <span style={{ color: "#00d4ff", fontWeight: 700, fontSize: "1rem" }}>✓</span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        <div style={{
          background: "rgba(0,212,255,0.05)",
          border: "1px solid rgba(0,212,255,0.2)",
          borderRadius: "16px",
          padding: "1.5rem",
        }}>
          <iframe
            src="https://monthly-newsletter-258d49.beehiiv.com/subscribe"
            data-test-id="beehiiv-embed"
            width="100%"
            height="320"
            frameBorder="0"
            scrolling="no"
            style={{ borderRadius: "12px", border: "none", marginTop: "1.5rem" }}
          />
        </div>

        <footer style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          paddingTop: "1.5rem",
          marginTop: "3rem",
          textAlign: "center",
          color: "#374151",
          fontSize: "0.8rem",
        }}>
          <a href="/" style={{ color: "#00d4ff", textDecoration: "none" }}>← Back to Everyday AI Workflows</a>
        </footer>
      </div>
    </div>
  );
}
