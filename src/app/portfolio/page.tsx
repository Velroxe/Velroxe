"use client";

import GetInTouch from "@/components/sections/GetInTouch";
import { projects } from "@/utils/constants";
import Image from "next/image";
import React, { useRef } from "react";

// =====================
// HERO COMPONENT
// =====================
function PortfolioHero() {
  return (
    <section className="w-full max-w-6xl mx-auto sm:px-6 pt-12 lg:pt-16 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Our Work & Projects
      </h1>
      <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        A showcase of our recent work and experiments. Each project highlights
        our expertise in design, development, and delivering high-quality web
        experiences.
      </p>
    </section>
  );
}

// =====================
// PROJECT CARD
// =====================
function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      className="group relative rounded-2xl overflow-hidden shadow-lg glassmorphism hover:shadow-xl transition-shadow border border-[var(--borderColor1)]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Image/Video */}
      <div className="relative w-full h-56 md:h-64 overflow-hidden">
        {/* Static image */}
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover absolute inset-0 z-10 transition-opacity duration-300 group-hover:opacity-0"
        />
        {/* Video with Multiple Sources */}
        <video
          ref={videoRef}
          className="w-full h-full object-cover absolute inset-0"
          muted
          loop
          playsInline
        >
          {project.videos.map((src, idx) => (
            <source key={idx} src={src} type={`video/${src.split('.').pop()}`} />
          ))}
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm bg-pink-100 dark:bg-pink-900 text-pink-700 dark:text-pink-200 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

      </div>
    </div>
  );
}

// =====================
// PROJECT GRID
// =====================
function ProjectGrid() {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 pt-12 pb-6 lg:pt-16 lg:pb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </section>
  );
}

// =====================
// PORTFOLIO PAGE
// =====================
export default function Portfolio() {
  return (
    <div className='relative w-full h-fit px-6 md:px-12 lg:px-20'>
      {/* Page layout paddings */}

      <PortfolioHero />
      <ProjectGrid />
      <GetInTouch />
    </div>
  );
}
