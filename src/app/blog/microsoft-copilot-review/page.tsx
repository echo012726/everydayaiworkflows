export const metadata = {
  title: 'Microsoft Copilot: Full Feature Review',
  description: 'Microsoft Copilot is everywhere. We review all the features and pricing.',
};

export default function BlogPost() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0d1b2a 100%)', color: '#fff', fontFamily: 'system-ui, sans-serif', padding: '2rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '2rem' }}>
        <a href="/blog" style={{ color: '#00d4ff', textDecoration: 'none' }}>← Back to Blog</a>
        <h1 style={{ fontSize: '2.2rem', marginTop: '1rem', marginBottom: '1rem' }}>Microsoft Copilot: Full Feature Review</h1>
        <div style={{ color: '#9ca3af', marginBottom: '2rem' }}>January 25, 2026 • AI Tools Reviews</div>
        <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#d1d5db' }}>
          <p style={{ marginBottom: '1.5rem' }}>Microsoft has integrated Copilot everywhere. Here is the full breakdown.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Windows Copilot</h2>
          <p style={{ marginBottom: '1rem' }}>AI assistant built into Windows.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Microsoft 365 Copilot</h2>
          <p style={{ marginBottom: '1rem' }}>AI in Word, Excel, PowerPoint. $30/month.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Edge Copilot</h2>
          <p>AI in the browser.</p>
        </div>
      </div>
    </div>
  );
}
