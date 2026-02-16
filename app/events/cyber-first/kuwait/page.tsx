import { Metadata } from "next";
import {
    KuwaitHero,
    KuwaitAuthority,
    KuwaitIntroduction,
    KuwaitExperience,
    KuwaitSpeakers,
    KuwaitAgenda,
    KuwaitVenue,
    KuwaitSponsors,
    KuwaitRegistration,
    KuwaitImpact,
} from "@/components/cyber-first/kuwait";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
    title: "Cyber First Kuwait 2026 | 3rd Edition",
    description: "The GCC's premier cybersecurity leadership summit. April 21, 2026 — Radisson Blu Hotel, Kuwait City.",
};

export default function CyberFirstKuwaitPage() {
    return (
        <main className="bg-[#050505] min-h-screen text-white selection:bg-[#01BBF5] selection:text-black">
            {/* 1. Cinematic Hero */}
            <KuwaitHero />

            {/* 1.5. Authority Strip */}
            <KuwaitAuthority />

            {/* 2. Introduction / Write Up */}
            <KuwaitIntroduction />

            {/* 2.5 Strategic Impact Stats */}
            <KuwaitImpact />

            {/* 3. Bento Grid Experience */}
            <KuwaitExperience />

            {/* 4. Agenda - Minimalist Timeline */}
            <KuwaitAgenda />

            {/* 5. Speakers - Horizontal Scroll */}
            <KuwaitSpeakers />

            {/* 6. Venue - Parallax */}
            {/* <KuwaitVenue /> */}

            {/* 7. Sponsors - Clean Grid */}
            <KuwaitSponsors />

            {/* 8. Registration - Premium Form */}
            <KuwaitRegistration />

            <Footer />
        </main>
    );
}
