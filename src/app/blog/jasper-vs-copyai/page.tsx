export const metadata = {
  title: 'Jasper vs Copy.ai vs Writesonic: AI Writing Tools Compared',
  description: 'We test the top AI writing tools to help you choose the right one for your needs.',
};

export default function BlogPost() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0d1b2a 100%)', color: '#fff', fontFamily: 'system-ui, sans-serif', padding: '2rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '2rem' }}>
        <a href="/blog" style={{ color: '#00d4ff', textDecoration: 'none' }}>← Back to Blog</a>
        <h1 style={{ fontSize: '2.2rem', marginTop: '1rem', marginBottom: '1rem' }}>Jasper vs Copy.ai vs Writesonic</h1>
        <div style={{ color: '#9ca3af', marginBottom: '2rem' }}>February 11, 2026 • AI Tools Reviews</div>
        <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#d1d5db' }}>
          <p style={{ marginBottom: '1.5rem' }}>Three popular AI writing tools. Here is how they compare.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Jasper</h2>
          <p style={{ marginBottom: '1rem' }}>Best for teams. Most templates. $49/month.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Copy.ai</h2>
          <p style={{ marginBottom: '1rem' }}>Best for freelancers. Simpler interface. Free tier available.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Writesonic</h2>
          <p>Best for SEO content. Good quality, competitive pricing.</p>
        </div>
      </div>
    </div>
  );
}
