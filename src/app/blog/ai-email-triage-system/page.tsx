"use client";

import NewsletterCapture from "../../components/NewsletterCapture";

export default function BlogPost() {
  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0d1b2a 100%)", color: "#fff", fontFamily: "system-ui, sans-serif", padding: "2rem" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", paddingTop: "2rem" }}>
        <a href="/blog" style={{ color: "#00d4ff", textDecoration: "none" }}>← Back to Blog</a>
        <div style={{ marginTop: "1rem", display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          <span style={{ fontSize: "0.75rem", color: "#7c3aed", background: "rgba(124,58,237,0.2)", padding: "0.2rem 0.5rem", borderRadius: "4px" }}>Automation</span>
          <span style={{ fontSize: "0.75rem", color: "#6b7280" }}>⏱️ 7 min read</span>
          <span style={{ fontSize: "0.75rem", color: "#6b7280" }}>May 8, 2026</span>
        </div>
        <h1 style={{ fontSize: "2.2rem", marginTop: "0.5rem", marginBottom: "1.5rem", lineHeight: "1.2" }}>
          Build an AI Email Triage System: Zero Inbox in Under 10 Minutes
        </h1>

        <div style={{ lineHeight: "1.8", fontSize: "1.05rem", color: "#d1d5db" }}>

          <p>If you're spending more than 30 minutes a day managing email, you're leaving AI productivity gains on the table. An AI email triage system can cut that to under 10 minutes — without missing anything important. Here's how to build one that actually works.</p>

          <h2 style={{ fontSize: "1.5rem", color: "#fff", marginTop: "2rem", marginBottom: "1rem", borderBottom: "1px solid #374151", paddingBottom: "0.5rem" }}>What "Triage" Actually Means</h2>
          <p>Email triage is the discipline of deciding, quickly, what action each email requires — not reading everything in full. There are only four buckets:</p>
          <ul style={{ paddingLeft: "1.5rem", marginBottom: "1rem" }}>
            <li style={{ marginBottom: "0.5rem" }}><strong style={{ color: "#fff" }}>Reply now</strong> — urgent, requires your input today</li>
            <li style={{ marginBottom: "0.5rem" }}><strong style={{ color: "#fff" }}>Delegate</strong> — someone else should handle this</li>
            <li style={{ marginBottom: "0.5rem" }}><strong style={{ color: "#fff" }}>Schedule</strong> — non-urgent, needs a response within 48h</li>
            <li style={{ marginBottom: "0.5rem" }}><strong style={{ color: "#fff" }}>Archive</strong> — informational, no action needed</li>
          </ul>
          <p>AI dramatically speeds up the decision of which bucket each email falls into — and can even draft the reply.</p>

          <h2 style={{ fontSize: "1.5rem", color: "#fff", marginTop: "2rem", marginBottom: "1rem", borderBottom: "1px solid #374151", paddingBottom: "0.5rem" }}>Step 1: The 3-Sentence Summary Prompt</h2>
          <p>For every email that's longer than 5 lines, paste the content into Claude or ChatGPT with this prompt:</p>
          <pre style={{ background: "rgba(0,0,0,0.4)", border: "1px solid #374151", borderRadius: "8px", padding: "1.25rem", overflowX: "auto", fontSize: "0.9rem", color: "#a5f3fc", marginBottom: "1rem" }}>{`Summarize this email in exactly 3 sentences:
1. What the sender wants
2. The deadline or urgency level (if any)
3. What action I need to take

Email:
[paste email here]`}</pre>
          <p>You'll get a crisp summary in under 5 seconds. This alone cuts reading time by 60-70% for long threads.</p>

          <h2 style={{ fontSize: "1.5rem", color: "#fff", marginTop: "2rem", marginBottom: "1rem", borderBottom: "1px solid #374151", paddingBottom: "0.5rem" }}>Step 2: Draft Replies in Your Voice</h2>
          <p>Once you know a reply is needed, use this prompt to generate a draft that sounds like you:</p>
          <pre style={{ background: "rgba(0,0,0,0.4)", border: "1px solid #374151", borderRadius: "8px", padding: "1.25rem", overflowX: "auto", fontSize: "0.9rem", color: "#a5f3fc", marginBottom: "1rem" }}>{`Write a professional reply to this email. My name is [Name].
Tone: direct, friendly, no fluff.
Key points to convey: [bullet your main points]
Length: under 100 words unless the topic demands more.

Original email:
[paste email]`}</pre>
          <p>Edit the draft for any nuance or context AI wouldn't know. In practice, 70% of these drafts need only minor tweaks — you're editing, not writing from scratch.</p>

          <h2 style={{ fontSize: "1.5rem", color: "#fff", marginTop: "2rem", marginBottom: "1rem", borderBottom: "1px solid #374151", paddingBottom: "0.5rem" }}>Step 3: Automate the Sorting with Rules + AI</h2>
          <p>The real leverage comes from automating the triage decision before you even open your inbox. The approach: combine Gmail filters (or Outlook rules) with an AI-powered automation layer.</p>
          <p>
            <a href="https://www.make.com/en/register?pc=msarmento42/en/register?pc=msarmento42" rel="noopener sponsored" style={{ color: "#00d4ff" }}>Make.com</a> is ideal for this — you can build a scenario that watches your inbox, sends new emails through an AI module to classify them, then auto-labels or moves them based on the result. A basic flow looks like this:
          </p>
          <ul style={{ paddingLeft: "1.5rem", marginBottom: "1rem" }}>
            <li style={{ marginBottom: "0.5rem" }}>Trigger: new email arrives in Gmail</li>
            <li style={{ marginBottom: "0.5rem" }}>Action: send subject + first 200 chars to an AI module with a classification prompt</li>
            <li style={{ marginBottom: "0.5rem" }}>Router: based on AI output (Urgent / FYI / Newsletter / Other), apply label and optionally send to Slack or create a task</li>
          </ul>
          <p>Setup takes about 45 minutes the first time. After that, your inbox pre-sorts itself every time an email arrives.</p>

          <h2 style={{ fontSize: "1.5rem", color: "#fff", marginTop: "2rem", marginBottom: "1rem", borderBottom: "1px solid #374151", paddingBottom: "0.5rem" }}>Step 4: The Weekly Unsubscribe Sweep</h2>
          <p>AI triage only helps if your inbox volume is manageable. Reserve 10 minutes every Friday for an unsubscribe sweep. Use this prompt to speed it up:</p>
          <pre style={{ background: "rgba(0,0,0,0.4)", border: "1px solid #374151", borderRadius: "8px", padding: "1.25rem", overflowX: "auto", fontSize: "0.9rem", color: "#a5f3fc", marginBottom: "1rem" }}>{`Here are 20 newsletter subject lines I received this week.
For each one, tell me: keep, unsubscribe, or skim.
Base this on whether a [your role] would find this
genuinely useful vs. just noise.

[paste subject lines]`}</pre>
          <p>Over 4 weeks, this typically reduces inbound volume by 30-40%.</p>

          <h2 style={{ fontSize: "1.5rem", color: "#fff", marginTop: "2rem", marginBottom: "1rem", borderBottom: "1px solid #374151", paddingBottom: "0.5rem" }}>The 10-Minute Inbox Session</h2>
          <p>Once your system is running, a daily inbox session looks like this:</p>
          <ul style={{ paddingLeft: "1.5rem", marginBottom: "1rem" }}>
            <li style={{ marginBottom: "0.5rem" }}><strong style={{ color: "#fff" }}>Mins 1-2:</strong> Scan AI-labeled Urgent emails only. Reply to anything under 3 lines directly.</li>
            <li style={{ marginBottom: "0.5rem" }}><strong style={{ color: "#fff" }}>Mins 3-6:</strong> Use the summary prompt on longer emails that need a real response. Draft and send.</li>
            <li style={{ marginBottom: "0.5rem" }}><strong style={{ color: "#fff" }}>Mins 7-9:</strong> Skim FYI emails. Archive without reading if the subject line tells you enough.</li>
            <li style={{ marginBottom: "0.5rem" }}><strong style={{ color: "#fff" }}>Min 10:</strong> Glance at the Newsletter label. Read one if it's genuinely useful; archive the rest.</li>
          </ul>
          <p>That's it. Close the email app and get back to work.</p>

          <div style={{ background: "rgba(0, 212, 255, 0.05)", border: "1px solid rgba(0, 212, 255, 0.2)", borderRadius: "12px", padding: "1.25rem", marginTop: "2rem", marginBottom: "2rem" }}>
            <p style={{ margin: 0, color: "#a5f3fc" }}>
              💡 <strong>Want to fully automate the trigger step?</strong> This workflow pairs perfectly with <a href="https://www.make.com/en/register?pc=msarmento42/en/register?pc=msarmento42" rel="noopener sponsored" style={{ color: "#00d4ff" }}>Make.com</a> — connect your Gmail, an AI module, and Slack in one no-code scenario. <a href="/tools" style={{ color: "#00d4ff" }}>See all recommended tools →</a>
            </p>
          </div>

        </div>

        <div style={{ display: "flex", gap: "0.75rem", marginTop: "2rem", flexWrap: "wrap" }}>
          {["email", "automation", "ai-tools", "productivity"].map(tag => (
            <span key={tag} style={{ fontSize: "0.75rem", color: "#6b7280", background: "rgba(255,255,255,0.05)", padding: "0.2rem 0.6rem", borderRadius: "4px" }}>#{tag}</span>
          ))}
        </div>

        <NewsletterCapture darkMode={true} />
      </div>
    </div>
  );
}
