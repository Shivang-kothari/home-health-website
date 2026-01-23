export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
      <p className="mt-2 text-sm text-slate-600">
        Key metrics for onboarding, compliance, and workforce activity.
      </p>
 
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            { k: "Active Employees", v: "N/A" },
            { k: "Open Onboarding", v: "N/A" },
            { k: "Policy Acknowledgements", v: "N/A" },
          ].map((c) => (
          <div key={c.k} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <div className="text-xs font-semibold text-slate-500">{c.k}</div>
            <div className="mt-2 text-2xl font-bold">{c.v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
