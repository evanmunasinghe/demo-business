import type { ReactNode } from "react";
import Reveal from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "center" | "left";
  dark?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  dark = false,
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <Reveal className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <span
        className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-bold uppercase tracking-widest ${
          dark ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-300" : "border-emerald-200 bg-emerald-50 text-emerald-700"
        }`}
      >
        {eyebrow}
      </span>
      <h2
        className={`mt-5 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem] ${
          dark ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base sm:text-lg ${dark ? "text-slate-400" : "text-slate-600"}`}>
          {description}
        </p>
      )}
    </Reveal>
  );
}
