export const metadata = {
  title: 'About - Everyday AI Workflows',
  description: 'Learn about Everyday AI Workflows - our mission to help people integrate AI into their daily lives.',
};

export default function About() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0d1b2a 100%)',
      color: '#fff',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      padding: '2rem',
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#00d4ff' }}>About Everyday AI Workflows</h1>
        
        <div style={{ lineHeight: '1.8', color: '#d1d5db', fontSize: '1.1rem' }}>
          <p style={{ marginBottom: '1.5rem' }}>
            Welcome to Everyday AI Workflows! Our mission is to help people integrate AI into their daily lives 
            to boost productivity and simplify tasks.
          </p>
          
          <p style={{ marginBottom: '1.5rem' }}>
            We believe that AI shouldn't be just for tech experts - it should be accessible to everyone. 
            That's why we provide daily AI prompts, curated tool lists, and tutorials to help you get started.
          </p>
          
          <p style={{ marginBottom: '1.5rem' }}>
            Whether you're a business owner, student, or just someone looking to be more productive, 
            we have resources to help you leverage AI effectively.
          </p>
          
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>What We Offer</h2>
          <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>Daily AI prompts for various use cases</li>
            <li style={{ marginBottom: '0.5rem' }}>Curated directory of the best AI tools</li>
            <li style={{ marginBottom: '0.5rem' }}>Tutorials and guides on using AI effectively</li>
            <li style={{ marginBottom: '0.5rem' }}>Tips and tricks for productivity</li>
          </ul>
        </div>
        
        <div style={{ marginTop: '3rem', paddingTop: '1rem', borderTop: '1px solid #374151' }}>
          <a href="/" style={{ color: '#00d4ff', textDecoration: 'none' }}>← Back to Home</a>
        </div>
      </div>
    </div>
  );
}
