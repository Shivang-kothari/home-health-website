"use client";
 
import { useRouter } from "next/navigation";
import { useState } from "react";
 
export default function LoginPage() {
  const r = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  return (
    <div className="min-h-dvh bg-slate-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold tracking-tight">HR Portal Login</h1>
        <p className="mt-2 text-sm text-slate-600">Sign in to manage employees, workflows, and compliance.</p>
 
        <div className="mt-6 grid gap-4">
          <label className="grid gap-1 text-sm">
            <span className="font-medium">Email</span>
            <input
              type="email"
              className="rounded-xl border border-slate-200 px-3 py-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
            />
          </label>
          <label className="grid gap-1 text-sm">
            <span className="font-medium">Password</span>
            <input type="password" className="rounded-xl border border-slate-200 px-3 py-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
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
            For demo access or SSO setup, contact your account team.
          </p>
        </div>
      </div>
    </div>
  );
}
