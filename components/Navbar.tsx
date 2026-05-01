"use client";
import React from "react";
import Link from "next/link";
import { TerminalSquare, Coffee } from "lucide-react";
import { usePathname } from "next/navigation";

import { navItems } from "@/data";

import { motion } from "motion/react";

export const Navbar = () => {
    const pathname = usePathname();
    const isBlog = pathname.startsWith("/blog");

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`flex w-full items-center justify-between border-b px-4 py-5 ${
                isBlog
                    ? "bg-[#0a0a0a] border-zinc-800"
                    : "bg-black-100/10 backdrop-blur-lg border-white/20"
            }`}
        >
            <Link href="/" className="flex items-center gap-2">
                <div className="size-7 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500" />
                <h1 className="text-xl font-bold md:text-3xl text-black dark:text-white">Devo</h1>
            </Link>

            <div className="hidden md:flex items-center gap-8">
                {navItems.map((item, idx) => (
                    <Link
                        key={idx}
                        href={item.link}
                        className="text-lg font-medium text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors"
                    >
                        {item.name}
                    </Link>
                ))}
            </div>

            <div className="flex items-center gap-4">
                <a href="https://www.buymeacoffee.com/your-username" target="_blank" rel="noopener noreferrer">
                    <button className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-full font-bold transition-all shadow-md text-sm">
                        <Coffee size={16} />
                        <span className="hidden md:block">Buy me a coffee</span>
                    </button>
                </a>
                <Link href="/terminal">
                    <button className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-full font-bold transition-all shadow-md text-sm">
                        <TerminalSquare size={16} />
                        <span>CLI</span>
                    </button>
                </Link>
            </div>
        </motion.nav>
    );
};
