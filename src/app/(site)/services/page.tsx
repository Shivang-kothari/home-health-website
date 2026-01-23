import type { Metadata } from "next";
import Image from "next/image";
import Container from "../../components/Container";
import ButtonLink from "../../components/ButtonLink";
import ServicesList from "../../components/ServicesList";
import { site } from "../../lib/site";

export const metadata: Metadata = {
  title: "Services",
  description: `Professional HRMS services and solutions offered by ${site.name}.`,
};

export default function ServicesPage() {
  return (
    <section className="py-14">
      <Container>
        <div className="mx-auto max-w-4xl">
          <Image src="/illustrations/services-hero.svg" alt="Services" width={1200} height={360} className="w-full rounded-2xl shadow-sm" />
        </div>

        <h1 className="mt-8 text-3xl font-bold tracking-tight">Services</h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600">
          Beyond software, we offer professional services to help you get the most out of {site.name}.
          From implementation to ongoing support, our team ensures your success.
        </p>

        <div className="mt-10">
          <ServicesList />
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <ButtonLink href="/demo" variant="secondary">
            {site.ctaPrimary}
          </ButtonLink>
          <ButtonLink href="/contact" variant="primary">
            {site.ctaSecondary}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
