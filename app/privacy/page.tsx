"use client";

import Footer from "@/components/sections/Footer";

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-[var(--black)]">
            <div className="pt-32 pb-20 px-6 max-w-[900px] mx-auto">
                <h1 className="text-[var(--white)] font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold tracking-tight mb-12">
                    Privacy Policy
                </h1>

                <div className="prose prose-invert prose-lg max-w-none text-[#A0A0A0] font-[family-name:var(--font-outfit)] opacity-80">
                    <p className="mb-6">Last updated: February 15, 2026</p>

                    <h3 className="text-white text-xl font-bold mt-8 mb-4">1. Introduction</h3>
                    <p className="mb-4">
                        Events First Group ("we", "our", or "us") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
                    </p>

                    <h3 className="text-white text-xl font-bold mt-8 mb-4">2. Data We Collect</h3>
                    <p className="mb-4">
                        We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
                    </p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>Identity Data includes first name, last name, username or similar identifier.</li>
                        <li>Contact Data includes email address and telephone numbers.</li>
                        <li>Technical Data includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform.</li>
                        <li>Usage Data includes information about how you use our website and services.</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    );
}
