import Link from "next/link";
import Card from "../../../components/Card";
 
export default async function EmployeeDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
 
  return (
    <div>
      <Link href="/portal/employees" className="text-sm text-slate-700 hover:text-slate-900">← Back to employees</Link>
 
      <h1 className="mt-3 text-slate-900">Employee #{id}</h1>
      <p className="mt-2 text-sm text-slate-600">
        Employee profile details, credentials, and documents.
      </p>
 
      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <Card className="p-5">
          <div className="text-sm font-semibold text-slate-900">Credentials</div>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li>Professional License — (date)</li>
            <li>CPR — (date)</li>
            <li>Driver’s License — (date)</li>
          </ul>
        </Card>
 
        <Card className="p-5">
          <div className="text-sm font-semibold text-slate-900">Documents</div>
          <p className="mt-2 text-sm text-slate-700">Upload and review employee documents.</p>
        </Card>
      </div>
    </div>
  );
}
