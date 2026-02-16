"use client";

import { motion } from "framer-motion";
import { SponsorsPartners } from "@/components/sections";
import Footer from "@/components/sections/Footer";

export default function PartnersPage() {
    return (
        <div className="min-h-screen bg-[var(--black)]">
            <div className="pt-32 pb-10 px-6 max-w-[1320px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-12"
                >
                    <span className="text-[var(--orange)] font-[family-name:var(--font-outfit)] text-xs font-semibold tracking-[2.5px] uppercase mb-4 block">
                        Our Ecosystem
                    </span>
                    <h1 className="text-[var(--white)] font-[family-name:var(--font-display)] text-5xl md:text-7xl font-bold tracking-tight mb-6">
                        Valued Partners
                    </h1>
                    <p className="text-[#A0A0A0] font-[family-name:var(--font-outfit)] text-lg font-light max-w-2xl mx-auto leading-relaxed">
                        Collaborating with industry leaders to deliver world-class technology events.
                    </p>
                </motion.div>
            </div>

            <SponsorsPartners />

            {/* Additional CTA for becoming a partner */}
            <section className="py-24 bg-[var(--black-card)] border-t border-[rgba(255,255,255,0.06)]">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6 font-[family-name:var(--font-display)]">Interested in Partnering?</h2>
                    <p className="text-[#A0A0A0] mb-8 font-[family-name:var(--font-outfit)] font-light">
                        Join our network of technology leaders and gain access to exclusive events and opportunities.
                    </p>
                    <a href="/contact" className="inline-block bg-[var(--orange)] text-white px-8 py-4 rounded-full font-semibold hover:bg-[var(--orange-bright)] transition-colors">
                        Become a Partner
                    </a>
                </div>
            </section>

            <Footer />
        </div>
    );
}
