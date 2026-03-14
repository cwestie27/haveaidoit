"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Post {
  title: string;
  slug: string;
  pubDate: string;
  excerpt: string;
}

export function LatestPosts() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("/api/blog-posts")
      .then((r) => r.json())
      .then(setPosts)
      .catch(() => {});
  }, []);

  if (posts.length === 0) return null;

  return (
    <section className="py-20 md:py-28 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-2">
              From the Blog
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Latest AI News
            </h2>
          </div>
          <Link
            href="https://blog.haveaidoit.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            View all posts <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`https://blog.haveaidoit.com/${post.slug}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white/5 hover:bg-white/[0.08] border border-white/10 hover:border-indigo-500/40 rounded-2xl p-5 transition-all"
            >
              <p className="text-xs text-indigo-400 mb-2">{post.pubDate}</p>
              <h3 className="text-white font-semibold text-base leading-snug mb-2 group-hover:text-indigo-300 transition-colors">
                {post.title}
              </h3>
              {post.excerpt && (
                <p className="text-sm text-white/50 leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
              )}
            </Link>
          ))}
        </div>

        <div className="mt-6 sm:hidden text-center">
          <Link
            href="https://blog.haveaidoit.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            View all posts <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
