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
		<header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/80 backdrop-blur">
			<Container>
				<div className="flex h-16 items-center justify-between gap-4">
					<Link href="/" className="flex items-center gap-3 font-bold tracking-tight">
						<Image src="/logo.svg" alt={site.name} width={36} height={36} className="rounded-lg" />
						<span className="hidden sm:inline text-lg">{site.name}</span>
					</Link>

					<nav className="hidden items-center gap-6 md:flex">
						{nav.map((item) => (
							<Link key={item.href} href={item.href} className="text-sm font-medium text-slate-700 hover:text-slate-900">
								{item.label}
							</Link>
						))}
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