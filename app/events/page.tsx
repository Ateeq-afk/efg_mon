"use client";

import { motion } from "framer-motion";
import { EventSeriesShowcase } from "@/components/sections";
import NavBar from "@/components/ui/NavBar"; // Assuming we have a navbar, or we need to check layout
import Footer from "@/components/sections/Footer";

// We'll reuse the EventSeriesShowcase for consistency, 
// possibly wrapping it with a page-specific header.

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-[var(--black)]">
       {/* 
          Note: RootLayout wraps children in <main>, so we might not need to add NavBar here 
          if it's in ConditionalNavigation. Checking layout.tsx suggests ConditionalNavigation handles it.
       */}
      
      <div className="pt-32 pb-20 px-6 max-w-[1320px] mx-auto">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
        >
             <span className="text-[var(--orange)] font-[family-name:var(--font-outfit)] text-xs font-semibold tracking-[2.5px] uppercase mb-4 block">
              Our Portfolio
            </span>
            <h1 className="text-[var(--white)] font-[family-name:var(--font-display)] text-5xl md:text-7xl font-bold tracking-tight mb-6">
              World-Class Events
            </h1>
            <p className="text-[#A0A0A0] font-[family-name:var(--font-outfit)] text-lg font-light max-w-2xl mx-auto leading-relaxed">
              Explore our specialized event series designed for the region's top technology leaders.
            </p>
        </motion.div>
        
        {/* We reuse the section component but potentially we might want to refactor it to be more modular 
            if it has its own section padding. For now, we render it directly.
            However, EventSeriesShowcase has its own <section> tag and padding. 
            Let's wrap it or just use it. 
        */}
      </div>

     <EventSeriesShowcase />
     
     <Footer />
    </div>
  );
}
