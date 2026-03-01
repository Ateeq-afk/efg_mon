"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Footer } from "@/components/sections";

// =============================================================================
// BRAND COLORS - Teal/Dark theme for Data & AI First Kuwait
// =============================================================================
const TEAL = "#14B8A6";
const TEAL_BRIGHT = "#2DD4BF";
const DARK_BG = "#0A0F0F";
const CARD_BG = "#0F1515";

const EASE = [0.16, 1, 0.3, 1] as const;

// =============================================================================
// DATA FROM BRIEF
// =============================================================================
const EVENT_DATA = {
  title: "Data & AI First Kuwait",
  year: "2026",
  tagline: "Turning Data & AI into Regulated, Profitable, and Scalable Solutions",
  date: "May 18, 2026",
  location: "Kuwait City, Kuwait",
  targetDate: new Date("2026-05-18T09:00:00"),
};

const STATS = [
  { value: "220+", label: "Delegates" },
  { value: "25+", label: "Industry Speakers" },
  { value: "15+", label: "Sponsors" },
  { value: "8", label: "Awards" },
  { value: "4", label: "Panel Discussions" },
];

const MARKET_STATS = [
  { prefix: "USD", value: "43.36", suffix: "B", label: "Kuwait ICT Market by 2030", sub: "Growing from $27.12B current valuation" },
  { prefix: "USD", value: "9", suffix: "B", label: "AI & Digital Investment", sub: "$3B AI + $6B digital transformation" },
  { prefix: "USD", value: "800", suffix: "M", label: "KOC Digital Transformation", sub: "11 sub-projects across oil sector" },
  { prefix: "JOBS", value: "50", suffix: "K+", label: "New Tech Jobs by 2030", sub: "KD 1B annual revenues projected" },
];

const STRATEGIC_THEMES = [
  "Vision 2035 Roadmap",
  "National Data Sovereignty",
  "Digital Identity & e-Government",
  "AI & Data Driven Transformation",
  "Economic & Social Impact",
  "Ethical Governance & Mitigation",
  "Data Ecosystem & Privacy",
  "Women in Technology",
  "Public Sector AI Modernization",
  "Digital Trust & Threat Detection",
  "AI Risk & Compliance",
  "Resilient Cloud Infrastructure",
];

const AGENDA = [
  { time: "08:00 – 09:00", type: "Break", title: "Registration, Networking & Refreshments" },
  { time: "09:00 – 09:15", type: "Opening", title: "Welcome Remarks & Opening Ceremony", desc: "Welcome Address by Events First Group (EFG)" },
  { time: "09:15 – 09:30", type: "Keynote", title: "Opening Keynote", desc: "Kuwait's Transformative Journey & Catalyzing Vision — Roadmap to becoming a regional AI leader" },
  { time: "09:30 – 10:15", type: "Panel", title: "Panel Discussion 1 – AI & Data Ecosystem", desc: "Shaping Kuwait's AI & Data Ecosystem — Vision 2035 to Execution, Strategic Integration, Public-Private Partnerships & GenAI Applications" },
  { time: "10:15 – 10:30", type: "Presentation", title: "Sponsor Presentation 1" },
  { time: "10:30 – 11:00", type: "Break", title: "VIP Exhibition Tour & Networking Break" },
  { time: "11:00 – 11:40", type: "Panel", title: "Panel Discussion 2 – Data Infrastructure", desc: "Building a Robust Data Ecosystem — National Data Sovereignty, Privacy Frameworks & Resilient Cloud Infrastructure" },
  { time: "11:45 – 12:00", type: "Presentation", title: "Edge AI & IoT for Real-Time Applications" },
  { time: "12:00 – 12:15", type: "Presentation", title: "AI for Sustainability, Energy & Oil and Gas" },
  { time: "12:15 – 13:00", type: "Panel", title: "Panel Discussion 3 – AI Governance & Trust", desc: "AI-Driven Transformation — Mitigating Threats, Bias Mitigation, Ethical Compliance & Digital Trust" },
  { time: "13:00 – 13:30", type: "Break", title: "Prayer & Networking Break" },
  { time: "13:30 – 13:45", type: "Presentation", title: "Sponsor Presentation 2" },
  { time: "13:45 – 14:30", type: "Panel", title: "Panel Discussion 4 – Digital Government", desc: "Advancing e-Government & Digital Identity — Biometrics, Citizen Services & National Security" },
  { time: "14:30 – 14:45", type: "Presentation", title: "AI Impact in Organisations", desc: "Operational risks, decision making, customer service" },
  { time: "14:45 – 15:00", type: "Awards", title: "Awards Ceremony & Close of Conference" },
];

