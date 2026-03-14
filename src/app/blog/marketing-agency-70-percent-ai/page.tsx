export const metadata = {
  title: 'How This Marketing Agency Cut Costs by 70% with AI',
  description: 'An agency shares how AI reduced their costs dramatically.',
};

export default function BlogPost() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0d1b2a 100%)', color: '#fff', fontFamily: 'system-ui, sans-serif', padding: '2rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '2rem' }}>
        <a href="/blog" style={{ color: '#00d4ff', textDecoration: 'none' }}>← Back to Blog</a>
        <h1 style={{ fontSize: '2.2rem', marginTop: '1rem', marginBottom: '1rem' }}>How This Marketing Agency Cut Costs by 70% with AI</h1>
        <div style={{ color: '#9ca3af', marginBottom: '2rem' }}>January 10, 2026 • Case Studies</div>
        <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#d1d5db' }}>
          <p style={{ marginBottom: '1.5rem' }}>This agency delivers more work for less money. Here is how.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Content Creation</h2>
          <p style={{ marginBottom: '1rem' }}>AI handles first drafts. Humans polish.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Reporting</h2>
          <p>Automated dashboards and insights.</p>
        </div>
      </div>
    </div>
  );
}
