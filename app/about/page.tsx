"use client";
import React from "react";
import Image from "next/image";

const About = () => {
    return (
        <div className="relative flex justify-center flex-col overflow-hidden mx-auto sm:px-10 px-5 min-h-screen py-20">
            <div className="max-w-4xl w-full mx-auto space-y-20">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-white/20">
                        {/* Placeholder for profile image - using a generating gradient for now */}
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-yellow-500 to-pink-500"></div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white">About Me</h1>
                        <p className="text-neutral-400 text-sm md:text-base max-w-lg mt-2 leading-relaxed font-serif">
                            Devo / Arnab Jena<br />
                            Full Stack Developer<br />
                            Based in India
                        </p>
                    </div>
                </div>

                {/* Journey Text */}
                <div className="space-y-6 text-neutral-300 text-lg leading-relaxed font-serif">
                    <p>
                        Programming wasn't on my radar until 11th grade, when C++ and OOP concepts clicked, the idea of creating something from nothing was fascinating. College introduced me to web development, but it was Node.js during my first-year break that really hooked me on backend development.
                    </p>
                    <p>
                        From there, I dove into Rust and Go, building everything from a Redis clone to monitoring systems. I started documenting my learnings through blogs and open-source projects. Today, I'm focused on distributed systems, performance optimization, and sharing knowledge through code and writing.
                    </p>
                    <p>
                        I'm always open to new opportunities, collaborations, and feedback. If you're working on something interesting or want to connect, feel free to reach out!
                    </p>
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

                {/* Education (From User Request) */}
                <div className="w-full p-6 md:p-8 rounded-[1.75rem] border border-white/10 bg-[#0f0f11]">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 mb-2">
                        <h3 className="text-xl md:text-2xl font-serif text-white">Manipal Institute of Technology</h3>
                        <span className="text-sm text-neutral-400">Bengaluru, India</span>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-2">
                        <p className="text-neutral-400 text-sm md:text-base">B.Tech. in Computer Science and Engineering (Artificial Intelligence)</p>
                        <span className="text-yellow-400 font-bold">CGPA: 7.84/10.0</span>
                    </div>
                </div>

            </div>
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
