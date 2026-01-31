"use client";
import React from "react";
import { socialMedia } from "@/data";
import { Github, Twitter, Linkedin } from "lucide-react";

import { motion } from "motion/react";

export const LeftSidebar = () => {
    return (
        <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-6"
        >
            {socialMedia.map((profile) => {
                let IconComponent;
                // Map based on ID as a safe fallback since img paths are broken
                if (profile.id === 1) IconComponent = Github;
                else if (profile.id === 2) IconComponent = Twitter;
                else if (profile.id === 3) IconComponent = Linkedin;
                else IconComponent = Github; // Default

                return (
                    <a
                        key={profile.id}
                        href={profile.link}
                        target="_blank"
                        rel="noreferrer"
                        className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 hover:bg-yellow-500/20 hover:border-yellow-500 transition-all duration-300 group"
                    >
                        <IconComponent className="text-white group-hover:text-yellow-500 transition-colors" size={20} />
                    </a>
                );
            })}
            <div className="h-24 w-[1px] bg-gradient-to-b from-transparent via-yellow-500 to-transparent mx-auto mt-2 opacity-50" />
        </motion.div>
    );
};
