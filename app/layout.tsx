import { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kasidate Phlaiphueak | Software Engineer",
  description: "Crafting exceptional digital experiences through code",
  keywords: "software engineer, web development, digital experiences, creative engineer, coding",
  authors: [],
  openGraph: {
    title: "Kasidate Phlaiphueak | Software Engineer",
    description: "Crafting exceptional digital experiences through code",
    url: "https://kasidate.me", // Replace with your actual URL
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@kasidatep", 
    title: "Kasidate Phlaiphueak | Software Engineer",
    description: "Crafting exceptional digital experiences through code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${spaceGrotesk.variable} font-sans bg-gradient-dark antialiased`}>
        <div className="grain"></div>
        <div className="cursor-glow"></div>
        {children}
      </body>
    </html>
  );
}
