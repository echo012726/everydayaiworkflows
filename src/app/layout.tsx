import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Everyday AI Workflows - Daily AI Prompts & Tools",
  description: "Discover daily AI prompts and curated tools to boost your productivity. Learn how to integrate AI into your daily workflow.",
  keywords: "AI, artificial intelligence, productivity, prompts, tools, workflow, automation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
