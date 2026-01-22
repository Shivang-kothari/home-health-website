import type { Metadata } from "next";
import Image from "next/image";
import Container from "../components/Container";
import ButtonLink from "../components/ButtonLink";
import { site } from "../lib/site";

export const metadata: Metadata = { title: "Home", description: site.tagline };

const heroHighlights = [
  { title: "Brand clarity", desc: "Positioning and visual identity systems that scale." },
  { title: "Product velocity", desc: "Design sprints and delivery that move quickly." },
  { title: "Studio craft", desc: "Polished execution across web, product, and content." },
];

const stats = [
  { label: "Launches delivered", value: "180+" },
  { label: "Avg. time to MVP", value: "5 weeks" },
  { label: "Client retention", value: "92%" },
  { label: "Senior-led ratio", value: "75%" },
];

const services = [
  { title: "Brand foundations", desc: "Naming, identity, and messaging for modern brands.", icon: "/file.svg" },
  { title: "Experience design", desc: "Research, UX strategy, and UI design systems.", icon: "/window.svg" },
  { title: "Digital product", desc: "Product strategy, prototyping, and delivery support.", icon: "/globe.svg" },
  { title: "Content systems", desc: "Components, documentation, and editorial patterns.", icon: "/icons/service-therapy.svg" },
  { title: "Launch and growth", desc: "Marketing sites and conversion optimization.", icon: "/icons/service-nursing.svg" },
  { title: "Studio retainer", desc: "A dedicated pod to extend your team.", icon: "/icons/location.svg" },
];

const styleKit = [
  { title: "Color system", desc: "Indigo-led palette with soft gradients.", swatches: ["#4f46e5", "#0ea5e9", "#0f172a", "#f8fafc"] },
  { title: "Typography", desc: "Clean hierarchy for clarity on every screen.", swatches: ["#0b1020", "#475569", "#cbd5f5", "#ffffff"] },
  { title: "Motion", desc: "Subtle transitions that feel responsive and calm.", swatches: ["#7c3aed", "#38bdf8", "#1f2937", "#f1f5f9"] },
];

const process = [
  { title: "Align", desc: "We define goals, scope, and success metrics." },
  { title: "Design", desc: "We craft concepts, flows, and systems." },
  { title: "Build", desc: "We deliver production-ready assets and guidance." },
  { title: "Launch", desc: "We support rollout and optimize what matters." },
];

const work = [
  { title: "Northwind", type: "Brand identity", result: "Unified product suite across 3 regions" },
  { title: "Aurora Health", type: "Digital product", result: "New patient portal with 28% faster onboarding" },
  { title: "Beacon Retail", type: "Marketing site", result: "39% lift in qualified leads" },
];

