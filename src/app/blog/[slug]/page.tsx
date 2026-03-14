"use client";

type Props = { params: { slug: string } };

const postsData: Record<string, { title: string; content: string; category: string; date: string; readingTime: string; sections: string[] }> = {
  '10-chatgpt-prompts-sales': { 
    title: '10 ChatGPT Prompts for Sales Professionals', 
    category: 'AI Prompts', date: '2026-03-15', readingTime: '5 min read',
    sections: ['Introduction', 'Prompts 1-3', 'Prompts 4-6', 'Prompts 7-10', 'Conclusion'],
    content: 'Sales professionals are always looking for ways to close more deals and build stronger relationships with prospects. ChatGPT can be your secret weapon when you know the right prompts.' 
  },
  'save-10-hours-week-ai': { 
    title: 'How I Save 10 Hours Per Week with AI', 
    category: 'Productivity', date: '2026-03-11', readingTime: '6 min read',
    sections: ['My Routine', 'Email Automation', 'Meeting Prep', 'Content', 'Results'],
    content: 'I used to work 50+ hours a week. Now I work about 40 hours—and get more done.' 
  },
};

export default function BlogPost({ params }: Props) {
  const slug = params.slug;
  const post = postsData[slug] || { title: slug.replace(/-/g, ' '), category: 'Blog', date: '2026-03-15', readingTime: '5 min read', sections: ['Overview', 'Details'], content: 'Content coming soon...' };
  
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0d1b2a 100%)', color: '#fff', fontFamily: 'system-ui, sans-serif', padding: '2rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '2rem' }}>
        <div style={{ fontSize: '0.85rem', color: '#6b7280', marginBottom: '1rem' }}>
          <a href="/" style={{ color: '#00d4ff', textDecoration: 'none' }}>Home</a> 
          <span style={{ margin: '0 0.5rem' }}>›</span>
          <a href="/blog" style={{ color: '#00d4ff', textDecoration: 'none' }}>Blog</a>
          <span style={{ margin: '0 0.5rem' }}>›</span>
          <span style={{ color: '#9ca3af' }}>{post.title.substring(0, 25)}...</span>
        </div>
        
        <a href="/blog" style={{ color: '#00d4ff', textDecoration: 'none', fontSize: '0.9rem' }}>← Back to Blog</a>
        
        <div style={{ marginTop: '1rem', marginBottom: '0.5rem', display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
          <span style={{ fontSize: '0.75rem', color: '#7c3aed', background: 'rgba(124,58,237,0.2)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>{post.category}</span>
          <span style={{ fontSize: '0.75rem', color: '#6b7280' }}>⏱️ {post.readingTime}</span>
        </div>
        
        <h1 style={{ fontSize: '2.2rem', marginTop: '0.5rem', marginBottom: '1rem', lineHeight: '1.3' }}>{post.title}</h1>
        
        <div style={{ color: '#9ca3af', marginBottom: '2rem', fontSize: '0.9rem' }}>{post.date}</div>
        
        <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '12px', padding: '1.5rem', marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1rem', color: '#fff', marginBottom: '1rem' }}>📋 Table of Contents</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {post.sections.map((section, i) => (
              <li key={i} style={{ marginBottom: '0.5rem' }}>
                <a href={'#' + section.toLowerCase().replace(/\s+/g, '-')} style={{ color: '#00d4ff', textDecoration: 'none', fontSize: '0.9rem' }}>
                  {i + 1}. {section}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        <button onClick={() => window.print()} style={{ background: 'rgba(255,255,255,0.1)', border: 'none', padding: '0.5rem 1rem', borderRadius: '8px', color: '#fff', cursor: 'pointer', marginBottom: '1rem', fontSize: '0.85rem' }}>
          🖨️ Print / Save as PDF
        </button>
        
        <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#d1d5db' }}>
          {post.sections.map((section, i) => (
            <div key={i} id={section.toLowerCase().replace(/\s+/g, '-')} style={{ marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid #374151' }}>
              <h2 style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '1rem' }}>{section}</h2>
              <p style={{ marginBottom: '1rem' }}>{section === 'Introduction' || section === 'Overview' || section === 'My Routine' ? post.content : `Content for ${section}...`}</p>
            </div>
          ))}
        </div>
        
        <div style={{ display: 'flex', gap: '0.75rem', marginTop: '2rem', marginBottom: '2rem' }}>
          <span style={{ color: '#9ca3af', fontSize: '0.85rem' }}>Share:</span>
          <a href={'https://twitter.com/intent/tweet?text=' + encodeURIComponent(post.title)} target="_blank" rel="noopener" style={{ color: '#1da1f2', fontSize: '0.85rem' }}>Twitter</a>
          <a href={'https://www.linkedin.com/shareArticle?mini=true&url=https://everydayaiworkflows.com/blog/' + slug} target="_blank" rel="noopener" style={{ color: '#0077b5', fontSize: '0.85rem' }}>LinkedIn</a>
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
            <a href="/blog/chatgpt-vs-claude-2026" style={{ color: '#00d4ff', textDecoration: 'none' }}>→ ChatGPT vs Claude</a>
            <a href="/blog/ai-morning-routine" style={{ color: '#00d4ff', textDecoration: 'none' }}>→ AI Morning Routine</a>
          </div>
        </div>
      </div>
    </div>
  );
}
