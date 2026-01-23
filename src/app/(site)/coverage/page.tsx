import type { Metadata } from "next";
import Image from "next/image";
import Container from "../../components/Container";
import { site } from "../../lib/site";
import CoverageSearch from "../../components/CoverageSearch";

export const metadata: Metadata = {
  title: "Coverage",
  description: `Supported regions for ${site.name}.`,
};

export default function CoveragePage() {
  const areas = site.serviceArea;

  return (
    <section className="py-14">
      <Container>
        <div className="mx-auto max-w-4xl">
          <Image
            src="/illustrations/coverage-hero.svg"
            alt="Coverage"
            width={1200}
            height={360}
            className="w-full rounded-2xl shadow-sm"
            priority
          />
        </div>

        <h1 className="mt-10 text-3xl font-bold tracking-tight">Coverage</h1>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600">
          {site.name} is designed for distributed teams and supports multi-region operations. Search below for currently supported
          regions, and contact sales if you need coverage for an additional location.
        </p>

        <CoverageSearch areas={areas} />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="pro-card rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-base font-semibold">What “coverage” means</div>
            <p className="mt-2 text-sm text-slate-600">
              Coverage indicates where we support standardized workflows, reporting, and integrations. Requirements vary by region;
              we’ll confirm details during your demo.
            </p>
          </div>

          <div className="pro-card rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-base font-semibold">Need a new region?</div>
            <p className="mt-2 text-sm text-slate-600">
              Reach out at <a className="text-[color:var(--brand)] hover:opacity-90" href={site.emailHref}>{site.email}</a> and we’ll discuss
              your requirements and timeline.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
