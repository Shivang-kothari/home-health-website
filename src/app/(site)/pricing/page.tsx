import Container from "../../components/Container";
import ButtonLink from "../../components/ButtonLink";
import { site } from "../../lib/site";

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
          <ButtonLink href="/demo" variant="primary">{site.ctaPrimary}</ButtonLink>
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
                <ButtonLink href="/contact" variant="secondary">{site.ctaSecondary}</ButtonLink>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
