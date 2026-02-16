"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Link from "next/link";

/* ═══════════════════════════════════════════════════════════════
   ROLE DATA — each role has a unique visual layout
   ═══════════════════════════════════════════════════════════════ */

const roles = [
    {
        id: "attendee",
        label: "I'm an Attendee",
        heroImage: "https://efg-final.s3.eu-north-1.amazonaws.com/home-event-spec/Cyber-First-Series-Pictures-and-Sponsors-33.jpg",
        heroCaption: "Networking lounge at Cyber First Kuwait 2025",
        statNumber: "5,000+",
        statLabel: "Senior Leaders Hosted",
        statDetail: "across 12 editions in 5 countries",
        quote: "Every person I spoke with was a decision-maker. The conversations were real, the connections were lasting, and I left with three partnerships we're still building on today.",
        quoteAuthor: "Sarah Al-Rashid",
        quoteOrg: "VP of Information Security, Saudi Telecom",
        features: [
            {
                title: "Curated for Your Role",
                desc: "Every attendee is a senior decision-maker. No padding, no fillers — just the people who shape budgets, strategy, and direction.",
            },
            {
                title: "Structured Networking",
                desc: "Matched introductions and invite-only roundtables. Every conversation is intentional.",
            },
            {
                title: "Beyond the Event",
                desc: "The network you build here stays active between conferences — relationships that compound over time.",
            },
        ],
        secondImage: "https://efg-final.s3.amazonaws.com/home-event-spec/Image%2016-02-2026%20at%204.18%E2%80%AFAM.png",
        secondCaption: "Majlis Al-Suhoor, Riyadh",
        cta: { text: "Explore Upcoming Events", href: "#timeline" },
    },
    {
        id: "sponsor",
        label: "I'm a Sponsor",
        heroImage: "https://efg-final.s3.amazonaws.com/home-event-spec/DSC08180.jpg",
        heroCaption: "Exhibition floor at OPEX First Saudi 2025",
        statNumber: "50+",
        statLabel: "Technology Partners",
        statDetail: "across 4 event series",
        quote: "We've sponsored technology events across the globe. Nothing matches the quality of audience that EFG delivers in the GCC. These are the people who sign the purchase orders.",
        quoteAuthor: "Mark Henderson",
        quoteOrg: "Regional Director, Palo Alto Networks",
        features: [
            {
                title: "Direct Access to Buyers",
                desc: "Face-to-face with CISOs, CTOs, and procurement leaders. No intermediaries, no gatekeepers.",
            },
            {
                title: "Thought Leadership Platform",
                desc: "Branded keynotes, panel moderation, and exclusive workshops — not just a logo on a banner.",
            },
            {
                title: "Multi-Event Reach",
                desc: "Build a sustained presence across 4 event series, 5 GCC countries, and 8 annual events.",
            },
        ],
        secondImage: "https://efg-final.s3.eu-north-1.amazonaws.com/home-event-spec/Cyber-First-Series-Pictures-and-Sponsors-33.jpg",
        secondCaption: "Sponsor showcase, Cyber First Kuwait",
        cta: { text: "Download Sponsorship Deck", href: "/sponsors" },
    },
    {
        id: "speaker",
        label: "I'm a Speaker",
        heroImage: "https://efg-final.s3.amazonaws.com/home-event-spec/Image%2016-02-2026%20at%203.52%E2%80%AFAM.png",
        heroCaption: "Main stage at Cyber First Qatar 2025",
        statNumber: "200+",
        statLabel: "Speakers Featured",
        statDetail: "across our event portfolio",
        quote: "The NetworkFirst boardroom was the most productive two hours of my quarter. Fifteen CISOs, no cameras, no agenda — just honest conversation about the problems we're all facing.",
        quoteAuthor: "Dr. Fatima Al-Kuwari",
        quoteOrg: "CISO, Qatar National Bank",
        features: [
            {
                title: "An Audience That Matters",
                desc: "Senior decision-makers in every seat. C-suite and VP-level leaders who came to learn and to act.",
            },
            {
                title: "Full Production Support",
                desc: "Professional AV, dedicated stage management, speaker prep sessions, and broadcast-grade production.",
            },
            {
                title: "Content That Lives On",
                desc: "Professional recordings, social-ready clips, and syndicated articles that extend your voice for months.",
            },
        ],
        secondImage: "https://efg-final.s3.amazonaws.com/home-event-spec/Image%2016-02-2026%20at%202.41%E2%80%AFAM.png",
        secondCaption: "Panel at OT Security First UAE",
        cta: { text: "Submit a Speaking Proposal", href: "/speakers" },
    },
];

