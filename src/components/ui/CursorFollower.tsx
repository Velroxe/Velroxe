"use client"
import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { useTheme } from "next-themes";

export default function CursorFollower() {
  const { theme, systemTheme } = useTheme();

  const innerRef = useRef<HTMLDivElement | null>(null)
  const outerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const inner = innerRef.current;
    const outer = outerRef.current;
    if (!inner || !outer) return;

    const currentTheme = theme === "system" ? systemTheme : theme;

    gsap.set([inner, outer], { xPercent: -50, yPercent: -50 });

    let x = 0, y = 0, innerX = 0, innerY = 0, outerX = 0, outerY = 0;

    const moveCursor = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
    };

    // animate smooth follower
    gsap.ticker.add(() => {
      innerX += (x - innerX) * 0.5;
      innerY += (y - innerY) * 0.5;
      gsap.set(inner, { x: innerX, y: innerY });

      outerX += (x - outerX) * 0.3;
      outerY += (y - outerY) * 0.3;
      gsap.set(outer, { x: outerX, y: outerY });
    });

    // hover enter/leave animations
    const handleMouseEnter = () => {
      gsap.to(inner, { opacity: 0, duration: 0.2 });
      gsap.to(outer, {
        scale: 2.5,
        borderWidth: 0,
        backgroundColor:
          currentTheme === "dark"
            ? "rgba(255,255,255,0.1)"
            : "rgba(0,0,0,0.1)",
        duration: 0.7,
        ease: "power3.out"
      });
    };

    const handleMouseLeave = () => {
      gsap.to(inner, { opacity: 1, duration: 0.2 });
      gsap.to(outer, {
        scale: 1,
        borderWidth: 2,
        backgroundColor: "transparent",
        duration: 0.7,
        ease: "power3.out"
      });
    };

    // ✅ Event delegation: listen on document, check class
    const delegatedEnter = (e: Event) => {
      if ((e.target as HTMLElement)?.classList?.contains("hover-cursor-effect")) {
        handleMouseEnter();
      }
    };

    const delegatedLeave = (e: Event) => {
      if ((e.target as HTMLElement)?.classList?.contains("hover-cursor-effect")) {
        handleMouseLeave();
      }
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseenter", delegatedEnter, true);
    document.addEventListener("mouseleave", delegatedLeave, true);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseenter", delegatedEnter, true);
      document.removeEventListener("mouseleave", delegatedLeave, true);
    };
  }, [theme, systemTheme]);

  return (
    <>
      <div
        ref={innerRef}
        className="fixed hidden lg:block top-0 left-0 w-2 h-2 bg-[rgba(0,0,0,0.6)] dark:bg-[rgba(255,255,255,0.6)] rounded-full pointer-events-none z-[9999]"
      />
      <div
        ref={outerRef}
        className="fixed hidden lg:block top-0 left-0 w-7 h-7 border-2 border-[rgba(0,0,0,0.6)] dark:border-[rgba(255,255,255,0.6)] rounded-full pointer-events-none z-[9998]"
      />
    </>
  );
}
