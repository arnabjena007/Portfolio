"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

import { Tooltip } from "@/components/ui/tooltip-card";

const About = () => {
    return (
        <div className="relative z-20 flex justify-center flex-col mx-auto sm:px-10 px-5 min-h-screen py-20">
            <div className="max-w-4xl w-full mx-auto space-y-20">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-white/20">
                        {/* Placeholder for profile image - using a generating gradient for now */}
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-yellow-500 to-pink-500"></div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white">About Me</h1>
                        <div className="text-neutral-400 text-sm md:text-base max-w-lg mt-2 leading-relaxed font-serif">
                            <Tooltip content={<DevoCard />}>
                                <span className="cursor-pointer hover:text-white transition-colors">Devo / Arnab Jena</span>
                            </Tooltip><br />
                            Full Stack Developer<br />
                            Based in India
                        </div>
                    </div>
                </div>

                {/* Journey Text */}
                <div className="space-y-6 text-neutral-300 text-lg leading-relaxed font-serif">
                    <div>
                        Programming wasn't on my radar until 11th grade, when
                        <Tooltip content="Object-Oriented Programming & System Basics">
                            <span className="cursor-pointer text-white font-bold ml-1">C++ and OOP</span>
                        </Tooltip> concepts clicked, the idea of creating something from nothing was fascinating. College introduced me to web development, but it was
                        <Tooltip content="JavaScript runtime for building scalable network applications">
                            <span className="cursor-pointer text-white font-bold mx-1">Node.js</span>
                        </Tooltip>
                        during my first-year break that really hooked me on backend development.
                    </div>
                    <div>
                        From there, I dove into
                        <Tooltip content="Safe, concurrent, and practical systems language">
                            <span className="cursor-pointer text-white font-bold mx-1">Rust</span>
                        </Tooltip>
                        and
                        <Tooltip content="Simple, reliable, and efficient software">
                            <span className="cursor-pointer text-white font-bold mx-1">Go</span>
                        </Tooltip>
                        , building everything from a
                        <Tooltip content="In-memory data structure store">
                            <span className="cursor-pointer text-white font-bold mx-1">Redis duplicate</span>
                        </Tooltip>
                        to monitoring systems. I started documenting my learnings through blogs and open-source projects. Today, I'm focused on
                        <Tooltip content="Computing systems that are distributed across multiple nodes">
                            <span className="cursor-pointer text-white font-bold mx-1">distributed systems</span>
                        </Tooltip>
                        , performance optimization, and sharing knowledge through code and writing.
                    </div>
                    <div>
                        I'm always open to new opportunities, collaborations, and feedback. If you're working on something interesting or want to connect, feel free to reach out!
                    </div>
                </div>

                {/* Stack & Style */}
                <div className="space-y-8">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">Stack & Style</h2>
                    <p className="text-neutral-400 text-base">
                        I believe in choosing the right tool for the job, but these are the technologies I'm currently most excited about and experienced with:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <StackCard title="Backend & APIs" items={["Go, Rust, TypeScript", "Express, Hono, GraphQL", "gRPC, REST, WebSockets", "tRPC, Node.js"]} icon="⚙️" />
                        <StackCard title="Data & Storage" items={["PostgreSQL, Redis, MongoDB", "Prisma, Drizzle, ORM", "sqlC, sqlX"]} icon="💾" />
                        <StackCard title="Infrastructure" items={["Docker, Kafka, NATS", "RabbitMQ, Pulsar", "Prometheus, Grafana"]} icon="☁️" />
                        <StackCard title="Frontend" items={["React, Next.js", "TypeScript, JavaScript"]} icon="🖥️" />
                    </div>
                    <p className="text-neutral-500 text-sm italic text-right">...and much more</p>
                </div>

                {/* Philosophy */}
                <div className="space-y-8">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">Philosophy</h2>
                    <div className="space-y-4 text-neutral-300 text-lg leading-relaxed font-serif">
                        <p>
                            I approach software development as a craft that requires both technical precision and creative problem-solving. While I deeply appreciate elegant code and efficient algorithms, I never lose sight of the humans who will ultimately use what I build. I am addicted to improving and refactoring my code. I believe in writing clean, maintainable code that is easy to read and understand. I also love breaking stuff, make mistakes, fail and then pick up the pieces and learn from them.
                        </p>
                        <p>I believe in:</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <PhilosophyItem title="Deep Understanding" description="Knowing not just how to use a technology, but how it works underneath." icon="⚛️" />
                        <PhilosophyItem title="Pragmatic Solutions" description="Choosing clarity over cleverness, simplicity over complexity." icon="🎯" />
                        <PhilosophyItem title="Continuous Learning" description="Staying curious and humble in a field that never stops evolving." icon="💡" />
                        <PhilosophyItem title="Ethical Development" description="Building technology that respects user privacy and well-being." icon="❤️" />
                    </div>
                </div>

                {/* Other Pursuits */}
                <CollapsibleSection title="Other Pursuits">
                    <div className="grid grid-cols-1 gap-8 pt-4">
                        <div className="bg-[#0f0f11] border border-white/10 p-6 rounded-2xl space-y-4 hover:border-white/20 transition-colors">
                            <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                <span className="text-2xl">🧠</span> Quizzing
                            </h3>
                            <p className="text-neutral-400 leading-relaxed font-serif">
                                As the <span className="text-white font-bold">Head of Mimansa</span> (Quizzing Society), I live for the "aha!" moments. I've led my team to victories at <span className="text-white">IISC, Christ University, and IIIT Bangalore</span>. To me, quizzing isn't just trivia—it's the art of lateral thinking and connecting obscure dots under pressure.
                            </p>
                        </div>

                        <div className="bg-[#0f0f11] border border-white/10 p-6 rounded-2xl space-y-4 hover:border-white/20 transition-colors">
                            <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                <span className="text-2xl">✍️</span> Writing
                            </h3>
                            <p className="text-neutral-400 leading-relaxed font-serif">
                                I pen down my thoughts on <span className="text-white font-bold">Medium</span>, exploring the intersection of distributed systems, philosophy, and tech culture. I believe in open-sourcing knowledge and documenting the "why" behind the code. It allows me to clarify my own thinking while helping others navigate similar paths.
                            </p>
                        </div>

                        <div className="bg-[#0f0f11] border border-white/10 p-6 rounded-2xl space-y-4 hover:border-white/20 transition-colors">
                            <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                <span className="text-2xl">🤝</span> Community
                            </h3>
                            <p className="text-neutral-400 leading-relaxed font-serif">
                                Leadership is about enabling others. As the <span className="text-white font-bold">Executive Secretary of CodeX</span>, I've helped build a community of 2000+ students, organizing hackathons like <i>HackTheWeb</i> and <i>GameForge</i>. My goal is to create spaces where students can move from "consumers" of tech to "creators" of it.
                            </p>
                        </div>

                        <div className="bg-[#0f0f11] border border-white/10 p-6 rounded-2xl space-y-4 hover:border-white/20 transition-colors">
                            <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                <span className="text-2xl">🧩</span> Personality
                            </h3>
                            <p className="text-neutral-400 leading-relaxed font-serif">
                                My Myers-Briggs Type Indicator (MBTI) is <span className="text-white font-bold">INFP</span> [Introvert | iNtuitive | Feeling | Prospecting]. I balance the logic of engineering with the intuition of art. I'm driven by values, curiosity, and a desire to build things that matter.
                            </p>
                        </div>
                    </div>
                </CollapsibleSection>

                {/* Education (From User Request) */}
                <div className="w-full p-6 md:p-8 rounded-[1.75rem] border border-white/10 bg-[#0f0f11]">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 mb-2">
                        <h3 className="text-xl md:text-2xl font-serif text-white">Manipal Institute of Technology</h3>
                        <span className="text-sm text-neutral-400">Bengaluru, India</span>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-2">
                        <div className="text-neutral-400 text-sm md:text-base">B.Tech. in Computer Science and Engineering (Artificial Intelligence)</div>
                        <span className="text-yellow-400 font-bold">CGPA: 7.84/10.0</span>
                    </div>
                </div>

            </div>
        </div>
    );
};

