"use client";
import React, { useState } from "react";

interface HamburgerMenuProps {
  isActive?: boolean;   // width in rem
  size?: number;   // width in rem
  color?: string;  // CSS color
  durationMs?: number;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
  isActive = false,
  size = 1.25,
  color = "currentColor",
  durationMs = 300,
}) => {

  const width = `${size}rem`;
  const height = `${size * 0.8}rem`;
  const thickness = `${size * 0.1}rem`;
  const gap = `${size * 0.3}rem`;

  return (
    <div
      aria-label="Menu"
      aria-expanded={isActive}
      className="relative inline-block"
      style={{ width, height, color }}
    >
      {/* Top line */}
      <span
        className="absolute left-1/2 top-1/2 rounded-full transition-transform"
        style={{
          width: "100%",
          height: thickness,
          background: "currentColor",
          transform: isActive
            ? "translate(-50%, -50%) rotate(45deg)"
            : `translate(-50%, calc(-50% - ${gap}))`,
          transitionDuration: `${durationMs}ms`,
        }}
      />

      {/* Middle line */}
      <span
        className="absolute left-1/2 top-1/2 rounded-full transition-transform"
        style={{
          width: "100%",
          height: thickness,
          background: "currentColor",
          transform: isActive
            ? "translate(-50%, -50%) scaleX(0)"
            : "translate(-50%, -50%)",
          transitionDuration: `${durationMs}ms`,
        }}
      />

      {/* Bottom line */}
      <span
        className="absolute left-1/2 top-1/2 rounded-full transition-transform"
        style={{
          width: "100%",
          height: thickness,
          background: "currentColor",
          transform: isActive
            ? "translate(-50%, -50%) rotate(-45deg)"
            : `translate(-50%, calc(-50% + ${gap}))`,
          transitionDuration: `${durationMs}ms`,
        }}
      />
    </div>
  );
};

export default HamburgerMenu;
