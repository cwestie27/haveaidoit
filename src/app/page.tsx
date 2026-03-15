"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { BlogCarousel } from "@/components/blog-carousel";
import {
  BookOpen,
  Wrench,
  Calendar,
  ArrowRight,
  CheckCircle2,
  Loader2,
  TrendingUp,
  Shield,
  Zap,
} from "lucide-react";

/* ─── Data ─── */

const services = [
  {
    icon: BookOpen,
    title: "Free AI Guides",
    tagline: "Learn it yourself",
    description:
      "Battle-tested breakdowns of the AI tools actually worth your time. No affiliate fluff, no hype.",
    features: ["Tool comparisons", "Step-by-step walkthroughs", "Real use cases"],
    href: "/guides",
    accent: "#38BDF8",
  },
  {
    icon: Wrench,
    title: "Done-For-You Setup",
    tagline: "We handle everything",
    description:
      "I build and configure AI workflows for your business. Chatbots, content systems, automations - you just use them.",
    features: ["Custom chatbots", "Automation workflows", "Content pipelines"],
    href: "/services",
    accent: "#F59E0B",
  },
  {
    icon: Calendar,
    title: "Strategy Call",
    tagline: "Get a clear plan",
    description:
      "45 minutes. Walk away knowing exactly which AI tools fit your business and what to do first.",
    features: ["No sales pitch", "Specific action plan", "Actionable next steps"],
    href: "#book",
    accent: "#34D399",
  },
];

const stats = [
  { value: "CFA", label: "Chartered Financial Analyst" },
  { value: "CAIA", label: "Alternative Investments Charter" },
  { value: "10+", label: "Years in Asset Management" },
  { value: "50+", label: "AI Tools Tested" },
];

const whyItWorks = [
  {
    icon: TrendingUp,
    label: "Finance Background",
    text: "Over a decade across asset management, investment operations, and client-facing roles. I understand how businesses actually run.",
    color: "#F59E0B",
  },
  {
    icon: Zap,
    label: "Real AI Practitioner",
    text: "I build agents, automation systems, and AI tools - not just slides about them. There's a difference.",
    color: "#38BDF8",
  },
  {
    icon: Shield,
    label: "No BS Guarantee",
    text: "Straight talk about what works, what doesn't, and what you should actually spend money on.",
    color: "#34D399",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.5 },
};

/* ─── Page ─── */

