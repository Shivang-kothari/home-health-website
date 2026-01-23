import Link from "next/link";
import Card from "../components/Card";
import { site } from "../lib/site";
 
const nav = [
  { href: "/portal/dashboard", label: "Dashboard" },
  { href: "/portal/employees", label: "Employees" },
];
 
export default function PortalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh">
      <div className="sticky top-0 z-30 border-b border-black/10 bg-white/70 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="text-sm font-semibold text-slate-900">{site.name} Portal</div>
          <Link className="text-sm text-slate-600 hover:text-slate-900" href="/login">Sign out</Link>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[240px_1fr] lg:px-8">
        <aside>
          <Card className="p-4">
            <div className="text-xs font-semibold text-slate-500">NAVIGATION</div>
            <nav className="mt-3 grid gap-1">
              {nav.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-black/5 hover:text-slate-900"
                >
                  {n.label}
                </Link>
              ))}
            </nav>
          </Card>
        </aside>

        <main>
          <Card className="p-6">{children}</Card>
        </main>
      </div>
    </div>
  );
}
