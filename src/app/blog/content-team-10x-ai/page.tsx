export const metadata = {
  title: 'How This Content Team Produces 10x More with AI',
  description: 'A content team shares how AI helped them scale production.',
};

export default function BlogPost() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0d1b2a 100%)', color: '#fff', fontFamily: 'system-ui, sans-serif', padding: '2rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '2rem' }}>
        <a href="/blog" style={{ color: '#00d4ff', textDecoration: 'none' }}>← Back to Blog</a>
        <h1 style={{ fontSize: '2.2rem', marginTop: '1rem', marginBottom: '1rem' }}>How This Content Team Produces 10x More with AI</h1>
        <div style={{ color: '#9ca3af', marginBottom: '2rem' }}>January 8, 2026 • Case Studies</div>
        <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#d1d5db' }}>
          <p style={{ marginBottom: '1.5rem' }}>This team went from 10 posts a month to 100. AI made it possible.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Ideation</h2>
          <p style={{ marginBottom: '1rem' }}>AI generates topic ideas instantly.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Production</h2>
          <p>AI drafts. Humans edit and publish.</p>
        </div>
      </div>
    </div>
  );
}
