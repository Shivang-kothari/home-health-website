import Image from "next/image";
import Container from "../../components/Container";
import ButtonLink from "../../components/ButtonLink";

const capabilities = [
  { title: "Executive strategy", desc: "Visioning, portfolio prioritization, and investment planning.", icon: "/file.svg" },
  { title: "Customer experience", desc: "Research-led design, service blueprints, and prototyping.", icon: "/window.svg" },
  { title: "Data and analytics", desc: "Data platforms, KPIs, and dashboards that leaders trust.", icon: "/globe.svg" },
  { title: "Operating model", desc: "Org design, ways of working, and governance that scales.", icon: "/icons/location.svg" },
  { title: "Technology delivery", desc: "Full-stack delivery teams and product management support.", icon: "/icons/service-therapy.svg" },
  { title: "Change enablement", desc: "Communications, training, and adoption programs.", icon: "/icons/service-nursing.svg" },
];

const outcomes = [
  "A 90-day transformation roadmap with owners and milestones.",
  "Executive-ready dashboards that measure progress and impact.",
  "A delivery squad aligned to your tools and security standards.",
];

export default function FeaturesPage() {
  return (
    <section className="py-14">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Expertise</h1>
            <p className="mt-2 max-w-2xl text-sm text-slate-600">
              Our teams blend strategic advisory and hands-on delivery so leaders can move from intent to execution.
            </p>
          </div>
          <ButtonLink href="/contact" variant="primary">Start a project</ButtonLink>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((f) => (
            <div key={f.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <Image src={f.icon} alt="" width={32} height={32} />
                <div className="text-lg font-semibold">{f.title}</div>
              </div>
              <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold">What you can expect</h2>
            <p className="mt-2 text-sm text-slate-600">
              We establish clarity early and keep stakeholders aligned with weekly updates and decision logs.
            </p>
            <ul className="mt-4 grid gap-2 text-sm text-slate-600">
              {outcomes.map((o) => (
                <li key={o} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2">
                  {o}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-base font-semibold">Specialist pods</h3>
            <p className="mt-2 text-sm text-slate-600">
              Assemble a custom pod of strategists, designers, and delivery leads based on your scope.
            </p>
            <div className="mt-4 grid gap-2 text-sm text-slate-600">
              <div className="rounded-xl border border-slate-200 bg-white px-3 py-2">Strategy lead</div>
              <div className="rounded-xl border border-slate-200 bg-white px-3 py-2">Delivery manager</div>
              <div className="rounded-xl border border-slate-200 bg-white px-3 py-2">Data and AI specialists</div>
              <div className="rounded-xl border border-slate-200 bg-white px-3 py-2">Product and design</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
