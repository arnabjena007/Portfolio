import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/layout/Footer";

const links = {
    kbc: "https://en.wikipedia.org/wiki/Kaun_Banega_Crorepati",
    mimansa: "https://www.instagram.com/mimansa.mitblr/",
    kqa: "https://www.kqaquizzes.org/",
    rvce: "https://rvce.edu.in/cultural_teams/quizcorp/",
    qotb: "https://www.tapmi.edu.in/event/quiz-on-the-beach-qotb/",
    cuiz: "https://www.instagram.com/christuniversityquizassociation/",
    fourEdge: "https://www.instagram.com/4edgequizzing/?hl=en",
    quora: "https://www.quora.com/How-has-been-your-quizzing-experience",
    lionBeer: "https://en.wikipedia.org/wiki/Mohan_Meakin#Lion_beer",
    reginaldDyer: "https://en.wikipedia.org/wiki/Reginald_Dyer",
    jallianwalaBagh: "https://en.wikipedia.org/wiki/Jallianwala_Bagh_massacre",
    oldMonk: "https://en.wikipedia.org/wiki/Old_Monk",
};

const sections = [
    {
        title: "How it started",
        content: (
            <>
                <p>
                    Quizzing has been one of the few constants in my life. Out of all the things I keep returning to,
                    this one has stayed with me since school: competitions, pub quizzes, hosting, writing questions, and
                    chasing that tiny electric moment when a clue finally clicks.
                </p>
                <p>
                    I remember <em>maa</em> asking me to finish my homework early so I could watch{" "}
                    <a href={links.kbc}>KBC</a> on Sony TV at 9:00 PM. It single-handedly changed prime-time viewing for
                    many Indian families, shifting attention from daily soaps to high-stakes appointment television built
                    around knowledge. It made curiosity feel glamorous, democratic, and rewarding across generations.
                </p>
                <p>
                    One reason I came to Karnataka for my undergraduate studies was Bangalore&apos;s well-established
                    quizzing circuit: the{" "}
                    <a href={links.kqa}>Karnataka Quiz Association</a>,{" "}
                    <a href={links.rvce}>RVCE QuizCorp / Under the Peepal Tree</a>,{" "}
                    <a href={links.qotb}>TAPMI&apos;s Quiz on the Beach</a>,{" "}
                    <a href={links.cuiz}>Christ University&apos;s CUIZ</a>, and so many others. At MIT Bengaluru, I have
                    led <a href={links.mimansa}>Mimansa</a>, the quizzing society, and helped the team participate
                    actively across Bangalore&apos;s circuit.
                </p>
            </>
        ),
    },
    {
        title: "My two cents on quizzing",
        content: (
            <>
                <p>
                    In school, you study to remember. You read something, retain it, reproduce it in an exam, and move
                    on. The goal is the grade. Quizzing does not work like that.
                </p>
                <p>
                    When you get a question wrong at a quiz, you do not just note the answer and forget it. You feel it.
                    There is a mild sting of <em>&quot;I should have known that,&quot;</em> and that sting is surprisingly
                    effective. You almost never forget the answer after that.
                </p>
                <p>
                    More importantly, quizzing teaches you to connect things. A good question is not just trivia. It
                    gives you a trail of clues: a date, a place, a person, a pattern. You work backwards to the answer.
                    You are not just recalling facts; you are reasoning through them.
                </p>
                <p>
                    Over the years, I have realized that people are most present in the gap between not knowing and
                    knowing, when they are not sure if they are right but think they might be. I see my job as building
                    the bridge between <em>&quot;I don&apos;t know&quot;</em> and <em>&quot;Oh, I see.&quot;</em>
                </p>
                <p>
                    Quizzing taught me that knowledge has texture. Some facts are sticky, some are slippery. It taught
                    me that engagement is fragile; you have seconds to earn attention and even fewer to keep it. Live
                    quizzes taught me that the best moments are shared. Good quizzing is not just about facts. It is
                    about making them come alive.
                </p>
                <p>
                    P.S. I had written an older, rougher version of these thoughts long ago on{" "}
                    <a href={links.quora}>Quora</a>. It is a small time capsule of how I used to think about quizzes
                    before this became a larger part of my life.
                </p>
            </>
        ),
    },
];