export default function Home() {
  const [email, setEmail] = useState("");
  const [subState, setSubState] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubState("loading");
    try {
      const res = await fetch("https://blog.haveaidoit.com/members/api/send-magic-link/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, emailType: "subscribe" }),
      });
      if (!res.ok) throw new Error();
      setSubState("success");
      setEmail("");
    } catch {
      setSubState("error");
    }
  };

  return (
    <div className="bg-[#04080F] text-white">

      {/* ═══ HERO ═══ */}
      <section className="relative min-h-[88vh] flex items-center overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0C1828] via-[#04080F] to-[#04080F]" />
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Amber glow */}
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[400px] bg-amber-500/[0.04] rounded-full blur-[140px] pointer-events-none" />
        {/* Sky glow */}
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-sky-500/[0.04] rounded-full blur-[120px] pointer-events-none" />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-24 sm:py-32 lg:py-40 w-full">
          <div className="max-w-3xl">
            {/* Eyebrow badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-8 px-3.5 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-sm font-medium"
            >
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              CFA &nbsp;·&nbsp; CAIA &nbsp;·&nbsp; AI Builder &nbsp;·&nbsp; Sales Engineer
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.04]"
            >
              AI that fits your
              <br />
              <span className="bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">
                business.
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg sm:text-xl text-white/55 max-w-xl leading-relaxed"
            >
              Built by someone who actually understands business. Free guides, done-for-you
              setup, or a 45-minute call - no jargon, no wasted budget.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-col sm:flex-row items-start gap-4"
            >
              <a
                href="#book"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-amber-500 text-black font-bold text-base hover:bg-amber-400 transition-all hover:scale-[1.02] active:scale-[0.99] shadow-lg shadow-amber-500/20"
              >
                Book a Free Strategy Call
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                href="/guides"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/20 text-white font-medium text-base hover:bg-white/5 transition-colors"
              >
                Read the Free Guides
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ STATS BAR ═══ */}
      <section className="border-y border-white/[0.07] bg-[#0C1828]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 sm:py-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="text-center sm:text-left"
              >
                <div className="text-2xl sm:text-3xl font-bold text-amber-400">{s.value}</div>
                <div className="mt-1 text-xs sm:text-sm text-white/45 leading-snug">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div {...fadeUp}>
            <p className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">
              How I Can Help
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Pick your starting point.
            </h2>
            <p className="mt-4 text-white/50 max-w-lg text-lg">
              Whether you want to learn it, delegate it, or just get a second opinion - there&apos;s a path.
            </p>
          </motion.div>

          <div className="mt-12 grid sm:grid-cols-3 gap-5">
            {services.map((svc, i) => (
              <motion.div
                key={svc.title}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0C1828] p-8 transition-all hover:border-white/15 cursor-pointer"
              >
                {/* Accent glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at top left, ${svc.accent}18, transparent 65%)`,
                  }}
                />

                <div className="relative">
                  <div
                    className="inline-flex p-3 rounded-xl mb-5"
                    style={{ background: `${svc.accent}18` }}
                  >
                    <svc.icon className="h-5 w-5" style={{ color: svc.accent }} />
                  </div>

                  <p
                    className="text-xs font-bold tracking-wider uppercase mb-1.5"
                    style={{ color: svc.accent }}
                  >
                    {svc.tagline}
                  </p>
                  <h3 className="text-xl font-bold mb-3">{svc.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-5">{svc.description}</p>

                  <ul className="space-y-1.5 mb-6">
                    {svc.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-white/65">
                        <div
                          className="w-1 h-1 rounded-full flex-shrink-0"
                          style={{ background: svc.accent }}
                        />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={svc.href}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold transition-all group-hover:gap-2.5"
                    style={{ color: svc.accent }}
                  >
                    {svc.href === "#book"
                      ? "Book a call"
                      : svc.href === "/guides"
                      ? "Explore guides"
                      : "See services"}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ BLOG CAROUSEL ═══ */}
      <section className="py-24 sm:py-32 bg-[#0C1828]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex items-end justify-between mb-12">
            <motion.div {...fadeUp}>
              <p className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">
                From the Blog
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold">Latest Insights</h2>
            </motion.div>
            <Link
              href="https://blog.haveaidoit.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 text-sm text-white/40 hover:text-white/80 transition-colors shrink-0"
            >
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <BlogCarousel />
          <div className="mt-6 sm:hidden text-center">
            <Link
              href="https://blog.haveaidoit.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-amber-400/70 hover:text-amber-400 transition-colors"
            >
              View all posts <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ WHY THIS WORKS ═══ */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">
                Why This Works
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
                Finance expertise.
                <br />
                <span className="text-amber-400">AI execution.</span>
              </h2>
              <p className="mt-6 text-white/55 text-lg leading-relaxed">
                Most AI consultants don&apos;t understand business. Most finance people don&apos;t
                understand AI. I&apos;ve spent over a decade in asset management and now build the
                kind of systems that actually fit how businesses operate.
              </p>
              <p className="mt-4 text-white/55 text-lg leading-relaxed">
                CFA. CAIA. Sales Engineer. AI builder. The combination is rare - and it shows in
                the work.
              </p>
              <div className="mt-8">
                <a
                  href="#book"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 text-black font-bold hover:bg-amber-400 transition-all hover:scale-[1.02] active:scale-[0.99]"
                >
                  Let&apos;s talk <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              {whyItWorks.map((item, i) => (
                <motion.div
                  key={item.label}
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex gap-4 p-5 rounded-xl border border-white/[0.07] bg-[#0C1828] hover:border-white/15 transition-colors"
                >
                  <div
                    className="shrink-0 p-2.5 rounded-lg self-start"
                    style={{ background: `${item.color}18` }}
                  >
                    <item.icon className="h-5 w-5" style={{ color: item.color }} />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">{item.label}</p>
                    <p className="text-sm text-white/50 leading-relaxed">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ BOOK A CALL ═══ */}
      <section id="book" className="py-24 sm:py-32 bg-[#0C1828]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-3xl border border-amber-500/20 bg-gradient-to-br from-amber-500/10 via-[#0C1828] to-[#0C1828] p-10 sm:p-16 text-center">
            {/* Background glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#F59E0B12,transparent_70%)] pointer-events-none" />

            <motion.div
              {...fadeUp}
              className="relative"
            >
              <div className="inline-flex items-center gap-2 mb-6 px-3.5 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                Free &nbsp;·&nbsp; No Sales Pitch &nbsp;·&nbsp; 45 Minutes
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Ready to cut through
                <br className="hidden sm:block" /> the noise?
              </h2>
              <p className="text-white/55 text-lg max-w-xl mx-auto leading-relaxed mb-10">
                Book a free strategy call. I&apos;ll look at your business, tell you exactly what
                AI can realistically do for you, and hand you a concrete next step - no pitch,
                no fluff.
              </p>
              <a
                href="https://calendly.com/haveaidoit"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-9 py-4.5 rounded-xl bg-amber-500 text-black font-bold text-lg hover:bg-amber-400 transition-all hover:scale-[1.02] active:scale-[0.99] shadow-xl shadow-amber-500/25"
              >
                Book Your Free Call
                <ArrowRight className="h-5 w-5" />
              </a>
              <p className="mt-5 text-sm text-white/30">
                No commitment. Just clarity.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ NEWSLETTER ═══ */}
      <section className="py-20 border-t border-white/[0.07]">
        <div className="mx-auto max-w-xl px-4 sm:px-6 text-center">
          <motion.div {...fadeUp}>
            <p className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">
              Newsletter
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">One weekly email. Zero fluff.</h2>
            <p className="text-white/45 text-sm mb-8 leading-relaxed">
              AI tips, tool reviews, and real use cases from someone who builds with it daily.
            </p>

            {subState === "success" ? (
              <div className="flex items-center justify-center gap-2 text-emerald-400">
                <CheckCircle2 className="h-5 w-5" />
                <span>Check your email to confirm!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2 max-w-sm mx-auto">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  className="flex-1 h-11 px-4 rounded-lg border border-white/15 bg-white/5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-amber-500/40"
                />
                <button
                  type="submit"
                  disabled={subState === "loading"}
                  className="px-5 h-11 rounded-lg bg-amber-500 text-black font-bold text-sm hover:bg-amber-400 transition-colors disabled:opacity-60 shrink-0"
                >
                  {subState === "loading" ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    "Subscribe"
                  )}
                </button>
              </form>
            )}
            {subState === "error" && (
              <p className="mt-3 text-xs text-red-400">Something went wrong. Try again.</p>
            )}
            {subState !== "success" && subState !== "error" && (
              <p className="mt-3 text-xs text-white/25">No spam. Unsubscribe anytime.</p>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
