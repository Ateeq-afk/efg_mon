"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Link from "next/link";

const CYBER_BLUE = "#01BBF5";
const HERO_IMAGE =
    "https://cyberfirstseries.com/wp-content/uploads/2024/12/Cyber-First-Kuwait-2025-R1-02.png";

export default function KuwaitHero() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollY } = useScroll();

    // Parallax effects
    const y = useTransform(scrollY, [0, 1000], [0, 400]);
    const opacity = useTransform(scrollY, [0, 500], [1, 0]);
    const scale = useTransform(scrollY, [0, 1000], [1, 1.1]);

    return (
        <section
            ref={containerRef}
            className="relative w-full h-screen overflow-hidden flex items-center justify-center"
            style={{ background: "#050505" }}
        >
            {/* Cinematic Background */}
            {/* Video Background */}
            <motion.div
                className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden"
                style={{ y, scale }}
            >
                <div className="absolute inset-0 bg-black/50 z-10" /> {/* Increased overlay opacity */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-[#050505] z-20" />

                {/* YouTube Iframe - Scaled up and Blurred */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300%] h-[300%] md:w-[150%] md:h-[150%] pointer-events-none">
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/gR-IUI7yJLg?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=gR-IUI7yJLg&modestbranding=1&playsinline=1&enablejsapi=1&iv_load_policy=3"
                        title="Cyber First Kuwait Background"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        className="w-full h-full object-cover opacity-60"
                        style={{
                            pointerEvents: 'none',
                            filter: 'blur(12px) brightness(0.8)' // Key fix: Blur and brightness
                        }}
                    />
                </div>
            </motion.div>

            {/* Content */}
            <motion.div
                className="relative z-30 text-center px-6"
                style={{ opacity }}
            >
                {/* Edition Badge - Glassmorphism */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8"
                    style={{
                        background: "rgba(255, 255, 255, 0.05)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
                    }}
                >
                    <span className="w-2 h-2 rounded-full bg-[#01BBF5] animate-pulse" />
                    <span
                        style={{
                            fontFamily: "var(--font-outfit)",
                            fontSize: 12,
                            fontWeight: 600,
                            letterSpacing: "2px",
                            color: "rgba(255, 255, 255, 0.9)",
                            textTransform: "uppercase",
                        }}
                    >
                        3rd Edition • April 21, 2026
                    </span>
                </motion.div>

                {/* Main Title - Apple Style Typography */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-white leading-none tracking-tighter"
                    style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 800,
                        fontSize: "clamp(64px, 10vw, 140px)",
                        textShadow: "0 10px 40px rgba(0,0,0,0.5)",
                    }}
                >
                    Cyber First
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/50">
                        Kuwait
                    </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="mt-6 text-xl md:text-2xl text-white/70 max-w-2xl mx-auto font-light"
                    style={{ fontFamily: "var(--font-outfit)" }}
                >
                    Resilience for Vision 2035. <br className="hidden md:block" />
                    Powered by AI. Secured by Intelligence.
                </motion.p>

                {/* Minimalist Countdown */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="mt-8 mb-8"
                >
                    <Countdown targetDate="2026-04-21T09:00:00" />
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link
                        href="#register"
                        className="group relative px-8 py-4 bg-[#01BBF5] hover:bg-[#33CCFF] text-black font-semibold rounded-full transition-all duration-300 overflow-hidden"
                        style={{ fontFamily: "var(--font-outfit)" }}
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Secure Your Seat
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="transform group-hover:translate-x-1 transition-transform"
                            >
                                <path
                                    d="M6 12L10 8L6 4"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </span>
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    </Link>

                    <Link
                        href="/sponsors"
                        className="px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 text-white font-medium rounded-full transition-all duration-300"
                        style={{ fontFamily: "var(--font-outfit)" }}
                    >
                        Become a Sponsor
                    </Link>
                </motion.div>
            </motion.div>

        </section>
    );
}

import { useState, useEffect } from "react";

function Countdown({ targetDate }: { targetDate: string }) {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = new Date(targetDate).getTime() - now;

            if (distance < 0) {
                clearInterval(interval);
                return;
            }

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000),
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    return (
        <div className="flex items-start justify-center gap-6 md:gap-12 text-white">
            {/* Days */}
            <div className="flex flex-col items-center group cursor-default">
                <span className="text-5xl md:text-7xl font-bold tracking-tighter leading-none group-hover:text-[#01BBF5] transition-colors duration-300" style={{ fontFamily: "var(--font-display)" }}>
                    {timeLeft.days}
                </span>
                <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] text-white/40 mt-2 uppercase">Days</span>
            </div>

            {/* Divider */}
            <div className="text-4xl md:text-6xl font-thin text-white/10 -mt-2">:</div>

            {/* Hours */}
            <div className="flex flex-col items-center group cursor-default">
                <span className="text-5xl md:text-7xl font-bold tracking-tighter leading-none group-hover:text-[#01BBF5] transition-colors duration-300" style={{ fontFamily: "var(--font-display)" }}>
                    {timeLeft.hours}
                </span>
                <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] text-white/40 mt-2 uppercase">Hours</span>
            </div>

            {/* Divider */}
            <div className="text-4xl md:text-6xl font-thin text-white/10 -mt-2">:</div>

            {/* Mins */}
            <div className="flex flex-col items-center group cursor-default">
                <span className="text-5xl md:text-7xl font-bold tracking-tighter leading-none group-hover:text-[#01BBF5] transition-colors duration-300" style={{ fontFamily: "var(--font-display)" }}>
                    {timeLeft.minutes}
                </span>
                <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] text-white/40 mt-2 uppercase">Mins</span>
            </div>
        </div>
    );
}
