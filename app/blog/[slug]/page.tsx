import { getBlogBySlug, getAllBlogSlugs } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import { BlogLayout } from "@/components/blog/BlogLayout";
import { CodeBlock } from "@/components/blog/CodeBlock";
import { notFound } from "next/navigation";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// MDX component overrides
const components = {
  pre: ({ children, ...props }: React.ComponentPropsWithoutRef<"pre">) => {
    // Extract code element content + className
    const child = children as React.ReactElement<{ className?: string; children?: string }>;
    const code = child?.props;

    return (
      <CodeBlock className={code?.className} {...props}>
        {(code?.children as string) ?? ""}
      </CodeBlock>
    );
  },
  // Enhance inline code
  code: ({ children, className, ...props }: React.ComponentPropsWithoutRef<"code">) => {
    // If no className it's inline code, not a block
    if (!className) {
      return (
        <code
          className="font-mono text-yellow-300 bg-zinc-800/70 px-1.5 py-0.5 rounded text-sm"
          {...props}
        >
          {children}
        </code>
      );
    }
    // Block code — handled by <pre> override above
    return <code className={className} {...props}>{children}</code>;
  },
  // Custom heading anchors
  h2: ({ children, id, ...props }: React.ComponentPropsWithoutRef<"h2">) => (
    <h2 id={id} className="group font-mono text-2xl font-bold text-white mt-12 mb-4 border-l-2 border-yellow-400 pl-4 flex items-center gap-2" {...props}>
      {children}
      {id && (
        <a href={`#${id}`} className="opacity-0 group-hover:opacity-100 text-yellow-400/50 hover:text-yellow-400 transition-opacity text-lg" aria-hidden>
          #
        </a>
      )}
    </h2>
  ),
  h3: ({ children, id, ...props }: React.ComponentPropsWithoutRef<"h3">) => (
    <h3 id={id} className="group font-mono text-xl font-semibold text-zinc-200 mt-8 mb-3 flex items-center gap-2" {...props}>
      {children}
      {id && (
        <a href={`#${id}`} className="opacity-0 group-hover:opacity-100 text-yellow-400/50 hover:text-yellow-400 transition-opacity" aria-hidden>
          #
        </a>
      )}
    </h3>
  ),
  // Styled blockquote
  blockquote: ({ children, ...props }: React.ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote
      className="border-l-2 border-yellow-400 pl-4 pr-3 py-2 my-6 bg-zinc-900/50 rounded-r-lg font-mono text-zinc-400 text-sm italic"
      {...props}
    >
      {children}
    </blockquote>
  ),
};

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.frontmatter.title} | Blog`,
    description: post.frontmatter.excerpt,
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.excerpt,
      images: post.frontmatter.thumbnail ? [post.frontmatter.thumbnail] : [],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) notFound();

  return (
    <BlogLayout frontmatter={post.frontmatter} readingTime={post.readingTime}>
      <MDXRemote
        source={post.content}
        components={components}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [
              rehypeSlug,
              [
                rehypeHighlight,
                {
                  detect: true,
                  ignoreMissing: true,
                },
              ],
            ],
          },
        }}
      />
    </BlogLayout>
  );
}
