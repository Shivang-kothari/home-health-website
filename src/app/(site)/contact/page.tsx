import type { Metadata } from "next";
import Container from "../../components/Container";
import ContactForm from "../../components/ContactForm";
import { site } from "../../lib/site";
import Reveal from "../../components/Reveal";
 
export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${site.name}.`,
};
 
export default function ContactPage() {
  return (
    <section className="py-14">
      <Container>
        <h1 className="text-[color:var(--heading)]">Contact</h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600">
          Tell us what you’re trying to improve. We’ll respond with next steps and a suggested demo agenda.
        </p>
 
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <Reveal>
              <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
                <div className="text-sm font-semibold text-slate-900">Direct</div>
                <div className="mt-3 grid gap-3 text-sm text-slate-700">
                  <div>
                    <div className="text-xs font-semibold text-slate-600">Phone</div>
                    {site.phone && site.phoneHref ? (
                      <a className="mt-1 inline-block hover:opacity-90" href={site.phoneHref}>
                        {site.phone}
                      </a>
                    ) : (
                      <div className="mt-1 text-slate-600">Available on request</div>
                    )}
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-600">Email</div>
                    {site.email && site.emailHref ? (
                      <a className="mt-1 inline-block hover:opacity-90" href={site.emailHref}>
                        {site.email}
                      </a>
                    ) : (
                      <div className="mt-1 text-slate-600">Available on request</div>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
 
            <Reveal delayMs={120}>
              <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
                <div className="text-sm font-semibold text-slate-900">Office & hours</div>
                <div className="mt-3 grid gap-3 text-sm text-slate-700">
                  <div>
                    <div className="text-xs font-semibold text-slate-600">Office</div>
                    <div className="mt-1 text-slate-600">
                      {site.addressLines.length ? site.addressLines.map((l) => <div key={l}>{l}</div>) : <div>Remote-first</div>}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-600">Hours</div>
                    <div className="mt-1 text-slate-600">{site.hoursLines.map((l) => <div key={l}>{l}</div>)}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
 
          <Reveal delayMs={80}>
            <ContactForm variant="simple" />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
