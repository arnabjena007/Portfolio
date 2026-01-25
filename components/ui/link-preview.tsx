"use client";
import * as React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type LinkPreviewProps = {
    children: React.ReactNode;
    url: string;
    className?: string;
    width?: number;
    height?: number;
    quality?: number;
    isStatic?: boolean;
    imageSrc?: string;
    description?: string;
};

export const LinkPreview = ({
    children,
    url,
    className,
    width = 240, // Increased default width
    height = 160, // Increased default height
    quality = 50,
    isStatic = false,
    imageSrc = "",
    description = "",
}: LinkPreviewProps) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [isMounted, setIsMounted] = React.useState(false);

    React.useEffect(() => {
        setIsMounted(true);
    }, []);

    const springConfig = { stiffness: 100, damping: 15 };
    const x = useMotionValue(0);
    const translateX = useSpring(useTransform(x, [-100, 100], [-50, 50]), springConfig);

    const handleMouseMove = (event: React.MouseEvent<HTMLAnchorElement>) => {
        const targetRect = event.currentTarget.getBoundingClientRect();
        const eventOffsetX = event.clientX - targetRect.left;
        const offsetFromCenter = (eventOffsetX - targetRect.width / 2);
        x.set(offsetFromCenter);
    };

    return (
        <>
            {isMounted ? (
                <div className="hidden">
                    <Image
                        src={imageSrc}
                        width={width}
                        height={height}
                        quality={quality}
                        priority={true}
                        alt="hidden"
                    />
                </div>
            ) : null}

            <Link
                href={url}
                className={cn("text-black dark:text-white relative inline-block", className)}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => {
                    setIsOpen(false);
                    x.set(0);
                }}
                target="_blank"
            >
                {children}
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.6 }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            transition: {
                                type: "spring",
                                stiffness: 260,
                                damping: 20,
                            },
                        }}
                        exit={{ opacity: 0, y: 20, scale: 0.6 }}
                        className="absolute z-50 -top-48 left-1/2 -translate-x-1/2" // Adjusted top to accommodate larger card
                        style={{
                            x: translateX,
                        }}
                    >
                        <div
                            className="flex flex-col p-2 bg-neutral-900 border border-white/10 shadow-xl rounded-xl w-[260px]"
                        >
                            <Image
                                src={isStatic ? imageSrc : "/placeholder.png"}
                                width={width}
                                height={height}
                                quality={quality}
                                className="rounded-lg object-cover w-full h-[140px]"
                                alt="preview image"
                            />
                            {description && (
                                <p className="text-xs text-neutral-300 mt-2 text-center line-clamp-2">
                                    {description}
                                </p>
                            )}
                        </div>
                    </motion.div>
                )}
            </Link>
        </>
    );
};
