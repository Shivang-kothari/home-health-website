import Card from "../../components/Card";

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-slate-900">Dashboard</h1>
      <p className="mt-2 text-sm text-slate-600">
        A quick overview of onboarding, upcoming deadlines, and key tasks.
      </p>
 
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {[
          { k: "Active Employees", v: "—" },
          { k: "Expiring in 30 Days", v: "—" },
          { k: "Missing Documents", v: "—" },
        ].map((c) => (
          <Card key={c.k} className="p-4">
            <div className="text-xs font-semibold text-slate-500">{c.k}</div>
            <div className="mt-2 text-2xl font-semibold text-slate-900">{c.v}</div>
          </Card>
        ))}
      </div>
    </div>
  );
}
