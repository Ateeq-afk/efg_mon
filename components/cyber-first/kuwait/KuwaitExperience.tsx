"use client";

import { motion, useMotionValue, useTransform, useMotionTemplate } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const CYBER_BLUE = "#01BBF5";
const VENUE_IMG = "https://cyberfirstseries.com/wp-content/uploads/2025/03/Radisson-blu-hotel-Kuwait.jpg"; // Radisson
const CROWD_IMG = "https://uae.cyberfirstseries.com/wp-content/uploads/2025/10/ARU00511.jpg"; // Crowd
const HACKATHON_IMG = "https://uae.cyberfirstseries.com/wp-content/uploads/2025/10/ARU00722.jpg"; // Hackathon/Tech vibe

export default function KuwaitExperience() {
    return (
        <section className="py-24 bg-[#050505] relative z-10 overflow-hidden">
            {/* Extended Background Grid for Continuity */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] opacity-50 pointer-events-none" />

            {/* Top Fade Interaction */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#050505] to-transparent z-10" />

            <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 text-center"
                >
                    <span className="text-[#01BBF5] font-mono text-xs md:text-sm tracking-[0.3em] uppercase mb-4 block">
                        The Experience
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6" style={{ fontFamily: "var(--font-display)" }}>
                        An Experience Beyond <br />
                        <span style={{ color: CYBER_BLUE }}>The Conference Room</span>
                    </h2>
                    <p className="text-xl text-white/60 font-light max-w-2xl mx-auto" style={{ fontFamily: "var(--font-outfit)" }}>
                        Immerse yourself in a day of high-level networking, live innovation, and strategic discourse at Kuwait&apos;s premier venue.
                    </p>
                </motion.div>

                {/* Bento Grid - Expanded Layout */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[300px]">

                    {/* Card 1: Main Networking (Large Square) */}
                    <BentoCard
                        colSpan="md:col-span-2"
                        rowSpan="md:row-span-2"
                        image={CROWD_IMG}
                        title="Executive Networking"
                        subtitle="Connect with 500+ Leaders"
                        delay={0.1}
                    />

                    {/* Card 2: Strategic Insight (Wide Top Right) */}
                    <BentoCard
                        colSpan="md:col-span-2"
                        rowSpan="md:row-span-1"
                        image="https://cyberfirstseries.com/wp-content/uploads/2025/04/Dr.-Huda-Alrashidi.jpg"
                        title="Strategic Insight"
                        subtitle="Global Expertise"
                        delay={0.2}
                    />

                    {/* Card 3: Hackathon (Standard) */}
                    <BentoCard
                        colSpan="md:col-span-1"
                        rowSpan="md:row-span-1"
                        image={HACKATHON_IMG}
                        title="Live CTF"
                        subtitle="Future Talent"
                        delay={0.3}
                    />

                    {/* Card 4: Stats (Standard) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="md:col-span-1 md:row-span-1 relative group overflow-hidden rounded-3xl bg-[#0A0A0A] border border-white/5 p-6 flex flex-col justify-between hover:border-white/10 transition-colors"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-[#01BBF5]/20 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
                        <div>
                            <h3 className="text-4xl font-bold text-white mb-1">30+</h3>
                            <p className="text-sm text-white/60 uppercase tracking-widest text-[10px]">Speakers</p>
                        </div>
                        <div className="text-right">
                            <h3 className="text-4xl font-bold text-white mb-1">4</h3>
                            <p className="text-sm text-white/60 uppercase tracking-widest text-[10px]">Panels</p>
                        </div>
                    </motion.div>

                    {/* Card 5: Technical Workshops (Wide Middle) */}
                    <BentoCard
                        colSpan="md:col-span-2"
                        rowSpan="md:row-span-1"
                        image={VENUE_IMG}
                        title="Technical Workshops"
                        subtitle="Hands-on Training"
                        delay={0.4}
                    />

                    {/* Card 6: Awards / Ceremony (Wide Bottom) */}
                    <BentoCard
                        colSpan="md:col-span-2"
                        rowSpan="md:row-span-1"
                        image="https://uae.cyberfirstseries.com/wp-content/uploads/2025/10/ARU00722.jpg"
                        title="Cyber Excellence Awards"
                        subtitle="Celebrating Innovation"
                        delay={0.5}
                    />

                </div>
            </div>
        </section>
    );
}

function BentoCard({ colSpan, rowSpan, image, title, subtitle, delay, href }: { colSpan: string, rowSpan: string, image: string, title: string, subtitle: string, delay: number, href?: string }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [3, -3]);
    const rotateY = useTransform(x, [-100, 100], [-3, 3]);

    function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
        const rect = event.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct * 200);
        y.set(yPct * 200);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay }}
            className={`${colSpan} ${rowSpan} relative group perspective-1000`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: 1000 }}
        >
            <motion.div
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                className="w-full h-full relative overflow-hidden rounded-3xl border border-white/5 bg-[#0A0A0A]"
            >
                {/* Background Image */}
                <div className="absolute inset-0 transform-gpu">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-[0.7] group-hover:brightness-[0.9]"
                    />
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />

                {/* Spotlight Effect */}
                <motion.div
                    className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                        background: useMotionTemplate`
                            radial-gradient(
                                650px circle at ${x}px ${y}px,
                                rgba(1, 187, 245, 0.15),
                                transparent 80%
                            )
                        `
                    }}
                />

                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full p-8 z-20 translate-z-10" style={{ transform: "translateZ(20px)" }}>
                    <p className="text-[#01BBF5] font-semibold tracking-wider uppercase text-xs mb-2 transition-transform duration-300 group-hover:-translate-y-1">{subtitle}</p>
                    <h3 className="text-3xl font-bold text-white transition-transform duration-300 group-hover:-translate-y-1">{title}</h3>
                </div>

                {/* Hover Glow Border */}
                <div className="absolute inset-0 border border-white/10 group-hover:border-[#01BBF5]/30 rounded-3xl transition-colors duration-300 pointer-events-none" />
            </motion.div>
        </motion.div>
    )
}
