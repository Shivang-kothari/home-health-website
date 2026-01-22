#!/usr/bin/env bash
set -e
 
# If both exist, remove root app/ to avoid conflicts
if [ -d "app" ] && [ -d "src/app" ]; then
  rm -rf app
fi
 
mkdir -p src/app/\(site\)/services
mkdir -p src/app/\(site\)/about
mkdir -p src/app/\(site\)/coverage
mkdir -p src/app/\(site\)/careers
mkdir -p src/app/\(site\)/contact
mkdir -p src/app/components
mkdir -p src/app/lib
 
cat > src/app/lib/site.ts <<'EOT'
export const site = {
  name: "Harbor Home Health",
  tagline: "Skilled care at home—compassionate, coordinated, and on your schedule.",
  phone: "(555) 123-4567",
  phoneHref: "tel:+15551234567",
  email: "intake@harborhomehealth.com",
  emailHref: "mailto:intake@harborhomehealth.com",
  addressLines: ["123 Harbor Ave", "Your City, ST 12345"],
  hoursLines: ["Mon–Fri: 8:00am–5:00pm", "After-hours support available"],
  serviceArea: ["Your City", "Nearby Town", "Surrounding communities"],
  ctaPrimary: "Request Care",
  ctaSecondary: "Call Now",
};
EOT
 
cat > src/app/layout.tsx <<'EOT'
import type { Metadata } from "next";
import "./globals.css";
import { site } from "./lib/site";
 
export const metadata: Metadata = {
  title: { default: site.name, template: `%s | ${site.name}` },
  description: site.tagline,
  metadataBase: new URL("http://localhost:3000"),
};
 
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-dvh bg-white text-slate-900 antialiased">{children}</body>
    </html>
  );
}
EOT
 
cat > src/app/\(site\)/layout.tsx <<'EOT'
import Header from "../components/Header";
import Footer from "../components/Footer";
 
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
EOT
 
cat > src/app/components/Container.tsx <<'EOT'
export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>;
}
EOT
 
cat > src/app/components/ButtonLink.tsx <<'EOT'
import Link from "next/link";
 
type Props = { href: string; variant?: "primary" | "secondary" | "ghost"; children: React.ReactNode };
 
export default function ButtonLink({ href, variant = "primary", children }: Props) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2";
  const styles =
    variant === "primary"
      ? "bg-slate-900 text-white hover:bg-slate-800"
      : variant === "secondary"
      ? "bg-teal-600 text-white hover:bg-teal-500"
      : "text-slate-900 hover:bg-slate-100";
  return (
    <Link className={`${base} ${styles}`} href={href}>
      {children}
    </Link>
  );
}
EOT
 
cat > src/app/components/Header.tsx <<'EOT'
import Link from "next/link";
import Container from "./Container";
import ButtonLink from "./ButtonLink";
import { site } from "../lib/site";
 
const nav = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/coverage", label: "Coverage" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];
 
export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/80 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2 font-bold tracking-tight">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-teal-600 text-white">
              HH
            </span>
            <span className="hidden sm:inline">{site.name}</span>
          </Link>
 
          <nav className="hidden items-center gap-6 md:flex">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm font-medium text-slate-700 hover:text-slate-900">
                {item.label}
              </Link>
            ))}
          </nav>
 
          <div className="flex items-center gap-2">
            <ButtonLink href="/contact" variant="ghost">
              {site.ctaPrimary}
            </ButtonLink>
            <ButtonLink href={site.phoneHref} variant="secondary">
              {site.ctaSecondary}
            </ButtonLink>
          </div>
        </div>
      </Container>
    </header>
  );
}
EOT
 
cat > src/app/components/Footer.tsx <<'EOT'
import Link from "next/link";
import Container from "./Container";
import { site } from "../lib/site";
 
