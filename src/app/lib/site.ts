function telHref(phone: string) {
  const digits = phone.replace(/[^\d+]/g, "");
  return digits ? `tel:${digits.startsWith("+") ? digits : `+${digits}`}` : "";
}

type NavLink = { href: string; label: string };

function parseLinks(env: string | undefined, fallback: NavLink[]) {
  if (!env) return fallback;
  const items = env
    .split("|")
    .map((s) => s.trim())
    .filter(Boolean)
    .map((part) => {
      const [labelRaw, hrefRaw] = part.includes(",") ? part.split(",", 2) : part.split(":", 2);
      const label = (labelRaw || "").trim();
      const href = (hrefRaw || "").trim();
      if (!label || !href) return null;
      return { label, href } satisfies NavLink;
    })
    .filter(Boolean) as NavLink[];

  return items.length ? items : fallback;
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

  headerSubtitle: process.env.NEXT_PUBLIC_HEADER_SUBTITLE || "Home health operations platform",

  navLinks: parseLinks(process.env.NEXT_PUBLIC_NAV_LINKS, [
    { href: "/", label: "Home" },
    { href: "/features", label: "Features" },
    { href: "/pricing", label: "Pricing" },
    { href: "/services", label: "Modules" },
    { href: "/demo", label: "Demo" },
    { href: "/contact", label: "Contact" },
  ]),

  footerLinks: parseLinks(process.env.NEXT_PUBLIC_FOOTER_LINKS, [
    { href: "/features", label: "Features" },
    { href: "/pricing", label: "Pricing" },
    { href: "/services", label: "Modules" },
    { href: "/demo", label: "Demo" },
    { href: "/privacy", label: "Privacy" },
    { href: "/terms", label: "Terms" },
  ]),

  footerBadge: process.env.NEXT_PUBLIC_FOOTER_BADGE || "Security-minded • Audit-ready • Built for teams",

  // Home hero image (place the provided image at `public/illustrations/home-hero.png`)
  homeHeroImage: process.env.NEXT_PUBLIC_HOME_HERO_IMAGE || "/illustrations/home-hero.png",
};