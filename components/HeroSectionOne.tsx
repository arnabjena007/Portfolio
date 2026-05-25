"use client";
import React from 'react';


import { motion } from "motion/react";

import { Github, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";
import { FloatingPill } from "./ui/FloatingPill";


export function HeroSectionOne() {
    const [time, setTime] = React.useState<string>("");
    const [fps, setFps] = React.useState<number>(0);
    const [cell, setCell] = React.useState({ col: 0, row: 0 });
    const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

    React.useEffect(() => {
        // Time updater
        const updateTime = () => {
            const now = new Date();
            setTime(now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }));
        };
        updateTime();
        const timeInterval = setInterval(updateTime, 1000);

        // FPS counter
        let lastTime = performance.now();
        let frameCount = 0;
        let animationFrameId: number;

        const countFps = () => {
            const now = performance.now();
            frameCount++;
            if (now - lastTime >= 1000) {
                setFps(Math.round((frameCount * 1000) / (now - lastTime)));
                frameCount = 0;
                lastTime = now;
            }
            animationFrameId = requestAnimationFrame(countFps);
        };
        countFps();

        return () => {
            clearInterval(timeInterval);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = Math.round(e.clientX - rect.left);
        const y = Math.round(e.clientY - rect.top);

        setMousePosition({ x, y });
        setCell({
            col: Math.floor(x / 100) + 1,
            row: Math.floor(y / 100) + 1
        });
    };

    return (
        <div
            onMouseMove={handleMouseMove}
            className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center group"
        >

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
                    <Link href="/projects" className="w-60 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 text-center flex items-center justify-center h-10">
                        Show my work
                    </Link>
                    <Link href="/contact" className="w-60 transform rounded-lg border border-gray-300 bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900 text-center flex items-center justify-center h-10">
                        Contact Me
                    </Link>
                </motion.div>

                {/* Mobile-friendly Horizontal Social Links (Inspired by reference portfolio) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 1.2 }}
                    className="relative z-10 flex items-center justify-center gap-6 mt-8 border border-white/5 bg-[#0a0a0c]/60 backdrop-blur-md px-5 py-2.5 rounded-full shadow-lg"
                >
                    <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest mr-1">Find me:</span>
                    <a href="https://github.com/arnabjena007" target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-yellow-500 transition-colors flex items-center gap-1.5 text-xs font-mono cursor-pointer">
                        <Github size={15} />
                        <span>Github</span>
                    </a>
                    <a href="https://twitter.com/arnabjena007" target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-yellow-500 transition-colors flex items-center gap-1.5 text-xs font-mono cursor-pointer">
                        <Twitter size={15} />
                        <span>Twitter</span>
                    </a>
                    <a href="https://linkedin.com/in/arnabjena007" target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-yellow-500 transition-colors flex items-center gap-1.5 text-xs font-mono cursor-pointer">
                        <Linkedin size={15} />
                        <span>LinkedIn</span>
                    </a>
                </motion.div>
            </div>
        </div>
    );
}


