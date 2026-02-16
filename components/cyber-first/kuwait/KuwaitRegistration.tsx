"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const CYBER_BLUE = "#01BBF5";

type RegistrationType = "attend" | "speak" | "partner";

export default function KuwaitRegistration() {
    const [regType, setRegType] = useState<RegistrationType>("attend");

    const getHeading = () => {
        if (regType === "speak") return <>Voice Your <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">Vision.</span></>;
        if (regType === "partner") return <>Lead The <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">Industry.</span></>;
        return <>Secure Your <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">Seat Today.</span></>;
    };

    const getButtonText = () => {
        if (regType === "speak") return "Submit Proposal";
        if (regType === "partner") return "Request Sponsorship Deck";
        return "Request Invitation";
    };

    return (
        <section id="register" className="relative min-h-screen bg-black flex items-center overflow-hidden py-24">

            {/* Ambient Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute right-0 bottom-0 w-2/3 h-2/3 bg-gradient-to-t from-[#01BBF5]/10 via-[#01BBF5]/5 to-transparent blur-[120px] opacity-30 pointer-events-none" />
            </div>

            <div className="max-w-[1240px] mx-auto px-6 w-full relative z-10 grid lg:grid-cols-2 gap-20 items-center">

                {/* Left: Dynamic Pitch (Fixed Height Container to Prevent Jumps) */}
                <div className="relative min-h-[450px] flex flex-col justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={regType}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 10 }}
                            transition={{ duration: 0.3 }}
                        >
                            <span className="text-[#01BBF5] font-mono text-xs md:text-sm tracking-[0.3em] uppercase mb-6 block">
                                {(regType === "attend" ? "Delegate Registration" : regType === "speak" ? "Call for Papers" : "Partnership Inquiry")}
                            </span>

                            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-none mb-8 min-h-[144px]" style={{ fontFamily: "var(--font-display)" }}>
                                {getHeading()}
                            </h2>

                            <div className="space-y-6 text-lg text-white/60 font-light max-w-md min-h-[200px]" style={{ fontFamily: "var(--font-outfit)" }}>
                                {regType === "attend" && (
                                    <p>Join 500+ CISOs and government leaders at the region&apos;s most exclusive cybersecurity summit.</p>
                                )}
                                {regType === "speak" && (
                                    <p>Share your expertise with the nation&apos;s decision-makers. We are looking for technical deep-dives and strategic case studies.</p>
                                )}
                                {regType === "partner" && (
                                    <p>Position your brand at the center of Kuwait&apos;s digital transformation. Limited exhibition and thought-leadership slots available.</p>
                                )}

                                <ul className="space-y-4 mt-8">
                                    <motion.li
                                        initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}
                                        className="flex items-center gap-4"
                                    >
                                        <div className="w-1 h-6 bg-[#01BBF5]" />
                                        <span className="text-white">
                                            {regType === "attend" ? "Executive Networking" : regType === "speak" ? "VIP Speaker Dinner Access" : "Exclusive Booth Location"}
                                        </span>
                                    </motion.li>
                                    <motion.li
                                        initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
                                        className="flex items-center gap-4"
                                    >
                                        <div className="w-1 h-6 bg-[#01BBF5]/60" />
                                        <span className="text-white">
                                            {regType === "attend" ? "CPD Accredited" : regType === "speak" ? "Full Conference Pass" : "Brand Visibility"}
                                        </span>
                                    </motion.li>
                                    <motion.li
                                        initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}
                                        className="flex items-center gap-4"
                                    >
                                        <div className="w-1 h-6 bg-[#01BBF5]/30" />
                                        <span className="text-white">
                                            {regType === "attend" ? "Post-Event Research" : regType === "speak" ? "Media Interviews" : "Lead Generation"}
                                        </span>
                                    </motion.li>
                                </ul>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Right: Registration Form Card */}
                <motion.div
                    layout // Smooth layout transitions
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-[#0A0A0A]/80 backdrop-blur-2xl border border-white/10 p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden shadow-2xl"
                >
                    {/* Role Toggles */}
                    <div className="flex p-1 bg-white/5 rounded-full mb-10 w-fit">
                        {(["attend", "speak", "partner"] as const).map((type) => (
                            <button
                                key={type}
                                onClick={() => setRegType(type)}
                                className={`
                                    px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300
                                    ${regType === type ? "bg-[#01BBF5] text-black shadow-lg shadow-[#01BBF5]/20" : "text-white/40 hover:text-white"}
                                `}
                            >
                                {type === "attend" ? "Attend" : type === "speak" ? "Speak" : "Partner"}
                            </button>
                        ))}
                    </div>

                    <form className="space-y-6">
                        <div className="grid grid-cols-2 gap-6">
                            <InputGroup label="First Name" type="text" />
                            <InputGroup label="Last Name" type="text" />
                        </div>
                        <InputGroup label="Work Email" type="email" />

                        <AnimatePresence mode="popLayout">
                            {regType === "speak" && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                >
                                    <InputGroup label="Proposed Topic / Abstract" type="text" />
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <div className="grid grid-cols-2 gap-6">
                            <InputGroup label="Job Title" type="text" />
                            <InputGroup label="Company" type="text" />
                        </div>

                        <button className="w-full mt-6 bg-white hover:bg-[#01BBF5] text-black font-bold py-5 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-3 group shadow-xl">
                            {getButtonText()}
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        </button>
                    </form>

                    <p className="text-center text-white/30 text-[10px] uppercase tracking-widest mt-6">
                        By registering, you agree to our Terms & Privacy Policy.
                    </p>
                </motion.div>

            </div>
        </section>
    );
}

function InputGroup({ label, type }: { label: string, type: string }) {
    return (
        <div className="relative group mb-1">
            <input
                type={type}
                placeholder=" "
                className="peer w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-transparent focus:outline-none focus:border-[#01BBF5] focus:bg-white/10 transition-all duration-300"
            />
            <label className="absolute left-5 top-4 text-white/40 text-sm transition-all duration-300 pointer-events-none 
                peer-placeholder-shown:text-base peer-placeholder-shown:top-4 
                peer-focus:-top-3 peer-focus:text-xs peer-focus:text-[#01BBF5] peer-focus:bg-[#0A0A0A] peer-focus:px-2 rounded
                peer-not-placeholder-shown:-top-3 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:bg-[#0A0A0A] peer-not-placeholder-shown:px-2"
            >
                {label}
            </label>
        </div>
    )
}
