import { NextResponse } from 'next/server';

const items = [
  { key: 'implementation', title: 'Implementation', desc: 'End-to-end setup including data migration, configuration, and workflow customization to match your HR processes.' },
  { key: 'training', title: 'Training & Enablement', desc: 'Comprehensive training programs for HR teams, managers, and employees to maximize platform adoption.' },
  { key: 'integration', title: 'Integration Services', desc: 'Connect HRMS Suite with your existing payroll, accounting, SSO, and other enterprise systems via APIs.' },
  { key: 'consulting', title: 'HR Consulting', desc: 'Expert guidance on HR best practices, compliance requirements, and process optimization strategies.' },
  { key: 'support', title: 'Premium Support', desc: 'Dedicated account management, priority response times, and proactive system health monitoring.' },
  { key: 'customization', title: 'Custom Development', desc: 'Tailored features, reports, and workflows built specifically for your organization\'s unique requirements.' },
];

export async function GET() {
  return NextResponse.json({ items });
}
