"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/utils/constants";
import ShinyButton from "../ui/ShinyButton";
import { MdArrowOutward } from "react-icons/md";

export default function PortfolioHome() {
  return (
    <section className="w-full relative z-10 py-8 lg:py-12 overflow-hidden bg-transparent">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
          Featured Projects
        </h2>

        {/* Moving Row */}
        <div className="relative w-full py-4 overflow-hidden">
          <div className="flex gap-6 w-max animate-marquee">
            {[...projects, ...projects].map((project, idx) => (
              <Link
                href="/portfolio"
                key={idx}
                className="min-w-[250px] max-w-[250px] hover-cursor-effect cursor-pointer rounded-xl glassmorphism shadow-md overflow-hidden bg-white dark:bg-black border border-[var(--borderColor1)]"
              >
                <div className="relative w-full h-40">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-3">
                  <h3 className="font-semibold text-lg">{project.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Button */}
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
