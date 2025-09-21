"use client";

import ShinyButton from "@/components/ui/ShinyButton";
import { contactDetails } from "@/utils/constants";
import { useTheme } from "next-themes";
import Link from "next/link";
import React, { useState } from "react";
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
import { Bounce, toast } from "react-toastify";

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
            className="hover-underline text-gray-700 dark:text-gray-300"
          >
            {contactDetails.email}
          </Link>
        </ContactInfoCard>

        {/* Phone */}
        <ContactInfoCard icon={<FaPhoneAlt />} title="Phone / WhatsApp">
          <Link
            href={`https://wa.me/${contactDetails.flatPhone}?text=Hello%20Velroxe!`}
            target="_blank"
            className="hover-underline text-gray-700 dark:text-gray-300"
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
                  className="hover:scale-125 transition-transform"
                >
                  <FaLinkedin className="text-2xl" />
                </Link>
                <Link
                  href={contactDetails.socialLinks.instagram}
                  target="_blank"
                  className="hover:scale-125 transition-transform"
                >
                  <FaInstagram className="text-2xl" />
                </Link>
                <Link
                  href={contactDetails.socialLinks.x}
                  target="_blank"
                  className="hover:scale-125 transition-transform"
                >
                  <FaXTwitter className="text-2xl" />
                </Link>
                <Link
                  href={contactDetails.socialLinks.github}
                  target="_blank"
                  className="hover:scale-125 transition-transform"
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

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const { theme, systemTheme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        // console.log("Message sent successfully!");
        toast.success('Message sent successfully', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: currentTheme,
          transition: Bounce,
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        // console.log("Failed to send message: " + data.error);
        toast.error('Failed to send message', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: currentTheme,
          transition: Bounce,
        });
      }
    } catch (err) {
      // console.log("Something went wrong while sending message: ", err);
      toast.error('Something went wrong while sending message', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: currentTheme,
        transition: Bounce,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
      <div className="p-6 md:p-8 rounded-2xl glassmorphism border border-gray-300 dark:border-gray-700">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-2 text-sm font-medium">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-pink-500 outline-none"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-pink-500 outline-none"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Message</label>
            <textarea
              name="message"
              placeholder="Your message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
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
            icon={!loading ? <PiPaperPlaneRight /> : ""}
            shineOpacity={0.5}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
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

      <section className="w-full max-w-6xl mx-auto sm:px-4 md:px-6 pt-12 lg:pt-16 pb-20 md:pb-24">
        <ContactHeading />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
