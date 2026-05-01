"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import type { BlogMeta } from "@/lib/blog";

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
    >
      <Link href={`/blog/${post.slug}`} className="group block">
        <div className="relative p-6 rounded-xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-sm hover:border-yellow-400/40 hover:bg-zinc-900/70 transition-all duration-300">
          {/* Subtle corner glow on hover */}
          <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-yellow-400/5 to-transparent pointer-events-none" />

          {/* Tags */}
          {post.frontmatter.tags && post.frontmatter.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {post.frontmatter.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-mono bg-yellow-400/10 text-yellow-400/80 border border-yellow-400/15"
                >
                  <Tag size={9} />
                  {tag}
                </span>
              ))}
            </div>
          )}

          <h2 className="font-mono text-lg font-bold text-white group-hover:text-yellow-400 transition-colors duration-200 mb-2 leading-snug">
            {post.frontmatter.title}
          </h2>

          <p className="text-zinc-400 text-sm leading-relaxed mb-4 line-clamp-2">
            {post.frontmatter.excerpt}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-xs font-mono text-zinc-500">
              <span className="flex items-center gap-1">
                <Calendar size={11} className="text-yellow-400/60" />
                {formattedDate}
              </span>
              <span className="text-zinc-700">·</span>
              <span className="flex items-center gap-1">
                <Clock size={11} className="text-yellow-400/60" />
                {post.readingTime}
              </span>
            </div>

            <ArrowRight
              size={15}
              className="text-zinc-600 group-hover:text-yellow-400 group-hover:translate-x-1 transition-all duration-200"
            />
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
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12 pt-24 pb-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-xs font-mono uppercase tracking-widest text-yellow-400/70 mb-3">
            // writing
          </p>
          <h1 className="font-mono text-4xl sm:text-5xl font-bold text-white mb-4">
            Blog
          </h1>
          <p className="text-zinc-400 text-base leading-relaxed max-w-xl">
            Deep dives into React internals, distributed systems, TypeScript patterns, and the craft of building software.
          </p>

          {/* Decorative line */}
          <div className="mt-8 h-px bg-gradient-to-r from-yellow-400/40 via-yellow-400/10 to-transparent" />
        </motion.div>

        {/* Post count */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-xs font-mono text-zinc-500 mb-6"
        >
          {posts.length} post{posts.length !== 1 ? "s" : ""}
        </motion.p>

        {/* Posts list */}
        {posts.length === 0 ? (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-mono text-zinc-500 text-center py-20"
          >
            No posts yet. Check back soon!
          </motion.p>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {posts.map((post, i) => (
              <BlogCard key={post.slug} post={post} index={i} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
