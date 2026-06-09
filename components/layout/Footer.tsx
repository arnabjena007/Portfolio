import React from 'react'

const Footer = () => {
    return (
        <footer className="w-full border-t border-neutral-200 dark:border-white/[0.05] bg-[#FAFAFA] dark:bg-[#0A0A0A]" id="contact">
            <div className="max-w-3xl mx-auto px-6 sm:px-12 py-8">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
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
