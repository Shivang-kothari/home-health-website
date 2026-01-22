import { NextResponse } from 'next/server';

const items = [
  { key: "strategy", title: "Strategy and Roadmapping", desc: "Executive workshops, market analysis, and multi-quarter transformation plans.", icon: "/icons/service-nursing.svg" },
  { key: "operations", title: "Operational Excellence", desc: "Process redesign, KPI alignment, and teams that run with clarity and speed.", icon: "/icons/service-therapy.svg" },
  { key: "data", title: "Data, Analytics, and AI", desc: "Data foundations, analytics accelerators, and practical AI adoption.", icon: "/icons/service-therapy.svg" },
  { key: "experience", title: "Customer Experience Design", desc: "Service blueprints, journey mapping, and research-led product design.", icon: "/icons/location.svg" },
  { key: "delivery", title: "Digital Delivery", desc: "Product squads that ship digital platforms, portals, and internal tools.", icon: "/icons/service-nursing.svg" },
  { key: "managed", title: "Managed Support", desc: "Ongoing optimization, reporting, and executive-ready insights.", icon: "/icons/service-therapy.svg" },
];

export async function GET() {
  return NextResponse.json({ items });
}