const testimonials = [
  { quote: "Everline gave us a brand system that finally feels modern and consistent.", name: "VP Marketing, SaaS Platform" },
  { quote: "Their studio team shipped designs and specs that our engineers loved.", name: "Head of Product, Fintech" },
  { quote: "We launched on time with a site that feels premium and fast.", name: "Founder, Consumer Brand" },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden hero-glow">
        <Container>
          <div className="grid gap-10 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-20">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">
                Studio for brand, product, and experience
              </p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                A professional studio for bold brands and digital experiences
              </h1>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Everline Studio blends strategy, design, and delivery to help teams launch with confidence and keep
                their brand consistent across every touchpoint.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <ButtonLink href="/demo" variant="primary">{site.ctaPrimary}</ButtonLink>
                <ButtonLink href="/contact" variant="secondary">Share a brief</ButtonLink>
              </div>

              <div className="mt-8 grid gap-3 text-xs text-slate-500 sm:grid-cols-3">
                <div className="rounded-xl border border-slate-200 bg-white px-3 py-2">Senior-led teams</div>
                <div className="rounded-xl border border-slate-200 bg-white px-3 py-2">Studio-grade craft</div>
                <div className="rounded-xl border border-slate-200 bg-white px-3 py-2">Fast delivery</div>
              </div>
            </div>

            <div className="glass-card rounded-3xl p-6">
              <Image
                src="/illustrations/services-hero.svg"
                alt="Studio dashboard preview"
                width={1200}
                height={720}
                className="w-full rounded-2xl"
                priority
              />

              <div className="mt-6 grid gap-3">
                {heroHighlights.map((h) => (
                  <div key={h.title} className="rounded-2xl border border-slate-200 bg-white/80 p-4">
                    <div className="text-sm font-semibold">{h.title}</div>
                    <p className="mt-1 text-sm text-slate-600">{h.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-10">
        <Container>
          <div className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-xs font-semibold text-slate-500">{stat.label}</div>
                <div className="mt-2 text-2xl font-bold text-slate-900">{stat.value}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-14">
        <Container>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Signature studio services</h2>
              <p className="mt-2 max-w-2xl text-sm text-slate-600">
                We craft brand systems, digital products, and marketing experiences that feel cohesive and premium.
              </p>
            </div>
            <ButtonLink href="/services" variant="secondary">Explore services</ButtonLink>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <Image src={service.icon} alt="" width={36} height={36} />
                  <div className="text-lg font-semibold">{service.title}</div>
                </div>
                <p className="mt-3 text-sm text-slate-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">A stylish system that keeps your brand consistent</h2>
              <p className="mt-3 text-sm text-slate-600">
                We build a reusable style kit so every page, product screen, and campaign feels cohesive.
              </p>
              <div className="mt-6 grid gap-4">
                {styleKit.map((kit) => (
                  <div key={kit.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                    <div className="text-base font-semibold">{kit.title}</div>
                    <p className="mt-2 text-sm text-slate-600">{kit.desc}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {kit.swatches.map((color) => (
                        <span key={color} className="h-6 w-6 rounded-full border border-white shadow-sm" style={{ background: color }} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <Image
                src="/illustrations/about-hero.svg"
                alt="Style system illustration"
                width={900}
                height={640}
                className="w-full rounded-2xl"
              />
              <div className="mt-4 grid gap-3 text-sm text-slate-600">
                <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                  Component library for marketing and product teams.
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                  Motion and interaction guidelines for a premium feel.
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-14">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <Image
                src="/illustrations/coverage-hero.svg"
                alt="Studio process"
                width={900}
                height={640}
                className="w-full rounded-2xl"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-tight">A dynamic, four-phase studio process</h2>
              <p className="mt-3 text-sm text-slate-600">
                We keep teams aligned with weekly check-ins, shared artifacts, and fast iteration loops.
              </p>
              <div className="mt-6 grid gap-3 text-sm text-slate-600">
                {process.map((step, index) => (
                  <div key={step.title} className="rounded-xl border border-slate-200 bg-white px-4 py-3">
                    <div className="text-xs font-semibold text-slate-500">Phase {index + 1}</div>
                    <div className="mt-1 font-semibold text-slate-900">{step.title}</div>
                    <div className="mt-1 text-sm text-slate-600">{step.desc}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <ButtonLink href="/features" variant="secondary">See the studio approach</ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14">
        <Container>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Selected studio work</h2>
              <p className="mt-2 text-sm text-slate-600">A few examples of brand and product outcomes.</p>
            </div>
            <ButtonLink href="/contact" variant="secondary">Request a portfolio</ButtonLink>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {work.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-xs font-semibold text-indigo-600">{item.type}</div>
                <div className="mt-2 text-lg font-semibold">{item.title}</div>
                <p className="mt-3 text-sm text-slate-600">{item.result}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14">
        <Container>
          <h2 className="text-2xl font-bold tracking-tight">What clients say</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm text-slate-600">"{t.quote}"</p>
                <div className="mt-4 text-sm font-semibold">{t.name}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14">
        <Container>
          <div className="rounded-3xl bg-slate-900 px-6 py-10 text-white md:px-10">
            <div className="grid gap-6 md:grid-cols-2 md:items-center">
              <div>
                <h2 className="text-2xl font-bold tracking-tight">Ready to build your next launch?</h2>
                <p className="mt-2 text-sm text-slate-200">Book a studio call and get a tailored plan within 10 days.</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
                <ButtonLink href="/demo" variant="primary">{site.ctaPrimary}</ButtonLink>
                <ButtonLink href="/contact" variant="secondary">Contact the studio</ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
