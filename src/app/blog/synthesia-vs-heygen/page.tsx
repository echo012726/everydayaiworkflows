export const metadata = {
  title: 'Synthesia vs HeyGen: AI Avatar Tools Review',
  description: 'Create AI-powered videos with virtual avatars. We compare the two leading platforms.',
};

export default function BlogPost() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0d1b2a 100%)', color: '#fff', fontFamily: 'system-ui, sans-serif', padding: '2rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '2rem' }}>
        <a href="/blog" style={{ color: '#00d4ff', textDecoration: 'none' }}>← Back to Blog</a>
        <h1 style={{ fontSize: '2.2rem', marginTop: '1rem', marginBottom: '1rem' }}>Synthesia vs HeyGen: AI Avatar Tools Review</h1>
        <div style={{ color: '#9ca3af', marginBottom: '2rem' }}>February 10, 2026 • AI Tools Reviews</div>
        <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#d1d5db' }}>
          <p style={{ marginBottom: '1.5rem' }}>AI avatars are revolutionizing video content. Here is how these tools compare.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Synthesia</h2>
          <p style={{ marginBottom: '1rem' }}>Enterprise-focused. Best for training videos. $30/month.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>HeyGen</h2>
          <p>More affordable. Better for marketing content. $29/month.</p>
        </div>
      </div>
    </div>
  );
}
