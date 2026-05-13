"use client";

import NewsletterCapture from "../../components/NewsletterCapture";

export default function BlogPost() {
  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0d1b2a 100%)", color: "#fff", fontFamily: "system-ui, sans-serif", padding: "2rem" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", paddingTop: "2rem" }}>
        <a href="/blog" style={{ color: "#00d4ff", textDecoration: "none" }}>← Back to Blog</a>
        <div style={{ marginTop: "1rem", display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          <span style={{ fontSize: "0.75rem", color: "#7c3aed", background: "rgba(124,58,237,0.2)", padding: "0.2rem 0.5rem", borderRadius: "4px" }}>AI Prompts</span>
          <span style={{ fontSize: "0.75rem", color: "#6b7280" }}>⏱️ 8 min read</span>
          <span style={{ fontSize: "0.75rem", color: "#6b7280" }}>May 13, 2026</span>
        </div>
        <h1 style={{ fontSize: "2.2rem", marginTop: "0.5rem", marginBottom: "1.5rem", lineHeight: "1.2" }}>
          15 AI Prompts That Will Get You the Job: Interview Prep from First Round to Offer
        </h1>

        <div style={{ lineHeight: "1.8", fontSize: "1.05rem", color: "#d1d5db" }}>

          <p>Most candidates walk into interviews with the same generic preparation: read the job description, think about their experience, practice a few answers. The candidates who land offers do something different — they use AI to simulate the actual interview, pressure-test their answers, and surface gaps before the hiring manager does. Here are 15 copy-paste-ready prompts that cover the entire process.</p>

          <h2 style={{ fontSize: "1.5rem", color: "#fff", marginTop: "2rem", marginBottom: "1rem", borderBottom: "1px solid #374151", paddingBottom: "0.5rem" }}>Before the Interview: Research and Positioning</h2>

          <p>Your first job is to understand the company and role deeply enough to speak their language. These prompts accelerate that research significantly.</p>

          <p><strong style={{ color: "#fff" }}>Prompt 1 — Company Intelligence Brief</strong></p>
          <pre style={{ background: "rgba(0,0,0,0.4)", border: "1px solid #374151", borderRadius: "8px", padding: "1.25rem", overflowX: "auto", fontSize: "0.9rem", color: "#a5f3fc", marginBottom: "1rem" }}>{`I'm interviewing at [Company Name] for a [Role Title] position.
Based on what you know about this company, give me:
1. Their core business model and revenue drivers
2. Key challenges or competitive pressures they face in 2025-2026
3. Recent strategic moves or product launches worth mentioning
4. The language and values they use publicly (website, job postings, press releases)
5. Two smart questions I could ask that would signal I've done real homework

Format this as a pre-interview briefing document.`}</pre>

          <p><strong style={{ color: "#fff" }}>Prompt 2 — Job Description Decoder</strong></p>
          <pre style={{ background: "rgba(0,0,0,0.4)", border: "1px solid #374151", borderRadius: "8px", padding: "1.25rem", overflowX: "auto", fontSize: "0.9rem", color: "#a5f3fc", marginBottom: "1rem" }}>{`Here's a job description for a role I'm applying for:

[paste full job description]

Please:
1. Identify the 3 most critical skills or experiences they're hiring for
2. Flag any red flags or requirements that could disqualify me
3. List the implied (unstated) expectations between the lines
4. Suggest how I should frame my background to match their priorities

My background in brief: [2-3 sentences about your experience]`}</pre>

          <h2 style={{ fontSize: "1.5rem", color: "#fff", marginTop: "2rem", marginBottom: "1rem", borderBottom: "1px solid #374151", paddingBottom: "0.5rem" }}>Behavioral Interview Prep (STAR Method)</h2>

          <p>Behavioral questions ("Tell me about a time when...") trip up most candidates because they haven't structured their stories in advance. AI can help you build a story bank and stress-test it.</p>

          <p><strong style={{ color: "#fff" }}>Prompt 3 — STAR Story Builder</strong></p>
          <pre style={{ background: "rgba(0,0,0,0.4)", border: "1px solid #374151", borderRadius: "8px", padding: "1.25rem", overflowX: "auto", fontSize: "0.9rem", color: "#a5f3fc", marginBottom: "1rem" }}>{`Help me structure this work experience as a STAR story for a behavioral interview:

Situation: [describe the context in 2-3 sentences]
Task: [what you were responsible for]
Action: [what you specifically did — be concrete]
Result: [what happened, ideally with numbers]

Make it concise (under 2 minutes when spoken aloud), cut any filler,
and flag if the result sounds too vague or unquantified.`}</pre>

          <p><strong style={{ color: "#fff" }}>Prompt 4 — Story Bank Generator</strong></p>
          <pre style={{ background: "rgba(0,0,0,0.4)", border: "1px solid #374151", borderRadius: "8px", padding: "1.25rem", overflowX: "auto", fontSize: "0.9rem", color: "#a5f3fc", marginBottom: "1rem" }}>{`Given this job description, generate the 8 most likely behavioral interview
questions I'll be asked. For each question, suggest which type of story
from my background would best answer it (leadership, conflict, failure,
achievement, collaboration, ambiguity, pressure, growth).

Job description: [paste]
My background: [paste resume or summary]`}</pre>

          <h2 style={{ fontSize: "1.5rem", color: "#fff", marginTop: "2rem", marginBottom: "1rem", borderBottom: "1px solid #374151", paddingBottom: "0.5rem" }}>Mock Interview Simulation</h2>

          <p>Reading answers is not the same as speaking them under pressure. Use AI to run actual mock interviews where you're forced to respond in real time.</p>

          <p><strong style={{ color: "#fff" }}>Prompt 5 — Full Mock Interview</strong></p>
          <pre style={{ background: "rgba(0,0,0,0.4)", border: "1px solid #374151", borderRadius: "8px", padding: "1.25rem", overflowX: "auto", fontSize: "0.9rem", color: "#a5f3fc", marginBottom: "1rem" }}>{`Act as a senior hiring manager at [Company] interviewing me for a [Role] position.
Conduct a realistic 30-minute interview: start with an opener, ask 6-8 questions
mixing behavioral, situational, and role-specific technical questions.
After each of my answers, give me a brief internal assessment (what you liked,
what was weak, what follow-up a real interviewer would ask).
Begin the interview now.`}</pre>

          <p><strong style={{ color: "#fff" }}>Prompt 6 — Hard Question Drill</strong></p>
          <pre style={{ background: "rgba(0,0,0,0.4)", border: "1px solid #374151", borderRadius: "8px", padding: "1.25rem", overflowX: "auto", fontSize: "0.9rem", color: "#a5f3fc", marginBottom: "1rem" }}>{`Give me the 5 hardest interview questions for a [Role] position — the ones
candidates typically stumble on. For each question, explain why it's tricky,
what interviewers are actually assessing, and what a strong answer looks like.
Then ask me to answer one and evaluate my response.`}</pre>

          <h2 style={{ fontSize: "1.5rem", color: "#fff", marginTop: "2rem", marginBottom: "1rem", borderBottom: "1px solid #374151", paddingBottom: "0.5rem" }}>Technical and Case Interview Prep</h2>

          <p>For roles with technical components — product, data, finance, engineering — you need targeted prep beyond behavioral stories.</p>

          <p><strong style={{ color: "#fff" }}>Prompt 7 — Role-Specific Technical Questions</strong></p>
          <pre style={{ background: "rgba(0,0,0,0.4)", border: "1px solid #374151", borderRadius: "8px", padding: "1.25rem", overflowX: "auto", fontSize: "0.9rem", color: "#a5f3fc", marginBottom: "1rem" }}>{`I'm preparing for a [Product Manager / Data Analyst / Finance / Engineering] interview.
Generate 10 role-specific questions likely to appear in a technical screen.
Include 2 case-style questions where I'd need to think through a problem live.
After listing them, pick one and walk me through what a strong answer includes.`}</pre>

          <p><strong style={{ color: "#fff" }}>Prompt 8 — Case Interview Coach</strong></p>
          <pre style={{ background: "rgba(0,0,0,0.4)", border: "1px solid #374151", borderRadius: "8px", padding: "1.25rem", overflowX: "auto", fontSize: "0.9rem", color: "#a5f3fc", marginBottom: "1rem" }}>{`Run a product case interview with me. Give me a realistic scenario
(e.g., "Design a feature for [Company]'s mobile app" or "How would you
improve [metric] by 20% in Q3?"). Let me walk through my thinking,
ask clarifying questions if I don't, and give structured feedback afterward
on: structure, assumptions, creativity, and communication.`}</pre>

          <h2 style={{ fontSize: "1.5rem", color: "#fff", marginTop: "2rem", marginBottom: "1rem", borderBottom: "1px solid #374151", paddingBottom: "0.5rem" }}>After the Interview: Follow-Up and Negotiation</h2>

          <p>The interview doesn't end when you walk out. A well-crafted follow-up email and strong salary negotiation can be the difference between the offer you want and the one they start with.</p>

          <p><strong style={{ color: "#fff" }}>Prompt 9 — Thank You Email</strong></p>
          <pre style={{ background: "rgba(0,0,0,0.4)", border: "1px solid #374151", borderRadius: "8px", padding: "1.25rem", overflowX: "auto", fontSize: "0.9rem", color: "#a5f3fc", marginBottom: "1rem" }}>{`Write a thank-you email to send after my interview for [Role] at [Company].
My interviewer's name: [Name], their title: [Title].
Key things we discussed: [2-3 topics]
Something specific I want to reinforce or follow up on: [detail]
Tone: professional but warm, not sycophantic. Under 150 words.`}</pre>

          <p><strong style={{ color: "#fff" }}>Prompt 10 — Salary Negotiation Script</strong></p>
          <pre style={{ background: "rgba(0,0,0,0.4)", border: "1px solid #374151", borderRadius: "8px", padding: "1.25rem", overflowX: "auto", fontSize: "0.9rem", color: "#a5f3fc", marginBottom: "1rem" }}>{`I received an offer of $[X] for a [Role] in [City / Remote].
My target is $[Y]. Market data I have: [any sources or ranges you know].
Write a negotiation script — what to say when they call with the offer,
how to counter without damaging the relationship, and what to do if
they push back or say the offer is firm.`}</pre>

          <h2 style={{ fontSize: "1.5rem", color: "#fff", marginTop: "2rem", marginBottom: "1rem", borderBottom: "1px solid #374151", paddingBottom: "0.5rem" }}>Five Bonus Prompts Worth Saving</h2>

          <p>These are the high-leverage extras that most candidates skip:</p>

          <p><strong style={{ color: "#fff" }}>Prompt 11 — Weakness Answer Reframe:</strong> <em>"Help me answer 'What's your biggest weakness?' in a way that's honest, shows self-awareness, and includes a genuine example of working on it — without sounding rehearsed or clichéd."</em></p>

          <p><strong style={{ color: "#fff" }}>Prompt 12 — "Tell Me About Yourself" Opener:</strong> <em>"Write a 90-second 'Tell me about yourself' answer for a [Role] interview that hits: where I've been, what I've built expertise in, and why I'm excited about this specific opportunity. Based on: [paste your background]."</em></p>

          <p><strong style={{ color: "#fff" }}>Prompt 13 — Gap Explanation:</strong> <em>"I have a [X-month] employment gap from [date] to [date]. Help me explain this honestly and positively in an interview. Context: [brief reason]."</em></p>

          <p><strong style={{ color: "#fff" }}>Prompt 14 — Answer Critique:</strong> <em>"Here's my answer to 'Why do you want to work here?' — [paste your answer]. Grade it on specificity, authenticity, and relevance to the role. Rewrite it if you can improve it significantly."</em></p>

          <p><strong style={{ color: "#fff" }}>Prompt 15 — Interview Debrief:</strong> <em>"I just finished an interview for [Role] at [Company]. Here's what happened: [quick summary]. What questions do I still need to prepare better? What follow-up should I send? What's my honest shot at moving forward?"</em></p>

          <div style={{ background: "rgba(0, 212, 255, 0.05)", border: "1px solid rgba(0, 212, 255, 0.2)", borderRadius: "12px", padding: "1.25rem", marginTop: "2rem", marginBottom: "2rem" }}>
            <p style={{ margin: 0, color: "#a5f3fc" }}>
              💡 <strong>Want to automate your job search workflow?</strong> Pair these prompts with <a href="https://make.com" rel="noopener sponsored" style={{ color: "#00d4ff" }}>Make.com</a> to track applications, auto-generate follow-up reminders, and log interview notes — all without manual spreadsheets. <a href="/tools" style={{ color: "#00d4ff" }}>See all recommended tools →</a>
            </p>
          </div>

        </div>

        <div style={{ display: "flex", gap: "0.75rem", marginTop: "2rem", flexWrap: "wrap" }}>
          {["job-interviews", "ai-prompts", "career", "productivity"].map(tag => (
            <span key={tag} style={{ fontSize: "0.75rem", color: "#6b7280", background: "rgba(255,255,255,0.05)", padding: "0.2rem 0.6rem", borderRadius: "4px" }}>#{tag}</span>
          ))}
        </div>

        <NewsletterCapture darkMode={true} />
      </div>
    </div>
  );
}
