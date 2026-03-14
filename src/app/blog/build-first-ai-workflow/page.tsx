export const metadata = {
  title: 'How to Build Your First AI Workflow',
  description: 'A step-by-step guide to building your first AI automation workflow. No coding required.',
};

export default function BlogPost() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0d1b2a 100%)', color: '#fff', fontFamily: 'system-ui, sans-serif', padding: '2rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '2rem' }}>
        <a href="/blog" style={{ color: '#00d4ff', textDecoration: 'none' }}>← Back to Blog</a>
        <h1 style={{ fontSize: '2.2rem', marginTop: '1rem', marginBottom: '1rem' }}>How to Build Your First AI Workflow</h1>
        <div style={{ color: '#9ca3af', marginBottom: '2rem' }}>March 5, 2026 • Tutorials</div>
        <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#d1d5db' }}>
          <p style={{ marginBottom: '1.5rem' }}>You don't need to be a developer to build powerful AI workflows. Here's how.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Step 1: Identify a Repetitive Task</h2>
          <p style={{ marginBottom: '1rem' }}>Find something you do repeatedly that takes more than 10 minutes. That's your automation target.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Step 2: Break It Into Steps</h2>
          <p style={{ marginBottom: '1rem' }}>Write out exactly what you do, step by step. AI will handle each step.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Step 3: Choose Your Tool</h2>
          <p style={{ marginBottom: '1rem' }}>Start with ChatGPT for simple workflows. Use Zapier or Make for complex automations.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Step 4: Test and Refine</h2>
          <p>Run your workflow 5 times. Refine based on what works and what doesn't.</p>
        </div>
      </div>
    </div>
  );
}