/* ═══════════════════════════════════════════════════════════════
   SVG ICONS
   ═══════════════════════════════════════════════════════════════ */

function TargetIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="6" />
            <circle cx="12" cy="12" r="2" />
        </svg>
    );
}

function NetworkIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    );
}

function CommunityIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5" />
            <path d="M2 12l10 5 10-5" />
        </svg>
    );
}

const featureIcons = [TargetIcon, NetworkIcon, CommunityIcon];

/* ═══════════════════════════════════════════════════════════════
   ANIMATIONS
   ═══════════════════════════════════════════════════════════════ */

const contentVariants = {
    enter: {
        opacity: 0,
        y: 30,
        scale: 0.98,
    },
    center: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1] as const,
            staggerChildren: 0.06,
            delayChildren: 0.1,
        },
    },
    exit: {
        opacity: 0,
        y: -20,
        scale: 0.98,
        transition: { duration: 0.3, ease: [0.4, 0, 1, 1] as const },
    },
};

const childVariants = {
    enter: { opacity: 0, y: 20 },
    center: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
    },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
};

/* ═══════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function ExperienceMosaic() {
    const [activeIndex, setActiveIndex] = useState(0);
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
    const role = roles[activeIndex];

    return (
        <section
            ref={sectionRef}
            style={{
                background: "var(--black)",
                padding: "clamp(100px, 12vw, 160px) 0 clamp(120px, 14vw, 180px)",
            }}
        >
            <div
                style={{
                    maxWidth: 1320,
                    margin: "0 auto",
                    padding: "0 clamp(20px, 4vw, 60px)",
                }}
            >
                {/* ═══════════════════════════════════════════════════════
            SECTION HEADER — Matching site pattern exactly
            ═══════════════════════════════════════════════════════ */}
                <div style={{ textAlign: "center", marginBottom: 56 }}>
                    {/* Label with flanking lines */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="flex items-center justify-center gap-3"
                        style={{ marginBottom: 16 }}
                    >
                        <span
                            style={{
                                width: 30,
                                height: 1,
                                background: "linear-gradient(to right, transparent, var(--orange))",
                            }}
                        />
                        <span
                            style={{
                                fontFamily: "var(--font-outfit)",
                                fontSize: 11,
                                fontWeight: 600,
                                letterSpacing: "2.5px",
                                textTransform: "uppercase" as const,
                                color: "#E8651A",
                            }}
                        >
                            Your Experience
                        </span>
                        <span
                            style={{
                                width: 30,
                                height: 1,
                                background: "linear-gradient(to left, transparent, var(--orange))",
                            }}
                        />
                    </motion.div>

                    {/* Heading */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
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
                        What Brings You Here?
                    </motion.h2>

                    {/* Subtext */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        style={{
                            fontFamily: "var(--font-outfit)",
                            fontWeight: 300,
                            fontSize: "clamp(15px, 1.4vw, 17.5px)",
                            color: "#A0A0A0",
                            lineHeight: 1.65,
                            maxWidth: 520,
                            margin: "14px auto 0",
                        }}
                    >
                        Every seat at an EFG event is filled with intention. Tell us who you are — we&apos;ll show you what&apos;s here for you.
                    </motion.p>
                </div>

                {/* ═══════════════════════════════════════════════════════
            SEGMENTED CONTROL — Apple-style glass container
            ═══════════════════════════════════════════════════════ */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                    transition={{ duration: 0.6, delay: 0.35 }}
                    style={{ display: "flex", justifyContent: "center", marginBottom: 64 }}
                >
                    <div
                        style={{
                            position: "relative",
                            display: "inline-flex",
                            gap: 4,
                            padding: 4,
                            borderRadius: 999,
                            background: "rgba(255,255,255,0.04)",
                            border: "1px solid rgba(255,255,255,0.06)",
                            backdropFilter: "blur(12px)",
                        }}
                    >
                        {roles.map((r, i) => (
                            <button
                                key={r.id}
                                onClick={() => setActiveIndex(i)}
                                style={{
                                    position: "relative",
                                    zIndex: 2,
                                    padding: "10px 28px",
                                    borderRadius: 999,
                                    border: "none",
                                    background: "transparent",
                                    cursor: "pointer",
                                    fontFamily: "var(--font-outfit)",
                                    fontSize: 14,
                                    fontWeight: 600,
                                    letterSpacing: "0.3px",
                                    color: activeIndex === i ? "white" : "rgba(255,255,255,0.4)",
                                    transition: "color 0.3s ease",
                                    whiteSpace: "nowrap" as const,
                                }}
                            >
                                {activeIndex === i && (
                                    <motion.div
                                        layoutId="segmentedPill"
                                        style={{
                                            position: "absolute",
                                            inset: 0,
                                            borderRadius: 999,
                                            background: "linear-gradient(135deg, #E8651A 0%, #c4500f 100%)",
                                            boxShadow: "0 2px 20px rgba(232,101,26,0.3), inset 0 1px 0 rgba(255,255,255,0.15)",
                                        }}
                                        transition={{ type: "spring", stiffness: 400, damping: 35 }}
                                    />
                                )}
                                <span style={{ position: "relative", zIndex: 1 }}>{r.label}</span>
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* ═══════════════════════════════════════════════════════
            ROLE CONTENT — Asymmetric bento layout
            ═══════════════════════════════════════════════════════ */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={role.id}
                        variants={contentVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                    >
                        {/* ROW 1: Hero Photo + Stat + Quote */}
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                                gap: 20,
                                marginBottom: 20,
                            }}
                            className="experience-grid-row1"
                        >
                            {/* HERO PHOTO — Large cinematic shot */}
                            <motion.div
                                variants={childVariants}
                                className="group"
                                style={{
                                    position: "relative",
                                    borderRadius: 28,
                                    overflow: "hidden",
                                    gridRow: "span 2",
                                    minHeight: 440,
                                }}
                            >
                                <img
                                    src={role.heroImage}
                                    alt={role.heroCaption}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        transition: "transform 1.5s cubic-bezier(0.25, 1, 0.5, 1)",
                                    }}
                                    className="group-hover:scale-105"
                                />
                                <div
                                    style={{
                                        position: "absolute",
                                        inset: 0,
                                        background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.15) 40%, transparent 70%)",
                                    }}
                                />
                                <div style={{ position: "absolute", bottom: 28, left: 28, right: 28 }}>
                                    <span
                                        style={{
                                            fontFamily: "var(--font-outfit)",
                                            fontSize: 10,
                                            fontWeight: 500,
                                            letterSpacing: "2px",
                                            textTransform: "uppercase" as const,
                                            color: "rgba(255,255,255,0.45)",
                                        }}
                                    >
                                        {role.heroCaption}
                                    </span>
                                </div>
                            </motion.div>

                            {/* STAT CALLOUT */}
                            <motion.div
                                variants={childVariants}
                                style={{
                                    borderRadius: 28,
                                    padding: "40px 36px",
                                    display: "flex",
                                    flexDirection: "column" as const,
                                    justifyContent: "flex-end",
                                    background: "rgba(255,255,255,0.025)",
                                    border: "1px solid rgba(255,255,255,0.05)",
                                }}
                            >
                                <span
                                    style={{
                                        fontFamily: "var(--font-display)",
                                        fontWeight: 800,
                                        fontSize: "clamp(56px, 6vw, 80px)",
                                        letterSpacing: "-3px",
                                        lineHeight: 1,
                                        color: "var(--white)",
                                    }}
                                >
                                    {role.statNumber}
                                </span>
                                <span
                                    style={{
                                        fontFamily: "var(--font-display)",
                                        fontWeight: 700,
                                        fontSize: 20,
                                        color: "var(--white)",
                                        marginTop: 8,
                                        letterSpacing: "-0.5px",
                                    }}
                                >
                                    {role.statLabel}
                                </span>
                                <span
                                    style={{
                                        fontFamily: "var(--font-outfit)",
                                        fontWeight: 400,
                                        fontSize: 14,
                                        color: "#606060",
                                        marginTop: 4,
                                    }}
                                >
                                    {role.statDetail}
                                </span>
                            </motion.div>

                            {/* QUOTE */}
                            <motion.div
                                variants={childVariants}
                                style={{
                                    borderRadius: 28,
                                    padding: "36px",
                                    display: "flex",
                                    flexDirection: "column" as const,
                                    justifyContent: "center",
                                    background: "rgba(255,255,255,0.025)",
                                    border: "1px solid rgba(255,255,255,0.05)",
                                }}
                            >
                                {/* Quote mark */}
                                <span
                                    style={{
                                        fontFamily: "var(--font-display)",
                                        fontSize: 48,
                                        lineHeight: 1,
                                        color: "rgba(232,101,26,0.3)",
                                        marginBottom: 12,
                                    }}
                                >
                                    "
                                </span>
                                <p
                                    style={{
                                        fontFamily: "var(--font-display)",
                                        fontWeight: 500,
                                        fontSize: "clamp(15px, 1.3vw, 18px)",
                                        lineHeight: 1.55,
                                        color: "rgba(255,255,255,0.8)",
                                        fontStyle: "italic",
                                        margin: 0,
                                    }}
                                >
                                    {role.quote}
                                </p>
                                <div
                                    className="flex items-center gap-3"
                                    style={{ marginTop: 20 }}
                                >
                                    <span style={{ width: 20, height: 1, background: "#E8651A" }} />
                                    <span
                                        style={{
                                            fontFamily: "var(--font-outfit)",
                                            fontSize: 11,
                                            fontWeight: 500,
                                            letterSpacing: "1px",
                                            textTransform: "uppercase" as const,
                                            color: "#505050",
                                        }}
                                    >
                                        {role.quoteAuthor}, {role.quoteOrg}
                                    </span>
                                </div>
                            </motion.div>
                        </div>

                        {/* ROW 2: Three feature blocks + Second photo */}
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(4, 1fr)",
                                gap: 20,
                            }}
                            className="experience-grid-row2"
                        >
                            {role.features.map((feature, i) => {
                                const Icon = featureIcons[i];
                                return (
                                    <motion.div
                                        key={i}
                                        variants={childVariants}
                                        className="group"
                                        style={{
                                            borderRadius: 28,
                                            padding: "36px 32px",
                                            background: "rgba(255,255,255,0.025)",
                                            border: "1px solid rgba(255,255,255,0.05)",
                                            transition: "border-color 0.5s ease, background 0.5s ease",
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                                            e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)";
                                            e.currentTarget.style.background = "rgba(255,255,255,0.025)";
                                        }}
                                    >
                                        {/* Icon */}
                                        <div
                                            style={{
                                                color: "#E8651A",
                                                marginBottom: 20,
                                                opacity: 0.7,
                                            }}
                                        >
                                            <Icon />
                                        </div>
                                        <h4
                                            style={{
                                                fontFamily: "var(--font-display)",
                                                fontWeight: 700,
                                                fontSize: 18,
                                                color: "var(--white)",
                                                letterSpacing: "-0.3px",
                                                marginBottom: 10,
                                                lineHeight: 1.25,
                                            }}
                                        >
                                            {feature.title}
                                        </h4>
                                        <p
                                            style={{
                                                fontFamily: "var(--font-outfit)",
                                                fontWeight: 300,
                                                fontSize: 14,
                                                color: "#808080",
                                                lineHeight: 1.6,
                                                margin: 0,
                                            }}
                                        >
                                            {feature.desc}
                                        </p>
                                    </motion.div>
                                );
                            })}

                            {/* SECOND PHOTO */}
                            <motion.div
                                variants={childVariants}
                                className="group"
                                style={{
                                    position: "relative",
                                    borderRadius: 28,
                                    overflow: "hidden",
                                    minHeight: 220,
                                }}
                            >
                                <img
                                    src={role.secondImage}
                                    alt={role.secondCaption}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        transition: "transform 1.5s cubic-bezier(0.25, 1, 0.5, 1)",
                                    }}
                                    className="group-hover:scale-105"
                                />
                                <div
                                    style={{
                                        position: "absolute",
                                        inset: 0,
                                        background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)",
                                    }}
                                />
                                <div style={{ position: "absolute", bottom: 20, left: 20 }}>
                                    <span
                                        style={{
                                            fontFamily: "var(--font-outfit)",
                                            fontSize: 10,
                                            fontWeight: 500,
                                            letterSpacing: "1.5px",
                                            textTransform: "uppercase" as const,
                                            color: "rgba(255,255,255,0.5)",
                                        }}
                                    >
                                        {role.secondCaption}
                                    </span>
                                </div>
                            </motion.div>
                        </div>

                        {/* CTA */}
                        <motion.div
                            variants={childVariants}
                            style={{ textAlign: "center", marginTop: 48 }}
                        >
                            <Link
                                href={role.cta.href}
                                className="group/cta"
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: 8,
                                    fontFamily: "var(--font-outfit)",
                                    fontSize: 14,
                                    fontWeight: 600,
                                    letterSpacing: "0.5px",
                                    color: "#E8651A",
                                    textDecoration: "none",
                                    transition: "color 0.3s ease",
                                }}
                            >
                                <span>{role.cta.text}</span>
                                <span
                                    style={{
                                        display: "inline-block",
                                        transition: "transform 0.3s ease",
                                    }}
                                    className="group-hover/cta:translate-x-1"
                                >
                                    →
                                </span>
                            </Link>
                        </motion.div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Responsive grid */}
            <style jsx global>{`
        @media (max-width: 1024px) {
          .experience-grid-row1 {
            grid-template-columns: 1fr !important;
          }
          .experience-grid-row1 > *:first-child {
            grid-row: span 1 !important;
            min-height: 300px !important;
          }
          .experience-grid-row2 {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 640px) {
          .experience-grid-row1 {
            grid-template-columns: 1fr !important;
          }
          .experience-grid-row2 {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
        </section>
    );
}
