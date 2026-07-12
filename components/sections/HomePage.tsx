"use client";
import React from "react";
import Link from "next/link";
import {
    Github,
    ExternalLink,
    ArrowRight,
    MapPin,
    Mail,
    Eye,
    ArrowUpRight,
    Send,
    FileText
} from "lucide-react";
import { motion } from "motion/react";
import { workExperience, featuredProjects } from "@/data";
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
        <div className="absolute w-[100vw] h-full left-1/2 -translate-x-1/2 border-t border-b border-neutral-200 dark:border-neutral-800/50">
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
    const [visitorCount, setVisitorCount] = React.useState<number | null>(null);
    const [activeProfileIndex, setActiveProfileIndex] = React.useState(0);
    const profilePhotos = [
        { src: "/profile.jpg", alt: "Arnab Jena" },
        { src: "/profile-mountain.png", alt: "Arnab Jena in the mountains" },
        { src: "/profile-smile.png", alt: "Arnab Jena smiling" },
        { src: "/profile-gandhi.png", alt: "Arnab Jena near a Gandhi statue" },
        { src: "/profile-trophy.png", alt: "Arnab Jena with a trophy" },
        { src: "/profile-stage.png", alt: "Arnab Jena on stage" },
        { src: "/profile-palace.png", alt: "Arnab Jena at Bangalore Palace" },
    ];
    const stackedProfilePhotos = profilePhotos.map((_, index) => profilePhotos[(activeProfileIndex + index) % profilePhotos.length]);

    React.useEffect(() => {
        const counted = sessionStorage.getItem("visitor-counted");
        if (!counted) {
            fetch("/api/visitors", { method: "POST" })
                .then(res => res.json())
                .then(data => {
                    setVisitorCount(data.count);
                    sessionStorage.setItem("visitor-counted", "true");
                })
                .catch(() => { });
        } else {
            fetch("/api/visitors")
                .then(res => res.json())
                .then(data => setVisitorCount(data.count))
                .catch(() => { });
        }
    }, []);

    return (
        <div className="w-full relative">
            <div className="w-full max-w-3xl mx-auto px-8 sm:px-12 relative pb-16 text-neutral-700 dark:text-neutral-300 font-sans leading-relaxed border-l border-r border-solid border-neutral-200 dark:border-white/[0.1]">

                <div className="relative overflow-hidden -mx-8 sm:-mx-12 px-8 sm:px-12">
                    {/* Dotted grid pattern background */}
                    <div className="absolute inset-0 dotted-background" />



                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative z-10 flex flex-col items-center justify-center py-10 md:py-16 px-4"
                    >
                        <p className="text-lg md:text-2xl font-serif italic text-neutral-800 dark:text-neutral-100 text-center leading-relaxed">
                            <span className="relative inline-flex px-2 py-1">
                                <span className="absolute -inset-x-1 bottom-1 h-4 -rotate-3 skew-x-[-10deg] rounded-[60%_35%_55%_40%] bg-amber-300/55 blur-[0.4px] dark:bg-amber-400/25" />
                                <span className="absolute inset-x-1 bottom-0.5 h-1 rotate-1 rounded-full bg-amber-600/35 dark:bg-amber-200/25" />
                                <span className="relative">Open for full-time</span>
                            </span>
                        </p>
                    </motion.div>
                </div>

                {/* Separator line */}
                <div className="relative w-full h-px">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] border-t border-neutral-200 dark:border-neutral-800/50" />
                </div>

                {/* Profile Card */}
                <header className="relative pt-6 pb-6 w-full">
                    <div className="relative z-10 flex flex-col items-center sm:items-start text-center sm:text-left gap-2">
                        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 w-full">
                            {/* Profile image */}
                            <div className="relative shrink-0 select-none">
                                <button
                                    type="button"
                                    onClick={() => setActiveProfileIndex((currentIndex) => (currentIndex + 1) % profilePhotos.length)}
                                    aria-label="Shuffle profile photo"
                                    className="group relative block h-40 w-40 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500/70 focus-visible:ring-offset-4 focus-visible:ring-offset-[#FAFAFA] dark:focus-visible:ring-offset-[#0A0A0A]"
                                >
                                    <motion.div
                                        key={`${stackedProfilePhotos[2].src}-back`}
                                        initial={{ opacity: 0, x: 10, y: 4, rotate: 12 }}
                                        animate={{ opacity: 1, x: 0, y: 0, rotate: 9 }}
                                        transition={{ duration: 0.28, ease: "easeOut" }}
                                        className="absolute left-8 top-3 h-36 w-32 overflow-hidden rounded-[2rem] bg-neutral-900 shadow-lg"
                                    >
                                        <img
                                            src={stackedProfilePhotos[2].src}
                                            alt=""
                                            className="h-full w-full object-cover"
                                        />
                                    </motion.div>
                                    <motion.div
                                        key={`${stackedProfilePhotos[1].src}-middle`}
                                        initial={{ opacity: 0, x: 6, y: 2, rotate: 8 }}
                                        animate={{ opacity: 1, x: 0, y: 0, rotate: 5 }}
                                        transition={{ duration: 0.3, ease: "easeOut" }}
                                        className="absolute left-5 top-1 h-36 w-32 overflow-hidden rounded-[2rem] bg-neutral-900 shadow-xl"
                                    >
                                        <img
                                            src={stackedProfilePhotos[1].src}
                                            alt=""
                                            className="h-full w-full object-cover"
                                        />
                                    </motion.div>
                                    {/* Outer frame */}
                                    <motion.div
                                        key={`${stackedProfilePhotos[0].src}-front`}
                                        initial={{ opacity: 0, y: 8, rotate: 4, scale: 0.97 }}
                                        animate={{ opacity: 1, y: 0, rotate: -2, scale: 1 }}
                                        transition={{ duration: 0.34, ease: "easeOut" }}
                                        className="relative h-36 w-32 overflow-hidden rounded-[2rem] bg-neutral-900 shadow-2xl"
                                    >
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
                                        src={stackedProfilePhotos[0].src}
                                        alt={stackedProfilePhotos[0].alt}
                                        className="w-full h-full object-cover"
                                    />
                                    {/* Profile Sweep Shimmer (profile-sweep) */}
                                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                                        <div className="absolute top-0 bottom-0 w-8 bg-gradient-to-r from-transparent via-white/35 to-transparent animate-profile-sweep" />
                                    </div>
                                    </motion.div>
                                </button>


                            </div>

                            {/* Name + Stats */}
                            <div className="flex flex-col gap-1 flex-1 min-w-0 sm:pt-3">

                                {/* Name */}
                                <h1 className="text-3.5xl md:text-4xl font-serif font-bold text-neutral-900 dark:text-white tracking-wide">
                                    Arnab Jena
                                </h1>

                                {/* Location + Visitor Counter */}
                                <div className="flex items-center justify-between w-full mt-0.5">
                                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                                        Chandigarh, India
                                    </p>
                                    {visitorCount !== null && (
                                        <div className="flex items-center gap-1.5 text-neutral-500 dark:text-neutral-400">
                                            <Eye size={14} />
                                            <span className="text-sm font-medium">{visitorCount.toLocaleString()}</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                    </div>
                </header>

                <DiagonalSeparator />

                {/* ABOUT SECTION */}
                <section className="space-y-4">
                    <div className="relative py-3">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] border-t border-neutral-200 dark:border-neutral-800/50" />
                        <h2 className="text-3xl font-serif italic font-bold text-neutral-900 dark:text-white">About</h2>
                    </div>
                    <p className="text-neutral-700 dark:text-neutral-300 text-base md:text-base max-w-2xl leading-relaxed">
                        I&apos;m Arnab Jena. I&apos;m currently a student studying Computer Science at Manipal Institute of Technology, Bengaluru. I spend most of my time going down the rabbit hole and teaching myself whatever catches my curiosity. All of which this page attempts to outline.
                    </p>
                </section>

                <DiagonalSeparator />

                {/* CONNECT SECTION */}
                <section className="space-y-4">
                    <div className="relative py-3">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] border-t border-neutral-200 dark:border-neutral-800/50" />
                        <h2 className="text-3xl font-serif italic font-bold text-neutral-900 dark:text-white">Connect</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 -mx-8 sm:-mx-12 border-t border-neutral-200 dark:border-white/[0.08]">
                        {/* 1. Social Links */}
                        <a 
                            href="https://github.com/arnabjena007" 
                            target="_blank" 
                            rel="noreferrer"
                            aria-label="Open Arnab Jena's GitHub profile"
                            className="flex items-center justify-between py-6 px-8 sm:px-12 hover:bg-neutral-500/[0.03] transition-colors group cursor-pointer border-b sm:border-r border-neutral-200 dark:border-white/[0.08]"
                        >
                            <div className="flex items-center gap-4">
                                <div className="flex items-center justify-center w-10 h-10 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100/50 dark:bg-neutral-900/50 text-neutral-700 dark:text-neutral-300 transition-colors group-hover:bg-neutral-200/50 dark:group-hover:bg-neutral-800/50">
                                    <FileText size={18} />
                                </div>
                                <span className="font-semibold text-neutral-800 dark:text-neutral-200 group-hover:text-neutral-950 dark:group-hover:text-white transition-colors text-sm sm:text-base">GitHub Profile</span>
                            </div>
                            <ArrowUpRight size={16} className="text-neutral-400 group-hover:text-neutral-600 dark:group-hover:text-neutral-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                        </a>

                        {/* 2. Contact */}
                        <a 
                            href="mailto:arnabjena11@gmail.com" 
                            aria-label="Send Arnab Jena an email"
                            className="flex items-center justify-between py-6 px-8 sm:px-12 hover:bg-neutral-500/[0.03] transition-colors group cursor-pointer border-b sm:border-r border-neutral-200 dark:border-white/[0.08]"
                        >
                            <div className="flex items-center gap-4">
                                <div className="flex items-center justify-center w-10 h-10 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100/50 dark:bg-neutral-900/50 text-neutral-700 dark:text-neutral-300 transition-colors group-hover:bg-neutral-200/50 dark:group-hover:bg-neutral-800/50">
                                    <Send size={18} />
                                </div>
                                <span className="font-semibold text-neutral-800 dark:text-neutral-200 group-hover:text-neutral-950 dark:group-hover:text-white transition-colors text-sm sm:text-base">Contact</span>
                            </div>
                            <ArrowUpRight size={16} className="text-neutral-400 group-hover:text-neutral-600 dark:group-hover:text-neutral-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                        </a>

                        {/* 3. GitHub */}
                        <a 
                            href="https://github.com/arnabjena007" 
                            target="_blank" 
                            rel="noreferrer"
                            aria-label="Open Arnab Jena's GitHub repository profile"
                            className="flex items-center justify-between py-6 px-8 sm:px-12 hover:bg-neutral-500/[0.03] transition-colors group cursor-pointer border-b border-neutral-200 dark:border-white/[0.08]"
                        >
                            <div className="flex items-center gap-4">
                                <div className="flex items-center justify-center w-10 h-10 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100/50 dark:bg-neutral-900/50 text-neutral-700 dark:text-neutral-300 transition-colors group-hover:bg-neutral-200/50 dark:group-hover:bg-neutral-800/50">
                                    <GithubIcon size={18} />
                                </div>
                                <span className="font-semibold text-neutral-800 dark:text-neutral-200 group-hover:text-neutral-950 dark:group-hover:text-white transition-colors text-sm sm:text-base">GitHub</span>
                            </div>
                            <ArrowUpRight size={16} className="text-neutral-400 group-hover:text-neutral-600 dark:group-hover:text-neutral-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                        </a>

                        {/* 4. LinkedIn */}
                        <a 
                            href="https://www.linkedin.com/in/arnabjena/" 
                            target="_blank" 
                            rel="noreferrer"
                            aria-label="Open Arnab Jena's LinkedIn profile"
                            className="flex items-center justify-between py-6 px-8 sm:px-12 hover:bg-neutral-500/[0.03] transition-colors group cursor-pointer border-b sm:border-b-0 sm:border-r border-neutral-200 dark:border-white/[0.08]"
                        >
                            <div className="flex items-center gap-4">
                                <div className="flex items-center justify-center w-10 h-10 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100/50 dark:bg-neutral-900/50 text-neutral-700 dark:text-neutral-300 transition-colors group-hover:bg-neutral-200/50 dark:group-hover:bg-neutral-800/50">
                                    <LinkedinIcon size={18} />
                                </div>
                                <span className="font-semibold text-neutral-800 dark:text-neutral-200 group-hover:text-neutral-950 dark:group-hover:text-white transition-colors text-sm sm:text-base">LinkedIn</span>
                            </div>
                            <ArrowUpRight size={16} className="text-neutral-400 group-hover:text-neutral-600 dark:group-hover:text-neutral-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                        </a>

                        {/* 5. X (Twitter) */}
                        <a 
                            href="https://x.com/ArnabJena11" 
                            target="_blank" 
                            rel="noreferrer"
                            aria-label="Open Arnab Jena's X profile"
                            className="flex items-center justify-between py-6 px-8 sm:px-12 hover:bg-neutral-500/[0.03] transition-colors group cursor-pointer border-b sm:border-b-0 sm:border-r border-neutral-200 dark:border-white/[0.08]"
                        >
                            <div className="flex items-center gap-4">
                                <div className="flex items-center justify-center w-10 h-10 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100/50 dark:bg-neutral-900/50 text-neutral-700 dark:text-neutral-300 transition-colors group-hover:bg-neutral-200/50 dark:group-hover:bg-neutral-800/50">
                                    <TwitterXIcon size={18} />
                                </div>
                                <span className="font-semibold text-neutral-800 dark:text-neutral-200 group-hover:text-neutral-950 dark:group-hover:text-white transition-colors text-sm sm:text-base">X (Twitter)</span>
                            </div>
                            <ArrowUpRight size={16} className="text-neutral-400 group-hover:text-neutral-600 dark:group-hover:text-neutral-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                        </a>

                        {/* 6. Email */}
                        <a 
                            href="mailto:arnabjena11@gmail.com" 
                            aria-label="Send Arnab Jena an email"
                            className="flex items-center justify-between py-6 px-8 sm:px-12 hover:bg-neutral-500/[0.03] transition-colors group cursor-pointer border-neutral-200 dark:border-white/[0.08] sm:border-0"
                        >
                            <div className="flex items-center gap-4">
                                <div className="flex items-center justify-center w-10 h-10 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100/50 dark:bg-neutral-900/50 text-neutral-700 dark:text-neutral-300 transition-colors group-hover:bg-neutral-200/50 dark:group-hover:bg-neutral-800/50">
                                    <MailIcon size={18} />
                                </div>
                                <span className="font-semibold text-neutral-800 dark:text-neutral-200 group-hover:text-neutral-950 dark:group-hover:text-white transition-colors text-sm sm:text-base">Email</span>
                            </div>
                            <ArrowUpRight size={16} className="text-neutral-400 group-hover:text-neutral-600 dark:group-hover:text-neutral-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                        </a>
                    </div>
                </section>

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
                <section className="space-y-4">
                    <div className="relative py-3">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] border-t border-neutral-200 dark:border-neutral-800/50" />
                        <h2 className="text-3xl font-serif italic font-bold text-neutral-900 dark:text-white">Projects</h2>
                    </div>
                    <Projects hideHeader={true} items={featuredProjects} />
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

        </div>
    );
};
