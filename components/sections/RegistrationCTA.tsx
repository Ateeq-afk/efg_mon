"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

/* ═══════════════════════════════════════════════════════════════
   EVENT OPTIONS — Easy to add/remove
   ═══════════════════════════════════════════════════════════════ */
const events = [
    { value: "majlis-suhoor-riyadh-mar-2026", label: "Majlis Al-Suhoor by CleverTap — Riyadh, Mar 2026", group: "Boardrooms" },
    { value: "iftar-stars-dubai-mar-2026", label: "Iftar under the Stars by CleverTap — Dubai, Mar 2026", group: "Boardrooms" },
    { value: "cyber-first-kuwait-apr-2026", label: "Cyber First — Kuwait, Apr 2026", group: "Conferences" },
    { value: "one-executive-day-riyadh-apr-2026", label: "ONE Executive Day KSA — Riyadh, Apr 2026", group: "Boardrooms" },
    { value: "data-ai-kuwait-may-2026", label: "Data & AI First — Kuwait, May 2026", group: "Conferences" },
    { value: "ot-security-uae-jun-2026", label: "OT Security First — UAE, Jun 2026", group: "Conferences" },
    { value: "cyber-first-ksa-sep-2026", label: "Cyber First — KSA, Sep 2026", group: "Conferences" },
    { value: "opex-first-ksa-oct-2026", label: "OPEX First — KSA, Oct 2026", group: "Conferences" },
    { value: "cyber-first-uae-nov-2026", label: "Cyber First — UAE, Nov 2026", group: "Conferences" },
];

const roles = ["C-Suite / VP", "Director", "Manager", "Specialist", "Other"];

/* Background image */
const BG_IMAGE =
    "https://efg-final.s3.eu-north-1.amazonaws.com/Good/4N8A0133.JPG";

