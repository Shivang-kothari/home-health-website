import Container from "../../components/Container";
import ContactForm from "../../components/ContactForm";

export default function DemoPage() {
  return (
    <section className="py-14">
      <Container>
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Schedule a consultation</h1>
            <p className="mt-2 text-sm text-slate-600">
              Share your goals and we will tailor a plan for strategy, design, and delivery.
            </p>

            <div className="mt-6 space-y-4 text-sm text-slate-600">
              <div>
                <strong>What to expect</strong>
                <br />
                A 45-minute discovery call and a tailored proposal within 10 business days.
              </div>
              <div>
                <strong>Availability</strong>
                <br />
                Weekdays 8:30am-6:00pm. We will confirm a specific time after your request.
              </div>
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
