"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

import Image from "next/image";

// Impact metrics data
const metrics = [
  { value: 5000, suffix: "+", label: "ATTENDEES", hasComma: true },
  { value: 12, suffix: "", label: "CITIES", hasComma: false },
  { value: 200, suffix: "+", label: "SPEAKERS", hasComma: false },
  { value: 8, suffix: "", label: "ANNUAL EVENTS", hasComma: false },
  { value: 50, suffix: "+", label: "PARTNERS", hasComma: false },
];

// Strategic Partners (Government & Official Support)
const strategicPartners = [
  {
    name: "National Cyber Security Council",
    type: "Official Patronage",
    image: "https://efg-final.s3.eu-north-1.amazonaws.com/logos%20-%20govt%20-%20homepage/CYBER-SECURITY-COUNCIL-LOGO-1-1-1024x274.png",
    width: 200,
    height: 54,
    url: "https://csc.gov.ae"
  },
  {
    name: "National Cyber Security Centre",
    type: "Official Support (Kuwait)",
    image: "https://efg-final.s3.eu-north-1.amazonaws.com/logos%20-%20govt%20-%20homepage/Untitled-1-02-1-1536x1024.png",
    width: 200,
    height: 60,
    url: "https://citra.gov.kw"
  },
  {
    name: "Central Agency for Information Technology",
    type: "Official Support (Kuwait)",
    image: "https://efg-final.s3.eu-north-1.amazonaws.com/logos%20-%20govt%20-%20homepage/central-agency-kuwait.png",
    width: 200,
    height: 60,
    url: "https://cait.gov.kw"
  },
  {
    name: "Ministry of National Guard",
    type: "Official Support",
    image: "https://efg-final.s3.eu-north-1.amazonaws.com/logos%20-%20govt%20-%20homepage/ministry%20of%20national%20guard.png",
    width: 200,
    height: 60,
    url: "https://www.sang.gov.sa"
  },
  {
    name: "Cyber 71",
    type: "Govt Initiative (UAE)",
    image: "https://efg-final.s3.eu-north-1.amazonaws.com/logos%20-%20govt%20-%20homepage/cyber-71-logo.png",
    width: 200,
    height: 60,
    url: "https://cybere71.ae"
  },
  {
    name: "Federal Authority for Identity & Citizenship (ICP)",
    type: "Strategic Partner",
    image: "https://efg-final.s3.eu-north-1.amazonaws.com/logos%20-%20govt%20-%20homepage/icp.jpeg",
    width: 200,
    height: 60,
    blendingMode: "screen", // JPEG handling
    url: "https://icp.gov.ae"
  },
];

// Easing function: easeOutExpo
const easeOutExpo = (t: number): number => {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
};

