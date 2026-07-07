"use client";
import React from "react";
import Link from "next/link";
import { Sun, Moon, Search } from "lucide-react";
import { usePathname } from "next/navigation";
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

    const playClickSound = () => {
        try {
            const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
            if (!AudioContext) return;
            const ctx = new AudioContext();
            
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            
            osc.connect(gain);
            gain.connect(ctx.destination);
            
            osc.type = "sine";
            osc.frequency.setValueAtTime(800, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.05);
            
            gain.gain.setValueAtTime(0.08, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);
            
            osc.start();
            osc.stop(ctx.currentTime + 0.06);
        } catch (e) {
            console.error("Audio error:", e);
        }
    };

    const toggleTheme = () => {
        if (!mounted) return;

        playClickSound();

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
            className={`flex w-full items-center justify-between px-6 md:px-8 py-2.5 relative ${isBlog
                    ? "bg-[#FAFAFA] dark:bg-[#0A0A0A]"
                    : "bg-[#FAFAFA]/80 dark:bg-[#0A0A0A]/80 backdrop-blur-lg"
                }`}
        >
            {/* Left: Logo */}
            <Link href="/" className="flex items-center gap-0 select-none">
                <span className="text-lg md:text-xl font-bold tracking-[0.1em] text-neutral-900 dark:text-white uppercase" style={{ fontFamily: 'var(--font-pixelify), monospace' }}>
                    DEVO
                </span>
            </Link>

            {/* Right: Nav links + Search + Theme toggle */}
            <div className="flex items-center gap-2 md:gap-4">
                {/* Nav links */}
                <div className="flex items-center gap-4 md:gap-6 text-[14px] md:text-[15px] font-medium text-neutral-500 dark:text-neutral-400">
                    <Link href="/blog" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Blogs</Link>
                    <Link href="/projects" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Projects</Link>
                </div>


                {/* Theme Toggle */}
                <button
                    onClick={toggleTheme}
                    className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors shrink-0 ml-1 text-neutral-500 dark:text-neutral-400"
                    title="Toggle Theme"
                    aria-label="Toggle Theme"
                >
                    {mounted ? (
                        theme === "dark" ? (
                            <Sun size={18} />
                        ) : (
                            <Moon size={18} />
                        )
                    ) : (
                        <div className="w-[18px] h-[18px]" />
                    )}
                </button>

            </div>

            {/* Full viewport bottom border */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[100vw] border-b border-neutral-200 dark:border-neutral-800/50" />
        </motion.nav>
    );
};