const galleryImages = [
    { src: "/quizzing-qotb-bangalore-cluster.png", alt: "QOTB Bangalore cluster finals" },
    { src: "/quizzing-trophy.jpg", alt: "Trophy moment" },
    { src: "/quizzing-brain-chain.png", alt: "Brain Chain quiz with classmates" },
    { src: "/quizzing-reflekta.png", alt: "Reflekta 2025 quiz certificate moment" },
    { src: "/general-quiz.jpg", alt: "General quiz finalists" },
    { src: "/science-quiz.jpg", alt: "Science quiz stage moment" },
    { src: "/quizzing-panel.jpg", alt: "Quiz panel on stage" },
    { src: "/quizzing-certificate.jpg", alt: "Certificate presentation" },
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

const QuizzingPage = () => {
    return (
        <div className="mx-auto min-h-screen w-full max-w-4xl border-l border-r border-solid border-neutral-200 px-8 pb-16 font-sans leading-relaxed text-neutral-700 dark:border-white/[0.1] dark:text-neutral-300 sm:px-12">
            <header className="relative -mx-8 overflow-hidden border-b border-neutral-200 px-8 py-12 text-center dark:border-white/[0.05] sm:-mx-12 sm:px-12 sm:text-left">
                <img
                    src="/footer-bg.png"
                    alt=""
                    className="absolute inset-0 z-0 h-full w-full object-cover opacity-90"
                />
                <div className="absolute inset-0 z-0 bg-black/10" />

                <Link
                    href="/about#other-side-quests"
                    className="group relative z-10 mb-10 inline-flex items-center gap-2 text-sm font-medium text-white/75 transition-colors duration-200 hover:text-white"
                >
                    <ArrowLeft
                        size={15}
                        className="transition-transform duration-200 group-hover:-translate-x-1"
                    />
                    Other pursuits
                </Link>

                <div className="relative z-10">
                    <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-white/75">
                        Side Quest
                    </p>
                    <h1 className="mb-4 font-serif text-4xl font-bold italic tracking-wide text-white drop-shadow-md md:text-5xl">
                        Quizzing
                    </h1>
                    <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/90 drop-shadow-md sm:mx-0">
                        On KBC, Bangalore&apos;s quiz circuit, Mimansa, and why a good question can make facts come alive.
                    </p>
                </div>
            </header>

            <DiagonalSeparator />

            <main className="mt-8">
                <article className="space-y-12">
                    {sections.map((section) => (
                        <section key={section.title}>
                            <h2 className="mb-4 border-l-2 border-yellow-500 pl-4 font-serif text-3xl font-bold text-neutral-900 dark:text-white">
                                {section.title}
                            </h2>
                            <div className="space-y-6 text-neutral-700 dark:text-neutral-300 [&_a]:border-b [&_a]:border-yellow-500/40 [&_a]:text-neutral-900 [&_a]:transition-colors hover:[&_a]:border-yellow-500 hover:[&_a]:text-yellow-700 dark:[&_a]:text-white dark:hover:[&_a]:text-yellow-400">
                                {section.content}
                            </div>
                        </section>
                    ))}

                    <section>
                        <h2 className="mb-6 border-l-2 border-yellow-500 pl-4 font-serif text-3xl font-bold text-neutral-900 dark:text-white">
                            Moments from the circuit
                        </h2>
                        <div className="columns-1 gap-4 space-y-4 md:columns-2">
                            {galleryImages.map((image) => (
                                <img
                                    key={image.src}
                                    src={image.src}
                                    alt={image.alt}
                                    className="mb-4 w-full break-inside-avoid rounded-xl object-contain"
                                />
                            ))}
                        </div>
                    </section>

                    <section className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5 dark:border-neutral-800 dark:bg-neutral-900/40">
                        <p className="mb-3 font-mono text-xs uppercase tracking-[0.16em] text-yellow-600 dark:text-yellow-500">
                            A recent question from <a className="underline underline-offset-4" href={links.fourEdge}>4Edge Sunday Quiz</a>
                        </p>
                        <img
                            src="/quizzing-lion-beer-question.png"
                            alt="Quiz question about Lion Beer and Edward Abraham Dyer"
                            className="mb-5 w-full rounded-xl border border-neutral-200 bg-white dark:border-neutral-800"
                        />
                        <p className="text-neutral-700 dark:text-neutral-300">
                            In 1855, British entrepreneur Edward Abraham Dyer established the Kasauli Brewery in
                            Himachal Pradesh to supply fresh liquor to British troops. That brewery gave birth to{" "}
                            <a className="underline underline-offset-4" href={links.lionBeer}>Lion Beer</a>, widely
                            regarded as Asia&apos;s first commercial beer brand. The same family name later became infamous
                            through his youngest son, Brigadier-General{" "}
                            <a className="underline underline-offset-4" href={links.reginaldDyer}>Reginald Dyer</a>, who
                            ordered the <a className="underline underline-offset-4" href={links.jallianwalaBagh}>Jallianwala Bagh massacre</a>{" "}
                            in 1919. After Indian independence, the business was bought by the Mohan family in 1949 and
                            became Mohan Meakin Limited. Instead of shutting the colonial infrastructure down, the new
                            management repurposed it into a homegrown legacy that gave India cultural staples like{" "}
                            <a className="underline underline-offset-4" href={links.oldMonk}>Old Monk Rum</a> and
                            Doctor&apos;s Brandy, one of the country&apos;s first domestic spirits to earn a V.S.O.P.
                            classification.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-6 border-l-2 border-yellow-500 pl-4 font-serif text-3xl font-bold text-neutral-900 dark:text-white">
                            The people who kept it alive
                        </h2>
                        <img
                            src="/quizzing-classmates.jpg"
                            alt="Arnab with classmates Rishith, Harsh, and Akshat"
                            className="w-full rounded-2xl border border-neutral-200 object-cover dark:border-neutral-800"
                        />
                        <p className="mt-4 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                            Special mention to my classmates Rishith, Harsh, and Akshat, who made quizzing feel alive because the everyday energy comes from friends
                            who keep showing up.
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
