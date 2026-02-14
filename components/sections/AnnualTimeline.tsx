"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
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
};

type BoardroomEvent = {
  type: "boardroom";
  id: string;
  title: string;
  date: Date;
  day: number;
  monthAbbr: string;
  location: string;
  host: string;
  href: string;
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
        id: "clevertap-dubai",
        title: "CleverTap Executive Boardroom",
        date: new Date("2026-03-02"),
        day: 2,
        monthAbbr: "MAR",
        location: "Dubai, UAE",
        host: "CleverTap",
        href: "/boardrooms/clevertap-dubai",
      },
      {
        type: "boardroom",
        id: "clevertap-riyadh",
        title: "CleverTap Executive Boardroom",
        date: new Date("2026-03-03"),
        day: 3,
        monthAbbr: "MAR",
        location: "Riyadh, KSA",
        host: "CleverTap",
        href: "/boardrooms/clevertap-riyadh",
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
        date: new Date("2026-04-20"),
        day: 20,
        weekday: "MON",
        location: "Kuwait City, Kuwait",
        venue: "Venue TBA",
        attendees: "500+ Attendees",
        href: "/events/cyber-first-kuwait",
      },
      {
        type: "conference",
        id: "data-ai-kuwait",
        series: "Data & AI First",
        seriesColor: "#EEEEEE",
        isLight: true,
        edition: "1ST EDITION",
        title: "Data & AI First Kuwait",
        date: new Date("2026-04-21"),
        day: 21,
        weekday: "TUE",
        location: "Kuwait City, Kuwait",
        venue: "Venue TBA",
        attendees: "500+ Attendees",
        href: "/events/data-ai-kuwait",
      },
      {
        type: "boardroom",
        id: "outsystems-riyadh",
        title: "OutSystems Executive Boardroom",
        date: new Date("2026-04-29"),
        day: 29,
        monthAbbr: "APR",
        location: "Riyadh, KSA",
        host: "OutSystems",
        href: "/boardrooms/outsystems-riyadh",
      },
    ],
  },
];

