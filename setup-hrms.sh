#!/usr/bin/env bash
set -e
 
mkdir -p src/app/\(auth\)/login
mkdir -p src/app/\(portal\)/{dashboard,employees}
mkdir -p src/app/\(portal\)/employees/\[id\]
mkdir -p src/app/portal-api
 
cat > src/app/portal-api/config.ts <<'EOT'
export const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
EOT
 
cat > src/app/\(auth\)/login/page.tsx <<'EOT'
"use client";
 
import { useRouter } from "next/navigation";
import { useState } from "react";
 
export default function LoginPage() {
  const r = useRouter();
  const [email, setEmail] = useState("admin@example.com");
  const [password, setPassword] = useState("password");
 
  return (
    <div className="min-h-dvh bg-slate-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold tracking-tight">HR Portal Login</h1>
        <p className="mt-2 text-sm text-slate-600">Sign in to manage employees & credentials.</p>
 
        <div className="mt-6 grid gap-4">
          <label className="grid gap-1 text-sm">
            <span className="font-medium">Email</span>
            <input className="rounded-xl border border-slate-200 px-3 py-2"
              value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label className="grid gap-1 text-sm">
            <span className="font-medium">Password</span>
            <input type="password" className="rounded-xl border border-slate-200 px-3 py-2"
              value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
 
          <button
            className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
            onClick={() => {
              // TEMP: mock auth
              localStorage.setItem("hrms_session", JSON.stringify({ email, at: Date.now() }));
              r.push("/portal/dashboard");
            }}
          >
            Sign in
          </button>
 
          <p className="text-xs text-slate-500">
            This is a starter UI. Next step is wiring this to your backend `/api/auth/login`.
          </p>
        </div>
      </div>
    </div>
  );
}
EOT
 
cat > src/app/\(portal\)/layout.tsx <<'EOT'
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
EOT
 
cat > src/app/\(portal\)/dashboard/page.tsx <<'EOT'
export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
      <p className="mt-2 text-sm text-slate-600">
        Overview of onboarding, expiring credentials, and missing documents (placeholder).
      </p>
 
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {[
          { k: "Active Employees", v: "—" },
          { k: "Expiring in 30 Days", v: "—" },
          { k: "Missing Documents", v: "—" },
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
EOT
 
cat > src/app/\(portal\)/employees/page.tsx <<'EOT'
import Link from "next/link";
 
const mock = [
  { id: "1", name: "Ava Johnson", role: "RN", status: "Active" },
  { id: "2", name: "Noah Patel", role: "HHA", status: "Active" },
  { id: "3", name: "Mia Chen", role: "PT", status: "Inactive" },
];
 
export default function EmployeesPage() {
  return (
    <div>
      <div className="flex items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Employees</h1>
          <p className="mt-2 text-sm text-slate-600">Manage staff, credentials, and documents.</p>
        </div>
        <button className="rounded-xl bg-teal-600 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-500">
          Add employee
        </button>
      </div>
 
      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
        <div className="grid grid-cols-3 bg-slate-50 px-4 py-3 text-xs font-semibold text-slate-600">
          <div>Name</div><div>Role</div><div>Status</div>
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
        Next step: load employees from your backend `/api/users` and replace mock data.
      </p>
    </div>
  );
}
EOT
 
cat > src/app/\(portal\)/employees/\[id\]/page.tsx <<'EOT'
import Link from "next/link";
 
export default async function EmployeeDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
 
  return (
    <div>
      <Link href="/portal/employees" className="text-sm text-teal-700 hover:text-teal-600">← Back to employees</Link>
 
      <h1 className="mt-3 text-2xl font-bold tracking-tight">Employee #{id}</h1>
      <p className="mt-2 text-sm text-slate-600">
        This page will show profile fields + credentials + document uploads (placeholder).
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
          <p className="mt-2 text-sm text-slate-700">Upload/view documents per credential (coming next).</p>
        </section>
      </div>
    </div>
  );
}
EOT
 
echo "HRMS portal pages added: /login and /portal/*"
