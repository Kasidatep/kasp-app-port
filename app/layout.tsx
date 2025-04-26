// app/layout.tsx
import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";

const prompt = Prompt({
  variable: "--font-prompt-sans",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"]
});

export const metadata: Metadata = {
  title: "Kasidate Phlaiphueak - Portfolio",
  description: "Software Engineer portfolio showcasing projects and experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${prompt.variable} antialiased bg-gray-50`}
      >
        {children}
      </body>
    </html>
  );
}