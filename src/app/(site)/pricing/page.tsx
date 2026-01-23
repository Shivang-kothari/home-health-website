import type { Metadata } from "next";
import Container from "../../components/Container";
import ButtonLink from "../../components/ButtonLink";
import { site } from "../../lib/site";

export const metadata: Metadata = {
  title: "Pricing",
  description: `Simple, transparent pricing for ${site.name}. Plans for startups, growing companies, and enterprises.`,
};

const tiers = [
  {
    name: "Starter",
    price: "$49",
    period: "/month",
    description: "Perfect for small teams getting started",
    bullets: ["Up to 50 employees", "Employee records & profiles", "Basic leave tracking", "Email support"],
    cta: "Start free trial",
    popular: false,
  },
  {
    name: "Growth",
    price: "$199",
    period: "/month",
    description: "For growing companies with advanced needs",
    bullets: ["Up to 500 employees", "Advanced leave & attendance", "Payroll exports & reports", "Performance reviews", "Priority support"],
    cta: "Start free trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations with complex requirements",
    bullets: ["Unlimited employees", "Custom onboarding", "Dedicated account manager", "Custom integrations", "SLA guarantee"],
    cta: "Contact sales",
    popular: false,
  },
];

export default function PricingPage() {
  return (
    <section className="py-14">
      <Container>
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight">Simple, transparent pricing</h1>
          <p className="mt-3 text-sm text-slate-600 max-w-xl mx-auto">
            Choose the plan that fits your team. All plans include a 14-day free trial with no credit card required.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`rounded-2xl border bg-white p-6 shadow-sm relative ${
                t.popular ? "border-teal-500 ring-2 ring-teal-500" : "border-slate-200"
              }`}
            >
              {t.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-teal-600 px-3 py-1 text-xs font-semibold text-white">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="text-lg font-semibold">{t.name}</div>
              <div className="mt-2">
                <span className="text-3xl font-bold">{t.price}</span>
                <span className="text-sm text-slate-600">{t.period}</span>
              </div>
              <p className="mt-2 text-sm text-slate-600">{t.description}</p>
              <ul className="mt-6 space-y-3 text-sm text-slate-600">
                {t.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <svg className="h-5 w-5 flex-shrink-0 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <ButtonLink href="/demo" variant={t.popular ? "primary" : "secondary"}>
                  {t.cta}
                </ButtonLink>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-slate-600">
            Need a custom solution?{" "}
            <a href="/contact" className="font-medium text-teal-700 hover:text-teal-600">
              Contact our sales team
            </a>{" "}
            for enterprise pricing and custom requirements.
          </p>
        </div>
      </Container>
    </section>
  );
}
