"use client";

import { motion } from "framer-motion";

const CYBER_BLUE = "#01BBF5";

// Reusing key logos for the authority strip
const logos = [
    { name: "Palo Alto Networks", src: "https://cyberfirstseries.com/wp-content/uploads/2025/03/paloalto-logo.png" },
    { name: "Google", src: "https://cyberfirstseries.com/wp-content/uploads/2025/03/google-logo1.png" },
    { name: "SentinelOne", src: "https://cyberfirstseries.com/wp-content/uploads/2025/03/snetinel-logo.png" },
    { name: "Kaspersky", src: "https://cyberfirstseries.com/wp-content/uploads/2025/03/kaspersky-logo.png" },
    { name: "Akamai", src: "https://cyberfirstseries.com/wp-content/uploads/2025/03/akamai-logo.png" },
    { name: "Bitdefender", src: "https://cyberfirstseries.com/wp-content/uploads/2025/03/bitdefender-white-logo.png" },
    { name: "ManageEngine", src: "https://cyberfirstseries.com/wp-content/uploads/2025/03/manage-engine-logo-white1.png" },
    { name: "Kamco Invest", src: "https://cyberfirstseries.com/wp-content/uploads/2025/04/kamco-invest-logo.png" },
    { name: "IBK", src: "https://cyberfirstseries.com/wp-content/uploads/2025/02/ibk-logo.png" },
];

// Duplicate for seamless loop
const marqueeLogos = [...logos, ...logos, ...logos];

export default function KuwaitAuthority() {
    return (
        <section className="bg-[#050505] py-12 border-b border-white/5 relative z-20 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 mb-8 text-center">
                <p className="text-xs md:text-sm font-bold tracking-[0.3em] text-white/40 uppercase" style={{ fontFamily: "var(--font-outfit)" }}>
                    Trusted by Industry Leaders & Government
                </p>
            </div>

            {/* Marquee Container */}
            <div className="relative flex overflow-hidden mask-gradient py-6">
                <motion.div
                    className="flex items-center gap-16 md:gap-32 px-16"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 30, // Slightly faster to feel dynamic
                    }}
                >
                    {marqueeLogos.map((logo, index) => (
                        <div key={`${logo.name}-${index}`} className="relative flex-shrink-0 group">
                            {/* Grayscale by default, color on hover */}
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={logo.src}
                                alt={logo.name}
                                className="h-16 md:h-24 w-auto object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110"
                            />
                        </div>
                    ))}
                </motion.div>

                {/* Fade Edges */}
                <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#050505] to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#050505] to-transparent z-10" />
            </div>
        </section>
    );
}
