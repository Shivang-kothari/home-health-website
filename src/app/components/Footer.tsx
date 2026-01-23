import Link from "next/link";
import Image from "next/image";
import Container from "./Container";
import { site } from "../lib/site";

export default function Footer() {
	return (
		<footer className="mt-10 border-t border-black/10 bg-white/60 backdrop-blur">
			<Container>
				<div className="grid gap-10 py-12 md:grid-cols-12">
					<div className="md:col-span-5">
						<div className="flex items-center gap-3">
							<Image src="/logo.svg" alt={site.name} width={34} height={34} className="rounded-xl ring-1 ring-black/5" />
							<div>
								<div className="text-base font-semibold text-slate-900">{site.name}</div>
								<p className="mt-1 text-sm text-slate-600">{site.tagline}</p>
							</div>
						</div>
						<p className="mt-4 max-w-sm text-sm text-slate-600">
							Professional tooling for home health agencies: staff records, compliance workflows, and payroll-ready exports.
						</p>
					</div>

					<div className="md:col-span-3">
						<div className="text-sm font-semibold text-slate-900">Contact</div>
						<div className="mt-3 space-y-2 text-sm text-slate-600">
							{site.phone && site.phoneHref ? (
								<a className="block hover:text-slate-900" href={site.phoneHref}>
									{site.phone}
								</a>
							) : null}
							{site.email && site.emailHref ? (
								<a className="block hover:text-slate-900" href={site.emailHref}>
									{site.email}
								</a>
							) : null}
							{site.addressLines.length ? (
								<div className="pt-1">
									{site.addressLines.map((l) => (
										<div key={l}>{l}</div>
									))}
								</div>
							) : null}
						</div>
					</div>

					<div className="md:col-span-4">
						<div className="text-sm font-semibold text-slate-900">Company</div>
						<div className="mt-3 grid grid-cols-2 gap-2 text-sm text-slate-600">
							{site.footerLinks.map((l) => (
								<Link key={l.href} className="hover:text-slate-900" href={l.href}>
									{l.label}
								</Link>
							))}
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