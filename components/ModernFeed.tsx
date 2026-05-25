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
    MessageSquare,
    BookOpen
} from "lucide-react";
import { workExperience, projects, socialMedia } from "@/data";
import { FRONTEND_STACKS, BACKEND_STACKS } from "@/constants/stack";
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
    // Latest writings mock dataset matching Vedant's blogs style
    const blogPosts = [
        {
            title: "Horizontal Scaling in Databases: Part 1 - Read Replicas",
            date: "2025-02-28",
            excerpt: "As applications grow, databases often become the bottleneck. Learn how read replicas help distribute load and ensure high availability.",
            link: "https://medium.com/@arnabjena2003/the-indian-dream-93f4317306c7"
        },
        {
            title: "How to convert any Medium blog to Markdown in seconds",
            date: "2025-01-04",
            excerpt: "Convert your Medium articles into clean, editable Markdown format quickly with zero copy-pasting required.",
            link: "https://medium.com/@arnabjena2003/when-empathy-meets-ecstasy-a-new-blueprint-for-impact-c28a6bfbb4d3"
        }
    ];

    // Open Source PR list matching Vedant's Open Source contributions
    const openSourcePRs = [
        {
            repo: "dodopayments/dodopayments-go",
            title: "feat: Add webhook support and robust retry queue signature verification",
            status: "Merged",
            date: "28 Apr 2025",
            stars: 235
        },
        {
            repo: "vercel/next.js",
            title: "chore: remove cancelled checks from vm_test workflow configuration",
            status: "Merged",
            date: "14 Apr 2025",
            stars: 12200
        },
        {
            repo: "dialect-labs/dialect-node",
            title: "fix: Add version compatibility check between Satellite and GC services",
            status: "Open",
            date: "10 Mar 2025",
            stars: 85
        }
    ];

    // Consolidated list of skills from both stack groupings
    const allSkills = [
        ...Object.keys(FRONTEND_STACKS).filter(s => s !== "React" && s !== "Medical Imaging" && s !== "Deep Learning"),
        ...Object.keys(BACKEND_STACKS).filter(s => s !== "Unity3D")
    ];

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
                                MITB &bull; Engineer &bull; Developer &bull; Builder
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
                                <a href="https://twitter.com/arnabjena007" target="_blank" rel="noreferrer" className="hover:text-yellow-500 transition-colors p-1" title="Twitter">
                                    <Twitter size={16} />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 space-y-4">
                        <h2 className="text-lg font-serif font-semibold text-white uppercase tracking-wider">About</h2>
                        <p className="text-neutral-300 text-base md:text-lg max-w-2xl leading-relaxed">
                            I love starting from a blank slate and turning it into a finished product. From frontend and backend to deployment. I focus on building software that's practical, stable, and reliable.
                        </p>
                    </div>
                </div>
            </header>

            <DiagonalSeparator />

            {/* 2. WORK EXPERIENCE */}
            <section className="space-y-8">
                <h2 className="text-2xl font-serif font-bold text-white tracking-wide">Work Experience</h2>
                <div className="space-y-8">
                    {workExperience.map((exp) => (
                        <div key={exp.id} className="group relative border-l border-neutral-800 pl-6 space-y-3">
                            {/* Active bullet glow */}
                            <span className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full border border-yellow-500/40 bg-neutral-950 group-hover:bg-yellow-500 transition-all duration-300" />
                            
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                                <h3 className="text-lg font-bold text-white flex flex-wrap items-center gap-1.5">
                                    <span className="text-yellow-500">{exp.company}</span>
                                    <span className="text-neutral-500 font-mono text-sm shrink-0 font-normal">&bull; {exp.title}</span>
                                </h3>
                                <span className="text-xs font-mono text-neutral-500 shrink-0">
                                    {exp.date}
                                </span>
                            </div>
                            
                            <p className="text-sm text-neutral-400 font-serif leading-relaxed italic">
                                {exp.desc}
                            </p>

                            <ul className="space-y-1.5">
                                {exp.points.slice(0, 3).map((point, index) => (
                                    <li key={index} className="text-sm text-neutral-300 list-disc list-outside ml-4">
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
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

            {/* 7. SKILLS SECTION */}
            <section className="space-y-8">
                <h2 className="text-2xl font-serif font-bold text-white tracking-wide">Skills</h2>
                <div className="flex flex-wrap gap-2.5">
                    {allSkills.map((skill, index) => {
                        const stack = FRONTEND_STACKS[skill] || BACKEND_STACKS[skill] || { Icon: null, className: "" };
                        const Icon = stack.Icon;
                        return (
                            <div 
                                key={index}
                                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#08080a] border border-neutral-900 hover:border-yellow-500/30 hover:bg-yellow-500/5 transition-all duration-300 text-xs font-mono text-white select-none cursor-default group"
                            >
                                {Icon && <Icon className={`w-3.5 h-3.5 ${stack.className} opacity-80 group-hover:scale-105 transition-transform`} />}
                                <span>{skill}</span>
                            </div>
                        );
                    })}
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
