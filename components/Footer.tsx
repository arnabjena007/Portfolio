import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="w-full border-t border-neutral-200 dark:border-white/[0.05] bg-white dark:bg-[#0a0a0a]" id="contact">
            <div className="max-w-3xl mx-auto px-8 sm:px-12 py-12">
                {/* Top row: 3 columns */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
                    {/* Col 1: Navigate */}
                    <div className="space-y-3">
                        <p className="text-xs font-mono text-neutral-500 uppercase tracking-widest">Navigate</p>
                        <ul className="space-y-2">
                            {[
                                { label: 'Home', href: '/' },
                                { label: 'About', href: '/about' },
                                { label: 'Projects', href: '/projects' },
                                { label: 'Blog', href: '/blog' },
                            ].map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors font-sans">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 2: Connect */}
                    <div className="space-y-3">
                        <p className="text-xs font-mono text-neutral-500 uppercase tracking-widest">Connect</p>
                        <ul className="space-y-2">
                            {[
                                { label: 'GitHub', href: 'https://github.com/arnabjena007' },
                                { label: 'LinkedIn', href: 'https://linkedin.com/in/arnabjena007' },
                                { label: 'Twitter / X', href: 'https://x.com/ArnabJena11' },
                                { label: 'Email', href: 'mailto:arnabjena2003@gmail.com' },
                            ].map((link) => (
                                <li key={link.href}>
                                    <a href={link.href} target="_blank" rel="noreferrer" className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors font-sans">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 3: Work */}
                    <div className="space-y-3">
                        <p className="text-xs font-mono text-neutral-500 uppercase tracking-widest">Work</p>
                        <ul className="space-y-2">
                            {[
                                { label: 'Resume', href: 'https://drive.google.com/file/d/1Stp0jleIoRQ-6DkHPkkQESf7x6C9k7KL/view?usp=sharing' },
                                { label: 'Terminal', href: '/terminal' },
                                { label: 'Contact', href: '/contact' },
                            ].map((link) => (
                                <li key={link.href}>
                                    <a href={link.href} target="_blank" rel="noreferrer" className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors font-sans">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom divider + copyright */}
                <div className="border-t border-neutral-200 dark:border-white/[0.04] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-xs font-mono text-neutral-500 dark:text-neutral-600">
                        © 2026 Arnab Jena. All rights reserved.
                    </p>
                    <p className="text-xs font-mono text-neutral-600 dark:text-neutral-700">
                        Built with Next.js · Deployed on Vercel
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
