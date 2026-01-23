import type { Metadata } from "next";
import Image from "next/image";
import Container from "../../components/Container";
import ButtonLink from "../../components/ButtonLink";
import { site } from "../../lib/site";

export const metadata: Metadata = {
  title: "Global Coverage",
  description: `${site.name} serves companies worldwide with localized payroll, compliance, and HR support.`,
};

const regions = [
  {
    name: "North America",
    countries: ["United States", "Canada", "Mexico"],
    features: ["Federal & state tax compliance", "ACA reporting", "Multi-state payroll"],
  },
  {
    name: "Europe",
    countries: ["United Kingdom", "Germany", "France", "Netherlands", "Spain"],
    features: ["GDPR compliance", "Localized contracts", "Statutory leave tracking"],
  },
  {
    name: "Asia Pacific",
    countries: ["Australia", "Singapore", "Japan", "India"],
    features: ["Regional payroll formats", "Local tax integrations", "Multi-currency support"],
  },
  {
    name: "Latin America",
    countries: ["Brazil", "Argentina", "Colombia", "Chile"],
    features: ["Local labor law compliance", "Social security calculations", "Regional reporting"],
  },
];

export default function CoveragePage() {
  return (
    <section className="py-14">
      <Container>
        <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl shadow-sm border border-slate-200">
          <Image src="/illustrations/coverage-hero.svg" alt="Global Coverage" width={1200} height={360} className="w-full h-auto" priority />
        </div>

        <h1 className="mt-8 text-3xl font-bold tracking-tight">Global Coverage</h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600">
          {site.name} supports companies with employees around the world. Our platform adapts to local 
          regulations, currencies, and compliance requirements so you can manage your global workforce from one place.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {regions.map((region) => (
            <div key={region.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">{region.name}</h2>
              <div className="mt-3">
                <div className="text-sm font-medium text-slate-700">Countries</div>
                <p className="mt-1 text-sm text-slate-600">{region.countries.join(", ")}</p>
              </div>
              <div className="mt-3">
                <div className="text-sm font-medium text-slate-700">Key Features</div>
                <ul className="mt-1 space-y-1 text-sm text-slate-600">
                  {region.features.map((feature) => (
                    <li key={feature}>• {feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-slate-900 px-6 py-8 text-white">
          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-xl font-bold">Need coverage in a specific region?</h2>
              <p className="mt-2 text-sm text-slate-300">
                We&apos;re constantly expanding our global coverage. Contact us to discuss your specific requirements
                and timelines for new regions.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
              <ButtonLink href="/demo" variant="secondary">{site.ctaPrimary}</ButtonLink>
              <ButtonLink href="/contact" variant="ghost">{site.ctaSecondary}</ButtonLink>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-2xl font-bold text-teal-600">50+</div>
            <div className="mt-1 text-sm font-medium text-slate-900">Countries supported</div>
            <p className="mt-2 text-sm text-slate-600">Localized payroll and compliance for major markets worldwide.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-2xl font-bold text-teal-600">30+</div>
            <div className="mt-1 text-sm font-medium text-slate-900">Currencies</div>
            <p className="mt-2 text-sm text-slate-600">Pay employees in their local currency with automatic conversions.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-2xl font-bold text-teal-600">24/7</div>
            <div className="mt-1 text-sm font-medium text-slate-900">Global support</div>
            <p className="mt-2 text-sm text-slate-600">Support teams across time zones to help you whenever you need it.</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
