"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const sponsors = [
    // Strategic (Top Tier)
    { name: "ManageEngine", logo: "https://cyberfirstseries.com/wp-content/uploads/2025/03/manage-engine-logo-white1.png", tier: "Strategic Partner" },
    { name: "Kamco Invest", logo: "https://cyberfirstseries.com/wp-content/uploads/2025/04/kamco-invest-logo.png", tier: "Strategic Partner" },
    { name: "IBK", logo: "https://cyberfirstseries.com/wp-content/uploads/2025/02/ibk-logo.png", tier: "Strategic Partner" },

    // Gold
    { name: "Palo Alto Networks", logo: "https://cyberfirstseries.com/wp-content/uploads/2025/03/paloalto-logo.png", tier: "Gold Sponsors" },
    { name: "Google", logo: "https://cyberfirstseries.com/wp-content/uploads/2025/03/google-logo1.png", tier: "Gold Sponsors" },
    { name: "SentinelOne", logo: "https://cyberfirstseries.com/wp-content/uploads/2025/03/snetinel-logo.png", tier: "Gold Sponsors" },

    // Associate
    { name: "Kaspersky", logo: "https://cyberfirstseries.com/wp-content/uploads/2025/03/kaspersky-logo.png", tier: "Associate Sponsors" },
    { name: "Akamai", logo: "https://cyberfirstseries.com/wp-content/uploads/2025/03/akamai-logo.png", tier: "Associate Sponsors" },
    { name: "Bitdefender", logo: "https://cyberfirstseries.com/wp-content/uploads/2025/03/bitdefender-white-logo.png", tier: "Associate Sponsors" },
];

// Helper to group by tier
const groupedSponsors = sponsors.reduce((acc, sponsor) => {
    (acc[sponsor.tier] = acc[sponsor.tier] || []).push(sponsor);
    return acc;
}, {} as Record<string, typeof sponsors>);

const tierOrder = ["Strategic Partner", "Gold Sponsors", "Associate Sponsors"];

export default function KuwaitSponsors() {
    return (
        <section className="py-24 bg-[#080808] border-t border-white/5 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#01BBF5]/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-[1200px] mx-auto px-6 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-20"
                >
                    <span className="text-[#01BBF5] font-mono text-xs md:text-sm tracking-[0.3em] uppercase mb-4 block">
                        The Partners
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
                        Industry Leaders
                    </h2>
                </motion.div>

                <div className="space-y-20">
                    {tierOrder.map((tier) => (
                        <div key={tier}>
                            <h3 className="text-white/40 font-light uppercase tracking-[0.2em] text-sm mb-8 relative inline-block">
                                {tier}
                                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-[1px] bg-[#01BBF5]/50" />
                            </h3>

                            <div className={`grid gap-6 ${tier === "Strategic Partner" ? "grid-cols-1 md:grid-cols-3" : "grid-cols-2 md:grid-cols-3 lg:grid-cols-4"} justify-center items-center`}>
                                {groupedSponsors[tier]?.map((sponsor, i) => (
                                    <SponsorLogo key={sponsor.name} sponsor={sponsor} index={i} size={tier === "Strategic Partner" ? "lg" : "md"} />
                                ))}
                            </div>
                        </div>
                    ))}

                    {/* Become a sponsor CTA */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="mt-16"
                    >
                        <Link
                            href="/sponsors"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-dashed border-white/10 hover:border-[#01BBF5]/50 hover:bg-[#01BBF5]/5 transition-all duration-300 group"
                        >
                            <span className="text-white/60 group-hover:text-[#01BBF5] text-sm font-medium transition-colors uppercase tracking-wider">Become a Partner +</span>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function SponsorLogo({ sponsor, index, size }: { sponsor: any, index: number, size: "lg" | "md" }) {
    const isLarge = size === "lg";

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className={`
                group flex items-center justify-center bg-[#0F0F0F] rounded-2xl border border-white/5 hover:border-[#01BBF5]/30 transition-all duration-500 overflow-hidden relative mx-auto w-full
                ${isLarge ? "h-40 md:h-48 max-w-[350px]" : "h-32 max-w-[280px]"}
            `}
        >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src={sponsor.logo}
                alt={sponsor.name}
                className={`
                    object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110
                    ${isLarge ? "max-w-[180px] max-h-[80px]" : "max-w-[140px] max-h-[60px]"}
                `}
            />
            {/* Hover Glow */}
            <div className="absolute inset-0 bg-radial-gradient from-[#01BBF5]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </motion.div>
    )
}
