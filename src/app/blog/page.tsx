export const metadata = {
  title: 'Blog - Everyday AI Workflows',
  description: 'Learn how to incorporate AI into your daily workflow with tips, tutorials, and guides.',
};

const posts = [
  { slug: '10-chatgpt-prompts-sales', title: '10 ChatGPT Prompts for Sales Professionals That Close Deals', excerpt: 'Boost your sales game with these 10 powerful ChatGPT prompts.', date: '2026-03-15', category: 'AI Prompts' },
  { slug: '15-claude-prompts-writers', title: '15 Claude Prompts for Writers to Boost Productivity', excerpt: 'Discover 15 powerful Claude prompts for writers.', date: '2026-03-14', category: 'AI Prompts' },
  { slug: '20-prompts-meeting-prep', title: '20 Prompts for Meeting Preparation That Save Hours', excerpt: 'Stop wasting hours preparing for meetings.', date: '2026-03-13', category: 'AI Prompts' },
  { slug: 'chatgpt-vs-claude-2026', title: 'ChatGPT vs Claude: Which Should You Use in 2026?', excerpt: 'An in-depth comparison to help you choose.', date: '2026-03-12', category: 'AI Tools' },
  { slug: 'save-10-hours-week-ai', title: 'How I Save 10 Hours Per Week with AI', excerpt: 'Real strategies to reclaim 10 hours every week.', date: '2026-03-11', category: 'Productivity' },
  { slug: 'best-free-ai-tools-2026', title: 'Best Free AI Tools in 2026 - Complete Guide', excerpt: 'The best free AI tools available.', date: '2026-03-10', category: 'AI Tools' },
  { slug: 'perplexity-vs-google-ai', title: 'Perplexity vs Google: AI Search Showdown', excerpt: 'Perplexity challenges Google with AI-powered search.', date: '2026-03-09', category: 'AI Tools' },
  { slug: 'copilot-vs-cursor', title: 'Copilot vs Cursor: Which AI Code Editor Wins?', excerpt: 'Compare the top AI code editors.', date: '2026-03-08', category: 'AI Tools' },
  { slug: 'ai-morning-routine', title: 'My AI Morning Routine for Maximum Productivity', excerpt: 'How I use AI every morning to set up a productive day.', date: '2026-03-07', category: 'Productivity' },
  { slug: 'automate-email-ai', title: 'How to Automate 80% of Your Email with AI', excerpt: 'Save hours every day with AI email automation.', date: '2026-03-06', category: 'Productivity' },
  { slug: 'build-first-ai-workflow', title: 'How to Build Your First AI Workflow', excerpt: 'A step-by-step guide to building your first AI automation.', date: '2026-03-05', category: 'Tutorials' },
  { slug: '10-chatgpt-prompts-productivity', title: '10 ChatGPT Prompts for Better Productivity', excerpt: 'These prompts will help you get more done in less time.', date: '2026-03-04', category: 'AI Prompts' },
];

export default function Blog() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0d1b2a 100%)', color: '#fff', fontFamily: 'system-ui, sans-serif', padding: '2rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: '#00d4ff' }}>Blog</h1>
        <p style={{ color: '#9ca3af', marginBottom: '2rem' }}>Tips, tutorials, and guides for AI-powered productivity</p>
        
        <div style={{ display: 'grid', gap: '1.5rem' }}>
          {posts.map(post => (
            <a 
              key={post.slug}
              href={`/blog/${post.slug}`}
              style={{
                display: 'block',
                background: 'rgba(255,255,255,0.05)',
                padding: '1.5rem',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.1)',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'transform 0.2s',
              }}
            >
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.75rem', color: '#7c3aed', background: 'rgba(124,58,237,0.2)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>{post.category}</span>
                <span style={{ fontSize: '0.85rem', color: '#6b7280' }}>{post.date}</span>
              </div>
              <h2 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: '#fff' }}>{post.title}</h2>
              <p style={{ color: '#9ca3af', margin: 0 }}>{post.excerpt}</p>
            </a>
          ))}
        </div>
        
        <div style={{ marginTop: '3rem', paddingTop: '1rem', borderTop: '1px solid #374151' }}>
          <a href="/" style={{ color: '#00d4ff', textDecoration: 'none' }}>← Back to Home</a>
        </div>
      </div>
    </div>
  );
}
