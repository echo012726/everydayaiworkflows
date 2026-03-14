export const metadata = {
  title: 'Contact - Everyday AI Workflows',
  description: 'Get in touch with Everyday AI Workflows. We would love to hear from you!',
};

export default function Contact() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0d1b2a 100%)',
      color: '#fff',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      padding: '2rem',
    }}>
      <div style={{ maxWidth: '600px', margin: '0 auto', paddingTop: '2rem' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#00d4ff' }}>Contact Us</h1>
        
        <p style={{ color: '#d1d5db', marginBottom: '2rem', lineHeight: '1.6' }}>
          Have questions, suggestions, or just want to say hi? We would love to hear from you!
        </p>
        
        <div style={{ 
          background: 'rgba(255,255,255,0.05)', 
          padding: '2rem', 
          borderRadius: '12px',
          border: '1px solid rgba(255,255,255,0.1)'
        }}>
          <p style={{ marginBottom: '1rem', color: '#9ca3af' }}>Email:</p>
          <a href="mailto:everydayaiworkflows@gmail.com" 
             style={{ 
               color: '#00d4ff', 
               fontSize: '1.2rem',
               textDecoration: 'none'
             }}>
            everydayaiworkflows@gmail.com
          </a>
        </div>
        
        <div style={{ marginTop: '3rem', paddingTop: '1rem', borderTop: '1px solid #374151' }}>
          <a href="/" style={{ color: '#00d4ff', textDecoration: 'none' }}>← Back to Home</a>
        </div>
      </div>
    </div>
  );
}
