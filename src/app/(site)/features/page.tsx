import Image from "next/image";
import Container from "../../components/Container";
import ButtonLink from "../../components/ButtonLink";

const capabilities = [
  { title: "HIPAA-aligned security", desc: "Role-based access, audit logs, and secure document storage.", icon: "/file.svg" },
  { title: "Time tracking", desc: "PIN clock-in, location notes, and approval workflows.", icon: "/window.svg" },
  { title: "Onboarding and HR", desc: "Digital checklists, policy signoff, and employee records.", icon: "/globe.svg" },
  { title: "Credential management", desc: "Expiration alerts, training logs, and compliance tracking.", icon: "/icons/location.svg" },
  { title: "Payroll exports", desc: "Accurate timesheets and payroll-ready exports.", icon: "/icons/service-therapy.svg" },
  { title: "Agency portal", desc: "Admin, supervisor, and caregiver views in one portal.", icon: "/icons/service-nursing.svg" },
];

const outcomes = [
  "Reduced onboarding time with digital forms and checklists.",
  "Faster payroll runs with clean, approved timesheets.",
  "Audit-ready compliance reporting at any time.",
];

export default function FeaturesPage() {
  return (
    <section className="py-14">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Features</h1>
            <p className="mt-2 max-w-2xl text-sm text-slate-600">
              The HealthHR platform is built for home health agencies to manage HR, time, and compliance.
            </p>
          </div>
          <ButtonLink href="/demo" variant="primary">Request a demo</ButtonLink>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((f) => (
            <div key={f.title} className="rounded-2xl border border-slate-200 p-6 shadow-sm card-surface">
              <div className="flex items-center gap-3">
                <Image src={f.icon} alt="" width={32} height={32} />
                <div className="text-lg font-semibold">{f.title}</div>
              </div>
              <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="rounded-2xl border border-slate-200 p-6 shadow-sm card-surface">
            <h2 className="text-lg font-semibold">What you can expect</h2>
            <p className="mt-2 text-sm text-slate-600">
              Clear workflows, simplified compliance, and a portal your caregivers can use on any device.
            </p>
            <ul className="mt-4 grid gap-2 text-sm text-slate-600">
              {outcomes.map((o) => (
                <li key={o} className="rounded-xl border border-slate-200 px-4 py-2 card-surface">
                  {o}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 p-6 card-surface">
            <h3 className="text-base font-semibold">Team access</h3>
            <p className="mt-2 text-sm text-slate-600">
              Give the right access to admins, supervisors, and field caregivers.
            </p>
            <div className="mt-4 grid gap-2 text-sm text-slate-600">
              <div className="rounded-xl border border-slate-200 px-3 py-2 card-surface">Agency admin</div>
              <div className="rounded-xl border border-slate-200 px-3 py-2 card-surface">Supervisor</div>
              <div className="rounded-xl border border-slate-200 px-3 py-2 card-surface">Caregiver</div>
              <div className="rounded-xl border border-slate-200 px-3 py-2 card-surface">Compliance manager</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
