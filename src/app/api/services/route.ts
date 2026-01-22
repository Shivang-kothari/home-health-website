import { NextResponse } from 'next/server';

const items = [
  { key: "brand", title: "Brand Foundations", desc: "Positioning, identity systems, and tone of voice that scale across channels.", icon: "/icons/service-therapy.svg" },
  { key: "experience", title: "Experience Design", desc: "User research, journey mapping, and high-fidelity UX/UI design.", icon: "/icons/location.svg" },
  { key: "product", title: "Digital Product", desc: "Product strategy, design sprints, and delivery-ready prototypes.", icon: "/icons/service-nursing.svg" },
  { key: "content", title: "Content Systems", desc: "Design systems, component libraries, and editorial frameworks.", icon: "/icons/service-therapy.svg" },
  { key: "launch", title: "Launch and Growth", desc: "Marketing sites, conversion optimization, and campaign creative.", icon: "/icons/service-nursing.svg" },
  { key: "retainer", title: "Studio Retainer", desc: "On-demand design and product support with a dedicated pod.", icon: "/icons/service-therapy.svg" },
];

export async function GET() {
  return NextResponse.json({ items });
}
