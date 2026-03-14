export const metadata = {
  title: 'Building an AI Email Response System',
  description: 'Create an automated email response system that handles common inquiries.',
};

export default function BlogPost() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0d1b2a 100%)', color: '#fff', fontFamily: 'system-ui, sans-serif', padding: '2rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '2rem' }}>
        <a href="/blog" style={{ color: '#00d4ff', textDecoration: 'none' }}>← Back to Blog</a>
        <h1 style={{ fontSize: '2.2rem', marginTop: '1rem', marginBottom: '1rem' }}>Building an AI Email Response System</h1>
        <div style={{ color: '#9ca3af', marginBottom: '2rem' }}>January 29, 2026 • Tutorials</div>
        <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#d1d5db' }}>
          <p style={{ marginBottom: '1.5rem' }}>Automate email responses without losing the personal touch.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Categorize Incoming Emails</h2>
          <p style={{ marginBottom: '1rem' }}>AI sorts emails by type and urgency.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Generate Responses</h2>
          <p style={{ marginBottom: '1rem' }}>AI drafts responses based on templates.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Human Review</h2>
          <p>You review before sending.</p>
        </div>
      </div>
    </div>
  );
}
