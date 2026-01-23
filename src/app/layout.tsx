import type { Metadata } from "next";
import "./globals.css";
import { site } from "./lib/site";
 
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  title: { default: site.name, template: `%s | ${site.name}` },
  description: site.tagline,
  metadataBase: new URL(siteUrl),
  applicationName: site.name,
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: site.name,
    title: site.name,
    description: site.tagline,
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.tagline,
  },
};
 
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-dvh bg-white text-slate-900 antialiased">{children}</body>
    </html>
  );
}
