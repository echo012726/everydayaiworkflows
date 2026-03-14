export const metadata = {
  title: 'The Complete AI Productivity Stack for 2026',
  description: 'The tools and workflows that make up my complete AI productivity system.',
};

export default function BlogPost() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0d1b2a 100%)', color: '#fff', fontFamily: 'system-ui, sans-serif', padding: '2rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '2rem' }}>
        <a href="/blog" style={{ color: '#00d4ff', textDecoration: 'none' }}>← Back to Blog</a>
        <h1 style={{ fontSize: '2.2rem', marginTop: '1rem', marginBottom: '1rem' }}>The Complete AI Productivity Stack for 2026</h1>
        <div style={{ color: '#9ca3af', marginBottom: '2rem' }}>February 13, 2026 • Productivity Tips</div>
        <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#d1d5db' }}>
          <p style={{ marginBottom: '1.5rem' }}>Here's my complete AI-powered productivity system.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Communication</h2>
          <p style={{ marginBottom: '1rem' }}>ChatGPT + Claude + Email automation</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Content</h2>
          <p style={{ marginBottom: '1rem' }}>Claude for writing, Midjourney for images</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Automation</h2>
          <p>Zapier + Make for workflows</p>
        </div>
      </div>
    </div>
  );
}
