import Link from "next/link";
import Image from "next/image";
import Container from "./Container";
import ButtonLink from "./ButtonLink";
import { site } from "../lib/site";

const nav = [
	{ href: "/", label: "Home" },
	{ href: "/features", label: "Features" },
	{ href: "/pricing", label: "Pricing" },
	{ href: "/demo", label: "Demo" },
	{ href: "/about", label: "About" },
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
						<div className="hidden items-center gap-2 md:flex">
							<ButtonLink href="/demo" variant="primary">
								{site.ctaPrimary}
							</ButtonLink>
							<ButtonLink href="/contact" variant="secondary">
								{site.ctaSecondary}
							</ButtonLink>
						</div>

						<div className="flex items-center gap-2 md:hidden">
							<ButtonLink href="/demo" variant="primary">
								{site.ctaPrimary}
							</ButtonLink>
							<details className="relative">
								<summary className="list-none cursor-pointer rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-teal-200 focus:ring-offset-2 focus:ring-offset-white">
									Menu
								</summary>
								<div className="absolute right-0 mt-2 w-56 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg">
									<nav className="grid p-2">
										{nav.map((item) => (
											<Link
												key={item.href}
												href={item.href}
												className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900"
											>
												{item.label}
											</Link>
										))}
										<div className="my-2 border-t border-slate-200" />
										<Link
											href="/contact"
											className="rounded-lg px-3 py-2 text-sm font-semibold text-teal-700 hover:bg-slate-50"
										>
											{site.ctaSecondary}
										</Link>
									</nav>
								</div>
							</details>
						</div>
					</div>
				</div>
			</Container>
		</header>
	);
}