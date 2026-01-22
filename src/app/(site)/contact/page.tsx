import type { Metadata } from "next";
import Image from "next/image";
import Container from "../../components/Container";
import ContactForm from "../../components/ContactForm";
import { site } from "../../lib/site";
 
export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${site.name}.`,
};
 
export default function ContactPage() {
  return (
    <section className="py-14">
      <Container>
        <div className="mx-auto max-w-4xl">
          <Image src="/illustrations/contact-hero.svg" alt="Contact" width={1200} height={360} className="w-full rounded-2xl shadow-sm" />
        </div>

        <h1 className="text-3xl font-bold tracking-tight">Contact</h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600">
          Share your agency goals and timeline. We will respond within one business day.
        </p>
 
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-sm font-semibold">Call</div>
              <a className="mt-2 block text-sm text-sky-700 hover:text-sky-600" href={site.phoneHref}>
                {site.phone}
              </a>
              <div className="mt-4 text-sm font-semibold">Email</div>
              <a className="mt-2 block text-sm text-sky-700 hover:text-sky-600" href={site.emailHref}>
                {site.email}
              </a>
            </div>
 
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-sm font-semibold">Office</div>
              <div className="mt-2 text-sm text-slate-600">
                {site.addressLines.map((l) => (
                  <div key={l}>{l}</div>
                ))}
              </div>
              <div className="mt-4 text-sm font-semibold">Hours</div>
              <div className="mt-2 text-sm text-slate-600">
                {site.hoursLines.map((l) => (
                  <div key={l}>{l}</div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-sm font-semibold">What to include</div>
              <ul className="mt-2 space-y-2 text-sm text-slate-600">
                <li>Agency size and locations</li>
                <li>Current HR or time tracking tools</li>
                <li>Compliance needs</li>
              </ul>
            </div>
          </div>
 
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
