"use client";

import React from "react";

interface DottedBackgroundProps {
  interval?: number; // spacing between dots (px)
  dotSize?: number; // size of each dot (px)
  className?: string; // extra classes (z-index, position, etc.)
}

export default function DottedBackground({
  interval = 40,
  dotSize = 2,
  className = "",
}: DottedBackgroundProps) {
  const backgroundStyle: React.CSSProperties = {
    backgroundImage: `radial-gradient(circle, var(--gridBackgroundLineColor) ${dotSize}px, transparent ${dotSize}px)`,
    backgroundSize: `${interval}px ${interval}px`,
  };

  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={backgroundStyle}
    />
  );
}
