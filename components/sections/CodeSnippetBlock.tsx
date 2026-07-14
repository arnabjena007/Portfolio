"use client";

import React from "react";
import { Check, Copy } from "lucide-react";

type CodeSnippetBlockProps = {
  title: string;
  language?: string;
  code: string;
};

export default function CodeSnippetBlock({ title, language, code }: CodeSnippetBlockProps) {
  const [copied, setCopied] = React.useState(false);
  const monoStack =
    'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.03] overflow-hidden">
      <div className="flex items-center justify-between gap-3 px-4 py-2 border-b border-white/10">
        <div className="flex items-center gap-3">
          <span className="text-[10px] uppercase tracking-[0.45em] text-white/45" style={{ fontFamily: monoStack }}>
            {language || "code"}
          </span>
          <p className="text-xs text-white/55" style={{ fontFamily: monoStack }}>{title}</p>
        </div>
        <button
          type="button"
          onClick={onCopy}
          className="inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.3em] text-white/55 transition-colors hover:text-white"
          style={{ fontFamily: monoStack }}
          aria-label={`Copy ${title}`}
        >
          {copied ? <Check size={12} /> : <Copy size={12} />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre
        className="overflow-x-auto px-4 py-4 text-sm leading-7 text-white"
        style={{ fontFamily: monoStack }}
      >
        <code className="text-white" style={{ fontFamily: monoStack }}>
          {code}
        </code>
      </pre>
    </div>
  );
}
