"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

export default function ClosingStatement() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <section
            ref={sectionRef}
            className="relative overflow-hidden"
            style={{
                background: "var(--black)",
                padding: "clamp(140px, 18vw, 240px) 0",
            }}
        >
            {/* ═══════════════════════════════════════════════════════
          AMBIENT BACKGROUND — Radial orange glow from below
          ═══════════════════════════════════════════════════════ */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: `
            radial-gradient(ellipse 70% 50% at 50% 110%, rgba(232,101,26,0.08) 0%, transparent 70%),
            radial-gradient(ellipse 40% 30% at 50% 100%, rgba(232,101,26,0.04) 0%, transparent 60%)
          `,
                }}
            />

            {/* Subtle grain */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    opacity: 0.02,
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "repeat",
                }}
            />

            {/* ═══════════════════════════════════════════════════════
          CONTENT
          ═══════════════════════════════════════════════════════ */}
            <div
                className="relative z-10"
                style={{
                    maxWidth: 900,
                    margin: "0 auto",
                    padding: "0 clamp(20px, 4vw, 60px)",
                    textAlign: "center",
                }}
            >
                {/* The Line */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as const }}
                    style={{
                        width: 60,
                        height: 1,
                        background: "linear-gradient(to right, transparent, #E8651A, transparent)",
                        margin: "0 auto 40px",
                        transformOrigin: "center",
                    }}
                />

                {/* The Statement */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
                    className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60"
                    style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 800,
                        fontSize: "clamp(36px, 5.5vw, 72px)",
                        letterSpacing: "-2.5px",
                        lineHeight: 1.1,
                        margin: 0,
                    }}
                >
                    The next conversation
                    <br />
                    that changes everything
                    <br />
                    <span style={{ color: "#E8651A" }}>starts here.</span>
                </motion.h2>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
                    style={{
                        fontFamily: "var(--font-outfit)",
                        fontWeight: 300,
                        fontSize: "clamp(15px, 1.5vw, 18px)",
                        color: "#707070",
                        lineHeight: 1.65,
                        maxWidth: 480,
                        margin: "24px auto 0",
                    }}
                >
                    Join 5,000+ senior technology leaders shaping the future
                    of enterprise across the GCC.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] as const }}
                    className="flex items-center justify-center gap-4 flex-wrap"
                    style={{ marginTop: 44 }}
                >
                    {/* Primary CTA */}
                    <Link
                        href="#timeline"
                        className="closing-cta-primary"
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 10,
                            padding: "16px 36px",
                            borderRadius: 999,
                            background: "#E8651A",
                            fontFamily: "var(--font-outfit)",
                            fontSize: 15,
                            fontWeight: 600,
                            color: "white",
                            textDecoration: "none",
                            transition: "all 0.4s ease",
                            boxShadow: "0 4px 24px rgba(232,101,26,0.25)",
                        }}
                    >
                        View Upcoming Events
                        <span style={{ fontSize: 16 }}>→</span>
                    </Link>

                    {/* Secondary CTA */}
                    <Link
                        href="/sponsors"
                        className="closing-cta-secondary"
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 10,
                            padding: "16px 36px",
                            borderRadius: 999,
                            background: "transparent",
                            border: "1px solid rgba(255,255,255,0.12)",
                            fontFamily: "var(--font-outfit)",
                            fontSize: 15,
                            fontWeight: 600,
                            color: "rgba(255,255,255,0.7)",
                            textDecoration: "none",
                            transition: "all 0.4s ease",
                        }}
                    >
                        Partner With Us
                    </Link>
                </motion.div>
            </div>

            {/* Hover styles */}
            <style jsx global>{`
        .closing-cta-primary:hover {
          background: #ff7a2e !important;
          box-shadow: 0 8px 32px rgba(232,101,26,0.35) !important;
          transform: translateY(-1px);
        }
        .closing-cta-secondary:hover {
          border-color: rgba(255,255,255,0.25) !important;
          color: white !important;
          background: rgba(255,255,255,0.04) !important;
        }
      `}</style>
        </section>
    );
}
