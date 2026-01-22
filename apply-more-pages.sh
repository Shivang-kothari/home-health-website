#!/usr/bin/env bash
set -euo pipefail

mkdir -p 'src/app/(site)/features'
mkdir -p 'src/app/(site)/pricing'
mkdir -p 'src/app/(site)/demo'

cat > 'src/app/(site)/features/page.tsx' <<'EOF'
import Container from "../../../components/Container";
import ButtonLink from "../../../components/ButtonLink";

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
EOF

cat > 'src/app/(site)/pricing/page.tsx' <<'EOF'
import Container from "../../../components/Container";
import ButtonLink from "../../../components/ButtonLink";

const tiers = [
  { name: "Starter", price: "$49", bullets: ["Up to 50 employees", "Basic HR records", "Email support"] },
  { name: "Growth", price: "$199", bullets: ["Up to 500 employees", "Leave & attendance", "Payroll exports", "Priority support"] },
  { name: "Enterprise", price: "Custom", bullets: ["Unlimited employees", "SLA & onboarding", "Custom integrations"] },
];

export default function PricingPage() {
  return (
    <section className="py-14">
      <Container>
        <div className="flex items-end justify-between gap-6">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Pricing</h1>
            <p className="mt-2 text-sm text-slate-600">Simple, transparent pricing. Contact us for custom enterprise terms.</p>
          </div>
          <ButtonLink href="/demo" variant="primary">Request a demo</ButtonLink>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((t) => (
            <div key={t.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-lg font-semibold">{t.name}</div>
              <div className="mt-2 text-2xl font-bold">{t.price}</div>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {t.bullets.map((b) => <li key={b}>• {b}</li>)}
              </ul>
              <div className="mt-4">
                <ButtonLink href="/demo" variant="secondary">Contact sales</ButtonLink>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
EOF

cat > 'src/app/(site)/demo/page.tsx' <<'EOF'
import Container from "../../../components/Container";
import ContactForm from "../../../components/ContactForm";

export default function DemoPage() {
  return (
    <section className="py-14">
      <Container>
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Request a demo</h1>
            <p className="mt-2 text-sm text-slate-600">Tell us about your needs and we’ll arrange a personalized walkthrough.</p>

            <div className="mt-6 space-y-4 text-sm text-slate-600">
              <div><strong>What to expect</strong><br/>A 30-minute walkthrough, sample data, and integration discussion.</div>
              <div><strong>Availability</strong><br/>Weekdays 9am–6pm. We'll confirm a specific time after you request a demo.</div>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
EOF

chmod +x apply-more-pages.sh
./apply-more-pages.sh
