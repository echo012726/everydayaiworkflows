export const metadata = {
  title: 'How This Startup Uses AI to 10x Productivity',
  description: 'A Series A startup shares how AI helped them 10x team productivity.',
};

export default function BlogPost() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0d1b2a 100%)', color: '#fff', fontFamily: 'system-ui, sans-serif', padding: '2rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '2rem' }}>
        <a href="/blog" style={{ color: '#00d4ff', textDecoration: 'none' }}>← Back to Blog</a>
        <h1 style={{ fontSize: '2.2rem', marginTop: '1rem', marginBottom: '1rem' }}>How This Startup Uses AI to 10x Productivity</h1>
        <div style={{ color: '#9ca3af', marginBottom: '2rem' }}>January 12, 2026 • Case Studies</div>
        <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#d1d5db' }}>
          <p style={{ marginBottom: '1.5rem' }}>This 20-person startup operates like 200. Here is their AI strategy.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>The Stack</h2>
          <p style={{ marginBottom: '1rem' }}>ChatGPT, Zapier, CustomGPTs, and more.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Results</h2>
          <p>10x output with the same headcount.</p>
        </div>
      </div>
    </div>
  );
}
