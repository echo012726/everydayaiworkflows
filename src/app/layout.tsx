import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Everyday AI Workflows",
  description: "Daily AI prompts to boost your productivity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`} style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <header style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1.5rem 2rem",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
          background: "rgba(15, 15, 35, 0.8)",
          backdropFilter: "blur(10px)",
          position: "sticky",
          top: 0,
          zIndex: 100
        }}>
          <Link href="/" style={{ 
            fontSize: "1.25rem", 
            fontWeight: "bold",
            background: "linear-gradient(90deg, #00d4ff, #7c3aed)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>
            EAw
          </Link>
          <nav style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
            <Link href="/" style={{ color: "#9ca3af", transition: "color 0.2s" }}>Home</Link>
            <Link href="/tools" style={{ color: "#9ca3af", transition: "color 0.2s" }}>Tools</Link>
            <Link href="/about" style={{ color: "#9ca3af", transition: "color 0.2s" }}>About</Link>
          </nav>
        </header>
        <main style={{ flex: 1 }}>
          {children}
        </main>
        <footer style={{ 
          textAlign: "center", 
          padding: "2rem", 
          color: "#4b5563",
          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          fontSize: "0.9rem"
        }}>
          <p>Built to help you integrate AI into your daily workflow</p>
        </footer>
      </body>
    </html>
  );
}
