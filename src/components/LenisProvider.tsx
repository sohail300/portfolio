import { useEffect, type PropsWithChildren } from "react";
import Lenis from "lenis";

export default function LenisProvider({ children }: PropsWithChildren) {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      smoothWheel: true,
      touchMultiplier: 2,
      lerp: 0.1,
      duration: 1.2,
    });

    // Expose globally for navigation handlers
    (window as unknown as { __lenis?: Lenis }).__lenis = lenis;

    let animationFrameId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    };
    animationFrameId = requestAnimationFrame(raf);

    return () => {
      (window as unknown as { __lenis?: Lenis }).__lenis = undefined;
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  return children as JSX.Element;
}
