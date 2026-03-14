export const metadata = {
  title: 'AI for Project Management: Complete Setup',
  description: 'How to use AI to manage projects more effectively. Less micromanaging, better results.',
};

export default function BlogPost() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0d1b2a 100%)', color: '#fff', fontFamily: 'system-ui, sans-serif', padding: '2rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '2rem' }}>
        <a href="/blog" style={{ color: '#00d4ff', textDecoration: 'none' }}>← Back to Blog</a>
        <h1 style={{ fontSize: '2.2rem', marginTop: '1rem', marginBottom: '1rem' }}>AI for Project Management: Complete Setup</h1>
        <div style={{ color: '#9ca3af', marginBottom: '2rem' }}>February 20, 2026 • Tutorials</div>
        <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#d1d5db' }}>
          <p style={{ marginBottom: '1.5rem' }}>AI can handle the coordination and tracking that eats project manager time.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Planning</h2>
          <p style={{ marginBottom: '1rem' }}>AI breaks down projects into tasks and estimates timelines.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Tracking</h2>
          <p style={{ marginBottom: '1rem' }}>AI updates progress and flags blockers automatically.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Reporting</h2>
          <p>AI generates status updates from project data.</p>
        </div>
      </div>
    </div>
  );
}
