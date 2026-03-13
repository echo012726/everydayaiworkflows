export default function About() {
  return (
    <div style={{
      color: "#fff",
      fontFamily: "system-ui, -apple-system, sans-serif",
      padding: "2rem",
    }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", background: "rgba(255, 255, 255, 0.05)", borderRadius: "20px", padding: "3rem", border: "1px solid rgba(255, 255, 255, 0.1)" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "700", marginBottom: "1.5rem", background: "linear-gradient(90deg, #00d4ff, #7c3aed)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          About Everyday AI Workflows
        </h1>
        <div style={{ fontSize: "1.2rem", lineHeight: "1.8", color: "#d1d5db", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <p>
            Welcome to Everyday AI Workflows. This platform was built with a simple mission: to help individuals and teams unlock the practical, day-to-day power of Artificial Intelligence.
          </p>
          <p>
            While the internet is full of complex tutorials and abstract theories about AI, we focus on what you can actually use right now. Whether you're a marketer, developer, student, or entrepreneur, our goal is to provide you with actionable prompts, tools, and strategies to save time and boost creativity.
          </p>
          <h2 style={{ color: "#fff", fontSize: "1.5rem", marginTop: "1rem" }}>What we offer:</h2>
          <ul style={{ paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <li><strong>Daily Prompts:</strong> A fresh, high-quality prompt every day to spark new ideas and streamline tasks.</li>
            <li><strong>Tool Directory:</strong> A curated list of the best AI tools, categorized for easy discovery.</li>
            <li><strong>Workflow Guides:</strong> Step-by-step guides on how to combine tools and prompts for maximum efficiency.</li>
          </ul>
          <p>
            AI is moving fast. We're here to help you keep up, not by overwhelming you with information, but by giving you the practical building blocks to construct your own automated workflows.
          </p>
        </div>
      </div>
    </div>
  );
}
