"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const CYBER_BLUE = "#01BBF5";

export default function KuwaitNarrative() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const narrativeLines = [
        "Vision 2035 is not just a goal.",
        "It is a mandate.",
        "Secured by Intelligence.",
        "Powered by You.",
    ];

    return (
        <section ref={containerRef} className="relative h-[300vh] bg-[#050505]">
            <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
                {/* Background Atmosphere */}
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        background:
                            "radial-gradient(circle at 50% 50%, #01BBF5 0%, transparent 60%)",
                        filter: "blur(100px)",
                    }}
                />

                {/* Content Container */}
                <div className="relative z-10 max-w-4xl px-6 text-center">
                    {narrativeLines.map((line, index) => {
                        // Calculate opacity based on scroll progress for each line
                        // e.g. Line 0: 0.0 - 0.25
                        // Line 1: 0.25 - 0.50
                        // ...
                        const start = index * 0.25;
                        const end = start + 0.25;
                        // eslint-disable-next-line react-hooks/rules-of-hooks
                        const opacity = useTransform(
                            scrollYProgress,
                            [start, start + 0.1, end - 0.1, end],
                            [0, 1, 1, 0]
                        );
                        // eslint-disable-next-line react-hooks/rules-of-hooks
                        const y = useTransform(
                            scrollYProgress,
                            [start, start + 0.1, end - 0.1, end],
                            [50, 0, 0, -50]
                        );
                        // eslint-disable-next-line react-hooks/rules-of-hooks
                        const scale = useTransform(
                            scrollYProgress,
                            [start, start + 0.1, end - 0.1, end],
                            [0.9, 1, 1, 1.1]
                        );

                        return (
                            <div
                                key={index}
                                className="absolute top-1/2 left-0 w-full -translate-y-1/2 flex justify-center"
                            >
                                <motion.h2
                                    style={{ opacity, y, scale }}
                                    className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight max-w-4xl px-4"
                                >
                                    {line === "Secured by Intelligence." ? (
                                        <>
                                            Secured by <span style={{ color: CYBER_BLUE }}>Intelligence.</span>
                                        </>
                                    ) : (
                                        line
                                    )}
                                </motion.h2>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
