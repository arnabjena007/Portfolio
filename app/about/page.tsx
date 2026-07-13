import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const pursuits = [
    {
        title: "Quizzing",
        label: "Mimansa",
        description:
            "Quizzing has been one of the few constants in my life: school competitions, pub quizzes, hosting, writing questions, and chasing that tiny electric moment when a clue finally clicks.",
        href: "/about/quizzing",
    },
    {
        title: "Writing",
        label: "Medium",
        description:
            "I write about distributed systems, philosophy, and tech culture. It helps me clarify my own thinking while sharing the why behind the code with people walking a similar path.",
    },
    {
        title: "Community",
        label: "CodeX",
        description:
            "As the Executive Secretary of CodeX, I have helped build a community of 2000+ students and organize hackathons like HackTheWeb and GameForge.",
    },
    {
        title: "Personality",
        label: "INFP",
        description:
            "My Myers-Briggs Type Indicator is INFP: Introvert, iNtuitive, Feeling, Prospecting. I balance engineering logic with artistic intuition, curiosity, and a desire to build things that matter.",
    },
];

const DiagonalSeparator = () => (
    <div className="relative mb-8 flex h-5 w-full select-none items-center justify-center pointer-events-none">
        <div className="absolute left-1/2 h-full w-[100vw] -translate-x-1/2 border-b border-t border-neutral-200 dark:border-neutral-800/50">
            <div
                className="absolute inset-0 block dark:hidden"
                style={{
                    backgroundImage:
                        "repeating-linear-gradient(45deg, transparent, transparent 6px, rgba(0, 0, 0, 0.03) 6px, rgba(0, 0, 0, 0.03) 7px)",
                }}
            />
            <div
                className="absolute inset-0 hidden dark:block"
                style={{
                    backgroundImage:
                        "repeating-linear-gradient(45deg, transparent, transparent 6px, rgba(255, 255, 255, 0.1) 6px, rgba(255, 255, 255, 0.1) 7px)",
                }}
            />
        </div>
    </div>
);

const About = () => {
    return (
        <div className="mx-auto w-full max-w-3xl border-l border-r border-solid border-neutral-200 px-8 pb-16 font-sans leading-relaxed text-neutral-700 dark:border-white/[0.1] dark:text-neutral-300 sm:px-12">
            <header className="relative -mx-8 overflow-hidden border-b border-neutral-200 px-8 py-12 text-center dark:border-white/[0.05] sm:-mx-12 sm:px-12 sm:text-left">
                <img
                    src="/footer-bg.png"
                    alt=""
                    className="absolute inset-0 z-0 h-full w-full object-cover opacity-90"
                />
                <div className="absolute inset-0 z-0 bg-black/10" />

                <div className="relative z-10 mb-8">
                    <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-white/75">
                        Side Quests
                    </p>
                    <h1 className="mb-4 font-serif text-4xl font-bold tracking-wide text-white drop-shadow-md md:text-5xl">
                        Other Pursuits
                    </h1>
                    <p className="mx-auto max-w-xl text-base leading-relaxed text-white/90 drop-shadow-md sm:mx-0">
                        The parts of my life that sit just outside engineering: quizzing, writing, community work,
                        and personality rabbit holes.
                    </p>
                </div>
            </header>

            <DiagonalSeparator />

            <section id="other-side-quests" className="mt-8 space-y-6">
                <div className="relative flex items-center justify-between py-3">
                    <div className="absolute left-1/2 top-0 w-[100vw] -translate-x-1/2 border-t border-neutral-200 dark:border-neutral-800/50" />
                    <h2 className="font-serif text-3xl font-bold italic text-neutral-900 dark:text-white">
                        All Pursuits
                    </h2>
                    <span className="font-mono text-xs text-neutral-500">
                        {pursuits.length} notes
                    </span>
                </div>

                <div className="flex flex-col gap-6">
                    {pursuits.map((pursuit) => (
                        <article
                            key={pursuit.title}
                            className="rounded-2xl border border-neutral-200 bg-white p-5 transition-all duration-300 hover:border-yellow-500/20 dark:border-neutral-900 dark:bg-[#08080a] dark:hover:border-yellow-500/20"
                        >
                            <div className="flex items-start justify-between gap-4">
                                <h3 className="pr-2 font-serif text-xl font-bold italic text-neutral-900 transition-colors dark:text-white">
                                    {pursuit.title}
                                </h3>
                                <span className="rounded border border-neutral-200 bg-neutral-50 px-2 py-0.5 font-mono text-[10px] text-neutral-500 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400">
                                    {pursuit.label}
                                </span>
                            </div>
                            <p className="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                                {pursuit.description}
                            </p>
                            {pursuit.href && (
                                <Link
                                    href={pursuit.href}
                                    className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-yellow-600 transition-colors hover:text-yellow-700 dark:text-yellow-500 dark:hover:text-yellow-400"
                                >
                                    Read more
                                    <ArrowRight size={14} />
                                </Link>
                            )}
                        </article>
                    ))}
                </div>
            </section>

            <div className="-mx-8 mt-16 sm:-mx-12">
                <Footer />
            </div>
        </div>
    );
};

export default About;
