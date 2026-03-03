import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Have AI Do It",
  description:
    "We help small businesses actually use AI - with free guides and done-for-you setup. Built by people who'd rather skip the hype.",
  alternates: { canonical: "/about" },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
