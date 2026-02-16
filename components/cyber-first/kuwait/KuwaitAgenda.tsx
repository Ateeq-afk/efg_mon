"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const panels = [
    {
        id: "08:00",
        time: "08:00 AM – 09:00 AM",
        title: "Registration & Networking",
        description: "Welcome coffee and badge collection.",
        tags: ["Networking", "Morning Coffee"],
        type: "break"
    },
    {
        id: "09:00",
        time: "09:00 AM – 09:10 AM",
        title: "Opening Ceremony",
        description: "Welcome Address by Events First Group (EFG).",
        tags: ["Opening Remarks", "Welcome"],
        type: "keynote"
    },
    {
        id: "09:10",
        time: "09:10 AM – 09:30 AM",
        title: "Opening Keynote",
        description: "Cyber Resilience for Kuwait: Securing National Infrastructure, Digital Economy & AI Innovation.",
        tags: ["National Infrastructure", "Digital Economy", "AI Innovation"],
        type: "keynote"
    },
    {
        id: "09:30",
        time: "09:30 AM – 09:45 AM",
        title: "Sponsor Presentation",
        description: "",
        tags: ["Tech Showcase"],
        type: "sponsor"
    },
    {
        id: "09:45",
        time: "09:45 AM – 10:25 AM",
        title: "Cyber Leadership & Governance",
        description: "Cybersecurity at the Executive Table: Leadership, Regulation & Strategic Risk Management.",
        tags: ["Governance", "Strategic Risk", "Compliance", "Leadership"],
        type: "panel"
    },
    {
        id: "10:25",
        time: "10:25 AM – 10:40 AM",
        title: "Sponsor Presentation",
        description: "",
        tags: ["Tech Showcase"],
        type: "sponsor"
    },
    {
        id: "10:40",
        time: "10:40 AM – 11:10 AM",
        title: "Coffee & Networking Break",
        description: "",
        tags: ["Networking"],
        type: "break"
    },
    {
        id: "11:10",
        time: "11:10 AM – 11:30 AM",
        title: "Fireside Chat: AI Threats",
        description: "Preparing for the Next Generation of Cyber Attacks. Transforming defensive strategies.",
        tags: ["AI Threats", "Defense Strategies"],
        type: "panel"
    },
    {
        id: "11:30",
        time: "11:30 AM – 12:10 PM",
        title: "OT & Critical Infrastructure",
        description: "Securing Kuwait’s Critical Infrastructure: Strengthening OT, Industrial Cybersecurity & Resilience.",
        tags: ["OT Security", "SCADA", "Ransomware"],
        type: "panel"
    },
    {
        id: "12:10",
        time: "12:10 PM – 12:25 PM",
        title: "Sponsor Presentation",
        description: "",
        tags: ["Tech Showcase"],
        type: "sponsor"
    },
    {
        id: "12:25",
        time: "12:25 PM – 12:40 PM",
        title: "Sponsor Presentation",
        description: "",
        tags: ["Tech Showcase"],
        type: "sponsor"
    },
    {
        id: "12:40",
        time: "12:40 PM – 01:10 PM",
        title: "Networking & Refreshment Break",
        description: "",
        tags: ["Networking"],
        type: "break"
    },
    {
        id: "01:10",
        time: "01:10 PM – 01:50 PM",
        title: "Banking & Financial Resilience",
        description: "Securing Kuwait’s Financial Ecosystem: Strengthening Resilience, Fraud Prevention & Compliance.",
        tags: ["Fintech Security", "Banking", "Fraud Prevention"],
        type: "panel"
    },
    {
        id: "01:50",
        time: "01:50 PM – 02:30 PM",
        title: "Data Protection & Privacy",
        description: "Safeguarding Data in Kuwait’s Expanding Digital Economy. Aligning strategies with CITRA.",
        tags: ["Data Privacy", "Digital Trust", "GDPR/CITRA"],
        type: "panel"
    },
    {
        id: "02:30",
        time: "02:30 PM – 02:45 PM",
        title: "Sponsor Presentation",
        description: "",
        tags: ["Tech Showcase"],
        type: "sponsor"
    },
    {
        id: "02:45",
        time: "02:45 PM – 03:00 PM",
        title: "Sponsor Presentation",
        description: "",
        tags: ["Tech Showcase"],
        type: "sponsor"
    },
    {
        id: "03:00",
        time: "03:00 PM – 03:15 PM",
        title: "Cyber First Awards",
        description: "Awards for Visionary of the Year, AI Leadership, Resilience, and more.",
        tags: ["Awards", "Celebration"],
        type: "keynote"
    },
    {
        id: "03:15",
        time: "03:15 PM Onwards",
        title: "Closing Remarks & Lunch",
        description: "",
        tags: ["Closing", "Lunch"],
        type: "break"
    },
];

