"use client";
import React from "react";
import Experience from "@/components/sections/Experience";
import Volunteering from "@/components/sections/Volunteering";

const ExperiencePage = () => {
    return (
        <main className="relative text-white flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
            <div className="max-w-7xl w-full">
                <div className="pt-20">
                    <Experience />
                    <Volunteering />
                </div>
            </div>
        </main>
    );
};

export default ExperiencePage;
