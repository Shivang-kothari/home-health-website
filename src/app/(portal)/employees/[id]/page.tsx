import Link from "next/link";
 
export default async function EmployeeDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
 
  return (
    <div>
      <Link href="/portal/employees" className="text-sm text-indigo-700 hover:text-indigo-600">← Back to employees</Link>
 
      <h1 className="mt-3 text-2xl font-bold tracking-tight">Employee #{id}</h1>
      <p className="mt-2 text-sm text-slate-600">
        Employee profile details, credentials, and documents.
      </p>
 
      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <section className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <div className="text-sm font-semibold">Credentials</div>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li>Professional License — (date)</li>
            <li>CPR — (date)</li>
            <li>Driver’s License — (date)</li>
          </ul>
        </section>
 
        <section className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <div className="text-sm font-semibold">Documents</div>
          <p className="mt-2 text-sm text-slate-700">Upload and review employee documents.</p>
        </section>
      </div>
    </div>
  );
}
