"use client";

import React, { useEffect, useState } from "react";
import { IconBrandSpotify } from "@tabler/icons-react";
import { ExternalLink, Play } from "lucide-react";

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
        const fetchData = async () => {
            try {
                const res = await fetch("/api/spotify");
                const json = await res.json();
                setData(json);
            } catch (error) {
                console.error("Error fetching spotify data", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
        const interval = setInterval(fetchData, 10000); // Poll every 10s
        return () => clearInterval(interval);
    }, []);

    const formatTime = (ms: number) => {
        const minutes = Math.floor(ms / 60000);
        const seconds = ((ms % 60000) / 1000).toFixed(0);
        return `${minutes}:${Number(seconds) < 10 ? '0' : ''}${seconds}`;
    };

    const progressPercentage = data?.progressMs && data?.durationMs
        ? (data.progressMs / data.durationMs) * 100
        : 0;

    return (
        <div className="w-full max-w-2xl mx-auto p-4 md:p-6 bg-black/40 backdrop-blur-md border border-white/10 rounded-3xl relative overflow-hidden group">
            {/* Background Gradient */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="flex flex-col md:flex-row gap-8 relative z-10 font-serif">
                {/* Now Playing Section */}
                <div className="flex-1 flex flex-col justify-between">
                    <div className="flex items-center gap-2 mb-4">
                        <span className={`w-2 h-2 rounded-full ${data?.isPlaying ? 'bg-green-500 animate-pulse' : 'bg-gray-500'}`} />
                        <h3 className="text-sm text-gray-400 font-medium">
                            {data?.isPlaying ? 'Now Playing' : 'Offline / Not Playing'}
                        </h3>
                    </div>

                    <div className="flex gap-4 items-center">
                        <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 group-hover:scale-105 transition-transform duration-500 bg-white/5">
                            {data?.albumImageUrl ? (
                                <>
                                    <img
                                        src={data.albumImageUrl}
                                        alt="Album Art"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Play size={20} className="text-white fill-white" />
                                    </div>
                                </>
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-gray-500">
                                    <IconBrandSpotify size={32} />
                                </div>
                            )}
                        </div>
                        <div className="flex flex-col">
                            {data?.songUrl ? (
                                <a href={data.songUrl} target="_blank" rel="noreferrer" className="text-white font-bold text-lg hover:underline decoration-green-500/50 underline-offset-4 line-clamp-1">
                                    {data.title}
                                </a>
                            ) : (
                                <span className="text-white font-bold text-lg line-clamp-1">
                                    {loading ? "Loading..." : "Spotify Paused"}
                                </span>
                            )}

                            <p className="text-gray-400 text-sm line-clamp-1">
                                {data?.artist || "Devo is currently offline"}
                            </p>
                        </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mt-6 flex flex-col gap-1.5">
                        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-green-500 rounded-full transition-all duration-1000 ease-linear"
                                style={{ width: `${progressPercentage}%` }}
                            />
                        </div>
                        <div className="flex justify-between text-xs text-gray-500 font-mono">
                            <span>{data?.progressMs ? formatTime(data.progressMs) : "--:--"}</span>
                            <span>{data?.durationMs ? formatTime(data.durationMs) : "--:--"}</span>
                        </div>
                    </div>
                </div>

                {/* Divider (Hidden on mobile) */}
                <div className="hidden md:block w-px bg-white/10 self-stretch my-2" />

                {/* Featured Favorite Section (Static) */}
                <div className="flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="w-2 h-2 rounded-full bg-purple-500" />
                        <h3 className="text-sm text-gray-400 font-medium">Featured Favorite</h3>
                    </div>

                    <div className="flex gap-4 items-center mb-auto">
                        <div className="w-14 h-14 rounded-lg overflow-hidden flex-shrink-0">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/en/a/a0/Blonde_-_Frank_Ocean.jpeg"
                                alt="Album Art"
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                            />
                        </div>
                        <div className="flex flex-col min-w-0">
                            <span className="text-white font-bold text-base truncate">
                                White Ferrari
                            </span>
                            <p className="text-gray-400 text-sm truncate">
                                by Frank Ocean
                            </p>
                        </div>
                        <a href="https://open.spotify.com/track/2LMkwUfqC6S6s6q65L9269" target="_blank" rel="noreferrer" className="ml-auto p-2 bg-white/5 rounded-full hover:bg-green-500 text-white hover:text-black transition-all">
                            <ExternalLink size={16} />
                        </a>
                    </div>

                    {/* Spotify Logo Bottom Ctr/Right */}
                    <div className="mt-8 flex justify-end">
                        <IconBrandSpotify size={24} className="text-[#1DB954]" />
                    </div>
                </div>
            </div>
        </div>
    );
};
