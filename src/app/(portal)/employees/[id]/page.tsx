import Link from "next/link";
 
export default async function EmployeeDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
 
  return (
    <div>
      <Link href="/portal/employees" className="text-sm text-indigo-700 hover:text-indigo-600">{"<- Back to projects"}</Link>
 
      <h1 className="mt-3 text-2xl font-bold tracking-tight">Project #{id}</h1>
      <p className="mt-2 text-sm text-slate-600">
        This page will show project milestones, owners, and deliverables (placeholder).
      </p>
 
      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <section className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <div className="text-sm font-semibold">Milestones</div>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li>Discovery complete - (date)</li>
            <li>Design review - (date)</li>
            <li>Launch readiness - (date)</li>
          </ul>
        </section>
 
        <section className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <div className="text-sm font-semibold">Deliverables</div>
          <p className="mt-2 text-sm text-slate-700">Upload/view weekly updates and executive summaries (coming next).</p>
        </section>
      </div>
    </div>
  );
}
