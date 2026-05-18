import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best AI Tools for Productivity | Everyday AI Workflows",
  description: "Curated AI tools that actually save time. Honest recommendations with real use cases — the tools we use to build the workflows on this site.",
};

const affiliateTools = [
  {
    name: "Make.com",
    category: "Automation",
    tagline: "Best no-code automation platform",
    description: "The most flexible automation tool available. Connect 1,500+ apps without code. Better than Zapier for complex multi-step workflows with branching logic, data transforms, and error handling.",
    useCase: "Use it to: auto-summarize emails with AI → post to Slack, scrape leads → enrich with AI → push to CRM, or trigger Claude/GPT tasks on a schedule.",
    features: ["1,500+ integrations", "Visual workflow builder", "Free tier (1,000 ops/month)", "AI modules built-in"],
    cta: "Start Free on Make.com",
    url: "https://www.make.com/en/register?pc=msarmento42/en/register?pc=msarmento42",
    highlight: true,
    commission: "20% recurring",
  },
  {
    name: "Jasper AI",
    category: "AI Writing",
    tagline: "Best AI writing assistant for long-form content",
    description: "Trained on high-performing marketing copy. Jasper excels at blog posts, ad copy, and email sequences where tone and brand voice matter. Has a 'Brand Voice' feature that learns your style.",
    useCase: "Use it to: write SEO blog posts 5× faster, generate ad variations for A/B tests, or draft email sequences with consistent voice.",
    features: ["Brand Voice training", "SEO integration (Surfer)", "50+ templates", "Team collaboration"],
    cta: "Try Jasper Free",
    url: "https://jasper.ai",
    highlight: false,
    commission: "25% recurring",
  },
  {
    name: "Writesonic",
    category: "AI Writing",
    tagline: "Best value AI writer with real-time web access",
    description: "Writesonic's Chatsonic can browse the web in real time — making it useful for content about current events, trends, and breaking news where static models fall short.",
    useCase: "Use it to: write up-to-date product comparisons, generate news-informed social content, or research-backed blog posts without manual searching.",
    features: ["Real-time web access", "Article writer (long-form)", "Paraphrasing tool", "Free tier available"],
    cta: "Try Writesonic Free",
    url: "https://writesonic.com",
    highlight: false,
    commission: "30% recurring",
  },
  {
    name: "Notion AI",
    category: "Productivity",
    tagline: "Best AI-enhanced workspace",
    description: "Notion AI sits directly inside your docs and databases. Unlike standalone AI tools, it has context — it can summarize a meeting note, extract action items from a project page, or fill a database field using AI.",
    useCase: "Use it to: auto-generate meeting summaries from transcripts, create SOPs from bullet notes, or build AI-powered knowledge bases your team can query.",
    features: ["In-context AI (reads your docs)", "AI database properties", "Q&A over your workspace", "Free referral credit"],
    cta: "Get Notion",
    url: "https://notion.so",
    highlight: false,
    commission: "$10 credit/referral",
  },
  {
    name: "NordVPN",
    category: "Security",
    tagline: "Best VPN for remote workers and public Wi-Fi security",
    description: "NordVPN is the go-to VPN for remote workers who need fast, reliable protection on public Wi-Fi. With 6,000+ servers across 60+ countries, it keeps your browsing private whether you're at a coffee shop, airport, or co-working space.",
    useCase: "Use it to: secure your connection on public networks, access region-locked tools and content, and protect sensitive client data while working remotely.",
    features: ["6,000+ servers in 60+ countries", "No-logs policy", "Threat Protection built-in", "Up to 10 devices"],
    cta: "Get NordVPN",
    url: "https://www.jdoqocy.com/click-101754888-13914989",
    highlight: false,
    commission: "Affiliate",
  },
  {
    name: "Surfer SEO",
    category: "SEO",
    tagline: "AI-powered SEO content optimization and keyword research",
    description: "Surfer SEO analyzes top-ranking pages and gives you a real-time content score as you write. It tells you exactly how many words, headings, keywords, and images you need to outrank the competition — no guesswork.",
    useCase: "Use it to: optimize blog posts for search before publishing, find keyword gaps in existing content, or build topical authority with AI-assisted content plans.",
    features: ["Real-time content scoring", "Keyword research & clustering", "AI outline generator", "SERP analyzer"],
    cta: "Try Surfer SEO",
    url: "https://surferseo.com",
    highlight: false,
    commission: "Affiliate",
  },
];

const freeTools = [
  { name: "ChatGPT", category: "AI Chat", url: "https://chat.openai.com", description: "General purpose AI — best for quick tasks, brainstorming, and code" },
  { name: "Claude", category: "AI Chat", url: "https://claude.ai", description: "Best for long documents, analysis, and nuanced writing" },
  { name: "Perplexity", category: "Research", url: "https://perplexity.ai", description: "AI-powered search with cited sources" },
  { name: "Gamma", category: "Presentations", url: "https://gamma.app", description: "Generate decks from a prompt in 30 seconds" },
  { name: "Otter.ai", category: "Transcription", url: "https://otter.ai", description: "Auto-transcribe meetings with speaker labels" },
  { name: "GitHub Copilot", category: "Coding", url: "https://github.com/features/copilot", description: "In-editor AI coding assistant" },
  { name: "ElevenLabs", category: "Audio", url: "https://elevenlabs.io", description: "Best-in-class AI voice cloning" },
  { name: "Midjourney", category: "Images", url: "https://midjourney.com", description: "Highest quality AI image generation" },
];

