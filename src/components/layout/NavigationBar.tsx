"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import ThemeSwitcher from "../utils/ThemeSwitcher";
import HamburgerMenu from "../ui/HamburgerMenu";
import { useRouter } from "next/navigation";

const NavigationBar = () => {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const router = useRouter();

  const topNavRef = useRef<HTMLDivElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const navRef = useRef<HTMLDivElement | null>(null); // main nav container
  const themeSwitcherRef = useRef<HTMLDivElement | null>(null);

  const links = [
    { name: "Home", route: "/" },
    { name: "About", route: "/about" },
    { name: "Services", route: "/services" },
    { name: "Portfolio", route: "/portfolio" },
    { name: "Contact", route: "/contact" },
  ];

  // Hydration guard
  useEffect(() => setMounted(true), []);

  // Shrink top nav on scroll (vanilla JS)
  useEffect(() => {
    if (!mounted || !topNavRef.current) return;

    const nav = topNavRef.current;
    const initialHeight = nav.offsetHeight;
    const minHeight = 64;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newHeight = Math.max(initialHeight - scrollY, minHeight);
      nav.style.height = `${newHeight}px`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mounted]);

  // Animate mobile dropdown links using CSS classes
  useEffect(() => {
    const container = dropdownRef.current;
    if (!container) return;

    if (showDropdown) {
      container.classList.add("show");
    } else {
      container.classList.remove("show");
    }
  }, [showDropdown]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (!showDropdown) return;

      const target = event.target as Node;

      if (
        navRef.current &&
        !navRef.current.contains(target) // click outside nav
      ) {
        setShowDropdown(false);
      } else if (
        themeSwitcherRef.current &&
        themeSwitcherRef.current.contains(target)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [showDropdown]);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-xl backdrop-saturate-150 border-b border-white/5 dark:border-white/5 shadow-sm"
    >
      {/* Top nav */}
      <div
        ref={topNavRef}
        className="top-nav h-20 md:h-24 px-6 md:px-12 flex items-center justify-between max-w-6xl mx-auto transition-height duration-200 ease-out"
      >
        {/* Logo */}
        <Link href="/" className="relative w-36 h-10 inline-block">
          <img
            src={
              currentTheme === "dark"
                ? "/images/logo/Velroxe W.svg"
                : "/images/logo/Velroxe B.svg"
            }
            alt="Velroxe Logo"
            className="h-full w-auto object-contain"
            fetchPriority="high"
          />
        </Link>

        {/* Links & theme switcher */}
        <div className="flex items-center gap-2 lg:gap-4">
          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-6 text-sm font-medium">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.route}
                className="hover-underline"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Theme switcher */}
          <div ref={themeSwitcherRef}>
            <ThemeSwitcher />
          </div>

          {/* Mobile hamburger */}
          <div className="lg:hidden flex justify-center items-center">
            <button
              className={`p-2 w-10 h-10 rounded-2xl flex justify-center items-center transition-all duration-300 ${showDropdown
                ? "bg-gray-800 dark:text-black dark:bg-gray-200 text-white"
                : "text-black dark:text-white hover:bg-gray-800 hover:text-white dark:hover:bg-gray-200 dark:hover:text-black hover:shadow-md"
                }`}
              onClick={() => setShowDropdown((prev) => !prev)}
            >
              <HamburgerMenu isActive={showDropdown} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div
        ref={dropdownRef}
        className="lg:hidden overflow-hidden dropdown max-h-0"
      >
        <div className="flex flex-col items-start gap-6 px-6 pt-4 pb-6">
          {links.map((link, index) => (
            <button
              key={link.name}
              onClick={() => {
                setShowDropdown(false);
                router.push(link.route);
              }}
              className={`mobile-link text-black dark:text-white text-md font-medium hover-underline transition-all transform`}
              style={{ transitionDelay: `${index * 0.05}s` }}
            >
              {link.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
