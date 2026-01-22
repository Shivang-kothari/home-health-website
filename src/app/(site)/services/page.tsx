import type { Metadata } from "next";
import Image from "next/image";
import Container from "../../components/Container";
import ButtonLink from "../../components/ButtonLink";
import ServicesList from "../../components/ServicesList";
import { site } from "../../lib/site";
 
export const metadata: Metadata = {
  title: "Services",
  description: `Home health services offered by ${site.name}.`,
};
 
const items = [
  { key: 'nursing', title: "Skilled Nursing", desc: "Medication management, wound care, chronic condition monitoring, education, and coordination.", icon: "/icons/service-nursing.svg" },
  { key: 'pt', title: "Physical Therapy (PT)", desc: "Strength, balance, mobility training, fall-risk reduction, and recovery planning.", icon: "/icons/service-therapy.svg" },
  { key: 'ot', title: "Occupational Therapy (OT)", desc: "Activities of daily living, safety at home, energy conservation, and adaptive strategies.", icon: "/icons/service-therapy.svg" },
  { key: 'st', title: "Speech Therapy (ST)", desc: "Swallowing, communication, cognition support, and personalized therapy plans.", icon: "/icons/service-therapy.svg" },
  { key: 'aide', title: "Home Health Aide", desc: "Support with hygiene, light assistance, and comfort measures under a care plan.", icon: "/icons/service-nursing.svg" },
  { key: 'social', title: "Medical Social Work", desc: "Resources, care navigation, and support for patients and families.", icon: "/icons/service-therapy.svg" },
];
 
export default function ServicesPage() {
  return (
    <section className="py-14">
      <Container>
        <div className="mx-auto max-w-4xl">
          <Image src="/illustrations/services-hero.svg" alt="Services" width={1200} height={360} className="w-full rounded-2xl shadow-sm" />
        </div>

        <h1 className="text-3xl font-bold tracking-tight">Services</h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600">
          We tailor care to your goals with a team approach—so you always know what’s next and why it matters.
        </p>
 
        <div className="mt-10">
          <ServicesList />
        </div>
 
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <ButtonLink href="/contact" variant="secondary">
            {site.ctaPrimary}
          </ButtonLink>
          <ButtonLink href={site.phoneHref} variant="primary">
            {site.ctaSecondary}: {site.phone}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
