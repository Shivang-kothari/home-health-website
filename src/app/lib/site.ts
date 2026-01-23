export const site = {
  name: "HRMS Suite",
  tagline: "Manage people, payroll, and performance — all in one place.",
  // Safe to import in client components (NEXT_PUBLIC_* only).
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  phone: "(555) 000-0000",
  phoneHref: "tel:+15550000000",
  email: "sales@hrmssuite.com",
  emailHref: "mailto:sales@hrmssuite.com",
  addressLines: ["HRMS Suite", "Remote-first"],
  hoursLines: ["Mon–Fri: 9:00am–6:00pm"],
  serviceArea: ["United States", "Canada", "United Kingdom", "Australia", "European Union"],
  ctaPrimary: "Book a demo",
  ctaSecondary: "Talk to sales",
};