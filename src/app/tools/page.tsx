"use client";

import { useState } from "react";

const toolsData = [
  { id: 1, name: "ChatGPT", category: "Chatbot", description: "OpenAI's flagship conversational AI for writing, coding, and brainstorming.", url: "https://chat.openai.com" },
  { id: 2, name: "Claude", category: "Chatbot", description: "Anthropic's AI assistant, excellent for long-form writing and document analysis.", url: "https://claude.ai" },
  { id: 3, name: "Midjourney", category: "Image Generation", description: "High-quality AI image generation via Discord.", url: "https://midjourney.com" },
  { id: 4, name: "Perplexity", category: "Chatbot", description: "AI research assistant that provides cited answers.", url: "https://perplexity.ai" },
  { id: 5, name: "Notion AI", category: "Productivity", description: "AI integrated directly into your Notion workspace for writing and summarizing.", url: "https://notion.so/product/ai" },
  { id: 6, name: "GitHub Copilot", category: "Coding", description: "AI pair programmer that suggests code and entire functions in real-time.", url: "https://github.com/features/copilot" },
  { id: 7, name: "Cursor", category: "Coding", description: "AI-first code editor built to make you extraordinarily productive.", url: "https://cursor.sh" },
  { id: 8, name: "Descript", category: "Productivity", description: "AI-powered video and audio editor that works like a doc.", url: "https://descript.com" },
  { id: 9, name: "Gamma", category: "Productivity", description: "Create beautiful presentations and webpages with AI.", url: "https://gamma.app" },
  { id: 10, name: "ElevenLabs", category: "Audio", description: "Realistic AI voice generator and text-to-speech software.", url: "https://elevenlabs.io" },
  { id: 11, name: "Runway", category: "Audio", description: "Advanced text-to-speech and voice cloning platform.", url: "https://runwayml.com" },
  { id: 12, name: "Zapier", category: "Automation", description: "Automate workflows and connect your apps with AI.", url: "https://zapier.com" },
];

export default function Tools() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...Array.from(new Set(toolsData.map(t => t.category)))];

  const filteredTools = toolsData.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          tool.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "All" || tool.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div style={{
      color: "#fff",
      fontFamily: "system-ui, -apple-system, sans-serif",
      padding: "2rem",
    }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <header style={{ textAlign: "center", marginBottom: "3rem", paddingTop: "1rem" }}>
          <h1 style={{ 
            fontSize: "2.5rem", 
            fontWeight: "700",
            background: "linear-gradient(90deg, #00d4ff, #7c3aed)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "0.5rem"
          }}>
            AI Tool Directory
          </h1>
          <p style={{ color: "#9ca3af", fontSize: "1.1rem" }}>
            Curated selection of the best AI tools for your daily workflows
          </p>
        </header>

        {/* Filters */}
        <div style={{ marginBottom: "2rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <input 
            type="text" 
            placeholder="Search tools..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: "100%",
              padding: "1rem 1.5rem",
              borderRadius: "12px",
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              color: "#fff",
              fontSize: "1rem",
              outline: "none"
            }}
          />
          
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  background: activeCategory === cat ? "rgba(255, 255, 255, 0.2)" : "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  padding: "0.5rem 1rem",
                  borderRadius: "20px",
                  color: "#fff",
                  cursor: "pointer",
                  transition: "all 0.2s"
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", 
          gap: "1.5rem" 
        }}>
          {filteredTools.map(tool => (
            <a 
              key={tool.id} 
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "16px",
                padding: "1.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                textDecoration: "none",
                transition: "transform 0.2s, background 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.06)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.03)";
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <h3 style={{ fontSize: "1.3rem", fontWeight: "600", color: "#fff" }}>{tool.name}</h3>
                <span style={{ 
                  fontSize: "0.75rem", 
                  background: "rgba(124, 58, 237, 0.2)", 
                  color: "#d8b4fe",
                  padding: "0.25rem 0.75rem",
                  borderRadius: "12px"
                }}>
                  {tool.category}
                </span>
              </div>
              <p style={{ color: "#9ca3af", lineHeight: "1.5", fontSize: "0.95rem", flex: 1 }}>
                {tool.description}
              </p>
            </a>
          ))}
          {filteredTools.length === 0 && (
            <div style={{ gridColumn: "1 / -1", textAlign: "center", padding: "3rem", color: "#9ca3af" }}>
              No tools found matching your criteria.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
