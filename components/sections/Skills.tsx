"use client";
import Marquee from "react-fast-marquee";
import { BACKEND_STACKS, FRONTEND_STACKS, stacksProps } from "@/constants/stack";

const Skills = () => {
    return (
        <section aria-label="skills" className="py-20 w-full space-y-8 relative z-20">
            <div className="container mx-auto px-4">
                <h2 className="heading mb-12 text-4xl md:text-5xl font-bold text-center">
                    Tools that <span className="text-purple">I use</span>
                </h2>

                <div className="w-full space-y-6">
                    <Marquee autoFill pauseOnHover speed={40} gradient={false}>
                        <SkillsList stacks={FRONTEND_STACKS} />
                    </Marquee>

                    <Marquee autoFill pauseOnHover direction="right" speed={40} gradient={false}>
                        <SkillsList stacks={BACKEND_STACKS} />
                    </Marquee>
                </div>
            </div>
        </section>
    );
};

export default Skills;

const SkillsList = ({ stacks }: { stacks: stacksProps }) => {
    return (
        <ul className="flex items-center gap-4 pr-4" role="list">
            {Object.keys(stacks).map((stack, index) => {
                const Icon = stacks[stack].Icon;
                const className = stacks[stack].className;
                return (
                    <li
                        role="listitem"
                        key={index}
                        className="flex w-max items-center gap-2 rounded-xl border border-white/[0.1] bg-black-100 px-5 py-3 text-[15px] text-white shadow-sm hover:border-white/[0.2] transition-colors"
                    >
                        {<Icon className={className} aria-label={stack} />}
                        <span className="whitespace-nowrap font-medium">{stack}</span>
                    </li>
                );
            })}
        </ul>
    );
};
