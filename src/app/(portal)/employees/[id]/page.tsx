import Link from "next/link";
 
export default async function EmployeeDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
 
  return (
    <div>
      <Link href="/portal/employees" className="text-sm text-teal-700 hover:text-teal-600">Back to employees</Link>
 
      <h1 className="mt-3 text-2xl font-bold tracking-tight">Employee #{id}</h1>
      <p className="mt-2 text-sm text-slate-600">
        Profile details, employment history, and document status for this employee.
      </p>
 
      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <section className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <div className="text-sm font-semibold">Compliance checklist</div>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li>Work eligibility verification - (date)</li>
            <li>Signed offer letter - (date)</li>
            <li>Policy acknowledgements - (date)</li>
          </ul>
        </section>
 
        <section className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <div className="text-sm font-semibold">Documents</div>
          <p className="mt-2 text-sm text-slate-700">
            Store contracts, tax forms, and policy acknowledgements in one place.
          </p>
        </section>
      </div>
    </div>
  );
}
