"use client";

import { useState } from "react";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import { services, site } from "@/lib/data";

type FormState = {
  name: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
};

type Status = "idle" | "loading" | "success" | "error";
type Errors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  service: "",
  budget: "",
  message: "",
};

const inputCls =
  "w-full rounded-xl border bg-slate-50/60 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:bg-white focus:ring-4";

const borderFor = (hasError: boolean) =>
  hasError
    ? "border-red-300 focus:border-red-400 focus:ring-red-500/10"
    : "border-slate-200 focus:border-emerald-500 focus:ring-emerald-500/10";

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  const update = (key: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const validate = (): Errors => {
    const errs: Errors = {};
    if (form.name.trim().length < 2) errs.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = "Please enter a valid email address.";
    if (form.message.trim().length < 10) errs.message = "Tell us a little more (at least 10 characters).";
    return errs;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const reset = () => {
    setForm(initialState);
    setErrors({});
    setStatus("idle");
  };

  if (status === "success") {
    return (
      <div className="py-10 text-center">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-500">
          <CheckCircle2 className="h-8 w-8" />
        </span>
        <h3 className="mt-5 text-xl font-extrabold text-slate-900">Message sent!</h3>
        <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-slate-500">
          Thanks, {form.name.split(" ")[0] || "friend"} — your inquiry is in our inbox.
          We’ll get back to you within one business day.
        </p>
        <button
          onClick={reset}
          className="mt-7 rounded-full border border-slate-200 px-6 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="mt-8 space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-500">
            Full Name *
          </label>
          <input
            id="cf-name"
            type="text"
            value={form.name}
            onChange={update("name")}
            placeholder="Jane Cooper"
            className={`${inputCls} ${borderFor(!!errors.name)}`}
          />
          {errors.name && <p className="mt-1.5 text-xs font-medium text-red-500">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="cf-email" className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-500">
            Email Address *
          </label>
          <input
            id="cf-email"
            type="email"
            value={form.email}
            onChange={update("email")}
            placeholder="jane@company.com"
            className={`${inputCls} ${borderFor(!!errors.email)}`}
          />
          {errors.email && <p className="mt-1.5 text-xs font-medium text-red-500">{errors.email}</p>}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-phone" className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-500">
            Phone Number
          </label>
          <input
            id="cf-phone"
            type="tel"
            value={form.phone}
            onChange={update("phone")}
            placeholder="+1 (555) 000-0000"
            className={`${inputCls} ${borderFor(false)}`}
          />
        </div>
        <div>
          <label htmlFor="cf-service" className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-500">
            Service Needed
          </label>
          <select
            id="cf-service"
            value={form.service}
            onChange={update("service")}
            className={`${inputCls} ${borderFor(false)}`}
          >
            <option value="">Select a service…</option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="cf-budget" className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-500">
          Project Budget
        </label>
        <select
          id="cf-budget"
          value={form.budget}
          onChange={update("budget")}
          className={`${inputCls} ${borderFor(false)}`}
        >
          <option value="">Select a range…</option>
          <option>Under $5,000</option>
          <option>$5,000 – $10,000</option>
          <option>$10,000 – $25,000</option>
          <option>$25,000+</option>
        </select>
      </div>

      <div>
        <label htmlFor="cf-message" className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-500">
          Your Message *
        </label>
        <textarea
          id="cf-message"
          rows={5}
          value={form.message}
          onChange={update("message")}
          placeholder="Tell us about your project, goals and timeline…"
          className={`resize-none ${inputCls} ${borderFor(!!errors.message)}`}
        />
        {errors.message && <p className="mt-1.5 text-xs font-medium text-red-500">{errors.message}</p>}
      </div>

      {status === "error" && (
        <p className="flex items-start gap-2 rounded-xl bg-red-50 p-4 text-sm font-medium text-red-600">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          Something went wrong. Please try again or reach us on WhatsApp at {site.phoneDisplay}.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-emerald-600/30 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-emerald-600/40 disabled:pointer-events-none disabled:opacity-60 sm:w-auto"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Sending…
          </>
        ) : (
          <>
            Send Message <Send className="h-4 w-4" />
          </>
        )}
      </button>
    </form>
  );
}
