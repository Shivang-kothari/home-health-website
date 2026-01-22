import type { Metadata } from "next";
import Image from "next/image";
import Container from "../components/Container";
import ButtonLink from "../components/ButtonLink";
import { site } from "../lib/site";

export const metadata: Metadata = { title: "Home", description: site.tagline };

const heroHighlights = [
  { title: "HIPAA-aligned workflows", desc: "Secure access controls and audit-ready logs." },
  { title: "Accurate time tracking", desc: "PIN clock-in, approvals, and timesheet exports." },
  { title: "Caregiver ready", desc: "Simple mobile-friendly portal for field staff." },
];

const stats = [
  { label: "Agencies onboarded", value: "320+" },
  { label: "Time saved weekly", value: "10 hrs" },
  { label: "On-time payroll", value: "99.2%" },
  { label: "Audit readiness", value: "100%" },
];

const services = [
  { title: "HR and onboarding", desc: "Digital checklists, forms, and policy acknowledgements.", icon: "/file.svg" },
  { title: "Time and attendance", desc: "Clock-in, approvals, and timesheets ready for payroll.", icon: "/window.svg" },
  { title: "Compliance tracking", desc: "Credentials, training, and expiration alerts.", icon: "/globe.svg" },
  { title: "Secure documents", desc: "Role-based access for HR files and certifications.", icon: "/icons/service-therapy.svg" },
  { title: "Agency portal", desc: "Admin, supervisor, and caregiver views in one portal.", icon: "/icons/service-nursing.svg" },
  { title: "Payroll exports", desc: "Clean exports for your payroll provider.", icon: "/icons/location.svg" },
];

const styleKit = [
  { title: "Security", desc: "HIPAA-aligned access controls and audit logs.", swatches: ["#0f5ea8", "#0ea5e9", "#0b1a2b", "#f8fafc"] },
  { title: "Operations", desc: "Automations that keep teams on schedule.", swatches: ["#0b1020", "#475569", "#93c5fd", "#ffffff"] },
  { title: "Care delivery", desc: "Caregiver-friendly UX that works anywhere.", swatches: ["#0284c7", "#38bdf8", "#1f2937", "#f1f5f9"] },
];

const process = [
  { title: "Discover", desc: "We map your current workflows and compliance needs." },
  { title: "Configure", desc: "We set up policies, roles, and approval paths." },
  { title: "Launch", desc: "We onboard teams and import employees." },
  { title: "Optimize", desc: "We track adoption and improve workflows." },
];

const work = [
  { title: "Heartland Care", type: "Multi-state agency", result: "Reduced onboarding time by 40%" },
  { title: "Sunrise Health", type: "Growing agency", result: "Digitized time tracking across 120 staff" },
  { title: "Harbor Home", type: "Medicaid agency", result: "Audit-ready compliance reporting" },
];

