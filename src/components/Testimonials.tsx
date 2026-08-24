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
      <div className="relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-8 shadow-sm sm:p-12">
        <Quote className="absolute right-10 top-8 h-16 w-16 rotate-180 text-emerald-600/10" />
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
            <blockquote className="mt-5 text-lg font-medium leading-relaxed text-slate-700 sm:text-xl">
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-8 flex items-center gap-4">
              <span
                className={`flex h-13 w-13 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${t.gradient} text-base font-bold text-white`}
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

      <div className="mt-8 flex items-center justify-center gap-6">
        <button
          onClick={() => go(-1)}
          aria-label="Previous testimonial"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition-all hover:border-emerald-600 hover:bg-emerald-600 hover:text-white"
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
          className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition-all hover:border-emerald-600 hover:bg-emerald-600 hover:text-white"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
