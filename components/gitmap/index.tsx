"use client";

import React, { useMemo, useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- Interfaces & Types ---

export interface DayData {
  date: Date;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

export interface WeekData {
  days: (DayData | null)[];
}

export interface RawContribution {
  date: string;
  count: number;
  level: number;
}

interface ContributionApiRecord {
  date: string;
  count: number;
}

export interface GitmapStats {
  total: number;
  currentStreak: number;
  longestStreak: number;
  busiestDay: string;
}

export interface CustomTheme {
  level0: string;
  level1: string;
  level2: string;
  level3: string;
  level4: string;
}

export interface GitmapProps {
  username: string;
  theme?: string | CustomTheme;
  cellSize?: number;
  gap?: number;
  shape?: "sharp" | "rounded" | "circle";
  showNumbers?: boolean;
  useGradient?: boolean;
}

// --- Predefined Themes ---

const PREDEFINED_THEMES: Record<string, string[]> = {
  "default-dark": ["#161B22", "#0E4429", "#006D32", "#26A641", "#39D353"],
  "cherry": ["#1C1113", "#700512", "#A80B20", "#E31E3D", "#FCA1B0"],
  "mint": ["#111D1C", "#1A4740", "#2D7568", "#4DA393", "#A8F2E2"],
  "coral": ["#21130E", "#592317", "#8F3E2B", "#CF644C", "#FCAE9D"],
  "slate": ["#161A22", "#3A4659", "#5C6F8C", "#8CA7CF", "#D8E5F8"],
  "gold": ["#1D1813", "#4F3A18", "#82632B", "#B89344", "#EBD17F"],
  "neon": ["#0B1A1D", "#08575E", "#03929E", "#00D0E0", "#8CF4FF"],
  "rose": ["#211116", "#5E192F", "#9C2C50", "#D64775", "#FCA4C0"],
  "ocean": ["#09121C", "#143A5C", "#21649C", "#3295DB", "#8FCDFF"],
  "forest": ["#0D140E", "#28442D", "#406E4A", "#5A9A68", "#A5D8B0"],
  "lavender": ["#120E17", "#342647", "#533D70", "#765C9E", "#C5B3E6"],
  "amber": ["#14100B", "#45321B", "#6E4F25", "#9E7432", "#E6CB85"],
  "sunset": ["#140B10", "#571C31", "#992E35", "#D6613C", "#FCD074"],
  "cyberpunk": ["#0B0C10", "#330066", "#6600CC", "#FF007F", "#00FFCC"],
};

const DAY_LABELS = ["", "Mon", "", "Wed", "", "Fri", ""];

// --- Helper Functions ---

function countToLevel(count: number): 0 | 1 | 2 | 3 | 4 {
  if (count === 0) return 0;
  if (count <= 3) return 1;
  if (count <= 7) return 2;
  if (count <= 12) return 3;
  return 4;
}

function getMonthLabels(weeks: WeekData[]): { label: string; col: number }[] {
  const labels: { label: string; col: number }[] = [];
  let lastMonth = -1;

  weeks.forEach((week, i) => {
    const firstDay = week.days.find((d) => d !== null);
    if (!firstDay) return;
    const month = firstDay.date.getMonth();
    if (month !== lastMonth) {
      labels.push({
        label: firstDay.date.toLocaleDateString("en-US", { month: "short" }),
        col: i,
      });
      lastMonth = month;
    }
  });

  return labels;
}

function transformRawContributions(raw: RawContribution[], days: number): WeekData[] {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const start = new Date(today);
  start.setDate(today.getDate() - days + 1);

  const dayOfWeek = start.getDay();
  start.setDate(start.getDate() - dayOfWeek);

  const map = new Map<string, { count: number; level: number }>();
  raw.forEach((item) => {
    map.set(item.date, { count: item.count, level: item.level });
  });

  const weeks: WeekData[] = [];
  const current = new Date(start);

  while (current <= today) {
    const week: (DayData | null)[] = [];
    for (let d = 0; d < 7; d++) {
      const day = new Date(current);
      day.setDate(current.getDate() + d);

      const yyyy = day.getFullYear();
      const mm = String(day.getMonth() + 1).padStart(2, "0");
      const dd = String(day.getDate()).padStart(2, "0");
      const dateStr = `${yyyy}-${mm}-${dd}`;

      const minDate = new Date(today);
      minDate.setDate(today.getDate() - days);
      minDate.setHours(0, 0, 0, 0);

      if (day > today || day < minDate) {
        week.push(null);
      } else {
        const found = map.get(dateStr);
        week.push({
          date: day,
          count: found ? found.count : 0,
          level: found ? (countToLevel(found.count) as 0 | 1 | 2 | 3 | 4) : 0,
        });
      }
    }
    weeks.push({ days: week });
    current.setDate(current.getDate() + 7);
  }

  return weeks;
}

function sfc32(a: number, b: number, c: number, d: number) {
  return function() {
    a >>>= 0; b >>>= 0; c >>>= 0; d >>>= 0;
    let t = (a + b) | 0;
    a = b ^ (b >>> 9);
    b = (c + (c << 3)) | 0;
    c = (c << 21) | (c >>> 11);
    d = (d + 1) | 0;
    t = (t + d) | 0;
    c = (c + t) | 0;
    return (t >>> 0) / 4294967296;
  }
}

function getSeededRandom(str: string) {
  let h1 = 1779033703, h2 = 3024733165, h3 = 3362453659, h4 = 50249321;
  for (let i = 0; i < str.length; i++) {
    const k = str.charCodeAt(i);
    h1 = h2 ^ Math.imul(h1 ^ k, 597399067);
    h2 = h3 ^ Math.imul(h2 ^ k, 2869860233);
    h3 = h4 ^ Math.imul(h3 ^ k, 951274213);
    h4 = h1 ^ Math.imul(h4 ^ k, 2716044179);
  }
  return sfc32(h1, h2, h3, h4);
}

function generateSeededHeatmapData(username: string, days = 365): WeekData[] {
  const randFn = getSeededRandom(username);
  
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const start = new Date(today);
  start.setDate(today.getDate() - days + 1);

  const dayOfWeek = start.getDay();
  start.setDate(start.getDate() - dayOfWeek);

  const weeks: WeekData[] = [];
  const current = new Date(start);

  while (current <= today) {
    const week: (DayData | null)[] = [];
    for (let d = 0; d < 7; d++) {
      const day = new Date(current);
      day.setDate(current.getDate() + d);

      const minDate = new Date(today);
      minDate.setDate(today.getDate() - days);
      minDate.setHours(0, 0, 0, 0);

      if (day > today || day < minDate) {
        week.push(null);
      } else {
        const rand = randFn();
        let count = 0;
        if (rand > 0.65) {
          const burst = randFn();
          if (burst > 0.9) count = Math.floor(randFn() * 15) + 10;
          else if (burst > 0.7) count = Math.floor(randFn() * 8) + 4;
          else count = Math.floor(randFn() * 4) + 1;
        }
        week.push({ date: day, count, level: countToLevel(count) });
      }
    }
    weeks.push({ days: week });
    current.setDate(current.getDate() + 7);
  }

  return weeks;
}

// --- Hook for Fetching Stats ---

export function useGitmapStats(username: string): GitmapStats {
  const [stats, setStats] = useState<GitmapStats>({
    total: 0,
    currentStreak: 0,
    longestStreak: 0,
    busiestDay: "—",
  });

  useEffect(() => {
    if (!username) return;
    let active = true;

    async function fetchStats() {
      try {
        const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${username.trim().toLowerCase()}`);
        if (!res.ok) {
          return;
        }
        const data = await res.json();
        if (!active) return;
        
        const contribs = (data.contributions || []) as ContributionApiRecord[];
        const days = contribs.map((d) => ({
          date: new Date(d.date),
          count: d.count
        }));
        
        const sorted = [...days].sort((a, b) => a.date.getTime() - b.date.getTime());
        const total = sorted.reduce((s, d) => s + d.count, 0);

        let currentStreak = 0;
        for (let i = sorted.length - 1; i >= 0; i--) {
          if (sorted[i].count > 0) currentStreak++;
          else break;
        }

        let longest = 0, run = 0;
        for (const d of sorted) {
          if (d.count > 0) {
            run++;
            longest = Math.max(longest, run);
          } else {
            run = 0;
          }
        }

        const busiest = sorted.reduce((best, d) => d.count > best.count ? d : best, sorted[0]);
        const busiestDay = busiest && busiest.count > 0
          ? busiest.date.toLocaleDateString("en-US", { month: "short", day: "numeric" })
          : "—";

        setStats({
          total,
          currentStreak,
          longestStreak: longest,
          busiestDay,
        });
      } catch (err) {
        console.error("Failed to load GitHub stats for Gitmap:", err);
      }
    }

    fetchStats();
    return () => {
      active = false;
    };
  }, [username]);

  return stats;
}

// --- Heatmap Cell Component ---

interface HeatmapCellProps {
  day: DayData | null;
  levels: string[];
  cellSize: number;
  gap: number;
  shape?: "sharp" | "rounded" | "circle";
  showNumbers?: boolean;
  useGradient?: boolean;
  delay?: number;
  isDimmed?: boolean;
}

function HeatmapCell({
  day,
  levels,
  cellSize,
  shape = "rounded",
  showNumbers = false,
  useGradient = false,
  delay = 0,
  isDimmed = false,
}: HeatmapCellProps) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipPos, setTooltipPos] = useState<"top" | "bottom">("top");
  const cellRef = useRef<HTMLDivElement>(null);

  if (!day) {
    return <div style={{ width: cellSize, height: cellSize }} className="opacity-0" />;
  }

  let borderRadius = "0px";
  if (shape === "rounded") {
    borderRadius = `${Math.max(1.5, cellSize * 0.18)}px`;
  } else if (shape === "circle") {
    borderRadius = "50%";
  }

  const bgStyle: React.CSSProperties = {};
  if (useGradient && day.level > 0) {
    const color1 = levels[day.level];
    const color2 = levels[Math.min(4, day.level + 1)];
    bgStyle.backgroundImage = `linear-gradient(135deg, ${color1}, ${color2})`;
  } else {
    bgStyle.backgroundColor = levels[day.level];
  }

  const handleMouseEnter = () => {
    if (cellRef.current) {
      const rect = cellRef.current.getBoundingClientRect();
      setTooltipPos(rect.top < 80 ? "bottom" : "top");
    }
    setShowTooltip(true);
  };

  const formattedDate = day.date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="relative" ref={cellRef} suppressHydrationWarning>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{
          opacity: isDimmed ? 0.15 : 1,
          scale: isDimmed ? 0.85 : 1,
        }}
        whileHover={isDimmed ? undefined : { scale: 1.25, zIndex: 10 }}
        onMouseEnter={isDimmed ? undefined : handleMouseEnter}
        onMouseLeave={() => setShowTooltip(false)}
        style={{
          width: cellSize,
          height: cellSize,
          borderRadius,
          cursor: isDimmed ? "default" : "pointer",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          userSelect: "none",
          ...bgStyle,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 20,
          delay,
        }}
      >
        {showNumbers && day.count > 0 && cellSize >= 8 && (
          <span
            style={{
              fontSize: Math.max(5, Math.floor(cellSize * 0.52)),
              color: day.level >= 3 ? "#000" : "#fff",
              fontWeight: 800,
              lineHeight: 1,
            }}
          >
            {day.count}
          </span>
        )}
      </motion.div>

      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: tooltipPos === "top" ? 6 : -6, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: tooltipPos === "top" ? 6 : -6, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            style={{
              position: "absolute",
              [tooltipPos === "top" ? "bottom" : "top"]: "calc(100% + 8px)",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 50,
              whiteSpace: "nowrap",
              pointerEvents: "none",
              backgroundColor: "rgba(15, 15, 15, 0.95)",
              color: "#f5f5f5",
            }}
            className="backdrop-blur-md border border-neutral-800 px-3 py-2 rounded-lg shadow-2xl font-mono text-[11px]"
          >
            <div className="font-semibold">{formattedDate}</div>
            <div className="flex items-center gap-2 mt-1">
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{
                  backgroundColor: levels[day.level],
                  boxShadow: day.level > 0 ? `0 0 6px ${levels[day.level]}` : "none",
                }}
              />
              <span className="text-neutral-400">
                {day.count === 0
                  ? "No contributions"
                  : `${day.count} contribution${day.count !== 1 ? "s" : ""}`}
              </span>
            </div>
            {/* Arrow */}
            <div
              style={{
                position: "absolute",
                [tooltipPos === "top" ? "bottom" : "top"]: -4,
                left: "50%",
                transform: "translateX(-50%)",
                width: 8,
                height: 8,
                backgroundColor: "rgba(15, 15, 15, 0.95)",
                borderRight: "1px solid rgba(255,255,255,0.08)",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                rotate: tooltipPos === "top" ? "45deg" : "225deg",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// --- Gitmap Main Component ---

export function Gitmap({
  username,
  theme = "default-dark",
  cellSize = 12,
  gap = 3,
  shape = "rounded",
  showNumbers = false,
  useGradient = false,
}: GitmapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [hoveredLevel, setHoveredLevel] = useState<number | null>(null);
  const [rawContributions, setRawContributions] = useState<RawContribution[] | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver((entries) => {
      if (entries[0]) {
        setWidth(entries[0].contentRect.width);
      }
    });
    observer.observe(containerRef.current);
    setWidth(containerRef.current.getBoundingClientRect().width);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!username) return;
    let active = true;

    async function fetchContributions() {
      try {
        const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${username.trim().toLowerCase()}`);
        if (!res.ok) throw new Error("API request failed");
        const data = await res.json();
        if (active) {
          setRawContributions(data.contributions || []);
        }
      } catch (err) {
        console.error("Failed to load Gitmap contributions:", err);
      }
    }

    fetchContributions();
    return () => {
      active = false;
    };
  }, [username]);

  const levels = useMemo(() => {
    if (typeof theme === "object" && theme !== null) {
      return [theme.level0, theme.level1, theme.level2, theme.level3, theme.level4];
    }
    return PREDEFINED_THEMES[theme] || PREDEFINED_THEMES["default-dark"];
  }, [theme]);

  const daysRange = 365;
  const computedData = useMemo(() => {
    if (!rawContributions) {
      return generateSeededHeatmapData(username, daysRange);
    }
    return transformRawContributions(rawContributions, daysRange);
  }, [rawContributions, username]);

  const numColumns = computedData.length;

  const { activeCellSize, activeGap } = useMemo(() => {
    if (width <= 0) return { activeCellSize: cellSize, activeGap: gap };

    const availableWidth = width - 32;
    let calculatedS = Math.floor((availableWidth - (numColumns - 1) * gap) / numColumns);
    let calculatedG = gap;

    if (calculatedS < 6 && gap > 2) {
      calculatedG = 2;
      calculatedS = Math.floor((availableWidth - (numColumns - 1) * 2) / numColumns);
    }
    if (calculatedS < 6) {
      calculatedG = 1;
      calculatedS = Math.floor((availableWidth - (numColumns - 1) * 1) / numColumns);
    }

    if (calculatedS < cellSize) {
      return {
        activeCellSize: Math.max(4, calculatedS),
        activeGap: calculatedG,
      };
    }

    return { activeCellSize: cellSize, activeGap: gap };
  }, [width, numColumns, cellSize, gap]);

  const monthLabels = useMemo(() => getMonthLabels(computedData), [computedData]);
  const totalCells = computedData.reduce((acc, w) => acc + w.days.length, 0);

  return (
    <div ref={containerRef} className="overflow-hidden w-full select-none">
      <div style={{ display: "inline-flex", flexDirection: "column", gap: 0, width: "100%" }}>
        {/* Month Labels */}
        <div style={{ display: "flex", marginLeft: 28, marginBottom: 4 }}>
          {computedData.map((_, weekIdx) => {
            const label = monthLabels.find((m) => m.col === weekIdx);
            return (
              <div
                key={weekIdx}
                style={{
                  width: activeCellSize + activeGap,
                  fontSize: Math.max(8, Math.min(10, activeCellSize)),
                  color: "#737373",
                  fontFamily: "var(--font-kalam), cursive",
                  flexShrink: 0,
                }}
              >
                {label?.label ?? ""}
              </div>
            );
          })}
        </div>

        {/* Grid Area */}
        <div style={{ display: "flex", gap: 0 }}>
          {/* Day Labels */}
          <div style={{ display: "flex", flexDirection: "column", gap: activeGap, marginRight: 4 }}>
            {DAY_LABELS.map((label, i) => (
              <div
                key={i}
                style={{
                  height: activeCellSize,
                  width: 22,
                  fontSize: Math.max(7, Math.min(9, activeCellSize - 2)),
                  color: "#737373",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  fontFamily: "var(--font-kalam), cursive",
                  flexShrink: 0,
                }}
              >
                {label}
              </div>
            ))}
          </div>

          {/* Heatmap Grid Cells */}
          <motion.div
            key={`${username}-${activeCellSize}-${activeGap}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            style={{ display: "flex", gap: activeGap }}
          >
            {computedData.map((week, weekIdx) => (
              <div key={weekIdx} style={{ display: "flex", flexDirection: "column", gap: activeGap }}>
                {week.days.map((day, dayIdx) => {
                  const globalIdx = weekIdx * 7 + dayIdx;
                  const delay = (globalIdx / totalCells) * 0.8;
                  return (
                    <HeatmapCell
                      key={dayIdx}
                      day={day}
                      levels={levels}
                      cellSize={activeCellSize}
                      gap={activeGap}
                      shape={shape}
                      showNumbers={showNumbers}
                      useGradient={useGradient}
                      delay={delay}
                      isDimmed={hoveredLevel !== null && day !== null && day.level !== hoveredLevel}
                    />
                  );
                })}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Legend */}
        <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 8, justifyContent: "flex-end" }}>
          <span style={{ fontSize: 10, color: "#737373", fontFamily: "var(--font-kalam), cursive" }}>Less</span>
          {levels.map((color, i) => (
            <div
              key={i}
              onMouseEnter={() => setHoveredLevel(i)}
              onMouseLeave={() => setHoveredLevel(null)}
              style={{
                width: Math.min(10, activeCellSize),
                height: Math.min(10, activeCellSize),
                backgroundImage: useGradient && i > 0
                  ? `linear-gradient(135deg, ${color}, ${levels[Math.min(4, i + 1)]})`
                  : undefined,
                backgroundColor: useGradient && i > 0 ? undefined : color,
                borderRadius: shape === "circle" ? "50%" : shape === "sharp" ? "0px" : "2px",
                flexShrink: 0,
                cursor: "pointer",
                transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
                transform: hoveredLevel === i ? "scale(1.35)" : "scale(1)",
                opacity: hoveredLevel !== null && hoveredLevel !== i ? 0.35 : 1,
                boxShadow: hoveredLevel === i && i > 0 ? `0 0 8px ${color}` : "none",
              }}
            />
          ))}
          <span style={{ fontSize: 10, color: "#737373", fontFamily: "var(--font-kalam), cursive" }}>More</span>
        </div>
      </div>
    </div>
  );
}
