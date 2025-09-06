"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import GetInTouch from "@/components/sections/GetInTouch";
import { services } from "@/utils/constants";

// =====================
// PAGE HEADER
// =====================
function ServicesHeader() {
  return (
    <div className="text-center mx-6 mb-10 lg:mb-16">
      <h1 className="text-4xl md:text-5xl font-bold">Our Services</h1>
      <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        From websites to SaaS products, we provide tailored solutions to help
        your business thrive in the digital world.
      </p>
    </div>
  );
}

// =====================
// SERVICE ITEM
// =====================
function ServiceItem({ item }: { item: string }) {
  return (
    <li>
      <Link
        href="/contact"
        className="flex items-center gap-3 cursor-pointer hover-cursor-effect w-fit group"
      >
        {/* The dot */}
        <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 transition-transform group-hover:translate-x-1" />
        {/* The text */}
        <span className="transition-transform group-hover:translate-x-1">
          {item}
        </span>
      </Link>
    </li>
  );
}

// =====================
// SERVICE CARD
// =====================
function ServiceCard({
  service,
  reverse,
}: {
  service: (typeof services)[0];
  reverse: boolean;
}) {
  return (
    <div
      className={`flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-20 ${reverse ? "lg:flex-row-reverse" : ""
        }`}
    >
      {/* Text Section */}
      <div className="w-full lg:flex-1">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          {service.title}
        </h2>
        <ul className="space-y-3 text-gray-700 dark:text-gray-300">
          {service.items.map((item, i) => (
            <ServiceItem key={i} item={item} />
          ))}
        </ul>
      </div>

      {/* Image Section */}
      <div
        className="
          relative w-full max-w-sm
          h-56 sm:h-64 md:h-72 lg:h-80
          lg:max-w-none
          basis-auto
          lg:flex-1
        "
      >
        <Image
          src={service.img}
          alt={service.title}
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}

// =====================
// SERVICES GRID
// =====================
function ServicesGrid() {
  return (
    <div className="space-y-16 mb-6 mx-6">
      {services.map((service, idx) => (
        <ServiceCard key={idx} service={service} reverse={idx % 2 === 1} />
      ))}
    </div>
  );
}

// =====================
// SERVICES PAGE
// =====================
export default function Services() {
  return (
    <div className='relative w-full h-fit px-6 md:px-12 lg:px-20'>
      {/* Page layout paddings */}

      <section className="w-full max-w-5xl mx-auto sm:px-6 pt-12 lg:pt-16">
        <ServicesHeader />
        <ServicesGrid />
        <GetInTouch />
      </section>
    </div>
  );
}
