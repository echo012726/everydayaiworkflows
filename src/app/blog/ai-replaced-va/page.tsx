export const metadata = {
  title: 'The AI Workflow That Replaced My VA',
  description: 'How I automated the tasks I used to pay a virtual assistant to do. Save $2,000/month.',
};

export default function BlogPost() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0d1b2a 100%)', color: '#fff', fontFamily: 'system-ui, sans-serif', padding: '2rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '2rem' }}>
        <a href="/blog" style={{ color: '#00d4ff', textDecoration: 'none' }}>← Back to Blog</a>
        <h1 style={{ fontSize: '2.2rem', marginTop: '1rem', marginBottom: '1rem' }}>The AI Workflow That Replaced My VA</h1>
        <div style={{ color: '#9ca3af', marginBottom: '2rem' }}>February 27, 2026 • Case Studies</div>
        <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#d1d5db' }}>
          <p style={{ marginBottom: '1.5rem' }}>I used to pay a virtual assistant $2,000/month. Now AI handles 80% of the work.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>What My VA Did</h2>
          <p style={{ marginBottom: '1rem' }}>Email management, scheduling, research, content drafting, follow-ups.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>What AI Does Now</h2>
          <p style={{ marginBottom: '1rem' }}>Same tasks, faster, 24/7, for $50/month in subscriptions.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>The Setup</h2>
          <p>ChatGPT + Zapier + Google Calendar + Email. Total setup time: 4 hours.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>The Savings</h2>
          <p>$24,000/year. The AI still needs oversight, but it's a fraction of the cost.</p>
        </div>
      </div>
    </div>
  );
}
