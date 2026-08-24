import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Reveal from "./Reveal";

type PageHeaderProps = {
  label: string;
  title: string;
  description?: string;
};

export default function PageHeader({ label, title, description }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-slate-950/80 pb-24 pt-40 text-white">
      <div className="absolute inset-0 bg-grid-dark [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_75%)]" />
      <div className="pointer-events-none absolute -top-24 left-1/4 h-96 w-96 animate-blob rounded-full bg-emerald-600/25 blur-3xl" />
      <div
        className="pointer-events-none absolute -bottom-32 right-[15%] h-80 w-80 animate-blob rounded-full bg-teal-600/20 blur-3xl"
        style={{ animationDelay: "-6s" }}
      />

      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-1.5 text-sm">
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 text-slate-600" />
            <span className="font-semibold text-emerald-400">{label}</span>
          </nav>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
              {description}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
