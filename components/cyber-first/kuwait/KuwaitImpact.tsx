"use client";

import { motion } from "framer-motion";

const stats = [
    {
        value: "$1 Billion+",
        label: "Projected Cyber Market by 2033",
        source: "Market Growth",
        colSpan: "md:col-span-2",
        bg: "bg-gradient-to-br from-[#01BBF5]/20 to-transparent"
    },
    {
        value: "90%",
        label: "Government Services Digitization Goal",
        source: "Vision 2035",
        colSpan: "md:col-span-1",
        bg: "bg-[#0A0A0A]"
    },
    {
        value: "$39 Billion",
        label: "Projected ICT Market Value by 2029",
        source: "Digital Adoption",
        colSpan: "md:col-span-1",
        bg: "bg-[#0A0A0A]"
    },
    {
        value: "Cloud First",
        label: "Mandate Driving 66% of Security Spend",
        source: "Digital Sovereignty",
        colSpan: "md:col-span-2",
        bg: "bg-gradient-to-tr from-[#01BBF5]/10 to-transparent"
    }
];

export default function KuwaitImpact() {
    return (
        <section className="py-24 bg-[#050505] relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#01BBF5]/5 via-[#050505] to-[#050505]" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="text-[#01BBF5] font-mono text-xs md:text-sm tracking-[0.3em] uppercase mb-4 block">
                        The Imperative
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6" style={{ fontFamily: "var(--font-display)" }}>
                        Kuwait's Digital <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#01BBF5] to-white">
                            Renaissance
                        </span>
                    </h2>
                    <p className="text-white/60 font-light max-w-2xl mx-auto text-lg" style={{ fontFamily: "var(--font-outfit)" }}>
                        Driven by <strong>Vision 2035</strong>, the nation is aggressively modernizing its infrastructure.
                        Cybersecurity is the foundation of this transformation.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className={`${stat.colSpan} relative rounded-3xl border border-white/10 p-8 overflow-hidden group hover:border-[#01BBF5]/30 transition-colors duration-500`}
                        >
                            <div className={`absolute inset-0 ${stat.bg} opacity-50 group-hover:opacity-80 transition-opacity duration-500`} />

                            <div className="relative z-10">
                                <p className="text-[#01BBF5] font-mono text-xs uppercase tracking-widest mb-2 border-b border-white/10 pb-2 inline-block">
                                    {stat.source}
                                </p>
                                <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 leading-tight" style={{ fontFamily: "var(--font-display)" }}>
                                    {stat.value}
                                </h3>
                                <p className="text-white/70 font-light text-lg" style={{ fontFamily: "var(--font-outfit)" }}>
                                    {stat.label}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
