"use client";
import React from "react";
import Link from "next/link";
import {
    Github,
    ExternalLink,
    ArrowRight,
    MapPin,
    Mail
} from "lucide-react";
import { motion } from "motion/react";
import { workExperience, projects } from "@/data";
import Projects from "@/components/sections/Projects";
import GitHubContributions, { GitHubContributionsFallback } from "@/components/sections/GitHubContributions";
import LocationIcon from "@/components/icons/LocationIcon";
import MailIcon from "@/components/icons/MailIcon";
import GithubIcon from "@/components/icons/GithubIcon";
import TwitterXIcon from "@/components/icons/TwitterXIcon";
import LinkedinIcon from "@/components/icons/LinkedinIcon";

// Diagonal Stripe Separator (Partition) spanning full viewport width
const DiagonalSeparator = () => (
    <div className="relative w-full h-5 my-4 select-none pointer-events-none flex items-center justify-center">
        <div className="absolute w-[100vw] h-full left-1/2 -translate-x-1/2 border-t border-b border-neutral-200 dark:border-white/[0.1]">
            <div
                className="absolute inset-0 block dark:hidden"
                style={{
                    backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 6px, rgba(0, 0, 0, 0.03) 6px, rgba(0, 0, 0, 0.03) 7px)',
                }}
            />
            <div
                className="absolute inset-0 hidden dark:block"
                style={{
                    backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 6px, rgba(255, 255, 255, 0.1) 6px, rgba(255, 255, 255, 0.1) 7px)',
                }}
            />
        </div>
    </div>
);


