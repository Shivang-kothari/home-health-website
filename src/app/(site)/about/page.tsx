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
          We are a senior advisory and delivery firm that helps leadership teams unlock growth, modernize operations,
          and deliver customer experiences with speed and accountability.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-base font-semibold">Our mission</div>
            <p className="mt-2 text-sm text-slate-600">
              Help organizations make confident decisions and execute with clarity.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-base font-semibold">How we work</div>
            <p className="mt-2 text-sm text-slate-600">
              Collaborative teams, transparent reporting, and measurable outcomes at every phase.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-base font-semibold">What to expect</div>
            <p className="mt-2 text-sm text-slate-600">
              A dedicated partner that plans, delivers, and enables your internal teams to scale.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold">Leadership team</h2>
            <p className="mt-2 text-sm text-slate-600">
              Our leadership team blends consulting, product, and operational experience from global enterprises
              and high-growth organizations.
            </p>
            <div className="mt-4 grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
              <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">Strategy and finance</div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">Product and design</div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">Data and AI</div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">Change and delivery</div>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-base font-semibold">Operating principles</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>Lead with insight, not assumptions.</li>
              <li>Make decisions visible and measurable.</li>
              <li>Build capabilities that endure after launch.</li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
