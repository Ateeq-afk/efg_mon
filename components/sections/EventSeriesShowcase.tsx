"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

// Event series data
const eventSeries = [
  {
    id: "cyber-first",
    title: "Cyber First",
    tagline: "Defending the Digital Frontier",
    description:
      "Where the region's CISOs, security architects, and cyber leaders gather to shape the future of enterprise defense.",
    stats: "5 Editions · UAE, Kuwait, Qatar, KSA, Oman",
    color: "#01BBF5",
    image:
      "https://efg-final.s3.amazonaws.com/home-event-spec/Image%2016-02-2026%20at%202.31%E2%80%AFAM.png",
    href: "/events/cyber-first",
  },
  {
    id: "ot-security-first",
    title: "OT Security First",
    tagline: "Securing Critical Infrastructure",
    description:
      "Bridging IT and OT security for the industries that keep the world running — energy, manufacturing, utilities.",
    stats: "3 Editions · UAE, Saudi Arabia, Oman",
    color: "#D34B9A",
    image:
      "https://efg-final.s3.amazonaws.com/home-event-spec/Image%2016-02-2026%20at%202.41%E2%80%AFAM.png",
    href: "/events/ot-security-first",
  },
  {
    id: "opex-first",
    title: "Opex First",
    tagline: "Engineering Operational Excellence",
    description:
      "Process transformation, automation, and the frameworks driving efficiency at scale across the modern enterprise.",
    stats: "2 Editions · UAE, Saudi Arabia",
    color: "#11A385",
    image:
      "https://efg-final.s3.amazonaws.com/home-event-spec/Image%2016-02-2026%20at%202.46%E2%80%AFAM.png",
    href: "/events/opex-first",
  },
  {
    id: "data-ai-first",
    title: "Data & AI First",
    tagline: "Intelligence at Scale",
    description:
      "Data strategy, artificial intelligence, and machine learning — for the leaders building the intelligent, autonomous enterprise.",
    stats: "2 Editions · Kuwait, Qatar",
    color: "#7C3AED",
    image:
      "https://efg-final.s3.amazonaws.com/home-event-spec/Image%2016-02-2026%20at%202.47%E2%80%AFAM.png",
    href: "/events/data-ai-first",
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = [
  {
    hidden: { opacity: 0, y: 40, x: 30, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  },
  {
    hidden: { opacity: 0, y: 40, x: 10, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  },
  {
    hidden: { opacity: 0, y: 40, x: -10, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  },
  {
    hidden: { opacity: 0, y: 40, x: -30, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  },
];

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.1,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

export default function EventSeriesShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{
        background: "var(--black)",
        padding: "clamp(100px, 12vw, 160px) 0 clamp(120px, 14vw, 180px)",
      }}
    >
      {/* Gradient fade to next section */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: 120,
          background: "linear-gradient(to bottom, transparent 0%, var(--black-light) 100%)",
        }}
      />
      <div
        style={{
          maxWidth: 1320,
          margin: "0 auto",
          padding: "0 clamp(20px, 4vw, 60px)",
        }}
      >
        {/* ═══════════════════════════════════════════════════════════════
            SECTION HEADER — Centered Grand Reveal
            ═══════════════════════════════════════════════════════════════ */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          {/* Label */}
          <motion.div
            custom={0}
            variants={headerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex items-center justify-center gap-3"
            style={{ marginBottom: 16 }}
          >
            <span
              style={{
                width: 30,
                height: 1,
                background: "linear-gradient(to right, transparent, var(--orange))", // Fade in
              }}
            />
            <span
              className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600"
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "2.5px",
                textTransform: "uppercase",
                fontFamily: "var(--font-outfit)",
              }}
            >
              Global Scale
            </span>
            <span
              style={{
                width: 30,
                height: 1,
                background: "linear-gradient(to left, transparent, var(--orange))", // Fade in
              }}
            />
          </motion.div>

          {/* Title */}
          <motion.h2
            custom={1}
            variants={headerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(36px, 5vw, 60px)",
              letterSpacing: "-2px",
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            Four Worlds. One Stage.
          </motion.h2>

          {/* Description */}
          <motion.p
            custom={2}
            variants={headerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            style={{
              fontFamily: "var(--font-outfit)",
              fontWeight: 300,
              fontSize: "clamp(15px, 1.4vw, 17.5px)",
              color: "#A0A0A0",
              lineHeight: 1.65,
              maxWidth: 600,
              margin: "14px auto 0",
            }}
          >
            Each series is a universe of its own — built for a specific
            community, sharpened around a specific mission, alive with the
            people who are shaping that industry's future.
          </motion.p>
        </div>

        {/* ═══════════════════════════════════════════════════════════════
            THE FOUR PORTAL CARDS
            ═══════════════════════════════════════════════════════════════ */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-8"
          style={{
            gridTemplateColumns: "repeat(2, 1fr)",
          }}
        >
          {eventSeries.map((series, index) => (
            <motion.div
              key={series.id}
              variants={cardVariants[index]}
              custom={index}
              style={{
                marginTop: 0,
              }}
            >
              <PortalCard series={series} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Responsive grid styles */}
      <style jsx global>{`
        @media (max-width: 1024px) {
          .grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

/**
 * PortalCard — A cinematic reveal card with premium micro-interactions
 */
function PortalCard({
  series,
}: {
  series: (typeof eventSeries)[0];
}) {
  const accentColor = series.color;

  return (
    <Link
      href={series.href}
      className="group relative block w-full aspect-[16/9] md:aspect-[2/1] overflow-hidden rounded-[32px] cursor-pointer shadow-2xl transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]"
      style={{
        isolation: "isolate",
      }}
    >
      {/* ═══════════════════════════════════════════════════════════════
          LAYER 1: BACKGROUND IMAGE
          ═══════════════════════════════════════════════════════════════ */}
      <div className="absolute inset-0 transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105">
        <img
          src={series.image}
          alt={series.title}
          className="w-full h-full object-cover"
          style={{
            // Slightly darker for better text contrast
            filter: "brightness(0.85) saturate(1.1)",
          }}
        />
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          LAYER 2: GRADIENTS
          ═══════════════════════════════════════════════════════════════ */}

      {/* Base gradient for readability - stronger at bottom */}
      <div
        className="absolute inset-x-0 bottom-0 h-[90%] bg-gradient-to-t from-black via-black/80 to-transparent transition-opacity duration-500 group-hover:opacity-100 opacity-90"
      />

      {/* Additional dark overlay on hover to ensure text pops against any background */}
      <div
        className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />

      {/* Accent glow on hover - subtle colored light leak */}
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-40"
        style={{
          background: `radial-gradient(circle at 20% 100%, ${accentColor}, transparent 60%)`,
          mixBlendMode: "screen",
        }}
      />

      {/* ═══════════════════════════════════════════════════════════════
          LAYER 3: CONTENT
          ═══════════════════════════════════════════════════════════════ */}
      <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end items-start text-left z-10">

        {/* Top Right Arrow - Minimalist */}
        <div className="absolute top-6 right-6 md:top-8 md:right-8 w-10 h-10 rounded-full flex items-center justify-center border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-500 group-hover:bg-white/10 group-hover:border-white/20 group-hover:scale-110">
          <span className="text-white/80 text-lg transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
        </div>

        {/* Tagline - Very clean, uppercase */}
        <div
          className="font-outfit text-[11px] font-bold uppercase tracking-[0.25em] mb-3 opacity-90 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:-translate-y-4 shadow-sm"
          style={{ color: accentColor, textShadow: "0 2px 10px rgba(0,0,0,0.5)" }}
        >
          {series.tagline}
        </div>

        {/* Title - Refined size and weight */}
        <h3
          className="text-3xl md:text-4xl lg:text-[44px] font-display font-bold text-white mb-2 leading-[1.1] transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:-translate-y-4"
          style={{ textShadow: "0 4px 24px rgba(0,0,0,0.5)" }}
        >
          {series.title}
        </h3>

        {/* Description Container - Mask reveals text on hover */}
        <div className="relative overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] max-h-0 opacity-0 group-hover:max-h-[200px] group-hover:opacity-100 group-hover:-translate-y-1">
          <p className="text-white/95 font-outfit text-sm leading-relaxed max-w-lg pt-2 pb-4" style={{ textShadow: "0 2px 10px rgba(0,0,0,0.8)" }}>
            {series.description}
          </p>

          {/* Stats footer line */}
          <div className="flex items-center gap-3 pt-3 border-t border-white/20 w-full mb-1">
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: accentColor, boxShadow: `0 0 10px ${accentColor}` }}></span>
            <span className="text-white/70 text-[10px] uppercase tracking-widest font-outfit font-medium">{series.stats}</span>
          </div>
        </div>

      </div>
    </Link>
  );
}
