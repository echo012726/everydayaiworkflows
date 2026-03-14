export const metadata = {
  title: '10 Prompts for Data Analysis Without Excel Skills',
  description: 'Analyze data like a pro using AI. No spreadsheet expertise required.',
};

export default function BlogPost() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0d1b2a 100%)', color: '#fff', fontFamily: 'system-ui, sans-serif', padding: '2rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '2rem' }}>
        <a href="/blog" style={{ color: '#00d4ff', textDecoration: 'none' }}>← Back to Blog</a>
        <h1 style={{ fontSize: '2.2rem', marginTop: '1rem', marginBottom: '1rem' }}>10 Prompts for Data Analysis Without Excel Skills</h1>
        <div style={{ color: '#9ca3af', marginBottom: '2rem' }}>February 12, 2026 • AI Prompts</div>
        <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#d1d5db' }}>
          <p style={{ marginBottom: '1.5rem' }}>You don't need to be an Excel expert to analyze data. AI does the heavy lifting.</p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>1. Summarize Data</h2>
          <p style={{ marginBottom: '1rem' }}><em>"Analyze this data and summarize the key findings in plain language."</em></p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>2. Find Trends</h2>
          <p style={{ marginBottom: '1rem' }}><em>"What trends do you see in this dataset over time?"</em></p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>3. Identify Outliers</h2>
          <p style={{ marginBottom: '1rem' }}><em>"Are there any outliers in this data? Explain what makes them unusual."</em></p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>4. Calculate Metrics</h2>
          <p style={{ marginBottom: '1rem' }}><em>"Calculate the average, median, and standard deviation for this dataset."</em></p>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>5. Create Visualizations</h2>
          <p><em>"What type of chart would best display this data? Describe the visualization."</em></p>
        </div>
      </div>
    </div>
  );
}
