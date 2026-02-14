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
        padding: "clamp(80px, 10vw, 120px) 0 clamp(80px, 10vw, 120px)",
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
            SECTION HEADER — Centered Introduction
            ═══════════════════════════════════════════════════════════════ */}
        <div className="text-center" style={{ marginBottom: 48 }}>
          {/* Label with lines */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center gap-4"
          >
            <span
              style={{
                width: 40,
                height: 1,
                background: "rgba(232, 101, 26, 0.4)",
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
              NetworkFirst Boardrooms
            </span>
            <span
              style={{
                width: 40,
                height: 1,
                background: "rgba(232, 101, 26, 0.4)",
              }}
            />
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(32px, 4vw, 52px)",
              letterSpacing: "-1.5px",
              color: "var(--white)",
              lineHeight: 1.1,
              margin: "16px 0 0",
            }}
          >
            A Different Kind of Room
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "var(--font-outfit)",
              fontWeight: 300,
              fontSize: 16,
              color: "#808080",
              lineHeight: 1.6,
              maxWidth: 560,
              margin: "14px auto 0",
            }}
          >
            Exclusive closed-door sessions for 15–20 hand-selected executives. No
            keynotes. No slides. Just the conversations that move industries —
            hosted year-round across the GCC under the NetworkFirst brand.
          </motion.p>
        </div>

        {/* ═══════════════════════════════════════════════════════════════
            THE VISUAL REVEAL — Image Block
            ═══════════════════════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }}
          transition={{
            duration: 0.9,
            delay: 0.3,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative overflow-hidden cursor-pointer rounded-[24px]"
          onMouseEnter={() => setIsImageHovered(true)}
          onMouseLeave={() => setIsImageHovered(false)}
        >
          {/* Aspect ratio container - responsive via Tailwind */}
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-[16/7]">
            {/* The Image */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1431540015161-0bf868a2d407?w=1600&q=80"
              alt="Exclusive boardroom setting"
              className="absolute inset-0 w-full h-full object-cover transition-all"
              style={{
                filter: isImageHovered
                  ? "brightness(0.38) saturate(0.85)"
                  : "brightness(0.3) saturate(0.85)",
                transform: isImageHovered ? "scale(1.03)" : "scale(1)",
                transitionDuration: "1s",
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            />

            {/* Warm gradient overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to top, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.4) 40%, rgba(15,12,10,0.3) 100%)",
              }}
            />

            {/* Overlaid text content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-12">
              {/* Brand label */}
              <motion.span
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                transition={{
                  duration: 0.6,
                  delay: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{
                  display: "block",
                  fontFamily: "var(--font-outfit)",
                  fontSize: 11,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "4px",
                  color: "#E8651A",
                }}
              >
                NetworkFirst
              </motion.span>

              {/* Headline */}
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                transition={{
                  duration: 0.6,
                  delay: 0.75,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "clamp(28px, 4vw, 48px)",
                  letterSpacing: "-1.5px",
                  color: "white",
                  lineHeight: 1.1,
                  maxWidth: 700,
                  margin: "12px 0 0",
                }}
              >
                Where Decisions Are Made Behind Closed Doors
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                transition={{
                  duration: 0.6,
                  delay: 0.9,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{
                  fontFamily: "var(--font-outfit)",
                  fontWeight: 300,
                  fontSize: "clamp(14px, 1.3vw, 17px)",
                  color: "rgba(255,255,255,0.65)",
                  lineHeight: 1.6,
                  maxWidth: 520,
                  margin: "14px 0 0",
                }}
              >
                Invitation-only boardroom sessions for 15–20 senior executives.
                No keynotes. No panels. Just the conversations that shape strategy.
              </motion.p>
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
            CTA BAR
            ═══════════════════════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{
            duration: 0.6,
            delay: 1.4,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 mt-9"
        >
          {/* Context text */}
          <p
            style={{
              fontFamily: "var(--font-outfit)",
              fontSize: 14,
              fontWeight: 400,
              color: "#585858",
              maxWidth: 480,
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            NetworkFirst is EFG's dedicated boardroom programme — an independent
            series of intimate executive gatherings running year-round across the
            GCC, each hosted by a single strategic partner.
          </p>

          {/* CTA Button */}
          <CTAButton />
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

/**
 * CTAButton — Ghost outline button with hover effects
 */
function CTAButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href="/boardrooms"
      className="inline-flex items-center gap-2 transition-all duration-300 flex-shrink-0"
      style={{
        padding: "13px 30px",
        borderRadius: 50,
        border: `1px solid ${isHovered ? "#E8651A" : "rgba(255,255,255,0.12)"}`,
        background: isHovered ? "rgba(232,101,26,0.06)" : "transparent",
        fontFamily: "var(--font-outfit)",
        fontSize: 14,
        fontWeight: 500,
        color: "white",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span>Explore NetworkFirst</span>
      <span
        className="transition-transform duration-300"
        style={{
          transform: isHovered ? "translateX(4px)" : "translateX(0)",
        }}
      >
        →
      </span>
    </Link>
  );
}
