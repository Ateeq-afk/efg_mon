"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const CYBER_BLUE = "#01BBF5";

const elements = [
    {
        id: "program",
        icon: "🎤",
        title: "Impactful Program",
        description:
            "Keynote presentations, panel discussions, product demonstrations, and live sessions addressing Kuwait's most critical cybersecurity challenges.",
    },
    {
        id: "awards",
        icon: "🏆",
        title: "Awards Ceremony",
        description:
            "Celebrating excellence and recognizing innovation — honoring the guardians of Kuwait's digital future.",
    },
    {
        id: "hackathon",
        icon: "💻",
        title: "CTF Hackathon",
        description:
            "A dynamic hands-on session for cybersecurity innovation, skill-building, and competitive problem-solving.",
    },
    {
        id: "meetings",
        icon: "🤝",
        title: "1:1 Meetings",
        description:
            "Personalized one-on-one meetings to connect, collaborate, and explore cybersecurity innovations with key decision-makers.",
    },
];

export default function KuwaitElements() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <section
            ref={sectionRef}
            style={{
                background: "var(--black-light)",
                padding: "clamp(80px, 10vw, 130px) 0",
            }}
        >
            <div
                style={{
                    maxWidth: 1320,
                    margin: "0 auto",
                    padding: "0 clamp(20px, 4vw, 60px)",
                }}
            >
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    style={{ textAlign: "center", marginBottom: 48 }}
                >
                    <div className="flex items-center justify-center gap-3">
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
                            Conference Experience
                        </span>
                        <span style={{ width: 30, height: 1, background: CYBER_BLUE }} />
                    </div>

                    <h2
                        style={{
                            fontFamily: "var(--font-display)",
                            fontWeight: 800,
                            fontSize: "clamp(30px, 3.5vw, 48px)",
                            letterSpacing: "-1.5px",
                            color: "var(--white)",
                            lineHeight: 1.1,
                            margin: "16px 0 0",
                        }}
                    >
                        More Than a Conference
                    </h2>
                </motion.div>

                {/* Cards grid */}
                <div
                    className="kw-elements-grid"
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(4, 1fr)",
                        gap: 16,
                    }}
                >
                    {elements.map((el, index) => (
                        <motion.div
                            key={el.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.5, delay: 0.2 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <ElementCard element={el} />
                        </motion.div>
                    ))}
                </div>
            </div>

            <style jsx global>{`
                @media (max-width: 1024px) {
                    .kw-elements-grid {
                        grid-template-columns: repeat(2, 1fr) !important;
                    }
                }
                @media (max-width: 480px) {
                    .kw-elements-grid {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </section>
    );
}

function ElementCard({ element }: { element: (typeof elements)[0] }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="transition-all duration-400"
            style={{
                background: isHovered ? "rgba(1,187,245,0.04)" : "rgba(1,187,245,0.015)",
                border: isHovered
                    ? "1px solid rgba(1,187,245,0.15)"
                    : "1px solid rgba(1,187,245,0.06)",
                borderRadius: 16,
                padding: "28px 24px",
                minHeight: 200,
                display: "flex",
                flexDirection: "column",
                cursor: "default",
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Icon */}
            <div
                className="transition-transform duration-300"
                style={{
                    fontSize: 28,
                    marginBottom: 16,
                    transform: isHovered ? "scale(1.1)" : "scale(1)",
                }}
            >
                {element.icon}
            </div>

            {/* Title */}
            <h3
                className="transition-colors duration-300"
                style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 17,
                    fontWeight: 700,
                    color: isHovered ? CYBER_BLUE : "var(--white)",
                    letterSpacing: "-0.2px",
                    margin: 0,
                }}
            >
                {element.title}
            </h3>

            {/* Description */}
            <p
                style={{
                    fontFamily: "var(--font-outfit)",
                    fontSize: 13.5,
                    fontWeight: 300,
                    color: "#707070",
                    lineHeight: 1.6,
                    marginTop: 8,
                    flex: 1,
                }}
            >
                {element.description}
            </p>
        </div>
    );
}
