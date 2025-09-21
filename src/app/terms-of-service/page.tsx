"use client";

import React from "react";

// =====================
// HERO / INTRO
// =====================
function TermsHero() {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 pt-12 lg:pt-16 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Terms of Service
      </h1>
      <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        Please read these Terms of Service carefully before using our website
        and services. By accessing or using our platform, you agree to be bound
        by these Terms. If you do not agree, please discontinue use immediately.
      </p>
    </section>
  );
}

// =====================
// TERMS CONTENT
// =====================
function TermsContent() {
  const sections = [
    {
      title: "1. Eligibility",
      content:
        "You must be at least 18 years old or have legal parental/guardian consent to use our services.",
    },
    {
      title: "2. Use of Services",
      content:
        "You agree to use our services only for lawful purposes and in accordance with these Terms.",
    },
    {
      title: "3. Intellectual Property",
      content:
        "All content, designs, and code provided remain our intellectual property unless explicitly transferred by agreement.",
    },
    {
      title: "4. Payments",
      content:
        "Payments for services must be made according to the terms outlined in your proposal or agreement. Late payments may result in service suspension.",
    },
    {
      title: "5. Third-Party Services",
      content:
        "We may integrate third-party services (such as hosting or APIs). We are not responsible for their reliability or changes.",
    },
    {
      title: "6. Limitation of Liability",
      content:
        "We are not liable for indirect, incidental, or consequential damages. Our total liability will not exceed the fees paid by you.",
    },
    {
      title: "7. Termination",
      content:
        "Either party may terminate services with written notice. You remain responsible for payment of completed work up to termination.",
    },
    {
      title: "8. Changes to Terms",
      content:
        "We may update these Terms from time to time. Continued use of our services after updates constitutes acceptance of the revised Terms.",
    },
    {
      title: "9. Contact",
      content:
        "If you have questions regarding these Terms, please contact us at velroxe.studio@gmail.com.",
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
// TERMS PAGE
// =====================
export default function TermsPage() {
  return (
    <div className='relative w-full h-fit px-6 md:px-12 lg:px-20'>
      {/* Page layout paddings */}

      <TermsHero />
      <TermsContent />
    </div>
  );
}