const SPEAKERS = [
  { name: "Dr Khalid Al Begain", title: "President", company: "KCST", initials: "DK" },
  { name: "Mai AlOwaish", title: "CEO", company: "CINET", initials: "MA" },
  { name: "Sudhakar Nibhanupudi", title: "Group Chief Data Officer", company: "National Bank of Kuwait", initials: "SN" },
  { name: "Iyad Atieh", title: "CISO", company: "Alghanim Industries", initials: "IA" },
  { name: "Abdullah AlNusef", title: "Chief Data Officer", company: "Bank Boubyan", initials: "AA" },
  { name: "Abdulmohsen Alsulaimi", title: "Group CTO", company: "Towell International Holding", initials: "AS" },
  { name: "Amr Wageeh", title: "General Counsel & FDI Policy Advisor", company: "KDIPA", initials: "AW" },
];

const AWARDS = [
  "AI Transformation Leader",
  "Data-Driven Innovation",
  "Public Sector AI & Data Impact",
  "AI Ethics & Governance Champion",
  "Data & AI Ecosystem Contributor",
  "AI & Data Visionary Award",
  "Emerging AI & Data Talent",
  "AI & Data Educator / Mentor",
];

const ATTENDEE_ROLES = [
  "Government Officials & Senior Advisors",
  "Chief Information Officer (CIO)",
  "Chief Technology Officer (CTO)",
  "Chief Data Officer (CDO)",
  "Chief AI Officer (CAIO)",
  "Chief Digital Officer",
  "Head of Data Science",
  "Head of ML / AI",
  "Data & AI Architect",
  "Director of Data Engineering",
  "Head of Digital Transformation",
  "Business Unit & Innovation Leads",
  "Academics & Researchers",
];

const INDUSTRIES = [
  { name: "Government & Public Sector", pct: 20 },
  { name: "Technology", pct: 15 },
  { name: "Banking & Financial Services", pct: 15 },
  { name: "Energy", pct: 10 },
  { name: "Transportation", pct: 10 },
  { name: "Education", pct: 10 },
  { name: "Healthcare", pct: 10 },
  { name: "Manufacturing & Retail", pct: 10 },
];

// =============================================================================
// COUNTDOWN HOOK
// =============================================================================
function useCountdown(targetDate: Date) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    };
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return timeLeft;
}