export default function KuwaitAgenda() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-92%"]);

    return (
        <section ref={targetRef} className="relative h-[250vh] bg-[#050505]">
            <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">

                <div className="max-w-[1400px] mx-auto w-full px-6 mb-8 md:mb-12">
                    <span className="text-[#01BBF5] font-mono text-xs md:text-sm tracking-[0.3em] uppercase mb-4 block text-center">
                        The Schedule
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight text-center" style={{ fontFamily: "var(--font-display)" }}>
                        Agenda <span className="text-[#01BBF5]">At A Glance</span>
                    </h2>
                </div>

                <div className="relative w-full">
                    {/* Horizontal Scroll Track */}
                    <motion.div style={{ x }} className="flex gap-6 md:gap-10 px-6 md:px-24 w-max">
                        {panels.map((panel, i) => (
                            <AgendaCard key={i} panel={panel} index={i} />
                        ))}
                    </motion.div>
                </div>

                {/* Progress Bar (Optional Visual Cue) */}
                <div className="absolute bottom-10 left-6 right-6 h-[1px] bg-white/10 hidden md:block">
                    <motion.div style={{ scaleX: scrollYProgress, transformOrigin: "0%" }} className="h-full bg-[#01BBF5]" />
                </div>
            </div>
        </section>
    );
}

function AgendaCard({ panel, index }: { panel: any, index: number }) {
    // Styling based on type
    const isPanel = panel.type === "panel";
    const isKeynote = panel.type === "keynote";
    const isBreak = panel.type === "break";
    const isSponsor = panel.type === "sponsor";

    // Background Image Logic
    let bgImage = "";
    if (isKeynote) bgImage = "https://cyberfirstseries.com/wp-content/uploads/2025/03/Radisson-blu-hotel-Kuwait.jpg"; // Venue/Stage
    if (panel.tags.includes("Networking") || isBreak || panel.tags.includes("Welcome")) bgImage = "https://uae.cyberfirstseries.com/wp-content/uploads/2025/10/ARU00511.jpg"; // Crowd
    if (isPanel) bgImage = "https://cyberfirstseries.com/wp-content/uploads/2025/04/Dr.-Huda-Alrashidi.jpg"; // Speaker/Panel (General ref)
    if (panel.tags.includes("OT Security") || panel.tags.includes("AI Threats")) bgImage = "https://uae.cyberfirstseries.com/wp-content/uploads/2025/10/ARU00722.jpg"; // Tech/Darker

    // Marketing Content for Sponsors
    const displayTitle = isSponsor ? "Technology Showcase" : panel.title;
    const displayDesc = isSponsor ? "This stage is reserved for industry leaders. Showcase your innovations to 500+ CISOs." : panel.description;

    return (
        <div
            className={`
                relative flex-shrink-0 w-[85vw] md:w-[450px] h-[450px] 
                bg-[#0A0A0A] border rounded-3xl p-8 md:p-10 flex flex-col justify-between overflow-hidden group transition-all duration-500
                ${isSponsor ? "border-dashed border-white/20 hover:border-[#01BBF5] hover:bg-[#01BBF5]/5 cursor-pointer" : "border-white/10 hover:border-[#01BBF5]/30"}
            `}
        >
            {/* Background Image & Overlay */}
            {bgImage && !isSponsor && (
                <>
                    <div className="absolute inset-0">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={bgImage}
                            alt={panel.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40 filter grayscale hover:grayscale-0"
                        />
                    </div>
                    {/* Strong Gradient Overlay for Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40" />
                </>
            )}

            {/* Sponsor Marketing Overlay */}
            {isSponsor && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                    <span className="text-[#01BBF5] text-sm font-bold tracking-widest uppercase border border-[#01BBF5] px-6 py-3 rounded-full bg-[#01BBF5]/10 backdrop-blur-md shadow-[0_0_20px_rgba(1,187,245,0.3)]">
                        Reserve Slot →
                    </span>
                </div>
            )}

            {/* Content Container (z-10 for layering) */}
            <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                    <div className="flex items-center justify-between mb-6">
                        <span className={`font-mono text-sm tracking-widest uppercase ${isBreak ? "text-white/60" : "text-[#01BBF5]"}`}>
                            {panel.time.split(" – ")[0]}
                        </span>
                        {isKeynote && <span className="px-3 py-1 rounded-full border border-[#01BBF5]/30 bg-[#01BBF5]/20 text-[#01BBF5] text-[10px] uppercase font-bold tracking-wider backdrop-blur-md">Keynote</span>}
                        {isPanel && <span className="px-3 py-1 rounded-full border border-white/10 bg-white/10 text-white/80 text-[10px] uppercase font-bold tracking-wider backdrop-blur-md">Panel</span>}
                        {isSponsor && <span className="px-3 py-1 rounded-full border border-white/10 text-white/40 text-[10px] uppercase font-bold tracking-wider group-hover:text-[#01BBF5] group-hover:border-[#01BBF5]/30 transition-colors">Available</span>}
                    </div>

                    <h3 className={`font-bold text-white mb-4 leading-tight drop-shadow-lg ${isSponsor ? "text-2xl text-white/60 group-hover:text-white transition-colors" : "text-3xl md:text-3xl"}`} style={{ fontFamily: "var(--font-display)" }}>
                        {displayTitle}
                    </h3>

                    <p className={`text-sm font-light leading-relaxed mb-6 drop-shadow-md ${isSponsor ? "text-white/40 group-hover:text-white/80 transition-colors" : "text-white/80"}`} style={{ fontFamily: "var(--font-outfit)" }}>
                        {displayDesc}
                    </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                    {panel.tags.map((tag: string) => (
                        <span key={tag} className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-[10px] text-white/70 group-hover:text-white uppercase tracking-widest font-medium transition-colors backdrop-blur-sm">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}
