"use client";

import React from "react";
import Link from "next/link";
import ShinyButton from "../ui/ShinyButton";
import { PiPaperPlaneRight } from "react-icons/pi";

const GetInTouch = () => {
  return (
    <section
      className="
        w-full py-12 lg:py-20 relative z-10
        flex justify-center
      "
    >
      <div className="text-center max-w-2xl px-6">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
          Let’s Build Something Amazing Together
        </h2>

        {/* Description */}
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          Have a project in mind or just want to say hello?
          Get in touch with us today and let’s start creating your vision.
        </p>

        {/* CTA Button */}
        <div className="mt-8 flex justify-center">
          <Link href="/contact">
            <ShinyButton
              icon={<PiPaperPlaneRight />}
              bgColor="black"
              iconHoverEffect="rotate"
              className="border"
            >
              Contact Us
            </ShinyButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
