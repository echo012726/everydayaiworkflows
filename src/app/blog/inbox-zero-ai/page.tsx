export const metadata = {
  title: 'How I Use AI for Inbox Zero Every Day',
  description: 'A practical system for achieving inbox zero using AI. Never let email pile up again.',
};

export default function BlogPost() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0d1b2a 100%)', color: '#fff', fontFamily: 'system-ui, sans-serif', padding: '2rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '2rem' }}>
        <a href="/blog" style={{ color: '#00d4ff', textDecoration: 'none' }}>← Back to Blog</a>
        <h1 style={{ fontSize: '2.2rem', marginTop: '1rem', marginBottom: '1rem' }}>How I Use AI for Inbox Zero Every Day</h1>
        <div style={{ color: '#9ca3af', marginBottom: '2rem' }}>February 23, 2026 • Productivity Tips</div>
        <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#d1d5db' }}>
          <p style={{ marginBottom: '1.5rem' }}>Email was consuming my life. Now AI handles 80% of it. Here's my system.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Morning Triage (5 min)</h2>
          <p style={{ marginBottom: '1rem' }}>AI categorizes emails: Urgent, This Week, Read/Archive.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Quick Responses (10 min)</h2>
          <p style={{ marginBottom: '1rem' }}>AI drafts responses. I review and send.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Weekly Deep Clean (15 min)</h2>
          <p>AI identifies newsletters, promotions, and emails to unsubscribe from.</p>
        </div>
      </div>
    </div>
  );
}