const disclaimer = "Some links on this page are affiliate links. If you sign up through them, we may earn a commission — at no extra cost to you. We only list tools we genuinely recommend.";

export default function ToolsPage() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0d1b2a 100%)",
      color: "#fff",
      fontFamily: "system-ui, -apple-system, sans-serif",
      padding: "2rem 1.5rem",
    }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", paddingTop: "2rem" }}>

        <a href="/" style={{ color: "#7c3aed", fontSize: "0.9rem", textDecoration: "none" }}>← Home</a>

        <h1 style={{ fontSize: "2.2rem", fontWeight: 700, margin: "1rem 0 0.5rem", lineHeight: 1.2 }}>
          AI Tools We Actually Use
        </h1>
        <p style={{ color: "#9ca3af", marginBottom: "1rem", maxWidth: "600px" }}>
          Every workflow on this site was built with these tools. The ones below are worth paying for — the free alternatives are listed at the bottom.
        </p>

        <p style={{ color: "#6b7280", fontSize: "0.82rem", marginBottom: "1.5rem", fontStyle: "italic" }}>
          Some links on this page are affiliate links. We may earn a small commission at no extra cost to you — it helps keep this site free.
        </p>

        <div style={{
          background: "rgba(124,58,237,0.1)",
          border: "1px solid rgba(124,58,237,0.3)",
          borderRadius: "8px",
          padding: "0.75rem 1rem",
          fontSize: "0.8rem",
          color: "#a78bfa",
          marginBottom: "2.5rem",
        }}>
          {disclaimer}
        </div>

        <h2 style={{ fontSize: "1.1rem", color: "#7c3aed", marginBottom: "1.25rem", fontWeight: 600 }}>
          Top Picks (with affiliate programs)
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "3rem" }}>
          {affiliateTools.map((tool) => (
            <div key={tool.name} style={{
              background: tool.highlight ? "rgba(124,58,237,0.08)" : "rgba(255,255,255,0.04)",
              border: tool.highlight ? "1px solid rgba(124,58,237,0.4)" : "1px solid rgba(255,255,255,0.08)",
              borderRadius: "12px",
              padding: "1.5rem",
            }}>
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: "8px", marginBottom: "0.5rem" }}>
                <div>
                  <span style={{
                    fontSize: "0.7rem",
                    background: "rgba(124,58,237,0.2)",
                    color: "#a78bfa",
                    padding: "2px 8px",
                    borderRadius: "4px",
                    marginRight: "8px",
                  }}>
                    {tool.category}
                  </span>
                  <h3 style={{ display: "inline", fontSize: "1.15rem", fontWeight: 600 }}>{tool.name}</h3>
                </div>
                {tool.highlight && (
                  <span style={{
                    fontSize: "0.7rem",
                    background: "#7c3aed",
                    color: "#fff",
                    padding: "3px 10px",
                    borderRadius: "20px",
                    fontWeight: 600,
                  }}>
                    ★ Top Pick
                  </span>
                )}
              </div>
              <p style={{ fontSize: "0.8rem", color: "#7c3aed", marginBottom: "0.6rem", fontWeight: 500 }}>
                {tool.tagline}
              </p>
              <p style={{ color: "#9ca3af", fontSize: "0.9rem", marginBottom: "0.75rem", lineHeight: 1.6 }}>
                {tool.description}
              </p>
              <p style={{ color: "#6b7280", fontSize: "0.85rem", marginBottom: "1rem", fontStyle: "italic" }}>
                💡 {tool.useCase}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.25rem" }}>
                {tool.features.map((f) => (
                  <span key={f} style={{
                    background: "rgba(124,58,237,0.12)",
                    color: "#c4b5fd",
                    fontSize: "0.75rem",
                    padding: "3px 10px",
                    borderRadius: "20px",
                    border: "1px solid rgba(124,58,237,0.2)",
                  }}>
                    {f}
                  </span>
                ))}
              </div>
              <a
                href={tool.url}
                target="_blank"
                rel="noopener sponsored"
                style={{
                  display: "inline-block",
                  background: "#7c3aed",
                  color: "#fff",
                  padding: "0.6rem 1.4rem",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontSize: "0.88rem",
                  fontWeight: 600,
                }}
              >
                {tool.cta} →
              </a>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: "1.1rem", color: "#6b7280", marginBottom: "1rem", fontWeight: 600 }}>
          Free Tools Worth Bookmarking
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "0.75rem", marginBottom: "3rem" }}>
          {freeTools.map((tool) => (
            <a
              key={tool.name}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "8px",
                padding: "1rem",
                textDecoration: "none",
                color: "#fff",
              }}
            >
              <div style={{ fontSize: "0.7rem", color: "#6b7280", marginBottom: "4px" }}>{tool.category}</div>
              <div style={{ fontWeight: 600, marginBottom: "4px", fontSize: "0.95rem" }}>{tool.name}</div>
              <div style={{ fontSize: "0.8rem", color: "#6b7280", lineHeight: 1.4 }}>{tool.description}</div>
            </a>
          ))}
        </div>

        <footer style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          paddingTop: "1.5rem",
          textAlign: "center",
          color: "#374151",
          fontSize: "0.8rem",
        }}>
          <a href="/" style={{ color: "#7c3aed", textDecoration: "none" }}>← Back to Everyday AI Workflows</a>
        </footer>
      </div>
    </div>
  );
}
