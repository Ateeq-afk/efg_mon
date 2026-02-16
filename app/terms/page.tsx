"use client";

import Footer from "@/components/sections/Footer";

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-[var(--black)]">
            <div className="pt-32 pb-20 px-6 max-w-[900px] mx-auto">
                <h1 className="text-[var(--white)] font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold tracking-tight mb-12">
                    Terms of Use
                </h1>

                <div className="prose prose-invert prose-lg max-w-none text-[#A0A0A0] font-[family-name:var(--font-outfit)] opacity-80">
                    <p className="mb-6">Last updated: February 15, 2026</p>

                    <h3 className="text-white text-xl font-bold mt-8 mb-4">1. Agreement to Terms</h3>
                    <p className="mb-4">
                        These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Events First Group ("we", "us", or "our"), concerning your access to and use of our website.
                    </p>

                    <h3 className="text-white text-xl font-bold mt-8 mb-4">2. Intellectual Property Rights</h3>
                    <p className="mb-4">
                        Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
                    </p>

                    <h3 className="text-white text-xl font-bold mt-8 mb-4">3. User Representations</h3>
                    <p className="mb-4">
                        By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}
