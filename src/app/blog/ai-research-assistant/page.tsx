export const metadata = {
  title: 'How to Build an AI Research Assistant',
  description: 'Create a personal AI that helps with research and learning.',
};

export default function BlogPost() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0d1b2a 100%)', color: '#fff', fontFamily: 'system-ui, sans-serif', padding: '2rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '2rem' }}>
        <a href="/blog" style={{ color: '#00d4ff', textDecoration: 'none' }}>← Back to Blog</a>
        <h1 style={{ fontSize: '2.2rem', marginTop: '1rem', marginBottom: '1rem' }}>How to Build an AI Research Assistant</h1>
        <div style={{ color: '#9ca3af', marginBottom: '2rem' }}>January 13, 2026 • Tutorials</div>
        <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#d1d5db' }}>
          <p style={{ marginBottom: '1.5rem' }}>Build an AI that helps you research anything.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Custom Knowledge</h2>
          <p style={{ marginBottom: '1rem' }}>Feed it your sources and notes.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Continuous Learning</h2>
          <p>It gets smarter the more you use it.</p>
        </div>
      </div>
    </div>
  );
}
