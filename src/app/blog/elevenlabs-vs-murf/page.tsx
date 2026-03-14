export const metadata = {
  title: 'ElevenLabs vs Murf: Voice Generation Compared',
  description: 'Create AI-generated voiceovers. We compare the two leading voice synthesis platforms.',
};

export default function BlogPost() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0d1b2a 100%)', color: '#fff', fontFamily: 'system-ui, sans-serif', padding: '2rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '2rem' }}>
        <a href="/blog" style={{ color: '#00d4ff', textDecoration: 'none' }}>← Back to Blog</a>
        <h1 style={{ fontSize: '2.2rem', marginTop: '1rem', marginBottom: '1rem' }}>ElevenLabs vs Murf: Voice Generation Compared</h1>
        <div style={{ color: '#9ca3af', marginBottom: '2rem' }}>February 6, 2026 • AI Tools Reviews</div>
        <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#d1d5db' }}>
          <p style={{ marginBottom: '1.5rem' }}>AI voice generation is booming. Here is how these tools compare.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>ElevenLabs</h2>
          <p style={{ marginBottom: '1rem' }}>Best voice quality. Great for content creators. Free tier available.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Murf</h2>
          <p>More enterprise-focused. Better collaboration features.</p>
        </div>
      </div>
    </div>
  );
}
