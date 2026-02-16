"use client";

import { createContext, useContext, useEffect, useRef, ReactNode } from "react";
import Lenis from "lenis";

// Create a context to expose the Lenis instance globally
const LenisContext = createContext<Lenis | null>(null);

export function useLenis() {
  return useContext(LenisContext);
}

interface SmoothScrollProviderProps {
  children: ReactNode;
}

/**
 * SmoothScrollProvider
 *
 * Wraps the entire application in Lenis smooth scroll.
 * The effect: scrolling feels like driving a luxury car on an empty highway.
 * Momentum builds smoothly, deceleration is graceful, nothing ever feels jerky.
 *
 * Exposes the Lenis instance via React context so any component
 * can call lenis.scrollTo() for programmatic scrolling.
 */
export default function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis with cinematic settings
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.8,
    });

    lenisRef.current = lenis;

    // Store on window so context can access synchronously
    (window as any).__lenis = lenis;

    // Animation frame loop
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup on unmount
    return () => {
      lenis.destroy();
      lenisRef.current = null;
      delete (window as any).__lenis;
    };
  }, []);

  return <>{children}</>;
}
