"use client";

import React from "react";

interface GridBackgroundProps {
  interval?: number; // spacing between lines in pixels
  className?: string; // allow extra styling (z-index, positioning, etc.)
}

export default function GridBackground({
  interval = 45,
  className = "",
}: GridBackgroundProps) {
  const backgroundStyle: React.CSSProperties = {
    backgroundImage: `
      linear-gradient(to right, var(--gridBackgroundLineColor) 1px, transparent 1px),
      linear-gradient(to bottom, var(--gridBackgroundLineColor) 1px, transparent 1px)
    `,
    backgroundSize: `${interval}px ${interval}px`,
  };

  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={backgroundStyle}
    />
  );
}
