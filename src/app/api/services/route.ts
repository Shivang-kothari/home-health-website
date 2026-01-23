import { NextResponse } from 'next/server';

const items = [
  { key: 'core-hr', title: 'Core HR', desc: 'Centralized employee records, documents, and audit trails with fast search.', icon: '/file.svg' },
  { key: 'time-off', title: 'Time Off & Attendance', desc: 'Policies, approvals, balances, and shared team calendars.', icon: '/window.svg' },
  { key: 'payroll', title: 'Payroll Exports', desc: 'Payroll-ready exports, validations, and reporting for accountants.', icon: '/globe.svg' },
  { key: 'recruiting', title: 'Recruiting & Onboarding', desc: 'Applicant tracking, offers, onboarding checklists, and provisioning.', icon: '/file.svg' },
  { key: 'performance', title: 'Performance', desc: 'Goals, reviews, and lightweight feedback cycles for managers.', icon: '/window.svg' },
  { key: 'integrations', title: 'Integrations', desc: 'APIs and SSO support to connect your existing tools securely.', icon: '/globe.svg' },
];

export async function GET() {
  return NextResponse.json({ items });
}
