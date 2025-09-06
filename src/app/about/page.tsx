"use client";

import GetInTouch from "@/components/sections/GetInTouch";
import Image from "next/image";
import React from "react";

// Centralized image array
const teamImages = [
  {
    id: 1,
    src: "/images/team/Our-Team.webp",
    alt: "Our Team"
  },
  {
    id: 2,
    src: "/images/team/Team-Collaboration.webp",
    alt: "Team Collaboration"
  },
];

export default function About() {
  return (
    <div className='relative w-full h-fit px-6 md:px-12 lg:px-20'>
      {/* Page layout paddings */}

      <div className="max-w-6xl mx-auto sm:px-4 md:px-6 pt-12 lg:pt-16">
        {/* Page Heading */}
        <section className="text-center mb-12 px-2">
          <h1 className="text-4xl md:text-5xl font-bold">About Us</h1>
          <p className="mt-3 text-gray-600 dark:text-gray-300 text-justify sm:text-center max-w-2xl mx-auto">
            At Velroxe Studio, we’re passionate about building beautiful, high-performance
            digital experiences that empower brands and individuals. Our team blends
            creativity, strategy, and technology to deliver exceptional solutions.
          </p>
        </section>

        <section className="space-y-12 md:space-y-20 mb-6 px-2">
          {/* Section 1 */}
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            {/* Text */}
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify sm:text-left">
                We believe in crafting more than just websites or applications — we
                build experiences that leave lasting impressions. Our team is driven
                by innovation, focusing on creating scalable, future-ready solutions
                that help our clients stand out in the digital world.
              </p>
            </div>
            {/* Image */}
            <div className="relative w-full lg:flex-1 max-w-md h-72 lg:h-96">
              <Image
                src={teamImages[0].src}
                alt={teamImages[0].alt}
                fill
                className="rounded-2xl object-cover"
              />
            </div>
          </div>

          {/* Section 2 */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-16">
            {/* Text */}
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Team</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify sm:text-left">
                At Velroxe Studio, we’re a small but powerful team of designers,
                developers, and strategists. With a shared vision of blending
                design and functionality, we work closely with each client to turn
                their ideas into reality. Collaboration and creativity are at the
                core of everything we do.
              </p>
            </div>
            {/* Image */}
            <div className="relative w-full lg:flex-1 max-w-md h-72 lg:h-96">
              <Image
                src={teamImages[1].src}
                alt={teamImages[1].alt}
                fill
                className="rounded-2xl object-cover"
              />
            </div>
          </div>
        </section>

        <GetInTouch />
      </div>
    </div>
  );
}
