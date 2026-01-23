import type { Metadata } from "next";
import Container from "../../components/Container";
import { site } from "../../lib/site";

export const metadata: Metadata = {
  title: "Privacy",
  description: `Privacy policy for ${site.name}.`,
};

export default function PrivacyPage() {
  return (
    <section className="py-14">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight">Privacy Policy</h1>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            This policy describes how {site.name} collects, uses, and protects personal information submitted through our website.
          </p>

          <div className="mt-10 grid gap-6 text-sm text-slate-700">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="font-semibold">Information we collect</div>
              <p className="mt-2 text-slate-600">
                When you request a demo or contact sales, we may collect your name, email address, phone number, role, and the message
                you provide.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="font-semibold">How we use information</div>
              <p className="mt-2 text-slate-600">
                We use your information to respond to your inquiry, schedule a demo, provide requested materials, and improve our
                website. We do not sell your personal information.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="font-semibold">Contact</div>
              <p className="mt-2 text-slate-600">
                Questions about privacy? Contact us at{" "}
                <a className="text-teal-700 hover:text-teal-600" href={site.emailHref}>
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

