"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);

  const go = (delta: number) => {
    setDir(delta);
    setIndex((i) => (i + delta + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const id = setInterval(() => go(1), 6500);
    return () => clearInterval(id);
  }, [index]);

  const t = testimonials[index];

  return (
    <div className="mx-auto mt-4 max-w-3xl">
      <div className="relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-6 shadow-sm sm:p-12">
        <Quote className="absolute right-5 top-5 h-12 w-12 rotate-180 text-emerald-600/10 sm:right-10 sm:top-8 sm:h-16 sm:w-16" />
        <AnimatePresence mode="wait" custom={dir}>
          <motion.figure
            key={index}
            initial={{ opacity: 0, x: 40 * dir }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 * dir }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 text-amber-400" fill="currentColor" />
              ))}
            </div>
            <blockquote className="mt-5 text-base font-medium leading-relaxed text-slate-700 sm:text-xl">
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-7 flex items-center gap-4 sm:mt-8">
              <span
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${t.gradient} text-base font-bold text-white sm:h-[3.25rem] sm:w-[3.25rem]`}
              >
                {t.initials}
              </span>
              <span>
                <span className="block font-bold text-slate-900">{t.name}</span>
                <span className="block text-sm text-slate-500">{t.role}</span>
              </span>
            </figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>

      <div className="mt-8 flex items-center justify-center gap-4 sm:gap-6">
        <button
          onClick={() => go(-1)}
          aria-label="Previous testimonial"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition-all hover:border-emerald-600 hover:bg-emerald-600 hover:text-white active:scale-95"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="flex items-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDir(i > index ? 1 : -1);
                setIndex(i);
              }}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === index ? "w-8 bg-emerald-600" : "w-2.5 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
        <button
          onClick={() => go(1)}
          aria-label="Next testimonial"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition-all hover:border-emerald-600 hover:bg-emerald-600 hover:text-white active:scale-95"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
