"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/utils/constants";
import ShinyButton from "../ui/ShinyButton";
import { MdArrowOutward } from "react-icons/md";

/**
 * Marquee + draggable (pointer events) — PURE JS
 * - uses a cycle-wrap technique so it's infinite
 * - pointer capture is always set/released on the track element
 * - momentum produced from last move velocity, decays over time
 */

export default function PortfolioHome() {
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // state (closed-over variables)
    let rafId = 0;
    let lastTime = 0;
    let x = 0; // translateX in px
    let momentum = 0; // px/sec
    let dragging = false;
    let lastPointerX = 0;
    let lastPointerTime = 0;
    let lastMoveVelocity = 0;
    const pointerIdRef = { id: null as number | null }; // store active pointer id

    // config
    const baseDuration = 40; // seconds to complete one cycle
    const momentumDecayRate = 6; // higher = faster decay
    const maxMomentum = 5000;

    // compute widths
    const calcWidths = () => {
      const full = track.scrollWidth || 0;
      const cycle = full / 2 || 0; // because dom has duplicated items
      return { full, cycle };
    };

    let { cycle: cycleWidth } = calcWidths();

    // performance helpers
    track.style.willChange = "transform";
    track.style.display = "flex";

    // keep translate within (-cycleWidth, 0]
    const setX = (val: number) => {
      x = val;
      if (cycleWidth > 0) {
        // normalize quickly using modulo-like behaviour but safer for JS floats:
        while (x <= -cycleWidth) x += cycleWidth;
        while (x > 0) x -= cycleWidth;
      }
      track.style.transform = `translate3d(${x}px,0,0)`;
    };

    // animation loop
    const animate = (time: number) => {
      if (!lastTime) lastTime = time;
      const dt = Math.min((time - lastTime) / 1000, 0.05); // clamp dt for stability
      lastTime = time;

      if (!dragging) {
        // base auto-scroll (leftwards)
        const baseSpeed = cycleWidth / baseDuration; // px / s
        // movement (left is negative)
        const movement = -(baseSpeed + momentum) * dt;
        setX(x + movement);

        // decay momentum with exponential-style decay for smooth feel
        if (Math.abs(momentum) > 0.1) {
          const decay = Math.exp(-momentumDecayRate * dt);
          momentum *= decay;
          if (Math.abs(momentum) < 0.5) momentum = 0;
        } else {
          momentum = 0;
        }
      }

      rafId = requestAnimationFrame(animate);
    };

    // pointer handlers (use pointer events — covers mouse + touch + pen)
    const onPointerDown = (e: PointerEvent) => {
      // only left mouse button or touch/pen
      if (e.pointerType === "mouse" && e.button !== 0) return;

      dragging = true;
      momentum = 0;
      lastPointerX = e.clientX;
      lastPointerTime = performance.now();
      lastMoveVelocity = 0;

      // IMPORTANT: set pointer capture on the track element (not e.target)
      try {
        track.setPointerCapture(e.pointerId);
        pointerIdRef.id = e.pointerId;
      } catch (err) {
        // some browsers might not allow capture, ignore
        pointerIdRef.id = null;
      }

      // prevent text selection while dragging
      document.documentElement.style.userSelect = "none";
      document.documentElement.style.touchAction = "none";
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!dragging) return;
      const now = performance.now();
      const dx = e.clientX - lastPointerX;
      const dt = Math.max((now - lastPointerTime) / 1000, 1 / 120);

      // move content by dx (pointer right => content moves right)
      setX(x + dx);

      // instantaneous velocity (px/s)
      const instVel = dx / dt;
      // smooth it a bit to avoid jumpy momentum
      lastMoveVelocity = lastMoveVelocity * 0.2 + instVel * 0.8;

      lastPointerX = e.clientX;
      lastPointerTime = now;
    };

    const onPointerUp = (e: PointerEvent) => {
      if (!dragging) return;
      dragging = false;

      // invert lastMoveVelocity to set momentum consistent with base auto-scroll
      // (a left flick should increase leftward speed)
      momentum = -lastMoveVelocity;

      // clamp
      if (momentum > maxMomentum) momentum = maxMomentum;
      if (momentum < -maxMomentum) momentum = -maxMomentum;

      // release pointer capture on the track (use stored pointer id)
      if (pointerIdRef.id !== null) {
        try {
          track.releasePointerCapture(pointerIdRef.id);
        } catch {
          /* ignore */
        }
        pointerIdRef.id = null;
      }

      // restore selection/touch
      document.documentElement.style.userSelect = "";
      document.documentElement.style.touchAction = "";
    };

    // attach listeners
    track.addEventListener("pointerdown", onPointerDown, { passive: true });
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerup", onPointerUp, { passive: true });
    window.addEventListener("pointercancel", onPointerUp, { passive: true });

    // ResizeObserver to recalc cycle width when DOM/size changes
    const ro = new ResizeObserver(() => {
      const sizes = calcWidths();
      cycleWidth = sizes.cycle;
    });
    ro.observe(track);

    // start from x=0
    setX(0);
    rafId = requestAnimationFrame(animate);

    // cleanup
    return () => {
      cancelAnimationFrame(rafId);
      track.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerUp);
      ro.disconnect();
      document.documentElement.style.userSelect = "";
      document.documentElement.style.touchAction = "";
    };
  }, []);

  return (
    <section className="w-full relative z-10 py-8 lg:py-12 overflow-hidden bg-transparent">
      <div className="max-w-6xl mx-auto select-none">
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
          Featured Projects
        </h2>

        <div className="relative w-full py-4 overflow-hidden">
          <div
            ref={trackRef}
            className="flex gap-6"
            style={{ cursor: "grab", willChange: "transform" }}
          >
            {[...projects, ...projects].map((project, idx) => (
              <div
                key={idx}
                className="min-w-[250px] max-w-[250px] hover-cursor-effect rounded-xl glassmorphism shadow-md overflow-hidden bg-white dark:bg-black border border-[var(--borderColor1)]"
              >
                <div className="relative w-full h-40">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover relative z-5"
                  />
                  {/* Overlay to restrict image grabbing */}
                  <div className="w-full h-full relative z-6"></div>
                </div>
                <div className="p-3">
                  <h3 className="font-semibold text-lg">{project.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <Link href="/portfolio">
            <ShinyButton
              icon={<MdArrowOutward />}
              bgColor="black"
              iconHoverEffect="raiseTopRight"
              className="border"
            >
              See Our Work
            </ShinyButton>
          </Link>
        </div>
      </div>
    </section>
  );
}
