import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, MessageCircle } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
import { processSteps, services, site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Boundary surveys, bank loan surveys, topographic mapping, building setting-out, subdivision plans and Bim Saviya title surveys — island-wide across Sri Lanka.",
};

export default function Services() {
  return (
    <>
      <PageHeader
        label="Services"
        title="What we can survey for you"
        description="From a single perch in Colombo to a 400-lot scheme in Kurunegala — six core practices, one standard of precision."
      />

      <section className="bg-white/95 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={(i % 2) * 0.12}>
                <article
                  id={service.slug}
                  className="group relative h-full scroll-mt-28 overflow-hidden rounded-3xl border border-slate-100 bg-white p-9 transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-100 hover:shadow-2xl hover:shadow-emerald-600/10 sm:p-11"
                >
                  <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-emerald-600 to-teal-600 transition-transform duration-500 group-hover:scale-x-100" />
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-500/25 transition-transform duration-300 group-hover:rotate-3 group-hover:scale-110">
                    <service.icon className="h-7 w-7" />
                  </span>
                  <h2 className="mt-6 text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{service.long}</p>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-emerald-700 transition-all hover:gap-3"
                  >
                    Request this service <ArrowRight className="h-4 w-4" />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-950/85 py-24 text-white">
        <div className="absolute inset-0 bg-grid-dark [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_75%)]" />
        <div className="pointer-events-none absolute -left-20 bottom-0 h-80 w-80 animate-blob rounded-full bg-emerald-600/15 blur-3xl" />
        <div
          className="pointer-events-none absolute right-0 top-0 h-72 w-72 animate-blob rounded-full bg-teal-600/15 blur-3xl"
          style={{ animationDelay: "-7s" }}
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            dark
            eyebrow="How we work"
            title={
              <>
                A proven path from <span className="text-gradient-light">idea to impact</span>
              </>
            }
            description="The same disciplined process behind 250+ successful launches."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.1}>
                <div className="group h-full rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/[0.08]">
                  <div className="flex items-start justify-between">
                    <span className="text-5xl font-extrabold text-gradient-light">{step.number}</span>
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-emerald-300 transition-colors group-hover:bg-emerald-600 group-hover:text-white">
                      <step.icon className="h-5 w-5" />
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-bold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50/95 py-24">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.4fr] lg:px-8">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              align="left"
              eyebrow="FAQ"
              title={
                <>
                  Questions? <span className="text-gradient-dark">Answers.</span>
                </>
              }
              description="Everything you need to know before we kick things off."
            />
            <Reveal delay={0.1}>
              <div className="relative mt-4 overflow-hidden rounded-3xl bg-slate-950 p-8 text-white">
                <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-emerald-500/20 blur-3xl" />
                <h3 className="relative text-lg font-bold">Still have questions?</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-slate-400">
                  Our Licensed Surveyors reply within one working day — usually much faster on WhatsApp.
                </p>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative mt-6 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:brightness-110"
                >
                  <MessageCircle className="h-4 w-4" fill="currentColor" />
                  Ask on WhatsApp
                </a>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <FAQ />
          </Reveal>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
