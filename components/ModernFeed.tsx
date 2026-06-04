"use client";
import React from "react";
import Link from "next/link";
import {
    Github,
    CheckCircle2,
    ExternalLink,
    ArrowRight
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { workExperience, projects } from "@/data";
import GitHubContributions, { GitHubContributionsFallback } from "@/components/GitHubContributions";

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
                                <style dangerouslySetInnerHTML={{ __html: `
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
                                <h1 className="text-3xl md:text-4xl font-instrument font-bold text-neutral-900 dark:text-white tracking-wide">
                                    Arnab Jena
                                </h1>
                                <span title="Verified Engineer" className="inline-flex items-center">
                                    <CheckCircle2 className="w-5 h-5 text-sky-500 fill-sky-500/10" />
                                </span>
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

                            {/* Inline social link buttons styled as premium rounded-box widgets */}
                            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 mt-3 select-none">
                                <a 
                                    href="https://linkedin.com/in/arnabjena007" 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    className="flex items-center justify-center w-9 h-9 rounded-[10px] border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#070709] hover:bg-neutral-50 dark:hover:bg-neutral-900/40 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300 shadow-sm group"
                                    title="LinkedIn"
                                >
                                    <svg className="w-4 h-4 transition-all duration-300 group-hover:scale-110 fill-neutral-500 group-hover:fill-[#0077b5]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                                    </svg>
                                </a>
                                <a 
                                    href="https://github.com/arnabjena007" 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    className="flex items-center justify-center w-9 h-9 rounded-[10px] border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#070709] hover:bg-neutral-50 dark:hover:bg-neutral-900/40 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300 shadow-sm group"
                                    title="GitHub"
                                >
                                    <svg className="w-4 h-4 transition-all duration-300 group-hover:scale-110 fill-neutral-500 dark:fill-neutral-400 group-hover:fill-black dark:group-hover:fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                    </svg>
                                </a>
                                <a 
                                    href="https://x.com/ArnabJena11" 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    className="flex items-center justify-center w-9 h-9 rounded-[10px] border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#070709] hover:bg-neutral-50 dark:hover:bg-neutral-900/40 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300 shadow-sm group"
                                    title="Twitter / X"
                                >
                                    <svg className="w-4 h-4 transition-all duration-300 group-hover:scale-110 fill-neutral-500 dark:fill-neutral-400 group-hover:fill-black dark:group-hover:fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4 space-y-3 w-full">
                        <h2 className="text-lg font-instrument font-semibold text-neutral-900 dark:text-white uppercase tracking-wider">About</h2>
                        <p className="text-neutral-700 dark:text-neutral-300 text-base md:text-lg max-w-2xl leading-relaxed">
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
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[100vw] border-b border-neutral-200 dark:border-neutral-800/50" />
                    <h2 className="text-2xl font-instrument font-bold text-neutral-900 dark:text-white">Work Experience</h2>
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
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[100vw] border-b border-neutral-200 dark:border-neutral-800/50" />
                    <h2 className="text-2xl font-instrument font-bold text-neutral-900 dark:text-white">Projects</h2>
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
                                        <h3 className="text-lg font-bold text-neutral-900 dark:text-white group-hover:text-yellow-600 dark:group-hover:text-yellow-500 transition-colors font-instrument">
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
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[100vw] border-b border-neutral-200 dark:border-neutral-800/50" />
                    <h2 className="text-2xl font-instrument font-bold text-neutral-900 dark:text-white">GitHub Activity</h2>
                </div>
                <React.Suspense fallback={<GitHubContributionsFallback />}>
                    <GitHubContributions />
                </React.Suspense>
            </section>



            <DiagonalSeparator />

            {/* 8. LET'S WORK TOGETHER (Crosshair card styled in gold/yellow) */}
            <section className="relative py-4">
                <div className="relative p-8 md:p-12 rounded-[2rem] bg-white dark:bg-[#050507] border border-neutral-200 dark:border-neutral-900 text-center space-y-6 overflow-hidden max-w-2xl mx-auto shadow-2xl">

                    {/* Coordinate crosshairs (+) in the four corners in custom gold-yellow */}
                    <span className="absolute top-4 left-4 text-xs font-mono text-yellow-500/40 select-none">+</span>
                    <span className="absolute top-4 right-4 text-xs font-mono text-yellow-500/40 select-none">+</span>
                    <span className="absolute bottom-4 left-4 text-xs font-mono text-yellow-500/40 select-none">+</span>
                    <span className="absolute bottom-4 right-4 text-xs font-mono text-yellow-500/40 select-none">+</span>

                    {/* Glowing background ambient glow in gold */}
                    <div className="absolute top-[-30%] left-[30%] w-[40%] h-[60%] bg-yellow-500/5 blur-[100px] rounded-full pointer-events-none" />

                    <div className="relative z-10 space-y-2">
                        <div className="relative py-3 w-full">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] border-t border-neutral-200 dark:border-neutral-800/40" />
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[100vw] border-b border-neutral-200 dark:border-neutral-800/40" />
                            <h2 className="text-2xl font-instrument font-bold text-neutral-900 dark:text-white">
                                Let&apos;s work together
                            </h2>
                        </div>
                        <p className="text-sm font-mono text-neutral-500 dark:text-neutral-400">
                            Have a project in mind? Let&apos;s create something amazing.
                        </p>
                    </div>

                    <div className="relative z-10 flex flex-wrap items-center justify-center gap-4 pt-4">
                        <a
                            href="mailto:arnabjena2003@gmail.com"
                            className="px-6 py-2.5 rounded-lg border border-amber-600 dark:border-yellow-500 text-amber-600 dark:text-yellow-500 hover:bg-amber-600/10 dark:hover:bg-yellow-500/10 text-xs font-mono font-bold transition-all duration-300"
                        >
                            Email Me
                        </a>
                        <Link
                            href="/contact"
                            className="px-6 py-2.5 rounded-lg bg-yellow-500 hover:bg-yellow-400 text-black text-xs font-mono font-bold transition-all duration-300 inline-flex items-center gap-1.5"
                        >
                            <span>Book a Call</span>
                            <ArrowRight size={12} />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};
