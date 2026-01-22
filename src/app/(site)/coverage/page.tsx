import type { Metadata } from "next";
import Image from "next/image";
import Container from "../../components/Container";
import { site } from "../../lib/site";
import CoverageSearch from "../../components/CoverageSearch";

export const metadata: Metadata = {
  title: "Coverage",
  description: `Studio locations and coverage for ${site.name}.`,
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
	const rootStyle: React.CSSProperties = {
		// CSS custom properties used by Tailwind classes or inline styles
		// note: Tailwind cannot read these vars in class names at build time, but inline styles and custom style rules use them
		// primary accent color:
		["--accent" as any]: theme.primary,
		["--bg" as any]: theme.bg,
		["--muted" as any]: theme.muted,
		["--card" as any]: theme.card,
	};

	// Area list dynamic from site
	const areas = site.serviceArea.concat([
		"San Francisco",
		"New York",
		"Los Angeles",
		"Austin",
		"London",
		"Toronto",
		"Singapore",
		"Sydney",
		"Remote",
	]);

	return (
		<section className="py-14" style={rootStyle}>
			<Container>
				{/* Theme selector (server-side links) */}
				<div className="mb-6 flex items-center justify-between gap-4">
					<div>
						<h1 className="text-2xl font-semibold" style={{ color: "var(--accent)" }}>Studio locations</h1>
						<p className="mt-1 text-sm" style={{ color: "var(--muted)" }}>
							Global coverage for {site.name}. Choose a studio palette:
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
					We serve clients across regions with flexible studio pods. Use the search to find a hub or reach out
					if you need an on-site team.
				</p>

				{/* Search component keeps its API; pass dynamic areas */}
				<div className="mt-6">
					<CoverageSearch areas={areas} />
				</div>

				{/* Info panels */}
				<div className="mt-10 grid gap-6 lg:grid-cols-2">
					<div className="pro-card p-6" style={{ background: "var(--card)", borderRadius: 12, border: "1px solid rgba(15,23,42,0.04)" }}>
						<h2 className="text-lg font-semibold" style={{ color: "var(--accent)" }}>Where we work</h2>
						<p className="mt-2" style={{ color: "var(--muted)" }}>
							We partner with teams across technology, retail, healthcare, finance, and consumer brands.
						</p>
						<ul className="mt-3 list-disc pl-5 text-sm" style={{ color: "var(--muted)" }}>
							<li>Brand and product launches</li>
							<li>Marketing and growth initiatives</li>
							<li>Design systems and content frameworks</li>
							<li>New digital experiences</li>
						</ul>
					</div>

					<div className="pro-card p-6" style={{ background: "var(--card)", borderRadius: 12, border: "1px solid rgba(15,23,42,0.04)" }}>
						<h2 className="text-lg font-semibold" style={{ color: "var(--accent)" }}>Need a studio visit?</h2>
						<p className="mt-2" style={{ color: "var(--muted)" }}>
							Call us at <a href={site.phoneHref} style={{ color: "var(--accent)", textDecoration: "underline" }}>{site.phone}</a> or use the contact form and we will confirm availability.
						</p>
					</div>
				</div>

				{/* Compact area list */}
				<div className="mt-8">
					<h3 className="text-sm font-medium" style={{ color: "var(--accent)" }}>Primary delivery hubs</h3>
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
