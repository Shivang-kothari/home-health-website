import Container from "../../components/Container";
import ContactForm from "../../components/ContactForm";

export default function DemoPage() {
  return (
    <section className="py-14">
      <Container>
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Request a demo</h1>
            <p className="mt-2 text-sm text-slate-600">Tell us about your needs and we’ll arrange a personalized walkthrough.</p>

            <div className="mt-6 space-y-4 text-sm text-slate-600">
              <div><strong>What to expect</strong><br/>A 30-minute walkthrough, sample data, and integration discussion.</div>
              <div><strong>Availability</strong><br/>Weekdays 9am–6pm. We'll confirm a specific time after you request a demo.</div>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
