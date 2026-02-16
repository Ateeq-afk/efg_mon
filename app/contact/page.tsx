"use client";

import { motion } from "framer-motion";
import Footer from "@/components/sections/Footer";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-[var(--black)]">
            <div className="pt-32 pb-20 px-6 max-w-[1320px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <span className="text-[var(--orange)] font-[family-name:var(--font-outfit)] text-xs font-semibold tracking-[2.5px] uppercase mb-4 block">
                        Get In Touch
                    </span>
                    <h1 className="text-[var(--white)] font-[family-name:var(--font-display)] text-5xl md:text-7xl font-bold tracking-tight mb-6">
                        Contact Us
                    </h1>
                    <p className="text-[#A0A0A0] font-[family-name:var(--font-outfit)] text-lg font-light max-w-2xl mx-auto leading-relaxed">
                        Have a question about an event or want to explore partnership opportunities? We&apos;d love to hear from you.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="space-y-12"
                    >
                        <div>
                            <h3 className="text-white text-xl font-bold mb-4 font-[family-name:var(--font-display)]">Office Location</h3>
                            <p className="text-[#A0A0A0] font-[family-name:var(--font-outfit)] leading-relaxed">
                                Events First Group<br />
                                Dubai Media City<br />
                                Building 2, Office 304<br />
                                Dubai, UAE
                            </p>
                        </div>
                        <div>
                            <h3 className="text-white text-xl font-bold mb-4 font-[family-name:var(--font-display)]">Contact Details</h3>
                            <p className="text-[#A0A0A0] font-[family-name:var(--font-outfit)] leading-relaxed mb-2">
                                <span className="text-white font-medium">Email:</span> hello@eventsfirstgroup.com
                            </p>
                            <p className="text-[#A0A0A0] font-[family-name:var(--font-outfit)] leading-relaxed">
                                <span className="text-white font-medium">Phone:</span> +971 4 123 4567
                            </p>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="bg-[var(--black-card)] p-8 rounded-2xl border border-[rgba(255,255,255,0.06)]"
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-wider text-[#707070] font-semibold">First Name</label>
                                    <input type="text" className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-lg px-4 py-3 text-white focus:border-[var(--orange)] focus:outline-none transition-colors" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-wider text-[#707070] font-semibold">Last Name</label>
                                    <input type="text" className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-lg px-4 py-3 text-white focus:border-[var(--orange)] focus:outline-none transition-colors" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-wider text-[#707070] font-semibold">Email Address</label>
                                <input type="email" className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-lg px-4 py-3 text-white focus:border-[var(--orange)] focus:outline-none transition-colors" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-wider text-[#707070] font-semibold">Message</label>
                                <textarea rows={4} className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-lg px-4 py-3 text-white focus:border-[var(--orange)] focus:outline-none transition-colors"></textarea>
                            </div>
                            <button type="button" className="w-full bg-[var(--orange)] text-white font-bold py-4 rounded-lg hover:bg-[var(--orange-bright)] transition-colors">
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
