import type { Metadata } from "next";
import Container from "../../components/Container";
import ButtonLink from "../../components/ButtonLink";
import { site } from "../../lib/site";
import { modules } from "../../lib/modules";
import Card from "../../components/Card";
import Reveal from "../../components/Reveal";
import Image from "next/image";
 
export const metadata: Metadata = {
  title: "Modules",
  description: `Modules available in ${site.name}.`,
};
 
export default function ServicesPage() {
  return (
    <section className="py-14">
      <Container>
        <div className="grid gap-6 md:grid-cols-2 md:items-end">
          <div>
            <h1 className="text-[color:var(--heading)]">Modules</h1>
            <p className="mt-3 text-sm text-slate-600">
              Choose the modules you need today, and expand as your team grows. Everything stays consistent with shared records and audit trails.
            </p>
          </div>
          <div className="flex gap-3 md:justify-end">
            <ButtonLink href="/demo" variant="primary" className="btn-demo">{site.ctaPrimary}</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">{site.ctaSecondary}</ButtonLink>
          </div>
        </div>
 
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((m, idx) => (
            <Reveal key={m.key} delayMs={idx * 60}>
              <Card className="p-6">
                <div className="flex items-start gap-3">
                  <div className="mt-1 grid h-9 w-9 place-items-center rounded-2xl bg-[color:var(--brand-soft)] ring-1 ring-black/5">
                    {m.icon ? <Image src={m.icon} alt="" width={18} height={18} /> : null}
                  </div>
                  <div>
                    <div className="text-base font-semibold text-[color:var(--heading)]">{m.title}</div>
                    <p className="mt-2 text-sm text-slate-600">{m.desc}</p>
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
 
      </Container>
    </section>
  );
}
