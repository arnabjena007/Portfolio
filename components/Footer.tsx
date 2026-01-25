import React from 'react'

const Footer = () => {
    return (
        <footer className="w-full pt-5 pb-5 border-t border-white/20 bg-black-100/10 backdrop-blur-lg" id="contact">
            <div className="flex flex-col items-center justify-center">
                <p className="md:text-base text-sm md:font-normal font-light text-center">
                    Copyright © 2026 Arnab . All rights reserved.
                </p>

                <div className="flex items-center md:gap-3 gap-6 mt-4">
                    <span className="text-white/40 text-sm font-light">Profile Visits:</span>
                    <img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Farnabjena007%2FDevo-Portfolio&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=visits&edge_flat=false" alt="visits" className="h-6" />
                </div>
            </div>
        </footer>
    )
}

export default Footer
