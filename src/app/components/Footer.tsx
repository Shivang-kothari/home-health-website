import Link from "next/link";
import Image from "next/image";
import Container from "./Container";
import { site } from "../lib/site";

const productLinks = [
	{ href: "/features", label: "Features" },
	{ href: "/services", label: "Modules" },
	{ href: "/pricing", label: "Pricing" },
	{ href: "/demo", label: "Book a demo" },
];

const companyLinks = [
	{ href: "/about", label: "About" },
	{ href: "/careers", label: "Careers" },
	{ href: "/contact", label: "Contact" },
];

const legalLinks = [
	{ href: "/privacy", label: "Privacy" },
	{ href: "/terms", label: "Terms" },
];

export default function Footer() {
	return (
		<footer className="mt-14 border-t border-black/10 bg-white/60 backdrop-blur">
			<Container>
				<div className="grid gap-10 py-12 md:grid-cols-12">
					<div className="md:col-span-4">
						<div className="flex items-center gap-3">
							<Image src="/logo.svg" alt={site.name} width={34} height={34} className="rounded-xl ring-1 ring-black/5" />
							<div>
								<div className="text-base font-semibold text-[color:var(--heading)]">{site.name}</div>
								<p className="mt-1 text-sm text-slate-600">{site.tagline}</p>
							</div>
						</div>
					</div>

					<div className="md:col-span-5">
						<div className="grid gap-8 sm:grid-cols-3">
							<div>
								<div className="text-sm font-semibold text-[color:var(--heading)]">Product</div>
								<div className="mt-3 grid gap-2 text-sm text-slate-600">
									{productLinks.map((l) => (
										<Link key={l.href} className="hover:text-[color:var(--heading)]" href={l.href}>
											{l.label}
										</Link>
									))}
								</div>
							</div>

							<div>
								<div className="text-sm font-semibold text-[color:var(--heading)]">Company</div>
								<div className="mt-3 grid gap-2 text-sm text-slate-600">
									{companyLinks.map((l) => (
										<Link key={l.href} className="hover:text-[color:var(--heading)]" href={l.href}>
											{l.label}
										</Link>
									))}
								</div>
							</div>

							<div>
								<div className="text-sm font-semibold text-[color:var(--heading)]">Legal</div>
								<div className="mt-3 grid gap-2 text-sm text-slate-600">
									{legalLinks.map((l) => (
										<Link key={l.href} className="hover:text-[color:var(--heading)]" href={l.href}>
											{l.label}
										</Link>
									))}
								</div>
							</div>
						</div>
					</div>

					<div className="md:col-span-3">
						<div className="text-sm font-semibold text-[color:var(--heading)]">Contact</div>
						<div className="mt-3 space-y-2 text-sm text-slate-600">
							{site.email && site.emailHref ? (
								<a className="block hover:text-[color:var(--heading)]" href={site.emailHref}>
									{site.email}
								</a>
							) : null}
							{site.phone && site.phoneHref ? (
								<a className="block hover:text-[color:var(--heading)]" href={site.phoneHref}>
									{site.phone}
								</a>
							) : null}
						</div>
					</div>
				</div>

				<div className="flex flex-col gap-2 border-t border-black/10 py-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
					<div>© {new Date().getFullYear()} {site.name}. All rights reserved.</div>
					<div className="max-w-2xl">
						<span className="rounded-full bg-white px-3 py-1 ring-1 ring-black/5">
							{site.footerBadge}
						</span>
					</div>
				</div>
			</Container>
		</footer>
	);
}