"use client";

import React from "react";
import Image from "next/image";
import ShinyButton from "../ui/ShinyButton";
import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";

const services = [
  {
    title: "Web Development",
    img: "/images/3d/web.webp",
  },
  {
    title: "Mobile App Development",
    img: "/images/3d/mobile.webp",
  },
  {
    title: "UI/UX Design",
    img: "/images/3d/palette.webp",
  },
  {
    title: "E-Commerce Store",
    img: "/images/3d/ecommerce.webp",
  },
];

const ServicesHome = () => {
  return (
    <section className="w-full py-10 lg:py-16">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Our Services
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-xl">
            We provide tailored digital solutions to bring your ideas to life.
          </p>
        </div>

        {/* Service Cards */}
        <div
          className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            lg:grid-cols-4 
            gap-8
          "
        >
          {services.map((service, idx) => (
            <div
              key={idx}
              className="
                group relative 
                rounded-2xl p-6
                bg-white dark:bg-black border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl
                transition-transform duration-300 
                hover:-translate-y-2
                flex flex-col items-center text-center
              "
            >
              {/* Image */}
              <div className="relative w-32 h-32 md:w-40 md:h-40 mb-4">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-semibold">
                {service.title}
              </h3>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-12">
          <Link href="/services">
            <ShinyButton
              icon={<MdArrowOutward />}
              bgColor="black"
              iconHoverEffect="raiseTopRight"
              className="border"
            >
              View All Services
            </ShinyButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesHome;
