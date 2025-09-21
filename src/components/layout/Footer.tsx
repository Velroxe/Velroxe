"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaXTwitter, FaInstagram } from "react-icons/fa6";
import { useTheme } from "next-themes";
import { contactDetails } from "@/utils/constants";

const Footer = () => {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Hydration guard
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <footer className="relative w-full">
      {/* Background blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute bottom-10 left-20 w-48 h-48 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-pulse"></div>
        <div className="absolute top-10 right-32 w-60 h-60 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-pulse"></div>
        <div className="absolute bottom-0 right-10 w-40 h-40 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-pulse"></div>
      </div>

      {/* Glassmorphism footer container */}
      <div className="relative bg-white/80 dark:bg-black/80 backdrop-blur-xl backdrop-saturate-150 border-t border-black/10 dark:border-white/10 shadow-lg">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-12 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left: Logo + tagline */}
          <div>
            <Link href="/" className="relative w-36 h-10 hover-cursor-effect inline-block">
              <img
                src={
                  currentTheme === "dark"
                    ? "/images/logo/Velroxe W.svg"
                    : "/images/logo/Velroxe B.svg"
                }
                alt="Velroxe Logo"
                className="h-full w-auto object-contain"
              // fetchPriority="high"
              />
            </Link>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 max-w-xs">
              Building modern web solutions for businesses worldwide.
            </p>
          </div>

          {/* Center: Navigation */}
          <div className="grid grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-semibold mb-3">Services</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/services" className="hover-cursor-effect hover-underline">
                    Websites
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover-cursor-effect hover-underline">
                    E-commerce
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover-cursor-effect hover-underline">
                    SaaS
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="hover-cursor-effect hover-underline">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="hover-cursor-effect hover-underline">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover-cursor-effect hover-underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Right: Contact info + socials */}
          <div>
            <h4 className="font-semibold mb-3">Get in Touch</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {contactDetails.email}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">{contactDetails.phone}</p>

            <div className="flex gap-4 mt-4 text-lg">
              <Link
                href={contactDetails.socialLinks.github}
                target="_blank"
                className="hover-cursor-effect hover:text-blue-500 transition-colors"
              >
                <FaGithub />
              </Link>
              <Link
                href={contactDetails.socialLinks.linkedIn}
                target="_blank"
                className="hover-cursor-effect hover:text-blue-500 transition-colors"
              >
                <FaLinkedin />
              </Link>
              <Link
                href={contactDetails.socialLinks.x}
                target="_blank"
                className="hover-cursor-effect hover:text-blue-500 transition-colors"
              >
                <FaXTwitter />
              </Link>
              <Link
                href={contactDetails.socialLinks.instagram}
                target="_blank"
                className="hover-cursor-effect hover:text-pink-500 transition-colors"
              >
                <FaInstagram />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="border-t border-black/10 dark:border-white/10 py-4 text-center text-xs text-gray-600 dark:text-gray-400 px-6 md:px-12">
          <div className="h-full w-full flex flex-col md:flex-row justify-between items-center gap-2 max-w-6xl mx-auto">
            <p>© 2025 Velroxe. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="/privacy-policy" className="hover-underline hover-cursor-effect">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover-underline hover-cursor-effect">
                Terms of Service
              </Link>
            </div>
            <p className="text-gray-500 dark:text-gray-500">Built with Next.js + GSAP</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
