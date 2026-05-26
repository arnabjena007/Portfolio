"use client";
import React from "react";
import Link from "next/link";
import {
    Github,
    Linkedin,
    Twitter,
    Mail,
    CheckCircle2,
    ExternalLink,
    ArrowRight,
    FileText,
    ChevronDown,
    ChevronUp,
    ChevronsUpDown
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { workExperience, projects } from "@/data";
import GitHubContributions from "@/components/GitHubContributions";

// Diagonal Stripe Separator (Partition) with requested repeating linear gradient enclosed by vertical dotted margins
const DiagonalSeparator = () => (
    <div className="relative w-auto h-10 my-16 overflow-hidden select-none pointer-events-none -mx-8 sm:-mx-12 border-t border-b border-neutral-800">
        <div
            className="absolute inset-0"
            style={{
                backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 10px, currentcolor 10px, currentcolor 12px)',
                opacity: 0.25
            }}
        />
    </div>
);


export const ModernFeed = () => {
    const [expandedId, setExpandedId] = React.useState<number | null>(1);




    return (
        <div className="w-full max-w-4xl mx-auto px-8 sm:px-12 relative pb-32 text-neutral-300 font-sans leading-relaxed border-l border-r border-dotted border-neutral-800">

            {/* 1. HERO SECTION */}
            <header className="relative pt-24 pb-12 w-full">

                {/* Kanji Backdrop Watermark "改善" (Kaizen) matching Vedant's header background */}
                <div className="absolute top-8 left-1/2 -translate-x-1/2 text-neutral-900/10 font-bold select-none text-[8rem] md:text-[13rem] tracking-widest font-serif pointer-events-none">
                    改善
                </div>

                <div className="relative z-10 flex flex-col items-center sm:items-start text-center sm:text-left gap-6">
                    {/* circular avatar frame with green status indicator */}
                    <div className="flex flex-col sm:flex-row items-center gap-6 w-full">
                        <div className="relative w-28 h-28 rounded-[2rem] overflow-hidden border border-neutral-800 bg-neutral-900 shadow-2xl p-1 shrink-0">
                            <img
                                src="/profile.jpg"
                                alt="Arnab Jena"
                                className="w-full h-full object-cover rounded-[1.75rem]"
                            />
                        </div>
                        <div className="flex flex-col gap-2 shrink-0">
                            <div className="flex items-center justify-center sm:justify-start gap-2">
                                <h1 className="text-3xl md:text-4xl font-serif font-bold text-white tracking-wide">
                                    Arnab Jena
                                </h1>
                                <span title="Verified Engineer" className="inline-flex items-center">
                                    <CheckCircle2 className="w-5 h-5 text-sky-500 fill-sky-500/10" />
                                </span>
                            </div>
                            <p className="text-sm font-mono text-neutral-400">
                                Engineer &bull; Developer &bull; Builder
                            </p>
                            {/* Inline social links */}
                            <div className="flex items-center justify-center sm:justify-start gap-4 mt-1 text-neutral-400">
                                <a href="mailto:arnabjena2003@gmail.com" className="hover:text-yellow-500 transition-colors p-1" title="Email">
                                    <Mail size={16} />
                                </a>
                                <a href="https://github.com/arnabjena007" target="_blank" rel="noreferrer" className="hover:text-yellow-500 transition-colors p-1" title="GitHub">
                                    <Github size={16} />
                                </a>
                                <a href="https://linkedin.com/in/arnabjena007" target="_blank" rel="noreferrer" className="hover:text-yellow-500 transition-colors p-1" title="LinkedIn">
                                    <Linkedin size={16} />
                                </a>
                                <a href="https://x.com/ArnabJena11" target="_blank" rel="noreferrer" className="hover:text-yellow-500 transition-colors p-1" title="Twitter">
                                    <Twitter size={16} />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 space-y-4 w-full">
                        <h2 className="text-lg font-serif font-semibold text-white uppercase tracking-wider">About</h2>
                        <p className="text-neutral-300 text-base md:text-lg max-w-2xl leading-relaxed font-serif">
                            I&apos;m Arnab Jena. I&apos;m currently a student studying Computer Science at Manipal Institute of Technology, Bengaluru. I spend most of my time going down the rabbit hole and teaching myself whatever catches my curiosity. All of which this page attempts to outline. If you&apos;re here for professional reasons, you might prefer to go straight to my resume:
                        </p>
                        <div className="pt-2">
                            <a
                                href="https://drive.google.com/file/d/1Stp0jleIoRQ-6DkHPkkQESf7x6C9k7KL/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-[#08080a] hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-all duration-300 text-sm font-medium text-black dark:text-white shadow-sm group"
                            >
                                <FileText size={16} className="text-neutral-500 dark:text-neutral-400 group-hover:text-yellow-600 dark:group-hover:text-yellow-500 transition-colors" />
                                <span className="font-serif">Resume</span>
                            </a>
                        </div>
                    </div>
                </div>
            </header>

            <DiagonalSeparator />

            {/* 2. WORK EXPERIENCE */}
            <section className="space-y-8">
                <h2 className="text-2xl font-serif font-bold text-white tracking-wide">Work Experience</h2>
                <div className="space-y-2 border-t border-neutral-900 pt-4">
                    {workExperience.map((exp) => {
                        const isExpanded = expandedId === exp.id;
                        return (
                            <div key={exp.id} className="border-b border-neutral-900 pb-3">
                                <button
                                    onClick={() => setExpandedId(isExpanded ? null : exp.id)}
                                    className="flex w-full items-center justify-between py-3.5 text-left group transition-colors duration-300"
                                >
                                    <div className="flex items-center gap-4">
                                        {/* Circular company indicator or image logo */}
                                        <div className={`w-10 h-10 rounded-full border border-neutral-800 ${exp.logo ? "bg-white p-1.5" : "bg-[#0c0c0e]"} group-hover:border-neutral-700 transition-colors flex items-center justify-center overflow-hidden shrink-0 select-none shadow-md`}>
                                            {exp.logo ? (
                                                <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain" />
                                            ) : (
                                                <span className="font-bold text-sm text-neutral-400 group-hover:text-white uppercase">
                                                    {exp.company.charAt(0)}
                                                </span>
                                            )}
                                        </div>
                                        <h3 className="text-base md:text-lg font-bold text-white flex items-center gap-1.5 flex-wrap">
                                            <span className="font-instrument text-white group-hover:text-yellow-500 transition-colors">{exp.company}</span>
                                            <span className="text-neutral-400 font-mono text-sm font-normal">/ {exp.title}</span>
                                        </h3>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="text-xs md:text-sm font-mono text-neutral-500">
                                            {exp.date}
                                        </span>
                                        <div className="text-neutral-500 group-hover:text-white transition-colors">
                                            <ChevronsUpDown size={16} />
                                        </div>
                                    </div>
                                </button>
                                <AnimatePresence initial={false}>
                                    {isExpanded && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <ul className="pl-14 pr-4 pb-3 space-y-2 text-neutral-300 text-sm md:text-base font-sans leading-relaxed">
                                                {exp.points.map((point, index) => (
                                                    <li key={index} className="list-disc list-outside ml-4">
                                                        {point}
                                                    </li>
                                                ))}
                                            </ul>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            </section>

            <DiagonalSeparator />

            {/* 3. PROJECTS SECTION */}
            <section className="space-y-8">
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-serif font-bold text-white tracking-wide">Projects</h2>
                    <Link href="/projects" className="text-xs font-mono text-yellow-500 hover:underline flex items-center gap-1">
                        View All &rarr;
                    </Link>
                </div>

                <div className="space-y-6">
                    {projects.slice(0, 3).map((project) => (
                        <div
                            key={project.id}
                            className="flex flex-col sm:flex-row gap-6 p-4 rounded-2xl bg-[#08080a] border border-neutral-900 hover:border-yellow-500/20 transition-all duration-300 group"
                        >
                            {/* Left aspect image */}
                            <div className="relative w-full sm:w-44 aspect-[16/10] sm:aspect-square md:aspect-[16/10] overflow-hidden rounded-xl bg-neutral-900 border border-neutral-800 shrink-0">
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
                                        <h3 className="text-lg font-bold text-white group-hover:text-yellow-500 transition-colors font-serif">
                                            {project.title}
                                        </h3>
                                        <div className="flex items-center gap-2">
                                            {project.link && (
                                                <a
                                                    href={project.link}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="inline-flex items-center gap-1 px-2.5 py-1 text-[10px] font-mono rounded bg-neutral-900 border border-neutral-800 hover:border-yellow-500/40 text-neutral-400 hover:text-white transition-colors"
                                                >
                                                    <ExternalLink size={10} />
                                                    <span>Live</span>
                                                </a>
                                            )}
                                            <a
                                                href="https://github.com/arnabjena007"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="inline-flex items-center gap-1 px-2.5 py-1 text-[10px] font-mono rounded bg-neutral-900 border border-neutral-800 hover:border-yellow-500/40 text-neutral-400 hover:text-white transition-colors"
                                            >
                                                <Github size={10} />
                                                <span>Github</span>
                                            </a>
                                        </div>
                                    </div>
                                    <p className="text-sm text-neutral-400 line-clamp-2">
                                        {project.des}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-1.5 mt-auto">
                                    {project.techStack?.slice(0, 4).map((tech, idx) => (
                                        <span key={idx} className="px-2 py-0.5 text-[10px] font-mono rounded-md bg-neutral-900 border border-neutral-800 text-neutral-400">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center pt-4">
                    <Link href="/projects">
                        <button className="flex items-center gap-2 px-6 py-2.5 rounded-full border border-yellow-500/20 bg-neutral-950 text-xs font-mono text-yellow-500 hover:border-yellow-500 hover:bg-yellow-500/5 transition-all shadow-md">
                            Show All Projects &rarr;
                        </button>
                    </Link>
                </div>
            </section>

            <DiagonalSeparator />

            {/* GITHUB ACTIVITY SECTION */}
            <section className="space-y-8">
                <h2 className="text-2xl font-serif font-bold text-white tracking-wide">GitHub Activity</h2>
                <div className="p-6 rounded-[2rem] bg-[#08080a] border border-neutral-900/60 shadow-inner flex items-center justify-center overflow-hidden">
                    <GitHubContributions />
                </div>
            </section>



            <DiagonalSeparator />

            {/* 8. LET'S WORK TOGETHER (Crosshair card styled in gold/yellow) */}
            <section className="relative py-8">
                <div className="relative p-8 md:p-12 rounded-[2rem] bg-[#050507] border border-neutral-900 text-center space-y-6 overflow-hidden max-w-2xl mx-auto shadow-2xl">

                    {/* Coordinate crosshairs (+) in the four corners in custom gold-yellow */}
                    <span className="absolute top-4 left-4 text-xs font-mono text-yellow-500/40 select-none">+</span>
                    <span className="absolute top-4 right-4 text-xs font-mono text-yellow-500/40 select-none">+</span>
                    <span className="absolute bottom-4 left-4 text-xs font-mono text-yellow-500/40 select-none">+</span>
                    <span className="absolute bottom-4 right-4 text-xs font-mono text-yellow-500/40 select-none">+</span>

                    {/* Glowing background ambient glow in gold */}
                    <div className="absolute top-[-30%] left-[30%] w-[40%] h-[60%] bg-yellow-500/5 blur-[100px] rounded-full pointer-events-none" />

                    <div className="relative z-10 space-y-2">
                        <h2 className="text-3xl font-serif font-bold text-white tracking-wide">
                            Let's work together
                        </h2>
                        <p className="text-sm font-mono text-neutral-400">
                            Have a project in mind? Let's create something amazing.
                        </p>
                    </div>

                    <div className="relative z-10 flex flex-wrap items-center justify-center gap-4 pt-4">
                        <a
                            href="mailto:arnabjena2003@gmail.com"
                            className="px-6 py-2.5 rounded-lg border border-yellow-500 text-yellow-500 hover:bg-yellow-500/10 text-xs font-mono font-bold transition-all duration-300"
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
