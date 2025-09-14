"use client";

import React, { useEffect, useState } from "react";

type Props = {
  children?: React.ReactNode;
  className?: string;
  bgColor?: string;
  textColor?: string;
  shineColor?: string;
  shineOpacity?: number;
  duration?: number;
  pauseOnHover?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right"; // NEW ✅
  iconHoverEffect?: "rotate" | "moveRight" | "moveLeft" | "raiseTopRight" | null; // UPDATED ✅
  onClick?: () => void;
  disabled?: boolean;
};

export default function ShinyButton({
  children = "Shiny Button",
  className = "",
  bgColor = "#FA1E51",
  textColor = "white",
  shineColor = "white",
  shineOpacity = 0.7,
  duration = 4,
  pauseOnHover = false,
  icon,
  iconPosition = "right", // ✅ Default: right
  iconHoverEffect = null,
  onClick,
  disabled = false,
}: Props) {
  const [shineRgb, setShineRgb] = useState("255,255,255");

  useEffect(() => {
    const colorToRgb = (color: string) => {
      try {
        const el = document.createElement("div");
        el.style.color = color;
        document.body.appendChild(el);
        const computed = getComputedStyle(el).color;
        document.body.removeChild(el);
        const nums = computed.match(/\d+/g);
        if (!nums) return "255,255,255";
        const [r, g, b] = nums;
        return `${r},${g},${b}`;
      } catch {
        return "255,255,255";
      }
    };
    setShineRgb(colorToRgb(shineColor));
  }, [shineColor]);

  const style = {
    backgroundColor: bgColor,
    color: textColor,
    "--shine-rgb": shineRgb,
    "--shine-oapcity": String(shineOpacity),
    "--shine-duration": `${duration}s`,
    "--pause-on-hover": pauseOnHover ? "paused" : "running",
  } as React.CSSProperties;

  const iconClasses = `
    inline-flex text-lg sm:text-xl md:text-2xl
    transition-transform duration-300
    ${iconHoverEffect === "rotate"
      ? "group-hover:-rotate-[35deg]"
      : iconHoverEffect === "moveRight"
        ? "group-hover:translate-x-1"
        : iconHoverEffect === "moveLeft"
          ? "group-hover:-translate-x-1" // ✅ NEW effect
          : iconHoverEffect === "raiseTopRight"
            ? "group-hover:translate-x-1 group-hover:-translate-y-1"
            : ""
    }
  `;

  return (
    <button
      aria-label={typeof children === "string" ? children : "button"}
      className={`
        hover-cursor-effect shiny-btn group relative overflow-hidden
        px-4 py-2 text-sm
        sm:px-5 sm:py-3 sm:text-base
        md:px-6 md:py-3.5 md:text-lg
        rounded-lg sm:rounded-xl md:rounded-2xl
        font-medium ${disabled ? "cursor-not-allowed" : "cursor-pointer"}
        ${className}
      `}
      style={style}
      onClick={onClick}
      disabled={disabled}
    >
      <span className="relative z-10 flex items-center gap-2">
        {/* Icon left */}
        {icon && iconPosition === "left" && <span className={iconClasses}>{icon}</span>}

        {/* Text */}
        {children}

        {/* Icon right */}
        {icon && iconPosition === "right" && <span className={iconClasses}>{icon}</span>}
      </span>

      <style jsx>{`
        .shiny-btn {
          position: relative;
          display: inline-block;
          transform: translateZ(0);
        }

        .shiny-btn::before {
          content: "";
          position: absolute;
          top: 50%;
          left: -50%;
          transform: translateY(-50%) rotate(20deg);
          width: 100px;
          height: 300%;
          pointer-events: none;
          background: linear-gradient(
            90deg,
            rgba(var(--shine-rgb), 0) 0%,
            rgba(var(--shine-rgb), 0.4) 45%,
            rgba(var(--shine-rgb), 0.7) 50%,
            rgba(var(--shine-rgb), 0.4) 55%,
            rgba(var(--shine-rgb), 0) 100%
          );
          opacity: var(--shine-oapcity);
          animation: shine var(--shine-duration) linear infinite;
          animation-play-state: var(--pause-on-hover);
        }

        @keyframes shine {
          0% {
            left: -150%;
          }
          100% {
            left: 150%;
          }
        }
      `}</style>
    </button>
  );
}
