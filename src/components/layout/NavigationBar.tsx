"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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

  // Shrink top nav on scroll
  useEffect(() => {
    if (!mounted || !topNavRef.current) return;

    gsap.registerPlugin(ScrollTrigger);
    const nav = topNavRef.current;
    const initialHeight = nav.offsetHeight;

    const ctx = gsap.context(() => {
      nav.style.transition = "none";
      nav.style.willChange = "height";

      gsap.fromTo(
        nav,
        { height: initialHeight },
        {
          height: 64, // shrink to 64px
          ease: "none",
          scrollTrigger: {
            start: 0,
            end: 200,
            scrub: true,
          },
        }
      );

      ScrollTrigger.refresh();
    }, nav);

    return () => ctx.revert();
  }, [mounted]);

  // Animate mobile dropdown links
  useEffect(() => {
    if (!dropdownRef.current) return;

    const container = dropdownRef.current;
    const items = container.querySelectorAll(".mobile-link");
    const timeline = gsap.timeline();

    if (showDropdown) {
      timeline
        .to(container, { height: "auto", duration: 0.3, ease: "power1.out" })
        .fromTo(
          items,
          { x: 50, opacity: 0 },
          { x: 0, opacity: 1, stagger: 0.1, duration: 0.4, ease: "power3.out" },
          "-=0.2"
        );
    } else {
      timeline
        .to(items, { x: 50, opacity: 0, stagger: 0.05, duration: 0.3, ease: "power3.in" })
        .to(container, { height: 0, duration: 0.3, ease: "power1.in" }, "-=0.2");
    }
  }, [showDropdown]);

  // Handle outside clicks to close dropdown
  // Close dropdown on outside click (desktop + touch)
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
        themeSwitcherRef.current.contains(target) // clicked theme switcher
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
        className="top-nav h-20 md:h-24 px-6 md:px-12 flex items-center justify-between max-w-6xl mx-auto"
      >
        {/* Logo */}
        <Link href="/" className="relative w-36 h-10 hover-cursor-effect inline-block">
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
                className="hover-cursor-effect hover-underline"
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
        className="lg:hidden overflow-hidden"
        style={{ height: 0 }}
      >
        <div className="flex flex-col items-start gap-6 px-6 pt-4 pb-6">
          {links.map((link) => (
            <button
              key={link.name}
              onClick={() => {
                setShowDropdown(false);
                router.push(link.route);
              }}
              className="mobile-link text-black dark:text-white text-md font-medium hover-underline"
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
