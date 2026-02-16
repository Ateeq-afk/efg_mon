"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

// Feature card data
const features = [
  {
    number: "01",
    title: "Curated Roundtables",
    description:
      "Hand-selected groups of 15–20 C-suite and VP-level executives, matched by industry vertical, challenge, and seniority. Every seat is earned.",
  },
  {
    number: "02",
    title: "Off-the-Record Dialogue",
    description:
      "Chatham House rules. No recordings, no press. The freedom to speak candidly about real challenges, real failures, and real strategies that work.",
  },
  {
    number: "03",
    title: "Sponsor Integration",
    description:
      "Each NetworkFirst session is hosted by a single strategic partner who shapes the agenda, selects the topic, and builds relationships in the most intimate setting possible.",
  },
];

export default function NetworkFirst() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [isImageHovered, setIsImageHovered] = useState(false);

  return (
    <section
      ref={sectionRef}
      style={{
        background: "var(--black)",
        padding: "clamp(60px, 8vw, 100px) 0 clamp(80px, 10vw, 120px)",
      }}
    >
      <div
        style={{
          maxWidth: 1320,
          margin: "0 auto",
          padding: "0 clamp(20px, 4vw, 60px)",
        }}
      >
        {/* ═══════════════════════════════════════════════════════════════
            THE CINEMATIC HERO — Full-width immersive image block
            ═══════════════════════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative overflow-hidden rounded-[28px]"
          style={{
            border: "1px solid rgba(232, 101, 26, 0.1)",
          }}
          onMouseEnter={() => setIsImageHovered(true)}
          onMouseLeave={() => setIsImageHovered(false)}
        >
          {/* Aspect ratio container */}
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-[2.4/1]">
            {/* The Image */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1431540015161-0bf868a2d407?w=1600&q=80"
              alt="Exclusive boardroom setting"
              className="absolute inset-0 w-full h-full object-cover transition-all"
              style={{
                filter: isImageHovered
                  ? "brightness(0.4) saturate(0.9)"
                  : "brightness(0.28) saturate(0.85)",
                transform: isImageHovered ? "scale(1.04)" : "scale(1)",
                transitionDuration: "1.2s",
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            />

            {/* Warm gradient overlays */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `
                  linear-gradient(to right, rgba(10,10,10,0.9) 0%, rgba(10,10,10,0.3) 50%, transparent 100%),
                  linear-gradient(to top, rgba(10,10,10,0.95) 0%, transparent 50%)
                `,
              }}
            />

            {/* Subtle orange accent glow */}
            <div
              className="absolute bottom-0 left-0 pointer-events-none transition-opacity duration-700"
              style={{
                width: 400,
                height: 300,
                background: "radial-gradient(ellipse at bottom left, rgba(232, 101, 26, 0.15) 0%, transparent 70%)",
                opacity: isImageHovered ? 1 : 0.6,
              }}
            />

            {/* Content — Left-aligned for editorial feel */}
            <div className="absolute inset-0 flex flex-col justify-center p-8 sm:p-12 lg:p-16">
              {/* Brand label with accent line */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{
                  duration: 0.7,
                  delay: 0.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex items-center gap-3"
              >
                <span
                  style={{
                    width: 32,
                    height: 2,
                    background: "#E8651A",
                  }}
                />
                <span
                  style={{
                    fontFamily: "var(--font-outfit)",
                    fontSize: 11,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "3px",
                    color: "#E8651A",
                  }}
                >
                  NetworkFirst Boardrooms
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{
                  duration: 0.8,
                  delay: 0.35,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "clamp(32px, 5vw, 56px)",
                  letterSpacing: "-2px",
                  color: "white",
                  lineHeight: 1.05,
                  maxWidth: 600,
                  margin: "20px 0 0",
                }}
              >
                A Different Kind
                <br />
                of Room
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{
                  fontFamily: "var(--font-outfit)",
                  fontWeight: 300,
                  fontSize: "clamp(14px, 1.4vw, 17px)",
                  color: "rgba(255,255,255,0.6)",
                  lineHeight: 1.65,
                  maxWidth: 420,
                  margin: "18px 0 0",
                }}
              >
                Invitation-only sessions for 15–20 hand-selected executives.
                No keynotes. No slides. Just the conversations that move industries.
              </motion.p>

              {/* CTA inline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{
                  duration: 0.8,
                  delay: 0.65,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{ marginTop: 28 }}
              >
                <Link
                  href="/networkfirst"
                  className="inline-flex items-center gap-2 group"
                  style={{
                    fontFamily: "var(--font-outfit)",
                    fontSize: 13,
                    fontWeight: 500,
                    color: "#E8651A",
                    letterSpacing: "0.5px",
                  }}
                >
                  <span>Explore NetworkFirst</span>
                  <span
                    className="transition-transform duration-300 group-hover:translate-x-1"
                    style={{ fontSize: 14 }}
                  >
                    →
                  </span>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* ═══════════════════════════════════════════════════════════════
            BOTTOM HALF — THE THREE PILLARS
            ═══════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.number}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.6,
                delay: 1.0 + index * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </div>

        {/* ═══════════════════════════════════════════════════════════════
            BOTTOM CONTEXT LINE
            ═══════════════════════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{
            duration: 0.6,
            delay: 1.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="flex items-center justify-center gap-4 mt-10"
        >
          <div
            style={{
              flex: 1,
              maxWidth: 100,
              height: 1,
              background: "rgba(255,255,255,0.06)",
            }}
          />
          <p
            style={{
              fontFamily: "var(--font-outfit)",
              fontSize: 12,
              fontWeight: 400,
              color: "#454545",
              textAlign: "center",
              margin: 0,
            }}
          >
            Hosted year-round across the GCC by strategic partners
          </p>
          <div
            style={{
              flex: 1,
              maxWidth: 100,
              height: 1,
              background: "rgba(255,255,255,0.06)",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}

/**
 * FeatureCard — Editorial-style card with ghost number
 */
function FeatureCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative transition-all duration-400"
      style={{
        background: isHovered ? "#171717" : "var(--black-card)",
        border: `1px solid ${isHovered ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.05)"}`,
        borderRadius: 18,
        padding: "36px 32px",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Ghost number */}
      <span
        className="transition-colors duration-400"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: 64,
          fontWeight: 800,
          color: isHovered ? "rgba(232,101,26,0.12)" : "rgba(232,101,26,0.07)",
          lineHeight: 1,
          letterSpacing: "-3px",
          display: "block",
        }}
      >
        {number}
      </span>

      {/* Title */}
      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontSize: 19,
          fontWeight: 700,
          color: "white",
          letterSpacing: "-0.3px",
          marginTop: -20,
          marginBottom: 10,
        }}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        style={{
          fontFamily: "var(--font-outfit)",
          fontSize: 13.5,
          fontWeight: 300,
          color: "#707070",
          lineHeight: 1.6,
          margin: 0,
        }}
      >
        {description}
      </p>
    </div>
  );
}

