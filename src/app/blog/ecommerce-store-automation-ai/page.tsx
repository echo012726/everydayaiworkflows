export const metadata = {
  title: 'How This E-commerce Store Automates Everything with AI',
  description: 'An e-commerce brand shares their AI automation setup.',
};

export default function BlogPost() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0d1b2a 100%)', color: '#fff', fontFamily: 'system-ui, sans-serif', padding: '2rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '2rem' }}>
        <a href="/blog" style={{ color: '#00d4ff', textDecoration: 'none' }}>← Back to Blog</a>
        <h1 style={{ fontSize: '2.2rem', marginTop: '1rem', marginBottom: '1rem' }}>How This E-commerce Store Automates Everything with AI</h1>
        <div style={{ color: '#9ca3af', marginBottom: '2rem' }}>January 6, 2026 • Case Studies</div>
        <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#d1d5db' }}>
          <p style={{ marginBottom: '1.5rem' }}>This brand runs with minimal manual work.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Customer Service</h2>
          <p style={{ marginBottom: '1rem' }}>AI handles 80% of support tickets.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Marketing</h2>
          <p>Automated email and ad optimization.</p>
        </div>
      </div>
    </div>
  );
}
