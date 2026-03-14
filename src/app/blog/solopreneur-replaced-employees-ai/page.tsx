export const metadata = {
  title: 'How a Solopreneur Replaced 5 Employees with AI',
  description: 'One founder shares how AI let them do the work of a team.',
};

export default function BlogPost() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0d1b2a 100%)', color: '#fff', fontFamily: 'system-ui, sans-serif', padding: '2rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '2rem' }}>
        <a href="/blog" style={{ color: '#00d4ff', textDecoration: 'none' }}>← Back to Blog</a>
        <h1 style={{ fontSize: '2.2rem', marginTop: '1rem', marginBottom: '1rem' }}>How a Solopreneur Replaced 5 Employees with AI</h1>
        <div style={{ color: '#9ca3af', marginBottom: '2rem' }}>January 11, 2026 • Case Studies</div>
        <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#d1d5db' }}>
          <p style={{ marginBottom: '1.5rem' }}>This founder runs a $2M business with no employees. AI does the work.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>What Was Replaced</h2>
          <p style={{ marginBottom: '1rem' }}>VA, designer, marketer, support, and analyst.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>The Cost Savings</h2>
          <p>$300K/year in salaries replaced by $3K/year in AI tools.</p>
        </div>
      </div>
    </div>
  );
}
