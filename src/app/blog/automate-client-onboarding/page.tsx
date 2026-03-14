export const metadata = {
  title: 'Automating Client Onboarding with AI',
  description: 'How to create an automated client onboarding system that saves hours while delivering a personal experience.',
};

export default function BlogPost() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0d1b2a 100%)', color: '#fff', fontFamily: 'system-ui, sans-serif', padding: '2rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '2rem' }}>
        <a href="/blog" style={{ color: '#00d4ff', textDecoration: 'none' }}>← Back to Blog</a>
        <h1 style={{ fontSize: '2.2rem', marginTop: '1rem', marginBottom: '1rem' }}>Automating Client Onboarding with AI</h1>
        <div style={{ color: '#9ca3af', marginBottom: '2rem' }}>February 21, 2026 • Tutorials</div>
        <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#d1d5db' }}>
          <p style={{ marginBottom: '1.5rem' }}>Client onboarding can take hours. Here's how to automate most of it.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Step 1: Welcome Sequence</h2>
          <p style={{ marginBottom: '1rem' }}>AI sends personalized welcome emails based on client info.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Step 2: Document Collection</h2>
          <p style={{ marginBottom: '1rem' }}>Automated forms + AI extraction of key information.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Step 3: Setup Guide</h2>
          <p>AI generates customized setup instructions for each client.</p>
        </div>
      </div>
    </div>
  );
}
