import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Everyday AI Workflows - Daily AI Prompts & Tools",
  description: "Discover daily AI prompts and curated tools to boost your productivity. Learn how to integrate AI into your daily workflow.",
  keywords: "AI, artificial intelligence, productivity, prompts, tools, workflow, automation, ChatGPT, Claude",
  authors: [{ name: "AI Workflows Team" }],
  openGraph: {
    title: "Everyday AI Workflows - Daily AI Prompts",
    description: "Discover daily AI prompts and tools to boost your productivity.",
    url: "https://everydayaiworkflows.com",
    siteName: "Everyday AI Workflows",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Everyday AI Workflows",
    description: "Daily AI prompts and tools to boost your productivity.",
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    'fo-verify': '6d9101e7-133b-4cb4-b736-8905afcd470a',
    'impact-site-verification': '54bff760-4faf-4474-9a6a-c8cffef4a135',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6175161566333696"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}
      <footer style={{borderTop:'1px solid #e5e7eb', padding:'32px 16px', textAlign:'center', fontSize:'0.85rem', color:'#6b7280'}}>
        <nav style={{display:'flex', justifyContent:'center', gap:'24px', flexWrap:'wrap', marginBottom:'12px'}}>
          <a href="/about" style={{color:'#6b7280', textDecoration:'none'}}>About</a>
          <a href="/blog" style={{color:'#6b7280', textDecoration:'none'}}>Blog</a>
          <a href="/tools" style={{color:'#6b7280', textDecoration:'none'}}>Tools</a>
          <a href="/contact" style={{color:'#6b7280', textDecoration:'none'}}>Contact</a>
          <a href="/privacy" style={{color:'#6b7280', textDecoration:'none'}}>Privacy Policy</a>
        </nav>
        <p style={{margin:0}}>&copy; {new Date().getFullYear()} Everyday AI Workflows. All rights reserved.</p>
      </footer>
      </body>
    </html>