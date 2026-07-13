"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

interface TOCProps {
  headings: TOCItem[];
}

export function TOC({ headings }: TOCProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the topmost visible heading
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => {
            const rectA = a.boundingClientRect.top;
            const rectB = b.boundingClientRect.top;
            return rectA - rectB;
          });

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-80px 0% -60% 0%",
        threshold: 0,
      }
    );

    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 96;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  if (headings.length === 0) return null;

  return (
    <nav
      aria-label="Table of contents"
      className="sticky top-24 hidden max-h-[calc(100vh-7rem)] w-full overflow-y-auto pr-2 xl:block"
    >
      <p className="mb-4 px-1 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
        On this page
      </p>
      <ul className="space-y-1 border-l border-neutral-200 pl-3 dark:border-neutral-800">
        {headings.map((h) => {
          const isActive = activeId === h.id;
          return (
            <li key={h.id}>
              <button
                onClick={() => handleClick(h.id)}
                className={`
                  group relative w-full text-left transition-all duration-200
                  ${h.level === 3 ? "pl-3" : "pl-0"}
                `}
              >
                {/* Active indicator bar */}
                <AnimatePresence>
                  {isActive && (
                    <motion.span
                      layoutId="toc-active-bar"
                      className="absolute -left-3 top-1 bottom-1 w-0.5 rounded-full bg-yellow-500"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </AnimatePresence>

                <span
                  className={`
                    block py-1 pr-2 font-sans leading-snug transition-colors duration-200
                    ${
                      isActive
                        ? "font-medium text-yellow-600 dark:text-yellow-500"
                        : "text-neutral-500 hover:text-neutral-900 dark:text-neutral-500 dark:hover:text-neutral-300"
                    }
                    ${h.level === 3 ? "text-xs" : "text-[13px]"}
                  `}
                >
                  {h.text}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
