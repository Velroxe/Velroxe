"use client";

import React from "react";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";
import ShinyButton from "@/components/ui/ShinyButton";

const NotFound = () => {
  return (
    <section className="w-full mt-16 flex items-center justify-center px-6">
      <div className="max-w-lg text-center">
        {/* 404 Code */}
        <h1 className="text-7xl md:text-9xl font-bold text-gray-900 dark:text-white">
          404
        </h1>

        {/* Message */}
        <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300">
          Oops! The page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* Button */}
        <div className="mt-8 flex justify-center">
          <Link href="/">
            <ShinyButton
              icon={<MdArrowBack />}
              iconPosition="left"
              bgColor="black"
              iconHoverEffect="moveLeft"
              className="border"
            >
              Back to Home
            </ShinyButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
