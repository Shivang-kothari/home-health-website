import { NextResponse } from 'next/server';

const items = [
  {
    key: "implementation",
    title: "Implementation & onboarding",
    desc: "Project planning, configuration, and launch support tailored to your workflows.",
    icon: "/file.svg",
  },
  {
    key: "migration",
    title: "Data migration",
    desc: "Clean imports, field mapping, and validation for a smooth transition.",
    icon: "/file.svg",
  },
  {
    key: "integrations",
    title: "Payroll & benefits integrations",
    desc: "Connect payroll, benefits, and accounting systems with reliable exports.",
    icon: "/globe.svg",
  },
  {
    key: "security",
    title: "Security & access review",
    desc: "Role-based access, audit readiness, and secure identity setup.",
    icon: "/globe.svg",
  },
  {
    key: "training",
    title: "Training & change management",
    desc: "Enable HR teams and managers with live sessions and documentation.",
    icon: "/file.svg",
  },
  {
    key: "success",
    title: "Ongoing success & support",
    desc: "Dedicated support, success check-ins, and continuous optimization.",
    icon: "/file.svg",
  },
];

export async function GET() {
  return NextResponse.json({ items });
}
