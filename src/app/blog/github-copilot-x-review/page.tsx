export const metadata = {
  title: 'GitHub Copilot X: Complete Review',
  description: 'GitHub Copilot X brings AI to the entire developer workflow. Our in-depth review.',
};

export default function BlogPost() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0d1b2a 100%)', color: '#fff', fontFamily: 'system-ui, sans-serif', padding: '2rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '2rem' }}>
        <a href="/blog" style={{ color: '#00d4ff', textDecoration: 'none' }}>← Back to Blog</a>
        <h1 style={{ fontSize: '2.2rem', marginTop: '1rem', marginBottom: '1rem' }}>GitHub Copilot X: Complete Review</h1>
        <div style={{ color: '#9ca3af', marginBottom: '2rem' }}>February 2, 2026 • AI Tools Reviews</div>
        <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#d1d5db' }}>
          <p style={{ marginBottom: '1.5rem' }}>Copilot X is a major upgrade. Here is what you need to know.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>New Features</h2>
          <p style={{ marginBottom: '1rem' }}>Chat interface, CLI assistance, and whole-repo understanding.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Pricing</h2>
          <p>$10/month for Pro. Free for open source maintainers.</p>
        </div>
      </div>
    </div>
  );
}
