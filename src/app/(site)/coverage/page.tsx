import type { Metadata } from "next";
import Image from "next/image";
import Container from "../../components/Container";
import { site } from "../../lib/site";
import CoverageSearch from "../../components/CoverageSearch";

export const metadata: Metadata = {
  title: "Coverage",
  description: `Regional coverage and compliance support from ${site.name}.`,
};

export default function CoveragePage() {
  const areas = site.serviceArea;

  return (
    <section className="py-14">
      <Container>
        <div className="mx-auto max-w-4xl">
          <Image src="/illustrations/coverage-hero.svg" alt="Coverage" width={1200} height={360} className="w-full rounded-2xl shadow-sm" priority />
        </div>

        <h1 className="mt-6 text-3xl font-bold tracking-tight">Coverage</h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600">
          We support teams across multiple regions with localized compliance guidance and payroll-ready exports.
          If you are expanding into a new region, we can help you plan and launch with confidence.
        </p>

        <div className="mt-6">
          <CoverageSearch areas={areas} />
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold">Compliance support</h2>
            <p className="mt-2 text-sm text-slate-600">
              Stay aligned with local requirements as your organization grows.
            </p>
            <ul className="mt-3 list-disc pl-5 text-sm text-slate-600">
              <li>Localized templates and policy guidance</li>
              <li>Payroll exports with audit-ready reporting</li>
              <li>Secure data handling and access controls</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold">Not sure if you are covered?</h2>
            <p className="mt-2 text-sm text-slate-600">
              Call us at <a href={site.phoneHref} className="text-teal-700 hover:text-teal-600">{site.phone}</a> or
              use the contact form and we will confirm availability and next steps.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-sm font-medium text-slate-700">Primary regions</h3>
          <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
            {areas.map((area) => (
              <span key={area} className="rounded-md bg-slate-50 px-3 py-2 text-sm text-slate-600">
                {area}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
