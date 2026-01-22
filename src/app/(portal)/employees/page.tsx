import Link from "next/link";
 
const mock = [
  { id: "1", name: "Digital Experience Refresh", role: "Design", status: "In progress" },
  { id: "2", name: "Operations Transformation", role: "Strategy", status: "Discovery" },
  { id: "3", name: "Analytics Enablement", role: "Data", status: "Active" },
];
 
export default function EmployeesPage() {
  return (
    <div>
      <div className="flex items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Projects</h1>
          <p className="mt-2 text-sm text-slate-600">Track project status, owners, and delivery updates.</p>
        </div>
        <button className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500">
          New project
        </button>
      </div>
 
      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
        <div className="grid grid-cols-3 bg-slate-50 px-4 py-3 text-xs font-semibold text-slate-600">
          <div>Project</div><div>Focus</div><div>Status</div>
        </div>
        {mock.map((u) => (
          <Link key={u.id} href={`/portal/employees/${u.id}`}
            className="grid grid-cols-3 px-4 py-3 text-sm hover:bg-slate-50">
            <div className="font-medium text-slate-900">{u.name}</div>
            <div className="text-slate-700">{u.role}</div>
            <div className="text-slate-700">{u.status}</div>
          </Link>
        ))}
      </div>
 
      <p className="mt-4 text-xs text-slate-500">
        Next step: connect this list to your project data and add status automation.
      </p>
    </div>
  );
}
