"use client";

import { useState, useEffect } from "react";

const prompts = [
  "Analyze this data and identify the top 3 trends. Explain each trend in one sentence.",
  "Write a cold outreach email to a potential client. Keep it under 150 words.",
  "Summarize this article in exactly 3 bullet points.",
  "Create a weekly meal plan for a vegetarian. Include breakfast, lunch, and dinner.",
  "Explain quantum computing to a 5-year-old.",
  "Write a product description for an eco-friendly water bottle.",
  "Generate 5 interview questions for a software engineer position.",
  "Turn these notes into a polished LinkedIn post.",
  "Create a 30-day fitness challenge for beginners.",
  "Write a thank you note after a job interview.",
  "Explain the pros and cons of remote work in a table format.",
  "Generate a social media content calendar for one week.",
  "Write a persuasive argument for why companies should adopt a 4-day workweek.",
  "Create a book summary of the last non-fiction book you read.",
  "Draft a resignation email that's professional but not burn bridges.",
  "Generate 10 startup name ideas for an AI tutoring app.",
  "Write a peer review feedback for a colleague's presentation.",
  "Create a step-by-step guide to setting up a home office.",
  "Explain the difference between AI, ML, and deep learning.",
  "Write a compelling bio for your personal website.",
  "Generate a list of 20 passive income ideas.",
  "Create a pitch deck outline for a SaaS startup.",
  "Write a follow-up email after a sales call.",
  "Explain how to calculate ROI in simple terms.",
  "Generate 5 content ideas for a B2B marketing blog.",
  "Write a compelling headline for this blog post: [insert topic].",
  "Create a customer persona for a fitness app.",
  "Explain the lean startup methodology in 5 bullet points.",
  "Write a cold DM to a potential podcast guest.",
  "Generate a list of 15 books every entrepreneur should read.",
  "Create a weekly newsletter template for a SaaS company.",
  "Write a case study about a successful marketing campaign.",
  "Explain how blockchain works in simple language.",
  "Generate 10 ways to improve employee engagement.",
  "Write a mission statement for a sustainable fashion brand.",
  "Create a competitive analysis matrix for 3 competitors.",
  "Explain the basics of SEO in 5 bullet points.",
  "Write a script for a 60-second product video.",
  "Generate 25 startup ideas for the gig economy.",
  "Create a customer journey map for an e-commerce store.",
  "Write a white paper outline about AI in healthcare.",
  "Explain the differences between SQL and NoSQL databases.",
  "Generate a list of 30 conversation starters for networking.",
  "Write a press release for a new product launch.",
  "Create a pricing strategy for a subscription service.",
  "Explain the concept of product-market fit.",
  "Write 10 customer objection responses for a sales team.",
  "Generate a list of 50 productivity hacks.",
  "Create a project timeline for launching a mobile app.",
  "Write a comprehensive guide to personal finance for millennials.",
  "Explain the lean canvas in detail.",
  "Generate content ideas for a newsletter in the productivity niche.",
  "Write a script for a customer onboarding call.",
  "Create a list of 25 common marketing mistakes to avoid.",
  "Explain the AIDA model with examples.",
  "Write 15 email subject lines that boost open rates.",
  "Generate a 90-day sales plan template.",
  "Create a brand voice guide for a tech startup.",
  "Write a comprehensive competitor analysis report structure.",
];

function getDailyPrompt(): { index: number; prompt: string } {
  const today = new Date();
  const start = new Date(2026, 0, 1);
  const diff = Math.floor((today.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
  const index = diff % prompts.length;
  return { index, prompt: prompts[index] };
}

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [promptIndex, setPromptIndex] = useState(0);

  useEffect(() => {
    const { index, prompt: p } = getDailyPrompt();
    setPrompt(p);
    setPromptIndex(index);
  }, []);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getNewPrompt = () => {
    const newIndex = Math.floor(Math.random() * prompts.length);
    setPrompt(prompts[newIndex]);
    setPromptIndex(newIndex);
    setCopied(false);
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0d1b2a 100%)",
      color: "#fff",
      fontFamily: "system-ui, -apple-system, sans-serif",
      padding: "2rem",
    }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        {/* Header */}
        <header style={{ textAlign: "center", marginBottom: "3rem", paddingTop: "2rem" }}>
          <h1 style={{ 
            fontSize: "2.5rem", 
            fontWeight: "700",
            background: "linear-gradient(90deg, #00d4ff, #7c3aed)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "0.5rem"
          }}>
            Everyday AI Workflows
          </h1>
          <p style={{ color: "#9ca3af", fontSize: "1.1rem" }}>
            Daily AI prompts to boost your productivity
          </p>
        </header>

        {/* Prompt Card */}
        <div style={{
          background: "rgba(255, 255, 255, 0.05)",
          borderRadius: "20px",
          padding: "2.5rem",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          marginBottom: "2rem"
        }}>
          <div style={{ 
            display: "flex", 
            justifyContent: "space-between", 
            alignItems: "center",
            marginBottom: "1.5rem"
          }}>
            <span style={{ 
              background: "linear-gradient(90deg, #00d4ff, #7c3aed)",
              padding: "0.4rem 1rem",
              borderRadius: "20px",
              fontSize: "0.85rem",
              fontWeight: "600"
            }}>
              Prompt of the Day
            </span>
            <span style={{ color: "#6b7280", fontSize: "0.9rem" }}>
              #{promptIndex + 1} of {prompts.length}
            </span>
          </div>

          <p style={{ 
            fontSize: "1.4rem", 
            lineHeight: "1.6",
            marginBottom: "2rem",
            minHeight: "100px",
            display: "flex",
            alignItems: "center"
          }}>
            {prompt}
          </p>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <button
              onClick={copyToClipboard}
              style={{
                background: copied ? "#10b981" : "linear-gradient(90deg, #00d4ff, #7c3aed)",
                border: "none",
                padding: "0.8rem 1.5rem",
                borderRadius: "10px",
                color: "#fff",
                fontWeight: "600",
                cursor: "pointer",
                fontSize: "1rem",
                transition: "transform 0.2s",
              }}
            >
              {copied ? "✓ Copied!" : "📋 Copy Prompt"}
            </button>
            
            <button
              onClick={getNewPrompt}
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                padding: "0.8rem 1.5rem",
                borderRadius: "10px",
                color: "#fff",
                fontWeight: "600",
                cursor: "pointer",
                fontSize: "1rem",
              }}
            >
              🎲 Random Prompt
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav style={{ 
          display: "flex", 
          justifyContent: "center", 
          gap: "2rem",
          marginTop: "3rem"
        }}>
          <a href="/tools" style={{ color: "#9ca3af", textDecoration: "none" }}>Tools</a>
          <a href="/blog" style={{ color: "#9ca3af", textDecoration: "none" }}>Blog</a>
          <a href="/about" style={{ color: "#9ca3af", textDecoration: "none" }}>About</a>
          <a href="/contact" style={{ color: "#9ca3af", textDecoration: "none" }}>Contact</a>
          <a href="/privacy" style={{ color: "#9ca3af", textDecoration: "none" }}>Privacy</a>
        </nav>

        {/* Footer */}
        <footer style={{ 
          textAlign: "center", 
          marginTop: "4rem", 
          color: "#4b5563",
          fontSize: "0.9rem"
        }}>
          <p>Built to help you integrate AI into your daily workflow</p>
        </footer>
      </div>
    </div>
  );
}
