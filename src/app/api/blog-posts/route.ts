import { NextResponse } from "next/server";

export const revalidate = 3600; // cache 1 hour

export async function GET() {
  try {
    const res = await fetch("https://blog.haveaidoit.com/rss/", {
      next: { revalidate: 3600 },
    });
    const xml = await res.text();

    const items = xml.match(/<item>([\s\S]*?)<\/item>/g) || [];
    const posts = items.slice(0, 3).map((item) => {
      const title =
        item.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/)?.[1] ||
        item.match(/<title>(.*?)<\/title>/)?.[1] ||
        "";
      const link = item.match(/<link>(.*?)<\/link>/)?.[1] || "";
      const pubDate = item.match(/<pubDate>(.*?)<\/pubDate>/)?.[1] || "";
      const desc =
        item.match(/<description><!\[CDATA\[(.*?)\]\]><\/description>/)?.[1] ||
        item.match(/<description>(.*?)<\/description>/)?.[1] ||
        "";

      // Fix Ghost URL misconfiguration
      const slug = link
        .replace("https://haveaidoit.com/", "")
        .replace(/\/$/, "");
      const cleanExcerpt = desc
        .replace(/<[^>]*>/g, "")
        .slice(0, 120)
        .trim();
      const dateStr = pubDate
        ? new Date(pubDate).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
          })
        : "";

      return { title, slug, pubDate: dateStr, excerpt: cleanExcerpt };
    });

    return NextResponse.json(posts);
  } catch {
    return NextResponse.json([]);
  }
}
