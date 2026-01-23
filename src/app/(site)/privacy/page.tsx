import type { Metadata } from "next";
import Container from "../../components/Container";
import { site } from "../../lib/site";
import Card from "../../components/Card";
import Reveal from "../../components/Reveal";

export const metadata: Metadata = {
  title: "Privacy",
  description: `Privacy policy for ${site.name}.`,
};

export default function PrivacyPage() {
  return (
    <section className="py-14">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h1 className="text-[color:var(--heading)]">Privacy Policy</h1>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            This policy describes how {site.name} collects, uses, and protects personal information submitted through our website.
          </p>

          <div className="mt-10 grid gap-6 text-sm text-slate-700">
            <Reveal>
              <Card className="p-6">
                <div className="font-semibold text-[color:var(--heading)]">Information we collect</div>
                <p className="mt-2 text-slate-600">
                  When you request a demo or contact sales, we may collect your name, email address, phone number, role, and the message you provide.
                </p>
              </Card>
            </Reveal>

            <Reveal delayMs={120}>
              <Card className="p-6">
                <div className="font-semibold text-[color:var(--heading)]">How we use information</div>
                <p className="mt-2 text-slate-600">
                  We use your information to respond to your inquiry, schedule a demo, provide requested materials, and improve our website. We do not sell your personal information.
                </p>
              </Card>
            </Reveal>

            <Reveal delayMs={240}>
              <Card className="p-6">
                <div className="font-semibold text-[color:var(--heading)]">Contact</div>
                <p className="mt-2 text-slate-600">
                  Questions about privacy? Contact us at{" "}
                  <a className="hover:opacity-90" href={site.emailHref}>
                    {site.email}
                  </a>
                  .
                </p>
              </Card>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

