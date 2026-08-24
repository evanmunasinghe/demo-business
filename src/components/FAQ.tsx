"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/data";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {faqs.map((faq, i) => {
        const open = openIndex === i;
        return (
          <div
            key={faq.question}
            className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
              open ? "border-emerald-200 shadow-lg shadow-emerald-600/5" : "border-slate-100"
            }`}
          >
            <button
              onClick={() => setOpenIndex(open ? null : i)}
              aria-expanded={open}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="text-sm font-bold text-slate-900 sm:text-base">{faq.question}</span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-emerald-600 transition-transform duration-300 ${
                  open ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`grid transition-all duration-300 ${
                open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 text-sm leading-relaxed text-slate-600">{faq.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
