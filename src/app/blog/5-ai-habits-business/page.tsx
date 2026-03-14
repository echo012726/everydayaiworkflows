export const metadata = {
  title: '5 AI Habits That Transformed My Business',
  description: 'Five daily AI habits that completely changed how I run my business. Simple but powerful.',
};

export default function BlogPost() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0d1b2a 100%)', color: '#fff', fontFamily: 'system-ui, sans-serif', padding: '2rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '2rem' }}>
        <a href="/blog" style={{ color: '#00d4ff', textDecoration: 'none' }}>← Back to Blog</a>
        <h1 style={{ fontSize: '2.2rem', marginTop: '1rem', marginBottom: '1rem' }}>5 AI Habits That Transformed My Business</h1>
        <div style={{ color: '#9ca3af', marginBottom: '2rem' }}>February 26, 2026 • Productivity Tips</div>
        <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#d1d5db' }}>
          <p style={{ marginBottom: '1.5rem' }}>Small daily habits compound into massive results. Here are the AI habits that changed everything.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>1. Morning Email Draft</h2>
          <p style={{ marginBottom: '1rem' }}>Start each day by drafting responses to key emails with AI. 15 minutes saved daily.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>2. Midday Content Block</h2>
          <p style={{ marginBottom: '1rem' }}>Use AI to draft content while your creativity is freshest.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>3. End-of-Day Review</h2>
          <p style={{ marginBottom: '1rem' }}>AI helps summarize what you accomplished and plan tomorrow.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>4. Weekly Strategy Session</h2>
          <p style={{ marginBottom: '1rem' }}>Use AI to analyze your week's data and suggest improvements.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>5. Continuous Learning</h2>
          <p>Ask AI to explain one new concept daily. Compound knowledge over time.</p>
        </div>
      </div>
    </div>
  );
}
