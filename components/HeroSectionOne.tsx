"use client";


import { motion } from "motion/react";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { FloatingPill } from "./ui/FloatingPill";

export function HeroSectionOne() {
    return (
        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center">
            <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
                <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-yellow-500 to-transparent" />
            </div>
            <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
                <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-yellow-500 to-transparent" />
            </div>
            <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
                <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
            </div>

            {/* Floating Pills Background - Hidden on mobile, visible on lg+ to avoid clutter */}
            <div className="absolute inset-0 z-0 hidden lg:block overflow-visible pointer-events-none">
                <FloatingPill
                    text="Ideate"
                    color="bg-yellow-500"
                    className="top-[15%] left-[5%]"
                    delay={0}
                />
                <FloatingPill
                    text="Innovate"
                    color="bg-yellow-500"
                    className="top-[10%] right-[5%]"
                    delay={1.5}
                />
                <FloatingPill
                    text="Inspire"
                    color="bg-yellow-500"
                    className="bottom-[10%] left-[30%]"
                    delay={1}
                />
            </div>
            <div className="px-4 py-10 md:py-20 flex flex-col items-center">

                {/* Quick Runthrough Pill */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8 hidden md:block" // Hidden on mobile to save space, visible on md+
                >
                    <Link href="/experience" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900/50 border border-yellow-500/30 backdrop-blur-sm hover:border-yellow-500/60 transition-colors cursor-pointer group">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
                        </span>
                        <span className="text-sm font-medium text-yellow-200">Got no time? Quick runthrough</span>
                        <ArrowRight size={14} className="text-yellow-200 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>

                <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-slate-700 md:text-4xl lg:text-7xl dark:text-slate-300">
                    {"Hey, I am Arnab Jena - aka Devo"
                        .split(" ")
                        .map((word, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                                transition={{
                                    duration: 0.3,
                                    delay: index * 0.1,
                                    ease: "easeInOut",
                                }}
                                className={`mr-2 inline-block ${word === "Devo"
                                    ? "text-yellow-500 underline decoration-yellow-500 decoration-straight"
                                    : (word === "Arnab" || word === "Jena" ? "text-slate-900 dark:text-white" : "")
                                    }`}
                            >
                                {word}
                            </motion.span>
                        ))}
                </h1>
                <motion.p
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    transition={{
                        duration: 0.3,
                        delay: 0.8,
                    }}
                    className="relative z-10 mx-auto max-w-xl py-5 text-center text-2xl font-normal text-neutral-600 dark:text-neutral-400"
                >
                    Frontend engineer building reliable, scalable systems
                </motion.p>
                <motion.div
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    transition={{
                        duration: 0.3,
                        delay: 1,
                    }}
                    className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
                >
                    <Link href="/projects" className="w-60 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 text-center flex items-center justify-center">
                        Show my work
                    </Link>
                    <Link href="/contact" className="w-60 transform rounded-lg border border-gray-300 bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900 text-center flex items-center justify-center">
                        Contact Me
                    </Link>
                </motion.div>
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 10,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.3,
                        delay: 1.2,
                    }}>
                </motion.div>
            </div>
        </div>
    );
}


