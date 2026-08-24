import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Eye,
  HeartHandshake,
  Mail,
  Target,
} from "lucide-react";
import { LinkedInIcon, XIcon } from "@/components/BrandIcons";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CTABanner from "@/components/CTABanner";
import { milestones, team } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Founded in 1998, DEMO Land Surveying is a Colombo-based team of Licensed Surveyors, CAD technicians and drone pilots who have delivered 12,000+ survey plans across all 25 districts of Sri Lanka.",
};

const pillars = [
  {
    icon: Target,
    title: "Our Mission",
    gradient: "from-emerald-600 to-teal-600",
    shadow: "shadow-emerald-500/25",
    text: "To give landowners, developers and notaries across Sri Lanka absolute confidence in every perch — through surveys that stand up to any bank, Land Registry or court of law.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    gradient: "from-teal-500 to-green-500",
    shadow: "shadow-teal-500/25",
    text: "A future where every land decision in Sri Lanka is made on precise, current and accessible measurement data — never on guesswork or outdated records.",
  },
  {
    icon: HeartHandshake,
    title: "Our Values",
    gradient: "from-amber-500 to-orange-500",
    shadow: "shadow-amber-500/25",
    text: "Accuracy without compromise. Integrity in every beacon we set. And genuine respect for the land and the families whose futures depend on it.",
  },
];

export default function About() {
  return (
    <>
      <PageHeader
        label="About Us"
        title="The story behind DEMO"
        description="A crew of licensed surveyors, CAD technicians and drone pilots obsessed with getting every boundary right."
      />

      <section className="overflow-hidden bg-white/95 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Who we are"
              title={
                <>
                  Small-firm attention.{" "}
                  <span className="text-gradient-dark">Courtroom-grade precision.</span>
                </>
              }
            />
            <Reveal delay={0.1} className="-mt-6 space-y-5 leading-relaxed text-slate-600">
              <p>
                DEMO Land Surveying was founded in Colombo in 1998 by A.B.
                Jayawardena with a secondhand theodolite, a borrowed office and
                one conviction: every landowner deserves certainty without the
                big-firm runaround.
              </p>
              <p>
                Today we’re an 18-person crew of Licensed Surveyors, CAD
                technicians and drone pilots who have delivered more than 12,000
                plans across all 25 districts — from Point Pedro to Dondra Head.
              </p>
              <p>
                We stay deliberately independent. Every plan is signed personally
                by a principal of the firm — and when you call, you talk directly
                to the surveyor responsible for your land.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-10 rounded-2xl border-l-4 border-emerald-600 bg-slate-50 p-6">
                <p className="italic leading-relaxed text-slate-700">
                  “A wall can be rebuilt. A mistake on a plan filed at the Land
                  Registry follows that land forever. That’s why we measure twice
                  — then measure again.”
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-emerald-600 to-teal-600 text-xs font-bold text-white">
                    AJ
                  </span>
                  <span>
                    <span className="block text-sm font-bold text-slate-900">A.B. Jayawardena</span>
                    <span className="block text-xs text-slate-500">Founder &amp; Senior Licensed Surveyor</span>
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <h3 className="text-xl font-extrabold tracking-tight text-slate-900">
              Milestones along the way
            </h3>
            <ol className="ml-3 mt-8 space-y-10 border-l-2 border-slate-100">
              {milestones.map((m) => (
                <li key={m.year} className="relative pl-8">
                  <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-4 border-white bg-gradient-to-br from-emerald-600 to-teal-600 shadow-md" />
                  <span className="inline-block rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
                    {m.year}
                  </span>
                  <h4 className="mt-3 font-bold text-slate-900">{m.title}</h4>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">{m.text}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      <section className="bg-slate-50/95 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our foundation"
            title={
              <>
                Mission, vision &amp; <span className="text-gradient-dark">values</span>
              </>
            }
            description="The principles that guide every stake we drive and every plat we seal."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 0.12}>
                <div className="group h-full rounded-3xl border border-slate-100 bg-white p-9 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-slate-900/5">
                  <span
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-lg transition-transform duration-300 group-hover:rotate-3 group-hover:scale-110 ${pillar.gradient} ${pillar.shadow}`}
                  >
                    <pillar.icon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-6 text-xl font-extrabold text-slate-900">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{pillar.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white/95 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Meet the crew"
            title={
              <>
                The people behind <span className="text-gradient-dark">the plans</span>
              </>
            }
            description="Licensed, certified and local — get to know the experts you’ll actually work with."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={i * 0.1}>
                <div className="group overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <div
                    className={`relative flex aspect-square items-center justify-center bg-gradient-to-br ${member.gradient}`}
                  >
                    <span className="pointer-events-none absolute left-6 top-6 h-20 w-20 rounded-full border border-white/20" />
                    <span className="pointer-events-none absolute bottom-8 right-6 h-28 w-28 rounded-full border border-white/15" />
                    <span className="text-5xl font-extrabold text-white drop-shadow-lg">
                      {member.initials}
                    </span>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-lg font-bold text-slate-900">{member.name}</h3>
                    <p className="mt-1 text-sm font-medium text-emerald-700">{member.role}</p>
                    <div className="mt-4 flex justify-center gap-2">
                      {[
                        { icon: LinkedInIcon, label: "LinkedIn" },
                        { icon: XIcon, label: "X (Twitter)" },
                        { icon: Mail, label: "Email" },
                      ].map((social) => (
                        <a
                          key={social.label}
                          href="#"
                          aria-label={`${member.name} on ${social.label}`}
                          className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-50 text-slate-500 transition-colors hover:bg-emerald-600 hover:text-white"
                        >
                          <social.icon className="h-4 w-4" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14 text-center">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-600/30 transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              Work with us
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
