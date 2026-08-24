"use client";

import { site } from "@/lib/data";
import { WhatsAppIcon } from "./BrandIcons";

export default function WhatsAppFloat() {
  return (
    <a
      href={site.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-4 right-4 z-50 flex items-center gap-3 sm:bottom-6 sm:right-6"
    >
      <span className="pointer-events-none hidden translate-x-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white opacity-0 shadow-xl transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:block">
        Chat with us
      </span>
      <span className="relative flex h-12 w-12 items-center justify-center sm:h-14 sm:w-14">
        <span className="absolute inset-0 animate-pulse-ring rounded-full bg-[#25D366]" />
        <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-green-500/40 transition-transform duration-300 group-hover:scale-110 sm:h-14 sm:w-14">
          <WhatsAppIcon className="h-6 w-6 sm:h-7 sm:w-7" />
        </span>
      </span>
    </a>
  );
}
