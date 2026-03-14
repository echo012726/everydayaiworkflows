export const metadata = {
  title: 'AI-Powered Note-Taking: Complete Guide',
  description: 'How to use AI to take better notes, automatically organize them, and actually remember what you learn.',
};

export default function BlogPost() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0d1b2a 100%)', color: '#fff', fontFamily: 'system-ui, sans-serif', padding: '2rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '2rem' }}>
        <a href="/blog" style={{ color: '#00d4ff', textDecoration: 'none' }}>← Back to Blog</a>
        <h1 style={{ fontSize: '2.2rem', marginTop: '1rem', marginBottom: '1rem' }}>AI-Powered Note-Taking: Complete Guide</h1>
        <div style={{ color: '#9ca3af', marginBottom: '2rem' }}>February 24, 2026 • Tutorials</div>
        <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#d1d5db' }}>
          <p style={{ marginBottom: '1.5rem' }}>Stop taking notes you'll never read. Let AI help you capture and retain knowledge.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Capture</h2>
          <p style={{ marginBottom: '1rem' }}>Use voice-to-text + AI to capture ideas hands-free.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Organize</h2>
          <p style={{ marginBottom: '1rem' }}>AI automatically tags and connects related notes.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Review</h2>
          <p>AI surfaces relevant notes when you need them.</p>
        </div>
      </div>
    </div>
  );
}
