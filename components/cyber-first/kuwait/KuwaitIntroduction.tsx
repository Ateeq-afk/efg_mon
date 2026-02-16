"use client";

import { motion } from "framer-motion";

const CYBER_BLUE = "#01BBF5";

export default function KuwaitIntroduction() {
    return (
        <section className="py-24 bg-[#050505] relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] opacity-50" />

            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-[#01BBF5] font-mono text-xs md:text-sm tracking-[0.3em] uppercase mb-6 block">
                        The Mission
                    </span>

                    <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter leading-tight mb-8" style={{ fontFamily: "var(--font-display)" }}>
                        Resilience. Intelligence. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/40">
                            Sovereignty.
                        </span>
                    </h2>

                    <p className="text-lg md:text-2xl text-white/60 font-light leading-relaxed max-w-3xl mx-auto" style={{ fontFamily: "var(--font-outfit)" }}>
                        As Kuwait accelerates <strong>Vision 2035</strong>, cybersecurity is no longer just IT—it is national defense.
                        Cyber First Kuwait 2026 convenes the nation&apos;s elite CISOs and government leaders to forge a secure digital future.
                    </p>
                </motion.div>

                {/* Optional Metric or Divider */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="w-24 h-[1px] bg-[#01BBF5]/50 mx-auto mt-16"
                />

            </div>
        </section>
    );
}