export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <Container>
        <div className="grid gap-8 py-10 md:grid-cols-3">
          <div>
            <div className="text-base font-semibold">{site.name}</div>
            <p className="mt-2 text-sm text-slate-600">{site.tagline}</p>
          </div>
 
          <div className="text-sm">
            <div className="font-semibold text-slate-900">Contact</div>
            <div className="mt-2 space-y-1 text-slate-600">
              <a className="block hover:text-slate-900" href={site.phoneHref}>
                {site.phone}
              </a>
              <a className="block hover:text-slate-900" href={site.emailHref}>
                {site.email}
              </a>
              <div className="pt-2">
                {site.addressLines.map((l) => (
                  <div key={l}>{l}</div>
                ))}
              </div>
            </div>
          </div>
 
          <div className="text-sm">
            <div className="font-semibold text-slate-900">Quick links</div>
            <div className="mt-2 grid gap-2 text-slate-600">
              <Link className="hover:text-slate-900" href="/services">Services</Link>
              <Link className="hover:text-slate-900" href="/coverage">Coverage</Link>
              <Link className="hover:text-slate-900" href="/careers">Careers</Link>
              <Link className="hover:text-slate-900" href="/contact">Contact</Link>
            </div>
          </div>
        </div>
 
        <div className="flex flex-col gap-2 border-t border-slate-200 py-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} {site.name}. All rights reserved.</div>
          <div className="max-w-2xl">
            Disclaimer: This is a sample marketing site. Replace placeholder info and confirm compliance language for your state.
          </div>
        </div>
      </Container>
    </footer>
  );
}
EOT
 
cat > src/app/components/ContactForm.tsx <<'EOT'
"use client";
 
import { useMemo, useState } from "react";
import { site } from "../lib/site";
 
type FormState = { name: string; phone: string; email: string; message: string };
 
export default function ContactForm() {
  const [state, setState] = useState<FormState>({ name: "", phone: "", email: "", message: "" });
 
  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(`New inquiry — ${site.name}`);
    const body = encodeURIComponent(
      [`Name: ${state.name}`, `Phone: ${state.phone}`, `Email: ${state.email}`, "", state.message || "(No message provided)"].join("\n")
    );
    return `${site.emailHref}?subject=${subject}&body=${body}`;
  }, [state]);
 
  return (
    <form className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1 text-sm">
          <span className="font-medium text-slate-900">Name</span>
          <input className="rounded-xl border border-slate-200 px-3 py-2 outline-none focus:ring-2 focus:ring-teal-200"
            value={state.name} onChange={(e) => setState((s) => ({ ...s, name: e.target.value }))} placeholder="Jane Doe" />
        </label>
        <label className="grid gap-1 text-sm">
          <span className="font-medium text-slate-900">Phone</span>
          <input className="rounded-xl border border-slate-200 px-3 py-2 outline-none focus:ring-2 focus:ring-teal-200"
            value={state.phone} onChange={(e) => setState((s) => ({ ...s, phone: e.target.value }))} placeholder="(555) 123-4567" />
        </label>
      </div>
 
      <label className="grid gap-1 text-sm">
        <span className="font-medium text-slate-900">Email</span>
        <input className="rounded-xl border border-slate-200 px-3 py-2 outline-none focus:ring-2 focus:ring-teal-200"
          value={state.email} onChange={(e) => setState((s) => ({ ...s, email: e.target.value }))} placeholder="you@example.com" />
      </label>
 
      <label className="grid gap-1 text-sm">
        <span className="font-medium text-slate-900">How can we help?</span>
        <textarea className="min-h-28 rounded-xl border border-slate-200 px-3 py-2 outline-none focus:ring-2 focus:ring-teal-200"
          value={state.message} onChange={(e) => setState((s) => ({ ...s, message: e.target.value }))} placeholder="Tell us what services you need, your preferred start date, and your city." />
      </label>
 
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <a href={mailtoHref} className="inline-flex items-center justify-center rounded-xl bg-teal-600 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-500">
          Send Message
        </a>
        <p className="text-xs text-slate-500">This opens your email app. Later you can swap this for Formspree/Resend.</p>
      </div>
    </form>
  );
}
EOT
 
# Pages
cat > src/app/\(site\)/page.tsx <<'EOT'
import type { Metadata } from "next";
import Container from "../components/Container";
import ButtonLink from "../components/ButtonLink";
import { site } from "../lib/site";
 
export const metadata: Metadata = { title: "Home", description: site.tagline };
 
