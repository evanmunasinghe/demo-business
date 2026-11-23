import type { Metadata } from "next";
import Image from "next/image";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ScrollProgress from "@/components/ScrollProgress";

export const metadata: Metadata = {
  // Vercel fills this automatically; set SITE_URL (e.g. https://example.lk) when hosting elsewhere.
  ...(process.env.SITE_URL && { metadataBase: new URL(process.env.SITE_URL) }),
  title: {
    default: "DEMO — Licensed Land Surveyors in Sri Lanka",
    template: "%s | DEMO Land Surveying",
  },
  description:
    "Licensed land surveyors in Colombo, Sri Lanka providing boundary surveys, bank loan surveys, topographic mapping, setting-out, subdivision plans and Bim Saviya title surveys island-wide.",
  openGraph: {
    type: "website",
    siteName: "DEMO Land Surveying",
    locale: "en_LK",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport = {
  themeColor: "#020617",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full">
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
        <ScrollProgress />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
