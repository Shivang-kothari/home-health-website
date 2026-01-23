import { NextResponse } from 'next/server';

const items = [
  { key: "hr", title: "HR and Onboarding", desc: "Centralized employee profiles, onboarding checklists, and policy signoff.", icon: "/icons/service-nursing.svg" },
  { key: "time", title: "Time and Attendance", desc: "PIN-based clock-in, location notes, and approvals.", icon: "/icons/service-therapy.svg" },
  { key: "compliance", title: "Compliance Tracking", desc: "Credential expirations, training logs, and audit-ready reports.", icon: "/icons/location.svg" },
  { key: "documents", title: "Secure Documents", desc: "HIPAA-aligned storage with role-based access controls.", icon: "/icons/service-nursing.svg" },
  { key: "payroll", title: "Payroll Exports", desc: "Clean timesheets and exports for payroll systems.", icon: "/icons/service-therapy.svg" },
  { key: "portal", title: "Agency Portal", desc: "A single portal for admin, supervisors, and caregivers.", icon: "/icons/service-therapy.svg" },
];

export async function GET() {
  return NextResponse.json({ items });
}
