import Container from "../../components/Container";
import ButtonLink from "../../components/ButtonLink";
import { site } from "../../lib/site";
import Card from "../../components/Card";
import Reveal from "../../components/Reveal";

const tiers = [
  { name: "Starter", price: "$99", bullets: ["Up to 50 staff profiles", "Credential tracking", "Email support"] },
  { name: "Team", price: "$199", bullets: ["Up to 150 staff profiles", "Document vault", "Standard support"] },
  { name: "Growth", price: "$299", bullets: ["Up to 500 staff profiles", "Onboarding checklists", "Payroll exports", "Priority support"], featured: true },
  { name: "Agency", price: "$499", bullets: ["Up to 1,500 staff profiles", "Compliance dashboard", "Advanced exports"] },
  { name: "Multi‑site", price: "$899", bullets: ["Multiple locations", "Role-based access", "Operational reporting"] },
  { name: "Enterprise", price: "Custom", bullets: ["Unlimited staff profiles", "SLA & onboarding", "Custom workflows", "Advanced reporting"] },
];

export default function PricingPage() {
  return (
    <section className="py-14">
      <Container>
        <div className="grid gap-6 md:grid-cols-2 md:items-end">
          <div>
            <h1 className="text-[color:var(--heading)]">Pricing</h1>
            <p className="mt-3 text-sm text-slate-600">
              Straightforward tiers for agencies of different sizes. Need something tailored? We’ll scope it with you.
            </p>
          </div>
          <div className="flex gap-3 md:justify-end">
            <ButtonLink href="/demo" variant="primary" className="btn-demo">{site.ctaPrimary}</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">{site.ctaSecondary}</ButtonLink>
          </div>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((t, idx) => (
            <Reveal key={t.name} delayMs={idx * 80}>
              <Card className={`p-6 ${t.featured ? "ring-1 ring-black/10" : ""}`.trim()}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-base font-semibold text-[color:var(--heading)]">{t.name}</div>
                    <div className="mt-2 text-3xl font-semibold text-[color:var(--heading)]">{t.price}</div>
                  </div>
                  {t.featured ? (
                    <div className="rounded-full bg-[color:var(--brand-soft)] px-3 py-1 text-xs font-semibold text-[color:var(--heading)]">
                      Popular
                    </div>
                  ) : null}
                </div>
                <ul className="mt-5 space-y-2 text-sm text-slate-600">
                  {t.bullets.map((b) => <li key={b}>• {b}</li>)}
                </ul>
                <div className="mt-6">
                  <ButtonLink href="/contact" variant={t.featured ? "primary" : "secondary"} className={t.featured ? "btn-demo" : ""}>
                    {t.featured ? site.ctaPrimary : site.ctaSecondary}
                  </ButtonLink>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