export default function RegistrationCTA() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    const [form, setForm] = useState({
        event: "",
        name: "",
        email: "",
        company: "",
        role: "",
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    const inputStyle: React.CSSProperties = {
        width: "100%",
        padding: "14px 18px",
        borderRadius: 10,
        border: "1px solid rgba(255,255,255,0.08)",
        background: "rgba(255,255,255,0.04)",
        fontFamily: "var(--font-outfit)",
        fontSize: 14,
        fontWeight: 400,
        color: "white",
        outline: "none",
        transition: "border-color 0.3s ease, background 0.3s ease",
    };

    const selectStyle: React.CSSProperties = {
        ...inputStyle,
        appearance: "none" as const,
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='rgba(255,255,255,0.3)' d='M1.41 0L6 4.58 10.59 0 12 1.41l-6 6-6-6z'/%3E%3C/svg%3E")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right 16px center",
        paddingRight: 40,
    };

    const labelStyle: React.CSSProperties = {
        fontFamily: "var(--font-outfit)",
        fontSize: 11,
        fontWeight: 500,
        letterSpacing: "1.5px",
        textTransform: "uppercase",
        color: "rgba(255,255,255,0.35)",
        marginBottom: 8,
        display: "block",
    };

    return (
        <section
            ref={sectionRef}
            className="relative overflow-hidden"
            style={{
                background: "var(--black)",
                minHeight: 600,
            }}
        >
            <div
                className="reg-container"
                style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    maxWidth: 1320,
                    margin: "0 auto",
                    minHeight: 600,
                }}
            >
                {/* ═══════════════════════════════════════════════════════════════
            LEFT — Cinematic Image + Statement
            ═══════════════════════════════════════════════════════════════ */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative overflow-hidden"
                    style={{
                        borderRadius: "20px 0 0 20px",
                        minHeight: 600,
                    }}
                >
                    {/* Background Image */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={BG_IMAGE}
                        alt=""
                        style={{
                            position: "absolute",
                            inset: 0,
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "center",
                            filter: "brightness(0.35)",
                        }}
                    />

                    {/* Gradient overlay — darker at bottom */}
                    <div
                        className="absolute inset-0"
                        style={{
                            background: `linear-gradient(
                to bottom,
                rgba(10,10,10,0.3) 0%,
                rgba(10,10,10,0.2) 40%,
                rgba(10,10,10,0.7) 100%
              )`,
                        }}
                    />

                    {/* Right edge blend into the form side */}
                    <div
                        className="absolute inset-0"
                        style={{
                            background: `linear-gradient(
                to right,
                transparent 50%,
                rgba(10,10,10,0.95) 100%
              )`,
                        }}
                    />

                    {/* Content — Positioned at bottom */}
                    <div
                        className="absolute bottom-0 left-0 right-0 z-10"
                        style={{
                            padding: "0 clamp(28px, 3vw, 48px) clamp(40px, 5vw, 64px)",
                        }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
                        >
                            {/* Stat */}
                            <div style={{ marginBottom: 16 }}>
                                <span
                                    style={{
                                        fontFamily: "var(--font-display)",
                                        fontSize: "clamp(48px, 5vw, 72px)",
                                        fontWeight: 800,
                                        letterSpacing: "-3px",
                                        background: "linear-gradient(to bottom, #FFFFFF 0%, rgba(255,255,255,0.4) 100%)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                        backgroundClip: "text",
                                    }}
                                >
                                    5,000+
                                </span>
                            </div>

                            <p
                                style={{
                                    fontFamily: "var(--font-outfit)",
                                    fontSize: 15,
                                    fontWeight: 300,
                                    color: "rgba(255,255,255,0.5)",
                                    lineHeight: 1.5,
                                    maxWidth: 320,
                                    margin: 0,
                                }}
                            >
                                Senior technology leaders have already joined our
                                events across 5 GCC countries. Your seat is waiting.
                            </p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* ═══════════════════════════════════════════════════════════════
            RIGHT — Registration Form
            ═══════════════════════════════════════════════════════════════ */}
                <div
                    className="flex items-center"
                    style={{
                        padding: "clamp(40px, 5vw, 80px) clamp(28px, 4vw, 60px)",
                    }}
                >
                    <AnimatePresence mode="wait">
                        {!isSubmitted ? (
                            <motion.div
                                key="form"
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
                                style={{ width: "100%", maxWidth: 440 }}
                            >
                                {/* Header */}
                                <div style={{ marginBottom: 36 }}>
                                    <div
                                        className="flex items-center justify-center gap-3"
                                        style={{ marginBottom: 14 }}
                                    >
                                        <span
                                            style={{
                                                width: 30,
                                                height: 1,
                                                background: "#E8651A",
                                            }}
                                        />
                                        <span
                                            style={{
                                                fontSize: 11,
                                                fontWeight: 600,
                                                letterSpacing: "2.5px",
                                                textTransform: "uppercase",
                                                color: "#E8651A",
                                                fontFamily: "var(--font-outfit)",
                                            }}
                                        >
                                            Register Interest
                                        </span>
                                        <span
                                            style={{
                                                width: 30,
                                                height: 1,
                                                background: "#E8651A",
                                            }}
                                        />
                                    </div>

                                    <h2
                                        className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40"
                                        style={{
                                            fontFamily: "var(--font-display)",
                                            fontWeight: 800,
                                            fontSize: "clamp(28px, 3.5vw, 40px)",
                                            letterSpacing: "-1.5px",
                                            lineHeight: 1.1,
                                            margin: 0,
                                        }}
                                    >
                                        Secure Your Seat
                                    </h2>

                                    <p
                                        style={{
                                            fontFamily: "var(--font-outfit)",
                                            fontWeight: 300,
                                            fontSize: 14,
                                            color: "#606060",
                                            lineHeight: 1.6,
                                            margin: "10px 0 0 0",
                                        }}
                                    >
                                        Select an event and we&apos;ll reach out with early access details.
                                    </p>
                                </div>

                                {/* Form */}
                                <form onSubmit={handleSubmit}>
                                    {/* Event Dropdown */}
                                    <div style={{ marginBottom: 20 }}>
                                        <label style={labelStyle}>Event</label>
                                        <select
                                            required
                                            value={form.event}
                                            onChange={(e) =>
                                                setForm({ ...form, event: e.target.value })
                                            }
                                            className="reg-input"
                                            style={{
                                                ...selectStyle,
                                                color: form.event ? "white" : "rgba(255,255,255,0.3)",
                                            }}
                                        >
                                            <option value="" disabled>
                                                Select an event
                                            </option>
                                            <optgroup label="Conferences" style={{ background: "#1a1a1a", color: "#808080", fontStyle: "normal" }}>
                                                {events.filter(e => e.group === "Conferences").map((event) => (
                                                    <option
                                                        key={event.value}
                                                        value={event.value}
                                                        style={{ background: "#1a1a1a", color: "white" }}
                                                    >
                                                        {event.label}
                                                    </option>
                                                ))}
                                            </optgroup>
                                            <optgroup label="Boardrooms & Networking" style={{ background: "#1a1a1a", color: "#808080", fontStyle: "normal" }}>
                                                {events.filter(e => e.group === "Boardrooms").map((event) => (
                                                    <option
                                                        key={event.value}
                                                        value={event.value}
                                                        style={{ background: "#1a1a1a", color: "white" }}
                                                    >
                                                        {event.label}
                                                    </option>
                                                ))}
                                            </optgroup>
                                        </select>
                                    </div>

                                    {/* Name + Email */}
                                    <div
                                        className="reg-form-row"
                                        style={{
                                            display: "grid",
                                            gridTemplateColumns: "1fr 1fr",
                                            gap: 14,
                                            marginBottom: 14,
                                        }}
                                    >
                                        <div>
                                            <label style={labelStyle}>Full Name</label>
                                            <input
                                                type="text"
                                                required
                                                value={form.name}
                                                onChange={(e) =>
                                                    setForm({ ...form, name: e.target.value })
                                                }
                                                placeholder="Sarah Al-Rashid"
                                                className="reg-input"
                                                style={inputStyle}
                                            />
                                        </div>
                                        <div>
                                            <label style={labelStyle}>Business Email</label>
                                            <input
                                                type="email"
                                                required
                                                value={form.email}
                                                onChange={(e) =>
                                                    setForm({ ...form, email: e.target.value })
                                                }
                                                placeholder="sarah@company.com"
                                                className="reg-input"
                                                style={inputStyle}
                                            />
                                        </div>
                                    </div>

                                    {/* Company + Role */}
                                    <div
                                        className="reg-form-row"
                                        style={{
                                            display: "grid",
                                            gridTemplateColumns: "1fr 1fr",
                                            gap: 14,
                                            marginBottom: 28,
                                        }}
                                    >
                                        <div>
                                            <label style={labelStyle}>Company</label>
                                            <input
                                                type="text"
                                                required
                                                value={form.company}
                                                onChange={(e) =>
                                                    setForm({ ...form, company: e.target.value })
                                                }
                                                placeholder="Organization name"
                                                className="reg-input"
                                                style={inputStyle}
                                            />
                                        </div>
                                        <div>
                                            <label style={labelStyle}>Seniority</label>
                                            <select
                                                required
                                                value={form.role}
                                                onChange={(e) =>
                                                    setForm({ ...form, role: e.target.value })
                                                }
                                                className="reg-input"
                                                style={{
                                                    ...selectStyle,
                                                    color: form.role
                                                        ? "white"
                                                        : "rgba(255,255,255,0.3)",
                                                }}
                                            >
                                                <option value="" disabled>
                                                    Select role
                                                </option>
                                                {roles.map((role) => (
                                                    <option
                                                        key={role}
                                                        value={role}
                                                        style={{ background: "#1a1a1a", color: "white" }}
                                                    >
                                                        {role}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    {/* Submit */}
                                    <button
                                        type="submit"
                                        className="reg-submit-btn"
                                        style={{
                                            width: "100%",
                                            padding: "16px 36px",
                                            borderRadius: 12,
                                            border: "none",
                                            background: "#E8651A",
                                            fontFamily: "var(--font-outfit)",
                                            fontSize: 15,
                                            fontWeight: 600,
                                            color: "white",
                                            cursor: "pointer",
                                            transition: "all 0.4s ease",
                                            boxShadow: "0 4px 24px rgba(232,101,26,0.2)",
                                        }}
                                    >
                                        Register My Interest →
                                    </button>

                                    <p
                                        style={{
                                            fontFamily: "var(--font-outfit)",
                                            fontSize: 11,
                                            color: "rgba(255,255,255,0.2)",
                                            marginTop: 14,
                                            lineHeight: 1.5,
                                        }}
                                    >
                                        By registering, you agree to our Privacy Policy.
                                        We&apos;ll send event details only — no spam, ever.
                                    </p>
                                </form>
                            </motion.div>
                        ) : (
                            /* ═══════════════════════════════════════════
                               SUCCESS STATE
                               ═══════════════════════════════════════════ */
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
                                style={{ width: "100%", maxWidth: 440 }}
                            >
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 200,
                                        damping: 15,
                                        delay: 0.2,
                                    }}
                                    style={{
                                        width: 64,
                                        height: 64,
                                        borderRadius: "50%",
                                        background: "rgba(232,101,26,0.1)",
                                        border: "1px solid rgba(232,101,26,0.2)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        marginBottom: 28,
                                    }}
                                >
                                    <svg
                                        width="28"
                                        height="28"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="#E8651A"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                </motion.div>

                                <h3
                                    className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40"
                                    style={{
                                        fontFamily: "var(--font-display)",
                                        fontWeight: 800,
                                        fontSize: "clamp(24px, 3vw, 36px)",
                                        letterSpacing: "-1px",
                                        margin: "0 0 12px 0",
                                    }}
                                >
                                    You&apos;re on the list.
                                </h3>

                                <p
                                    style={{
                                        fontFamily: "var(--font-outfit)",
                                        fontWeight: 300,
                                        fontSize: 15,
                                        color: "#707070",
                                        lineHeight: 1.6,
                                        maxWidth: 380,
                                        margin: 0,
                                    }}
                                >
                                    We&apos;ll be in touch with exclusive access details
                                    for your selected event. See you there.
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* Styles */}
            <style jsx global>{`
        .reg-input:focus {
          border-color: rgba(232,101,26,0.4) !important;
          background: rgba(255,255,255,0.06) !important;
        }
        .reg-input::placeholder {
          color: rgba(255,255,255,0.2);
        }
        .reg-submit-btn:hover {
          background: #ff7a2e !important;
          box-shadow: 0 8px 32px rgba(232,101,26,0.35) !important;
          transform: translateY(-1px);
        }
        @media (max-width: 768px) {
          .reg-container {
            grid-template-columns: 1fr !important;
          }
          .reg-container > div:first-child {
            min-height: 280px !important;
            border-radius: 20px 20px 0 0 !important;
          }
          .reg-form-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
        </section>
    );
}
