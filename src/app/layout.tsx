import localFont from "next/font/local";
import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import CursorFollower from "@/components/ui/CursorFollower";
import NavigationBar from "@/components/layout/NavigationBar";
import Footer from "@/components/layout/Footer";
import { ToastContainer } from "react-toastify";

// Poppins
const poppins = localFont({
  src: [
    {
      path: "../../public/fonts/poppins/Poppins-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/poppins/Poppins-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/poppins/Poppins-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-poppins",
});

// Next.js metadata (used by App Router automatically in <head>)
export const metadata: Metadata = {
  title: "Velroxe | Software Development Agency – Websites, Mobile Apps, Web Apps & SaaS Solutions for Creatives and Businesses",
  description:
    "Velroxe builds Websites • Mobile Apps • Web Apps • SaaS — digital solutions for businesses worldwide.",
  metadataBase: new URL("https://velroxe.com"),
  alternates: {
    canonical: "https://velroxe.com/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://velroxe.com/",
    siteName: "Velroxe",
    title: "Velroxe | Software Development Agency",
    description:
      "Velroxe builds Websites • Mobile Apps • Web Apps • SaaS — digital solutions for businesses worldwide.",
    images: [
      {
        url: "https://velroxe.com/og/velroxe-og.png",
        width: 1200,
        height: 630,
        alt: "Velroxe Software Development Agency — Websites • Mobile Apps • Web Apps • SaaS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Velroxe | Software Development Agency",
    description:
      "Velroxe builds Websites • Mobile Apps • Web Apps • SaaS — digital solutions for businesses worldwide.",
    images: ["https://velroxe.com/og/velroxe-og.png"],
    creator: "@Velroxe", // remove/change if no Twitter
  },
  icons: {
    icon: [
      { url: "/favicon_io/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon_io/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon_io/favicon.ico", type: "image/x-icon" },
    ],
    apple: "/favicon_io/apple-touch-icon.png",
    other: [
      { rel: "android-chrome-192x192", url: "/favicon_io/android-chrome-192x192.png" },
      { rel: "android-chrome-512x512", url: "/favicon_io/android-chrome-512x512.png" },
    ],
  },
  manifest: "/favicon_io/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Theme Color */}
        <meta name="theme-color" content="#000000" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Velroxe",
              url: "https://velroxe.com",
              logo: "https://velroxe.com/og/velroxe-logo-square.png",
              sameAs: [
                "https://www.linkedin.com/company/velroxe",
                "https://www.instagram.com/velroxe",
              ],
              description:
                "Velroxe builds Websites, Mobile Apps, Web Apps and SaaS solutions for businesses worldwide.",
            }),
          }}
        />
      </head>
      <body className={`${poppins.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
        >
          <ToastContainer />
          <CursorFollower />
          <NavigationBar />
          <div className="pt-20 md:pt-24">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
