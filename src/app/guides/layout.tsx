import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free AI Guides for Small Businesses",
  description:
    "Learn to use AI tools yourself with practical, no-fluff guides. From writing to image generation to making money with AI.",
  alternates: { canonical: "/guides" },
  openGraph: {
    title: "Free AI Guides | Have AI Do It",
    description:
      "Learn to use AI tools yourself with practical, no-fluff guides.",
  },
};

export default function GuidesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
