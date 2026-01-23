import type { Metadata } from "next";
import Container from "../components/Container";
import ButtonLink from "../components/ButtonLink";
import { site } from "../lib/site";

export const metadata: Metadata = { title: "Home", description: site.tagline };

const highlights = [
  {
    title: "Unified employee record",
    desc: "Centralize profiles, documents, and history with role-based access.",
  },
  {
    title: "Workflow automation",
    desc: "Streamline onboarding, time off, and approvals with configurable workflows.",
  },
  {
    title: "Payroll-ready reporting",
    desc: "Export accurate payroll data and compliance reports with audit trails.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white">
        <Container>
          <div className="grid gap-10 py-14 md:grid-cols-2 md:items-center md:py-20">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">
                HRIS | Payroll | People Ops
              </p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                A modern HRMS for growing organizations
              </h1>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Streamline onboarding, automate workflows, and deliver trusted people insights from one secure platform.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <ButtonLink href="/demo" variant="primary">{site.ctaPrimary}</ButtonLink>
                <ButtonLink href="/contact" variant="secondary">{site.ctaSecondary}</ButtonLink>
              </div>

              <div className="mt-6 grid gap-2 text-xs text-slate-500 sm:grid-cols-3">
                <div className="rounded-xl border border-slate-200 bg-white px-3 py-2">Security-first</div>
                <div className="rounded-xl border border-slate-200 bg-white px-3 py-2">Integration-ready</div>
                <div className="rounded-xl border border-slate-200 bg-white px-3 py-2">Guided onboarding</div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="rounded-2xl bg-slate-900 px-5 py-4 text-white">
                <div className="text-sm font-semibold">Quick snapshot</div>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-200">
                  <li>Employee profiles and org charts</li>
                  <li>Onboarding checklists and approvals</li>
                  <li>Payroll exports and tax reporting</li>
                  <li>Role-based access and audit logs</li>
                </ul>
              </div>

              <div className="mt-6 grid gap-3">
                {highlights.map((h) => (
                  <div key={h.title} className="rounded-2xl border border-slate-200 p-4">
                    <div className="text-sm font-semibold">{h.title}</div>
                    <p className="mt-1 text-sm text-slate-600">{h.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {highlights.map((f) => (
              <div key={f.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-lg font-semibold">{f.title}</div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.desc}</p>
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
                <h2 className="text-2xl font-bold tracking-tight">See HRMS Suite in action</h2>
                <p className="mt-2 text-sm text-slate-200">
                  Book a live demo to review workflows, integrations, and reporting.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
                <ButtonLink href="/demo" variant="primary">{site.ctaPrimary}</ButtonLink>
                <ButtonLink href="/contact" variant="secondary">{site.ctaSecondary}</ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
