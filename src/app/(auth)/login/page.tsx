"use client";
 
import { useRouter } from "next/navigation";
import { useState } from "react";
 
export default function LoginPage() {
  const r = useRouter();
  const [email, setEmail] = useState("admin@example.com");
  const [password, setPassword] = useState("password");
 
  return (
    <div className="min-h-dvh bg-slate-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 p-6 shadow-sm card-surface">
        <h1 className="text-2xl font-bold tracking-tight">Agency Portal Login</h1>
        <p className="mt-2 text-sm text-slate-600">Sign in to manage staff, time, and compliance.</p>
 
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
            className="rounded-xl bg-sky-600 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-500"
            onClick={() => {
              // TEMP: mock auth
              localStorage.setItem("portal_session", JSON.stringify({ email, at: Date.now() }));
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
