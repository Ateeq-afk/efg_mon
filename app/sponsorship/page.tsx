"use client";

import { motion } from "framer-motion";
import Footer from "@/components/sections/Footer";

export default function SponsorshipPage() {
    return (
        <div className="min-h-screen bg-[var(--black)]">
            <div className="pt-32 pb-20 px-6 max-w-[1320px] mx-auto min-h-[60vh] flex flex-col justify-center items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <span className="text-[var(--orange)] font-[family-name:var(--font-outfit)] text-xs font-semibold tracking-[2.5px] uppercase mb-4 block">
                        Partner With Us
                    </span>
                    <h1 className="text-[var(--white)] font-[family-name:var(--font-display)] text-5xl md:text-7xl font-bold tracking-tight mb-6">
                        Sponsorship Opportunities
                    </h1>
                    <p className="text-[#A0A0A0] font-[family-name:var(--font-outfit)] text-lg font-light max-w-2xl mx-auto leading-relaxed mb-8">
                        Get your brand in front of the region&apos;s most influential technology decision-makers.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-[var(--orange)] text-white px-8 py-4 rounded-full font-semibold hover:bg-[var(--orange-bright)] transition-colors">
                            Request Sponsorship Deck
                        </button>
                        <a href="/contact" className="bg-transparent border border-[rgba(255,255,255,0.2)] text-white px-8 py-4 rounded-full font-semibold hover:bg-[rgba(255,255,255,0.05)] transition-colors">
                            Contact Sales
                        </a>
                    </div>
                </motion.div>
            </div>
            <Footer />
        </div>
    );
}