// Calculate days until event
function getDaysUntil(date: Date): number {
  const now = new Date();
  const diff = date.getTime() - now.getTime();
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

// ═══════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════

export default function AnnualTimeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      style={{
        background: "var(--black-light)",
        padding: "clamp(80px, 10vw, 140px) 0 clamp(80px, 10vw, 120px)",
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
            SECTION HEADER
            ═══════════════════════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: 56 }}
        >
          {/* Label */}
          <div className="flex items-center gap-3" style={{ marginBottom: 12 }}>
            <span
              style={{
                width: 30,
                height: 1,
                background: "var(--orange)",
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
              2026 Calendar
            </span>
          </div>

          {/* Title */}
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(34px, 4.5vw, 56px)",
              letterSpacing: "-1.5px",
              color: "var(--white)",
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            The Year Ahead
          </h2>

          {/* Description */}
          <p
            style={{
              fontFamily: "var(--font-outfit)",
              fontWeight: 300,
              fontSize: 16,
              color: "#707070",
              lineHeight: 1.6,
              maxWidth: 520,
              margin: "12px 0 0",
            }}
          >
            Conferences, boardrooms, and executive gatherings across the GCC —
            every event EFG is bringing to life this year.
          </p>
        </motion.div>

        {/* ═══════════════════════════════════════════════════════════════
            TIMELINE
            ═══════════════════════════════════════════════════════════════ */}
        <div className="flex flex-col" style={{ gap: 40 }}>
          {timelineData.map((monthData, monthIndex) => (
            <MonthBlock
              key={monthData.month}
              monthData={monthData}
              monthIndex={monthIndex}
              isInView={isInView}
            />
          ))}

          {/* Coming Soon */}
          <ComingSoon isInView={isInView} />
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════
// MONTH BLOCK
// ═══════════════════════════════════════════════════════════════

function MonthBlock({
  monthData,
  monthIndex,
  isInView,
}: {
  monthData: MonthData;
  monthIndex: number;
  isInView: boolean;
}) {
  const baseDelay = monthIndex * 0.2;

  return (
    <div>
      {/* Month Header */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: baseDelay }}
        className="flex items-center gap-4"
        style={{ marginBottom: 20 }}
      >
        <span
          style={{
            fontFamily: "var(--font-outfit)",
            fontSize: 11,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "5px",
            color: "#303030",
            flexShrink: 0,
          }}
        >
          {monthData.month}
        </span>
        <div
          style={{
            flex: 1,
            height: 1,
            background: "rgba(255,255,255,0.04)",
          }}
        />
      </motion.div>

      {/* Events */}
      <div className="flex flex-col" style={{ gap: 12 }}>
        {monthData.events.map((event, eventIndex) => {
          const isConference = event.type === "conference";
          const delay = baseDelay + 0.1 + eventIndex * (isConference ? 0.15 : 0.08);

          // Check if we need the "Back to Back" connector
          const needsConnector =
            event.id === "cyber-first-kuwait" &&
            monthData.events[eventIndex + 1]?.id === "data-ai-kuwait";

          return (
            <div key={event.id}>
              {isConference ? (
                <ConferenceRow
                  event={event as ConferenceEvent}
                  delay={delay}
                  isInView={isInView}
                />
              ) : (
                <BoardroomRow
                  event={event as BoardroomEvent}
                  delay={delay}
                  isInView={isInView}
                />
              )}

              {/* Back to Back Connector */}
              {needsConnector && (
                <BackToBackConnector delay={delay + 0.3} isInView={isInView} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// CONFERENCE ROW
// ═══════════════════════════════════════════════════════════════

function ConferenceRow({
  event,
  delay,
  isInView,
}: {
  event: ConferenceEvent;
  delay: number;
  isInView: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [displayDay, setDisplayDay] = useState(1);
  const rowRef = useRef<HTMLAnchorElement>(null);
  const rowInView = useInView(rowRef, { once: true, margin: "-50px" });
  const daysUntil = getDaysUntil(event.date);

  // Counting animation for day number
  useEffect(() => {
    if (!rowInView) return;

    const duration = 400;
    const steps = 15;
    const stepDuration = duration / steps;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      // easeOutExpo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setDisplayDay(Math.round(1 + (event.day - 1) * eased));

      if (currentStep >= steps) {
        clearInterval(interval);
        setDisplayDay(event.day);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [rowInView, event.day]);

  const accentColor = event.seriesColor;
  const isLight = event.isLight;

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 35 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        ref={rowRef}
        href={event.href}
        className="conference-row block relative overflow-hidden transition-all"
        style={{
          display: "grid",
          gridTemplateColumns: "80px 1fr auto",
          gap: 32,
          alignItems: "center",
          padding: "28px 32px",
          background: "var(--black-card)",
          border: `1px solid ${isHovered ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.06)"}`,
          borderRadius: 16,
          cursor: "pointer",
          transform: isHovered ? "translateY(-3px)" : "translateY(0)",
          boxShadow: isHovered ? "0 12px 40px rgba(0,0,0,0.25)" : "none",
          transitionDuration: "0.5s",
          transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Colored edge indicator */}
        <div
          className="absolute left-0 top-0 bottom-0 transition-opacity"
          style={{
            width: 3,
            background: accentColor,
            borderRadius: "16px 0 0 16px",
            opacity: isHovered ? 0.7 : 0,
            transitionDuration: "0.5s",
          }}
        />

        {/* DATE COLUMN */}
        <div>
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 44,
              fontWeight: 800,
              color: "white",
              letterSpacing: "-2px",
              lineHeight: 1,
            }}
          >
            {displayDay.toString().padStart(2, "0")}
          </div>
          <div
            style={{
              fontFamily: "var(--font-outfit)",
              fontSize: 10,
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: "1.5px",
              color: "#484848",
              marginTop: 4,
            }}
          >
            {event.weekday}
          </div>
        </div>

        {/* INFO COLUMN */}
        <div>
          {/* Top badges */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Series badge */}
            <div
              className="inline-flex items-center gap-2"
              style={{
                background: isLight ? "rgba(238,238,238,0.06)" : `${accentColor}14`,
                border: `1px solid ${isLight ? "rgba(238,238,238,0.1)" : accentColor + "26"}`,
                borderRadius: 50,
                padding: "4px 12px",
              }}
            >
              <span
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: "50%",
                  background: accentColor,
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-outfit)",
                  fontSize: 10,
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "1.5px",
                  color: accentColor,
                }}
              >
                {event.series}
              </span>
            </div>

            {/* Edition badge */}
            <span
              style={{
                fontFamily: "var(--font-outfit)",
                fontSize: 9.5,
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "1.5px",
                color: "#484848",
                background: "rgba(255,255,255,0.04)",
                padding: "3px 10px",
                borderRadius: 4,
              }}
            >
              {event.edition}
            </span>
          </div>

          {/* Title */}
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: "-0.3px",
              color: "white",
              margin: "10px 0 0",
            }}
          >
            {event.title}
          </h3>

          {/* Details */}
          <div
            className="flex flex-wrap items-center gap-x-5 gap-y-2"
            style={{ marginTop: 8 }}
          >
            <DetailItem icon={<MapPinIcon />} text={event.location} />
            <DetailItem icon={<BuildingIcon />} text={event.venue} />
            <DetailItem icon={<UsersIcon />} text={event.attendees} />
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col items-end gap-3">
          {/* Countdown */}
          <div className="flex items-center gap-2">
            <PulsingDot color={accentColor} />
            <span
              style={{
                fontFamily: "var(--font-outfit)",
                fontSize: 11,
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "2px",
                color: accentColor,
              }}
            >
              IN {daysUntil} DAYS
            </span>
          </div>

          {/* Register button */}
          <div
            className="transition-all"
            style={{
              padding: "12px 28px",
              border: `1px solid ${isHovered ? accentColor : "rgba(255,255,255,0.1)"}`,
              borderRadius: 50,
              background: isHovered
                ? isLight
                  ? "rgba(238,238,238,0.12)"
                  : accentColor
                : "transparent",
              color: isHovered && !isLight ? "#0A0A0A" : isHovered && isLight ? "#EEEEEE" : "white",
              fontFamily: "var(--font-outfit)",
              fontSize: 13,
              fontWeight: 500,
              transitionDuration: "0.4s",
            }}
          >
            Register →
          </div>
        </div>

        {/* Mobile styles */}
        <style jsx>{`
          @media (max-width: 768px) {
            .conference-row {
              grid-template-columns: 1fr !important;
              gap: 16px !important;
            }
          }
        `}</style>
      </Link>
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════════════
// BOARDROOM ROW
// ═══════════════════════════════════════════════════════════════

function BoardroomRow({
  event,
  delay,
  isInView,
}: {
  event: BoardroomEvent;
  delay: number;
  isInView: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        href={event.href}
        className="boardroom-row flex flex-wrap items-center gap-4 md:gap-6 transition-all"
        style={{
          padding: "18px 28px",
          background: isHovered ? "rgba(232, 101, 26, 0.03)" : "rgba(232, 101, 26, 0.015)",
          border: `1px solid ${isHovered ? "rgba(232, 101, 26, 0.1)" : "rgba(232, 101, 26, 0.05)"}`,
          borderRadius: 12,
          cursor: "pointer",
          transform: isHovered ? "translateY(-2px)" : "translateY(0)",
          transitionDuration: "0.4s",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Date */}
        <div
          className="flex items-center gap-2"
          style={{ minWidth: 64 }}
        >
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 24,
              fontWeight: 800,
              color: "white",
              letterSpacing: "-1px",
            }}
          >
            {event.day}
          </span>
          <span
            style={{
              fontFamily: "var(--font-outfit)",
              fontSize: 10,
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: "1px",
              color: "#E8651A",
            }}
          >
            {event.monthAbbr}
          </span>
        </div>

        {/* NetworkFirst badge */}
        <div
          className="inline-flex items-center gap-1.5"
          style={{
            background: "rgba(232, 101, 26, 0.06)",
            border: "1px solid rgba(232, 101, 26, 0.1)",
            borderRadius: 5,
            padding: "3px 9px",
          }}
        >
          <TableIcon />
          <span
            style={{
              fontFamily: "var(--font-outfit)",
              fontSize: 8.5,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "2px",
              color: "#E8651A",
            }}
          >
            NetworkFirst
          </span>
        </div>

        {/* Title */}
        <span
          className="flex-1"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 15,
            fontWeight: 600,
            color: "white",
            letterSpacing: "-0.2px",
            minWidth: 200,
          }}
        >
          {event.title}
        </span>

        {/* Location */}
        <div className="flex items-center gap-1.5">
          <span style={{ opacity: 0.25 }}>
            <MapPinIconSmall />
          </span>
          <span
            style={{
              fontFamily: "var(--font-outfit)",
              fontSize: 12,
              fontWeight: 300,
              color: "#505050",
            }}
          >
            {event.location}
          </span>
        </div>

        {/* Scale indicator */}
        <div className="flex items-center gap-1.5">
          <span style={{ opacity: 0.2 }}>
            <UsersIconSmall />
          </span>
          <span
            style={{
              fontFamily: "var(--font-outfit)",
              fontSize: 11,
              fontWeight: 400,
              color: "#404040",
            }}
          >
            15–20 Executives
          </span>
        </div>

        {/* Apply button */}
        <div
          className="transition-all ml-auto"
          style={{
            padding: "8px 20px",
            border: "1px solid rgba(232, 101, 26, 0.12)",
            borderRadius: 50,
            background: isHovered ? "rgba(232, 101, 26, 0.08)" : "transparent",
            fontFamily: "var(--font-outfit)",
            fontSize: 11.5,
            fontWeight: 500,
            color: "#E8651A",
            transitionDuration: "0.3s",
          }}
        >
          Apply
        </div>
      </Link>
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════════════
// BACK TO BACK CONNECTOR
// ═══════════════════════════════════════════════════════════════

function BackToBackConnector({
  delay,
  isInView,
}: {
  delay: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.4, delay }}
      className="flex flex-col items-center gap-2"
      style={{ margin: "16px 0" }}
    >
      <div
        style={{
          width: 1,
          height: 20,
          background: "rgba(255,255,255,0.06)",
        }}
      />
      <span
        style={{
          fontFamily: "var(--font-outfit)",
          fontSize: 9.5,
          fontWeight: 500,
          textTransform: "uppercase",
          letterSpacing: "3px",
          color: "#2A2A2A",
          textAlign: "center",
        }}
      >
        Back to Back in Kuwait City
      </span>
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════════════
// COMING SOON
// ═══════════════════════════════════════════════════════════════

function ComingSoon({ isInView }: { isInView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6, delay: 1.2 }}
      className="flex flex-col items-center"
      style={{ marginTop: 40 }}
    >
      <div
        style={{
          width: 200,
          borderTop: "1px dashed rgba(255,255,255,0.06)",
        }}
      />
      <p
        style={{
          fontFamily: "var(--font-outfit)",
          fontSize: 13,
          fontWeight: 400,
          color: "#353535",
          textAlign: "center",
          marginTop: 16,
        }}
      >
        More events for H2 2026 announcing soon.
      </p>
      <Link
        href="#newsletter"
        style={{
          fontFamily: "var(--font-outfit)",
          fontSize: 12,
          fontWeight: 400,
          color: "rgba(232, 101, 26, 0.6)",
          textAlign: "center",
          marginTop: 8,
        }}
      >
        Want early access? Subscribe to our newsletter.
      </Link>
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════════════
// HELPER COMPONENTS
// ═══════════════════════════════════════════════════════════════

function DetailItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-1.5">
      <span style={{ opacity: 0.3 }}>{icon}</span>
      <span
        style={{
          fontFamily: "var(--font-outfit)",
          fontSize: 13,
          fontWeight: 300,
          color: "#606060",
        }}
      >
        {text}
      </span>
    </div>
  );
}

function PulsingDot({ color }: { color: string }) {
  return (
    <span className="relative flex h-1.5 w-1.5">
      <span
        className="absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping"
        style={{ background: color, animationDuration: "2s" }}
      />
      <span
        className="relative inline-flex rounded-full h-1.5 w-1.5"
        style={{ background: color }}
      />
    </span>
  );
}

// ═══════════════════════════════════════════════════════════════
// ICONS
// ═══════════════════════════════════════════════════════════════

function MapPinIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ color: "white" }}
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function MapPinIconSmall() {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ color: "white" }}
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ color: "white" }}
    >
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
      <line x1="9" y1="22" x2="9" y2="2" />
      <line x1="15" y1="22" x2="15" y2="2" />
      <line x1="4" y1="12" x2="20" y2="12" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ color: "white" }}
    >
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function UsersIconSmall() {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ color: "white" }}
    >
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function TableIcon() {
  return (
    <svg
      width="9"
      height="9"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#E8651A"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="3" y1="15" x2="21" y2="15" />
      <line x1="9" y1="3" x2="9" y2="21" />
      <line x1="15" y1="3" x2="15" y2="21" />
    </svg>
  );
}
