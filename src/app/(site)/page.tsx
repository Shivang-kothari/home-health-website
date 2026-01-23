import type { Metadata } from "next";
import Image from "next/image";
import Container from "../components/Container";
import ButtonLink from "../components/ButtonLink";
import { site } from "../lib/site";
import Card from "../components/Card";
import Reveal from "../components/Reveal";

export const metadata: Metadata = { title: "Home", description: site.tagline };

const featureCards = [
  { title: "Staff profiles", desc: "Credentials, documents, and history in one clean record." },
  { title: "Scheduling-ready", desc: "Track availability, assignments, and changes with clarity." },
  { title: "Compliance checks", desc: "Stay audit-ready with consistent data and reporting." },
  { title: "Payroll exports", desc: "Structured exports to reduce rework and corrections." },
  { title: "Onboarding flows", desc: "Standardize steps, reminders, and required documents." },
  { title: "Role-based access", desc: "The right people see the right information—by default." },
];

const details = [
  { k: "Credential expirations", v: "Track license expirations and required renewals with a single source of truth." },
  { k: "Document workflows", v: "Collect, verify, and store documents with consistent naming and audit trails." },
  { k: "Staffing clarity", v: "Know who is eligible, available, and onboarded—before you build schedules." },
  { k: "Payroll-ready outputs", v: "Export clean, structured data so payroll doesn’t become a monthly fire drill." },
];

