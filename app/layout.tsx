
import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "August Renner — Photographer",
  description: "Fashion & editorial photographer crafting bold, refined imagery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} bg-cod-gray text-mercury antialiased selection:bg-swirl selection:text-cod-gray`}
      >
        <Navbar />
        {children}
        <BottomNav />
        <Footer />
      </body>
    </html>
  );
}
