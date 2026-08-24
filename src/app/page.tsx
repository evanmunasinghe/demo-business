import Link from "next/link";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Crosshair,
  Star,
} from "lucide-react";
import Counter from "@/components/Counter";
import HeroVisual from "@/components/HeroVisual";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";
import { brands, services, stats, whyChoose } from "@/lib/data";

export default function Home() {
  return (
    <>
      <section className="relative flex min-h-screen items-center overflow-hidden bg-slate-950/75 pb-24 pt-32 text-white">
        <div className="absolute inset-0 bg-grid-dark [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
        <div className="pointer-events-none absolute -left-32 top-16 h-[28rem] w-[28rem] animate-blob rounded-full bg-emerald-600/25 blur-3xl" />
        <div
          className="pointer-events-none absolute -right-24 top-1/3 h-96 w-96 animate-blob rounded-full bg-teal-600/20 blur-3xl"
          style={{ animationDelay: "-5s" }}
        />
        <div
          className="pointer-events-none absolute bottom-0 left-1/3 h-80 w-80 animate-blob rounded-full bg-lime-500/10 blur-3xl"
          style={{ animationDelay: "-9s" }}
        />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-20 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
          <div>
            <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-1.5 text-xs font-semibold text-emerald-300 backdrop-blur">
                  <Star className="h-3.5 w-3.5 text-amber-400" fill="currentColor" />
                  Licensed Surveyors · Island-wide coverage · All 25 districts
                </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="mt-7 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl xl:text-6xl">
                Your land, mapped down to the{" "}
                <span className="text-gradient-light">last inch</span>
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
                  DEMO delivers court-ready boundary surveys, bank loan plans,
                  topographic mapping and setting-out — powered by GNSS, drone
                  photogrammetry and 25+ years of experience across every district
                  of Sri Lanka.
                </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 px-8 py-4 text-sm font-bold text-white shadow-xl shadow-emerald-600/30 transition-all hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-emerald-600/40"
                >
                  Request a Free Quote
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold text-white backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/10"
                >
                  Explore Services
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="mt-12 flex items-center gap-4">
                <div className="flex -space-x-3">
                  {["MT", "LB", "DO", "SN"].map((initials, i) => (
                    <span
                      key={initials}
                      className={`flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br text-xs font-bold text-white ring-2 ring-slate-950 ${
                        ["from-emerald-500 to-teal-400", "from-cyan-500 to-blue-400", "from-lime-500 to-green-400", "from-amber-500 to-orange-400"][i]
                      }`}
                    >
                      {initials}
                    </span>
                  ))}
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-800 text-[10px] font-bold text-slate-300 ring-2 ring-slate-950">
                    800+
                  </span>
                </div>
                <div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-amber-400" fill="currentColor" />
                    ))}
                  </div>
                  <p className="mt-1 text-xs font-medium text-slate-400">
                    Trusted by builders, notaries &amp; developers island-wide
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="hidden lg:block">
            <HeroVisual />
          </div>
        </div>
      </section>

      <section className="border-y border-slate-100 bg-white/90 py-12">
        <p className="text-center text-xs font-bold uppercase tracking-[0.25em] text-slate-400">
          Trusted by banks, contractors &amp; law firms island-wide
        </p>
        <div className="relative mt-8 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white/90 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white/90 to-transparent" />
          <div className="flex w-max animate-marquee items-center gap-14 pr-14">
            {[...brands, ...brands].map((brand, i) => (
              <span
                key={`${brand.name}-${i}`}
                className="flex items-center gap-2.5 whitespace-nowrap text-slate-300 transition-colors hover:text-slate-500"
              >
                <brand.icon className="h-6 w-6" />
                <span className="text-lg font-bold">{brand.name}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="bg-slate-50/95 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What we do"
            title={
              <>
                Six core practices.{" "}
                <span className="text-gradient-dark">One standard: precision.</span>
              </>
            }
            description="From a single perch in Colombo to a 400-lot scheme in Kurunegala — every plan signed and sealed by a Licensed Surveyor."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={(i % 3) * 0.1}>
                <Link
                  href={`/services#${service.slug}`}
                  className="group block h-full rounded-2xl border border-slate-100 bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-100 hover:shadow-xl hover:shadow-emerald-600/5"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-500/25 transition-transform duration-300 group-hover:rotate-3 group-hover:scale-110">
                    <service.icon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-6 text-lg font-bold text-slate-900">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{service.short}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-emerald-700 transition-all group-hover:gap-3">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12 text-center">
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-8 py-3.5 text-sm font-bold text-slate-700 transition-all hover:-translate-y-0.5 hover:border-emerald-200 hover:text-emerald-700 hover:shadow-lg"
            >
              View all services
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="overflow-hidden bg-white/95 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Why DEMO"
              title={
                <>
                  Precision is only <span className="text-gradient-dark">the beginning</span>
                </>
              }
              description="Anyone can promise accuracy. We back it with licenses, technology and a quarter-century of local track record."
            />
            <ul className="-mt-4 space-y-6">
              {whyChoose.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.1}>
                  <li className="flex gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                      <item.icon className="h-6 w-6" />
                    </span>
                    <span>
                      <h3 className="font-bold text-slate-900">{item.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600">{item.text}</p>
                    </span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          <Reveal delay={0.15}>
            <div className="relative">
              <div className="relative overflow-hidden rounded-[2rem] bg-slate-950 p-10 text-white sm:p-12">
                <div className="absolute inset-0 bg-grid-dark opacity-60" />
                <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-600/30 blur-3xl" />
                <div className="relative">
                  <CheckCircle2 className="h-10 w-10 text-emerald-400" />
                  <h3 className="mt-5 text-2xl font-extrabold">
                    Accuracy you can defend at the Land Registry
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    Every measurement is reconciled against deeds, prior plans and
                    Land Registry records — sealed by a Licensed Surveyor under
                    the Surveyors Act of Sri Lanka.
                  </p>
                  <hr className="my-8 border-white/10" />
                  <div className="grid grid-cols-3 gap-4 text-center">
                    {[
                      ["12k+", "Parcels"],
                      ["99%", "First-pass"],
                      ["48h", "Rush option"],
                    ].map(([value, label]) => (
                      <div key={label}>
                        <p className="text-2xl font-extrabold text-gradient-light sm:text-3xl">{value}</p>
                        <p className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                          {label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute -left-4 -top-6 hidden animate-float items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 pr-6 shadow-xl sm:flex lg:-left-8">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <Crosshair className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm font-bold text-slate-900">±0.01 ft precision</span>
                  <span className="block text-xs text-slate-500">GNSS RTK network</span>
                </span>
              </div>

              <div className="absolute -bottom-6 -right-3 hidden animate-float items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 pr-6 shadow-xl sm:flex lg:-right-6" style={{ animationDelay: "-3s" }}>
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-500">
                  <Award className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm font-bold text-slate-900">Excellence Award</span>
                  <span className="block text-xs text-slate-500">Institute of Surveyors of Sri Lanka</span>
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-950/85 py-20">
        <div className="absolute inset-0 bg-grid-dark [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
        <div className="pointer-events-none absolute left-1/4 top-0 h-72 w-72 animate-blob rounded-full bg-emerald-600/15 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-y-12 px-4 text-center sm:px-6 lg:grid-cols-4 lg:px-8">
          {stats.map((stat) => (
            <Reveal key={stat.label}>
              <p className="text-5xl font-extrabold tracking-tight text-gradient-light">
                <Counter end={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-sm font-semibold text-slate-300">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-slate-50/95 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Testimonials"
            title={
              <>
                Trusted by those who <span className="text-gradient-dark">build on our word</span>
              </>
            }
            description="Contractors, notaries and landowners rely on DEMO survey plans every single day."
          />
          <Testimonials />
        </div>
      </section>

      <CTABanner />
    </>
  );
}
