export const metadata = {
  title: 'How to Use AI for Strategic Planning',
  description: 'Use AI to analyze markets, identify opportunities, and build better strategies in less time.',
};

export default function BlogPost() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0d1b2a 100%)', color: '#fff', fontFamily: 'system-ui, sans-serif', padding: '2rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '2rem' }}>
        <a href="/blog" style={{ color: '#00d4ff', textDecoration: 'none' }}>← Back to Blog</a>
        <h1 style={{ fontSize: '2.2rem', marginTop: '1rem', marginBottom: '1rem' }}>How to Use AI for Strategic Planning</h1>
        <div style={{ color: '#9ca3af', marginBottom: '2rem' }}>February 18, 2026 • Tutorials</div>
        <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#d1d5db' }}>
          <p style={{ marginBottom: '1.5rem' }}>Strategic planning doesn't have to take weeks. AI speeds up every step.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Market Analysis</h2>
          <p style={{ marginBottom: '1rem' }}>AI aggregates market data and identifies trends.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Competitor Research</h2>
          <p style={{ marginBottom: '1rem' }}>AI profiles competitors and finds gaps.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Scenario Planning</h2>
          <p>AI models different strategic scenarios and outcomes.</p>
        </div>
      </div>
    </div>
  );
}
