export const metadata = {
  title: 'Otter vs Rev: Transcription Tools Compared',
  description: 'Convert speech to text with AI. We compare the two leading transcription services.',
};

export default function BlogPost() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0d1b2a 100%)', color: '#fff', fontFamily: 'system-ui, sans-serif', padding: '2rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '2rem' }}>
        <a href="/blog" style={{ color: '#00d4ff', textDecoration: 'none' }}>← Back to Blog</a>
        <h1 style={{ fontSize: '2.2rem', marginTop: '1rem', marginBottom: '1rem' }}>Otter vs Rev: Transcription Tools Compared</h1>
        <div style={{ color: '#9ca3af', marginBottom: '2rem' }}>February 8, 2026 • AI Tools Reviews</div>
        <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#d1d5db' }}>
          <p style={{ marginBottom: '1.5rem' }}>Need meeting transcription? Here is how these tools compare.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Otter.ai</h2>
          <p style={{ marginBottom: '1rem' }}>Real-time transcription. Great for live meetings. Free tier available.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Rev</h2>
          <p>Higher accuracy. Human + AI option. Pay per minute.</p>
        </div>
      </div>
    </div>
  );
}
