"use client";

import { GitHubCalendar } from "react-github-calendar";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

// Theme matching the portfolio in both light and dark modes
const THEME = {
  dark: [
    "#1a1a1a", // level 0 — empty (near bg)
    "#14311e", // level 1
    "#1a5c30", // level 2
    "#22883f", // level 3
    "#2bb34f", // level 4
  ],
  light: [
    "#f0f0f0", // level 0 — empty (near light bg)
    "#9be9a8", // level 1
    "#40c463", // level 2
    "#30a14e", // level 3
    "#216e39", // level 4
  ],
};

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
  const [totalCount, setTotalCount] = useState<number | null>(null);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const currentTheme = mounted && theme === "light" ? "light" : "dark";

  return (
    <div className="space-y-3 -mx-8 sm:-mx-12">
      {/* Header row aligned with standard padding */}
      <div className="flex items-center justify-between px-8 sm:px-12">
        <span className="text-xs font-serif text-neutral-500 dark:text-neutral-400">
          {totalCount !== null
            ? `${totalCount.toLocaleString("en")} contributions in the last year`
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

      {/* Calendar container with horizontal padding so the scaled calendar has breathing room on mobile */}
      <div className="px-8 sm:px-12">
        {/* Guarantee zero scrollbars and perfect responsive scaling directly via injected style block */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
.react-activity-calendar {
  width: 100% !important;
  max-width: 100% !important;
  font-family: var(--font-instrument-serif), serif !important;
}
.react-activity-calendar__scroll-container {
  overflow-x: hidden !important;
  overflow-y: hidden !important;
  width: 100% !important;
  max-width: 100% !important;
}
.react-activity-calendar__calendar {
  width: 100% !important;
  height: auto !important;
  max-width: 100% !important;
  display: block !important;
}
`,
          }}
        />
        <GitHubCalendar
          username="arnabjena007"
          colorScheme={currentTheme}
          theme={THEME}
          blockSize={13}
          blockMargin={4}
          blockRadius={2}
          fontSize={11}
          showColorLegend={true}
          showTotalCount={false}
          showMonthLabels={true}
          transformData={(data) => {
            // Calculate total when data loads
            const total = data.reduce((acc, d) => acc + d.count, 0);
            if (totalCount !== total) {
              setTimeout(() => setTotalCount(total), 0);
            }
            return data;
          }}
          labels={{
            totalCount: "{{count}} contributions in {{year}}",
          }}
          style={{
            width: "100%",
            color: currentTheme === "light" ? "#737373" : "#525252",
          }}
        />
      </div>
    </div>
  );
};
export default GitHubContributions;
