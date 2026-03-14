"use client";

const postsData: Record<string, { title: string; category: string; date: string; readingTime: string; sections: string[] }> = {
  '10-chatgpt-prompts-sales': { title: '10 ChatGPT Prompts for Sales Professionals', category: 'AI Prompts', date: '2026-03-15', readingTime: '5 min', sections: ['Introduction', 'The Prompts', 'Conclusion'] },
  'save-10-hours-week-ai': { title: 'How I Save 10 Hours Per Week with AI', category: 'Productivity', date: '2026-03-11', readingTime: '6 min', sections: ['My Routine', 'The Results'] },
};

export default function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  // Handle both sync and async params
  const slug = typeof params === 'object' && 'then' in params 
    ? 'sample-post' 
    : params.slug;
  
  const post = postsData[slug] || { title: slug?.replace(/-/g, ' ') || 'Blog Post', category: 'Blog', date: '2026-03-15', readingTime: '5 min', sections: ['Overview'] };
  
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0d1b2a 100%)', color: '#fff', fontFamily: 'system-ui, sans-serif', padding: '2rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '2rem' }}>
        <a href="/blog" style={{ color: '#00d4ff', textDecoration: 'none' }}>← Back to Blog</a>
        
        <div style={{ marginTop: '1rem', display: 'flex', gap: '0.75rem' }}>
          <span style={{ fontSize: '0.75rem', color: '#7c3aed', background: 'rgba(124,58,237,0.2)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>{post.category}</span>
          <span style={{ fontSize: '0.75rem', color: '#6b7280' }}>⏱️ {post.readingTime}</span>
        </div>
        
        <h1 style={{ fontSize: '2.2rem', marginTop: '0.5rem', marginBottom: '1rem' }}>{post.title}</h1>
        
        <div style={{ color: '#9ca3af', marginBottom: '2rem' }}>{post.date}</div>
        
        <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '12px', padding: '1.5rem', marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1rem', color: '#fff', marginBottom: '1rem' }}>📋 Table of Contents</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {post.sections.map((section, i) => (
              <li key={i} style={{ marginBottom: '0.5rem' }}>
                <span style={{ color: '#00d4ff', fontSize: '0.9rem' }}>{i + 1}. {section}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <button onClick={() => window.print()} style={{ background: 'rgba(255,255,255,0.1)', border: 'none', padding: '0.5rem 1rem', borderRadius: '8px', color: '#fff', cursor: 'pointer', marginBottom: '1rem' }}>
          🖨️ Print / Save as PDF
        </button>
        
        <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#d1d5db' }}>
          {post.sections.map((section, i) => (
            <div key={i} style={{ marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid #374151' }}>
              <h2 style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '1rem' }}>{section}</h2>
              <p>Content for {section}...</p>
            </div>
          ))}
        </div>
        
        <div style={{ display: 'flex', gap: '0.75rem', marginTop: '2rem' }}>
          <span style={{ color: '#9ca3af', fontSize: '0.85rem' }}>Share:</span>
          <span style={{ color: '#1da1f2', fontSize: '0.85rem' }}>Twitter</span>
          <span style={{ color: '#0077b5', fontSize: '0.85rem' }}>LinkedIn</span>
        </div>
        
        <div style={{ marginTop: '3rem', padding: '2rem', background: 'rgba(124,58,237,0.1)', borderRadius: '12px', border: '1px solid rgba(124,58,237,0.3)' }}>
          <h3 style={{ color: '#fff', marginBottom: '0.5rem' }}>📧 Get AI tips weekly</h3>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <input type="email" placeholder="Your email" style={{ flex: 1, padding: '0.75rem', borderRadius: '8px', border: '1px solid #374151', background: '#1a1a3e', color: '#fff' }} />
            <button style={{ padding: '0.75rem 1.5rem', background: '#7c3aed', border: 'none', borderRadius: '8px', color: '#fff', fontWeight: '600', cursor: 'pointer' }}>Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
}
