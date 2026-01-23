import Link from "next/link";
import Image from "next/image";
import Container from "./Container";
import { site } from "../lib/site";

export default function Footer() {
	return (
		<footer className="border-t border-slate-200 bg-slate-50">
			<Container>
				<div className="grid gap-8 py-10 md:grid-cols-3">
					<div>
						<div className="flex items-center gap-3">
							<Image src="/logo.svg" alt={site.name} width={36} height={36} className="rounded-lg" />
							<div>
								<div className="text-base font-semibold">{site.name}</div>
								<p className="mt-1 text-sm muted">{site.tagline}</p>
							</div>
						</div>
					</div>

					<div className="text-sm">
						<div className="font-semibold text-slate-900">Contact</div>
						<div className="mt-2 space-y-1 muted">
							<a className="block hover:text-slate-900" href={site.phoneHref}>
								{site.phone}
							</a>
							<a className="block hover:text-slate-900" href={site.emailHref}>
								{site.email}
							</a>
							<div className="pt-2">
								{site.addressLines.map((l) => (
									<div key={l}>{l}</div>
								))}
							</div>
						</div>
					</div>

					<div className="text-sm">
						<div className="font-semibold text-slate-900">Quick links</div>
						<div className="mt-2 grid gap-2 muted">
							<Link className="hover:text-slate-900" href="/features">Features</Link>
							<Link className="hover:text-slate-900" href="/pricing">Pricing</Link>
							<Link className="hover:text-slate-900" href="/demo">Demo</Link>
							<Link className="hover:text-slate-900" href="/contact">Contact</Link>
						</div>
					</div>
				</div>

				<div className="flex flex-col gap-2 border-t border-slate-200 py-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
					<div>© {new Date().getFullYear()} {site.name}. All rights reserved.</div>
					<div className="flex gap-4 muted">
						<Link className="hover:text-slate-900" href="/privacy">Privacy Policy</Link>
						<Link className="hover:text-slate-900" href="/terms">Terms of Service</Link>
					</div>
				</div>
			</Container>
		</footer>
	);
}