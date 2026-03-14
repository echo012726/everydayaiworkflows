"use client";

import { useState } from 'react';

export const metadata = { title: 'Blog - Everyday AI Workflows', description: 'Learn how to incorporate AI into your daily workflow.' };

const allPosts = [
  { slug: '10-chatgpt-prompts-sales', title: '10 ChatGPT Prompts for Sales Professionals That Close Deals', excerpt: 'Boost your sales game with these 10 powerful ChatGPT prompts.', date: '2026-03-15', category: 'AI Prompts', readingTime: '5 min' },
  { slug: '15-claude-prompts-writers', title: '15 Claude Prompts for Writers to Boost Productivity', excerpt: 'Discover 15 powerful Claude prompts for writers.', date: '2026-03-14', category: 'AI Prompts', readingTime: '7 min' },
  { slug: '20-prompts-meeting-prep', title: '20 Prompts for Meeting Preparation That Save Hours', excerpt: 'Stop wasting hours preparing for meetings.', date: '2026-03-13', category: 'AI Prompts', readingTime: '8 min' },
  { slug: 'chatgpt-vs-claude-2026', title: 'ChatGPT vs Claude: Which Should You Use in 2026?', excerpt: 'An in-depth comparison to help you choose.', date: '2026-03-12', category: 'AI Tools', readingTime: '8 min' },
  { slug: 'save-10-hours-week-ai', title: 'How I Save 10 Hours Per Week with AI', excerpt: 'Real strategies to reclaim 10 hours every week.', date: '2026-03-11', category: 'Productivity', readingTime: '6 min' },
  { slug: 'best-free-ai-tools-2026', title: 'Best Free AI Tools in 2026 - Complete Guide', excerpt: 'The best free AI tools available.', date: '2026-03-10', category: 'AI Tools', readingTime: '10 min' },
  { slug: 'perplexity-vs-google-ai', title: 'Perplexity vs Google: AI Search Showdown', excerpt: 'Perplexity challenges Google with AI-powered search.', date: '2026-03-09', category: 'AI Tools', readingTime: '5 min' },
  { slug: 'copilot-vs-cursor', title: 'Copilot vs Cursor: Which AI Code Editor Wins?', excerpt: 'Compare the top AI code editors.', date: '2026-03-08', category: 'AI Tools', readingTime: '6 min' },
  { slug: 'ai-morning-routine', title: 'My AI Morning Routine for Maximum Productivity', excerpt: 'How I use AI every morning to set up a productive day.', date: '2026-03-07', category: 'Productivity', readingTime: '5 min' },
  { slug: 'automate-email-ai', title: 'How to Automate 80% of Your Email with AI', excerpt: 'Save hours every day with AI email automation.', date: '2026-03-06', category: 'Productivity', readingTime: '7 min' },
  { slug: 'build-first-ai-workflow', title: 'How to Build Your First AI Workflow', excerpt: 'A step-by-step guide to building your first AI automation.', date: '2026-03-05', category: 'Tutorials', readingTime: '10 min' },
  { slug: '10-chatgpt-prompts-productivity', title: '10 ChatGPT Prompts for Better Productivity', excerpt: 'These prompts will help you get more done in less time.', date: '2026-03-04', category: 'AI Prompts', readingTime: '4 min' },
];

const categories = ['All', 'AI Prompts', 'AI Tools', 'Productivity', 'Tutorials', 'Case Studies'];

export default function Blog() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [darkMode, setDarkMode] = useState(true);
  
  const filteredPosts = allPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(search.toLowerCase()) || post.excerpt.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === 'All' || post.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div style={{ minHeight: '100vh', background: darkMode ? 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0d1b2a 100%)' : '#f8f9fa', color: darkMode ? '#fff' : '#1a1a3e', fontFamily: 'system-ui, sans-serif', padding: '2rem', transition: 'background 0.3s' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', paddingTop: '2rem' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <div>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: '#00d4ff' }}>Blog</h1>
            <p style={{ color: darkMode ? '#9ca3af' : '#6b7280' }}>{allPosts.length} articles on AI prompts, tools, productivity</p>
          </div>
          <button onClick={() => setDarkMode(!darkMode)} style={{ padding: '0.5rem 1rem', background: darkMode ? 'rgba(255,255,255,0.1)' : '#e5e7eb', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '1.2rem' }}>
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
        
        {/* Search & Filter */}
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
          <input 
            type="text" 
            placeholder="Search articles..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ flex: '1 1 200px', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid #374151', background: darkMode ? 'rgba(255,255,255,0.05)' : '#fff', color: darkMode ? '#fff' : '#1a1a3e', fontSize: '1rem' }}
          />
          <select 
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            style={{ padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid #374151', background: darkMode ? 'rgba(255,255,255,0.05)' : '#fff', color: darkMode ? '#fff' : '#1a1a3e', fontSize: '1rem' }}
          >
            {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
          </select>
        </div>
        
        {/* Results count */}
        <p style={{ color: darkMode ? '#6b7280' : '#9ca3af', marginBottom: '1rem' }}>{filteredPosts.length} results</p>
        
        {/* Posts Grid */}
        <div style={{ display: 'grid', gap: '1rem' }}>
          {filteredPosts.map(post => (
            <a 
              key={post.slug}
              href={`/blog/${post.slug}`}
              style={{
                display: 'block',
                background: darkMode ? 'rgba(255,255,255,0.03)' : '#fff',
                padding: '1.25rem',
                borderRadius: '12px',
                border: darkMode ? '1px solid rgba(255,255,255,0.05)' : '1px solid #e5e7eb',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.7rem', color: '#7c3aed', background: 'rgba(124,58,237,0.15)', padding: '0.15rem 0.4rem', borderRadius: '4px' }}>{post.category}</span>
                    <span style={{ fontSize: '0.7rem', color: darkMode ? '#6b7280' : '#9ca3af' }}>⏱️ {post.readingTime}</span>
                  </div>
                  <h3 style={{ fontSize: '1.1rem', margin: '0 0 0.5rem 0', color: darkMode ? '#fff' : '#1a1a3e' }}>{post.title}</h3>
                  <p style={{ fontSize: '0.85rem', color: darkMode ? '#9ca3af' : '#6b7280', margin: 0 }}>{post.excerpt}</p>
                </div>
                <span style={{ fontSize: '0.75rem', color: darkMode ? '#6b7280' : '#9ca3af', whiteSpace: 'nowrap' }}>{post.date}</span>
              </div>
            </a>
          ))}
        </div>
        
        {filteredPosts.length === 0 && (
          <div style={{ textAlign: 'center', padding: '3rem', color: darkMode ? '#6b7280' : '#9ca3af' }}>
            No articles found. Try a different search.
          </div>
        )}
        
        <div style={{ marginTop: '3rem', paddingTop: '1rem', borderTop: '1px solid #374151' }}>
          <a href="/" style={{ color: '#00d4ff', textDecoration: 'none' }}>← Back to Home</a>
        </div>
      </div>
    </div>
  );
}
