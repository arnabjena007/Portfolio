import React from 'react'

const Footer = () => {
    return (
        <footer className="w-full max-w-3xl mx-auto relative border-l border-r border-solid border-neutral-200 dark:border-white/[0.1]" id="contact">
            {/* Diagonal Stripe Separator */}
            <div className="relative w-full h-5 select-none pointer-events-none flex items-center justify-center">
                <div className="absolute w-[100vw] h-full left-1/2 -translate-x-1/2 border-t border-b border-neutral-200 dark:border-neutral-800/50">
                    <div
                        className="absolute inset-0 block dark:hidden"
                        style={{
                            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 6px, rgba(0, 0, 0, 0.03) 6px, rgba(0, 0, 0, 0.03) 7px)',
                        }}
                    />
                    <div
                        className="absolute inset-0 hidden dark:block"
                        style={{
                            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 6px, rgba(255, 255, 255, 0.1) 6px, rgba(255, 255, 255, 0.1) 7px)',
                        }}
                    />
                </div>
            </div>

            {/* Footer credits */}
            <div className="px-8 sm:px-12 py-8 text-center space-y-1">
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    Crafted by <a href="https://github.com/arnabjena007" target="_blank" rel="noreferrer" className="text-neutral-700 dark:text-neutral-300 hover:text-yellow-500 dark:hover:text-yellow-500 transition-colors underline underline-offset-2">Devo</a>
                </p>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    © {new Date().getFullYear()}. Built by hand.
                </p>
            </div>

            {/* Bottom separator */}
            <div className="relative w-full h-5 select-none pointer-events-none flex items-center justify-center">
                <div className="absolute w-[100vw] h-full left-1/2 -translate-x-1/2 border-t border-b border-neutral-200 dark:border-neutral-800/50">
                    <div
                        className="absolute inset-0 block dark:hidden"
                        style={{
                            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 6px, rgba(0, 0, 0, 0.03) 6px, rgba(0, 0, 0, 0.03) 7px)',
                        }}
                    />
                    <div
                        className="absolute inset-0 hidden dark:block"
                        style={{
                            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 6px, rgba(255, 255, 255, 0.1) 6px, rgba(255, 255, 255, 0.1) 7px)',
                        }}
                    />
                </div>
            </div>

            {/* Bottom dotted grid area */}
            <div className="relative w-full h-40 overflow-hidden">
                <div className="absolute inset-0 dotted-background" />
            </div>
        </footer>
    )
}

export default Footer
