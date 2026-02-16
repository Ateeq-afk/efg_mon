"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const VENUE_IMAGE =
    "https://cyberfirstseries.com/wp-content/uploads/2025/03/Radisson-blu-hotel-Kuwait.jpg";

export default function KuwaitVenue() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

    return (
        <section ref={containerRef} className="relative h-[80vh] overflow-hidden flex items-center justify-center">
            {/* Parallax Background */}
            <motion.div
                className="absolute inset-0 z-0 h-[120%]" // Taller than container for parallax
                style={{ y }}
            >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={VENUE_IMAGE}
                    alt="Radisson Blu Hotel"
                    className="w-full h-full object-cover filter brightness-[0.6]"
                />
            </motion.div>

            {/* Content Card */}
            <div className="relative z-10 p-6 w-full max-w-4xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-black/40 backdrop-blur-2xl border border-white/10 p-10 md:p-16 rounded-[2.5rem] text-center shadow-[0_0_50px_rgba(0,0,0,0.5)] group hover:border-white/20 transition-all duration-500"
                >
                    <span className="text-[#01BBF5] font-mono text-xs md:text-sm tracking-[0.3em] uppercase mb-6 block">
                        The Venue
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "var(--font-display)" }}>
                        Radisson Blu Hotel
                    </h2>
                    <p className="text-white/70 text-lg md:text-xl mb-10 max-w-lg mx-auto font-light leading-relaxed" style={{ fontFamily: "var(--font-outfit)" }}>
                        Al Bida Al Tawoun Street, Salwa, Kuwait City
                    </p>

                    {/* Details Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 border-t border-white/10 pt-10 mb-10">
                        <div>
                            <p className="text-[#01BBF5] text-xs uppercase tracking-widest mb-2 font-bold" style={{ fontFamily: "var(--font-mono)" }}>Date</p>
                            <p className="text-white text-2xl font-light" style={{ fontFamily: "var(--font-display)" }}>April 21, 2026</p>
                        </div>
                        <div>
                            <p className="text-[#01BBF5] text-xs uppercase tracking-widest mb-2 font-bold" style={{ fontFamily: "var(--font-mono)" }}>Time</p>
                            <p className="text-white text-2xl font-light" style={{ fontFamily: "var(--font-display)" }}>8:00 AM - 5:00 PM</p>
                        </div>
                    </div>

                    {/* CTA */}
                    <a
                        href="https://maps.app.goo.gl/YourMapLinkHere"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold uppercase tracking-wider hover:bg-[#01BBF5] hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                    >
                        <span>Get Directions</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
