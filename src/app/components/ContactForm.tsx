"use client";

import { useState } from "react";
import Image from "next/image";
import { site } from "../lib/site";

type FormState = {
  name: string;
  email: string;
  company: string;
  phone: string;
  focus: string;
  size: string;
  state: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  phone: "",
  focus: "",
  size: "",
  state: "",
  message: "",
};

export default function ContactForm() {
  const [state, setState] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState<string>("");
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    setPreviewUrl(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(state),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) throw new Error(data?.error || "Failed to send.");

      setStatus("sent");
      setState(initialState);
      setPreviewUrl(data?.previewUrl || null);
    } catch (err: any) {
      setStatus("error");
      setError(err?.message || "Failed to send.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-6 rounded-2xl border border-slate-200 p-6 elev-sm card-surface">
      <div className="rounded-xl border border-slate-200 p-4 card-surface">
        <div className="text-sm font-semibold text-slate-900">Send a request</div>
        <p className="mt-1 text-sm text-slate-600">
          Get a tailored demo covering HR onboarding, time tracking, and compliance workflows.
        </p>
        <div className="mt-3 grid gap-2 text-xs text-slate-600 sm:grid-cols-3">
          <div className="rounded-lg border border-slate-200 px-3 py-2 card-surface">HIPAA-aligned</div>
          <div className="rounded-lg border border-slate-200 px-3 py-2 card-surface">1-day response</div>
          <div className="rounded-lg border border-slate-200 px-3 py-2 card-surface">Guided onboarding</div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[200px_1fr] items-start">
        <div className="hidden lg:block">
          <div className="rounded-xl border border-slate-200 p-4 card-surface">
            <Image src="/illustrations/contact-side.svg" alt="Home health support" width={240} height={240} className="rounded-lg img-float" />
            <div className="mt-3 text-xs text-slate-600">
              Secure portal access for caregivers, supervisors, and admins.
            </div>
          </div>
        </div>
        <div className="grid gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-1 text-sm">
              <span className="font-medium text-slate-900">Name</span>
              <input
                className="rounded-xl border border-slate-200 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-200"
                value={state.name}
                onChange={(e) => setState((s) => ({ ...s, name: e.target.value }))}
                placeholder="Jane Doe"
                required
              />
            </label>

            <label className="grid gap-1 text-sm">
              <span className="font-medium text-slate-900">Work email</span>
              <input
                className="rounded-xl border border-slate-200 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-200"
                value={state.email}
                onChange={(e) => setState((s) => ({ ...s, email: e.target.value }))}
                placeholder="jane@company.com"
                type="email"
                required
              />
            </label>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-1 text-sm">
              <span className="font-medium text-slate-900">Agency</span>
              <input
                className="rounded-xl border border-slate-200 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-200"
                value={state.company}
                onChange={(e) => setState((s) => ({ ...s, company: e.target.value }))}
                placeholder="Healthy Steps Home Care"
              />
            </label>

            <label className="grid gap-1 text-sm">
              <span className="font-medium text-slate-900">Phone</span>
              <input
                className="rounded-xl border border-slate-200 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-200"
                value={state.phone}
                onChange={(e) => setState((s) => ({ ...s, phone: e.target.value }))}
                placeholder="(555) 123-4567"
                type="tel"
              />
            </label>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-1 text-sm">
              <span className="font-medium text-slate-900">Primary need</span>
              <select
                className="rounded-xl border border-slate-200 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-200"
                value={state.focus}
                onChange={(e) => setState((s) => ({ ...s, focus: e.target.value }))}
              >
                <option value="">Select a focus</option>
                <option>HR and onboarding</option>
                <option>Time and attendance</option>
                <option>Compliance and audits</option>
                <option>Credential tracking</option>
                <option>Payroll exports</option>
                <option>Other</option>
              </select>
            </label>

            <label className="grid gap-1 text-sm">
              <span className="font-medium text-slate-900">Agency size</span>
              <select
                className="rounded-xl border border-slate-200 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-200"
                value={state.size}
                onChange={(e) => setState((s) => ({ ...s, size: e.target.value }))}
              >
                <option value="">Select a size</option>
                <option>1-25 employees</option>
                <option>26-100 employees</option>
                <option>101-250 employees</option>
                <option>250+ employees</option>
              </select>
            </label>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-1 text-sm sm:col-span-2">
              <span className="font-medium text-slate-900">Service state</span>
              <input
                className="rounded-xl border border-slate-200 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-200"
                value={state.state}
                onChange={(e) => setState((s) => ({ ...s, state: e.target.value }))}
                placeholder="e.g., Texas"
              />
            </label>
          </div>
        </div>
      </div>

      <label className="grid gap-1 text-sm">
        <span className="font-medium text-slate-900">Tell us about your agency</span>
        <textarea
          className="min-h-28 rounded-xl border border-slate-200 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-200"
          value={state.message}
          onChange={(e) => setState((s) => ({ ...s, message: e.target.value }))}
          placeholder="Share goals, timeline, and current tools."
          required
        />
      </label>

      <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center justify-center rounded-lg bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-900 hover:bg-sky-200 disabled:opacity-60 shadow-sm border border-sky-200"
        >
          {status === "sending" ? "Sending..." : "Send request"}
        </button>
        <div className="text-sm muted">
          Prefer a call? <a className="underline" href={site.phoneHref}>Call {site.phone}</a>
        </div>
      </div>

      {status === "sent" && (
        <div className="grid gap-2">
          <p className="text-sm text-emerald-700">Request sent. Our team will respond within one business day.</p>
          {previewUrl && (
            <a className="text-sm text-slate-700 underline" href={previewUrl} target="_blank" rel="noreferrer">
              View test email (Ethereal preview)
            </a>
          )}
        </div>
      )}

      {status === "error" && <p className="text-sm text-red-600">{error}</p>}
    </form>
  );
}
