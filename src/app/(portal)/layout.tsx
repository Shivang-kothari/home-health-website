import Link from "next/link";
 
const nav = [
  { href: "/portal/dashboard", label: "Dashboard" },
  { href: "/portal/employees", label: "Employees" },
];
 
export default function PortalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh bg-slate-50">
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="font-semibold">Home Health • HR Portal</div>
          <Link className="text-sm text-slate-600 hover:text-slate-900" href="/login">Sign out</Link>
        </div>
      </div>
 
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-6 sm:px-6 lg:grid-cols-[220px_1fr] lg:px-8">
        <aside className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="text-xs font-semibold text-slate-500">NAVIGATION</div>
          <nav className="mt-3 grid gap-1">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900">
                {n.label}
              </Link>
            ))}
          </nav>
        </aside>
 
        <main className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          {children}
        </main>
      </div>
    </div>
  );
}