const faqs = [
  { q: "Is this built specifically for home health?", a: "Yes—our workflows are designed around staffing, credential tracking, and compliance needs common to home health agencies." },
  { q: "Can we start small and expand later?", a: "Yes. Most teams start with staff records + compliance, then add onboarding workflows and exports as they scale." },
  { q: "Do you support role-based access?", a: "Yes. You can restrict access by role so admins, managers, and schedulers only see what they need." },
  { q: "How does the demo work?", a: "We’ll review your current process, map it to the product, and show reporting and exports with example data." },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <Container>
          <div className="grid gap-10 py-14 md:grid-cols-2 md:items-center md:py-20">
            <div className="max-w-xl">
              <Reveal>
                <p className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-black/5 backdrop-blur">
                  Home health • Staffing • Compliance
                </p>
              </Reveal>
              <Reveal delayMs={80}>
                <h1 className="mt-4 text-slate-900">
                  Run a compliant, staffed, on-time operation.
                </h1>
              </Reveal>
              <Reveal delayMs={140}>
                <p className="mt-4 text-base leading-relaxed text-slate-700">
                  A modern HRMS built for home health agencies—organize staff records, reduce admin work, and keep reporting audit-ready.
                </p>
              </Reveal>

              <Reveal delayMs={200}>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <ButtonLink href="/demo" variant="primary" className="btn-demo">
                    {site.ctaPrimary}
                  </ButtonLink>
                  <ButtonLink href="/contact" variant="secondary">
                    {site.ctaSecondary}
                  </ButtonLink>
                </div>
              </Reveal>

              <Reveal delayMs={260}>
                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl border border-black/10 bg-white/70 px-3 py-3 text-xs text-slate-700 backdrop-blur">
                    <div className="font-semibold">Audit-ready</div>
                    <div className="mt-1 text-slate-600">Consistent records & exports</div>
                  </div>
                  <div className="rounded-2xl border border-black/10 bg-white/70 px-3 py-3 text-xs text-slate-700 backdrop-blur">
                    <div className="font-semibold">Faster onboarding</div>
                    <div className="mt-1 text-slate-600">Clear steps & checklists</div>
                  </div>
                  <div className="rounded-2xl border border-black/10 bg-white/70 px-3 py-3 text-xs text-slate-700 backdrop-blur">
                    <div className="font-semibold">Less rework</div>
                    <div className="mt-1 text-slate-600">Structured, validated data</div>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="grid gap-6">
              <Reveal>
                <Card className="hero-media group p-3">
                  <div className="overflow-hidden rounded-2xl bg-white">
                    <Image
                      src={site.homeHeroImage}
                      alt="Home health platform illustration"
                      width={1400}
                      height={900}
                      priority
                      className="hero-image h-auto w-full transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </div>
                </Card>
              </Reveal>

              {site.homeSecondaryImage ? (
                <Reveal delayMs={80}>
                  <Card className="hero-media media-tilt group p-3">
                    <div className="overflow-hidden rounded-2xl bg-white">
                      <Image
                        src={site.homeSecondaryImage}
                        alt="Home health operations preview"
                        width={1400}
                        height={900}
                        className="hero-image-secondary h-auto w-full transition-transform duration-300 group-hover:scale-[1.01]"
                      />
                    </div>
                  </Card>
                </Reveal>
              ) : null}

              <Reveal delayMs={120}>
                <Card className="p-6">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="text-sm font-semibold text-slate-900">Operations snapshot</div>
                      <p className="mt-1 text-sm text-slate-600">At-a-glance tracking for managers and admins.</p>
                    </div>
                    <div className="rounded-xl bg-[color:var(--brand-soft)] px-3 py-1 text-xs font-semibold text-slate-900">
                      Live-ready
                    </div>
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-black/10 bg-white px-4 py-4">
                      <div className="text-xs font-semibold text-slate-600">Upcoming expirations</div>
                      <div className="mt-2 text-2xl font-semibold text-slate-900">7</div>
                    </div>
                    <div className="rounded-2xl border border-black/10 bg-white px-4 py-4">
                      <div className="text-xs font-semibold text-slate-600">Open onboarding tasks</div>
                      <div className="mt-2 text-2xl font-semibold text-slate-900">12</div>
                    </div>
                  </div>
                </Card>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14">
        <Container>
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-slate-900">Everything teams need—without the clutter</h2>
              <p className="mt-2 text-sm text-slate-600">
                A clean system for staff records, compliance workflows, and payroll outputs. Designed to feel calm, clear, and fast.
              </p>
            </div>
            <div className="text-sm text-slate-600">Built for admins, managers, and schedulers.</div>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featureCards.map((f, idx) => (
              <Reveal key={f.title} delayMs={idx * 60}>
                <Card className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-9 w-9 rounded-2xl bg-[color:var(--brand-soft)] ring-1 ring-black/5" />
                    <div>
                      <div className="text-base font-semibold text-slate-900">{f.title}</div>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.desc}</p>
                    </div>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14">
        <Container>
          <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <h2 className="text-slate-900">Details that matter day-to-day</h2>
              <p className="mt-2 text-sm text-slate-600">
                The product is built to reduce operational risk: fewer missing documents, fewer expired credentials, fewer last‑minute schedule changes.
              </p>
              <div className="mt-6 grid gap-3">
                {details.map((d, idx) => (
                  <Reveal key={d.k} delayMs={idx * 70}>
                    <Card className="p-5">
                      <div className="text-sm font-semibold text-slate-900">{d.k}</div>
                      <p className="mt-2 text-sm text-slate-600">{d.v}</p>
                    </Card>
                  </Reveal>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              <Card className="p-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="text-sm font-semibold text-slate-900">FAQ</div>
                    <p className="mt-1 text-sm text-slate-600">Quick answers to common questions.</p>
                  </div>
                  <div className="rounded-xl bg-white/70 px-3 py-1 text-xs font-semibold text-slate-900 ring-1 ring-black/5">
                    Clear & simple
                  </div>
                </div>

                <div className="mt-5 grid gap-3">
                  {faqs.map((f) => (
                    <details
                      key={f.q}
                      className="group rounded-2xl border border-black/10 bg-white/60 px-4 py-3"
                    >
                      <summary className="cursor-pointer list-none text-sm font-semibold text-slate-900">
                        <span className="inline-flex items-center justify-between gap-3">
                          {f.q}
                          <span className="text-slate-500 transition-transform duration-200 group-open:rotate-180">▾</span>
                        </span>
                      </summary>
                      <p className="mt-2 text-sm text-slate-600">{f.a}</p>
                    </details>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14">
        <Container>
          <Card className="p-8">
            <div className="grid gap-6 md:grid-cols-2 md:items-center">
              <div>
                <h2 className="text-slate-900">Ready to see it with your workflow?</h2>
                <p className="mt-2 text-sm text-slate-600">
                  We’ll walk through scheduling, credential tracking, and payroll exports with a setup that matches your team.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
                <ButtonLink href="/demo" variant="primary" className="btn-demo">
                  {site.ctaPrimary}
                </ButtonLink>
                <ButtonLink href="/contact" variant="secondary">
                  {site.ctaSecondary}
                </ButtonLink>
              </div>
            </div>
          </Card>
        </Container>
      </section>
    </>
  );
}
