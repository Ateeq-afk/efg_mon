"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from "framer-motion";
import Link from "next/link";

// ═══════════════════════════════════════════════════════════════
// EVENT DATA
// ═══════════════════════════════════════════════════════════════

type ConferenceEvent = {
  type: "conference";
  id: string;
  series: string;
  seriesColor: string;
  isLight?: boolean;
  edition: string;
  title: string;
  date: Date;
  day: number;
  weekday: string;
  location: string;
  venue: string;
  attendees: string;
  href: string;
  image?: string;
  highlight?: string;
  topic?: string;
  objectPosition?: string;
};

type BoardroomEvent = {
  type: "boardroom";
  id: string;
  title: string;
  series?: string;
  seriesColor?: string;
  date: Date;
  day: number;
  monthAbbr: string;
  location: string;
  host: string;
  href: string;
  image?: string;
  highlight?: string;
  topic?: string;
  objectPosition?: string;
};

type TimelineEvent = ConferenceEvent | BoardroomEvent;

type MonthData = {
  month: string;
  events: TimelineEvent[];
};

const timelineData: MonthData[] = [
  {
    month: "MARCH",
    events: [
      {
        type: "boardroom",
        id: "clevertap-riyadh",
        title: "Majlis Al-Suhoor by CleverTap",
        series: "Network First",
        seriesColor: "#E8651A",
        date: new Date("2026-03-02"),
        day: 2,
        monthAbbr: "MAR",
        location: "JW Marriott, Riyadh",
        host: "CleverTap",
        href: "/networkfirst",
        image: "https://efg-final.s3.amazonaws.com/home-event-spec/Image%2016-02-2026%20at%204.18%E2%80%AFAM.png",
        highlight: "A Celebration of Flavor, Fellowship, and Future",
        topic: "",
      },
      {
        type: "boardroom",
        id: "clevertap-dubai",
        title: "Iftar under the Stars by CleverTap",
        series: "Network First",
        seriesColor: "#E8651A",
        date: new Date("2026-03-05"),
        day: 5,
        monthAbbr: "MAR",
        location: "Madinat Jumeirah, Dubai",
        host: "CleverTap",
        href: "/networkfirst",
        image: "https://efg-final.s3.amazonaws.com/home-event-spec/Image%2016-02-2026%20at%204.21%E2%80%AFAM.png",
        highlight: "A Celebration of Flavor, Fellowship, and Future",
        topic: "",
      },
    ],
  },
  {
    month: "APRIL",
    events: [
      {
        type: "conference",
        id: "cyber-first-kuwait",
        series: "Cyber First",
        seriesColor: "#01BBF5",
        edition: "3RD EDITION",
        title: "Cyber First Kuwait",
        date: new Date("2026-04-21"),
        day: 21,
        weekday: "TUE",
        location: "Kuwait City, Kuwait",
        venue: "Venue TBA",
        attendees: "500+ Attendees",
        href: "/events/cyber-first",
        image: "https://efg-final.s3.eu-north-1.amazonaws.com/home-event-spec/Cyber-First-Series-Pictures-and-Sponsors-33.jpg",
        highlight: "The premier gathering of Kuwait's cybersecurity elite.",
        topic: "Cyber Resilience for Vision 2035 - Powered by AI, Secured by Intelligence",
      },
      {
        type: "boardroom",
        id: "outsystems-riyadh",
        title: "ONE Executive Day KSA",
        series: "Network First",
        seriesColor: "#E8651A",
        date: new Date("2026-04-29"),
        day: 29,
        monthAbbr: "APR",
        location: "JW Marriott Hotel Riyadh",
        host: "OutSystems",
        href: "/networkfirst",
        image: "https://efg-final.s3.amazonaws.com/home-event-spec/outsystems.webp",
        highlight: "ONE Day to Explore the Power of Agentic Enterprise and Low-Code",
        topic: "Agentic Enterprise & Low-Code",
      },
    ],
  },
  {
    month: "MAY",
    events: [
      {
        type: "conference",
        id: "data-first-kuwait",
        series: "Data & AI First",
        seriesColor: "#7C3AED",
        edition: "1ST EDITION",
        title: "Data First Kuwait",
        date: new Date("2026-05-18"),
        day: 18,
        weekday: "MON",
        location: "Kuwait City, Kuwait",
        venue: "Venue TBA",
        attendees: "500+ Attendees",
        href: "/events/data-ai-first",
        image: "https://efg-final.s3.amazonaws.com/home-event-spec/Image%2016-02-2026%20at%202.57%E2%80%AFAM.png",
        highlight: "Unlocking the power of AI for Kuwait's Vision 2035.",
        topic: "Intelligence Amplified: Kuwait's Journey to an AI-Driven Era",
      },
    ],
  },
  {
    month: "JUNE",
    events: [
      {
        type: "conference",
        id: "ot-security-jubail",
        series: "OT Security First",
        seriesColor: "#D34B9A",
        edition: "2ND EDITION",
        title: "OT Security Jubail",
        date: new Date("2026-06-15"),
        day: 15,
        weekday: "TBC",
        location: "Jubail, Saudi Arabia",
        venue: "Venue TBA",
        attendees: "300+ Attendees",
        href: "/events/ot-security-first",
        image: "https://efg-final.s3.amazonaws.com/home-event-spec/Image%2016-02-2026%20at%203.33%E2%80%AFAM.png",
        highlight: "Defending the industrial heart of the Kingdom.",
        topic: "Industrial Control Systems Security",
      },
    ],
  },
  {
    month: "SEPTEMBER",
    events: [
      {
        type: "conference",
        id: "digital-first-qatar",
        series: "Data & AI First",
        seriesColor: "#7C3AED",
        edition: "2ND EDITION",
        title: "Digital First Qatar",
        date: new Date("2026-09-15"),
        day: 15,
        weekday: "TBC",
        location: "Doha, Qatar",
        venue: "Venue TBA",
        attendees: "500+ Attendees",
        href: "/events/data-ai-first",
        image: "https://efg-final.s3.amazonaws.com/home-event-spec/Image%2016-02-2026%20at%203.45%E2%80%AFAM.png",
        highlight: "Driving Qatar's digital economy forward.",
        topic: "Digital Economy & Transformation",
      },
      {
        type: "conference",
        id: "cyber-first-qatar",
        series: "Cyber First",
        seriesColor: "#01BBF5",
        edition: "4TH EDITION",
        title: "Cyber First Qatar",
        date: new Date("2026-09-16"),
        day: 16,
        weekday: "TBC",
        location: "Doha, Qatar",
        venue: "Venue TBA",
        attendees: "500+ Attendees",
        href: "/events/cyber-first",
        image: "https://efg-final.s3.amazonaws.com/home-event-spec/Image%2016-02-2026%20at%203.52%E2%80%AFAM.png",
        highlight: "Securing the nation's critical digital assets.",
        topic: "Critical Infrastructure Protection",
      },
      {
        type: "conference",
        id: "opex-first-saudi",
        series: "Opex First",
        seriesColor: "#0F735E",
        edition: "3RD EDITION",
        title: "OPEX First Saudi",
        date: new Date("2026-09-20"),
        day: 20,
        weekday: "TBC",
        location: "Riyadh, Saudi Arabia",
        venue: "Venue TBA",
        attendees: "400+ Attendees",
        href: "/events/opex-first",
        image: "https://efg-final.s3.amazonaws.com/home-event-spec/DSC08180.jpg",
        highlight: "Operational excellence for the giga-projects era.",
        topic: "Process Optimization & Efficiency",
        objectPosition: "0% 50%",
      },
      {
        type: "conference",
        id: "digital-resilience-ksa",
        series: "Cyber First",
        seriesColor: "#01BBF5",
        edition: "1ST EDITION",
        title: "Digital Resilience KSA",
        date: new Date("2026-09-22"),
        day: 22,
        weekday: "TBC",
        location: "Riyadh, Saudi Arabia",
        venue: "Venue TBA",
        attendees: "400+ Attendees",
        href: "/events/cyber-first",
        image: "https://efg-final.s3.amazonaws.com/home-event-spec/Image%2016-02-2026%20at%205.05%E2%80%AFAM.png",
        highlight: "Building a resilient digital ecosystem for KSA.",
        topic: "Cyber Resilience & Continuity",
      },
    ],
  },
  {
    month: "OCTOBER",
    events: [
      {
        type: "conference",
        id: "cyber-first-oman",
        series: "Cyber First",
        seriesColor: "#01BBF5",
        edition: "5TH EDITION",
        title: "Cyber First Oman",
        date: new Date("2026-10-12"),
        day: 12,
        weekday: "TBC",
        location: "Muscat, Oman",
        venue: "Venue TBA",
        attendees: "400+ Attendees",
        href: "/events/cyber-first",
        image: "https://efg-final.s3.amazonaws.com/home-event-spec/Image%2016-02-2026%20at%204.58%E2%80%AFAM.png",
        highlight: "Oman's most influential cybersecurity summit.",
        topic: "Cloud Security & Governance",
      },
      {
        type: "conference",
        id: "ot-security-oman",
        series: "OT Security First",
        seriesColor: "#D34B9A",
        edition: "3RD EDITION",
        title: "OT Security Oman",
        date: new Date("2026-10-13"),
        day: 13,
        weekday: "TBC",
        location: "Muscat, Oman",
        venue: "Venue TBA",
        attendees: "300+ Attendees",
        href: "/events/ot-security-first",
        image: "https://efg-final.s3.amazonaws.com/home-event-spec/Image%2016-02-2026%20at%205.10%E2%80%AFAM.png",
        highlight: "Protecting Oman's critical infrastructure.",
        topic: "OT/IT Convergence Security",
      },
    ],
  },
];

