import type { Metadata } from "next";
import Container from "../../components/Container";
import { site } from "../../lib/site";

export const metadata: Metadata = {
  title: "Terms",
  description: `Terms of service for ${site.name}.`,
};

export default function TermsPage() {
  return (
    <section className="py-14">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight">Terms of Service</h1>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            By using this website, you agree to these terms. If you do not agree, please do not use the site.
          </p>

          <div className="mt-10 grid gap-6 text-sm text-slate-700">
            <div className="pro-card rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="font-semibold">Use of the website</div>
              <p className="mt-2 text-slate-600">
                You may use this site to learn about {site.name} and to request information. You agree not to misuse the site or
                attempt to disrupt its operation.
              </p>
            </div>

            <div className="pro-card rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="font-semibold">No warranties</div>
              <p className="mt-2 text-slate-600">
                The site is provided “as is” without warranties of any kind. Product features and availability may change.
              </p>
            </div>

            <div className="pro-card rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="font-semibold">Contact</div>
              <p className="mt-2 text-slate-600">
                Questions about these terms? Contact{" "}
                <a className="text-[color:var(--brand)] hover:opacity-90" href={site.emailHref}>
                  {site.email}
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

