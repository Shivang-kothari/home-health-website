import Link from "next/link";
import Card from "../../components/Card";
 
const mock = [
  { id: "1", name: "Ava Johnson", role: "People Ops", status: "Active" },
  { id: "2", name: "Noah Patel", role: "Software Engineer", status: "Active" },
  { id: "3", name: "Mia Chen", role: "Finance", status: "Inactive" },
];
 
export default function EmployeesPage() {
  return (
    <div>
      <div className="flex items-end justify-between gap-4">
        <div>
          <h1 className="text-slate-900">Employees</h1>
          <p className="mt-2 text-sm text-slate-600">Manage staff, credentials, and documents.</p>
        </div>
        <button className="rounded-xl bg-[linear-gradient(135deg,var(--brand),var(--brand-2))] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:shadow-md">
          Add employee
        </button>
      </div>
 
      <Card className="mt-6 overflow-hidden">
        <div className="grid grid-cols-3 border-b border-black/10 bg-white/70 px-4 py-3 text-xs font-semibold text-slate-600">
          <div>Name</div><div>Role</div><div>Status</div>
        </div>
        {mock.map((u) => (
          <Link key={u.id} href={`/portal/employees/${u.id}`}
            className="grid grid-cols-3 px-4 py-3 text-sm hover:bg-black/5">
            <div className="font-medium text-slate-900">{u.name}</div>
            <div className="text-slate-700">{u.role}</div>
            <div className="text-slate-700">{u.status}</div>
          </Link>
        ))}
      </Card>
    </div>
  );
}
