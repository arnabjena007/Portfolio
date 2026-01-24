"use client";
import React from "react";
import { motion } from "motion/react";

interface FloatingPillProps {
    text: string;
    color: string; // Tailwind color class like 'bg-pink-500'
    className?: string; // For positioning
    delay?: number;
}

export const FloatingPill = ({ text, color, className, delay = 0 }: FloatingPillProps) => {
    return (
        <motion.div
            className={`absolute z-0 flex items-center gap-2 rounded-full px-6 py-3 ${color} border ${color.replace('bg-', 'border-')} shadow-lg ${className}`}
            initial={{ y: 0 }}
            animate={{
                y: [-10, 10, -10],
            }}
            transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay
            }}
        >
            {/* Cursor Icon - Custom SVG to match the style */}
            <div className="absolute -bottom-4 -left-3 text-inherit">
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`${color.replace('bg-', 'text-')} brightness-110`}
                >
                    <path
                        d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>

            <span className="text-lg font-bold text-white whitespace-nowrap">{text}</span>
        </motion.div>
    );
};
