"use client";

import { motion } from "framer-motion";
import Footer from "@/components/sections/Footer";

export default function MediaKitPage() {
    return (
        <div className="min-h-screen bg-[var(--black)]">
            <div className="pt-32 pb-20 px-6 max-w-[1320px] mx-auto min-h-[60vh] flex flex-col justify-center items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <span className="text-[var(--orange)] font-[family-name:var(--font-outfit)] text-xs font-semibold tracking-[2.5px] uppercase mb-4 block">
                        Brand Assets
                    </span>
                    <h1 className="text-[var(--white)] font-[family-name:var(--font-display)] text-5xl md:text-7xl font-bold tracking-tight mb-6">
                        Media Kit
                    </h1>
                    <p className="text-[#A0A0A0] font-[family-name:var(--font-outfit)] text-lg font-light max-w-2xl mx-auto leading-relaxed mb-8">
                        Download official logos, brand guidelines, and executive headshots.
                    </p>
                    <button className="bg-[var(--orange)] text-white px-8 py-4 rounded-full font-semibold hover:bg-[var(--orange-bright)] transition-colors">
                        Download Assets (ZIP)
                    </button>
                </motion.div>
            </div>
            <Footer />
        </div>
    );
}
