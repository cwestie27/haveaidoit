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
  title: {
    default: "Have AI Do It - Practical AI for Small Businesses",
    template: "%s | Have AI Do It",
  },
  description:
    "Practical AI guides and done-for-you setup for small businesses. No hype, no jargon - just AI tools that actually work.",
  metadataBase: new URL("https://www.haveaidoit.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Have AI Do It - Practical AI for Small Businesses",
    description:
      "Practical AI guides and done-for-you setup for small businesses. No hype, no jargon - just AI tools that actually work.",
    url: "https://www.haveaidoit.com",
    siteName: "Have AI Do It",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Have AI Do It - Practical AI for Small Businesses",
    description:
      "Practical AI guides and done-for-you setup for small businesses.",
    site: "@haveaidoit",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  keywords: [
    "AI for small business",
    "AI tools",
    "AI guides",
    "AI setup services",
    "practical AI",
    "small business automation",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Have AI Do It",
    url: "https://www.haveaidoit.com",
    description:
      "Practical AI guides and done-for-you setup for small businesses.",
    sameAs: ["https://twitter.com/haveaidoit"],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Have AI Do It",
    url: "https://www.haveaidoit.com",
    description:
      "Practical AI guides and done-for-you setup for small businesses. No hype, no jargon - just AI tools that actually work.",
  };

  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
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
