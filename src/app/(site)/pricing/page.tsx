import Container from "../../components/Container";
import ButtonLink from "../../components/ButtonLink";

const tiers = [
  {
    name: "Studio Sprint",
    price: "From $12k",
    bullets: ["2-3 week sprint", "Brand or product concept", "Launch-ready direction"],
  },
  {
    name: "Launch Partnership",
    price: "From $45k",
    bullets: ["6-8 week delivery", "Design system + build support", "Weekly checkpoints"],
  },
  {
    name: "Studio Retainer",
    price: "Custom",
    bullets: ["Dedicated pod", "Monthly design cycles", "Ongoing optimization"],
  },
];

export default function PricingPage() {
  return (
    <section className="py-14">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Plans</h1>
            <p className="mt-2 text-sm text-slate-600">
              Flexible studio plans designed for brand launches, product work, and ongoing support.
            </p>
          </div>
          <ButtonLink href="/demo" variant="primary">Book a studio call</ButtonLink>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((t) => (
            <div key={t.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-lg font-semibold">{t.name}</div>
              <div className="mt-2 text-2xl font-bold">{t.price}</div>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {t.bullets.map((b) => <li key={b}>- {b}</li>)}
              </ul>
              <div className="mt-4">
                <ButtonLink href="/contact" variant="secondary">Talk to the studio</ButtonLink>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
