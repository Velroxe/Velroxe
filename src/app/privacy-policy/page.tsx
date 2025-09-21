"use client";

import React from "react";

// =====================
// HERO / INTRO
// =====================
function PrivacyHero() {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 pt-12 lg:pt-16 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Privacy Policy
      </h1>
      <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        Your privacy is important to us. This Privacy Policy explains how we
        collect, use, and protect your personal information when you use our
        website and services.
      </p>
    </section>
  );
}

// =====================
// PRIVACY CONTENT
// =====================
function PrivacyContent() {
  const sections = [
    {
      title: "1. Information We Collect",
      content:
        "We may collect personal information you provide directly (such as your name, email, and phone number) and technical information automatically (such as IP address, browser type, and cookies).",
    },
    {
      title: "2. How We Use Information",
      content:
        "We use collected data to provide and improve our services, respond to inquiries, process transactions, and communicate with you about updates and promotions.",
    },
    {
      title: "3. Cookies & Tracking",
      content:
        "We use cookies and similar technologies to enhance user experience, analyze traffic, and personalize content. You can manage cookie settings in your browser.",
    },
    {
      title: "4. Sharing of Information",
      content:
        "We do not sell your personal data. We may share it with trusted third-party providers who assist us in operating our business, subject to confidentiality agreements.",
    },
    {
      title: "5. Data Security",
      content:
        "We implement reasonable security measures to protect your data. However, no method of transmission over the internet is 100% secure.",
    },
    {
      title: "6. Your Rights",
      content:
        "You have the right to access, update, or delete your personal data. Please contact us if you wish to exercise these rights.",
    },
    {
      title: "7. Third-Party Links",
      content:
        "Our website may contain links to external sites. We are not responsible for the privacy practices of third-party websites.",
    },
    {
      title: "8. Children’s Privacy",
      content:
        "Our services are not directed to children under 13. We do not knowingly collect personal information from children.",
    },
    {
      title: "9. Changes to This Policy",
      content:
        "We may update this Privacy Policy from time to time. Continued use of our services after updates constitutes acceptance of the revised policy.",
    },
    {
      title: "10. Contact Us",
      content:
        "If you have any questions about this Privacy Policy, you can contact us at velroxe.studio@gmail.com.",
    },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-6 pt-12 lg:pt-16 pb-20 md:pb-24">
      <div className="space-y-10">
        {sections.map((sec, idx) => (
          <div key={idx}>
            <h2 className="text-2xl font-bold mb-3">{sec.title}</h2>
            <p className="text-gray-700 dark:text-gray-300">{sec.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// =====================
// PRIVACY POLICY PAGE
// =====================
export default function PrivacyPolicyPage() {
  return (
    <div className='relative w-full h-fit px-6 md:px-12 lg:px-20'>
      {/* Page layout paddings */}

      <PrivacyHero />
      <PrivacyContent />
    </div>
  );
}
