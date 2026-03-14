"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { LatestPosts } from "@/components/latest-posts";
import {
  BookOpen,
  Wrench,
  Mail,
  ArrowRight,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/section-heading";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.05 },
  transition: { duration: 0.5 },
};

const stagger = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
  viewport: { once: true, amount: 0.05 },
};

const featuredGuides = [
  {
    title: "AI Tools for Small Business",
    description: "The best AI tools that actually help small businesses save time and money.",
    slug: "/ai-tools-for-small-business/",
    category: "Business",
  },
  {
    title: "AI Writing Tools",
    description: "Write better emails, blog posts, and marketing copy with these AI tools.",
    slug: "/ai-writing-tools/",
    category: "Writing",
  },
  {
    title: "AI Image Generators",
    description: "Create stunning images for your brand without hiring a designer.",
    slug: "/ai-image-generators/",
    category: "Images",
  },
  {
    title: "Make Money with AI",
    description: "Real ways to earn more using AI - no get-rich-quick nonsense.",
    slug: "/make-money-with-ai/",
    category: "Business",
  },
  {
    title: "AI Photo Editing Apps",
    description: "Edit photos like a pro using AI-powered apps anyone can use.",
    slug: "/ai-photo-editing-apps/",
    category: "Images",
  },
  {
    title: "Best Free AI Tools 2026",
    description: "The top free AI tools worth your time this year, tested and ranked.",
    slug: "/best-free-ai-tools-2026/",
    category: "Tools",
  },
];

const whatWeDo = [
  {
    icon: BookOpen,
    title: "Free Guides",
    description: "Learn to use AI tools yourself with no-BS guides",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    icon: Wrench,
    title: "AI Setup Services",
    description: "We set up AI tools so they actually work in your business",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
  {
    icon: Mail,
    title: "Newsletter",
    description: "Weekly AI tips that don't require a CS degree",
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
  },
];

async function subscribeToNewsletter(email: string) {
  const res = await fetch("https://blog.haveaidoit.com/members/api/send-magic-link/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, emailType: "subscribe" }),
  });
  if (!res.ok) throw new Error("Subscription failed");
}

export default function Home() {
  const [email, setEmail] = useState("");
  const [subState, setSubState] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubState("loading");
    try {
      await subscribeToNewsletter(email);
      setSubState("success");
      setEmail("");
    } catch {
      setSubState("error");
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-purple-600/10 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32 lg:py-40">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-3xl text-center"
          >
            <Badge variant="outline" className="mb-6 border-indigo-500/30 text-indigo-400">
              Practical AI for people who&apos;d rather skip the hype
            </Badge>
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Have AI Do It
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                .
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground sm:text-xl">
              Practical AI guides and done-for-you setup for small businesses.
              No jargon. No hype. Just tools that work.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-indigo-600 text-white hover:bg-indigo-500">
                <Link href="/guides">
                  Read the Guides
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/20 hover:bg-white/5">
                <Link href="/services">Get AI Setup for Your Business</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>


      {/* What We Do */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            badge="What We Do"
            title="AI help that actually helps"
            description="Whether you want to learn it yourself or have someone do it for you, we've got you covered."
          />
          <motion.div
            {...stagger}
            className="mt-16 grid gap-6 sm:grid-cols-3"
          >
            {whatWeDo.map((item, i) => (
              <motion.div key={item.title} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <Card className="group relative overflow-hidden border-white/15 bg-white/[0.06] backdrop-blur-sm transition-colors hover:border-white/20 hover:bg-white/[0.08]">
                  <CardContent className="p-8">
                    <div className={`mb-4 inline-flex rounded-lg ${item.bg} p-3`}>
                      <item.icon className={`h-6 w-6 ${item.color}`} />
                    </div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Guides */}
      <section className="border-t border-white/15 bg-white/[0.08] py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            badge="Guides"
            title="Start learning for free"
            description="Practical, no-fluff guides to help you actually use AI in your work."
          />
          <motion.div
            {...stagger}
            className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {featuredGuides.map((guide, i) => (
              <motion.div key={guide.slug} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.08 }}>
                <Link href={`https://blog.haveaidoit.com${guide.slug}`} target="_blank">
                  <Card className="group h-full border-white/15 bg-white/[0.06] backdrop-blur-sm transition-all hover:border-indigo-500/30 hover:bg-white/[0.08] hover:-translate-y-1">
                    <CardContent className="flex h-full flex-col p-6">
                      <Badge variant="secondary" className="mb-4 w-fit text-xs">
                        {guide.category}
                      </Badge>
                      <h3 className="text-lg font-semibold group-hover:text-indigo-400 transition-colors">
                        {guide.title}
                      </h3>
                      <p className="mt-2 flex-1 text-sm text-muted-foreground">
                        {guide.description}
                      </p>
                      <span className="mt-4 inline-flex items-center text-sm font-medium text-indigo-400">
                        Read guide
                        <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
          <motion.div {...fadeUp} className="mt-12 text-center">
            <Button asChild variant="outline" className="border-white/20 hover:bg-white/5">
              <Link href="/guides">
                View all guides
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div
            {...fadeUp}
            className="relative overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-br from-indigo-600/10 via-purple-600/5 to-transparent p-8 sm:p-12"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-indigo-600/10 via-transparent to-transparent" />
            <div className="relative max-w-2xl">
              <Badge variant="outline" className="mb-4 border-indigo-500/30 text-indigo-400">
                Done-For-You
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Don&apos;t want to DIY? We&apos;ll do it for you.
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                From chatbots to content workflows, we set up AI tools that actually fit your
                business. No 6-month contracts, no fluff - just stuff that works.
              </p>
              <Button asChild size="lg" className="mt-8 bg-indigo-600 text-white hover:bg-indigo-500">
                <Link href="/services">
                  See Services & Pricing
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <LatestPosts />

      {/* Newsletter */}
      <section className="border-t border-white/15 bg-white/[0.08] py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div {...fadeUp} className="mx-auto max-w-xl text-center">
            <SectionHeading
              badge="Newsletter"
              title="Get smarter about AI every week"
              description="One email per week with AI tips, tool reviews, and real-world use cases. No spam, no hype."
            />
            {subState === "success" ? (
              <div className="mt-8 flex items-center justify-center gap-2 text-green-400">
                <CheckCircle2 className="h-5 w-5" />
                <span>Check your email to confirm your subscription!</span>
              </div>
            ) : (
              <form
                onSubmit={handleSubscribe}
                className="mt-8 flex gap-3 sm:mx-auto sm:max-w-md"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  className="h-11 flex-1 rounded-lg border border-white/20 bg-white/5 px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                />
                <Button
                  type="submit"
                  disabled={subState === "loading"}
                  className="bg-indigo-600 text-white hover:bg-indigo-500"
                >
                  {subState === "loading" ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    "Subscribe"
                  )}
                </Button>
              </form>
            )}
            {subState === "error" && (
              <p className="mt-3 text-xs text-red-400">
                Something went wrong. Please try again.
              </p>
            )}
            {subState !== "success" && subState !== "error" && (
              <p className="mt-3 text-xs text-muted-foreground">
                No spam, no hype. Unsubscribe anytime.
              </p>
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
}
