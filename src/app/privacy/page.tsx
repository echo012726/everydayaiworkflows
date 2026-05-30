export const metadata = {
  title: 'Privacy Policy - Everyday AI Workflows',
  description: 'Privacy Policy for Everyday AI Workflows',
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
          <p style={{ marginBottom: '1rem' }}>Last updated: May 2026</p>

          <h2 style={{ fontSize: '1.3rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Information We Collect</h2>
          <p style={{ marginBottom: '1rem' }}>We do not collect personally identifiable information such as your name or email address unless you voluntarily subscribe to our newsletter. Our website is free to use without registration.</p>

          <h2 style={{ fontSize: '1.3rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Cookies &amp; Tracking</h2>
          <p style={{ marginBottom: '1rem' }}>This website uses cookies and similar tracking technologies. These include:</p>
          <ul style={{ marginBottom: '1rem', paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}><strong>Google AdSense</strong> — displays ads and may use cookies to show ads relevant to your interests based on prior visits to this and other websites.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Analytics</strong> — we collect anonymised usage data (page views, referrers, general location) to understand how visitors use the site. No personally identifiable information is collected.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Newsletter (Beehiiv)</strong> — if you subscribe, Beehiiv stores your email address and uses cookies to track email engagement.</li>
          </ul>
          <p style={{ marginBottom: '1rem' }}>You can opt out of personalised advertising at any time via <a href="https://www.google.com/settings/ads" style={{ color: '#00d4ff' }}>Google's Ads Settings</a>. You can also disable cookies in your browser settings, though this may affect site functionality.</p>

          <h2 style={{ fontSize: '1.3rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Third-Party Services</h2>
          <p style={{ marginBottom: '1rem' }}>We use the following third-party services, each governed by their own privacy policies:</p>
          <ul style={{ marginBottom: '1rem', paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>Google AdSense — advertising</li>
            <li style={{ marginBottom: '0.5rem' }}>Beehiiv — newsletter delivery</li>
            <li style={{ marginBottom: '0.5rem' }}>Vercel — hosting and analytics</li>
          </ul>

          <h2 style={{ fontSize: '1.3rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Your Rights</h2>
          <p style={{ marginBottom: '1rem' }}>You may request deletion of any personal data we hold (e.g. newsletter subscription) at any time by contacting us below.</p>

          <h2 style={{ fontSize: '1.3rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Contact</h2>
          <p style={{ marginBottom: '1rem' }}>Questions about this Privacy Policy? Email us at: everydayaiworkflows@gmail.com</p>
        </div>

        <div style={{ marginTop: '3rem', paddingTop: '1rem', borderTop: '1px solid #374151' }}>
          <a href="/" style={{ color: '#00d4ff', textDecoration: 'none' }}>← Back to Home</a>
        </div>
      </div>
    </div>
  );
}
