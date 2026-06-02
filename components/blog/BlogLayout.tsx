"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { TOC } from "./TOC";
import type { BlogFrontmatter } from "@/lib/blog";

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

interface BlogLayoutProps {
  frontmatter: BlogFrontmatter;
  readingTime: string;
  children: React.ReactNode;
}

function ReadingProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-yellow-400 origin-left z-[999]"
      style={{ scaleX }}
    />
  );
}

export function BlogLayout({
  frontmatter,
  readingTime,
  children,
}: BlogLayoutProps) {
  const [headings, setHeadings] = useState<TOCItem[]>([]);

  useEffect(() => {
    const articleEl = document.getElementById("blog-content");
    if (!articleEl) return;

    const els = articleEl.querySelectorAll("h2, h3");
    const items: TOCItem[] = Array.from(els).map((el) => ({
      id: el.id,
      text: el.textContent ?? "",
      level: parseInt(el.tagName.replace("H", ""), 10),
    }));
    setTimeout(() => {
      setHeadings(items);
    }, 0);
  }, []);

  const formattedDate = new Date(frontmatter.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <ReadingProgressBar />

      {/* Full-page bg matching main portfolio */}
      <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">

        {/* ── Top bar: back link ── */}
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12 pt-24 pb-6">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-mono text-zinc-400 hover:text-yellow-400 transition-colors duration-200 group"
            >
              <ArrowLeft
                size={15}
                className="group-hover:-translate-x-1 transition-transform duration-200"
              />
              All posts
            </Link>
          </motion.div>
        </div>

        {/* ── Main grid: TOC | Article | TOC-mirror ── */}
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12 pb-24">
          <div className="flex gap-10 items-start">

            {/* ── LEFT: sticky TOC (desktop only) ── */}
            <aside className="hidden xl:block w-52 shrink-0 sticky top-24 self-start">
              <TOC headings={headings} />
            </aside>

            {/* ── CENTER: Post content ── */}
            <motion.main
              className="min-w-0 flex-1"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {/* Post header */}
              <header className="mb-10 pb-8 border-b border-zinc-800">
                {frontmatter.tags && frontmatter.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {frontmatter.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-xs font-mono bg-yellow-400/10 text-yellow-400 border border-yellow-400/20"
                      >
                        <Tag size={10} />
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <h1 className="font-mono text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
                  {frontmatter.title}
                </h1>

                <p className="text-zinc-400 text-base leading-relaxed mb-6 max-w-3xl">
                  {frontmatter.excerpt}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-sm font-mono text-zinc-500">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={13} className="text-yellow-400/70" />
                    {formattedDate}
                  </span>
                  <span className="text-zinc-700">·</span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={13} className="text-yellow-400/70" />
                    {readingTime}
                  </span>
                </div>
              </header>

              {/* MDX Content */}
              <article
                id="blog-content"
                className="
                  prose prose-invert max-w-none
                  prose-headings:font-mono prose-headings:text-white
                  prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:border-l-2 prose-h2:border-yellow-400 prose-h2:pl-4
                  prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-zinc-200
                  prose-p:text-zinc-300 prose-p:leading-8 prose-p:my-5
                  prose-a:text-yellow-400 prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-white prose-strong:font-semibold
                  prose-code:text-yellow-300 prose-code:bg-zinc-800/70 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-code:before:content-none prose-code:after:content-none
                  prose-pre:p-0 prose-pre:bg-transparent prose-pre:my-0
                  prose-blockquote:border-l-yellow-400 prose-blockquote:text-zinc-400 prose-blockquote:font-mono prose-blockquote:bg-zinc-900/50 prose-blockquote:py-2 prose-blockquote:pr-4 prose-blockquote:rounded-r-lg
                  prose-ul:my-4 prose-li:text-zinc-300 prose-li:leading-7
                  prose-hr:border-zinc-800
                  prose-table:text-sm prose-thead:text-yellow-400 prose-th:font-mono prose-th:border prose-th:border-zinc-700 prose-th:px-4 prose-th:py-2
                  prose-td:border prose-td:border-zinc-800 prose-td:px-4 prose-td:py-2 prose-td:text-zinc-300
                  prose-tr:even:bg-zinc-900/40
                "
              >
                {children}
              </article>
            </motion.main>

            {/* ── RIGHT: mirror spacer so article stays centered ── */}
            <div className="hidden xl:block w-52 shrink-0" />
          </div>
        </div>
      </div>
    </>
  );
}
