import Link from "next/link";
import { MessageCircle } from "lucide-react";
import Reveal from "./Reveal";
import { site } from "@/lib/data";

export default function CTABanner() {
  return (
    <section className="bg-white/95 pb-24 pt-4">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-emerald-700 via-teal-700 to-green-800 px-6 py-16 text-center text-white shadow-2xl shadow-emerald-700/25 sm:px-16 sm:py-20">
            <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full border border-white/15" />
            <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full border border-white/15" />
            <div className="pointer-events-none absolute right-16 top-10 h-3 w-3 rounded-full bg-white/40" />
            <div className="pointer-events-none absolute bottom-14 left-24 h-2 w-2 rounded-full bg-white/30" />

            <h2 className="relative mx-auto max-w-2xl text-3xl font-extrabold tracking-tight sm:text-5xl">
              Know exactly where your land stands
            </h2>
            <p className="relative mx-auto mt-5 max-w-xl text-base text-emerald-100 sm:text-lg">
              Request a free, fixed-price quote today. Most surveys are
              delivered within 3–5 working days, island-wide.
            </p>
            <div className="relative mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-full bg-white px-8 py-4 text-sm font-bold text-emerald-700 shadow-lg transition-all hover:-translate-y-0.5 hover:bg-emerald-50"
              >
                Request a Free Quote
              </Link>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-8 py-4 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-white/10"
              >
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
