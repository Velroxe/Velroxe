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

export const metadata: Metadata = {
  title: "Velroxe",
  description: "Software Development Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class" // tells next-themes to use 'class' on <html>
          defaultTheme="system" // default option
          enableSystem={true} // allow system theme detection
        >
          <ToastContainer />
          <CursorFollower />
          <NavigationBar />
          <div className='pt-20 md:pt-24'>
            {children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
