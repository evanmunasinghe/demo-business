import type { Metadata } from "next";
import Image from "next/image";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Meridian Land Surveying — Precise Surveys, Confident Decisions",
    template: "%s | Meridian Land Surveying",
  },
  description:
    "Licensed land surveyors providing boundary surveys, ALTA/NSPS title surveys, topographic mapping, construction staking and FEMA elevation certificates across Central Texas.",
};

export const viewport = {
  themeColor: "#020617",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${jakarta.variable} h-full`}>
      <body className="flex min-h-full flex-col font-sans text-slate-700 antialiased">
        <div aria-hidden className="fixed inset-0 -z-10">
          <Image
            src="/wallpaper.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/55 via-slate-950/25 to-slate-950/55" />
        </div>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
