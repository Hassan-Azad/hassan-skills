import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hassan Azad — Full Stack & AI Engineer",
  description:
    "Hassan Azad is a Full Stack Software Engineer and AI Engineer building modern websites, AI chatbots, and voice agents that help businesses grow.",
  keywords: [
    "Hassan Azad",
    "Full Stack Developer",
    "AI Engineer",
    "React",
    "Next.js",
    "Node.js",
    "Pakistan",
  ],
  authors: [{ name: "Hassan Azad" }],
  openGraph: {
    title: "Hassan Azad — Full Stack & AI Engineer",
    description:
      "Building modern websites and smart AI systems that help businesses grow.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#080c14] text-slate-200 font-body antialiased">
        {children}
      </body>
    </html>
  );
}
