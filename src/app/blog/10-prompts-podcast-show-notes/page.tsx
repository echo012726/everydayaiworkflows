export const metadata = {
  title: '10 Prompts for Podcast Show Notes',
  description: 'Create show notes that grow your podcast audience.',
};

export default function BlogPost() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0d1b2a 100%)', color: '#fff', fontFamily: 'system-ui, sans-serif', padding: '2rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '2rem' }}>
        <a href="/blog" style={{ color: '#00d4ff', textDecoration: 'none' }}>← Back to Blog</a>
        <h1 style={{ fontSize: '2.2rem', marginTop: '1rem', marginBottom: '1rem' }}>10 Prompts for Podcast Show Notes</h1>
        <div style={{ color: '#9ca3af', marginBottom: '2rem' }}>December 18, 2025 • AI Prompts</div>
        <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#d1d5db' }}>
          <p style={{ marginBottom: '1.5rem' }}>Show notes that attract new listeners.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Timestamps</h2>
          <p style={{ marginBottom: '1rem' }}>Generate episode timestamps automatically.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Summaries</h2>
          <p>Create compelling episode summaries.</p>
        </div>
      </div>
    </div>
  );
}
