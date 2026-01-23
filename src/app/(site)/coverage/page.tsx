/* 
Quick Mac run instructions and optional script (save as scripts/run-mac.sh):

#!/usr/bin/env bash
set -e
# from project root
# 1) install deps
npm install
# 2) start dev server
npm run dev

# If port 3000 is occupied, free it:
# lsof -ti tcp:3000 | xargs -r kill -9

# For production:
# npm run build
# npm start

# Alternatives:
# pnpm install && pnpm dev
# yarn install && yarn dev

# Docker:
# docker build -t my-app .
# docker run -p 3000:3000 my-app

*/

import type { Metadata } from "next";
import Image from "next/image";
import Container from "../../components/Container";
import { site } from "../../lib/site";
import CoverageSearch from "../../components/CoverageSearch";

export const metadata: Metadata = {
  title: "Coverage",
  description: `Service coverage areas for ${site.name}.`,
};

export default function CoveragePage({ searchParams }: { searchParams?: { theme?: string } }) {
	// Define professional palettes
	const palettes: Record<string, { name: string; primary: string; bg: string; muted: string; card: string }> = {
		indigo: { name: "Indigo", primary: "#4f46e5", bg: "#f8fafc", muted: "#6b7280", card: "#ffffff" },
		teal: { name: "Teal", primary: "#0f766e", bg: "#f7fffd", muted: "#4b5563", card: "#ffffff" },
		slategrey: { name: "Slate", primary: "#0f172a", bg: "#f8fafc", muted: "#475569", card: "#ffffff" },
		neutral: { name: "Neutral", primary: "#0b5fff", bg: "#fbfbfd", muted: "#64748b", card: "#ffffff" },
	};

	const themeKey = (searchParams && searchParams.theme && palettes[searchParams.theme]) ? searchParams.theme : "indigo";
	const theme = palettes[themeKey];

	// Compose dynamic style using CSS variables for consistent theming
	const rootStyle = {
		// CSS custom properties used by Tailwind classes or inline styles
		// note: Tailwind cannot read these vars in class names at build time, but inline styles and custom style rules use them
		// primary accent color:
		"--accent": theme.primary,
		"--bg": theme.bg,
		"--muted": theme.muted,
		"--card": theme.card,
	} as React.CSSProperties;

	// Area list dynamic from site
	const areas = site.serviceArea.concat(["Area 1", "Area 2", "Area 3"]);

	return (
		<section className="py-14" style={rootStyle}>
			<Container>
				{/* Theme selector (server-side links) */}
				<div className="mb-6 flex items-center justify-between gap-4">
					<div>
						<h1 className="text-2xl font-semibold" style={{ color: "var(--accent)" }}>Coverage Areas</h1>
						<p className="mt-1 text-sm" style={{ color: "var(--muted)" }}>
							Service coverage areas for {site.name}. Choose a professional palette:
						</p>
					</div>

					<div className="flex gap-2">
						{Object.entries(palettes).map(([key, p]) => (
							<a
								key={key}
								href={`?theme=${key}`}
								className={`inline-flex items-center gap-2 rounded-md px-3 py-1 text-sm font-medium ring-1 ring-slate-200 hover:shadow-sm`}
								style={{
									background: themeKey === key ? p.primary : "transparent",
									color: themeKey === key ? "#fff" : "var(--muted)",
									borderColor: "rgba(15, 23, 42, 0.06)",
								}}
								aria-current={themeKey === key ? "true" : undefined}
							>
								<span className="h-3 w-3 rounded-full" style={{ background: p.primary, boxShadow: "0 0 0 2px rgba(0,0,0,0.04) inset" }} />
								{p.name}
							</a>
						))}
					</div>
				</div>

				{/* Hero */}
				<div className="mx-auto max-w-4xl overflow-hidden rounded-2xl shadow-sm" style={{ background: "linear-gradient(90deg, rgba(255,255,255,0.6), rgba(255,255,255,0.4))", border: "1px solid rgba(15,23,42,0.04)" }}>
					<Image src="/illustrations/coverage-hero.svg" alt="Coverage" width={1200} height={360} className="w-full h-auto" priority />
				</div>

				<p className="mt-6 max-w-2xl text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
					We serve a broad area and specialize in flexible in-home care solutions. Below are the primary ZIPs and towns we support — if you don&apos;t see your location, reach out and we&apos;ll confirm coverage.
				</p>

				{/* Search component keeps its API; pass dynamic areas */}
				<div className="mt-6">
					<CoverageSearch areas={areas} />
				</div>

				{/* Info panels */}
				<div className="mt-10 grid gap-6 lg:grid-cols-2">
					<div className="pro-card p-6" style={{ background: "var(--card)", borderRadius: 12, border: "1px solid rgba(15,23,42,0.04)" }}>
						<h2 className="text-lg font-semibold" style={{ color: "var(--accent)" }}>Who we serve</h2>
						<p className="mt-2" style={{ color: "var(--muted)" }}>
							We provide services for a range of people and professionals: patients/clients, family caregivers, private caregivers, nurses, physicians, and care agencies.
						</p>
						<ul className="mt-3 list-disc pl-5 text-sm" style={{ color: "var(--muted)" }}>
							<li>Personal care and companionship</li>
							<li>Medication reminders and basic clinical support</li>
							<li>Post-discharge follow-up and care coordination</li>
							<li>Agency partnerships and staffing support</li>
						</ul>
					</div>

					<div className="pro-card p-6" style={{ background: "var(--card)", borderRadius: 12, border: "1px solid rgba(15,23,42,0.04)" }}>
						<h2 className="text-lg font-semibold" style={{ color: "var(--accent)" }}>Not sure if you&apos;re covered?</h2>
						<p className="mt-2" style={{ color: "var(--muted)" }}>
							Call us at <a href={site.phoneHref} style={{ color: "var(--accent)", textDecoration: "underline" }}>{site.phone}</a> or use the contact form — share your ZIP and profession and we&apos;ll confirm availability and next steps.
						</p>
					</div>
				</div>

				{/* Compact area list */}
				<div className="mt-8">
					<h3 className="text-sm font-medium" style={{ color: "var(--accent)" }}>Primary service areas</h3>
					<div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
						{areas.map((a) => (
							<span key={a} className="rounded-md px-3 py-2 text-sm" style={{ background: "rgba(15,23,42,0.03)", color: "var(--muted)" }}>
								{a}
							</span>
						))}
					</div>
				</div>
			</Container>
		</section>
	);
}