const CollapsibleSection = ({ title, children }: { title: string, children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-white/10 pb-4">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between w-full text-left group"
            >
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-white group-hover:text-yellow-400 transition-colors">
                    {title}
                </h2>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <ChevronDown className="w-8 h-8 text-neutral-400 group-hover:text-yellow-400 transition-colors" />
                </motion.div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const StackCard = ({ title, items, icon }: { title: string, items: string[], icon: string }) => {
    return (
        <div className="p-6 rounded-2xl border border-white/10 bg-[#161618] hover:border-yellow-500/30 transition-colors">
            <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">{icon}</span>
                <h3 className="text-lg font-bold text-white">{title}</h3>
            </div>
            <ul className="space-y-2">
                {items.map((item, idx) => (
                    <li key={idx} className="text-neutral-400 text-sm flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-yellow-500"></span>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}

const PhilosophyItem = ({ title, description, icon }: { title: string, description: string, icon: string }) => {
    return (
        <div className="flex gap-4 items-start">
            <div className="p-2 rounded-lg bg-white/5 text-xl">{icon}</div>
            <div>
                <h3 className="text-white font-bold mb-1">{title}</h3>
                <p className="text-neutral-400 text-sm">{description}</p>
            </div>
        </div>
    )
}

export default About;

const DevoCard = () => {
    return (
        <div className="flex flex-col">
            <p className="text-lg font-bold text-white">Arnab Jena (Devo)</p>
            <p className="mt-1 text-xs text-neutral-400">
                Backend Engineer & Creative Coder.
            </p>
        </div>
    );
};
