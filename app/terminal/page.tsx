"use client";

import Terminal from "@/components/Terminal";

export default function TerminalPage() {
    return (
        <main className="relative min-h-screen flex items-center justify-center p-4">
            <div className="w-full max-w-5xl">
                <Terminal />
            </div>
        </main>
    );
}
