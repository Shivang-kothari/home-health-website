"use client";
 
import { useState } from "react";
import Image from "next/image";
 
type FormState = {
  name: string;
  phone: string;
  email: string;
  profession?: string;
  message: string;
};
 
export default function ContactForm() {
  const [state, setState] = useState<FormState>({ name: "", phone: "", email: "", profession: "", message: "" });
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
      setState({ name: "", phone: "", email: "", profession: "", message: "" });
      setPreviewUrl(data?.previewUrl || null);
    } catch (err: any) {
      setStatus("error");
      setError(err?.message || "Failed to send.");
    }
  }
 
  return (
    <form onSubmit={onSubmit} className="grid gap-6 rounded-2xl border border-slate-200 bg-white p-6 elev-sm">
      <div className="grid gap-6 lg:grid-cols-2 items-start">
        <div className="hidden lg:block">
          <div className="p-4">
            <Image src="/illustrations/contact-side.svg" alt="Contact illustration" width={240} height={240} className="rounded-lg" />
          </div>
        </div>
        <div>
          <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1 text-sm">
          <span className="font-medium text-slate-900">Name</span>
          <input
            className="rounded-xl border border-slate-200 px-3 py-2 outline-none focus:ring-2 focus:ring-teal-200"
            value={state.name}
            onChange={(e) => setState((s) => ({ ...s, name: e.target.value }))}
            placeholder="Jane Doe"
            required
          />
        </label>
 
        <label className="grid gap-1 text-sm">
          <span className="font-medium text-slate-900">Phone</span>
          <input
            className="rounded-xl border border-slate-200 px-3 py-2 outline-none focus:ring-2 focus:ring-teal-200"
            value={state.phone}
            onChange={(e) => setState((s) => ({ ...s, phone: e.target.value }))}
            placeholder="(555) 123-4567"
          />
        </label>
          </div>
        </div>
      </div>
 
      <label className="grid gap-1 text-sm">
        <span className="font-medium text-slate-900">Email</span>
        <input
          className="rounded-xl border border-slate-200 px-3 py-2 outline-none focus:ring-2 focus:ring-teal-200"
          value={state.email}
          onChange={(e) => setState((s) => ({ ...s, email: e.target.value }))}
          placeholder="you@example.com"
        />
      </label>
 
      <label className="grid gap-1 text-sm">
        <span className="font-medium text-slate-900">Your Role</span>
        <select
          className="rounded-xl border border-slate-200 px-3 py-2 outline-none focus:ring-2 focus:ring-teal-200"
          value={state.profession}
          onChange={(e) => setState((s) => ({ ...s, profession: e.target.value }))}
        >
          <option value="">Select your role...</option>
          <option>HR Manager / Director</option>
          <option>CHRO / VP of People</option>
          <option>Payroll Administrator</option>
          <option>IT / Systems Admin</option>
          <option>Finance / CFO</option>
          <option>Business Owner / CEO</option>
          <option>Consultant / Advisor</option>
          <option>Other</option>
        </select>
      </label>

      <label className="grid gap-1 text-sm">
        <span className="font-medium text-slate-900">How can we help?</span>
        <textarea
          className="min-h-28 rounded-xl border border-slate-200 px-3 py-2 outline-none focus:ring-2 focus:ring-teal-200"
          value={state.message}
          onChange={(e) => setState((s) => ({ ...s, message: e.target.value }))}
          placeholder="Tell us about your company, team size, and what HR challenges you're looking to solve."
          required
        />
      </label>
 
      <div className="mt-2 flex items-center gap-3">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-500 disabled:opacity-60 shadow-sm"
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>
        <div className="text-sm muted">Prefer a call? <a href={"tel:" + (typeof window !== 'undefined' ? window.location.host : '')}>Call us</a></div>
      </div>
 
      {status === "sent" && (
        <div className="grid gap-2">
          <p className="text-sm text-teal-700">Message sent.</p>
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
