"use client";

import ShinyButton from "@/components/ui/ShinyButton";
import { contactDetails } from "@/utils/constants";
import Link from "next/link";
import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaUsers,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { PiPaperPlaneRight } from "react-icons/pi";

// =====================
// CONTACT HEADING
// =====================
function ContactHeading() {
  return (
    <div className="text-center mb-12">
      <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
      <p className="mt-3 text-gray-600 dark:text-gray-300">
        Let’s get in touch! Reach us through email, phone, or socials, or send
        us a message directly.
      </p>
    </div>
  );
}

// =====================
// CONTACT INFO CARD
// =====================
function ContactInfoCard({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="p-6 rounded-2xl border border-gray-300 dark:border-gray-700 glassmorphism">
      <div className="flex items-center gap-4">
        <div className="text-pink-500 text-2xl">{icon}</div>
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          {children}
        </div>
      </div>
    </div>
  );
}

// =====================
// CONTACT INFO SECTION
// =====================
function ContactInfo() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
      <div className="space-y-6">
        {/* Email */}
        <ContactInfoCard icon={<FaEnvelope />} title="Email">
          <Link
            href={`mailto:${contactDetails.email}`}
            className="hover-underline hover-cursor-effect text-gray-700 dark:text-gray-300"
          >
            {contactDetails.email}
          </Link>
        </ContactInfoCard>

        {/* Phone */}
        <ContactInfoCard icon={<FaPhoneAlt />} title="Phone / WhatsApp">
          <Link
            href={`https://wa.me/${contactDetails.flatPhone}?text=Hello%20Velroxe!`}
            target="_blank"
            className="hover-underline hover-cursor-effect text-gray-700 dark:text-gray-300"
          >
            {contactDetails.phone}
          </Link>
        </ContactInfoCard>

        {/* Socials */}
        <div className="p-6 rounded-2xl border border-gray-300 dark:border-gray-700 glassmorphism">
          <div className="flex items-center gap-4">
            <FaUsers className="text-pink-500 text-3xl" />
            <div>
              <h3 className="text-lg font-semibold mb-2">Socials</h3>
              <div className="flex gap-4">
                <Link
                  href={contactDetails.socialLinks.linkedIn}
                  target="_blank"
                  className="hover-cursor-effect"
                >
                  <FaLinkedin className="text-2xl" />
                </Link>
                <Link
                  href={contactDetails.socialLinks.instagram}
                  target="_blank"
                  className="hover-cursor-effect"
                >
                  <FaInstagram className="text-2xl" />
                </Link>
                <Link
                  href={contactDetails.socialLinks.x}
                  target="_blank"
                  className="hover-cursor-effect"
                >
                  <FaXTwitter className="text-2xl" />
                </Link>
                <Link
                  href={contactDetails.socialLinks.github}
                  target="_blank"
                  className="hover-cursor-effect"
                >
                  <FaGithub className="text-2xl" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// =====================
// CONTACT FORM
// =====================
function ContactForm() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
      <div className="p-6 md:p-8 rounded-2xl glassmorphism border border-gray-300 dark:border-gray-700">
        <form className="space-y-6">
          <div>
            <label className="block mb-2 text-sm font-medium">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-pink-500 outline-none"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-pink-500 outline-none"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Message</label>
            <textarea
              placeholder="Your message"
              rows={5}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-pink-500 outline-none resize-none"
            ></textarea>
          </div>
          <ShinyButton
            className="justify-center"
            bgColor="#FA1E51"
            textColor="white"
            shineColor="white"
            iconHoverEffect="rotate"
            iconPosition="right"
            icon={<PiPaperPlaneRight />}
            shineOpacity={0.5}
          >
            Send Message
          </ShinyButton>
        </form>
      </div>
    </div>
  );
}

// =====================
// CONTACT PAGE
// =====================
export default function Contact() {
  return (
    <div className='relative w-full h-fit px-6 md:px-12 lg:px-20'>
      {/* Page layout paddings */}

      <section className="w-full max-w-6xl mx-auto sm:px-4 md:px-6 pt-12 lg:pt-16">
        <ContactHeading />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
