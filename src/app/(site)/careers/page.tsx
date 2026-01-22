import type { Metadata } from "next";
import Container from "../../components/Container";
import ButtonLink from "../../components/ButtonLink";
import { site } from "../../lib/site";
 
export const metadata: Metadata = {
  title: "Careers",
  description: `Careers at ${site.name}.`,
};
 
export default function CareersPage() {
  return (
    <section className="py-14">
      <Container>
        <h1 className="text-3xl font-bold tracking-tight">Careers</h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600">
          Join a mission-driven team building HR software for home health agencies.
        </p>
 
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            "Customer Success Manager",
            "Implementation Specialist",
            "Product Manager",
            "Full-stack Engineer",
            "QA Analyst",
            "Support Specialist",
          ].map((role) => (
            <div key={role} className="rounded-2xl border border-slate-200 p-6 shadow-sm card-surface">
              <div className="font-semibold">{role}</div>
              <p className="mt-2 text-sm text-slate-600">
                Competitive compensation, flexible work, and meaningful healthcare impact.
              </p>
            </div>
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
