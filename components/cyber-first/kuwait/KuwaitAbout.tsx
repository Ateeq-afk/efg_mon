"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const CYBER_BLUE = "#01BBF5";

const themes = [
    {
        id: "vision-2035",
        title: "Kuwait Vision 2035",
        description: "Digital transformation as a catalyst for a cyber-secure future.",
    },
    {
        id: "ncsc",
        title: "National Cybersecurity Strategy",
        description: "Vision, objectives, and securing national security against cyber threats.",
    },
    {
        id: "ai-defense",
        title: "Leveraging AI in Cybersecurity",
        description: "Threat detection, response strategies, behavioral analytics, and adaptive models.",
    },
    {
        id: "zero-trust",
        title: "Zero Trust & Cloud Security",
        description: "Securing hybrid and cloud environments through zero-trust architecture and identity management.",
    },
    {
        id: "critical-infra",
        title: "Securing Critical Infrastructure",
        description: "Safeguarding OT/ICS systems, energy grids, and essential services.",
    },
    {
        id: "gov-role",
        title: "Government Collaboration",
        description: "Government's role in digital transformation and establishing a cybersecurity framework.",
    },
    {
        id: "ransomware",
        title: "Fortifying Against Ransomware",
        description: "Defending against ransomware, disruptions, and AI-driven threats.",
    },
    {
        id: "talent",
        title: "Cybersecurity Upskilling",
        description: "Closing the skills gap through training, certification, and public-private partnerships.",
    },
];

export default function KuwaitAbout() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <section
            ref={sectionRef}
            style={{
                background: "var(--black)",
                padding: "clamp(80px, 10vw, 130px) 0",
            }}
        >
            <div
                className="kw-about-container"
                style={{
                    maxWidth: 1320,
                    margin: "0 auto",
                    padding: "0 clamp(20px, 4vw, 60px)",
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 80,
                    alignItems: "start",
                }}
            >
                {/* Left — Narrative (sticky) */}
                <motion.div
                    className="kw-about-left"
                    initial={{ opacity: 0, y: 25 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    style={{ position: "sticky", top: 140 }}
                >
                    <div className="flex items-center gap-3">
                        <span style={{ width: 30, height: 1, background: CYBER_BLUE }} />
                        <span
                            style={{
                                fontSize: 11,
                                fontWeight: 600,
                                letterSpacing: "2.5px",
                                textTransform: "uppercase",
                                color: CYBER_BLUE,
                                fontFamily: "var(--font-outfit)",
                            }}
                        >
                            About This Edition
                        </span>
                    </div>

                    <h2
                        style={{
                            fontFamily: "var(--font-display)",
                            fontWeight: 800,
                            fontSize: "clamp(28px, 3vw, 40px)",
                            letterSpacing: "-1px",
                            color: "var(--white)",
                            lineHeight: 1.15,
                            margin: "16px 0 0",
                        }}
                    >
                        Advancing Kuwait&apos;s
                        <br />
                        Cyber Resilience
                    </h2>

                    <p
                        style={{
                            fontFamily: "var(--font-outfit)",
                            fontWeight: 300,
                            fontSize: 16,
                            color: "#808080",
                            lineHeight: 1.8,
                            margin: "20px 0 0",
                        }}
                    >
                        As Kuwait accelerates digital transformation through cloud, 5G, and smart-city
                        initiatives, the cybersecurity market is set to grow from{" "}
                        <span style={{ color: CYBER_BLUE, fontWeight: 500 }}>USD $0.62B</span> in 2025 to over{" "}
                        <span style={{ color: CYBER_BLUE, fontWeight: 500 }}>USD $1.01B</span> by 2030 — underscoring the
                        need for stronger defenses and regulatory alignment.
                    </p>

                    <p
                        style={{
                            fontFamily: "var(--font-outfit)",
                            fontWeight: 300,
                            fontSize: 16,
                            color: "#808080",
                            lineHeight: 1.8,
                            margin: "16px 0 0",
                        }}
                    >
                        Driven by the National Cybersecurity Center (NCSC) and Kuwait&apos;s vision for a
                        secure digital future, the 3rd Edition will address rising threats, evolving
                        regulations, and best practices in zero-trust, AI-driven defense, and
                        hybrid-cloud security.
                    </p>
                </motion.div>

                {/* Right — Themes */}
                <div className="flex flex-col gap-1.5">
                    {themes.map((theme, index) => (
                        <motion.div
                            key={theme.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, delay: 0.2 + index * 0.06, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <ThemeBlock theme={theme} />
                        </motion.div>
                    ))}
                </div>
            </div>

            <style jsx global>{`
                @media (max-width: 768px) {
                    .kw-about-container {
                        grid-template-columns: 1fr !important;
                        gap: 48px !important;
                    }
                    .kw-about-left {
                        position: static !important;
                    }
                }
            `}</style>
        </section>
    );
}

function ThemeBlock({ theme }: { theme: { id: string; title: string; description: string } }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="transition-all duration-300"
            style={{
                padding: "18px 24px",
                borderLeft: `2px solid ${isHovered ? `rgba(1,187,245,0.5)` : `rgba(1,187,245,0.1)`}`,
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <h3
                className="transition-colors duration-300"
                style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 16,
                    fontWeight: 700,
                    color: isHovered ? CYBER_BLUE : "var(--white)",
                    letterSpacing: "-0.2px",
                    margin: 0,
                }}
            >
                {theme.title}
            </h3>
            <p
                style={{
                    fontFamily: "var(--font-outfit)",
                    fontSize: 14,
                    fontWeight: 300,
                    color: "#606060",
                    lineHeight: 1.6,
                    margin: "4px 0 0",
                }}
            >
                {theme.description}
            </p>
        </div>
    );
}
