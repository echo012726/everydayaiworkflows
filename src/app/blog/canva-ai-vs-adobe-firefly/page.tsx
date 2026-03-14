export const metadata = {
  title: 'Canva AI vs Adobe Firefly: Design Tools Battle',
  description: 'AI-powered design tools compared. Create stunning graphics without design skills.',
};

export default function BlogPost() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0d1b2a 100%)', color: '#fff', fontFamily: 'system-ui, sans-serif', padding: '2rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '2rem' }}>
        <a href="/blog" style={{ color: '#00d4ff', textDecoration: 'none' }}>← Back to Blog</a>
        <h1 style={{ fontSize: '2.2rem', marginTop: '1rem', marginBottom: '1rem' }}>Canva AI vs Adobe Firefly</h1>
        <div style={{ color: '#9ca3af', marginBottom: '2rem' }}>February 7, 2026 • AI Tools Reviews</div>
        <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#d1d5db' }}>
          <p style={{ marginBottom: '1.5rem' }}>Both bring AI to design. Here is how they differ.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Canva AI</h2>
          <p style={{ marginBottom: '1rem' }}>Easier to use. Better templates. Included in Pro. $13/month.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Adobe Firefly</h2>
          <p>More powerful generation. Better for pros. Part of Creative Cloud.</p>
        </div>
      </div>
    </div>
  );
}
