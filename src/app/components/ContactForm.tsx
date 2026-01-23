"use client";
 
import { useState } from "react";
import Image from "next/image";
import { site } from "../lib/site";
 
type FormState = {
  name: string;
  phone: string;
  email: string;
  profession?: string;
  message: string;
};
 
type Props = {
  variant?: "default" | "simple";
};

export default function ContactForm({ variant = "default" }: Props) {
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
    <form
      onSubmit={onSubmit}
      className={
        variant === "simple"
          ? "grid gap-6 rounded-2xl border border-black/10 bg-white p-6 shadow-sm"
          : "card grid gap-6 p-6"
      }
    >
      <div className={`grid gap-6 items-start ${variant === "simple" ? "" : "lg:grid-cols-2"}`}>
        {variant === "simple" ? null : (
          <div className="hidden lg:block">
            <div className="p-4">
              <Image src="/illustrations/contact-side.svg" alt="Contact illustration" width={240} height={240} className="rounded-lg" />
            </div>
          </div>
        )}
        <div>
          <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1 text-sm">
          <span className="font-medium text-slate-900">Name</span>
          <input
            className="rounded-xl border border-slate-200 px-3 py-2 outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[color:color-mix(in_oklab,var(--brand)_25%,transparent)]"
            value={state.name}
            onChange={(e) => setState((s) => ({ ...s, name: e.target.value }))}
            placeholder={variant === "simple" ? "" : "Jane Doe"}
            required
          />
        </label>
 
        <label className="grid gap-1 text-sm">
          <span className="font-medium text-slate-900">Phone</span>
          <input
            className="rounded-xl border border-slate-200 px-3 py-2 outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[color:color-mix(in_oklab,var(--brand)_25%,transparent)]"
            value={state.phone}
            onChange={(e) => setState((s) => ({ ...s, phone: e.target.value }))}
            placeholder={variant === "simple" ? "" : "(555) 123-4567"}
          />
        </label>
          </div>
        </div>
      </div>
 
      <label className="grid gap-1 text-sm">
        <span className="font-medium text-slate-900">Email</span>
        <input
          className="rounded-xl border border-slate-200 px-3 py-2 outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[color:color-mix(in_oklab,var(--brand)_25%,transparent)]"
          value={state.email}
          onChange={(e) => setState((s) => ({ ...s, email: e.target.value }))}
          placeholder={variant === "simple" ? "" : "you@example.com"}
          required
        />
      </label>
 
      <label className="grid gap-1 text-sm">
        <span className="font-medium text-slate-900">Role</span>
        <select
          className="rounded-xl border border-slate-200 px-3 py-2 outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[color:color-mix(in_oklab,var(--brand)_25%,transparent)]"
          value={state.profession}
          onChange={(e) => setState((s) => ({ ...s, profession: e.target.value }))}
        >
          <option value="">Select...</option>
          <option>HR / People Ops</option>
          <option>Payroll</option>
          <option>Operations</option>
          <option>Finance</option>
          <option>IT / Security</option>
          <option>Executive leadership</option>
          <option>Other</option>
        </select>
      </label>

      <label className="grid gap-1 text-sm">
        <span className="font-medium text-slate-900">How can we help?</span>
        <textarea
          className="min-h-28 rounded-xl border border-slate-200 px-3 py-2 outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[color:color-mix(in_oklab,var(--brand)_25%,transparent)]"
          value={state.message}
          onChange={(e) => setState((s) => ({ ...s, message: e.target.value }))}
          placeholder={
            variant === "simple"
              ? ""
              : "Tell us your team size, what you use today, and what you’d like to improve."
          }
          required
        />
      </label>
 
      <div className="mt-2 flex items-center gap-3">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center justify-center rounded-lg bg-[color:var(--brand)] px-4 py-2 text-sm font-semibold text-white hover:opacity-95 disabled:opacity-60 shadow-sm"
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>
        <div className="text-sm muted">
          Prefer a call?{" "}
          <a className="text-[color:var(--brand)] hover:opacity-90" href={site.phoneHref}>
            Call us
          </a>
        </div>
      </div>
 
      {status === "sent" && (
        <div className="grid gap-2">
          <p className="text-sm text-[color:var(--brand)]">Message sent.</p>
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
