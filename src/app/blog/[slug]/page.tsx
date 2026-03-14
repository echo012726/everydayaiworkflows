import { Metadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = ['10-chatgpt-prompts-sales', '15-claude-prompts-writers', '20-prompts-meeting-prep', 'chatgpt-vs-claude-2026', 'save-10-hours-week-ai', 'best-free-ai-tools-2026', 'perplexity-vs-google-ai', 'copilot-vs-cursor', 'ai-morning-routine', 'automate-email-ai', 'build-first-ai-workflow', '10-chatgpt-prompts-productivity', 'ai-tools-small-business', 'meeting-time-half', 'notion-ai-vs-obsidian', 'midjourney-vs-dalle', 'ai-replaced-va', '5-ai-habits-business', '50-hours-to-20-hours', 'ai-note-taking-guide'];
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const titles: Record<string, string> = {
    '10-chatgpt-prompts-sales': '10 ChatGPT Prompts for Sales Professionals That Close Deals',
    '15-claude-prompts-writers': '15 Claude Prompts for Writers to Boost Productivity',
    'save-10-hours-week-ai': 'How I Save 10 Hours Per Week with AI',
    'chatgpt-vs-claude-2026': 'ChatGPT vs Claude: Which Should You Use in 2026?',
    'best-free-ai-tools-2026': 'Best Free AI Tools in 2026',
    'ai-morning-routine': 'My AI Morning Routine for Maximum Productivity',
    'automate-email-ai': 'How to Automate 80% of Your Email with AI',
    'build-first-ai-workflow': 'How to Build Your First AI Workflow',
  };
  return { title: titles[slug] || slug, description: 'Learn how to use AI to boost productivity.' };
}

const postsData: Record<string, { title: string; content: string; category: string; date: string; readingTime: string }> = {
  '10-chatgpt-prompts-sales': { title: '10 ChatGPT Prompts for Sales Professionals That Close Deals', category: 'AI Prompts', date: '2026-03-15', readingTime: '5 min read', content: 'Sales professionals are always looking for ways to close more deals and build stronger relationships with prospects. ChatGPT can be your secret weapon when you know the right prompts.' },
  '15-claude-prompts-writers': { title: '15 Claude Prompts for Writers to Boost Productivity', category: 'AI Prompts', date: '2026-03-14', readingTime: '7 min read', content: 'Claude excels at understanding context and maintaining consistency, making it ideal for writers.' },
  'save-10-hours-week-ai': { title: 'How I Save 10 Hours Per Week with AI', category: 'Productivity', date: '2026-03-11', readingTime: '6 min read', content: 'I used to work 50+ hours a week. Now I work about 40 hours—and get more done.' },
  'chatgpt-vs-claude-2026': { title: 'ChatGPT vs Claude: Which Should You Use in 2026?', category: 'AI Tools', date: '2026-03-12', readingTime: '8 min read', content: 'An in-depth comparison to help you choose the right AI tool.' },
};

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = postsData[slug] || { title: slug.replace(/-/g, ' '), category: 'Blog', date: '2026-03-15', readingTime: '5 min read', content: 'Content coming soon...' };
  
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0d1b2a 100%)', color: '#fff', fontFamily: 'system-ui, sans-serif', padding: '2rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '2rem' }}>
        <a href="/blog" style={{ color: '#00d4ff', textDecoration: 'none', fontSize: '0.9rem' }}>← Back to Blog</a>
        
        <div style={{ marginTop: '1rem', marginBottom: '0.5rem', display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
          <span style={{ fontSize: '0.75rem', color: '#7c3aed', background: 'rgba(124,58,237,0.2)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>{post.category}</span>
          <span style={{ fontSize: '0.75rem', color: '#6b7280' }}>⏱️ {post.readingTime}</span>
        </div>
        
        <h1 style={{ fontSize: '2.2rem', marginTop: '0.5rem', marginBottom: '1rem', lineHeight: '1.3' }}>{post.title}</h1>
        
        <div style={{ color: '#9ca3af', marginBottom: '2rem', fontSize: '0.9rem' }}>{post.date}</div>
        
        <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '2rem' }}>
          <span style={{ color: '#9ca3af', fontSize: '0.85rem' }}>Share:</span>
          <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=https://everydayaiworkflows.com/blog/${slug}`} target="_blank" rel="noopener" style={{ color: '#1da1f2', fontSize: '0.85rem' }}>Twitter</a>
          <a href={`https://www.linkedin.com/shareArticle?mini=true&url=https://everydayaiworkflows.com/blog/${slug}`} target="_blank" rel="noopener" style={{ color: '#0077b5', fontSize: '0.85rem' }}>LinkedIn</a>
        </div>
        
        <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#d1d5db' }}>
          <p style={{ marginBottom: '1.5rem' }}>{post.content}</p>
        </div>
        
        <div style={{ marginTop: '3rem', padding: '2rem', background: 'rgba(124,58,237,0.1)', borderRadius: '12px', border: '1px solid rgba(124,58,237,0.3)' }}>
          <h3 style={{ color: '#fff', marginBottom: '0.5rem' }}>📧 Get AI tips weekly</h3>
          <p style={{ color: '#9ca3af', marginBottom: '1rem', fontSize: '0.9rem' }}>Join 10,000+ subscribers.</p>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <input type="email" placeholder="Your email" style={{ flex: 1, padding: '0.75rem', borderRadius: '8px', border: '1px solid #374151', background: '#1a1a3e', color: '#fff' }} />
            <button style={{ padding: '0.75rem 1.5rem', background: '#7c3aed', border: 'none', borderRadius: '8px', color: '#fff', fontWeight: '600', cursor: 'pointer' }}>Subscribe</button>
          </div>
        </div>
        
        <div style={{ marginTop: '2rem', padding: '1.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'linear-gradient(135deg, #00d4ff, #7c3aed)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>🧠</div>
          <div>
            <div style={{ fontWeight: '600', color: '#fff' }}>AI Workflows Team</div>
            <div style={{ fontSize: '0.85rem', color: '#9ca3af' }}>Sharing practical AI tips daily.</div>
          </div>
        </div>
        
        <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #374151' }}>
          <h3 style={{ color: '#fff', marginBottom: '1rem' }}>Continue Reading</h3>
          <div style={{ display: 'grid', gap: '0.75rem' }}>
            <a href="/blog/chatgpt-vs-claude-2026" style={{ color: '#00d4ff', textDecoration: 'none' }}>→ ChatGPT vs Claude: Which Should You Use?</a>
            <a href="/blog/ai-morning-routine" style={{ color: '#00d4ff', textDecoration: 'none' }}>→ My AI Morning Routine</a>
          </div>
        </div>
      </div>
    </div>
  );
}
