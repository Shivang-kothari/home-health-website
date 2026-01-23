function telHref(phone: string) {
  const digits = phone.replace(/[^\d+]/g, "");
  return digits ? `tel:${digits.startsWith("+") ? digits : `+${digits}`}` : "";
}

export const site = {
  // Configure these via environment to avoid “demo/local” placeholder feel.
  // All values use NEXT_PUBLIC_* so they are safe to import in client components.
  name: process.env.NEXT_PUBLIC_SITE_NAME || "HRMS Suite",
  tagline: process.env.NEXT_PUBLIC_SITE_TAGLINE || "Manage people, payroll, and performance — all in one place.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "",

  phone: process.env.NEXT_PUBLIC_SITE_PHONE || "",
  phoneHref: process.env.NEXT_PUBLIC_SITE_PHONE ? telHref(process.env.NEXT_PUBLIC_SITE_PHONE) : "",

  email: process.env.NEXT_PUBLIC_SITE_EMAIL || "",
  emailHref: process.env.NEXT_PUBLIC_SITE_EMAIL ? `mailto:${process.env.NEXT_PUBLIC_SITE_EMAIL}` : "",

  addressLines: (process.env.NEXT_PUBLIC_SITE_ADDRESS || "")
    .split("|")
    .map((s) => s.trim())
    .filter(Boolean),

  hoursLines: (process.env.NEXT_PUBLIC_SITE_HOURS || "Mon–Fri: 9:00am–6:00pm")
    .split("|")
    .map((s) => s.trim())
    .filter(Boolean),

  serviceArea: (process.env.NEXT_PUBLIC_SITE_SERVICE_AREAS || "United States|Canada|United Kingdom|Australia|European Union")
    .split("|")
    .map((s) => s.trim())
    .filter(Boolean),

  ctaPrimary: process.env.NEXT_PUBLIC_SITE_CTA_PRIMARY || "Book a demo",
  ctaSecondary: process.env.NEXT_PUBLIC_SITE_CTA_SECONDARY || "Talk to sales",
};