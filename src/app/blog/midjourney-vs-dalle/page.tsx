export const metadata = {
  title: 'Midjourney vs DALL-E 3: Image Generation Battle',
  description: 'We test Midjourney and DALL-E 3 side by side. Which AI image generator wins in 2026?',
};

export default function BlogPost() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0d1b2a 100%)', color: '#fff', fontFamily: 'system-ui, sans-serif', padding: '2rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '2rem' }}>
        <a href="/blog" style={{ color: '#00d4ff', textDecoration: 'none' }}>← Back to Blog</a>
        <h1 style={{ fontSize: '2.2rem', marginTop: '1rem', marginBottom: '1rem' }}>Midjourney vs DALL-E 3: Image Generation Battle</h1>
        <div style={{ color: '#9ca3af', marginBottom: '2rem' }}>February 28, 2026 • AI Tools Reviews</div>
        <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#d1d5db' }}>
          <p style={{ marginBottom: '1.5rem' }}>Two giants in AI image generation. Here's how they compare.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Midjourney Wins For</h2>
          <p style={{ marginBottom: '1rem' }}>Artistic images, unique styles, Discord integration. Best for creative exploration.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>DALL-E 3 Wins For</h2>
          <p style={{ marginBottom: '1rem' }}>Text rendering, integration with ChatGPT, commercial usage rights.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Pricing</h2>
          <p>Midjourney: $10-30/month. DALL-E 3: $20/month via ChatGPT Plus.</p>
        </div>
      </div>
    </div>
  );
}
