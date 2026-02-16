"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const CYBER_BLUE = "#01BBF5";

const stats = [
    { value: 500, suffix: "+", label: "ATTENDEES" },
    { value: 30, suffix: "+", label: "SPEAKERS" },
    { value: 4, suffix: "", label: "PANELS" },
    { value: 1, suffix: "", label: "HACKATHON" },
];

const easeOutExpo = (t: number): number => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

export default function KuwaitAtAGlance() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

    return (
        <section
            ref={sectionRef}
            style={{
                background: "var(--black-light)",
                borderTop: `1px solid rgba(1,187,245,0.06)`,
                borderBottom: `1px solid rgba(1,187,245,0.06)`,
                padding: "clamp(40px, 5vw, 60px) 0",
            }}
        >
            <div
                className="flex flex-wrap items-center justify-center"
                style={{ maxWidth: 1000, margin: "0 auto", gap: "clamp(32px, 5vw, 64px)" }}
            >
                {stats.map((stat, index) => (
                    <StatCounter key={stat.label} stat={stat} delay={index * 120} isInView={isInView} />
                ))}
            </div>
        </section>
    );
}

function StatCounter({
    stat,
    delay,
    isInView,
}: {
    stat: (typeof stats)[0];
    delay: number;
    isInView: boolean;
}) {
    const [displayValue, setDisplayValue] = useState(0);
    const [done, setDone] = useState(false);

    useEffect(() => {
        if (!isInView) return;
        const startTime = Date.now() + delay + 200;
        const duration = 1600;

        const animate = () => {
            const elapsed = Date.now() - startTime;
            if (elapsed < 0) { requestAnimationFrame(animate); return; }
            const progress = Math.min(elapsed / duration, 1);
            setDisplayValue(Math.floor(easeOutExpo(progress) * stat.value));
            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setDisplayValue(stat.value);
                setDone(true);
            }
        };
        requestAnimationFrame(animate);
    }, [isInView, stat.value, delay]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.5, delay: delay / 1000, ease: [0.16, 1, 0.3, 1] }}
            style={{ textAlign: "center", minWidth: 100 }}
        >
            <div
                style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 800,
                    fontSize: "clamp(32px, 4vw, 48px)",
                    color: "var(--white)",
                    lineHeight: 1,
                    letterSpacing: "-1px",
                }}
            >
                {displayValue.toLocaleString()}
                {stat.suffix && (
                    <span
                        style={{
                            color: CYBER_BLUE,
                            opacity: done ? 1 : 0.5,
                            transition: "opacity 0.3s",
                        }}
                    >
                        {stat.suffix}
                    </span>
                )}
            </div>
            <p
                style={{
                    fontFamily: "var(--font-outfit)",
                    fontSize: 10,
                    fontWeight: 500,
                    letterSpacing: "2.5px",
                    textTransform: "uppercase",
                    color: "#505050",
                    marginTop: 6,
                }}
            >
                {stat.label}
            </p>
        </motion.div>
    );
}
