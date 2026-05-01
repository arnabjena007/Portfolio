"use client";

import { useEffect, useState, useRef } from "react";
import { Check, Copy } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface CodeBlockProps {
  children: string;
  className?: string;
  [key: string]: unknown;
}

export function CodeBlock({ children, className, ...props }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const codeRef = useRef<HTMLElement>(null);

  // Extract language from className like "language-tsx"
  const language = className?.replace("language-", "") ?? "text";

  const handleCopy = async () => {
    const text = codeRef.current?.innerText ?? children;
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative my-6 rounded-xl overflow-hidden border border-zinc-700/60 bg-[#0d1117] shadow-2xl">
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-900/80 border-b border-zinc-700/60">
        {/* Traffic light dots */}
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-red-500/80" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <span className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>

        {/* Language badge */}
        <span className="font-mono text-xs text-yellow-400/80 tracking-widest uppercase select-none">
          {language}
        </span>

        {/* Copy button */}
        <button
          onClick={handleCopy}
          aria-label="Copy code"
          className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-yellow-400 transition-colors duration-200"
        >
          <AnimatePresence mode="wait" initial={false}>
            {copied ? (
              <motion.span
                key="check"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="flex items-center gap-1 text-green-400"
              >
                <Check size={13} />
                Copied!
              </motion.span>
            ) : (
              <motion.span
                key="copy"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="flex items-center gap-1"
              >
                <Copy size={13} />
                Copy
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Code content */}
      <div className="overflow-x-auto">
        <pre className="p-5 text-sm leading-7 font-mono" {...props}>
          <code ref={codeRef} className={`${className ?? ""} hljs`}>
            {children}
          </code>
        </pre>
      </div>
    </div>
  );
}
