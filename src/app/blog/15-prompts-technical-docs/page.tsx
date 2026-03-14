export const metadata = {
  title: '15 Prompts for Technical Documentation',
  description: 'Generate technical docs faster with AI.',
};

export default function BlogPost() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0d1b2a 100%)', color: '#fff', fontFamily: 'system-ui, sans-serif', padding: '2rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '2rem' }}>
        <a href="/blog" style={{ color: '#00d4ff', textDecoration: 'none' }}>← Back to Blog</a>
        <h1 style={{ fontSize: '2.2rem', marginTop: '1rem', marginBottom: '1rem' }}>15 Prompts for Technical Documentation</h1>
        <div style={{ color: '#9ca3af', marginBottom: '2rem' }}>December 19, 2025 • AI Prompts</div>
        <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#d1d5db' }}>
          <p style={{ marginBottom: '1.5rem' }}>Create docs that developers actually want to read.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>API Docs</h2>
          <p style={{ marginBottom: '1rem' }}>Generate API documentation automatically.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>User Guides</h2>
          <p>Write clear, helpful guides.</p>
        </div>
      </div>
    </div>
  );
}
