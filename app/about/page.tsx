"use client";

import { motion } from "framer-motion";
import WhyEFG from "@/components/sections/WhyEFG";
import Footer from "@/components/sections/Footer";
import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-[var(--black)]">
            <div className="pt-32 pb-10 px-6 max-w-[1320px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <span className="text-[var(--orange)] font-[family-name:var(--font-outfit)] text-xs font-semibold tracking-[2.5px] uppercase mb-4 block">
                        Who We Are
                    </span>
                    <h1 className="text-[var(--white)] font-[family-name:var(--font-display)] text-5xl md:text-7xl font-bold tracking-tight mb-6">
                        About Events First Group
                    </h1>
                    <p className="text-[#A0A0A0] font-[family-name:var(--font-outfit)] text-lg font-light max-w-2xl mx-auto leading-relaxed">
                        Architecting the GCC&apos;s most impactful technology events since our inception.
                    </p>
                </motion.div>
            </div>

            <WhyEFG />

            {/* Mission Section */}
            <section className="py-24 bg-[var(--black)] relative overflow-hidden">
                <div className="max-w-[1320px] mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-[var(--white)] font-[family-name:var(--font-display)] text-4xl font-bold mb-6">
                            Our Mission
                        </h2>
                        <p className="text-[#A0A0A0] font-[family-name:var(--font-outfit)] text-lg font-light leading-relaxed mb-6">
                            We believe that physical events are the catalyst for digital transformation. In a world of remote connections, we bring people together to spark real innovation.
                        </p>
                        <p className="text-[#A0A0A0] font-[family-name:var(--font-outfit)] text-lg font-light leading-relaxed">
                            Our commitment is to quality over quantity. Every event we produce is meticulously curated to ensure the right people are in the room, discussing the right topics, at the right time.
                        </p>
                    </div>
                    <div className="relative h-[400px] rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.06)] bg-[var(--black-card)]">
                        {/* Placeholder for an About Image - using a gradient or pattern for now */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[var(--black-card)] to-[rgba(232,101,26,0.1)] flex items-center justify-center">
                            <span className="text-white opacity-20 text-6xl font-[family-name:var(--font-display)]">EFG</span>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
