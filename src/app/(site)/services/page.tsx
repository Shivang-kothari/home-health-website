import type { Metadata } from "next";
import Image from "next/image";
import Container from "../../components/Container";
import ButtonLink from "../../components/ButtonLink";
import ServicesList from "../../components/ServicesList";
import { site } from "../../lib/site";
 
export const metadata: Metadata = {
  title: "Modules",
  description: `Core modules available in ${site.name}.`,
};
 
export default function ServicesPage() {
  return (
    <section className="py-14">
      <Container>
        <div className="mx-auto max-w-4xl">
          <Image src="/illustrations/services-hero.svg" alt="Services" width={1200} height={360} className="w-full rounded-2xl shadow-sm" />
        </div>

        <h1 className="text-3xl font-bold tracking-tight">Modules</h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600">
          Modular HRMS capabilities tailored to home health agencies.
        </p>
 
        <div className="mt-10">
          <ServicesList />
        </div>
 
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <ButtonLink href="/demo" variant="primary">
            {site.ctaPrimary}
          </ButtonLink>
          <ButtonLink href={site.phoneHref} variant="secondary">
            Call sales: {site.phone}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
