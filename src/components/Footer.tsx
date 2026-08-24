"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  Phone,
  Send,
  LandPlot,
} from "lucide-react";
import { services, site, socialIconMap, socials } from "@/lib/data";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
  { href: "/contact", label: "Request a Quote" },
];

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer className="relative overflow-hidden bg-slate-950/90 text-slate-400">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[42rem] -translate-x-1/2 rounded-full bg-emerald-600/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.3fr]">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600 shadow-lg shadow-emerald-600/30">
                <LandPlot className="h-5 w-5 text-white" />
              </span>
              <span className="text-xl font-extrabold tracking-tight text-white">
                DEMO<span className="text-amber-500">.</span>
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed">
              A licensed land surveying firm delivering precise boundary, bank
              loan, topographic and setting-out surveys island-wide across Sri Lanka since 1998.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((social) => {
                const Icon = socialIconMap[social.label];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all hover:-translate-y-1 hover:border-emerald-600 hover:bg-emerald-600 hover:text-white"
                  >
                    {Icon && <Icon className="h-4 w-4" />}
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white">Company</h4>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-sm transition-colors hover:text-white"
                  >
                    <ArrowRight className="h-3.5 w-3.5 text-emerald-500 transition-transform group-hover:translate-x-0.5" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white">Services</h4>
            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services#${service.slug}`}
                    className="text-sm transition-colors hover:text-white"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white">Get in Touch</h4>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                <a href={site.phoneHref} className="transition-colors hover:text-white">
                  {site.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                <a href={`mailto:${site.email}`} className="transition-colors hover:text-white">
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                <span>{site.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                <span>Mon – Fri, 8:30 AM – 5:00 PM</span>
              </li>
            </ul>

            <div className="mt-7">
              <p className="text-sm font-semibold text-white">Get surveying tips & updates</p>
              {subscribed ? (
                <p className="mt-3 flex items-center gap-2 text-sm font-medium text-emerald-400">
                  <CheckCircle2 className="h-4 w-4" /> Thanks — you’re on the list!
                </p>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubscribed(true);
                  }}
                  className="mt-3 flex rounded-full border border-white/10 bg-white/5 p-1.5 focus-within:border-emerald-500"
                >
                  <input
                    type="email"
                    required
                    placeholder="Your email address"
                    aria-label="Email address for newsletter"
                    className="w-full min-w-0 flex-1 bg-transparent px-4 text-sm text-white placeholder:text-slate-500 focus:outline-none"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white transition-transform hover:scale-105"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs sm:flex-row">
          <p>© {new Date().getFullYear()} {site.fullName}. All rights reserved.</p>
          <p className="text-slate-600">Licensed Surveyor — Survey Department of Sri Lanka · Reg. No. LS/1042</p>
        </div>
      </div>
    </footer>
  );
}
