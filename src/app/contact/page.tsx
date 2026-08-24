import type { Metadata } from "next";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { site, socialIconMap, socials } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Request a free land surveying quote from DEMO Land Surveying, Colombo — boundary surveys, bank loan plans, topographic mapping and setting-out island-wide in Sri Lanka.",
};

const contactCards = [
  {
    icon: Phone,
    title: "Call Us",
    lines: [site.phoneDisplay, "Hotline · island-wide coverage"],
    href: site.phoneHref,
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: [site.email, "records@demolandsurveying.lk"],
    href: `mailto:${site.email}`,
  },
  {
    icon: MapPin,
    title: "Visit Us",
    lines: ["No. 128, Havelock Road, Colombo 05", "Sri Lanka"],
    href: site.mapsLink,
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    lines: [site.phoneDisplay, "Quotes in minutes, not days"],
    href: site.whatsapp,
  },
];

export default function Contact() {
  return (
    <>
      <PageHeader
        label="Contact"
        title="Let’s map your property"
        description="Tell us about your parcel and your goals — a licensed surveyor will reply with a fixed-price quote within one business day."
      />

      <section className="relative z-10 bg-white/90 pb-8">
        <div className="mx-auto -mt-10 max-w-7xl px-4 sm:-mt-16 sm:px-6 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {contactCards.map((card, i) => (
              <Reveal key={card.title} delay={i * 0.08}>
                <a
                  href={card.href}
                  target={card.href.startsWith("http") ? "_blank" : undefined}
                  rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group block h-full rounded-3xl border border-slate-100 bg-white p-7 shadow-lg shadow-slate-900/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-emerald-600/10"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 transition-colors duration-300 group-hover:bg-emerald-600 group-hover:text-white">
                    <card.icon className="h-6 w-6" />
                  </span>
                  <h2 className="mt-5 font-bold text-slate-900">{card.title}</h2>
                  <p className="mt-2 text-sm font-medium text-slate-600">{card.lines[0]}</p>
                  <p className="text-sm text-slate-400">{card.lines[1]}</p>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white/95 py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:gap-10 sm:px-6 lg:grid-cols-5 lg:px-8">
          <Reveal className="lg:col-span-3">
              <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-10">
              <h2 className="text-2xl font-extrabold tracking-tight text-slate-900">
                Request your free quote
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                Fill out the form below and a licensed surveyor will get back to you within 24 hours.
              </p>
              <ContactForm />
            </div>
          </Reveal>

          <div className="space-y-6 lg:col-span-2">
            <Reveal delay={0.1}>
              <div className="relative overflow-hidden rounded-3xl bg-slate-950 p-6 text-white sm:p-8">
                <div className="absolute inset-0 bg-grid-dark opacity-60" />
                <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-emerald-600/30 blur-3xl" />
                <h3 className="relative text-lg font-bold">Prefer to talk to a surveyor?</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-slate-400">
                  Skip the inbox and speak directly with a Licensed Surveyor — no phone trees, no bots.
                </p>
                <a
                  href={site.phoneHref}
                  className="relative mt-6 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600">
                    <Phone className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs text-slate-400">Call us anytime</span>
                    <span className="block font-bold">{site.phoneDisplay}</span>
                  </span>
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="relative mt-3 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-teal-600 to-cyan-500">
                    <Mail className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs text-slate-400">Email us</span>
                    <span className="block break-all font-bold">{site.email}</span>
                  </span>
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-lg shadow-slate-900/5 sm:p-8">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <Clock className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg font-bold text-slate-900">Office Hours</h3>
                </div>
                <dl className="mt-5 space-y-3">
                  {site.hours.map((slot) => (
                    <div
                      key={slot.days}
                      className="flex items-center justify-between border-b border-slate-50 pb-3 text-sm last:border-0 last:pb-0"
                    >
                      <dt className="text-slate-500">{slot.days}</dt>
                      <dd className="font-semibold text-slate-800">{slot.time}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>

            <Reveal delay={0.26}>
              <div className="rounded-3xl bg-gradient-to-br from-emerald-600 to-teal-600 p-6 text-white shadow-lg shadow-emerald-600/25 sm:p-8">
                <h3 className="text-lg font-bold">Follow our journey</h3>
                <p className="mt-1 text-sm text-emerald-100">
                  New projects, drone footage and surveying tips on social.
                </p>
                <div className="mt-5 flex gap-3">
                  {socials.map((social) => {
                    const Icon = socialIconMap[social.label];
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 backdrop-blur transition-all hover:-translate-y-1 hover:bg-white hover:text-emerald-700"
                      >
                        {Icon && <Icon className="h-5 w-5" />}
                      </a>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-white/95 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 shadow-xl shadow-slate-900/10">
              <iframe
                src={site.mapsEmbed}
                title="Nexora Digital office location on Google Maps"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[340px] w-full border-0 grayscale-[35%] transition-all duration-500 hover:grayscale-0 sm:h-[480px]"
              />
              <a
                href={site.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-3 left-3 right-3 flex items-center gap-3 rounded-2xl bg-white/95 p-4 pr-6 shadow-lg backdrop-blur transition-transform hover:-translate-y-1 sm:bottom-5 sm:left-5 sm:right-auto"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-500">
                  <MapPin className="h-5 w-5" fill="currentColor" />
                </span>
                <span>
                  <span className="block text-xs text-slate-500">Visit our Colombo office</span>
                  <span className="block max-w-[230px] truncate text-sm font-bold text-slate-900">
                    {site.address}
                  </span>
                </span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
