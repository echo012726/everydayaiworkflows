export const metadata = {
  title: 'Notion AI vs Obsidian: Which Second Brain is Better?',
  description: 'We compare Notion AI and Obsidian for personal knowledge management. Find the right tool for your second brain.',
};

export default function BlogPost() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0d1b2a 100%)', color: '#fff', fontFamily: 'system-ui, sans-serif', padding: '2rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '2rem' }}>
        <a href="/blog" style={{ color: '#00d4ff', textDecoration: 'none' }}>← Back to Blog</a>
        <h1 style={{ fontSize: '2.2rem', marginTop: '1rem', marginBottom: '1rem' }}>Notion AI vs Obsidian: Which Second Brain is Better?</h1>
        <div style={{ color: '#9ca3af', marginBottom: '2rem' }}>March 1, 2026 • AI Tools Reviews</div>
        <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#d1d5db' }}>
          <p style={{ marginBottom: '1.5rem' }}>Both are popular for personal knowledge management. Here's how to choose.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Notion AI Wins For</h2>
          <p style={{ marginBottom: '1rem' }}>Collaboration, databases, published pages. Better if you share knowledge with others.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Obsidian Wins For</h2>
          <p style={{ marginBottom: '1rem' }}>Local-first, privacy, linking between notes. Better for personal knowledge.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Verdict</h2>
          <p>Team? Notion. Solo? Obsidian. Many use both.</p>
        </div>
      </div>
    </div>
  );
}
