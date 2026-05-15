"use client";

import { useState } from 'react';


const allPosts = [
  { slug: '10-chatgpt-prompts-sales', title: '10 ChatGPT Prompts for Sales Professionals', excerpt: 'Boost your sales game with these prompts.', date: '2026-03-15', category: 'AI Prompts', readingTime: '5 min' },
  { slug: 'save-10-hours-week-ai', title: 'How I Save 10 Hours Per Week with AI', excerpt: 'Real strategies to reclaim 10 hours.', date: '2026-03-11', category: 'Productivity', readingTime: '6 min' },
  { slug: 'chatgpt-vs-claude-2026', title: 'ChatGPT vs Claude: Which Should You Use?', excerpt: 'An in-depth comparison.', date: '2026-03-12', category: 'AI Tools', readingTime: '8 min' },
  { slug: 'add-quiz-component', title: 'Add Quiz Component', excerpt: 'Interactive quiz features.', date: '2026-03-14', category: 'Features', readingTime: '3 min' },
  { slug: 'ai-email-triage-system', title: 'Build an AI Email Triage System: Zero Inbox in Under 10 Minutes', excerpt: 'Cut your daily email time to under 10 minutes with AI-powered triage, automated sorting, and draft generation workflows.', date: '2026-05-08', category: 'Automation', readingTime: '7 min' },
  { slug: 'notion-ai-workflow-guide', title: 'The Complete Notion AI Workflow Guide: From Raw Notes to Decisions', excerpt: 'Five practical Notion AI patterns — meeting notes to action items, brain dump to weekly plan, decision logs, research synthesis, and stakeholder updates.', date: '2026-05-08', category: 'Productivity', readingTime: '8 min' },
  { slug: 'boost-productivity-with-ai', title: 'Boost Productivity with AI', excerpt: 'AI tips for productivity.', date: '2026-03-14', category: 'Productivity', readingTime: '5 min' },
  { slug: 'claude-ai-prompts-for-productivity', title: '10 Claude AI Prompts That Will Transform Your Workday', excerpt: 'Ten specific, copy-paste-ready Claude prompts for morning planning, email triage, meeting prep, deep work, and daily wrap-ups.', date: '2026-05-09', category: 'AI Prompts', readingTime: '8 min' },
  { slug: 'chatgpt-vs-claude-comparison', title: 'ChatGPT vs Claude: Which AI Assistant Is Right for You?', excerpt: 'A head-to-head comparison of writing quality, coding, research, and personality — with a clear verdict for different use cases.', date: '2026-05-09', category: 'AI Tools', readingTime: '9 min' },
  { slug: 'how-to-automate-tasks-with-make', title: 'How to Automate Repetitive Tasks with Make.com (No Code Required)', excerpt: 'Three real automation workflows you can build in under an hour — email summarization, form routing, and weekly report generation.', date: '2026-05-09', category: 'Automation', readingTime: '10 min' },
  { slug: 'ai-tools-for-content-creators', title: 'The Best AI Tools for Content Creators in 2026', excerpt: 'A complete breakdown of the best AI tools for ideation, writing, visuals, repurposing, and distribution — with specific recommendations for each stage.', date: '2026-05-09', category: 'AI Tools', readingTime: '9 min' },
  { slug: 'best-ai-writing-assistants', title: 'Best AI Writing Assistants in 2026: Tested and Ranked', excerpt: 'Six AI writing tools tested across five tasks — Claude, ChatGPT, Jasper, Writesonic, Copy.ai, and Grammarly AI ranked and compared.', date: '2026-05-09', category: 'AI Tools', readingTime: '10 min' },
  { slug: 'ai-prompts-for-social-media', title: '50 AI Prompts for Social Media That Actually Get Engagement', excerpt: '50 specific, copy-paste-ready prompts for LinkedIn, Twitter, Instagram, and content repurposing — organized by platform and goal.', date: '2026-05-09', category: 'AI Prompts', readingTime: '11 min' },
  { slug: 'daily-ai-workflow-morning-routine', title: 'The 20-Minute AI Morning Routine That Saves 2 Hours a Day', excerpt: 'A four-step AI-assisted morning routine — brain dump, email triage, meeting prep, and intention setting — that front-loads your thinking and frees up your day.', date: '2026-05-09', category: 'Productivity', readingTime: '8 min' },
  { slug: 'ai-prompts-for-job-interviews', title: '15 AI Prompts That Will Get You the Job: Interview Prep from First Round to Offer', excerpt: 'Copy-paste-ready AI prompts covering every stage of interview prep — research, behavioral stories, mock interviews, salary negotiation, and follow-up.', date: '2026-05-13', category: 'AI Prompts', readingTime: '8 min' },
  { slug: 'chatgpt-for-market-research', title: 'ChatGPT for Market Research: A Practical Workflow That Replaces Hours of Manual Work', excerpt: 'A step-by-step AI workflow for competitor analysis, customer personas, market sizing, and qualitative research synthesis — compressed from days to hours.', date: '2026-05-13', category: 'Tutorials', readingTime: '9 min' },
  { slug: 'ai-tools-for-freelancers', title: "The Freelancer's AI Stack: 7 Tools That Replace a Full-Time Assistant", excerpt: 'Seven AI tools — and exactly how to use them — that give solo freelancers the leverage of a full-time assistant: writing, automation, meetings, and visual delivery.', date: '2026-05-15', category: 'AI Tools', readingTime: '8 min' },
  { slug: 'voice-to-text-ai-workflows', title: 'Voice-to-Text AI Workflows: Capture Ideas Hands-Free and Never Lose a Thought', excerpt: 'Build a voice capture pipeline using Whisper, Otter.ai, Notion AI, and Make.com to automatically transcribe and structure ideas from anywhere.', date: '2026-05-15', category: 'Productivity', readingTime: '7 min' },
];

