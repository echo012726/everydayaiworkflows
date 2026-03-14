export const metadata = {
  title: 'Creating AI-Generated Images for Business',
  description: 'Use AI image generators to create professional graphics for your business.',
};

export default function BlogPost() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0d1b2a 100%)', color: '#fff', fontFamily: 'system-ui, sans-serif', padding: '2rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '2rem' }}>
        <a href="/blog" style={{ color: '#00d4ff', textDecoration: 'none' }}>← Back to Blog</a>
        <h1 style={{ fontSize: '2.2rem', marginTop: '1rem', marginBottom: '1rem' }}>Creating AI-Generated Images for Business</h1>
        <div style={{ color: '#9ca3af', marginBottom: '2rem' }}>January 31, 2026 • Tutorials</div>
        <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#d1d5db' }}>
          <p style={{ marginBottom: '1.5rem' }}>AI image generators can create professional graphics. Here is how to use them.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Choose Your Tool</h2>
          <p style={{ marginBottom: '1rem' }}>Midjourney, DALL-E, or Microsoft Designer.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Write Effective Prompts</h2>
          <p style={{ marginBottom: '1rem' }}>Learn the art of prompt engineering for images.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Use Cases</h2>
          <p>Social media, website, marketing materials, and more.</p>
        </div>
      </div>
    </div>
  );
}
