import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const BLOGS_DIR = path.join(process.cwd(), "content", "blogs");

export interface BlogFrontmatter {
  title: string;
  date: string;
  minutesRead: number;
  excerpt: string;
  thumbnail?: string;
  tags?: string[];
}

export interface BlogPost {
  slug: string;
  frontmatter: BlogFrontmatter;
  content: string;
  readingTime: string;
}

export interface BlogMeta {
  slug: string;
  frontmatter: BlogFrontmatter;
  readingTime: string;
}

export function getAllBlogSlugs(): string[] {
  if (!fs.existsSync(BLOGS_DIR)) return [];
  return fs
    .readdirSync(BLOGS_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getBlogBySlug(slug: string): BlogPost | null {
  const filePath = path.join(BLOGS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const stats = readingTime(content);

  return {
    slug,
    frontmatter: data as BlogFrontmatter,
    content,
    readingTime: stats.text,
  };
}

export function getAllBlogs(): BlogMeta[] {
  const slugs = getAllBlogSlugs();
  return slugs
    .map((slug) => {
      const post = getBlogBySlug(slug);
      if (!post) return null;
      return {
        slug: post.slug,
        frontmatter: post.frontmatter,
        readingTime: post.readingTime,
      };
    })
    .filter(Boolean) as BlogMeta[];
}