const categories = ['All', 'AI Prompts', 'AI Tools', 'Productivity', 'Automation', 'Tutorials'];

export default function Blog() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  
  const filteredPosts = allPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === 'All' || post.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0d1b2a 100%)', color: '#fff', fontFamily: 'system-ui, sans-serif', padding: '2rem' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#00d4ff', marginBottom: '0.5rem' }}>Blog</h1>
        <p style={{ color: '#9ca3af', marginBottom: '2rem' }}>{allPosts.length} articles</p>
        
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
          <input type="text" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} style={{ flex: 1, padding: '0.75rem', borderRadius: '8px', border: '1px solid #374151', background: 'rgba(255,255,255,0.05)', color: '#fff' }} />
          <select value={category} onChange={(e) => setCategory(e.target.value)} style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid #374151', background: 'rgba(255,255,255,0.05)', color: '#fff' }}>
            {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
          </select>
        </div>
        
        <div style={{ display: 'grid', gap: '1rem' }}>
          {filteredPosts.map(post => (
            <a key={post.slug} href={`/blog/${post.slug}`} style={{ display: 'block', background: 'rgba(255,255,255,0.03)', padding: '1.25rem', borderRadius: '12px', textDecoration: 'none', color: 'inherit' }}>
              <span style={{ fontSize: '0.7rem', color: '#7c3aed', background: 'rgba(124,58,237,0.15)', padding: '0.15rem 0.4rem', borderRadius: '4px' }}>{post.category}</span>
              <h3 style={{ fontSize: '1.1rem', margin: '0.5rem 0', color: '#fff' }}>{post.title}</h3>
              <p style={{ fontSize: '0.85rem', color: '#9ca3af', margin: 0 }}>{post.excerpt}</p>
            </a>
          ))}
        </div>
        
        <div style={{ marginTop: '3rem' }}>
          <a href="/" style={{ color: '#00d4ff', textDecoration: 'none' }}>← Back to Home</a>
        </div>
      </div>
    </div>
  );
}