const features = [
  { title: "Fast start of care", desc: "Clear intake, timely scheduling, and proactive coordination with providers and family." },
  { title: "Licensed clinicians", desc: "Skilled Nursing, PT/OT/ST, and supportive services—delivered with compassion." },
  { title: "Care you can trust", desc: "Transparent communication, consistent follow-ups, and a plan tailored to goals." },
];
 
const services = ["Skilled Nursing", "Physical Therapy (PT)", "Occupational Therapy (OT)", "Speech Therapy (ST)", "Home Health Aide", "Medical Social Work"];
 
export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-teal-200/50 blur-3xl" />
          <div className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-sky-200/50 blur-3xl" />
        </div>
 
        <Container>
          <div className="grid gap-10 py-14 md:grid-cols-2 md:items-center md:py-20">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">
                Home Health • Skilled Care • Compassionate Team
              </p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                Skilled care at home, with a plan you can feel good about.
              </h1>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                {site.name} helps clients recover, stay safe, and thrive at home—through coordinated visits, clear communication, and evidence-based care.
              </p>
 
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <ButtonLink href="/contact" variant="secondary">{site.ctaPrimary}</ButtonLink>
                <ButtonLink href={site.phoneHref} variant="primary">{site.ctaSecondary}: {site.phone}</ButtonLink>
              </div>
 
              <div className="mt-6 grid gap-2 text-xs text-slate-500 sm:grid-cols-3">
                <div className="rounded-xl border border-slate-200 bg-white px-3 py-2">Same-week visits (where available)</div>
                <div className="rounded-xl border border-slate-200 bg-white px-3 py-2">Care plans & updates</div>
                <div className="rounded-xl border border-slate-200 bg-white px-3 py-2">Friendly clinical team</div>
              </div>
            </div>
 
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="rounded-2xl bg-slate-900 px-5 py-4 text-white">
                <div className="text-sm font-semibold">Quick intake checklist</div>
                <ul className="mt-3 space-y-2 text-sm text-slate-200">
                  <li>• Primary concern & preferred start date</li>
                  <li>• Address/city and service needs</li>
                  <li>• Physician/provider info</li>
                  <li>• Insurance details (if applicable)</li>
                </ul>
              </div>
 
              <div className="mt-5 grid gap-3">
                <div className="rounded-2xl border border-slate-200 p-4">
                  <div className="text-sm font-semibold">Coverage area</div>
                  <p className="mt-1 text-sm text-slate-600">Serving {site.serviceArea.slice(0, 2).join(" & ")} and surrounding communities.</p>
                </div>
                <div className="rounded-2xl border border-slate-200 p-4">
                  <div className="text-sm font-semibold">Hours</div>
                  <p className="mt-1 text-sm text-slate-600">{site.hoursLines.join(" • ")}</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
 
      <section className="py-14">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-lg font-semibold">{f.title}</div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
 
      <section className="border-y border-slate-200 bg-slate-50 py-14">
        <Container>
          <div className="flex flex-col items-end justify-between gap-6 md:flex-row">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Services</h2>
              <p className="mt-2 text-sm text-slate-600">A complete, coordinated team to support recovery and daily living.</p>
            </div>
            <ButtonLink href="/services" variant="primary">View all services</ButtonLink>
          </div>
 
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="text-sm font-semibold">{s}</div>
                <p className="mt-1 text-sm text-slate-600">Personalized plan, clear goals, and consistent follow-ups.</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
 
      <section className="py-14">
        <Container>
          <div className="rounded-3xl bg-slate-900 px-6 py-10 text-white md:px-10">
            <div className="grid gap-6 md:grid-cols-2 md:items-center">
              <div>
                <h2 className="text-2xl font-bold tracking-tight">Ready to get started?</h2>
                <p className="mt-2 text-sm text-slate-200">We’ll help you understand options, timelines, and next steps—no pressure.</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
                <ButtonLink href="/contact" variant="secondary">{site.ctaPrimary}</ButtonLink>
                <ButtonLink href={site.phoneHref} variant="ghost">Call {site.phone}</ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
EOT
 
# Remove default home page to prevent duplicates
rm -f src/app/page.tsx
 
echo "Setup complete. Run: npm run dev"
