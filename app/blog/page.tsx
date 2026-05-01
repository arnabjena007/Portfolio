import { getAllBlogs } from "@/lib/blog";
import { BlogListClient } from "@/components/blog/BlogListClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Devo Portfolio",
  description:
    "Deep dives into React internals, distributed systems, TypeScript patterns, and the craft of building software.",
};

export default function BlogPage() {
  const posts = getAllBlogs().sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime()
  );

  return <BlogListClient posts={posts} />;
}
