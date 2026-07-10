"use client";

import React from "react";
import { useTheme } from "next-themes";
import { Gitmap, useGitmapStats } from "@arnabjena007/gitmap";

export function GitHubContributionsFallback() {
  return (
    <div className="flex h-40 w-full items-center justify-center">
      <div className="flex gap-1.5 items-center text-neutral-600 text-xs font-serif">
        <span className="w-2 h-2 rounded-full bg-neutral-700 animate-pulse" />
        <span className="w-2 h-2 rounded-full bg-neutral-700 animate-pulse delay-75" />
        <span className="w-2 h-2 rounded-full bg-neutral-700 animate-pulse delay-150" />
      </div>
    </div>
  );
}

const GitHubContributions = () => {
  const { theme } = useTheme();
  const stats = useGitmapStats("arnabjena007");
  const currentTheme = theme === "light" ? "light" : "dark";

  // Construct a theme matching the portfolio's aesthetics
  const portfolioTheme = currentTheme === "light"
    ? {
        level0: "#f5f5f5", // Light neutral background
        level1: "#bbf7d0", // Light green tint
        level2: "#86efac", // Mid light green
        level3: "#22c55e", // Green
        level4: "#15803d", // Deep green
      }
    : {
        level0: "#1a1a1a", // Deep dark background
        level1: "#14311e", // Dark level 1
        level2: "#1a5c30", // Dark level 2
        level3: "#22883f", // Dark level 3
        level4: "#2bb34f", // Vibrant level 4
      };

  return (
    <div className="space-y-6 -mx-8 sm:-mx-12">
      {/* Header row */}
      <div className="flex items-center justify-between px-8 sm:px-12">
        <span className="text-xs font-serif text-neutral-500 dark:text-neutral-400">
          {stats.total > 0
            ? `${stats.total.toLocaleString("en")} contributions in the last year`
            : "GitHub contributions"}
        </span>
        <a
          href="https://github.com/arnabjena007"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[10px] font-serif text-neutral-500 hover:text-yellow-600 dark:text-neutral-600 dark:hover:text-yellow-500 transition-colors"
        >
          @arnabjena007 ↗
        </a>
      </div>

      {/* Gitmap Heatmap Grid */}
      <div className="px-8 sm:px-12 overflow-x-auto blog-scroll">
        <Gitmap
          username="arnabjena007"
          theme={portfolioTheme}
          cellSize={13}
          gap={4}
          shape="circle"
          showNumbers={false}
          useGradient={true}
        />
      </div>

      {/* Stats Bar */}
      <div className="px-8 sm:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-xl border border-neutral-200 dark:border-neutral-800/60 bg-neutral-50/50 dark:bg-[#121212]/50 backdrop-blur-md">
          <div className="space-y-1">
            <span className="block text-[10px] font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
              Total
            </span>
            <strong className="block text-lg font-serif font-bold text-neutral-900 dark:text-white">
              {stats.total.toLocaleString()}
            </strong>
          </div>
          <div className="space-y-1">
            <span className="block text-[10px] font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
              Current Streak
            </span>
            <strong className="block text-lg font-serif font-bold text-neutral-900 dark:text-white">
              {stats.currentStreak}d
            </strong>
          </div>
          <div className="space-y-1">
            <span className="block text-[10px] font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
              Longest Streak
            </span>
            <strong className="block text-lg font-serif font-bold text-neutral-900 dark:text-white">
              {stats.longestStreak}d
            </strong>
          </div>
          <div className="space-y-1">
            <span className="block text-[10px] font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
              Busiest Day
            </span>
            <strong className="block text-lg font-serif font-bold text-neutral-900 dark:text-white truncate">
              {stats.busiestDay}
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GitHubContributions;
