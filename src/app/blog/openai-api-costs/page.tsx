export const metadata = {
  title: 'OpenAI API Costs: Complete Breakdown',
  description: 'Everything you need to know about OpenAI API pricing.',
};

export default function BlogPost() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0d1b2a 100%)', color: '#fff', fontFamily: 'system-ui, sans-serif', padding: '2rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '2rem' }}>
        <a href="/blog" style={{ color: '#00d4ff', textDecoration: 'none' }}>← Back to Blog</a>
        <h1 style={{ fontSize: '2.2rem', marginTop: '1rem', marginBottom: '1rem' }}>OpenAI API Costs: Complete Breakdown</h1>
        <div style={{ color: '#9ca3af', marginBottom: '2rem' }}>January 2, 2026 • AI Tools Reviews</div>
        <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#d1d5db' }}>
          <p style={{ marginBottom: '1.5rem' }}>Understanding OpenAI pricing for developers.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>GPT-4o</h2>
          <p style={{ marginBottom: '1rem' }}>$2.50/million input tokens, $10/output tokens.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>GPT-4o Mini</h2>
          <p>$0.15/million input, $0.60/output.</p>
        </div>
      </div>
    </div>
  );
}
