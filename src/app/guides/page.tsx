"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/section-heading";

const guides = [
  {
    title: "AI Tools for Small Business",
    description:
      "A practical roundup of the best AI tools that actually help small businesses save time and money. No enterprise-only stuff here.",
    slug: "/ai-tools-for-small-business/",
    category: "Business",
    readTime: "12 min",
  },
  {
    title: "Make Money with AI",
    description:
      "Real ways people are earning more using AI tools. Freelancing, automation, side projects - all tested and explained.",
    slug: "/make-money-with-ai/",
    category: "Business",
    readTime: "15 min",
  },
  {
    title: "AI Writing Tools",
    description:
      "The best AI writing tools for emails, blog posts, and marketing copy. Compared side-by-side so you can pick the right one.",
    slug: "/ai-writing-tools/",
    category: "Writing",
    readTime: "10 min",
  },
  {
    title: "ChatGPT Email Writing Guide",
    description:
      "How to write better emails in half the time using ChatGPT. Templates, prompts, and real examples included.",
    slug: "/chatgpt-email-writing-guide/",
    category: "Writing",
    readTime: "8 min",
  },
  {
    title: "AI Image Generators",
    description:
      "Create stunning images for your brand, social media, and products without hiring a designer. All the top tools compared.",
    slug: "/ai-image-generators/",
    category: "Images",
    readTime: "14 min",
  },
  {
    title: "AI Photo Editing Apps",
    description:
      "Edit photos like a pro using AI-powered apps. Background removal, enhancement, retouching - all without Photoshop.",
    slug: "/ai-photo-editing-apps/",
    category: "Images",
    readTime: "9 min",
  },
  {
    title: "Best Free AI Tools 2026",
    description:
      "The top free AI tools worth your time this year. Every tool tested and ranked so you don't waste time on the duds.",
    slug: "/best-free-ai-tools-2026/",
    category: "Tools",
    readTime: "18 min",
  },
  {
    title: "ChatGPT vs Google Search",
    description:
      "When should you use ChatGPT and when should you stick with Google? A practical breakdown with real examples.",
    slug: "/chatgpt-vs-google-search/",
    category: "Understanding AI",
    readTime: "7 min",
  },
  {
    title: "OpenClaw AI Assistant Guide",
    description:
      "A hands-on guide to building with the OpenClaw AI assistant. From setup to your first working project.",
    slug: "/openclaw-ai-assistant-guide/",
    category: "Build",
    readTime: "20 min",
  },
];

const categories = ["All", ...Array.from(new Set(guides.map((g) => g.category)))];

const categoryColors: Record<string, string> = {
  Business: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  Writing: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  Images: "bg-pink-500/10 text-pink-400 border-pink-500/20",
  Tools: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  "Understanding AI": "bg-purple-500/10 text-purple-400 border-purple-500/20",
  Build: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
};

export default function GuidesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
          <SectionHeading
            badge="Free Guides"
            title="Learn AI the practical way"
            description="No-fluff guides to help you actually use AI in your work. Every tool tested, every tip real."
          />
        </div>
      </section>

      {/* Category filters */}
      <section className="border-b border-white/15">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex gap-2 overflow-x-auto py-4 no-scrollbar">
            {categories.map((cat) => (
              <Badge
                key={cat}
                variant="outline"
                className="shrink-0 cursor-pointer border-white/20 transition-colors hover:border-indigo-500/30 hover:text-indigo-400"
              >
                {cat}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {guides.map((guide, i) => (
              <motion.div
                key={guide.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <Link href={`https://haveaidoit.com${guide.slug}`} target="_blank">
                  <Card className="group h-full border-white/15 bg-white/[0.06] backdrop-blur-sm transition-all hover:border-indigo-500/30 hover:bg-white/[0.08] hover:-translate-y-1">
                    <CardContent className="flex h-full flex-col p-6">
                      <div className="flex items-center justify-between mb-4">
                        <Badge
                          variant="outline"
                          className={`text-xs ${categoryColors[guide.category] || ""}`}
                        >
                          {guide.category}
                        </Badge>
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          {guide.readTime}
                        </span>
                      </div>
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
          </div>
        </div>
      </section>
    </>
  );
}
