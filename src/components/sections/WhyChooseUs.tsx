"use client";

import React from "react";
import { FaBolt, FaUsers, FaCogs, FaChartLine } from "react-icons/fa"; // swap with icons you prefer

const points = [
  {
    title: "Fast & Reliable",
    desc: "We deliver efficient solutions with optimized performance and quick turnaround times.",
    icon: <FaBolt className="text-blue-500 text-2xl" />,
  },
  {
    title: "Expert Team",
    desc: "Our experienced professionals bring creativity, innovation, and dedication to every project.",
    icon: <FaUsers className="text-blue-500 text-2xl" />,
  },
  {
    title: "Tailored Solutions",
    desc: "We craft strategies and products that perfectly match your business needs.",
    icon: <FaCogs className="text-blue-500 text-2xl" />,
  },
  {
    title: "Proven Results",
    desc: "We focus on measurable outcomes that help your business grow and succeed.",
    icon: <FaChartLine className="text-blue-500 text-2xl" />,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="w-full relative z-10 py-12 lg:py-16 ">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
          Why Choose Us
        </h2>
        <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-xl">
          Here’s why businesses trust us to bring their ideas to life.
        </p>
      </div>

      {/* Points */}
      <div
        className="
          grid 
          grid-cols-1 
          md:grid-cols-2 
          gap-8 
          max-w-5xl 
          mx-auto
        "
      >
        {points.map((point, idx) => (
          <div
            key={idx}
            className="
              group 
              flex items-start gap-4
              p-6 rounded-2xl
              bg-white dark:bg-black 
              border border-[var(--borderColor1)]
              shadow-md hover:shadow-xl
              transition-transform duration-300 
              hover:-translate-y-2
            "
          >
            {/* Icon */}
            <div className="flex-shrink-0">{point.icon}</div>

            {/* Text */}
            <div>
              <h3 className="text-lg font-semibold">{point.title}</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                {point.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
