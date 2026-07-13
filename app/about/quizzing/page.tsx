import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";

const sections = [
    {
        title: "How it started",
        paragraphs: [
            "Quizzing has been one of the few constants in my life. Out of all the things I keep returning to, this one has stayed with me since school: competitions, pub quizzes, hosting, writing questions, and chasing that tiny electric moment when a clue finally clicks.",
            "I remember maa asking me to finish my homework early so I could watch KBC on Sony TV at 9:00 PM. KBC single handedly changed prime time viewing for many Indian families, shifting attention from daily soaps to high-stakes appointment television built around knowledge. It made curiosity feel glamorous, democratic, and rewarding across generations.",
            "One reason I came to Karnataka for my undergraduate studies was Bangalore's well-established quizzing circuit like RVCE Under the Peepal Tree, TAPMI's Quiz on the Beach, Christ University's CUIZ, and so many others. At MIT Bengaluru, I have led Mimansa, the quizzing society, and helped the team participate actively across Bangalore's circuit.",
        ],
    },
    {
        title: "My two cents on quizzing",
        paragraphs: [
            "In school, you study to remember. You read something, retain it, reproduce it in an exam, and move on. The goal is the grade. Quizzing does not work like that.",
            "When you get a question wrong at a quiz, you do not just note the answer and forget it. You feel it. There is a mild sting of \"I should have known that,\" and that sting is surprisingly effective. You almost never forget the answer after that.",
            "More importantly, quizzing teaches you to connect things. A good question is not just trivia. It gives you a trail of clues: a date, a place, a person, a pattern. You work backwards to the answer. You are not just recalling facts; you are reasoning through them.",
            "Over the years, I have realized that people are most present in the gap between not knowing and knowing, when they are not sure if they are right but think they might be. I see my job as building the bridge between \"I don't know\" and \"Oh, I see.\" A good quiz question makes the answer feel just out of reach, close enough to chase and far enough to make the chase worthwhile.",
            "Quizzing taught me that knowledge has texture. Some facts are sticky, some are slippery. Apps taught me that engagement is fragile; you have seconds to earn attention and even fewer to keep it. Live quizzes taught me that the best moments are shared. Good quizzing is not just about facts. It is about making them come alive.",
        ],
    },
];

const quizzingMoments = [
    {
        src: "/quizzing-qotb-bangalore-cluster.png",
        alt: "QOTB Bangalore cluster quiz finalists",
    },
    {
        src: "/quizzing-brain-chain.png",
        alt: "Brain Chain college quiz participants",
    },
    {
        src: "/quizzing-reflekta.png",
        alt: "Reflekta media fest quiz certificate ceremony",
    },
    {
        src: "/general-quiz.jpg",
        alt: "General quiz stage at an in-house college quiz",
    },
    {
        src: "/science-quiz.jpg",
        alt: "National Science Day quiz stage",
    },
    {
        src: "/quizzing-panel.jpg",
        alt: "Quiz panel on stage",
    },
    {
        src: "/quizzing-trophy.jpg",
        alt: "Posing with a large quiz trophy",
    },
    {
        src: "/quizzing-certificate.jpg",
        alt: "Receiving a quiz certificate",
    },
];

const QuizzingPage = () => {
    return (
        <div className="mx-auto min-h-screen w-full max-w-3xl border-l border-r border-solid border-neutral-200 px-8 pb-24 pt-8 font-sans leading-relaxed text-neutral-700 dark:border-white/[0.1] dark:text-neutral-300 sm:px-12">
            <div className="mb-10 border-b border-neutral-200 pb-8 dark:border-neutral-800/50">
                <Link
                    href="/about#other-side-quests"
                    className="group inline-flex items-center gap-2 text-sm font-medium text-neutral-500 transition-colors duration-200 hover:text-yellow-600 dark:text-neutral-400 dark:hover:text-yellow-500"
                >
                    <ArrowLeft
                        size={15}
                        className="transition-transform duration-200 group-hover:-translate-x-1"
                    />
                    Other pursuits
                </Link>
            </div>

            <main>
                <header className="mb-12 border-b border-neutral-200 pb-8 dark:border-neutral-800/50">
                    <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-neutral-900 dark:text-white sm:text-5xl">
                        Quizzing
                    </h1>
                    <p className="mb-6 max-w-3xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
                        On KBC, Bangalore&apos;s quiz circuit, Mimansa, and why a good question can make facts come alive.
                    </p>
                    <div className="flex items-center gap-2 text-sm font-medium text-neutral-500">
                        <Clock size={13} className="text-yellow-600 dark:text-yellow-500" />
                        4 min read
                    </div>
                </header>

                <article className="space-y-12">
                    {sections.map((section) => (
                        <section key={section.title}>
                            <h2 className="mb-4 border-l-2 border-yellow-500 pl-4 font-serif text-3xl font-bold text-neutral-900 dark:text-white">
                                {section.title}
                            </h2>
                            <div className="space-y-6 text-neutral-700 dark:text-neutral-300">
                                {section.paragraphs.map((paragraph) => (
                                    <p key={paragraph}>{paragraph}</p>
                                ))}
                            </div>
                        </section>
                    ))}

                    <section>
                        <h2 className="mb-4 border-l-2 border-yellow-500 pl-4 font-serif text-3xl font-bold text-neutral-900 dark:text-white">
                            Moments from the circuit
                        </h2>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            {quizzingMoments.map((moment) => (
                                <div
                                    key={moment.src}
                                    className="overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900/40"
                                >
                                    <img
                                        src={moment.src}
                                        alt={moment.alt}
                                        className="aspect-[4/3] w-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5 dark:border-neutral-800 dark:bg-neutral-900/40">
                        <p className="mb-3 font-mono text-xs uppercase tracking-[0.16em] text-yellow-600 dark:text-yellow-500">
                            A recent question from 4Edge Sunday Quiz
                        </p>
                        <img
                            src="/quizzing-lion-beer-question.png"
                            alt="Quiz question about Lion Beer and Edward Abraham Dyer"
                            className="mb-5 w-full rounded-xl border border-neutral-200 bg-white dark:border-neutral-800"
                        />
                        <p className="text-neutral-700 dark:text-neutral-300">
                            In 1855, British entrepreneur Edward Abraham Dyer established the Kasauli Brewery in
                            Himachal Pradesh to supply fresh liquor to British troops. That brewery gave birth to Lion
                            Beer, widely regarded as Asia&apos;s first commercial beer brand. The same family name later
                            became infamous through his youngest son, Brigadier-General Reginald Dyer, who ordered the
                            Jallianwala Bagh massacre in 1919. After Indian independence, the business was bought by the
                            Mohan family in 1949 and became Mohan Meakin Limited. Instead of shutting the colonial
                            infrastructure down, the new management repurposed it into a homegrown legacy that gave
                            India cultural staples like Old Monk Rum and Doctor&apos;s Brandy, one of the country&apos;s first
                            domestic spirits to earn a V.S.O.P. classification.
                        </p>
                    </section>
                </article>
            </main>

            <div className="-mx-8 mt-16 sm:-mx-12">
                <Footer />
            </div>
        </div>
    );
};

export default QuizzingPage;
