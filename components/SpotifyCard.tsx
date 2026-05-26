"use client";

import React, { useEffect, useState } from "react";
import { IconBrandSpotify } from "@tabler/icons-react";
import { ExternalLink } from "lucide-react";

interface SpotifyData {
    isPlaying: boolean;
    title?: string;
    artist?: string;
    album?: string;
    albumImageUrl?: string;
    songUrl?: string;
    progressMs?: number;
    durationMs?: number;
}

export const SpotifyCard = () => {
    const [data, setData] = useState<SpotifyData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;
        let isMounted = true;

        const fetchData = async () => {
            if (!isMounted || document.hidden) return;

            try {
                const res = await fetch("/api/spotify");
                if (!res.ok) {
                    // Start with basic mock data if API fails (e.g. 404 or 500)
                    // This allows the UI to show *something* while we fix creds
                    if (res.status === 404 || res.status === 500) {
                        console.warn("Spotify API not ready, using fallback");
                    }
                    // throw new Error(`Status: ${res.status}`);
                }
                const json = await res.json().catch(() => null);

                if (isMounted && json) {
                    setData(json);
                }
            } catch (error) {
                console.error("Error fetching spotify data", error);
            } finally {
                if (isMounted) {
                    setLoading(false);
                    // Schedule next fetch
                    timeoutId = setTimeout(fetchData, 15000);
                }
            }
        };

        fetchData();

        const handleVisibilityChange = () => {
            if (!document.hidden) {
                clearTimeout(timeoutId);
                fetchData();
            }
        };

        document.addEventListener("visibilitychange", handleVisibilityChange);

        return () => {
            isMounted = false;
            clearTimeout(timeoutId);
            document.removeEventListener("visibilitychange", handleVisibilityChange);
        };
    }, []);



    const progressPercentage = data?.progressMs && data?.durationMs
        ? (data.progressMs / data.durationMs) * 100
        : 0;

    return (
        <div className="w-full max-w-3xl mx-auto p-5 bg-[#050505] border border-white/5 rounded-[2rem] relative overflow-hidden group shadow-2xl">
            {/* Ambient Background Glow */}
            <div className="absolute top-[-20%] left-[-10%] w-[40%] h-[60%] bg-green-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="flex flex-col md:flex-row gap-6 md:gap-10 relative z-10 font-sans">
                {/* --- Left Side: Recently Played / Now Playing --- */}
                <div className="flex-1 flex flex-col justify-between gap-4">
                    {/* Header Label */}
                    <div className="flex items-center gap-2">
                        <span className={`w-1.5 h-1.5 rounded-full ${data?.isPlaying ? 'bg-[#1DB954] animate-pulse' : 'bg-[#b3b3b3]'}`} />
                        <h3 className="text-xs tracking-wider uppercase text-[#b3b3b3] font-medium">
                            {data?.isPlaying ? 'Now Playing' : 'Last Played'}
                        </h3>
                    </div>

                    {/* Content */}
                    <div className="flex gap-4 items-center">
                        <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-[#121212] shadow-lg group-hover:scale-105 transition-transform duration-500 ease-out border border-white/5">
                            {data?.albumImageUrl ? (
                                <>
                                    <img
                                        src={data.albumImageUrl}
                                        alt={data.album}
                                        className="w-full h-full object-cover"
                                    />
                                    <a
                                        href={data.songUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    >
                                        <ExternalLink size={18} className="text-white" />
                                    </a>
                                </>
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-[#b3b3b3]">
                                    <IconBrandSpotify size={28} />
                                </div>
                            )}
                        </div>

                        <div className="flex flex-col min-w-0 gap-0.5">
                            {data?.songUrl ? (
                                <a
                                    href={data.songUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-white font-bold text-lg hover:text-[#1DB954] transition-colors line-clamp-1"
                                >
                                    {data.title}
                                </a>
                            ) : (
                                <span className="text-white font-bold text-lg line-clamp-1">
                                    {loading ? "Connecting..." : "Not Playing"}
                                </span>
                            )}
                            <p className="text-[#b3b3b3] text-sm line-clamp-1 font-medium">
                                {data?.artist || "Spotify"}
                            </p>
                        </div>
                    </div>

                    {/* Progress Bar (Only show if playing or we have progress) */}
                    {data?.isPlaying && (
                        <div className="mt-1 flex flex-col gap-1.5">
                            <div className="w-full h-1 bg-[#2a2a2a] rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-[#1DB954] rounded-full"
                                    style={{ width: `${progressPercentage}%` }}
                                />
                            </div>
                        </div>
                    )}
                    <div className="mt-auto">
                        <IconBrandSpotify size={20} className="text-[#1DB954]" />
                    </div>
                </div>

                {/* --- Divider (Vertical on Desktop, Horizontal on Mobile) --- */}
                <div className="hidden md:block w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
                <div className="block md:hidden h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                {/* --- Right Side: Featured Favorite --- */}
                <div className="flex-1 flex flex-col justify-between gap-4">
                    <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1DB954]" />
                        <h3 className="text-xs tracking-wider uppercase text-[#b3b3b3] font-medium">Featured Favorite</h3>
                    </div>

                    <div className="flex gap-4 items-center mb-auto">
                        <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-[#121212] shadow-lg border border-white/5 group/featured">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/en/a/a0/Blonde_-_Frank_Ocean.jpeg"
                                alt="Blonde"
                                className="w-full h-full object-cover"
                            />
                            <a
                                href="https://open.spotify.com/track/2LMkwUfqC6S6s6q65L9269"
                                target="_blank"
                                rel="noreferrer"
                                className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            >
                                <ExternalLink size={18} className="text-white" />
                            </a>
                        </div>
                        <div className="flex flex-col min-w-0 gap-0.5">
                            <span className="text-white font-bold text-lg hover:text-[#1DB954] transition-colors cursor-default">
                                White Ferrari
                            </span>
                            <p className="text-[#b3b3b3] text-sm truncate font-medium">
                                by Frank Ocean
                            </p>
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 md:translate-y-0 md:relative md:top-auto md:right-auto md:mt-2 md:flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                                <a href="https://open.spotify.com/track/2LMkwUfqC6S6s6q65L9269" target="_blank" rel="noreferrer">
                                    <ExternalLink size={18} className="text-[#b3b3b3] hover:text-white transition-colors" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
