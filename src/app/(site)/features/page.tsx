import Container from "../../components/Container";
import ButtonLink from "../../components/ButtonLink";

const features = [
  {
    title: "Employee profiles",
    desc: "Centralized profiles, documents, and history with fast search.",
  },
  {
    title: "Workflow automation",
    desc: "Configurable onboarding, approvals, and policy acknowledgements.",
  },
  {
    title: "Time off and attendance",
    desc: "Leave policies, approvals, and shared calendars for every team.",
  },
  {
    title: "Payroll exports",
    desc: "Accurate exports, audit trails, and integrations for payroll partners.",
  },
  {
    title: "Performance and feedback",
    desc: "Goals, review cycles, and continuous feedback workflows.",
  },
  {
    title: "Security and access",
    desc: "Role-based access, SSO-ready authentication, and activity logs.",
  },
];

export default function FeaturesPage() {
  return (
    <section className="py-14">
      <Container>
        <div className="flex items-end justify-between gap-6">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Features</h1>
            <p className="mt-2 text-sm text-slate-600">
              Everything HR needs to manage people operations with clarity and control.
            </p>
          </div>
          <ButtonLink href="/demo" variant="primary">Request a demo</ButtonLink>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-lg font-semibold">{f.title}</div>
              <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
