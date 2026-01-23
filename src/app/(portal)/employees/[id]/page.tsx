import Link from "next/link";
 
export default async function EmployeeDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
 
  return (
    <div>
      <Link href="/portal/employees" className="text-sm text-sky-700 hover:text-sky-600">{"<- Back to staff"}</Link>
 
      <h1 className="mt-3 text-2xl font-bold tracking-tight">Staff member #{id}</h1>
      <p className="mt-2 text-sm text-slate-600">
        This page will show credentials, documents, and time tracking (placeholder).
      </p>
 
      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <section className="rounded-2xl border border-slate-200 p-4 card-surface">
          <div className="text-sm font-semibold">Credentials</div>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li>Professional license - (date)</li>
            <li>CPR certification - (date)</li>
            <li>Background check - (date)</li>
          </ul>
        </section>
 
        <section className="rounded-2xl border border-slate-200 p-4 card-surface">
          <div className="text-sm font-semibold">Documents</div>
          <p className="mt-2 text-sm text-slate-700">Upload/view signed forms and credential files (coming next).</p>
        </section>
      </div>
    </div>
  );
}
