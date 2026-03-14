export const metadata = {
  title: 'From 50 Hours to 20 Hours: My AI Journey',
  description: 'How I went from working overtime every week to a 20-hour workweek with AI help.',
};

export default function BlogPost() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0d1b2a 100%)', color: '#fff', fontFamily: 'system-ui, sans-serif', padding: '2rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '2rem' }}>
        <a href="/blog" style={{ color: '#00d4ff', textDecoration: 'none' }}>← Back to Blog</a>
        <h1 style={{ fontSize: '2.2rem', marginTop: '1rem', marginBottom: '1rem' }}>From 50 Hours to 20 Hours: My AI Journey</h1>
        <div style={{ color: '#9ca3af', marginBottom: '2rem' }}>February 25, 2026 • Productivity Tips</div>
        <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#d1d5db' }}>
          <p style={{ marginBottom: '1.5rem' }}>Six months ago I was working 50 hours a week. Now I'm down to 20. Here's the journey.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Month 1: The Realization</h2>
          <p style={{ marginBottom: '1rem' }}>I tracked my time. 60% was spent on tasks AI could do.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Month 2-3: Experimentation</h2>
          <p style={{ marginBottom: '1rem' }}>Tried different AI tools. Found what worked for my specific role.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Month 4-5: Automation</h2>
          <p style={{ marginBottom: '1rem' }}>Built workflows that ran automatically. Started delegating to AI.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Month 6: The New Normal</h2>
          <p>20-hour weeks are now standard. More rest, better work.</p>
        </div>
      </div>
    </div>
  );
}
