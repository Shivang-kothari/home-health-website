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
  budget: string;
  style: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  phone: "",
  focus: "",
  budget: "",
  style: "",
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
    <form onSubmit={onSubmit} className="grid gap-6 rounded-2xl border border-slate-200 bg-white p-6 elev-sm">
      <div className="grid gap-6 lg:grid-cols-[180px_1fr] items-start">
        <div className="hidden lg:block">
          <div className="p-4">
            <Image src="/illustrations/contact-side.svg" alt="Contact illustration" width={240} height={240} className="rounded-lg" />
          </div>
        </div>
        <div className="grid gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-1 text-sm">
              <span className="font-medium text-slate-900">Name</span>
              <input
                className="rounded-xl border border-slate-200 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-200"
                value={state.name}
                onChange={(e) => setState((s) => ({ ...s, name: e.target.value }))}
                placeholder="Jane Doe"
                required
              />
            </label>

            <label className="grid gap-1 text-sm">
              <span className="font-medium text-slate-900">Work email</span>
              <input
                className="rounded-xl border border-slate-200 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-200"
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
              <span className="font-medium text-slate-900">Company</span>
              <input
                className="rounded-xl border border-slate-200 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-200"
                value={state.company}
                onChange={(e) => setState((s) => ({ ...s, company: e.target.value }))}
                placeholder="Acme Corp"
              />
            </label>

            <label className="grid gap-1 text-sm">
              <span className="font-medium text-slate-900">Phone</span>
              <input
                className="rounded-xl border border-slate-200 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-200"
                value={state.phone}
                onChange={(e) => setState((s) => ({ ...s, phone: e.target.value }))}
                placeholder="(555) 123-4567"
                type="tel"
              />
            </label>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-1 text-sm">
              <span className="font-medium text-slate-900">Project focus</span>
              <select
                className="rounded-xl border border-slate-200 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-200"
                value={state.focus}
                onChange={(e) => setState((s) => ({ ...s, focus: e.target.value }))}
              >
                <option value="">Select a focus</option>
                <option>Brand identity</option>
                <option>Digital product</option>
                <option>Marketing site</option>
                <option>Content system</option>
                <option>Experience audit</option>
                <option>Other</option>
              </select>
            </label>

            <label className="grid gap-1 text-sm">
              <span className="font-medium text-slate-900">Estimated budget</span>
              <select
                className="rounded-xl border border-slate-200 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-200"
                value={state.budget}
                onChange={(e) => setState((s) => ({ ...s, budget: e.target.value }))}
              >
                <option value="">Select a range</option>
                <option>Under $25k</option>
                <option>$25k-$100k</option>
                <option>$100k-$250k</option>
                <option>$250k+</option>
              </select>
            </label>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-1 text-sm sm:col-span-2">
              <span className="font-medium text-slate-900">Style references (optional)</span>
              <input
                className="rounded-xl border border-slate-200 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-200"
                value={state.style}
                onChange={(e) => setState((s) => ({ ...s, style: e.target.value }))}
                placeholder="Links to inspiration, brand guides, or references"
              />
            </label>
          </div>
        </div>
      </div>

      <label className="grid gap-1 text-sm">
        <span className="font-medium text-slate-900">Tell us about your goals</span>
        <textarea
          className="min-h-28 rounded-xl border border-slate-200 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-200"
          value={state.message}
          onChange={(e) => setState((s) => ({ ...s, message: e.target.value }))}
          placeholder="Share goals, timeline, and any constraints."
          required
        />
      </label>

      <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500 disabled:opacity-60 shadow-sm"
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
