"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { TOC } from "./TOC";
import type { BlogFrontmatter } from "@/lib/blog";
import Footer from "@/components/layout/Footer";

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
      className="fixed top-0 left-0 right-0 h-[3px] bg-yellow-500 origin-left z-[999]"
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
      text: (el.textContent ?? "").replace(/#$/, "").trim(),
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

      {/* Main Container - matches the HomePage center column */}
      <div className="mx-auto min-h-screen w-full max-w-6xl border-l border-r border-solid border-neutral-200 px-8 pb-24 pt-8 font-sans leading-relaxed text-neutral-700 dark:border-white/[0.1] dark:text-neutral-300 sm:px-12">
        
        {/* ── Top bar: back link ── */}
        <div className="pb-8 border-b border-neutral-200 dark:border-neutral-800/50 mb-10">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-sans font-medium text-neutral-500 dark:text-neutral-400 hover:text-yellow-600 dark:hover:text-yellow-500 transition-colors duration-200 group"
            >
              <ArrowLeft
                size={15}
                className="group-hover:-translate-x-1 transition-transform duration-200"
              />
              All posts
            </Link>
          </motion.div>
        </div>

        {/* ── Main grid: TOC | Article ── */}
        <div className="grid gap-10 xl:grid-cols-[220px_minmax(0,768px)] xl:justify-center xl:gap-14 xl:items-start">

          {/* ── LEFT: sticky TOC (desktop only) ── */}
          <aside className="hidden xl:block">
            <TOC headings={headings} />
          </aside>

          {/* ── CENTER: Post content ── */}
          <motion.main
            className="min-w-0"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* Post header */}
            <header className="mb-12 pb-8 border-b border-neutral-200 dark:border-neutral-800/50">
              {frontmatter.tags && frontmatter.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {frontmatter.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-[11px] font-sans font-medium bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-800"
                    >
                      <Tag size={10} />
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <h1 className="font-sans text-4xl sm:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white leading-tight mb-6">
                {frontmatter.title}
              </h1>

              <p className="text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed mb-6 max-w-3xl">
                {frontmatter.excerpt}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-sm font-sans font-medium text-neutral-500 dark:text-neutral-500">
                <span className="flex items-center gap-1.5">
                  <Calendar size={13} className="text-yellow-600 dark:text-yellow-500" />
                  {formattedDate}
                </span>
                <span className="text-neutral-300 dark:text-neutral-700">·</span>
                <span className="flex items-center gap-1.5">
                  <Clock size={13} className="text-yellow-600 dark:text-yellow-500" />
                  {readingTime}
                </span>
              </div>
            </header>

            {/* MDX Content */}
            <article
              id="blog-content"
              className="
                prose dark:prose-invert prose-lg max-w-none
                prose-headings:font-sans prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-neutral-900 dark:prose-headings:text-white
                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:border-l-2 prose-h2:border-yellow-500 prose-h2:pl-4
                prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-neutral-800 dark:prose-h3:text-neutral-200
                prose-p:text-neutral-700 dark:prose-p:text-neutral-300 prose-p:leading-relaxed prose-p:my-6
                prose-a:text-yellow-600 dark:prose-a:text-yellow-500 prose-a:no-underline hover:prose-a:underline
                prose-strong:text-neutral-900 dark:prose-strong:text-white prose-strong:font-semibold
                prose-code:text-yellow-700 dark:prose-code:text-yellow-300 prose-code:bg-neutral-100 dark:prose-code:bg-neutral-800/70 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-code:before:content-none prose-code:after:content-none
                prose-pre:p-0 prose-pre:bg-transparent prose-pre:my-0
                prose-blockquote:border-l-yellow-500 prose-blockquote:text-neutral-600 dark:prose-blockquote:text-neutral-400 prose-blockquote:font-sans prose-blockquote:italic prose-blockquote:bg-neutral-50 dark:prose-blockquote:bg-neutral-900/50 prose-blockquote:py-2 prose-blockquote:pr-4 prose-blockquote:rounded-r-lg
                prose-ul:my-4 prose-li:text-neutral-700 dark:prose-li:text-neutral-300 prose-li:leading-relaxed
                prose-hr:border-neutral-200 dark:prose-hr:border-neutral-800
                prose-table:text-sm prose-thead:text-neutral-900 dark:prose-thead:text-white prose-th:font-sans prose-th:border prose-th:border-neutral-200 dark:prose-th:border-neutral-800 prose-th:px-4 prose-th:py-2
                prose-td:border prose-td:border-neutral-200 dark:prose-td:border-neutral-800 prose-td:px-4 prose-td:py-2 prose-td:text-neutral-700 dark:prose-td:text-neutral-300
                prose-tr:even:bg-neutral-50 dark:prose-tr:even:bg-neutral-900/40
              "
            >
              {children}
            </article>
          </motion.main>
        </div>

        {/* Footer inside the bordered container */}
        <div className="mt-16 -mx-8 sm:-mx-12">
          <Footer />
        </div>
      </div>
    </>
  );
}
