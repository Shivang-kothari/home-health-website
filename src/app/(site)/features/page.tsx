import type { Metadata } from "next";
import Container from "../../components/Container";
import ButtonLink from "../../components/ButtonLink";
import { site } from "../../lib/site";

export const metadata: Metadata = {
  title: "Features",
  description: `Explore ${site.name} features: employee records, time off, payroll exports, recruiting, performance management, and integrations.`,
};

const features = [
  { title: "Employee records", desc: "Centralized profiles, documents, and history with robust search." },
  { title: "Time off & attendance", desc: "Configurable leave policies, approvals, and team calendars." },
  { title: "Payroll exports", desc: "Accurate payroll data exports and audit logs for accountants." },
  { title: "Recruiting & onboarding", desc: "Post jobs, track applicants, and streamline new hire paperwork." },
  { title: "Performance & reviews", desc: "Goals, reviews, and continuous feedback workflows." },
  { title: "Integrations", desc: "Connect to payroll vendors, SSO, and HRIS tools via APIs." },
];

export default function FeaturesPage() {
  return (
    <section className="py-14">
      <Container>
        <div className="flex items-end justify-between gap-6">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Features</h1>
            <p className="mt-2 text-sm text-slate-600">Everything HR needs to manage people and payroll.</p>
          </div>
          <ButtonLink href="/demo" variant="primary">Request a demo</ButtonLink>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-lg font-semibold">{f.title}</div>
              <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
