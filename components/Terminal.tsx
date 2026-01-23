"use client";
import { projects } from "@/data";
import { AnimatePresence, motion } from "motion/react";
import { Terminal as TerminalIcon, Maximize2, Minus, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Terminal() {
    const [command, setCommand] = useState("");
    const [output, setOutput] = useState<string[]>([
        "Type 'help' for a list of available commands."
    ]);
    const [history, setHistory] = useState<string[]>([]);
    const [historyIndex, setHistoryIndex] = useState(-1);
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const [highlightedSuggestion, setHighlightedSuggestion] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const outputRef = useRef<HTMLDivElement>(null);
    const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    const commands = [
        "help",
        "intro",
        "projects",
        "skills",
        "experience",
        "education",
        "blogs",
        "contact",
        "latest_project",
        "resume", // Assuming clear/exit are handled internally
        "clear",
        "whoami",
        "ls"
    ];

    // Auto-scroll to bottom
    useEffect(() => {
        if (outputRef.current) outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }, [output]);

    // Focus input on mount
    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    // Suggestions logic
    useEffect(() => {
        const matchingCommands = commands.filter((cmd) => cmd.startsWith(command.toLowerCase()));
        setSuggestions(matchingCommands);
        setHighlightedSuggestion(matchingCommands[0] || "");

        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        }

        if (command) {
            setIsTyping(true);
            typingTimeoutRef.current = setTimeout(() => {
                setIsTyping(false);
            }, 1000);
        } else {
            setIsTyping(false);
        }

        return () => {
            if (typingTimeoutRef.current) {
                clearTimeout(typingTimeoutRef.current);
            }
        };
    }, [command]);

    const handleCommand = (e: React.FormEvent) => {
        e.preventDefault();
        const trimmedCommand = command.trim();
        if (!trimmedCommand) return;

        const newOutput = [...output, `$ ${trimmedCommand}`];
        setHistory([...history, trimmedCommand]);
        setHistoryIndex(history.length + 1);

        const [baseCommand, ...args] = trimmedCommand.toLowerCase().split(" ");

        switch (baseCommand) {
            case "help":
                newOutput.push(
                    "Available commands:",
                    ...commands.map((cmd) => `  ${cmd}`),
                    "Press 'Tab' to autocomplete commands.",
                );
                break;

            case "latest_project":
                if (projects && projects.length > 0) {
                    newOutput.push(`Latest Project: ${projects[0].title}`, projects[0].des || "No description available.");
                } else {
                    newOutput.push("No projects found.");
                }
                break;

            case "intro":
                newOutput.push(
                    "Hi! I'm Arnab Jena (Devo).",
                    "A Frontend Engineer passionate about building scalable solutions.",
                    "Type 'skills' or 'projects' to evaluate my potential."
                );
                break;

            case "whoami":
                newOutput.push("visitor@portfolio: You are a curious explorer looking at my work.");
                break;

            case "ls":
                newOutput.push("src  public  node_modules  package.json  README.md  (just kidding, here are the sections):");
                newOutput.push("projects/  skills/  experience/  books/  contact.md");
                break;

            case "resume":
                newOutput.push("Downloading resume...");
                // Simulation
                setTimeout(() => {
                    // In real app, trigger download
                    newOutput.push("Resume download simulation complete."); // Placeholder
                    setOutput([...newOutput, "Resume download checked."]);
                }, 1000);
                break;

            case "clear":
                setOutput([]);
                setCommand("");
                return;

            case "contact":
                newOutput.push(
                    "GitHub: https://github.com/ArnabJena",
                    "LinkedIn: https://linkedin.com/in/ArnabJena",
                    "Email: contact@arnabjena.dev"
                );
                break;

            default:
                // Check if it's one of the other section commands
                if (["skills", "projects", "experience", "education", "blogs"].includes(baseCommand)) {
                    newOutput.push(`Navigating to ${baseCommand}... (Simulation)`);
                    // In a real implementation this would scroll to the section
                    const section = document.getElementById(baseCommand);
                    if (section) section.scrollIntoView({ behavior: 'smooth' });
                    else newOutput.push(`Section #${baseCommand} not found on this page.`);
                } else {
                    newOutput.push(
                        `Command not recognized: '${trimmedCommand}'.`,
                        "Type 'help' for available commands or press 'Tab' to autocomplete.",
                    );
                }
        }

        setOutput(newOutput);
        setCommand("");
        setSuggestions([]);
        setHighlightedSuggestion("");
        setIsTyping(false);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "ArrowUp") {
            e.preventDefault();
            const newIndex = Math.max(0, historyIndex - 1);
            setHistoryIndex(newIndex);
            setCommand(history[newIndex] || "");
        } else if (e.key === "ArrowDown") {
            e.preventDefault();
            const newIndex = Math.min(history.length, historyIndex + 1);
            setHistoryIndex(newIndex);
            setCommand(history.length === newIndex ? "" : history[newIndex] || "");
        } else if (e.key === "Tab") {
            e.preventDefault();
            if (suggestions.length === 1) {
                setCommand(suggestions[0]);
            } else if (suggestions.length > 1) {
                // rudimentary auto-complete
                setCommand(suggestions[0]);
            }
        }
    };

    return (
        <section className="py-20 w-full max-w-4xl mx-auto px-4 sm:px-10">

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-[#1e1e1e] rounded-xl shadow-2xl border border-gray-800 overflow-hidden font-mono text-sm sm:text-base w-full h-[500px] flex flex-col relative z-20"
                onClick={() => inputRef.current?.focus()}
            >
                {/* Header / Window Controls */}
                <div className="bg-[#252526] px-4 py-2 flex items-center justify-between border-b border-[#333]">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#FF5F56] hover:bg-[#FF5F56]/80 transition-colors" />
                        <div className="w-3 h-3 rounded-full bg-[#FFBD2E] hover:bg-[#FFBD2E]/80 transition-colors" />
                        <div className="w-3 h-3 rounded-full bg-[#27C93F] hover:bg-[#27C93F]/80 transition-colors" />
                    </div>
                    <div className="text-gray-400 text-xs flex items-center gap-1.5 opacity-60">
                        <TerminalIcon size={12} />
                        <span>visitor@arnab-portfolio: ~</span>
                    </div>
                    <div className="flex gap-2 opacity-50">
                        {/* Fake window controls icons just for aesthetic */}
                    </div>
                </div>

                {/* content area */}
                <div ref={outputRef} className="flex-grow p-4 overflow-y-auto custom-scrollbar text-gray-300">
                    <div className="mb-6">
                        <pre className="text-[10px] sm:text-xs md:text-sm font-bold leading-none mb-4 text-yellow-500 select-none">
                            {`██████╗ ███████╗██╗   ██╗ ██████╗ 
██╔══██╗██╔════╝██║   ██║██╔═══██╗
██║  ██║█████╗  ██║   ██║██║   ██║
██║  ██║██╔══╝  ╚██╗ ██╔╝██║   ██║
██████╔╝███████╗ ╚████╔╝ ╚██████╔╝
╚═════╝ ╚══════╝  ╚═══╝   ╚═════╝ `}
                        </pre>
                        <div className="opacity-70 text-xs text-gray-500">
                            <p>Welcome to Arnab Shell (ASH) v2.0.0</p>
                            <p>Login: visitor [IP: 127.0.0.1]</p>
                            <p className="mt-1">Type &apos;help&apos; to get started.</p>
                        </div>
                    </div>

                    <AnimatePresence>
                        {output.map((line, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.1 }}
                                className={`${line.startsWith("$") ? "text-yellow-400 font-bold mt-4" : "text-gray-300 ml-4 mb-1"}`}
                            >
                                {line}
                            </motion.div>
                        ))}
                    </AnimatePresence>

                    <form onSubmit={handleCommand} className="flex items-center mt-4">
                        <span className="text-green-500 mr-2">➜</span>
                        <span className="text-blue-400 mr-2">~</span>
                        <div className="relative flex-grow">
                            <input
                                ref={inputRef}
                                type="text"
                                value={command}
                                onChange={(e) => setCommand(e.target.value)}
                                onKeyDown={handleKeyDown}
                                className="w-full bg-transparent border-none outline-none text-white focus:ring-0"
                                spellCheck={false}
                                autoComplete="off"
                            />
                            {/* Ghost text for autocomplete suggestion */}
                            {isTyping && command && suggestions.length > 0 && suggestions[0].startsWith(command.toLowerCase()) && (
                                <div className="absolute top-0 left-0 pointer-events-none text-gray-600 select-none">
                                    <span className="opacity-0">{command}</span>
                                    {suggestions[0].slice(command.length)}
                                </div>
                            )}
                        </div>
                    </form>
                </div>
            </motion.div>
        </section>
    );
}
