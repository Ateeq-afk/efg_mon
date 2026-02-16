"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/* Partner names — will be replaced with real logos when available */
const partners = [
    "Palo Alto Networks",
    "CrowdStrike",
    "Kaspersky",
    "Fortinet",
    "Mandiant",
    "Tenable",
    "Splunk",
    "Recorded Future",
];

export default function LogoBar() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

    return (
        <section
            ref={sectionRef}
            style={{
                background: "var(--black)",
                padding: "clamp(60px, 8vw, 100px) 0",
            }}
        >
            <div
                style={{
                    maxWidth: 1320,
                    margin: "0 auto",
                    padding: "0 clamp(20px, 4vw, 60px)",
                }}
            >
                {/* Label */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center justify-center gap-3"
                    style={{ marginBottom: 44 }}
                >
                    <span
                        style={{
                            width: 30,
                            height: 1,
                            background: "var(--orange)",
                        }}
                    />
                    <span
                        style={{
                            fontSize: 11,
                            fontWeight: 600,
                            letterSpacing: "2.5px",
                            textTransform: "uppercase",
                            color: "var(--orange)",
                            fontFamily: "var(--font-outfit)",
                        }}
                    >
                        Trusted By Industry Leaders
                    </span>
                    <span
                        style={{
                            width: 30,
                            height: 1,
                            background: "var(--orange)",
                        }}
                    />
                </motion.div>

                {/* Logo Grid — Clean, minimal */}
                <div
                    className="logo-bar-grid"
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(4, 1fr)",
                        gap: "1px",
                        background: "rgba(255,255,255,0.04)",
                        borderRadius: 16,
                        overflow: "hidden",
                        border: "1px solid rgba(255,255,255,0.04)",
                    }}
                >
                    {partners.map((partner, index) => (
                        <motion.div
                            key={partner}
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: 0.1 + index * 0.04,
                            }}
                            className="logo-bar-cell"
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                padding: "36px 24px",
                                background: "var(--black)",
                                transition: "background 0.4s ease",
                                cursor: "default",
                            }}
                            onMouseEnter={(e) => {
                                (e.currentTarget as HTMLElement).style.background =
                                    "rgba(255,255,255,0.02)";
                            }}
                            onMouseLeave={(e) => {
                                (e.currentTarget as HTMLElement).style.background = "var(--black)";
                            }}
                        >
                            <span
                                style={{
                                    fontFamily: "var(--font-display)",
                                    fontSize: 14,
                                    fontWeight: 700,
                                    letterSpacing: "1.5px",
                                    textTransform: "uppercase",
                                    color: "rgba(255,255,255,0.15)",
                                    transition: "color 0.4s ease",
                                    whiteSpace: "nowrap",
                                }}
                            >
                                {partner}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style jsx global>{`
        .logo-bar-cell:hover span {
          color: rgba(255,255,255,0.35) !important;
        }
        @media (max-width: 768px) {
          .logo-bar-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
        </section>
    );
}
