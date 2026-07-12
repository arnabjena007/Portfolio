"use client";

import React, { useState } from "react";
import { IconSend, IconBrandGithub, IconBrandLinkedin, IconBrandTwitter } from "@tabler/icons-react";
import { motion } from "framer-motion";

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        // Simulate form submission
        setTimeout(() => {
            console.log("Form data:", formData);
            setStatus("success");
            setFormData({ name: "", email: "", message: "" });
        }, 1500);
    };

    return (
        <main className="min-h-screen relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 font-sans">
            {/* Gradient Background */}
            <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.03] -z-10"></div>

            <div className="max-w-4xl w-full pt-32 pb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-instrument">
                        Contact <span className="text-purple">Me</span>
                    </h1>
                    <p className="text-white-100/80 text-lg max-w-2xl mx-auto">
                        Have a project in mind or just want to explore a new idea? I&apos;m always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-col gap-8"
                    >
                        <div className="flex flex-col gap-4">
                            <h2 className="text-2xl font-bold text-white font-instrument">Let&apos;s connect</h2>
                            <p className="text-gray-400 leading-relaxed">
                                Feel free to reach out directly via email or check out my social profiles. I try my best to respond within 24 hours.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4">
                            <a href="mailto:arnab@example.com" className="text-xl text-white hover:text-purple transition-colors font-medium">
                                arnab@example.com
                            </a>
                            <div className="flex gap-4">
                                <a href="https://github.com/arnabjena007" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full text-white hover:bg-white/10 hover:text-purple transition-all">
                                    <IconBrandGithub size={24} />
                                </a>
                                <a href="https://www.linkedin.com/in/arnabjena/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full text-white hover:bg-white/10 hover:text-purple transition-all">
                                    <IconBrandLinkedin size={24} />
                                </a>
                                <a href="https://x.com/ArnabJena11" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full text-white hover:bg-white/10 hover:text-purple transition-all">
                                    <IconBrandTwitter size={24} />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <form onSubmit={handleSubmit} className="flex flex-col gap-6 bg-[#0f0f11] p-8 rounded-[1.75rem] border border-white/10 relative overflow-hidden">
                            {/* Success Overlay */}
                            {status === "success" && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="absolute inset-0 bg-[#0f0f11] flex flex-col items-center justify-center z-20 text-center p-8"
                                >
                                    <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4 text-green-500">
                                        <IconSend size={32} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2 font-instrument">Message Sent!</h3>
                                    <p className="text-gray-400">Thanks for reaching out. I&apos;ll get back to you soon.</p>
                                    <button
                                        type="button"
                                        onClick={() => setStatus("idle")}
                                        className="mt-6 text-purple hover:text-white transition-colors"
                                    >
                                        Send another message
                                    </button>
                                </motion.div>
                            )}

                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full bg-[#1c1c21] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-purple focus:ring-1 focus:ring-purple transition-all"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full bg-[#1c1c21] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-purple focus:ring-1 focus:ring-purple transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    required
                                    rows={4}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full bg-[#1c1c21] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-purple focus:ring-1 focus:ring-purple transition-all resize-none"
                                    placeholder="Your message here..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === "submitting"}
                                className="mt-2 w-full bg-purple text-white font-medium py-3 rounded-lg hover:bg-purple/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {status === "submitting" ? (
                                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                                ) : (
                                    <>
                                        Send Message
                                        <IconSend size={18} />
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </main>
    );
};

export default ContactPage;
