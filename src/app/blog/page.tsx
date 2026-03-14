export const metadata = {
  title: 'Blog - Everyday AI Workflows',
  description: 'Learn how to incorporate AI into your daily workflow with tips, tutorials, and guides.',
};

const posts = [
  {
    slug: '5-ai-workflows-save-10-hours-week',
    title: '5 AI Workflows That Save Me 10 Hours/Week',
    excerpt: 'Discover the AI-powered workflows that have dramatically increased my productivity.',
    date: '2026-03-15',
  },
  {
    slug: 'best-free-ai-tools-small-business',
    title: 'Best Free AI Tools for Small Business',
    excerpt: 'A curated list of free AI tools that can help your small business grow.',
    date: '2026-03-10',
  },
  {
    slug: 'how-to-write-better-prompts',
    title: 'How to Write Better Prompts',
    excerpt: 'Learn the art of prompting to get better results from AI tools.',
    date: '2026-03-05',
  },
];

export default function Blog() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0d1b2a 100%)',
      color: '#fff',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      padding: '2rem',
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: '#00d4ff' }}>Blog</h1>
        <p style={{ color: '#9ca3af', marginBottom: '2rem' }}>Tips, tutorials, and guides for AI-powered productivity</p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {posts.map(post => (
            <article 
              key={post.slug}
              style={{
                background: 'rgba(255,255,255,0.05)',
                padding: '1.5rem',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <p style={{ fontSize: '0.85rem', color: '#6b7280', marginBottom: '0.5rem' }}>{post.date}</p>
              <h2 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: '#fff' }}>{post.title}</h2>
              <p style={{ color: '#9ca3af', marginBottom: '1rem' }}>{post.excerpt}</p>
              <span style={{ color: '#00d4ff', fontSize: '0.9rem' }}>Read more →</span>
            </article>
          ))}
        </div>
        
        <div style={{ marginTop: '3rem', paddingTop: '1rem', borderTop: '1px solid #374151' }}>
          <a href="/" style={{ color: '#00d4ff', textDecoration: 'none' }}>← Back to Home</a>
        </div>
      </div>
    </div>
  );
}
