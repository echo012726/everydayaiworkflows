export const metadata = {
  title: 'AI for Customer Feedback Analysis',
  description: 'Automatically analyze customer feedback to find insights, patterns, and opportunities for improvement.',
};

export default function BlogPost() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0d1b2a 100%)', color: '#fff', fontFamily: 'system-ui, sans-serif', padding: '2rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '2rem' }}>
        <a href="/blog" style={{ color: '#00d4ff', textDecoration: 'none' }}>← Back to Blog</a>
        <h1 style={{ fontSize: '2.2rem', marginTop: '1rem', marginBottom: '1rem' }}>AI for Customer Feedback Analysis</h1>
        <div style={{ color: '#9ca3af', marginBottom: '2rem' }}>February 17, 2026 • Productivity Tips</div>
        <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#d1d5db' }}>
          <p style={{ marginBottom: '1.5rem' }}>Customer feedback is gold. But analyzing it manually is a chore. Let AI help.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Collection</h2>
          <p style={{ marginBottom: '1rem' }}>Aggregate feedback from all channels automatically.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Analysis</h2>
          <p style={{ marginBottom: '1rem' }}>AI identifies themes, sentiment, and patterns.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Action Items</h2>
          <p>AI suggests specific actions based on feedback.</p>
        </div>
      </div>
    </div>
  );
}
