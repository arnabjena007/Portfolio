"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import type { BlogMeta } from "@/lib/blog";

// Diagonal Stripe Separator (Partition) spanning full viewport width
const DiagonalSeparator = () => (
    <div className="relative w-full h-5 mb-8 select-none pointer-events-none flex items-center justify-center">
        <div className="absolute w-[100vw] h-full left-1/2 -translate-x-1/2 border-t border-b border-neutral-200 dark:border-neutral-800/50">
            <div
                className="absolute inset-0 block dark:hidden"
                style={{
                    backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 6px, rgba(0, 0, 0, 0.03) 6px, rgba(0, 0, 0, 0.03) 7px)',
                }}
            />
            <div
                className="absolute inset-0 hidden dark:block"
                style={{
                    backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 6px, rgba(255, 255, 255, 0.1) 6px, rgba(255, 255, 255, 0.1) 7px)',
                }}
            />
        </div>
    </div>
);

interface BlogCardProps {
  post: BlogMeta;
  index: number;
}

function BlogCard({ post, index }: BlogCardProps) {
  const formattedDate = new Date(post.frontmatter.date).toLocaleDateString(
    "en-US",
    { year: "numeric", month: "short", day: "numeric" }
  );

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="w-full"
    >
      <Link href={`/blog/${post.slug}`} className="group block w-full">
        <div className="flex flex-col gap-3 p-5 rounded-2xl bg-white dark:bg-[#08080a] border border-neutral-200 dark:border-neutral-900 hover:border-yellow-500/20 dark:hover:border-yellow-500/20 transition-all duration-300">
          
          <div className="flex justify-between items-start w-full gap-4">
            <h2 className="text-xl font-bold text-neutral-900 dark:text-white group-hover:text-yellow-600 dark:group-hover:text-yellow-500 transition-colors font-serif italic pr-2">
              {post.frontmatter.title}
            </h2>
            <ArrowRight
              size={16}
              className="text-neutral-400 group-hover:text-yellow-600 dark:group-hover:text-yellow-500 group-hover:translate-x-1 transition-all duration-200 shrink-0 mt-1"
            />
          </div>

          <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2">
            {post.frontmatter.excerpt}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-y-3 mt-2">
            {post.frontmatter.tags && post.frontmatter.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.frontmatter.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-mono rounded bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-500 dark:text-neutral-400"
                  >
                    <Tag size={9} />
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <div className="flex items-center gap-3 text-xs font-mono text-neutral-500 dark:text-neutral-500 ml-auto">
              <span className="flex items-center gap-1">
                <Calendar size={11} className="text-yellow-600 dark:text-yellow-500" />
                {formattedDate}
              </span>
              <span className="text-neutral-300 dark:text-neutral-700">·</span>
              <span className="flex items-center gap-1">
                <Clock size={11} className="text-yellow-600 dark:text-yellow-500" />
                {post.readingTime}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

interface BlogListClientProps {
  posts: BlogMeta[];
}

export function BlogListClient({ posts }: BlogListClientProps) {
  return (
    <div className="w-full max-w-3xl mx-auto px-8 sm:px-12 relative pb-16 text-neutral-700 dark:text-neutral-300 font-sans leading-relaxed border-l border-r border-solid border-neutral-200 dark:border-white/[0.1]">
      <header className="relative -mx-8 sm:-mx-12 px-8 sm:px-12 py-12 w-auto text-center sm:text-left overflow-hidden border-b border-neutral-200 dark:border-white/[0.05]">
        {/* Background Image */}
        <img 
            src="/footer-bg.png" 
            alt="Header Background" 
            className="absolute inset-0 w-full h-full object-cover z-0 opacity-90"
        />
        <div className="absolute inset-0 bg-black/10 z-0"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 relative z-10"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white drop-shadow-md tracking-wide mb-4">
            Blog
          </h1>
          <p className="text-white/90 drop-shadow-md text-base leading-relaxed max-w-xl mx-auto sm:mx-0">
            Deep dives into React internals, distributed systems, TypeScript patterns, and the craft of building software.
          </p>
        </motion.div>
      </header>

      <DiagonalSeparator />

      <section className="space-y-6 mt-8">
        <div className="relative py-3 flex items-center justify-between">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] border-t border-neutral-200 dark:border-neutral-800/50" />
          <h2 className="text-3xl font-serif italic font-bold text-neutral-900 dark:text-white">All Posts</h2>
          <span className="text-xs font-mono text-neutral-500">
            {posts.length} post{posts.length !== 1 ? "s" : ""}
          </span>
        </div>

        {posts.length === 0 ? (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-mono text-neutral-500 text-center py-20"
          >
            No posts yet. Check back soon!
          </motion.p>
        ) : (
          <div className="flex flex-col gap-6">
            {posts.map((post, i) => (
              <BlogCard key={post.slug} post={post} index={i} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
