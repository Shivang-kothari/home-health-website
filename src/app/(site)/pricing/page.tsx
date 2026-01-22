import Container from "../../components/Container";
import ButtonLink from "../../components/ButtonLink";

const tiers = [
  {
    name: "Starter",
    price: "$79",
    bullets: ["Up to 25 caregivers", "Core HR + onboarding", "Email support"],
  },
  {
    name: "Growth",
    price: "$249",
    bullets: ["Up to 150 caregivers", "Time tracking + compliance", "Priority support"],
  },
  {
    name: "Enterprise",
    price: "Custom",
    bullets: ["Unlimited caregivers", "Custom workflows", "Dedicated success manager"],
  },
];

export default function PricingPage() {
  return (
    <section className="py-14">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Pricing</h1>
            <p className="mt-2 text-sm text-slate-600">
              Transparent pricing for agencies of every size.
            </p>
          </div>
          <ButtonLink href="/demo" variant="primary">Request a demo</ButtonLink>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((t) => (
            <div key={t.name} className="rounded-2xl border border-slate-200 p-6 shadow-sm card-surface">
              <div className="text-lg font-semibold">{t.name}</div>
              <div className="mt-2 text-2xl font-bold">{t.price}</div>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {t.bullets.map((b) => <li key={b}>- {b}</li>)}
              </ul>
              <div className="mt-4">
                <ButtonLink href="/contact" variant="secondary">Talk to sales</ButtonLink>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
