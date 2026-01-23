import Container from "../../components/Container";
import ButtonLink from "../../components/ButtonLink";
import { site } from "../../lib/site";
import Card from "../../components/Card";
import Reveal from "../../components/Reveal";

const features = [
  { title: "Staff records", desc: "Credentials, documents, contact info, and employment history in one place." },
  { title: "Scheduling support", desc: "Stay aligned with availability, assignments, and last-minute changes." },
  { title: "Compliance tracking", desc: "See what’s expiring, what’s missing, and what needs review." },
  { title: "Onboarding checklists", desc: "Standardize new hire workflows and required paperwork." },
  { title: "Payroll-ready exports", desc: "Structured exports and reporting to reduce corrections." },
  { title: "Access control", desc: "Role-based permissions that fit how agencies actually operate." },
  { title: "Document vault", desc: "Store documents with consistent naming, verification, and retrieval." },
  { title: "Audit trail", desc: "Track key changes and approvals for compliance and accountability." },
  { title: "Notifications", desc: "Automated reminders for expirations, missing items, and onboarding steps." },
  { title: "Operational reporting", desc: "Clear summaries for managers—without manual spreadsheet work." },
  { title: "Standard workflows", desc: "Repeatable processes for onboarding, reviews, and document collection." },
  { title: "Integrations-ready", desc: "Export and connect workflows that fit your current tools." },
];

export default function FeaturesPage() {
  return (
    <section className="py-14">
      <Container>
        <div className="grid gap-6 md:grid-cols-2 md:items-end">
          <div>
            <h1 className="text-[color:var(--heading)]">Features</h1>
            <p className="mt-3 text-sm text-slate-600">
              A streamlined set of tools for home health operations—built to reduce admin work and keep compliance clear.
            </p>
          </div>
          <div className="flex gap-3 md:justify-end">
            <ButtonLink href="/demo" variant="primary" className="btn-demo">{site.ctaPrimary}</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">{site.ctaSecondary}</ButtonLink>
          </div>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, idx) => (
            <Reveal key={f.title} delayMs={idx * 60}>
              <Card className="p-6">
                <div className="flex items-start gap-3">
                  <div className="mt-1 h-9 w-9 rounded-2xl bg-[color:var(--brand-soft)] ring-1 ring-black/5" />
                  <div>
                    <div className="text-base font-semibold text-[color:var(--heading)]">{f.title}</div>
                    <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
