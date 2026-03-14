export const metadata = {
  title: 'Perplexity vs Google: AI Search Showdown',
  description: 'Perplexity challenges Google with AI-powered search. We compare both to help you choose the right tool.',
};

export default function BlogPost() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0d1b2a 100%)', color: '#fff', fontFamily: 'system-ui, sans-serif', padding: '2rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '2rem' }}>
        <a href="/blog" style={{ color: '#00d4ff', textDecoration: 'none' }}>← Back to Blog</a>
        
        <h1 style={{ fontSize: '2.2rem', marginTop: '1rem', marginBottom: '1rem', lineHeight: '1.3' }}>Perplexity vs Google: AI Search Showdown</h1>
        
        <div style={{ color: '#9ca3af', marginBottom: '2rem' }}>March 9, 2026 • AI Tools Reviews</div>
        
        <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#d1d5db' }}>
          <p style={{ marginBottom: '1.5rem' }}>Google has been king of search for decades. Perplexity is the new challenger. Here's how they compare.</p>
          
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>What Perplexity Does Better</h2>
          <p style={{ marginBottom: '1rem' }}>Perplexity gives you direct answers with sources, not a list of links. You get the answer AND where it came from. For research, this is game-changing.</p>
          
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>What Google Does Better</h2>
          <p style={{ marginBottom: '1rem' }}>Google still wins for local search, product searches, and when you want to browse multiple sources. Its index is unmatched.</p>
          
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Our Recommendation</h2>
          <p style={{ marginBottom: '1rem' }}>Use Perplexity for research, learning, and complex queries. Use Google for everything else. They complement each other.</p>
        </div>
      </div>
    </div>
  );
}
