import Link from "next/link";
import Image from "next/image";
import Container from "./Container";
import ButtonLink from "./ButtonLink";
import { site } from "../lib/site";

const nav = [
	{ href: "/", label: "Home" },
	{ href: "/features", label: "Features" },
	{ href: "/services", label: "Modules" },
	{ href: "/pricing", label: "Pricing" },
	{ href: "/coverage", label: "Coverage" },
	{ href: "/contact", label: "Contact" },
];

export default function Header() {
	return (
		<header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur">
			<Container>
				<div className="flex min-h-16 items-center justify-between gap-4 py-3">
					<Link href="/" className="flex items-center gap-3 font-bold tracking-tight">
						<Image src="/logo.svg" alt={site.name} width={38} height={38} className="rounded-xl ring-1 ring-slate-200" />
						<div className="hidden sm:flex flex-col">
							<span className="text-lg">{site.name}</span>
							<span className="text-xs text-slate-500">HIPAA-ready HR portal</span>
						</div>
					</Link>

					<nav className="hidden items-center md:flex">
						<div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 shadow-sm">
							{nav.map((item) => (
								<Link
									key={item.href}
									href={item.href}
									className="rounded-full px-3 py-1 text-xs font-semibold text-slate-600 transition-colors hover:bg-sky-50 hover:text-sky-900"
								>
									{item.label}
								</Link>
							))}
						</div>
					</nav>

					<div className="flex items-center gap-2">
						<ButtonLink href="/demo" variant="primary">
							{site.ctaPrimary}
						</ButtonLink>
						<ButtonLink href="/login" variant="secondary">
							{site.ctaSecondary}
						</ButtonLink>
					</div>
				</div>
			</Container>
		</header>
	);
}