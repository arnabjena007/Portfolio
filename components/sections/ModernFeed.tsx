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
import { motion, AnimatePresence } from "motion/react";
import { workExperience, projects } from "@/data";
import GitHubContributions, { GitHubContributionsFallback } from "@/components/sections/GitHubContributions";
import LocationIcon from "@/components/icons/LocationIcon";
import MailIcon from "@/components/icons/MailIcon";

// Diagonal Stripe Separator (Partition) spanning full viewport width
const DiagonalSeparator = () => (
    <div className="relative w-full h-5 my-4 select-none pointer-events-none flex items-center justify-center">
        <div className="absolute w-[100vw] h-full left-1/2 -translate-x-1/2 border-t border-b border-neutral-200 dark:border-white/[0.03]">
            <div
                className="absolute inset-0 block dark:hidden"
                style={{
                    backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 6px, rgba(0, 0, 0, 0.03) 6px, rgba(0, 0, 0, 0.03) 7px)',
                }}
            />
            <div
                className="absolute inset-0 hidden dark:block"
                style={{
                    backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 6px, rgba(255, 255, 255, 0.03) 6px, rgba(255, 255, 255, 0.03) 7px)',
                }}
            />
        </div>
    </div>
);


export const ModernFeed = () => {
    const [phraseIdx, setPhraseIdx] = React.useState(0);

    const phrases = [
        "Engineer • Developer • Builder",
        "CS Student @ MIT Bengaluru",
        "Building Scalable Platforms",
        "Teaching Myself Anything"
    ];

    React.useEffect(() => {
        const id = setInterval(() => {
            setPhraseIdx((i) => (i + 1) % phrases.length);
        }, 3000);
        return () => clearInterval(id);
    }, []);

    return (
        <div className="w-full max-w-3xl mx-auto px-8 sm:px-12 relative pb-16 text-neutral-700 dark:text-neutral-300 font-sans leading-relaxed border-l border-r border-solid border-neutral-200 dark:border-white/[0.03]">

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
                            {/* Animated rotating subtitle phrases */}
                            <div className="h-5 flex items-center justify-center sm:justify-start overflow-hidden">
                                <AnimatePresence mode="wait">
                                    <motion.p
                                        key={phraseIdx}
                                        initial={{ opacity: 0, y: 7 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -7 }}
                                        transition={{ duration: 0.2 }}
                                        className="text-sm font-mono text-neutral-500 dark:text-neutral-400"
                                    >
                                        {phrases[phraseIdx]}
                                    </motion.p>
                                </AnimatePresence>
                            </div>

                        </div>
                    </div>

                    <div className="mt-4 space-y-3 w-full">
                        <h2 className="text-lg font-serif font-semibold text-neutral-900 dark:text-white uppercase tracking-wider">About</h2>
                        <p className="text-neutral-700 dark:text-neutral-300 text-base md:text-base max-w-2xl leading-relaxed">
                            I&apos;m Arnab Jena. I&apos;m currently a student studying Computer Science at Manipal Institute of Technology, Bengaluru. I spend most of my time going down the rabbit hole and teaching myself whatever catches my curiosity. All of which this page attempts to outline.
                        </p>
                    </div>

                    {/* Metadata columns: Location, Email, and Socials */}
                    <div className="mt-6 pt-6 border-t border-neutral-200 dark:border-neutral-800/60 flex flex-col sm:flex-row sm:items-start justify-between gap-y-4 gap-x-8 w-full text-left font-sans">
                        {/* Location */}
                        <div className="flex flex-col gap-1.5">
                            <span className="text-xs font-serif text-neutral-500 uppercase tracking-wider">Location</span>
                            <div className="flex items-center gap-2 text-neutral-800 dark:text-neutral-200">
                                <LocationIcon size={16} className="text-yellow-500" />
                                <span className="text-sm md:text-base font-medium">Bengaluru, India</span>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex flex-col gap-1.5">
                            <span className="text-xs font-serif text-neutral-500 uppercase tracking-wider">Email</span>
                            <div className="flex items-center gap-2 text-neutral-800 dark:text-neutral-200">
                                <MailIcon size={16} className="text-yellow-500" />
                                <a href="mailto:arnabjena2003@gmail.com" className="text-sm md:text-base font-medium hover:underline hover:text-yellow-500 transition-colors">
                                    arnabjena2003@gmail.com
                                </a>
                            </div>
                        </div>

                        {/* Resume */}
                        <div className="flex flex-col gap-1.5">
                            <span className="text-xs font-serif text-neutral-500 uppercase tracking-wider">Resume</span>
                            <div className="flex items-center gap-2 select-none">
                                <a
                                    href="https://drive.google.com/file/d/1Stp0jleIoRQ-6DkHPkkQESf7x6C9k7KL/view?usp=sharing"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="bg-neutral-200 dark:bg-slate-800 no-underline group cursor-pointer relative shadow-lg dark:shadow-2xl shadow-neutral-200 dark:shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-neutral-900 dark:text-white inline-block"
                                >
                                    <span className="absolute inset-0 overflow-hidden rounded-full">
                                        <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                                    </span>
                                    <div className="relative flex space-x-2 items-center z-10 rounded-full bg-white dark:bg-zinc-950 py-1 px-4 ring-1 ring-black/10 dark:ring-white/10">
                                        <span>Resume</span>
                                        <svg
                                            width="16"
                                            height="16"
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
                            </div>
                        </div>
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
            <section className="space-y-5">
                <div className="relative py-3 flex items-center justify-between">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] border-t border-neutral-200 dark:border-neutral-800/50" />
                    <h2 className="text-3xl font-serif italic font-bold text-neutral-900 dark:text-white">Projects</h2>
                    <Link href="/projects" className="text-xs font-mono text-neutral-500 hover:text-yellow-600 dark:hover:text-yellow-500 transition-colors flex items-center gap-1">
                        View All &rarr;
                    </Link>
                </div>

                <div className="space-y-6">
                    {projects.slice(0, 3).map((project) => (
                        <div
                            key={project.id}
                            className="flex flex-col sm:flex-row gap-6 p-4 rounded-2xl bg-white dark:bg-[#08080a] border border-neutral-200 dark:border-neutral-900 hover:border-yellow-500/20 dark:hover:border-yellow-500/20 transition-all duration-300 group"
                        >
                            {/* Left aspect image */}
                            <div className="relative w-full sm:w-44 aspect-[16/10] sm:aspect-square md:aspect-[16/10] overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shrink-0">
                                <img
                                    src={project.img}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                                />
                            </div>

                            {/* Right text layout */}
                            <div className="flex-1 flex flex-col justify-between gap-3 relative">
                                <div className="space-y-2">
                                    <div className="flex justify-between items-start w-full gap-4">
                                        <h3 className="text-lg font-bold text-neutral-900 dark:text-white group-hover:text-yellow-600 dark:group-hover:text-yellow-500 transition-colors font-instrument pr-2">
                                            {project.title}
                                        </h3>
                                        <div className="flex items-center gap-2">
                                            {project.link && (
                                                <a
                                                    href={project.link}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="inline-flex items-center gap-1 px-2.5 py-1 text-[10px] font-mono rounded bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-yellow-500/40 text-neutral-500 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-white transition-colors"
                                                >
                                                    <ExternalLink size={10} />
                                                    <span>Live</span>
                                                </a>
                                            )}
                                            <a
                                                href="https://github.com/arnabjena007"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="inline-flex items-center gap-1 px-2.5 py-1 text-[10px] font-mono rounded bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-yellow-500/40 text-neutral-500 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-white transition-colors"
                                            >
                                                <Github size={10} />
                                                <span>Github</span>
                                            </a>
                                        </div>
                                    </div>
                                    <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2">
                                        {project.des}
                                    </p>
                                </div>

                                <div className="flex flex-wrap items-center gap-2.5 mt-auto">
                                    {project.iconLists?.map((icon, idx) => (
                                        <img key={idx} src={icon} alt="tech icon" className="w-5 h-5 object-contain opacity-80 hover:opacity-100 transition-opacity" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center pt-4">
                    <Link href="/projects">
                        <button className="flex items-center gap-2 px-6 py-2.5 rounded-full border border-yellow-500/20 bg-neutral-50 dark:bg-neutral-950 text-xs font-mono text-yellow-600 dark:text-yellow-500 hover:border-yellow-600 hover:bg-neutral-100 dark:hover:bg-yellow-500/5 transition-all shadow-md">
                            Show All Projects &rarr;
                        </button>
                    </Link>
                </div>
            </section>

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
