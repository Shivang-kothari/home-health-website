#!/usr/bin/env bash
set -euo pipefail

mkdir -p src/app/lib
mkdir -p src/app/components
mkdir -p src/app/\(site\)

cat > src/app/lib/site.ts <<'EOF'
export const site = {
  name: "HRMS Suite",
  tagline: "Manage people, payroll, and performance — all in one place.",
  phone: "(555) 000-0000",
  phoneHref: "tel:+15550000000",
  email: "sales@hrmssuite.com",
  emailHref: "mailto:sales@hrmssuite.com",
  addressLines: ["Your Company", "City, State"],
  hoursLines: ["Mon–Fri: 9:00am–6:00pm"],
  serviceArea: ["Global"],
  ctaPrimary: "Request Demo",
  ctaSecondary: "Contact Sales",
};
EOF

cat > src/app/components/Header.tsx <<'EOF'
import Link from "next/link";
import Container from "./Container";
import ButtonLink from "./ButtonLink";
import { site } from "../lib/site";

const nav = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/demo", label: "Demo" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/80 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2 font-bold tracking-tight">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-teal-600 text-white">
              HS
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
            <ButtonLink href="/demo" variant="ghost">
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
EOF

cat > src/app/components/Footer.tsx <<'EOF'
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
              <Link className="hover:text-slate-900" href="/features">Features</Link>
              <Link className="hover:text-slate-900" href="/pricing">Pricing</Link>
              <Link className="hover:text-slate-900" href="/demo">Demo</Link>
              <Link className="hover:text-slate-900" href="/contact">Contact</Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-slate-200 py-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} {site.name}. All rights reserved.</div>
          <div className="max-w-2xl">
            Marketing site for your HRMS product. Replace placeholder content and confirm legal text.
          </div>
        </div>
      </Container>
    </footer>
  );
}
EOF

cat > src/app/\(site\)/page.tsx <<'EOF'
import type { Metadata } from "next";
import Container from "../components/Container";
import ButtonLink from "../components/ButtonLink";
import { site } from "../lib/site";

export const metadata: Metadata = { title: "Home", description: site.tagline };

const highlights = [
  { title: "Employee database", desc: "Single source of truth for employee records, documents, and history." },
  { title: "Leave & attendance", desc: "Smart leave workflows, approvals, and team calendars." },
  { title: "Payroll & compliance", desc: "Integrations and reports that keep payroll accurate and audit-ready." },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white">
        <Container>
          <div className="grid gap-10 py-14 md:grid-cols-2 md:items-center md:py-20">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">
                HR • Payroll • Recruiting
              </p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                Powerful HRMS for modern HR teams
              </h1>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Centralize HR, automate payroll, and make better people decisions with one intuitive platform.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <ButtonLink href="/demo" variant="secondary">{site.ctaPrimary}</ButtonLink>
                <ButtonLink href="/contact" variant="primary">{site.ctaSecondary}</ButtonLink>
              </div>

              <div className="mt-6 grid gap-2 text-xs text-slate-500 sm:grid-cols-3">
                <div className="rounded-xl border border-slate-200 bg-white px-3 py-2">Secure & compliant</div>
                <div className="rounded-xl border border-slate-200 bg-white px-3 py-2">Integrations-ready</div>
                <div className="rounded-xl border border-slate-200 bg-white px-3 py-2">Fast onboarding</div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="rounded-2xl bg-slate-900 px-5 py-4 text-white">
                <div className="text-sm font-semibold">Quick snapshot</div>
                <ul className="mt-3 space-y-2 text-sm text-slate-200">
                  <li>• Employee records & org charts</li>
                  <li>• Time off workflows</li>
                  <li>• Payroll exports & tax reports</li>
                  <li>• Applicant tracking & onboarding</li>
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
                <p className="mt-2 text-sm text-slate-200">Book a live demo and see how it fits your workflows.</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
                <ButtonLink href="/demo" variant="secondary">{site.ctaPrimary}</ButtonLink>
                <ButtonLink href="/contact" variant="ghost">Contact Sales</ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
EOF

cat > src/app/\(site\)/about/page.tsx <<'EOF'
import type { Metadata } from "next";
import Container from "../../components/Container";
import { site } from "../../lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${site.name}.`,
};

export default function AboutPage() {
  return (
    <section className="py-14">
      <Container>
        <h1 className="text-3xl font-bold tracking-tight">About {site.name}</h1>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600">
          {site.name} was built for HR teams who need fewer spreadsheets and more automation.
          We combine employee data, workflows, and payroll-ready exports so HR can focus on people.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-base font-semibold">Our mission</div>
            <p className="mt-2 text-sm text-slate-600">
              Help HR teams scale by automating repetitive work and providing trusted people data.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-base font-semibold">How we work</div>
            <p className="mt-2 text-sm text-slate-600">
              We listen to HR problems, prioritize secure integrations, and iterate quickly with customers.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-base font-semibold">What to expect</div>
            <p className="mt-2 text-sm text-slate-600">
              A reliable HR system that centralizes records, simplifies processes, and supports compliance.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
EOF

cat > src/app/\(site\)/features/page.tsx <<'EOF'
import Container from "../../components/Container";
import ButtonLink from "../../components/ButtonLink";

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

cat > src/app/\(site\)/pricing/page.tsx <<'EOF'
import Container from "../../components/Container";
import ButtonLink from "../../components/ButtonLink";

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

cat > src/app/\(site\)/demo/page.tsx <<'EOF'
import Container from "../../components/Container";
import ContactForm from "../../components/ContactForm";

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

echo "Files written. You can now run:"
echo "  npm install"
echo "  npm run dev"
echo ""
echo "Optional: commit changes:"
echo "  git add -A && git commit -m 'Add HRMS marketing pages and branding'"
