import type { Metadata } from "next";
import Container from "../../components/Container";
import ButtonLink from "../../components/ButtonLink";
import { site } from "../../lib/site";

export const metadata: Metadata = {
  title: "Careers",
  description: `Careers at ${site.name}. Join our team and help build the future of HR technology.`,
};

const openings = [
  { role: "Senior Software Engineer", team: "Engineering", location: "Remote / San Francisco" },
  { role: "Product Manager", team: "Product", location: "Remote / San Francisco" },
  { role: "Customer Success Manager", team: "Customer Success", location: "Remote" },
  { role: "Solutions Architect", team: "Sales Engineering", location: "Remote / New York" },
  { role: "UX Designer", team: "Design", location: "Remote / San Francisco" },
  { role: "HR Implementation Specialist", team: "Professional Services", location: "Remote" },
];

export default function CareersPage() {
  return (
    <section className="py-14">
      <Container>
        <h1 className="text-3xl font-bold tracking-tight">Careers</h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600">
          Join a team that&apos;s passionate about building software that transforms how companies manage their people.
          We value innovation, collaboration, and customer obsession.
        </p>

        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold">Why join {site.name}?</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            <div>
              <div className="font-medium text-slate-900">Remote-first culture</div>
              <p className="mt-1 text-sm text-slate-600">Work from anywhere with flexible hours and async collaboration.</p>
            </div>
            <div>
              <div className="font-medium text-slate-900">Competitive compensation</div>
              <p className="mt-1 text-sm text-slate-600">Salary, equity, and comprehensive benefits including health and 401k.</p>
            </div>
            <div>
              <div className="font-medium text-slate-900">Growth opportunities</div>
              <p className="mt-1 text-sm text-slate-600">Learning budget, mentorship, and clear career progression paths.</p>
            </div>
          </div>
        </div>

        <h2 className="mt-10 text-xl font-semibold">Open Positions</h2>
        <div className="mt-4 grid gap-4">
          {openings.map((job) => (
            <div key={job.role} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div>
                <div className="font-semibold">{job.role}</div>
                <p className="mt-1 text-sm text-slate-600">
                  {job.team} · {job.location}
                </p>
              </div>
              <ButtonLink href={`${site.emailHref}?subject=${encodeURIComponent(`Application: ${job.role}`)}`} variant="secondary">
                Apply
              </ButtonLink>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <p className="text-sm text-slate-600">
            Don&apos;t see a role that fits? We&apos;re always looking for talented people.
            Send your resume and a note about what you&apos;d bring to the team.
          </p>
          <div className="mt-4">
            <ButtonLink href={`${site.emailHref}?subject=${encodeURIComponent("General Application")}`} variant="primary">
              Send general application
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
