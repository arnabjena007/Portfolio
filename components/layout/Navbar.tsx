"use client";
import React from "react";
import Link from "next/link";
import { Sun, Moon } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { useTheme as useNextTheme } from "next-themes";
import GithubIcon from "@/components/icons/GithubIcon";
import TwitterXIcon from "@/components/icons/TwitterXIcon";
import LinkedinIcon from "@/components/icons/LinkedinIcon";

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
            className={`flex w-full items-center justify-end px-8 py-2 border-b border-neutral-200 dark:border-white/[0.05] ${isBlog
                    ? "bg-[#FAFAFA] dark:bg-[#0A0A0A]"
                    : "bg-[#FAFAFA]/80 dark:bg-[#0A0A0A]/80 backdrop-blur-lg"
                }`}
        >
            <div className="flex items-center">
                {/* Nav links */}
                <div className="flex items-center gap-6 text-[15px] font-medium text-neutral-500 dark:text-neutral-400">
                    <Link href="/blog" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Blog</Link>
                    <Link href="/projects" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Projects</Link>
                </div>

                {/* Separator */}
                <div className="w-[1px] h-4 bg-neutral-300 dark:bg-neutral-700 mx-6" />

                {/* Social Icons & Theme Toggle */}
                <div className="flex items-center gap-4 text-neutral-500 dark:text-neutral-400">
                    <a href="https://x.com/ArnabJena11" target="_blank" rel="noreferrer" className="hover:text-neutral-900 dark:hover:text-white transition-colors" aria-label="Twitter">
                        <TwitterXIcon size={18} />
                    </a>
                    <a href="https://linkedin.com/in/arnabjena007" target="_blank" rel="noreferrer" className="hover:text-neutral-900 dark:hover:text-white transition-colors" aria-label="LinkedIn">
                        <LinkedinIcon size={18} />
                    </a>
                    <a href="https://github.com/arnabjena007" target="_blank" rel="noreferrer" className="hover:text-neutral-900 dark:hover:text-white transition-colors" aria-label="GitHub">
                        <GithubIcon size={18} />
                    </a>
                    
                    <button
                        onClick={toggleTheme}
                        className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors shrink-0 ml-1"
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
            </div>
        </motion.nav>
    );
};
