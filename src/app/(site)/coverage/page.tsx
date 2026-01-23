import type { Metadata } from "next";
import Image from "next/image";
import Container from "../../components/Container";
import { site } from "../../lib/site";
import CoverageSearch from "../../components/CoverageSearch";
import Card from "../../components/Card";
import Reveal from "../../components/Reveal";

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

        <h1 className="mt-10 text-slate-900">Coverage</h1>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600">
          Search our current supported regions. If you don’t see what you need, contact us and we’ll confirm feasibility and timeline.
        </p>

        <CoverageSearch areas={areas} />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <Card className="p-6">
              <div className="text-base font-semibold text-slate-900">What “coverage” means</div>
              <p className="mt-2 text-sm text-slate-600">
                Coverage reflects where we support standardized workflows and reporting. Requirements vary by region—we’ll confirm details in a demo.
              </p>
            </Card>
          </Reveal>

          <Reveal delayMs={120}>
            <Card className="p-6">
              <div className="text-base font-semibold text-slate-900">Need a new region?</div>
              <p className="mt-2 text-sm text-slate-600">
                Reach out at{" "}
                <a className="hover:opacity-90" href={site.emailHref}>
                  {site.email}
                </a>{" "}
                and we’ll discuss requirements and timeline.
              </p>
            </Card>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
