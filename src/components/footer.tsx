"use client";

import Link from "next/link";
import { Zap, Mail, Twitter, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
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
                href="https://github.com/haveaidoit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
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
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex gap-2"
            >
              <input
                type="email"
                placeholder="you@email.com"
                className="h-9 flex-1 rounded-md border border-white/20 bg-white/5 px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
              />
              <Button type="submit" size="sm" className="bg-indigo-600 text-white hover:bg-indigo-500">
                Join
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-white/15 pt-8 text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Have AI Do It. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
