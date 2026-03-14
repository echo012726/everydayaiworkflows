export const metadata = {
  title: 'The AI Stack I Use for Content Creation',
  description: 'My complete AI-powered content creation workflow. From idea to published post in hours, not days.',
};

export default function BlogPost() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0d1b2a 100%)', color: '#fff', fontFamily: 'system-ui, sans-serif', padding: '2rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '2rem' }}>
        <a href="/blog" style={{ color: '#00d4ff', textDecoration: 'none' }}>← Back to Blog</a>
        <h1 style={{ fontSize: '2.2rem', marginTop: '1rem', marginBottom: '1rem' }}>The AI Stack I Use for Content Creation</h1>
        <div style={{ color: '#9ca3af', marginBottom: '2rem' }}>February 22, 2026 • Productivity Tips</div>
        <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#d1d5db' }}>
          <p style={{ marginBottom: '1.5rem' }}>Here's my complete AI-powered content creation system.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Ideation: ChatGPT</h2>
          <p style={{ marginBottom: '1rem' }}>Generate topic ideas and outlines in seconds.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Writing: Claude</h2>
          <p style={{ marginBottom: '1rem' }}>First drafts and long-form content.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Editing: Grammarly + AI</h2>
          <p style={{ marginBottom: '1rem' }}>Grammar, clarity, and tone improvements.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Images: Midjourney</h2>
          <p>Custom featured images for every post.</p>
        </div>
      </div>
    </div>
  );
}
