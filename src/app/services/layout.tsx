import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Setup Services for Small Businesses",
  description:
    "Done-for-you AI setup for small businesses. Chatbots, content workflows, and automation that actually fits your business. No 6-month contracts.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "AI Setup Services | Have AI Do It",
    description:
      "Done-for-you AI setup for small businesses. No 6-month contracts, no fluff.",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
