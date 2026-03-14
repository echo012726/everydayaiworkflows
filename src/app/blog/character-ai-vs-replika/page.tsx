export const metadata = {
  title: 'Character AI vs Replika: AI Companions Compared',
  description: 'Chat with AI companions. We compare the two most popular AI chatbot platforms.',
};

export default function BlogPost() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0d1b2a 100%)', color: '#fff', fontFamily: 'system-ui, sans-serif', padding: '2rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '2rem' }}>
        <a href="/blog" style={{ color: '#00d4ff', textDecoration: 'none' }}>← Back to Blog</a>
        <h1 style={{ fontSize: '2.2rem', marginTop: '1rem', marginBottom: '1rem' }}>Character AI vs Replika: AI Companions Compared</h1>
        <div style={{ color: '#9ca3af', marginBottom: '2rem' }}>February 3, 2026 • AI Tools Reviews</div>
        <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#d1d5db' }}>
          <p style={{ marginBottom: '1.5rem' }}>AI companions serve different purposes. Here is how they compare.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Character AI</h2>
          <p style={{ marginBottom: '1rem' }}>Best for entertainment. Chat with characters. Completely free.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Replika</h2>
          <p>Best for emotional support. Personalized companion. Subscription available.</p>
        </div>
      </div>
    </div>
  );
}
