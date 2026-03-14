export const metadata = {
  title: 'Anthropic API: Developer Pricing Comparison',
  description: 'Compare Anthropic API pricing for developers. Find the most cost-effective way to use Claude.',
};

export default function BlogPost() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0d1b2a 100%)', color: '#fff', fontFamily: 'system-ui, sans-serif', padding: '2rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '2rem' }}>
        <a href="/blog" style={{ color: '#00d4ff', textDecoration: 'none' }}>← Back to Blog</a>
        <h1 style={{ fontSize: '2.2rem', marginTop: '1rem', marginBottom: '1rem' }}>Anthropic API: Developer Pricing Comparison</h1>
        <div style={{ color: '#9ca3af', marginBottom: '2rem' }}>January 23, 2026 • AI Tools Reviews</div>
        <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#d1d5db' }}>
          <p style={{ marginBottom: '1.5rem' }}>Using Claude via API? Here is everything about pricing.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Claude 3.5 Sonnet</h2>
          <p style={{ marginBottom: '1rem' }}>$3/input million tokens, $15/output million tokens.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Claude 3 Opus</h2>
          <p>$15/input million tokens, $75/output million tokens.</p>
        </div>
      </div>
    </div>
  );
}
