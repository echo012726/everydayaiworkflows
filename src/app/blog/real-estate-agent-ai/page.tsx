export const metadata = {
  title: 'How a Real Estate Agent Uses AI to Close More Deals',
  description: 'A real estate agent shares how AI helps them close more deals.',
};

export default function BlogPost() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0d1b2a 100%)', color: '#fff', fontFamily: 'system-ui, sans-serif', padding: '2rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '2rem' }}>
        <a href="/blog" style={{ color: '#00d4ff', textDecoration: 'none' }}>← Back to Blog</a>
        <h1 style={{ fontSize: '2.2rem', marginTop: '1rem', marginBottom: '1rem' }}>How a Real Estate Agent Uses AI to Close More Deals</h1>
        <div style={{ color: '#9ca3af', marginBottom: '2rem' }}>January 7, 2026 • Case Studies</div>
        <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#d1d5db' }}>
          <p style={{ marginBottom: '1.5rem' }}>This agent uses AI to work smarter, not harder.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Client Communication</h2>
          <p style={{ marginBottom: '1rem' }}>AI drafts follow-ups and property descriptions.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Market Analysis</h2>
          <p>AI provides instant market insights.</p>
        </div>
      </div>
    </div>
  );
}