export const HomePage = () => {
    return (
        <div className="w-full max-w-3xl mx-auto px-8 sm:px-12 relative pb-16 text-neutral-700 dark:text-neutral-300 font-sans leading-relaxed border-l border-r border-solid border-neutral-200 dark:border-white/[0.1]">

            {/* 1. HERO SECTION */}
            <header className="relative pt-10 pb-6 w-full">



                <div className="relative z-10 flex flex-col items-center sm:items-start text-center sm:text-left gap-4">
                    {/* circular avatar frame with green status indicator */}
                    <div className="flex flex-col sm:flex-row items-center gap-6 w-full">
                        <div className="relative shrink-0 select-none">
                            {/* Outer frame */}
                            <div className="relative w-28 h-28 rounded-[2rem] overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-2xl p-1">
                                {/* Bulletproof CSS injection to guarantee the profile sweep animation runs instantly */}
                                <style dangerouslySetInnerHTML={{
                                    __html: `
                                    @keyframes profile-sweep {
                                        0% {
                                            transform: translateX(-150px) skewX(-20deg);
                                        }
                                        22% {
                                            transform: translateX(200px) skewX(-20deg);
                                        }
                                        100% {
                                            transform: translateX(200px) skewX(-20deg);
                                        }
                                    }
                                    .animate-profile-sweep {
                                        animation: profile-sweep 9s infinite ease-in-out;
                                    }
                                ` }} />
                                <img
                                    src="/profile.jpg"
                                    alt="Arnab Jena"
                                    className="w-full h-full object-cover rounded-[1.75rem]"
                                />
                                {/* Profile Sweep Shimmer (profile-sweep) */}
                                <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[1.75rem]">
                                    <div className="absolute top-0 bottom-0 w-8 bg-gradient-to-r from-transparent via-white/35 to-transparent animate-profile-sweep" />
                                </div>
                            </div>

                            {/* Static green online indicator dot with border matching layout background perfectly */}
                            <span className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#00E676] border-[3px] border-[#FAFAFA] dark:border-[#0A0A0A] shadow-lg z-20" />
                        </div>
                        <div className="flex flex-col gap-2 shrink-0">
                            <div className="flex items-center justify-center sm:justify-start gap-2">
                                <h1 className="text-4xl md:text-4xl font-serif font-bold text-neutral-900 dark:text-white tracking-wide">
                                    Arnab Jena
                                </h1>
                            </div>
                            <div className="flex items-center justify-center sm:justify-start gap-4 mt-1">
                                <a href="https://x.com/ArnabJena11" target="_blank" rel="noreferrer" className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors" aria-label="Twitter">
                                    <TwitterXIcon size={18} />
                                </a>
                                <a href="https://linkedin.com/in/arnabjena007" target="_blank" rel="noreferrer" className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors" aria-label="LinkedIn">
                                    <LinkedinIcon size={18} />
                                </a>
                                <a href="https://github.com/arnabjena007" target="_blank" rel="noreferrer" className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors" aria-label="GitHub">
                                    <GithubIcon size={18} />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4 space-y-3 w-full">
                        <h2 className="text-lg font-serif font-semibold text-neutral-900 dark:text-white uppercase tracking-wider">About</h2>
                        <p className="text-neutral-700 dark:text-neutral-300 text-base md:text-base max-w-2xl leading-relaxed">
                            I&apos;m Arnab Jena. I&apos;m currently a student studying Computer Science at Manipal Institute of Technology, Bengaluru. I spend most of my time going down the rabbit hole and teaching myself whatever catches my curiosity. All of which this page attempts to outline.
                        </p>
                    </div>


                </div>
            </header>

            <DiagonalSeparator />

            {/* 2. WORK EXPERIENCE */}
            <section className="space-y-5">
                <div className="relative py-3">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] border-t border-neutral-200 dark:border-neutral-800/50" />
                    <h2 className="text-3xl font-serif italic font-bold text-neutral-900 dark:text-white">Work Experience</h2>
                </div>

                <div className="relative border-l border-neutral-200 dark:border-neutral-800/50 ml-4 md:ml-6 pl-6 md:pl-8 space-y-10 my-8">
                    {workExperience.map((exp) => (
                        <div key={exp.id} className="relative">
                            {/* Timeline Dot */}
                            <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-neutral-200 dark:border-neutral-800 bg-[#FAFAFA] dark:bg-[#0A0A0A] flex items-center justify-center">
                                {exp.date.includes("Present") ? (
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#00E676] shadow-[0_0_8px_#00E676]" />
                                ) : (
                                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-600" />
                                )}
                            </div>

                            {/* Timeline Content */}
                            <div className="flex flex-col gap-1">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 w-full font-sans">
                                    <h3 className="text-base md:text-lg font-bold text-neutral-900 dark:text-white flex items-center gap-1.5 flex-wrap font-instrument">
                                        <span className="text-neutral-900 dark:text-white">{exp.title}</span>
                                        <span className="text-neutral-400 dark:text-neutral-500 font-normal">·</span>
                                        <span className="text-neutral-400 dark:text-neutral-500 font-normal">{exp.company}</span>
                                    </h3>
                                    <span className="text-xs md:text-sm font-mono text-neutral-500 shrink-0">
                                        {exp.date}
                                    </span>
                                </div>

                                <span className="text-xs md:text-sm text-neutral-500 font-medium">
                                    {exp.subtitle}
                                </span>

                                {exp.description && (
                                    <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base leading-relaxed mt-1">
                                        {exp.description}
                                    </p>
                                )}

                                {exp.points && exp.points.length > 0 && (
                                    <ul className="mt-1 space-y-1 text-neutral-600 dark:text-neutral-400 text-sm md:text-base leading-relaxed list-none">
                                        {exp.points.map((point, index) => (
                                            <li key={index} className="flex items-start gap-2">
                                                <span className="text-neutral-400 dark:text-neutral-600 mt-1.5 select-none">•</span>
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {exp.tech && exp.tech.length > 0 && (
                                    <div className="flex flex-wrap items-center gap-3.5 mt-3">
                                        {exp.tech.map((iconPath, index) => (
                                            <img key={index} src={iconPath} alt="tech icon" className="w-5 h-5 object-contain opacity-80 hover:opacity-100 transition-opacity" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <DiagonalSeparator />

            {/* 3. PROJECTS SECTION */}
            <Projects />

            <DiagonalSeparator />

            {/* GITHUB ACTIVITY SECTION */}
            <section className="space-y-4">
                <div className="relative py-3">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] border-t border-neutral-200 dark:border-neutral-800/50" />
                    <h2 className="text-3xl font-serif italic font-bold text-neutral-900 dark:text-white">GitHub Activity</h2>
                </div>
                <React.Suspense fallback={<GitHubContributionsFallback />}>
                    <GitHubContributions />
                </React.Suspense>
            </section>




        </div>
    );
};
