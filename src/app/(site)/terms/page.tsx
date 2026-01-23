import type { Metadata } from "next";
import Container from "../../components/Container";
import { site } from "../../lib/site";
import Card from "../../components/Card";
import Reveal from "../../components/Reveal";

export const metadata: Metadata = {
  title: "Terms",
  description: `Terms of service for ${site.name}.`,
};

export default function TermsPage() {
  return (
    <section className="py-14">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h1 className="text-[color:var(--heading)]">Terms of Service</h1>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            By using this website, you agree to these terms. If you do not agree, please do not use the site.
          </p>

          <div className="mt-10 grid gap-6 text-sm text-slate-700">
            <Reveal>
              <Card className="p-6">
                <div className="font-semibold text-[color:var(--heading)]">Use of the website</div>
                <p className="mt-2 text-slate-600">
                  You may use this site to learn about {site.name} and to request information. You agree not to misuse the site or attempt to disrupt its operation.
                </p>
              </Card>
            </Reveal>

            <Reveal delayMs={120}>
              <Card className="p-6">
                <div className="font-semibold text-[color:var(--heading)]">No warranties</div>
                <p className="mt-2 text-slate-600">
                  The site is provided “as is” without warranties of any kind. Product features and availability may change.
                </p>
              </Card>
            </Reveal>

            <Reveal delayMs={240}>
              <Card className="p-6">
                <div className="font-semibold text-[color:var(--heading)]">Contact</div>
                <p className="mt-2 text-slate-600">
                  Questions about these terms? Contact{" "}
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

