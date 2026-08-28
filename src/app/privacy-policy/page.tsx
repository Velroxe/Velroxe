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
        Your privacy is important to us. This Privacy Policy explains how
        Velroxe collects, uses, shares, and protects your personal information
        when you interact with our website and services.
      </p>

      <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
        Effective Date: August 28, 2026
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
      paragraphs: [
        "We may collect the following information when you interact with Velroxe:",
      ],
      list: [
        "Full Name",
        "Email Address",
        "Phone Number",
        "Company or Business Name",
        "Website or social media profile",
        "Business type or industry",
        "Project requirements and preferences",
        "Any information you voluntarily provide through contact forms, WhatsApp, email, phone calls, consultations, or other communications",
      ],
      additionalParagraphs: [
        "We may also automatically collect certain technical information, including:",
      ],
      additionalList: [
        "IP Address",
        "Browser type",
        "Device information",
        "Operating system",
        "Website usage information",
        "Pages visited and interactions with our website",
        "Cookies and similar tracking technologies",
      ],
    },

    {
      title: "2. How We Use Your Information",
      paragraphs: [
        "We may use the information we collect to:",
      ],
      list: [
        "Respond to your enquiries and requests.",
        "Contact you regarding our services.",
        "Understand your business and project requirements.",
        "Schedule consultations, meetings, or calls.",
        "Provide website development, marketing, lead generation, and related services.",
        "Improve our website, services, and customer experience.",
        "Measure and analyze website and advertising performance.",
        "Send relevant updates, offers, and marketing communications.",
        "Prevent fraud, misuse, or unauthorized activity.",
        "Comply with applicable legal and regulatory obligations.",
      ],
      additionalParagraphs: [
        "You may opt out of marketing communications at any time by contacting us.",
      ],
    },

    {
      title: "3. Cookies and Tracking Technologies",
      paragraphs: [
        "Our website may use cookies and similar technologies to improve functionality, understand website usage, and measure the effectiveness of our marketing activities.",
        "Depending on how our website and advertising campaigns are configured, these technologies may include:",
      ],
      list: [
        "Google Analytics",
        "Google Ads conversion tracking",
        "Meta Pixel",
        "Other analytics, advertising, or performance-tracking technologies",
      ],
      additionalParagraphs: [
        "These technologies may help us understand how visitors interact with our website, measure conversions, and improve our advertising campaigns.",
        "You can manage or disable cookies through your browser settings. Disabling certain cookies may affect some website functionality.",
      ],
    },

    {
      title: "4. Information Sharing",
      paragraphs: [
        "We do not sell or rent your personal information.",
        "We may share information with trusted third parties when reasonably necessary to operate our business and provide our services, including:",
      ],
      list: [
        "Technology and hosting providers",
        "CRM and customer-management platforms",
        "Marketing automation platforms",
        "Analytics providers",
        "Advertising platforms such as Meta and Google",
        "Communication and scheduling tools",
        "Service providers assisting us with business operations",
      ],
      additionalParagraphs: [
        "These third parties may process information on our behalf and are expected to handle personal information in accordance with applicable privacy and security requirements.",
        "We may also disclose information where required by law, legal process, or to protect our rights, users, or business.",
      ],
    },

    {
      title: "5. Data Security",
      paragraphs: [
        "We implement reasonable technical and organizational measures designed to protect your personal information against unauthorized access, misuse, alteration, disclosure, or loss.",
        "However, no method of transmission over the internet or method of electronic storage is completely secure. Therefore, we cannot guarantee absolute security of your information.",
      ],
    },

    {
      title: "6. Third-Party Links",
      paragraphs: [
        "Our website may contain links to third-party websites, platforms, or services.",
        "These third-party websites operate independently and may have their own privacy policies and practices. Velroxe is not responsible for the privacy practices, security, or content of third-party websites.",
        "We encourage you to review the privacy policies of any third-party websites you visit.",
      ],
    },

    {
      title: "7. Your Privacy Rights",
      paragraphs: [
        "Depending on applicable law and your jurisdiction, you may have the right to:",
      ],
      list: [
        "Request access to the personal information we hold about you.",
        "Request correction of inaccurate or incomplete information.",
        "Request deletion of your personal information.",
        "Withdraw consent where processing is based on consent.",
        "Opt out of marketing communications.",
        "Request information about how your personal information is processed.",
      ],
      additionalParagraphs: [
        "To exercise any applicable rights, you can contact us using the details provided below.",
      ],
    },

    {
      title: "8. Data Retention",
      paragraphs: [
        "We retain personal information only for as long as reasonably necessary for the purposes described in this Privacy Policy, including providing services, maintaining business records, complying with legal obligations, resolving disputes, and enforcing our agreements.",
        "When personal information is no longer reasonably required, we may securely delete or anonymize it, subject to applicable legal requirements.",
      ],
    },

    {
      title: "9. Children's Privacy",
      paragraphs: [
        "Our services are not intended for individuals under the age of 18.",
        "We do not knowingly collect personal information from children under 18. If you believe that a child has provided us with personal information, please contact us so that we can take appropriate steps to remove the information.",
      ],
    },

    {
      title: "10. Changes to This Privacy Policy",
      paragraphs: [
        "We may update this Privacy Policy from time to time to reflect changes to our services, business practices, legal requirements, or privacy practices.",
        "Any changes will be posted on this page along with an updated Effective Date.",
        "We encourage you to review this Privacy Policy periodically.",
      ],
    },

    {
      title: "11. Contact Us",
      paragraphs: [
        "If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your personal information, please contact us:",
      ],
      contact: true,
    },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-6 pt-12 lg:pt-16 pb-20 md:pb-24">
      <div className="space-y-10">
        {sections.map((sec, idx) => (
          <div key={idx}>
            <h2 className="text-2xl font-bold mb-4">{sec.title}</h2>

            {sec.paragraphs?.map((paragraph, pIdx) => (
              <p
                key={pIdx}
                className="text-gray-700 dark:text-gray-300 mb-4 leading-7"
              >
                {paragraph}
              </p>
            ))}

            {sec.list && (
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mb-5">
                {sec.list.map((item, itemIdx) => (
                  <li key={itemIdx}>{item}</li>
                ))}
              </ul>
            )}

            {sec.additionalParagraphs?.map((paragraph, pIdx) => (
              <p
                key={pIdx}
                className="text-gray-700 dark:text-gray-300 mb-4 leading-7"
              >
                {paragraph}
              </p>
            ))}

            {sec.additionalList && (
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mb-5">
                {sec.additionalList.map((item, itemIdx) => (
                  <li key={itemIdx}>{item}</li>
                ))}
              </ul>
            )}

            {sec.contact && (
              <div className="text-gray-700 dark:text-gray-300 space-y-2 leading-7">
                <p>
                  <strong>Velroxe</strong>
                </p>
                <p>
                  <strong>Email:</strong> team@velroxe.com
                </p>
                <p>
                  <strong>Website:</strong> velroxe.com
                </p>
                <p>
                  <strong>Location:</strong> New Delhi, India
                </p>
              </div>
            )}
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
    <div className="relative w-full h-fit px-6 md:px-12 lg:px-20">
      <PrivacyHero />
      <PrivacyContent />
    </div>
  );
}
