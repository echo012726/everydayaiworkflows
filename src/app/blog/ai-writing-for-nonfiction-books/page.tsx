"use client";

import NewsletterCapture from "../../components/NewsletterCapture";

export default function BlogPost() {
  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0d1b2a 100%)", color: "#fff", fontFamily: "system-ui, sans-serif", padding: "2rem" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", paddingTop: "2rem" }}>
        <a href="/blog" style={{ color: "#00d4ff", textDecoration: "none" }}>← Back to Blog</a>
        <div style={{ marginTop: "1rem", display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          <span style={{ fontSize: "0.75rem", color: "#7c3aed", background: "rgba(124,58,237,0.2)", padding: "0.2rem 0.5rem", borderRadius: "4px" }}>Productivity</span>
          <span style={{ fontSize: "0.75rem", color: "#6b7280" }}>⏱️ 8 min read</span>
          <span style={{ fontSize: "0.75rem", color: "#6b7280" }}>May 28, 2026</span>
        </div>
        <h1 style={{ fontSize: "2.2rem", marginTop: "0.5rem", marginBottom: "1.5rem", lineHeight: "1.2" }}>
          AI Writing for Nonfiction Books: How to Go from Idea to Draft Without Losing Your Voice
        </h1>

        <div style={{ lineHeight: "1.8", fontSize: "1.05rem", color: "#d1d5db" }}>

          <p>Writing a nonfiction book is one of the highest-leverage things you can do for your career or business. It is also where most people stall — not from lack of ideas, but from the gap between a rough outline and a polished manuscript. AI tools have dramatically narrowed that gap, not by writing the book for you, but by eliminating the parts that drain momentum.</p>

          <h2 style={{ fontSize: "1.5rem", color: "#fff", marginTop: "2rem", marginBottom: "1rem", borderBottom: "1px solid #374151", paddingBottom: "0.5rem" }}>Start With a Chapter Architecture, Not a Blank Page</h2>
          <p>The first mistake nonfiction writers make is sitting down to write prose when they should still be structuring arguments. Use AI to convert your rough idea into a detailed chapter-by-chapter architecture before you write a single sentence.</p>
          <p>Give Claude or ChatGPT your book premise and target reader, then use this prompt:</p>
          <pre style={{ background: "rgba(255,255,255,0.05)", border: "1px solid #374151", borderRadius: "8px", padding: "1rem", overflowX: "auto", fontSize: "0.9rem", whiteSpace: "pre-wrap" }}>{`You are helping me structure a nonfiction book.

Book premise: [1-2 sentence description]
Target reader: [who they are, what they already know]
Core transformation: [what the reader can do after finishing]

Generate a 10-chapter architecture. For each chapter provide:
1. Chapter title
2. Core argument or insight
3. 3-4 concrete examples or stories that could illustrate it
4. The action or takeaway the reader leaves with

Do not write prose yet — just the structural blueprint.`}</pre>
          <p>Run this a few times with slight variations. You will get different structural angles, and the best chapters often come from merging two outputs.</p>

          <h2 style={{ fontSize: "1.5rem", color: "#fff", marginTop: "2rem", marginBottom: "1rem", borderBottom: "1px solid #374151", paddingBottom: "0.5rem" }}>Build Sections With a Source-First Workflow</h2>
          <p>Nonfiction credibility lives in specifics: data, named examples, cited research. AI cannot generate those reliably — but it can help you organize them. Before drafting any section, dump your raw notes, quotes, and bullet points into the chat and ask the AI to structure them into an argument.</p>
          <pre style={{ background: "rgba(255,255,255,0.05)", border: "1px solid #374151", borderRadius: "8px", padding: "1rem", overflowX: "auto", fontSize: "0.9rem", whiteSpace: "pre-wrap" }}>{`Here are my raw notes for Chapter 3:
[paste your bullet points, quotes, stats]

Organize these into a flowing section with:
- An opening hook using one of these specific examples
- A clear main argument
- Supporting evidence in logical order
- A transition sentence that sets up the next section

Write in a direct, conversational tone. Do not invent facts not in my notes.`}</pre>
          <p>This workflow keeps your facts and your voice intact while letting AI handle the structural heavy lifting.</p>

          <h2 style={{ fontSize: "1.5rem", color: "#fff", marginTop: "2rem", marginBottom: "1rem", borderBottom: "1px solid #374151", paddingBottom: "0.5rem" }}>Voice Calibration: Train the AI on Your Writing</h2>
          <p>The biggest fear nonfiction authors have about AI is losing their distinctive voice. The solution is simple: give AI examples of your writing before asking it to draft anything.</p>
          <pre style={{ background: "rgba(255,255,255,0.05)", border: "1px solid #374151", borderRadius: "8px", padding: "1rem", overflowX: "auto", fontSize: "0.9rem", whiteSpace: "pre-wrap" }}>{`Here are three paragraphs from my existing writing:

[Paste 3 paragraphs you like]

Study the sentence length, word choice, level of formality, and how I handle transitions.
Now draft a 300-word section on [topic] that matches this style exactly.
Flag any sentence you are not confident matches my voice.`}</pre>
          <p>After the draft, paste it back and ask: "Which sentences sound like AI and not like me?" The model will often identify them accurately. Rewrite those in your own words — the rest you can keep.</p>

          <h2 style={{ fontSize: "1.5rem", color: "#fff", marginTop: "2rem", marginBottom: "1rem", borderBottom: "1px solid #374151", paddingBottom: "0.5rem" }}>Speed Through First Drafts With Section Sprints</h2>
          <p>A chapter is too large a unit to draft in one sitting. Break each chapter into 400–600-word sections and knock out a rough draft of each in under ten minutes. The goal at this stage is not quality — it is getting words on the page you can react to.</p>
          <p>Use <a href="https://jasper.ai" rel="noopener sponsored" style={{ color: "#00d4ff" }}>Jasper AI</a> if you want purpose-built templates for book chapters, introductions, and summaries — it handles long-form structure better than a generic chat interface. For research-heavy sections where you want a thinking partner, Claude excels at working through complex arguments before you commit to prose.</p>
          <p>Time-box each section sprint to 15 minutes: 5 minutes prompting, 10 minutes editing the AI output into your own voice. At that pace, a 60,000-word book becomes 150 section sprints — completable in around 37 hours of focused work.</p>

          <h2 style={{ fontSize: "1.5rem", color: "#fff", marginTop: "2rem", marginBottom: "1rem", borderBottom: "1px solid #374151", paddingBottom: "0.5rem" }}>Editing and Tightening: Where AI Earns Its Keep</h2>
          <p>Once you have a messy first draft, AI shifts from drafter to editor. Run each chapter through these passes:</p>
          <p><strong>Clarity pass:</strong> {`"Identify any sentence in this section that requires re-reading to understand. Rewrite each for clarity without changing the meaning."`}</p>
          <p><strong>Redundancy pass:</strong> {`"Flag any idea in this chapter stated more than once. Tell me which instance to keep and which to cut."`}</p>
          <p><strong>Argument audit:</strong> {`"List the three main claims in this chapter. For each, tell me whether the evidence I provide is sufficient or whether I need a stronger example."`}</p>
          <p>A tool like <a href="https://writesonic.com" rel="noopener sponsored" style={{ color: "#00d4ff" }}>Writesonic</a> can also repurpose chapter content into blog posts and LinkedIn excerpts once the book is done — maximizing the return on your writing investment.</p>

          <h2 style={{ fontSize: "1.5rem", color: "#fff", marginTop: "2rem", marginBottom: "1rem", borderBottom: "1px solid #374151", paddingBottom: "0.5rem" }}>What AI Cannot Do (And Why That Is Fine)</h2>
          <p>AI cannot generate the original research, lived experience, or contrarian insight that makes a nonfiction book worth reading. It cannot decide what you actually believe or what makes your perspective unique. What it eliminates is the mechanical friction between knowing what you want to say and getting a draft on paper — and that friction is the reason most books never get written.</p>

          <div style={{ background: "rgba(0, 212, 255, 0.05)", border: "1px solid rgba(0, 212, 255, 0.2)", borderRadius: "12px", padding: "1.25rem", marginTop: "2rem", marginBottom: "2rem" }}>
            <p style={{ margin: 0, color: "#a5f3fc" }}>
              {"💡 "}
              <strong>Using AI tools for your writing projects?</strong>
              {" "}
              <a href="/tools" style={{ color: "#00d4ff" }}>Browse the full toolkit →</a>
              {" for vetted AI writing assistants, content tools, and automation platforms."}
            </p>
          </div>

        </div>

        <div style={{ display: "flex", gap: "0.75rem", marginTop: "2rem", flexWrap: "wrap" }}>
          {["ai-writing", "nonfiction", "book-writing", "productivity", "content-creation"].map(tag => (
            <span key={tag} style={{ fontSize: "0.75rem", color: "#6b7280", background: "rgba(255,255,255,0.05)", padding: "0.2rem 0.6rem", borderRadius: "4px" }}>#{tag}</span>
          ))}
        </div>

        <NewsletterCapture darkMode={true} />
      </div>
    </div>
  );
}
