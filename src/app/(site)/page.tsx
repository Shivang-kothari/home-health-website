import type { Metadata } from "next";
import Image from "next/image";
import Container from "../components/Container";
import ButtonLink from "../components/ButtonLink";
import { site } from "../lib/site";

export const metadata: Metadata = { title: "Home", description: site.tagline };

const heroHighlights = [
  { title: "Executive alignment", desc: "Decision-ready roadmaps and measurable outcomes." },
  { title: "Delivery velocity", desc: "Cross-functional teams that launch with speed." },
  { title: "Sustained impact", desc: "Governance, analytics, and enablement built in." },
];

const stats = [
  { label: "Client retention", value: "94%" },
  { label: "Programs delivered", value: "240+" },
  { label: "Time to value", value: "6 weeks" },
  { label: "Senior team ratio", value: "80%" },
];

const services = [
  { title: "Strategy and growth", desc: "Market analysis, growth planning, and portfolio clarity.", icon: "/file.svg" },
  { title: "Experience design", desc: "Research, journey mapping, and product design systems.", icon: "/window.svg" },
  { title: "Analytics and AI", desc: "Data foundations, dashboards, and practical AI delivery.", icon: "/globe.svg" },
  { title: "Operations excellence", desc: "Process optimization, KPI alignment, and org enablement.", icon: "/icons/service-therapy.svg" },
  { title: "Digital delivery", desc: "Product squads that build portals, tools, and platforms.", icon: "/icons/service-nursing.svg" },
  { title: "Ongoing support", desc: "Continuous improvement, reporting, and leadership briefings.", icon: "/icons/location.svg" },
];

const steps = [
  { title: "Discover", desc: "We clarify priorities, diagnose constraints, and align on outcomes." },
  { title: "Design", desc: "We translate strategy into executable plans, journeys, and playbooks." },
  { title: "Deliver", desc: "We launch, measure, and enable your teams to scale what works." },
];

const testimonials = [
  { quote: "Summitline helped us consolidate three programs into one roadmap without losing momentum.", name: "VP Operations, National Retailer" },
  { quote: "Their delivery squads shipped in weeks and built trust with our internal teams.", name: "Chief Digital Officer, Financial Services" },
  { quote: "We finally have a clear analytics strategy and executive dashboards that leadership uses.", name: "Director of Analytics, Healthcare Group" },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">
        <Container>
          <div className="grid gap-10 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-20">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">
                Strategy • Design • Delivery
              </p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                Build the next chapter of your organization with confidence
              </h1>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Summitline Consulting partners with leadership teams to align priorities, modernize operations,
                and deliver digital experiences that customers and teams trust.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <ButtonLink href="/demo" variant="primary">{site.ctaPrimary}</ButtonLink>
                <ButtonLink href="/contact" variant="secondary">Start a conversation</ButtonLink>
              </div>

              <div className="mt-8 grid gap-3 text-xs text-slate-500 sm:grid-cols-3">
                <div className="rounded-xl border border-slate-200 bg-white px-3 py-2">Advisors, not vendors</div>
                <div className="rounded-xl border border-slate-200 bg-white px-3 py-2">Cross-functional teams</div>
                <div className="rounded-xl border border-slate-200 bg-white px-3 py-2">Clear governance</div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <Image
                src="/illustrations/services-hero.svg"
                alt="Consulting team dashboard preview"
                width={1200}
                height={720}
                className="w-full rounded-2xl"
                priority
              />

              <div className="mt-6 grid gap-3">
                {heroHighlights.map((h) => (
                  <div key={h.title} className="rounded-2xl border border-slate-200 p-4">
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
              <h2 className="text-2xl font-bold tracking-tight">Services built for modern leadership teams</h2>
              <p className="mt-2 max-w-2xl text-sm text-slate-600">
                We blend strategy, experience design, and delivery to make sure initiatives move from idea to impact.
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
              <h2 className="text-2xl font-bold tracking-tight">A clear, collaborative delivery model</h2>
              <p className="mt-3 text-sm text-slate-600">
                You get a single accountable team that blends advisory, experience, and engineering. We keep work visible
                and decisions documented so stakeholders stay aligned.
              </p>
              <div className="mt-6 grid gap-4">
                {steps.map((step, idx) => (
                  <div key={step.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                    <div className="text-xs font-semibold text-slate-500">Step {idx + 1}</div>
                    <div className="mt-1 text-base font-semibold">{step.title}</div>
                    <p className="mt-2 text-sm text-slate-600">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <Image
                src="/illustrations/about-hero.svg"
                alt="Delivery approach illustration"
                width={900}
                height={640}
                className="w-full rounded-2xl"
              />
              <div className="mt-4 grid gap-3 text-sm text-slate-600">
                <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                  Weekly executive updates with milestones, risks, and next steps.
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                  Joint squads embedded with your teams to accelerate adoption.
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
                alt="Global delivery hubs"
                width={900}
                height={640}
                className="w-full rounded-2xl"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Global delivery with local accountability</h2>
              <p className="mt-3 text-sm text-slate-600">
                We combine on-site leadership with distributed delivery hubs to scale programs without losing quality.
              </p>
              <ul className="mt-6 grid gap-3 text-sm text-slate-600">
                <li className="rounded-xl border border-slate-200 bg-white px-4 py-3">Primary hubs in San Francisco, New York, and London</li>
                <li className="rounded-xl border border-slate-200 bg-white px-4 py-3">Follow-the-sun operations for analytics and delivery</li>
                <li className="rounded-xl border border-slate-200 bg-white px-4 py-3">Secure, compliant workflows for regulated industries</li>
              </ul>
              <div className="mt-6">
                <ButtonLink href="/coverage" variant="secondary">View locations</ButtonLink>
              </div>
            </div>
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
                <h2 className="text-2xl font-bold tracking-tight">Ready to align your next initiative?</h2>
                <p className="mt-2 text-sm text-slate-200">Schedule a consultation and get a tailored plan within 10 days.</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
                <ButtonLink href="/demo" variant="primary">{site.ctaPrimary}</ButtonLink>
                <ButtonLink href="/contact" variant="secondary">Contact our team</ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
