import {
  HeroSection,
  EventSeriesShowcase,
  ImpactBar,
  AnnualTimeline,
  ExperienceMosaic,
  LogoBar,
  RegistrationCTA,
  Footer,
} from "@/components/sections";
import SectionTransition from "@/components/effects/SectionTransition";

export default function Home() {
  return (
    <div className="relative bg-[var(--black)]">
      {/* The Hero — The Promise */}
      <HeroSection />

      {/* The Rest of the Page — Slides OVER the Hero */}
      <div
        className="relative z-10"
        style={{ background: "var(--black)" }}
      >
        {/* Section Transition - Sweep */}
        <SectionTransition variant="expand" />

        {/* The Event Series — Four Worlds */}
        <EventSeriesShowcase />

        {/* Section Transition - Expand */}
        <SectionTransition variant="expand" />

        {/* The Impact Bar — Numbers That Matter */}
        <ImpactBar />

        {/* Section Transition - Expand */}
        <SectionTransition variant="expand" />

        {/* Annual Timeline — The Year Ahead */}
        <AnnualTimeline />

        {/* Section Transition */}
        <SectionTransition variant="expand" />

        {/* The EFG Experience — What Brings You Here */}
        <ExperienceMosaic />

        {/* Section Transition */}
        <SectionTransition variant="expand" />

        {/* Partner Logos — The Credibility */}
        <LogoBar />

        {/* Registration — The Conversion */}
        <RegistrationCTA />

        {/* Section Transition */}
        <SectionTransition variant="expand" />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