// Pre-compute a flat list: for each card, record which monthIndex it belongs to
const flatCardMonthIndex: number[] = [];
timelineData.forEach((month, mi) => {
  month.events.forEach(() => flatCardMonthIndex.push(mi));
});

// ═══════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════

export default function AnnualTimeline() {
  const targetRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const rightPanelRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [scrollRange, setScrollRange] = useState(0);

  // Measure content width dynamically
  useEffect(() => {
    const updateScrollRange = () => {
      if (contentRef.current && rightPanelRef.current) {
        const contentWidth = contentRef.current.scrollWidth;
        const viewportWidth = rightPanelRef.current.offsetWidth;
        const distance = contentWidth - viewportWidth;
        setScrollRange(Math.max(0, distance));
      }
    };

    updateScrollRange();
    const timer = setTimeout(updateScrollRange, 200);
    window.addEventListener("resize", updateScrollRange);
    return () => {
      window.removeEventListener("resize", updateScrollRange);
      clearTimeout(timer);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const x = useTransform(smoothProgress, [0, 1], [0, -scrollRange]);

  // Event-based ranges for month highlighting
  const totalEvents = timelineData.reduce((acc, m) => acc + m.events.length, 0);
  let acc = 0;
  const monthRanges = timelineData.map((month) => {
    const start = acc / totalEvents;
    acc += month.events.length;
    const end = acc / totalEvents;
    return { start, end };
  });

  // ── Precise click-to-scroll using DOM measurements + Lenis ──
  const scrollToMonth = useCallback((monthIndex: number) => {
    if (!targetRef.current || !contentRef.current) return;

    // Find the index of the first card belonging to this month
    const firstCardIndex = flatCardMonthIndex.indexOf(monthIndex);
    if (firstCardIndex === -1) return;

    const card = cardRefs.current[firstCardIndex];
    if (!card) return;

    // The card's left offset within the scrollable content strip
    const cardLeft = card.offsetLeft;

    if (scrollRange <= 0) return;

    // fraction = how far into the horizontal scroll we need to go (0..1)
    const fraction = Math.min(1, Math.max(0, cardLeft / scrollRange));

    // Use getBoundingClientRect for accurate absolute top (works regardless of parent offsets)
    const sectionRect = targetRef.current.getBoundingClientRect();
    const sectionAbsoluteTop = sectionRect.top + window.scrollY;
    const sectionHeight = targetRef.current.offsetHeight;
    const verticalScrollDistance = sectionHeight - window.innerHeight;

    const targetScroll = sectionAbsoluteTop + fraction * verticalScrollDistance;

    // Use Lenis for smooth scrolling (avoids conflict with native smooth scroll)
    const lenis = (window as any).__lenis;
    if (lenis) {
      lenis.scrollTo(targetScroll, { duration: 1.5 });
    } else {
      window.scrollTo({ top: targetScroll, behavior: "smooth" });
    }
  }, [scrollRange]);

  // Assign refs to cards
  let cardIndex = 0;

  return (
    <section
      ref={targetRef}
      className="relative"
      style={{ height: "500vh", background: "var(--black-light)" }}
    >
      <div
        className="sticky top-0 z-10 h-screen w-full flex overflow-hidden bg-[var(--black-light)]"
        style={{ position: "sticky", top: 0, transform: "translate3d(0,0,0)" }}
      >

        {/* LEFT PANEL */}
        <div className="w-[30%] h-full flex flex-col justify-center px-12 z-20 bg-[var(--black-light)] border-r border-white/5 relative shadow-[10px_0_20px_rgba(0,0,0,0.2)]">
          <div className="flex items-center gap-4 mb-2">
            <div className="w-[40px] h-[1px] bg-orange-500/60" />
            <span className="text-orange-500 font-outfit text-xs font-bold tracking-[0.2em] uppercase">
              The Year Ahead
            </span>
          </div>
          <h2
            className="text-6xl lg:text-7xl font-display font-bold leading-[0.9] tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40"
          >
            2026 <br />
            Event <br />
            <span className="opacity-30">Calendar</span>
          </h2>
          <p className="mt-8 text-white/50 font-outfit text-sm leading-relaxed max-w-[280px]">
            Scroll to explore our upcoming summits, boardrooms, and networking experiences across the region.
          </p>
          <div className="absolute bottom-12 left-12 w-12 h-12 border-l border-b border-orange-500/30 opacity-50" />
        </div>

        {/* RIGHT PANEL */}
        <div
          ref={rightPanelRef}
          className="w-[70%] h-full relative overflow-hidden flex flex-col justify-center"
        >
          {/* HORIZONTAL TRACK */}
          <motion.div
            ref={contentRef}
            style={{ x }}
            className="flex items-center gap-[4vw] pl-[5vw] pr-[20vw] w-max"
          >
            {timelineData.map((month) =>
              month.events.map((event, eventIdx) => {
                const ci = cardIndex++;
                return (
                  <div
                    key={event.id}
                    ref={(el) => { cardRefs.current[ci] = el; }}
                    className="flex-shrink-0 w-[45vw] lg:w-[28vw]"
                  >
                    <CinematicEventCard event={{ ...event, monthName: month.month }} index={eventIdx} isInView={true} />
                  </div>
                );
              })
            )}

            {/* END CARD */}
            <div className="flex-shrink-0 w-[45vw] lg:w-[28vw] aspect-[4/5] bg-white/5 border border-white/10 rounded-3xl flex flex-col items-center justify-center text-center p-8 backdrop-blur-md">
              <h3 className="text-3xl font-display font-bold text-white mb-2">More to Come</h3>
              <p className="text-white/50 font-outfit text-sm mb-6">We are constantly updating our calendar.</p>
              <Link href="#newsletter" className="px-8 py-3 rounded-full bg-white text-black font-outfit font-bold text-sm uppercase tracking-widest hover:bg-orange-500 hover:text-white transition-colors">
                Stay Updated
              </Link>
            </div>
          </motion.div>

          {/* PREMIUM TIMELINE TRACK */}
          <div className="absolute bottom-10 left-0 right-0 z-20 px-[3vw]">
            <PremiumTimelineTrack
              progress={smoothProgress}
              monthRanges={monthRanges}
              onMonthClick={scrollToMonth}
            />
          </div>
        </div>

      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════
// PREMIUM TIMELINE TRACK
// ═══════════════════════════════════════════════════════════════

function PremiumTimelineTrack({
  progress,
  monthRanges,
  onMonthClick,
}: {
  progress: any;
  monthRanges: { start: number; end: number }[];
  onMonthClick: (index: number) => void;
}) {
  return (
    <div className="relative py-6">
      {/* The horizontal ruler line */}
      <div className="relative w-full h-[2px] bg-white/[0.07] rounded-full overflow-hidden">
        {/* Active progress fill */}
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full"
          style={{
            scaleX: progress,
            transformOrigin: "0%",
            background: "linear-gradient(90deg, #E8651A 0%, #F5A623 60%, #E8651A 100%)",
            boxShadow: "0 0 20px rgba(232,101,26,0.4), 0 0 60px rgba(232,101,26,0.15)",
          }}
        />
      </div>

      {/* Month markers positioned along the ruler */}
      <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-between items-center pointer-events-none">
        {timelineData.map((month, i) => (
          <MonthMarker
            key={month.month}
            month={month.month}
            eventCount={month.events.length}
            range={monthRanges[i]}
            progress={progress}
            onClick={() => onMonthClick(i)}
          />
        ))}
      </div>
    </div>
  );
}

function MonthMarker({
  month,
  eventCount,
  range,
  progress,
  onClick,
}: {
  month: string;
  eventCount: number;
  range: { start: number; end: number };
  progress: any;
  onClick: () => void;
}) {
  const [isActive, setIsActive] = useState(false);
  const [isPast, setIsPast] = useState(false);

  useMotionValueEvent(progress, "change", (latest: number) => {
    setIsActive(latest >= range.start - 0.01 && latest < range.end);
    setIsPast(latest >= range.end);
  });

  return (
    <div
      className="relative flex flex-col items-center cursor-pointer group pointer-events-auto"
      onClick={onClick}
    >
      {/* Notch / Tick mark */}
      <div
        className={`
          w-[1.5px] mb-2 transition-all duration-500 rounded-full
          ${isActive ? "h-5 bg-[#E8651A] shadow-[0_0_8px_rgba(232,101,26,0.6)]" : isPast ? "h-3 bg-white/25" : "h-3 bg-white/10 group-hover:bg-white/20"}
        `}
      />

      {/* Month label */}
      <span
        className={`
          text-[10px] font-outfit font-semibold tracking-[0.15em] uppercase transition-all duration-500
          ${isActive ? "text-white" : isPast ? "text-white/40" : "text-white/20 group-hover:text-white/40"}
        `}
      >
        {month.slice(0, 3)}
      </span>

      {/* Event count badge - only show when active */}
      <motion.div
        initial={false}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 4 }}
        transition={{ duration: 0.3 }}
        className="absolute -top-8"
      >
        <div className="bg-[#E8651A] text-white text-[9px] font-outfit font-bold px-2 py-0.5 rounded-full whitespace-nowrap shadow-lg">
          {eventCount} {eventCount === 1 ? "event" : "events"}
        </div>
      </motion.div>

      {/* Subtle connector line from badge to notch */}
      {isActive && (
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.2 }}
          className="absolute -top-3 w-[1px] h-3 bg-[#E8651A]/40 origin-bottom"
        />
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// CINEMATIC CARD
// ═══════════════════════════════════════════════════════════════

function CinematicEventCard({ event, index, isInView }: { event: any; index: number; isInView: boolean }) {
  const isConference = event.type === "conference";
  const accentColor = event.seriesColor || "#E8651A";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="group relative w-full aspect-[4/5] rounded-3xl overflow-hidden cursor-pointer bg-white/5 border border-white/5"
      style={{ isolation: "isolate" }}
    >
      <Link href={event.href} className="block w-full h-full">
        {/* Background Image */}
        <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
          <img
            src={event.image || "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80"}
            alt={event.title}
            className="w-full h-full object-cover"
            style={{ objectPosition: event.objectPosition || "center" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 transition-opacity duration-500" />
        </div>

        {/* Content Container */}
        <div className="absolute inset-0 p-8 flex flex-col justify-between items-start z-10">

          {/* Top Badge */}
          <div className="flex items-center gap-2">
            {event.series && (
              <span
                className="px-4 py-1.5 rounded-full text-[11px] font-bold tracking-widest uppercase bg-black/60 backdrop-blur-md border border-white/10 text-white shadow-lg"
                style={{ fontFamily: "var(--font-outfit)", borderColor: accentColor }}
              >
                {event.series}
              </span>
            )}
          </div>

          {/* Bottom Info */}
          <div className="w-full transform transition-transform duration-500 group-hover:-translate-y-2">
            {/* Date */}
            <div className="flex items-baseline gap-3 mb-3" style={{ textShadow: "0 4px 12px rgba(0,0,0,0.5)" }}>
              <span className="text-5xl md:text-6xl font-display font-bold text-white tracking-tighter">
                {event.day}
              </span>
              <span className="text-sm md:text-base font-outfit font-bold text-white/90 uppercase tracking-widest">
                {event.monthName?.substring(0, 3) || event.monthAbbr}
              </span>
            </div>

            {/* Title */}
            <h3
              className="text-2xl md:text-3xl font-display font-bold text-white leading-[1.1] mb-4"
              style={{ textShadow: "0 4px 12px rgba(0,0,0,0.5)" }}
            >
              {event.title}
            </h3>

            {/* Hover Details */}
            <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-300 overflow-hidden" style={{ textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}>
              {event.topic && (
                <p className="text-sm font-semibold text-white/90 mb-2" style={{ fontFamily: "var(--font-outfit)" }}>
                  {event.topic}
                </p>
              )}
              <p className="text-xs text-white/80 font-outfit uppercase tracking-widest mb-4 border-l-2 pl-3" style={{ borderColor: accentColor }}>
                {event.location}
              </p>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white">
                <span>View Event</span>
                <span>→</span>
              </div>
            </div>

            {!isConference && event.highlight && (
              <p className="text-sm text-white/70 leading-snug line-clamp-2" style={{ textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}>
                {event.highlight}
              </p>
            )}
          </div>
        </div>

        {/* Hover Glow */}
        <div
          className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full blur-[120px] opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"
          style={{ background: accentColor }}
        />
      </Link>
    </motion.div>
  );
}
