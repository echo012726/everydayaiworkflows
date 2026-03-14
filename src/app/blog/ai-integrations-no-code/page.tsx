export const metadata = {
  title: 'Building AI Integrations Without Code',
  description: 'Connect your favorite tools with AI. No programming required.',
};

export default function BlogPost() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0d1b2a 100%)', color: '#fff', fontFamily: 'system-ui, sans-serif', padding: '2rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '2rem' }}>
        <a href="/blog" style={{ color: '#00d4ff', textDecoration: 'none' }}>← Back to Blog</a>
        <h1 style={{ fontSize: '2.2rem', marginTop: '1rem', marginBottom: '1rem' }}>Building AI Integrations Without Code</h1>
        <div style={{ color: '#9ca3af', marginBottom: '2rem' }}>January 21, 2026 • Tutorials</div>
        <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#d1d5db' }}>
          <p style={{ marginBottom: '1.5rem' }}>You do not need to be a developer to build powerful AI integrations.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Zapier</h2>
          <p style={{ marginBottom: '1rem' }}>Connect AI to thousands of apps.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Make</h2>
          <p>Visual workflow builder for complex integrations.</p>
        </div>
      </div>
    </div>
  );
}
