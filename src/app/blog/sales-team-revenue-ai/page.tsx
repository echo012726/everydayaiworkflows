export const metadata = {
  title: 'How a Sales Team 3xed Revenue with AI',
  description: 'A sales team shares how AI helped them triple revenue.',
};

export default function BlogPost() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0d1b2a 100%)', color: '#fff', fontFamily: 'system-ui, sans-serif', padding: '2rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '2rem' }}>
        <a href="/blog" style={{ color: '#00d4ff', textDecoration: 'none' }}>← Back to Blog</a>
        <h1 style={{ fontSize: '2.2rem', marginTop: '1rem', marginBottom: '1rem' }}>How a Sales Team 3xed Revenue with AI</h1>
        <div style={{ color: '#9ca3af', marginBottom: '2rem' }}>January 9, 2026 • Case Studies</div>
        <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#d1d5db' }}>
          <p style={{ marginBottom: '1.5rem' }}>This sales team tripled revenue in one year. AI was the difference.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Lead Scoring</h2>
          <p style={{ marginBottom: '1rem' }}>AI identifies hot leads instantly.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Outreach</h2>
          <p>Personalized emails at scale.</p>
        </div>
      </div>
    </div>
  );
}
