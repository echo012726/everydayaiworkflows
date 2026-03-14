export const metadata = {
  title: 'Zapier vs Make: AI Automation Platforms',
  description: 'Compare the top AI automation platforms. Find the right tool for your workflows.',
};

export default function BlogPost() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0d1b2a 100%)', color: '#fff', fontFamily: 'system-ui, sans-serif', padding: '2rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '2rem' }}>
        <a href="/blog" style={{ color: '#00d4ff', textDecoration: 'none' }}>← Back to Blog</a>
        <h1 style={{ fontSize: '2.2rem', marginTop: '1rem', marginBottom: '1rem' }}>Zapier vs Make: AI Automation Platforms</h1>
        <div style={{ color: '#9ca3af', marginBottom: '2rem' }}>February 5, 2026 • AI Tools Reviews</div>
        <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#d1d5db' }}>
          <p style={{ marginBottom: '1.5rem' }}>Both automate your work. Here is how they differ.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Zapier</h2>
          <p style={{ marginBottom: '1rem' }}>Easier for beginners. More integrations. $20/month minimum.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Make</h2>
          <p>More powerful. Visual workflow builder. Free tier more generous.</p>
        </div>
      </div>
    </div>
  );
}
