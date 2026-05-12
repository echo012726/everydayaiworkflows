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
      <body>{children}</body>
    </html>
  );
}
