"use client";
import React from "react";
import Link from "next/link";
import { TerminalSquare, Sun, Moon } from "lucide-react";
import { usePathname } from "next/navigation";
import { navItems } from "@/data";
import { motion } from "motion/react";
import { useTheme as useNextTheme } from "next-themes";

export const Navbar = () => {
    const pathname = usePathname();
    const isBlog = pathname.startsWith("/blog");

    const { theme, setTheme } = useNextTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    const toggleTheme = () => {
        if (!mounted) return;

        // Native View Transition API theme toggle circular reveal ripple
        if (!document.startViewTransition) {
            setTheme(theme === "dark" ? "light" : "dark");
            return;
        }

        document.startViewTransition(() => {
            setTheme(theme === "dark" ? "light" : "dark");
        });
    };

    return (
        <motion.nav
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`flex w-full items-center justify-end border-b px-6 py-3 ${isBlog
                    ? "bg-white dark:bg-[#0a0a0a] border-zinc-200 dark:border-zinc-800"
                    : "bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-lg border-neutral-200 dark:border-white/[0.05]"
                }`}
        >
            {/* Right actions */}
            <div className="flex items-center gap-5 shrink-0">
                <Link
                    href="/terminal"
                    className="flex items-center gap-1 text-xs font-mono text-neutral-500 hover:text-neutral-800 dark:hover:text-white transition-colors"
                >
                    <TerminalSquare size={13} className="opacity-60" />
                    <span>CLI</span>
                </Link>
                <a
                    href="https://drive.google.com/file/d/1Stp0jleIoRQ-6DkHPkkQESf7x6C9k7KL/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-neutral-500 hover:text-neutral-800 dark:hover:text-white transition-colors"
                >
                    Resume
                </a>
                <button
                    onClick={toggleTheme}
                    className="flex items-center justify-center p-1.5 rounded-[10px] border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#070709] text-neutral-500 hover:text-neutral-800 dark:hover:text-white hover:bg-neutral-50 dark:hover:bg-neutral-900/40 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300 shadow-sm shrink-0"
                    title="Toggle Theme"
                    aria-label="Toggle Theme"
                >
                    {mounted ? (
                        theme === "dark" ? (
                            <Sun size={13} />
                        ) : (
                            <Moon size={13} />
                        )
                    ) : (
                        <div className="w-[13px] h-[13px]" />
                    )}
                </button>
            </div>
        </motion.nav>
    );
};
