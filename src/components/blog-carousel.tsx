"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

interface Post {
  title: string;
  slug: string;
  pubDate: string;
  excerpt: string;
}

const SKELETON_COUNT = 3;

export function BlogCarousel() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch("/api/blog-posts")
      .then((r) => r.json())
      .then((data) => {
        setPosts(data);
        setTimeout(() => checkScroll(), 50);
      })
      .catch(() => {});
  }, []);

  const checkScroll = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll, { passive: true });
    checkScroll();
    return () => el.removeEventListener("scroll", checkScroll);
  }, [checkScroll, posts]);

  const scrollBy = (dir: "prev" | "next") => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const gap = 20;
    const amount = card ? card.offsetWidth + gap : 320;
    el.scrollBy({ left: dir === "next" ? amount : -amount, behavior: "smooth" });
  };

  const loading = posts.length === 0;

  return (
    <div className="relative">
      {/* Arrow buttons */}
      <div className="absolute -top-14 right-0 flex gap-2 z-10">
        <button
          onClick={() => scrollBy("prev")}
          disabled={!canPrev}
          aria-label="Previous"
          className="p-2 rounded-lg border border-white/10 bg-white/5 text-white disabled:opacity-25 hover:bg-white/10 transition-colors"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={() => scrollBy("next")}
          disabled={!canNext}
          aria-label="Next"
          className="p-2 rounded-lg border border-white/10 bg-white/5 text-white disabled:opacity-25 hover:bg-white/10 transition-colors"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Track */}
      <div
        ref={trackRef}
        className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 -mb-2 scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {loading
          ? Array.from({ length: SKELETON_COUNT }).map((_, i) => (
              <div
                key={i}
                className="snap-start flex-shrink-0 w-[85vw] sm:w-[calc((100%-40px)/3)] h-48 rounded-2xl bg-white/5 animate-pulse"
              />
            ))
          : posts.map((post) => (
              <Link
                data-card
                key={post.slug}
                href={`https://blog.haveaidoit.com/${post.slug}/`}
                target="_blank"
                rel="noopener noreferrer"
                className="snap-start flex-shrink-0 w-[85vw] sm:w-[calc((100%-40px)/3)] group block rounded-2xl border border-white/8 bg-[#04080F] p-6 transition-all hover:border-amber-500/25 hover:-translate-y-1 hover:bg-[#0a1323]"
              >
                <p className="text-xs text-amber-400/60 mb-3 font-medium">{post.pubDate}</p>
                <h3 className="font-semibold leading-snug mb-3 group-hover:text-amber-300 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                {post.excerpt && (
                  <p className="text-sm text-white/45 leading-relaxed line-clamp-2 mb-4">
                    {post.excerpt}
                  </p>
                )}
                <span className="inline-flex items-center gap-1 text-xs font-medium text-amber-400/60 group-hover:text-amber-400 transition-colors">
                  Read more <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            ))}
      </div>
    </div>
  );
}
