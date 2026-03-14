export const metadata = {
  title: 'How to Automate Social Media with AI',
  description: 'Create and schedule social media posts automatically with AI.',
};

export default function BlogPost() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0d1b2a 100%)', color: '#fff', fontFamily: 'system-ui, sans-serif', padding: '2rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '2rem' }}>
        <a href="/blog" style={{ color: '#00d4ff', textDecoration: 'none' }}>← Back to Blog</a>
        <h1 style={{ fontSize: '2.2rem', marginTop: '1rem', marginBottom: '1rem' }}>How to Automate Social Media with AI</h1>
        <div style={{ color: '#9ca3af', marginBottom: '2rem' }}>January 30, 2026 • Tutorials</div>
        <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#d1d5db' }}>
          <p style={{ marginBottom: '1.5rem' }}>Social media does not have to take hours. Automate it with AI.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Content Generation</h2>
          <p style={{ marginBottom: '1rem' }}>AI writes posts in your brand voice.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Scheduling</h2>
          <p style={{ marginBottom: '1rem' }}>Automate posting across platforms.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Engagement</h2>
          <p>AI can help with responding to comments.</p>
        </div>
      </div>
    </div>
  );
}
