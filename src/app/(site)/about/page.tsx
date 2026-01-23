import type { Metadata } from "next";
import Image from "next/image";
import Container from "../../components/Container";
import { site } from "../../lib/site";
import Card from "../../components/Card";
import Reveal from "../../components/Reveal";

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

        <h1 className="mt-10 text-slate-900">About {site.name}</h1>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600">
          {site.name} is built for home health agencies that need clear staff records, reliable compliance workflows, and less admin friction.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { t: "Our mission", d: "Make home health operations calmer—clean records, clear workflows, and fewer last‑minute surprises." },
            { t: "How we build", d: "We prioritize usability, auditability, and secure defaults. Simple screens, dependable outputs." },
            { t: "What you get", d: "A modern platform that supports onboarding, compliance tracking, and payroll-ready reporting." },
          ].map((x, idx) => (
            <Reveal key={x.t} delayMs={idx * 70}>
              <Card className="p-6">
                <div className="text-base font-semibold text-slate-900">{x.t}</div>
                <p className="mt-2 text-sm text-slate-600">{x.d}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
