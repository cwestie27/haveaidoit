"use client";

import { useState } from "react";
import Link from "next/link";
import { Zap, Mail, Twitter, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <footer className="border-t border-white/15 bg-[#060612]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 text-lg font-bold">
              <Zap className="h-5 w-5 text-indigo-500" />
              Have AI Do It
            </Link>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Practical AI for people who&apos;d rather skip the hype. Free guides, done-for-you
              setup, and a weekly newsletter that actually makes sense.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="https://twitter.com/haveaidoit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>

              <a
                href="mailto:carson@haveaidoit.com"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Pages</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="/guides" className="transition-colors hover:text-foreground">
                  Guides
                </Link>
              </li>
              <li>
                <Link href="/services" className="transition-colors hover:text-foreground">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="transition-colors hover:text-foreground">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Newsletter</h3>
            <p className="mb-4 text-sm text-muted-foreground">
              Weekly AI tips that don&apos;t require a CS degree.
            </p>
            {subState === "success" ? (
              <div className="flex items-center gap-1.5 text-xs text-green-400">
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
                  className="h-9 flex-1 rounded-md border border-white/20 bg-white/5 px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                />
                <Button
                  type="submit"
                  size="sm"
                  disabled={subState === "loading"}
                  className="bg-indigo-600 text-white hover:bg-indigo-500"
                >
                  {subState === "loading" ? <Loader2 className="h-3 w-3 animate-spin" /> : "Join"}
                </Button>
              </form>
            )}
            {subState === "error" && (
              <p className="mt-2 text-xs text-red-400">Something went wrong. Try again.</p>
            )}
          </div>
        </div>

        <div className="mt-12 border-t border-white/15 pt-8 text-center text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Have AI Do It. All rights reserved.</p>
          <div className="mt-3 flex items-center justify-center gap-4">
            <span>Also from our team:</span>
            <a href="https://www.arborvalue.com" className="hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">ArborValue - Tree Valuation</a>
            <span>·</span>
            <a href="https://grantfound.com" className="hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">GrantFound - Nonprofit Donors</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
