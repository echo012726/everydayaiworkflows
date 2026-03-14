export const metadata = {
  title: 'AI-Powered Goal Tracking System',
  description: 'Set goals, track progress, and stay accountable with AI. Never miss a target again.',
};

export default function BlogPost() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0d1b2a 100%)', color: '#fff', fontFamily: 'system-ui, sans-serif', padding: '2rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '2rem' }}>
        <a href="/blog" style={{ color: '#00d4ff', textDecoration: 'none' }}>← Back to Blog</a>
        <h1 style={{ fontSize: '2.2rem', marginTop: '1rem', marginBottom: '1rem' }}>AI-Powered Goal Tracking System</h1>
        <div style={{ color: '#9ca3af', marginBottom: '2rem' }}>February 14, 2026 • Productivity Tips</div>
        <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#d1d5db' }}>
          <p style={{ marginBottom: '1.5rem' }}>Goals without tracking are just wishes. AI makes tracking effortless.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Goal Setting</h2>
          <p style={{ marginBottom: '1rem' }}>AI helps set SMART goals that actually work.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Progress Check-Ins</h2>
          <p style={{ marginBottom: '1rem' }}>Weekly AI check-ins keep you accountable.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Course Correction</h2>
          <p>AI suggests adjustments when you're off track.</p>
        </div>
      </div>
    </div>
  );
}
