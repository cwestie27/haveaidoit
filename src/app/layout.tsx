import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
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
  title: "Have AI Do It - Practical AI for Small Businesses",
  description:
    "Practical AI guides and done-for-you setup for small businesses. No hype, no jargon - just AI tools that actually work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />
        <Script
          defer
          src="https://analytics.haveaidoit.com/script.js"
          data-website-id="be626784-4973-4885-9277-0a4d67dde76d"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
