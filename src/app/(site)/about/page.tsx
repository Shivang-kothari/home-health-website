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
          HealthHR is built for home health agencies that need a secure, compliant HR system without the complexity.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-base font-semibold">Our mission</div>
            <p className="mt-2 text-sm text-slate-600">
              Help agencies stay compliant and deliver care without admin overload.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-base font-semibold">How we work</div>
            <p className="mt-2 text-sm text-slate-600">
              Secure-by-design software with guided onboarding and support.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-base font-semibold">What to expect</div>
            <p className="mt-2 text-sm text-slate-600">
              A simple portal for HR, time, and compliance with clear reporting.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold">Leadership team</h2>
            <p className="mt-2 text-sm text-slate-600">
              Our team blends healthcare operations, HR compliance, and product engineering.
            </p>
            <div className="mt-4 grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
              <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">Clinical operations</div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">HR compliance</div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">Security and privacy</div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">Product engineering</div>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-base font-semibold">Operating principles</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>Protect patient data with HIPAA-aligned workflows.</li>
              <li>Design for caregivers first.</li>
              <li>Make audits predictable and painless.</li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
