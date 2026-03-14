export const metadata = {
  title: 'The 5-Minute Daily Plan with AI',
  description: 'Create a productive daily plan in just 5 minutes using AI. Never start your day unprepared again.',
};

export default function BlogPost() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0d1b2a 100%)', color: '#fff', fontFamily: 'system-ui, sans-serif', padding: '2rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '2rem' }}>
        <a href="/blog" style={{ color: '#00d4ff', textDecoration: 'none' }}>← Back to Blog</a>
        <h1 style={{ fontSize: '2.2rem', marginTop: '1rem', marginBottom: '1rem' }}>The 5-Minute Daily Plan with AI</h1>
        <div style={{ color: '#9ca3af', marginBottom: '2rem' }}>February 19, 2026 • Productivity Tips</div>
        <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#d1d5db' }}>
          <p style={{ marginBottom: '1.5rem' }}>Here's how to plan your entire day in 5 minutes flat.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>1. Input Tasks (1 min)</h2>
          <p style={{ marginBottom: '1rem' }}>Tell AI what you need to get done this week.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>2. AI Prioritizes (1 min)</h2>
          <p style={{ marginBottom: '1rem' }}>AI organizes by urgency and impact.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>3. Time Block (2 min)</p>
          <p style={{ marginBottom: '1rem' }}>AI suggests optimal time blocks.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>4. Review & Adjust (1 min)</h2>
          <p>Make final tweaks. You're ready.</p>
        </div>
      </div>
    </div>
  );
}
