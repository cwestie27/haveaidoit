"use client";

import { useState } from "react";
import Link from "next/link";
import { Zap, Mail, Twitter, CheckCircle2, Loader2 } from "lucide-react";

export function Footer() {
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
      if (!res.ok) throw new Error("fail");
      setSubState("success");
      setEmail("");
    } catch {
      setSubState("error");
    }
  };

  return (
    <footer className="border-t border-white/[0.07] bg-[#04080F]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-4">

          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 text-lg font-bold text-white">
              <Zap className="h-5 w-5 text-amber-400" />
              Have AI Do It
            </Link>
            <p className="mt-4 max-w-sm text-sm text-white/45 leading-relaxed">
              Practical AI for people who&apos;d rather skip the hype. Free guides, done-for-you
              setup, and a weekly newsletter that actually makes sense.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="https://twitter.com/haveaidoit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/35 hover:text-white/80 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="mailto:carson@haveaidoit.com"
                className="text-white/35 hover:text-white/80 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Pages */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">Pages</h3>
            <ul className="space-y-3 text-sm text-white/45">
              {[
                { href: "/guides", label: "Guides" },
                { href: "/services", label: "Services" },
                { href: "/about", label: "About" },
                { href: "https://blog.haveaidoit.com", label: "Blog", external: true },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    target={l.external ? "_blank" : undefined}
                    rel={l.external ? "noopener noreferrer" : undefined}
                    className="hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">Newsletter</h3>
            <p className="mb-4 text-sm text-white/45 leading-relaxed">
              Weekly AI tips that don&apos;t require a CS degree.
            </p>
            {subState === "success" ? (
              <div className="flex items-center gap-1.5 text-xs text-emerald-400">
                <CheckCircle2 className="h-3.5 w-3.5" />
                <span>Check your email to confirm!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  className="h-9 flex-1 rounded-lg border border-white/15 bg-white/5 px-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-amber-500/40"
                />
                <button
                  type="submit"
                  disabled={subState === "loading"}
                  className="px-3 h-9 rounded-lg bg-amber-500 text-black text-sm font-bold hover:bg-amber-400 transition-colors disabled:opacity-60 shrink-0"
                >
                  {subState === "loading" ? (
                    <Loader2 className="h-3 w-3 animate-spin" />
                  ) : (
                    "Join"
                  )}
                </button>
              </form>
            )}
            {subState === "error" && (
              <p className="mt-2 text-xs text-red-400">Something went wrong. Try again.</p>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/[0.07] pt-8 text-center text-xs text-white/30">
          <p>&copy; {new Date().getFullYear()} Have AI Do It. All rights reserved.</p>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
            <span>Also from our team:</span>
            <a
              href="https://www.arborvalue.com"
              className="hover:text-white/70 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              ArborValue
            </a>
            <span>·</span>
            <a
              href="https://grantfound.com"
              className="hover:text-white/70 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              GrantFound
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
