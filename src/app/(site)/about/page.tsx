import type { Metadata } from "next";
import Image from "next/image";
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
        <div className="mx-auto max-w-4xl">
          <Image src="/illustrations/about-hero.svg" alt="About" width={1200} height={360} className="w-full rounded-2xl shadow-sm" />
        </div>

        <h1 className="text-3xl font-bold tracking-tight">About {site.name}</h1>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600">
          {site.name} was built for HR teams who need fewer spreadsheets and more automation.
          We combine employee data, workflows, and payroll-ready exports so HR can focus on people.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="pro-card rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-base font-semibold">Our mission</div>
            <p className="mt-2 text-sm text-slate-600">
              Help HR teams scale by automating repetitive work and providing trusted people data.
            </p>
          </div>
          <div className="pro-card rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-base font-semibold">How we work</div>
            <p className="mt-2 text-sm text-slate-600">
              We listen to HR problems, prioritize secure integrations, and iterate quickly with customers.
            </p>
          </div>
          <div className="pro-card rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
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
