import React from "react";
import { volunteering } from "@/data";

const Volunteering = () => {
    return (
        <div className="py-20" id="volunteering">
            <h1 className="heading text-4xl md:text-5xl font-bold text-center font-instrument">
                My
                <span className="text-yellow-500"> volunteering work</span>
            </h1>

            <div className="w-full mt-12 flex flex-col gap-8">
                {volunteering.map((card) => (
                    <div
                        key={card.id}
                        className="flex-1 text-white border border-white/20"
                        style={{
                            background: "#0f0f11",
                            borderRadius: "1.75rem",
                        }}
                    >
                        <div className="flex flex-col p-6 md:p-8 gap-4">
                            <div className="flex flex-col gap-1">
                                <div className="flex justify-between items-start w-full">
                                    <h1 className="text-2xl md:text-3xl font-bold font-instrument">
                                        {card.title}
                                    </h1>
                                    <span className="text-base font-medium text-white-100 whitespace-nowrap">
                                        {card.date}
                                    </span>
                                </div>
                                <h2 className="text-xl font-semibold text-yellow-500 font-instrument">
                                    {card.company}
                                </h2>
                            </div>

                            <ul className="list-disc list-outside ml-5 space-y-2">
                                {card.points.map((point, i) => (
                                    <li key={i} className="text-white-100 text-base leading-relaxed">
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Volunteering;
