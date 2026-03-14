export const metadata = {
  title: 'Grammarly vs LanguageTool: AI Writing Assistants',
  description: 'Two popular grammar checkers compared. Find the right tool for error-free writing.',
};

export default function BlogPost() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0d1b2a 100%)', color: '#fff', fontFamily: 'system-ui, sans-serif', padding: '2rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '2rem' }}>
        <a href="/blog" style={{ color: '#00d4ff', textDecoration: 'none' }}>← Back to Blog</a>
        <h1 style={{ fontSize: '2.2rem', marginTop: '1rem', marginBottom: '1rem' }}>Grammarly vs LanguageTool</h1>
        <div style={{ color: '#9ca3af', marginBottom: '2rem' }}>February 9, 2026 • AI Tools Reviews</div>
        <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#d1d5db' }}>
          <p style={{ marginBottom: '1.5rem' }}>Both help with grammar and spelling. Here is what makes each unique.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Grammarly</h2>
          <p style={{ marginBottom: '1rem' }}>Best overall. Excellent suggestions. Premium is worth it. $12/month.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>LanguageTool</h2>
          <p>Open source. Free tier is robust. Privacy-focused.</p>
        </div>
      </div>
    </div>
  );
}
