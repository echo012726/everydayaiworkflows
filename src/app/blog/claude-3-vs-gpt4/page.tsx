export const metadata = {
  title: 'Claude 3 Opus vs GPT-4: Which is Better?',
  description: 'We test the two most powerful AI models side by side. Find out which wins.',
};

export default function BlogPost() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0d1b2a 100%)', color: '#fff', fontFamily: 'system-ui, sans-serif', padding: '2rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '2rem' }}>
        <a href="/blog" style={{ color: '#00d4ff', textDecoration: 'none' }}>← Back to Blog</a>
        <h1 style={{ fontSize: '2.2rem', marginTop: '1rem', marginBottom: '1rem' }}>Claude 3 Opus vs GPT-4</h1>
        <div style={{ color: '#9ca3af', marginBottom: '2rem' }}>January 27, 2026 • AI Tools Reviews</div>
        <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#d1d5db' }}>
          <p style={{ marginBottom: '1.5rem' }}>Two titans of AI. Here is how they compare on real tasks.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Writing</h2>
          <p style={{ marginBottom: '1rem' }}>Claude produces more nuanced prose. GPT-4 is faster.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Coding</h2>
          <p style={{ marginBottom: '1rem' }}>GPT-4 has slight edge on complex coding tasks.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Reasoning</h2>
          <p>Claude excels at step-by-step reasoning.</p>
        </div>
      </div>
    </div>
  );
}
