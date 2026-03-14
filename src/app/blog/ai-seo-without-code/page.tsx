export const metadata = {
  title: 'How to Use AI for SEO Without Technical Skills',
  description: 'Improve your search rankings with AI. No technical expertise required.',
};

export default function BlogPost() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0d1b2a 100%)', color: '#fff', fontFamily: 'system-ui, sans-serif', padding: '2rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '2rem' }}>
        <a href="/blog" style={{ color: '#00d4ff', textDecoration: 'none' }}>← Back to Blog</a>
        <h1 style={{ fontSize: '2.2rem', marginTop: '1rem', marginBottom: '1rem' }}>How to Use AI for SEO Without Technical Skills</h1>
        <div style={{ color: '#9ca3af', marginBottom: '2rem' }}>February 1, 2026 • Tutorials</div>
        <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#d1d5db' }}>
          <p style={{ marginBottom: '1.5rem' }}>SEO does not have to be complicated. Let AI help you rank higher.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Keyword Research</h2>
          <p style={{ marginBottom: '1rem' }}>AI finds relevant keywords in seconds.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Content Optimization</h2>
          <p style={{ marginBottom: '1rem' }}>AI suggests improvements for existing content.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Meta Descriptions</h2>
          <p>AI writes optimized meta descriptions automatically.</p>
        </div>
      </div>
    </div>
  );
}