export default function ImpactBar() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  return (
    <section
      ref={sectionRef}
      style={{
        background: "var(--black-light)",
        padding: "100px 0",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
        style={{
          maxWidth: 1320,
          margin: "0 auto",
          padding: "0 clamp(20px, 4vw, 60px)",
        }}
      >
        {/* ═══════════════════════════════════════════════════════════════
            NARRATIVE HEADER
            Contextualizes the numbers
            ═══════════════════════════════════════════════════════════════ */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center justify-center gap-3" style={{ marginBottom: 16 }}>
              <span style={{ width: 30, height: 1, background: "#E8651A" }} />
              <span
                style={{
                  display: "inline-block",
                  fontFamily: "var(--font-outfit)",
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  color: "#E8651A",
                }}
              >
                The Regional Benchmark
              </span>
              <span style={{ width: 30, height: 1, background: "#E8651A" }} />
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: 700,
              marginBottom: 16,
              lineHeight: 1.1,
            }}
          >
            Delivering Impact at Scale
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              fontFamily: "var(--font-outfit)",
              fontSize: "clamp(15px, 1.5vw, 18px)",
              fontWeight: 300,
              color: "#A0A0A0",
              maxWidth: 600,
              margin: "0 auto",
            }}
          >
            Connecting the brightest minds in technology across the GCC region,
            creating the platforms where the future is decided.
          </motion.p>
        </div>

        {/* ═══════════════════════════════════════════════════════════════
            METRICS ROW
            ═══════════════════════════════════════════════════════════════ */}
        <div className="metrics-row flex items-center justify-center flex-wrap gap-x-8 gap-y-8 md:gap-x-12">
          {metrics.map((metric, index) => (
            <div key={metric.label} className="flex items-center gap-0 md:gap-12">
              {/* Separator (before each except first) - Apple Style Gradient Beam */}
              {index > 0 && (
                <div
                  className="separator hidden md:block"
                  style={{
                    width: 1,
                    height: 60,
                    background: "linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.5), transparent)", // Soft edges
                  }}
                />
              )}

              {/* Metric */}
              <CountingMetric
                value={metric.value}
                suffix={metric.suffix}
                label={metric.label}
                hasComma={metric.hasComma}
                delay={index * 150}
                isInView={isInView}
              />
            </div>
          ))}
        </div>

        {/* ═══════════════════════════════════════════════════════════════
            STRATEGIC PARTNERS BAR (Previously Industry Leaders)
            Now focused on Government & Official Support
            ═══════════════════════════════════════════════════════════════ */}
        <div style={{ marginTop: 64, textAlign: "center" }}>
          {/* Label */}
          <div className="flex items-center justify-center gap-3" style={{ marginBottom: 32 }}>
            <span style={{ width: 20, height: 1, background: "rgba(255,255,255,0.1)" }} />
            <span
              style={{
                fontFamily: "var(--font-outfit)",
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "#606060",
              }}
            >
              Strategic Alliances & Official Support
            </span>
            <span style={{ width: 20, height: 1, background: "rgba(255,255,255,0.1)" }} />
          </div>

          {/* Partner Names (Placeholders + Images) */}
          {/* Partner Marquee Container */}
          <div
            className="partner-marquee-mask relative w-full overflow-hidden"
            style={{
              maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
              WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            }}
          >
            {/* The Track (Doubled for seamless loop) */}
            <div
              className="partner-track flex items-center gap-16 w-max"
            >
              {[...strategicPartners, ...strategicPartners, ...strategicPartners].map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="group flex flex-col items-center justify-center gap-2 flex-shrink-0"
                >
                  {/* Logo Image or Text Placeholder */}
                  {partner.image ? (
                    (partner as any).url ? (
                      <a
                        href={(partner as any).url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <div
                          className="partner-logo-container relative transition-all duration-300"
                          data-blending={(partner as any).blendingMode || "normal"}
                          style={{
                            height: 60,
                            display: 'flex',
                            alignItems: 'center',
                          }}
                        >
                          <Image
                            src={partner.image}
                            alt={partner.name}
                            width={partner.width || 200}
                            height={partner.height || 60}
                            className="object-contain h-full w-auto"
                          />
                        </div>
                      </a>
                    ) : (
                      <div
                        className="partner-logo-container relative transition-all duration-300"
                        data-blending={(partner as any).blendingMode || "normal"}
                        style={{
                          height: 60,
                          display: 'flex',
                          alignItems: 'center',
                        }}
                      >
                        <Image
                          src={partner.image}
                          alt={partner.name}
                          width={partner.width || 200}
                          height={partner.height || 60}
                          className="object-contain h-full w-auto"
                        />
                      </div>
                    )
                  ) : (
                    <span
                      className="transition-all duration-300 group-hover:text-white"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: 14,
                        fontWeight: 700,
                        letterSpacing: "0.5px",
                        textTransform: "uppercase",
                        color: "rgba(255, 255, 255, 0.25)",
                        textAlign: "center",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        padding: "12px 24px",
                        borderRadius: "4px",
                        background: "rgba(255, 255, 255, 0.02)",
                      }}
                    >
                      {partner.name}
                    </span>
                  )}

                  {/* Tiny role label */}
                  <span
                    style={{
                      fontFamily: "var(--font-outfit)",
                      fontSize: 9,
                      fontWeight: 500,
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                      color: "#404040",
                      opacity: 0,
                      transform: "translateY(-5px)",
                      transition: "all 0.3s ease",
                    }}
                    className="group-hover:opacity-100 group-hover:translate-y-0"
                  >
                    {partner.type}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Global Styles for Marquee & Mobile */}
      <style jsx global>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); } /* Moving 1/3rd (since we tripled the list) */
        }

        .partner-track {
          animation: scroll 25s linear infinite;
        }

        .partner-track:hover {
          animation-play-state: paused;
        }

        /* 
           Partner Logo Styling 
           Default: Grayscale / Inverted (for White JPEGs)
           Hover: Full Color (Reset all filters)
        */
        .partner-logo-container[data-blending="normal"] {
          filter: grayscale(100%);
          opacity: 0.8;
          mix-blend-mode: normal;
        }

        /* ICP Logo (White BG) - Invert to make it look transparent on dark bg */
        .partner-logo-container[data-blending="screen"] {
          filter: invert(1) grayscale(1) brightness(1.5);
          opacity: 0.9;
          mix-blend-mode: screen;
        }

        /* HOVER STATE: Reset everything to show original */
        .group:hover .partner-logo-container {
          filter: none !important;
          opacity: 1 !important;
          mix-blend-mode: normal !important;
        }

        @media (max-width: 768px) {
          .metrics-row {
            display: grid !important;
            grid-template-columns: repeat(2, 1fr);
            gap: 32px !important;
            justify-items: center;
          }
          .metrics-row > div:last-child {
            grid-column: span 2;
          }
          .separator {
            display: none !important;
          }
          .partner-track {
            animation-duration: 12s; /* Faster on mobile */
          }
        }
      `}</style>
    </section >
  );
}

/**
 * CountingMetric — Animated number counter with easeOutExpo
 */
function CountingMetric({
  value,
  suffix,
  label,
  hasComma,
  delay,
  isInView,
}: {
  value: number;
  suffix: string;
  label: string;
  hasComma: boolean;
  delay: number;
  isInView: boolean;
}) {
  const [displayValue, setDisplayValue] = useState(0);
  const [showSuffix, setShowSuffix] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    if (!isInView) return;

    const startTime = Date.now() + delay;
    const duration = 1800; // 1.8 seconds

    const animate = () => {
      const now = Date.now();
      const elapsed = now - startTime;

      if (elapsed < 0) {
        requestAnimationFrame(animate);
        return;
      }

      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutExpo(progress);
      const currentValue = Math.floor(easedProgress * value);

      setDisplayValue(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
        setAnimationComplete(true);
        if (suffix) {
          setTimeout(() => setShowSuffix(true), 50);
        }
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, delay, suffix]);

  const formattedValue = hasComma
    ? displayValue.toLocaleString()
    : displayValue.toString();

  return (
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 800,
          fontSize: "clamp(36px, 4vw, 52px)",
          letterSpacing: "-1.5px",
          color: "var(--white)",
          lineHeight: 1,
        }}
      >
        {formattedValue}
        {suffix && (
          <span
            style={{
              color: "#E8651A",
              display: "inline-block",
              transform: showSuffix ? "scale(1)" : "scale(1.3)",
              opacity: showSuffix ? 1 : 0,
              transition: "transform 0.2s ease-out, opacity 0.2s ease-out",
            }}
          >
            {suffix}
          </span>
        )}
      </div>
      <p
        style={{
          fontFamily: "var(--font-outfit)",
          fontSize: 12,
          fontWeight: 400,
          letterSpacing: "0.5px",
          textTransform: "uppercase",
          color: "#484848",
          marginTop: 6,
        }}
      >
        {label}
      </p>
    </div>
  );
}
