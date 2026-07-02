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
      className="sticky top-24 hidden xl:block w-56 shrink-0"
    >
      <p className="text-xs font-sans font-medium uppercase tracking-widest text-yellow-400/70 mb-4 px-1">
        On this page
      </p>
      <ul className="space-y-0.5">
        {headings.map((h) => {
          const isActive = activeId === h.id;
          return (
            <li key={h.id}>
              <button
                onClick={() => handleClick(h.id)}
                className={`
                  group relative w-full text-left transition-all duration-200
                  ${h.level === 3 ? "pl-5" : "pl-2"}
                `}
              >
                {/* Active indicator bar */}
                <AnimatePresence>
                  {isActive && (
                    <motion.span
                      layoutId="toc-active-bar"
                      className="absolute left-0 top-0.5 bottom-0.5 w-0.5 bg-yellow-400 rounded-full"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </AnimatePresence>

                <span
                  className={`
                    block py-1 pr-2 text-sm font-sans leading-snug transition-colors duration-200
                    ${
                      isActive
                        ? "text-yellow-400 font-medium"
                        : "text-zinc-500 hover:text-zinc-300"
                    }
                    ${h.level === 3 ? "text-xs" : "text-sm"}
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
