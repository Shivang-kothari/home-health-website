import type { Metadata } from "next";
import Container from "../../components/Container";
import ButtonLink from "../../components/ButtonLink";
import { site } from "../../lib/site";
import Card from "../../components/Card";
import Reveal from "../../components/Reveal";
 
export const metadata: Metadata = {
  title: "Careers",
  description: `Careers at ${site.name}.`,
};
 
export default function CareersPage() {
  return (
    <section className="py-14">
      <Container>
        <h1 className="text-slate-900">Careers</h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600">
          We’re building calm, reliable software for home health agencies. If you care about quality and clarity, we’d love to hear from you.
        </p>
 
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            "Senior Full‑Stack Engineer",
            "Product Designer",
            "Customer Success Manager",
            "Implementation Specialist",
            "Security & Compliance Lead",
            "Technical Support Engineer",
          ].map((role, idx) => (
            <Reveal key={role} delayMs={idx * 60}>
              <Card className="p-6">
                <div className="font-semibold text-slate-900">{role}</div>
                <p className="mt-2 text-sm text-slate-600">
                  Share your background and what you want to build. We’ll follow up if there’s a fit.
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
 
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <ButtonLink href={`${site.emailHref}?subject=${encodeURIComponent("Resume Submission")}`} variant="secondary">
            Email your resume
          </ButtonLink>
          <ButtonLink href="/contact" variant="primary">
            Ask a question
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