// =============================================================================
// HERO SECTION
// =============================================================================
function Hero() {
  const countdown = useCountdown(EVENT_DATA.targetDate);

  return (
    <section className="relative min-h-screen w-full overflow-hidden" style={{ background: DARK_BG }}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://efg-final.s3.eu-north-1.amazonaws.com/ai-face-teal.jpg"
          alt="AI visualization"
          fill
          className="object-cover object-right opacity-60"
          priority
        />
        <div className="absolute inset-0" style={{ background: `linear-gradient(to right, ${DARK_BG} 30%, transparent 70%)` }} />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen">
        <div className="flex flex-col justify-center px-6 md:px-16 lg:px-24 py-32 max-w-3xl">
          {/* Series Label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-8 h-[2px]" style={{ background: TEAL }} />
            <span className="text-xs font-semibold tracking-[3px] uppercase" style={{ color: TEAL }}>
              Data & AI First Series · Kuwait
            </span>
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold mb-8 w-fit"
            style={{ background: `${TEAL}20`, color: TEAL, border: `1px solid ${TEAL}40` }}
          >
            Inaugural Edition · 18 May 2026
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span style={{ color: TEAL }}>Data & AI First</span>
            <br />
            <span className="text-white">Kuwait</span>
            <span style={{ color: TEAL }}> 2026</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-gray-400 mt-6 max-w-lg"
          >
            {EVENT_DATA.tagline}
          </motion.p>

          {/* Date & Location */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center gap-6 mt-8 text-sm text-gray-500"
          >
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {EVENT_DATA.date}
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {EVENT_DATA.location}
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap gap-4 mt-10"
          >
            <Link
              href="#register"
              className="px-8 py-4 rounded-full font-semibold text-black transition-all hover:scale-105"
              style={{ background: TEAL }}
            >
              Reserve Your Seat
            </Link>
            <Link
              href="#sponsors"
              className="px-8 py-4 rounded-full font-semibold text-white border border-white/20 hover:border-white/40 transition-all"
            >
              Become a Sponsor
            </Link>
          </motion.div>
        </div>

        {/* Countdown - Right side */}
        <div className="hidden lg:flex items-end justify-end flex-1 pb-12 pr-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-right"
          >
            <div className="text-xs font-semibold tracking-[3px] uppercase mb-4" style={{ color: TEAL }}>
              Inaugural Edition
            </div>
            <div className="flex gap-4">
              {[
                { value: countdown.days, label: "Days" },
                { value: countdown.hours, label: "Hrs" },
                { value: countdown.minutes, label: "Min" },
                { value: countdown.seconds, label: "Sec" },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <div className="text-4xl font-bold text-white">{String(item.value).padStart(2, "0")}</div>
                  <div className="text-xs text-gray-500 mt-1">{item.label}</div>
                </div>
              ))}
            </div>
            <Link
              href="#register"
              className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-full text-sm font-semibold text-black"
              style={{ background: TEAL }}
            >
              Register <span>→</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// =============================================================================
// STATS BAR
// =============================================================================
function StatsBar() {
  return (
    <section className="w-full py-8 border-y border-white/10" style={{ background: CARD_BG }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold" style={{ color: TEAL }}>{stat.value}</div>
              <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// =============================================================================
// MARKET CONTEXT
// =============================================================================
function MarketContext() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 px-6" style={{ background: DARK_BG }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-[3px] uppercase" style={{ color: TEAL }}>
            The Opportunity
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            <span className="text-white">Kuwait's AI & Data Market</span>
            <br />
            <span style={{ color: TEAL }}>Is Accelerating</span>
          </h2>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Aligned with Kuwait Vision 2035, the nation is building a knowledge-based economy powered by AI, big data, and digital infrastructure.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MARKET_STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-2xl border border-white/10"
              style={{ background: CARD_BG }}
            >
              <div className="text-xs font-semibold text-gray-500 mb-2">{stat.prefix}</div>
              <div className="text-4xl font-bold" style={{ color: TEAL }}>
                {stat.value}<span className="text-2xl">{stat.suffix}</span>
              </div>
              <div className="text-sm text-white mt-3">{stat.label}</div>
              <div className="text-xs text-gray-500 mt-1">{stat.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// =============================================================================
// STRATEGIC THEMES
// =============================================================================
function StrategicThemes() {
  const [activeTheme, setActiveTheme] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 px-6" style={{ background: CARD_BG }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-12"
        >
          <span className="text-xs font-semibold tracking-[3px] uppercase" style={{ color: TEAL }}>
            What We Cover
          </span>
          <h2 className="text-4xl font-bold text-white mt-4">12 Strategic Focus Areas</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Theme List */}
          <div className="space-y-2">
            {STRATEGIC_THEMES.map((theme, i) => (
              <motion.button
                key={theme}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.05 }}
                onClick={() => setActiveTheme(i)}
                className={`w-full flex items-center gap-4 p-4 rounded-xl text-left transition-all ${
                  activeTheme === i ? "bg-white/10" : "hover:bg-white/5"
                }`}
              >
                <span
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold"
                  style={{ background: activeTheme === i ? TEAL : "transparent", color: activeTheme === i ? "black" : TEAL }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className={activeTheme === i ? "text-white font-medium" : "text-gray-400"}>
                  {theme}
                </span>
              </motion.button>
            ))}
          </div>

          {/* Active Theme Detail */}
          <motion.div
            key={activeTheme}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-8 rounded-2xl border border-white/10"
            style={{ background: DARK_BG }}
          >
            <div className="text-6xl font-bold mb-6" style={{ color: `${TEAL}30` }}>
              {String(activeTheme + 1).padStart(2, "0")}
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">{STRATEGIC_THEMES[activeTheme]}</h3>
            <p className="text-gray-400">
              Explore how {STRATEGIC_THEMES[activeTheme].toLowerCase()} is shaping Kuwait's digital transformation 
              and driving innovation across public and private sectors.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// =============================================================================
// AGENDA
// =============================================================================
function AgendaSection() {
  const [filter, setFilter] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filters = ["All", "Panels", "Keynotes", "Presentations", "Breaks"];
  const filteredAgenda = filter === "All" 
    ? AGENDA 
    : AGENDA.filter(item => {
        if (filter === "Panels") return item.type === "Panel";
        if (filter === "Keynotes") return item.type === "Keynote" || item.type === "Opening";
        if (filter === "Presentations") return item.type === "Presentation";
        if (filter === "Breaks") return item.type === "Break";
        return true;
      });

  return (
    <section ref={ref} id="agenda" className="py-24 px-6" style={{ background: DARK_BG }}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <span className="text-xs font-semibold tracking-[3px] uppercase" style={{ color: TEAL }}>
            Full Day Programme
          </span>
          <h2 className="text-4xl font-bold text-white mt-4">Agenda</h2>
          <p className="text-gray-500 mt-2">Draft agenda — subject to change.</p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === f ? "text-black" : "text-gray-400 hover:text-white"
              }`}
              style={{ background: filter === f ? TEAL : "transparent" }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Agenda Items */}
        <div className="space-y-4">
          {filteredAgenda.map((item, i) => (
            <motion.div
              key={item.time + item.title}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.05 }}
              className="p-6 rounded-xl border border-white/10"
              style={{ background: CARD_BG }}
            >
              <div className="flex flex-wrap items-start gap-4">
                <div className="text-sm font-mono" style={{ color: TEAL }}>{item.time}</div>
                <div
                  className="px-2 py-1 rounded text-xs font-semibold"
                  style={{
                    background: item.type === "Panel" ? `${TEAL}20` : item.type === "Break" ? "#ffffff10" : `${TEAL}10`,
                    color: item.type === "Break" ? "#888" : TEAL,
                  }}
                >
                  {item.type}
                </div>
              </div>
              <h4 className="text-lg font-semibold text-white mt-3">{item.title}</h4>
              {item.desc && <p className="text-sm text-gray-400 mt-2">{item.desc}</p>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// =============================================================================
// SPEAKERS
// =============================================================================
function SpeakersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 px-6" style={{ background: CARD_BG }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="flex justify-between items-end mb-12"
        >
          <div>
            <span className="text-xs font-semibold tracking-[3px] uppercase" style={{ color: TEAL }}>
              The Faculty
            </span>
            <h2 className="text-4xl font-bold text-white mt-4">Who's Speaking</h2>
          </div>
          <div className="text-2xl font-bold" style={{ color: TEAL }}>7+ Confirmed</div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SPEAKERS.map((speaker, i) => (
            <motion.div
              key={speaker.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl border border-white/10 text-center"
              style={{ background: DARK_BG }}
            >
              <div
                className="w-20 h-20 rounded-full mx-auto flex items-center justify-center text-xl font-bold mb-4"
                style={{ background: `${TEAL}20`, color: TEAL }}
              >
                {speaker.initials}
              </div>
              <h4 className="font-semibold text-white">{speaker.name}</h4>
              <p className="text-sm text-gray-500 mt-1">{speaker.title}</p>
              <p className="text-sm" style={{ color: TEAL }}>{speaker.company}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// =============================================================================
// AWARDS
// =============================================================================
function AwardsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 px-6" style={{ background: DARK_BG }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <span className="text-xs font-semibold tracking-[3px] uppercase" style={{ color: TEAL }}>
            Recognition
          </span>
          <h2 className="text-4xl font-bold text-white mt-4">Data & AI First Awards 2026</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {AWARDS.map((award, i) => (
            <motion.div
              key={award}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.05 }}
              className="p-6 rounded-xl border border-white/10 hover:border-teal-500/50 transition-all cursor-pointer group"
              style={{ background: CARD_BG }}
            >
              <div className="text-sm font-bold mb-2" style={{ color: TEAL }}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <h4 className="font-semibold text-white group-hover:text-teal-400 transition-colors">
                {award}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// =============================================================================
// WHO SHOULD ATTEND
// =============================================================================
function AttendeeSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 px-6" style={{ background: CARD_BG }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <span className="text-xs font-semibold tracking-[3px] uppercase" style={{ color: TEAL }}>
            Your Peers
          </span>
          <h2 className="text-4xl font-bold text-white mt-4">Who Should Attend</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Roles */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">By Role</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {ATTENDEE_ROLES.map((role) => (
                <div key={role} className="flex items-center gap-3 text-gray-400">
                  <div className="w-2 h-2 rounded-full" style={{ background: TEAL }} />
                  {role}
                </div>
              ))}
            </div>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Key Industries</h3>
            <div className="space-y-3">
              {INDUSTRIES.map((ind) => (
                <div key={ind.name} className="flex items-center gap-4">
                  <div className="flex-1">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">{ind.name}</span>
                      <span style={{ color: TEAL }}>{ind.pct}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full"
                        style={{ width: `${ind.pct * 5}%`, background: TEAL }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="flex justify-center gap-12 mt-16 pt-12 border-t border-white/10"
        >
          <div className="text-center">
            <div className="text-3xl font-bold" style={{ color: TEAL }}>250+</div>
            <div className="text-sm text-gray-500">Senior Leaders</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold" style={{ color: TEAL }}>8</div>
            <div className="text-sm text-gray-500">Industries</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold" style={{ color: TEAL }}>1</div>
            <div className="text-sm text-gray-500">Transformative Day</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// =============================================================================
// REGISTRATION CTA
// =============================================================================
function RegistrationCTA() {
  const countdown = useCountdown(EVENT_DATA.targetDate);

  return (
    <section id="register" className="py-24 px-6" style={{ background: DARK_BG }}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Be Part of Data & AI First Kuwait
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Delegates */}
          <div className="p-8 rounded-2xl border border-white/10" style={{ background: CARD_BG }}>
            <div className="text-xs font-semibold text-gray-500 mb-2">For Delegates</div>
            <h3 className="text-2xl font-bold text-white mb-4">Reserve Your Seat</h3>
            <p className="text-gray-400 mb-6">
              Join 250+ senior leaders for a full-day summit on May 18, 2026 in Kuwait City.
            </p>
            <div className="flex gap-4 mb-6">
              {[
                { value: countdown.days, label: "Days" },
                { value: countdown.hours, label: "Hrs" },
                { value: countdown.minutes, label: "Min" },
                { value: countdown.seconds, label: "Sec" },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <div className="text-2xl font-bold text-white">{String(item.value).padStart(2, "0")}</div>
                  <div className="text-xs text-gray-500">{item.label}</div>
                </div>
              ))}
            </div>
            <Link
              href="mailto:sanjana@eventsfirstgroup.com?subject=Data%20%26%20AI%20First%20Kuwait%202026%20Registration"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-black"
              style={{ background: TEAL }}
            >
              Register Now <span>→</span>
            </Link>
          </div>

          {/* Sponsors */}
          <div id="sponsors" className="p-8 rounded-2xl border border-white/10" style={{ background: CARD_BG }}>
            <div className="text-xs font-semibold text-gray-500 mb-2">For Brands & Vendors</div>
            <h3 className="text-2xl font-bold text-white mb-4">Explore Partnerships</h3>
            <p className="text-gray-400 mb-6">
              Connect with Kuwait's top decision-makers in AI and data.
            </p>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <div className="text-xs text-gray-500">Delegates</div>
                <div className="text-xl font-bold" style={{ color: TEAL }}>250+</div>
              </div>
              <div className="text-center">
                <div className="text-xs text-gray-500">Speakers</div>
                <div className="text-xl font-bold" style={{ color: TEAL }}>25+</div>
              </div>
              <div className="text-center">
                <div className="text-xs text-gray-500">Sponsors</div>
                <div className="text-xl font-bold" style={{ color: TEAL }}>15+</div>
              </div>
            </div>
            <Link
              href="mailto:mayur@eventsfirstgroup.com?subject=Data%20%26%20AI%20First%20Kuwait%202026%20Sponsorship"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold border border-white/20 text-white hover:border-white/40 transition-all"
            >
              Get Partnership Deck <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// =============================================================================
// VENUE
// =============================================================================
function VenueSection() {
  return (
    <section className="py-24 px-6" style={{ background: CARD_BG }}>
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-semibold tracking-[3px] uppercase" style={{ color: TEAL }}>
              The Venue
            </span>
            <h2 className="text-4xl font-bold text-white mt-4">Kuwait City</h2>
            <p className="text-gray-400 mt-6">
              Data & AI First Kuwait 2026 will be hosted at a premier venue in Kuwait City. 
              Final venue details will be announced shortly.
            </p>
          </div>
          <div className="space-y-4">
            {[
              { label: "Location", value: "Kuwait City" },
              { label: "Date", value: "May 18, 2026" },
              { label: "Time", value: "8:00 AM – 3:00 PM" },
              { label: "Format", value: "Full-Day Summit" },
            ].map((item) => (
              <div key={item.label} className="flex justify-between py-3 border-b border-white/10">
                <span className="text-gray-500">{item.label}</span>
                <span className="text-white font-medium">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// =============================================================================
// MAIN PAGE
// =============================================================================
export default function KuwaitEventPage() {
  return (
    <main className="min-h-screen" style={{ background: DARK_BG }}>
      <Hero />
      <StatsBar />
      <MarketContext />
      <StrategicThemes />
      <AgendaSection />
      <SpeakersSection />
      <AwardsSection />
      <AttendeeSection />
      <RegistrationCTA />
      <VenueSection />
      <Footer />
    </main>
  );
}
