export const metadata = {
  title: 'Privacy Policy - Everyday AI Workflows',
  description: 'Privacy Policy for Everyday AI Workflows - We respect your privacy and do not collect personal information.',
};

export default function Privacy() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0d1b2a 100%)',
      color: '#fff',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      padding: '2rem',
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '2rem' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#00d4ff' }}>Privacy Policy</h1>
        
        <div style={{ lineHeight: '1.8', color: '#d1d5db' }}>
          <p style={{ marginBottom: '1rem' }}>Last updated: March 2026</p>
          
          <h2 style={{ fontSize: '1.3rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Information We Collect</h2>
          <p style={{ marginBottom: '1rem' }}>We do not collect any personal information from our users. Our website is completely free to use without registration or login.</p>
          
          <h2 style={{ fontSize: '1.3rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Cookies</h2>
          <p style={{ marginBottom: '1rem' }}>We do not use cookies to track your activity.</p>
          
          <h2 style={{ fontSize: '1.3rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Third-Party Services</h2>
          <p style={{ marginBottom: '1rem' }}>We use Google AdSense to display advertisements. Google may use cookies to serve ads based on your visits to this and other websites.</p>
          
          <h2 style={{ fontSize: '1.3rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Contact Us</h2>
          <p style={{ marginBottom: '1rem' }}>If you have any questions about this Privacy Policy, please contact us at: everydayaiworkflows@gmail.com</p>
        </div>
        
        <div style={{ marginTop: '3rem', paddingTop: '1rem', borderTop: '1px solid #374151' }}>
          <a href="/" style={{ color: '#00d4ff', textDecoration: 'none' }}>← Back to Home</a>
        </div>
      </div>
    </div>
  );
}