const testimonials = [
  { quote: "HealthHR replaced our spreadsheets and cut onboarding time in half.", name: "Director of Operations, Home Health" },
  { quote: "The time tracking is accurate and easy for caregivers to use.", name: "Agency Administrator" },
  { quote: "We passed our audit with confidence and clear documentation.", name: "Compliance Manager" },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden hero-glow">
        <Container>
          <div className="grid gap-10 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-20">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">
                HIPAA-compliant HR platform for home health
              </p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                HR, time tracking, and compliance built for home health agencies
              </h1>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                HealthHR gives agencies a secure portal to manage caregivers, track time, and stay audit-ready without
                spreadsheets.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <ButtonLink href="/demo" variant="primary">{site.ctaPrimary}</ButtonLink>
                <ButtonLink href="/login" variant="secondary">{site.ctaSecondary}</ButtonLink>
              </div>

              <div className="mt-8 grid gap-3 text-xs text-slate-500 sm:grid-cols-3">
                <div className="rounded-xl border border-slate-200 bg-white px-3 py-2">HIPAA-aligned security</div>
                <div className="rounded-xl border border-slate-200 bg-white px-3 py-2">Accurate clock-in</div>
                <div className="rounded-xl border border-slate-200 bg-white px-3 py-2">Fast onboarding</div>
              </div>
            </div>

            <div className="glass-card rounded-3xl p-6">
              <Image
                src="/illustrations/services-hero.svg"
                alt="HealthHR portal preview"
                width={1200}
                height={720}
                className="w-full rounded-2xl"
                priority
              />

              <div className="mt-6 grid gap-3">
                {heroHighlights.map((h) => (
                  <div key={h.title} className="rounded-2xl border border-slate-200 bg-white/80 p-4">
                    <div className="text-sm font-semibold">{h.title}</div>
                    <p className="mt-1 text-sm text-slate-600">{h.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-10">
        <Container>
          <div className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-xs font-semibold text-slate-500">{stat.label}</div>
                <div className="mt-2 text-2xl font-bold text-slate-900">{stat.value}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <Image
                src="/illustrations/contact-hero.svg"
                alt="Clock-in and HR portal preview"
                width={900}
                height={640}
                className="w-full rounded-2xl"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Why HealthHR?</h2>
              <p className="mt-3 text-sm text-slate-600">
                Built specifically for home health agencies, with HIPAA-aligned security and workflows designed for
                caregivers, supervisors, and administrators.
              </p>
              <ul className="mt-6 grid gap-3 text-sm text-slate-600">
                <li className="rounded-xl border border-slate-200 bg-white px-4 py-3">HIPAA-aligned security and audit trails</li>
                <li className="rounded-xl border border-slate-200 bg-white px-4 py-3">Accurate PIN-based clock-in and approvals</li>
                <li className="rounded-xl border border-slate-200 bg-white px-4 py-3">Paperless HR forms and onboarding</li>
                <li className="rounded-xl border border-slate-200 bg-white px-4 py-3">Simple monthly pricing with clear tiers</li>
              </ul>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/demo" variant="primary">{site.ctaPrimary}</ButtonLink>
                <ButtonLink href="/pricing" variant="secondary">View pricing</ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-14">
        <Container>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Modules built for home health agencies</h2>
              <p className="mt-2 max-w-2xl text-sm text-slate-600">
                Everything you need to manage caregivers, stay compliant, and keep payroll accurate.
              </p>
            </div>
            <ButtonLink href="/services" variant="secondary">Explore modules</ButtonLink>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <Image src={service.icon} alt="" width={36} height={36} />
                  <div className="text-lg font-semibold">{service.title}</div>
                </div>
                <p className="mt-3 text-sm text-slate-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">A system designed for compliance and clarity</h2>
              <p className="mt-3 text-sm text-slate-600">
                Keep policies, credentials, and documents aligned across your entire agency.
              </p>
              <div className="mt-6 grid gap-4">
                {styleKit.map((kit) => (
                  <div key={kit.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                    <div className="text-base font-semibold">{kit.title}</div>
                    <p className="mt-2 text-sm text-slate-600">{kit.desc}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {kit.swatches.map((color) => (
                        <span key={color} className="h-6 w-6 rounded-full border border-white shadow-sm" style={{ background: color }} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <Image
                src="/illustrations/about-hero.svg"
                alt="Compliance and document system"
                width={900}
                height={640}
                className="w-full rounded-2xl"
              />
              <div className="mt-4 grid gap-3 text-sm text-slate-600">
                <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                  Policy and credential tracking that stays up to date.
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                  Secure document storage with role-based access.
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-14">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <Image
                src="/illustrations/coverage-hero.svg"
                alt="Workflow automation"
                width={900}
                height={640}
                className="w-full rounded-2xl"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-tight">A dynamic onboarding and compliance workflow</h2>
              <p className="mt-3 text-sm text-slate-600">
                Launch fast with data import, role-based access, and caregiver-ready portals.
              </p>
              <div className="mt-6 grid gap-3 text-sm text-slate-600">
                {process.map((step, index) => (
                  <div key={step.title} className="rounded-xl border border-slate-200 bg-white px-4 py-3">
                    <div className="text-xs font-semibold text-slate-500">Phase {index + 1}</div>
                    <div className="mt-1 font-semibold text-slate-900">{step.title}</div>
                    <div className="mt-1 text-sm text-slate-600">{step.desc}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <ButtonLink href="/features" variant="secondary">See all features</ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14">
        <Container>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Results from agencies like yours</h2>
              <p className="mt-2 text-sm text-slate-600">Real outcomes for time, compliance, and onboarding.</p>
            </div>
            <ButtonLink href="/contact" variant="secondary">Talk to sales</ButtonLink>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {work.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-xs font-semibold text-sky-600">{item.type}</div>
                <div className="mt-2 text-lg font-semibold">{item.title}</div>
                <p className="mt-3 text-sm text-slate-600">{item.result}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14">
        <Container>
          <h2 className="text-2xl font-bold tracking-tight">What clients say</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm text-slate-600">"{t.quote}"</p>
                <div className="mt-4 text-sm font-semibold">{t.name}</div>
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
                <h2 className="text-2xl font-bold tracking-tight">Ready to simplify HR for your agency?</h2>
                <p className="mt-2 text-sm text-slate-200">Request a demo and see HealthHR in action.</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
                <ButtonLink href="/demo" variant="primary">{site.ctaPrimary}</ButtonLink>
                <ButtonLink href="/contact" variant="secondary">Talk to sales</ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
