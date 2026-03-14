"use client";

export default function BlogPost() {
  return (
    <div style={{minHeight: "100vh", background: "linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0d1b2a 100%)", color: "#fff", fontFamily: "system-ui, sans-serif", padding: "2rem"}}>
      <div style={{maxWidth: "800px", margin: "0 auto", paddingTop: "2rem"}}>
        <a href="/blog" style={{color: "#00d4ff", textDecoration: "none"}}>← Back to Blog</a>
        <h1 style={{fontSize: "2rem", marginTop: "1rem", color: "#fff"}}>Boost Productivity with AI</h1>
        <p style={{color: "#9ca3af"}}>Coming soon...</p>
      </div>
    </div>
  );
}