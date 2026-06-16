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
                    <Link href="/" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Home</Link>
                    <Link href="/blog" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Blog</Link>
                    <Link href="/projects" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Projects</Link>
                </div>

                {/* Separator */}
                <div className="w-[1px] h-4 bg-neutral-300 dark:bg-neutral-700 mx-6" />

                {/* Social Icons & Theme Toggle */}
                <div className="flex items-center gap-4 text-neutral-500 dark:text-neutral-400">
                    <a
                        href="https://drive.google.com/file/d/1Stp0jleIoRQ-6DkHPkkQESf7x6C9k7KL/view?usp=sharing"
                        target="_blank"
                        rel="noreferrer"
                        className="bg-neutral-200 dark:bg-slate-800 no-underline group cursor-pointer relative shadow-sm rounded-full p-px text-[11px] font-medium text-neutral-900 dark:text-white inline-block mr-1"
                    >
                        <span className="absolute inset-0 overflow-hidden rounded-full">
                            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                        </span>
                        <div className="relative flex space-x-1 items-center z-10 rounded-full bg-white dark:bg-zinc-950 py-0.5 px-2.5 ring-1 ring-black/10 dark:ring-white/10">
                            <span>Resume</span>
                            <svg
                                width="12"
                                height="12"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    d="M10.75 8.75L14.25 12L10.75 15.25"
                                ></path>
                            </svg>
                        </div>
                        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
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
