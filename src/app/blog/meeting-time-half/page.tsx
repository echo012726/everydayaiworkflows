export const metadata = {
  title: 'AI Tools That Cut My Meeting Time in Half',
  description: 'How I use AI to prepare faster, run better meetings, and follow up in minutes instead of hours.',
};

export default function BlogPost() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0d1b2a 100%)', color: '#fff', fontFamily: 'system-ui, sans-serif', padding: '2rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '2rem' }}>
        <a href="/blog" style={{ color: '#00d4ff', textDecoration: 'none' }}>← Back to Blog</a>
        <h1 style={{ fontSize: '2.2rem', marginTop: '1rem', marginBottom: '1rem' }}>AI Tools That Cut My Meeting Time in Half</h1>
        <div style={{ color: '#9ca3af', marginBottom: '2rem' }}>March 2, 2026 • Productivity Tips</div>
        <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#d1d5db' }}>
          <p style={{ marginBottom: '1.5rem' }}>Meetings are necessary but expensive. Here's how AI makes them more efficient.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Before: AI Preparation</h2>
          <p style={{ marginBottom: '1rem' }}>AI researches attendees, generates questions, and creates agendas. 10 minutes instead of 30.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>During: AI Transcription</h2>
          <p style={{ marginBottom: '1rem' }}>Otter.ai or similar transcribes in real-time. No more note-taking.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>After: AI Follow-Up</h2>
          <p style={{ marginBottom: '1rem' }}>AI converts notes to action items with owners. Send in 2 minutes.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Result</h2>
          <p>60% less time on meetings. Better outcomes. Happier teams.</p>
        </div>
      </div>
    </div>
  );
}
