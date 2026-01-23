"use client";
import React from "react";
import Link from "next/link";
import { TerminalSquare } from "lucide-react";

import { navItems } from "@/data";

export const Navbar = () => {
    return (
        <nav className="flex w-full items-center justify-between border-t border-b border-neutral-200 px-4 py-4 dark:border-neutral-800">
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
                <Link href="/terminal">
                    <button className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-full font-bold transition-all shadow-md text-sm">
                        <TerminalSquare size={16} />
                        <span>CLI</span>
                    </button>
                </Link>
            </div>
        </nav>
    );
};
