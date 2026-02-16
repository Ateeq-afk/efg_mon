"use client";

import { motion } from "framer-motion";

const speakers = [
    {
        id: 1,
        name: "Dr. Huda Alrashidi",
        title: "Cybersecurity Leader",
        organization: "Government of Kuwait",
        image: "https://cyberfirstseries.com/wp-content/uploads/2025/04/Dr.-Huda-Alrashidi.jpg",
    },
    {
        id: 2,
        name: "Yousef El-Kourdi",
        title: "Senior Security Executive",
        organization: "",
        image: "https://efg-final.s3.eu-north-1.amazonaws.com/cyberfirst-kuwait-2026/speakers/yousuf-el-kourdi.jpeg",
    },
    {
        id: 3,
        name: "Ahmed Nahla",
        title: "Cybersecurity Expert",
        organization: "",
        image: "https://efg-final.s3.eu-north-1.amazonaws.com/cyberfirst-kuwait-2026/speakers/Ahmed-al-nahla.jpeg",
    },
    // Placeholders
    ...Array.from({ length: 7 }).map((_, i) => ({
        id: `ph-${i}`,
        name: "Speaker Announced Soon",
        title: "Stay Tuned",
        organization: "",
        image: "",
        isPlaceholder: true
    }))
];

export default function KuwaitSpeakers() {
    return (
        <section className="py-24 bg-[#050505] relative overflow-hidden">
            {/* Header */}
            <div className="max-w-[1400px] mx-auto px-6 mb-12 flex flex-col items-center text-center gap-6">
                <div>
                    <span className="text-[#01BBF5] font-mono text-xs md:text-sm tracking-[0.3em] uppercase mb-4 block">
                        The Speakers
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-2" style={{ fontFamily: "var(--font-display)" }}>
                        Visionary Voices
                    </h2>
                    <p className="text-white/60 font-light text-lg max-w-2xl mx-auto" style={{ fontFamily: "var(--font-outfit)" }}>
                        Shaping the future of Kuwait&apos;s digital defense.
                    </p>
                </div>
            </div>

            {/* Grid Layout - 5 Columns */}
            <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
                {speakers.map((speaker, i) => (
                    <SpeakerCard key={speaker.id} speaker={speaker} index={i} />
                ))}
            </div>
        </section>
    );
}

function SpeakerCard({ speaker, index }: { speaker: any, index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className={`
                w-full h-[400px] relative rounded-2xl overflow-hidden group cursor-pointer bg-[#0A0A0A] 
                ${speaker.isPlaceholder ? "border-dashed border-white/10 hover:border-[#01BBF5] hover:bg-[#01BBF5]/5" : "border border-white/10 hover:border-[#01BBF5]/30"}
                transition-colors duration-500
            `}
        >
            {speaker.isPlaceholder ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                    <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center mb-4 text-[#01BBF5] text-2xl group-hover:bg-[#01BBF5]/10 group-hover:border-[#01BBF5] transition-all duration-500 shadow-[0_0_20px_rgba(1,187,245,0.1)] group-hover:shadow-[0_0_30px_rgba(1,187,245,0.4)]">
                        +
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 leading-tight" style={{ fontFamily: "var(--font-display)" }}>
                        More Voices
                    </h3>
                    <p className="text-white/40 text-xs font-light" style={{ fontFamily: "var(--font-outfit)" }}>
                        Announced Soon
                    </p>
                </div>
            ) : (
                <>
                    {/* Image Container */}
                    <div className="absolute inset-0 bg-gray-900">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={speaker.image}
                            alt={speaker.name}
                            className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                        />
                    </div>

                    {/* Gradient Overlay - Cinematic */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                        <div className="mb-2 w-8 h-[2px] bg-[#01BBF5] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
                        <h3 className="text-xl font-bold text-white mb-1 leading-tight" style={{ fontFamily: "var(--font-display)" }}>{speaker.name}</h3>
                        {speaker.organization && (
                            <p className="text-[#01BBF5] font-medium text-[10px] mb-1 uppercase tracking-wider truncate" style={{ fontFamily: "var(--font-mono)" }}>
                                {speaker.organization}
                            </p>
                        )}
                        <p className="text-white/60 text-xs font-light leading-relaxed line-clamp-2" style={{ fontFamily: "var(--font-outfit)" }}>
                            {speaker.title}
                        </p>
                    </div>

                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none shadow-[inset_0_0_40px_rgba(1,187,245,0.1)]" />
                </>
            )}
        </motion.div>
    )
}
