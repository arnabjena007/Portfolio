import React from 'react'

const Footer = () => {
    return (
        <footer className="w-full max-w-3xl mx-auto relative pt-8 border-l border-r border-solid border-neutral-200 dark:border-white/[0.1]" id="contact">
            {/* Diagonal Stripe Separator */}
            <div className="relative w-full h-5 select-none pointer-events-none flex items-center justify-center">
                <div className="absolute w-[100vw] h-full left-1/2 -translate-x-1/2 border-t border-b border-neutral-200 dark:border-white/[0.1]">
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

            {/* Footer Card */}
            <div className="relative w-full h-[80px] overflow-hidden px-8 sm:px-12 flex items-center justify-between border-t border-b border-neutral-200 dark:border-white/[0.1] shadow-xl">
                {/* Background Image */}
                <img 
                    src="/footer-bg.png" 
                    alt="Footer Background" 
                    className="absolute inset-0 w-full h-full object-cover z-0 opacity-90"
                />
                
                {/* Slight dark overlay to ensure white text is always readable */}
                <div className="absolute inset-0 bg-black/10 z-0"></div>

                {/* Content */}
                <div className="relative z-10 w-full flex items-center justify-center">
                    <p className="text-lg font-serif text-white font-medium drop-shadow-md">
                        © 2026 Arnab Jena. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
