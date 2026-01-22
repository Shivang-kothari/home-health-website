import Image from "next/image";
import Container from "../../components/Container";
import ButtonLink from "../../components/ButtonLink";

const capabilities = [
  { title: "Brand strategy", desc: "Positioning, naming, and identity systems.", icon: "/file.svg" },
  { title: "UX and UI design", desc: "Research-driven flows and polished interfaces.", icon: "/window.svg" },
  { title: "Web experiences", desc: "Marketing sites and launch-ready pages.", icon: "/globe.svg" },
  { title: "Product design", desc: "Feature concepts, prototypes, and specs.", icon: "/icons/location.svg" },
  { title: "Content systems", desc: "Components, guidelines, and editorial patterns.", icon: "/icons/service-therapy.svg" },
  { title: "Motion and interaction", desc: "Micro-interactions that feel premium.", icon: "/icons/service-nursing.svg" },
];

const outcomes = [
  "A brand kit with tokens, typography, and color rules.",
  "Production-ready specs for your engineering team.",
  "Launch guidance with QA and post-launch tuning.",
];

export default function FeaturesPage() {
  return (
    <section className="py-14">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Studio</h1>
            <p className="mt-2 max-w-2xl text-sm text-slate-600">
              A design-led studio that blends brand, product, and web experiences into one cohesive system.
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
              We align early, keep feedback tight, and deliver assets your team can launch immediately.
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
            <h3 className="text-base font-semibold">Studio pods</h3>
            <p className="mt-2 text-sm text-slate-600">
              Assemble a custom pod of strategists, designers, and developers based on your scope.
            </p>
            <div className="mt-4 grid gap-2 text-sm text-slate-600">
              <div className="rounded-xl border border-slate-200 bg-white px-3 py-2">Brand strategist</div>
              <div className="rounded-xl border border-slate-200 bg-white px-3 py-2">Design lead</div>
              <div className="rounded-xl border border-slate-200 bg-white px-3 py-2">Front-end engineering</div>
              <div className="rounded-xl border border-slate-200 bg-white px-3 py-2">Content designer</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
