export const metadata = {
  title: 'How to Automate 80% of Your Email with AI',
  description: 'A practical guide to using AI to handle 80% of your email automatically. Save hours every day.',
};

export default function BlogPost() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0d1b2a 100%)', color: '#fff', fontFamily: 'system-ui, sans-serif', padding: '2rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '2rem' }}>
        <a href="/blog" style={{ color: '#00d4ff', textDecoration: 'none' }}>← Back to Blog</a>
        <h1 style={{ fontSize: '2.2rem', marginTop: '1rem', marginBottom: '1rem' }}>How to Automate 80% of Your Email with AI</h1>
        <div style={{ color: '#9ca3af', marginBottom: '2rem' }}>March 6, 2026 • Productivity Tips</div>
        <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#d1d5db' }}>
          <p style={{ marginBottom: '1.5rem' }}>Email is the biggest time sink for most professionals. Here's how to automate 80% of it.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Step 1: Set Up AI Email Drafts</h2>
          <p style={{ marginBottom: '1rem' }}>Use ChatGPT or Claude to draft responses. Give it context about who you're replying to and what they need.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Step 2: Create Email Templates</h2>
          <p style={{ marginBottom: '1rem' }}>Common responses become templates. AI fills in the specifics.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Step 3: Use Smart Sorting</h2>
          <p style={{ marginBottom: '1rem' }}>AI categorizes incoming emails by urgency and topic. Handle the important ones; batch the rest.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>The Time Savings</h2>
          <p>Most people save 2-3 hours per day on email. That's 10-15 hours per week.</p>
        </div>
      </div>
    </div>
  );
}
