import { NextResponse } from 'next/server';

const items = [
  { key: 'nursing', title: 'Skilled Nursing', desc: 'Medication management, wound care, chronic condition monitoring, education, and coordination.', icon: '/icons/service-nursing.svg' },
  { key: 'pt', title: 'Physical Therapy (PT)', desc: 'Strength, balance, mobility training, fall-risk reduction, and recovery planning.', icon: '/icons/service-therapy.svg' },
  { key: 'ot', title: 'Occupational Therapy (OT)', desc: 'Activities of daily living, safety at home, energy conservation, and adaptive strategies.', icon: '/icons/service-therapy.svg' },
  { key: 'st', title: 'Speech Therapy (ST)', desc: 'Swallowing, communication, cognition support, and personalized therapy plans.', icon: '/icons/service-therapy.svg' },
  { key: 'aide', title: 'Home Health Aide', desc: 'Support with hygiene, light assistance, and comfort measures under a care plan.', icon: '/icons/service-nursing.svg' },
  { key: 'social', title: 'Medical Social Work', desc: 'Resources, care navigation, and support for patients and families.', icon: '/icons/service-therapy.svg' },
];

export async function GET() {
  return NextResponse.json({ items });
}
