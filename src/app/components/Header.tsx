import Link from "next/link";
import Image from "next/image";
import Container from "./Container";
import HeaderNav from "./HeaderNav";
import ThemeButton from "./ThemeButton";
import ButtonLink from "./ButtonLink";
import { site } from "../lib/site";

export default function Header() {
	return (
		<header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/75 backdrop-blur">
			<Container>
				<div className="flex h-16 items-center justify-between gap-4">
					<Link href="/" className="flex items-center gap-3 font-semibold tracking-tight">
						<Image src="/logo.svg" alt={site.name} width={34} height={34} className="rounded-xl ring-1 ring-black/5" />
						<div className="leading-tight">
							<div className="text-[15px] text-[color:var(--heading)]">{site.name}</div>
							<div className="hidden text-xs text-slate-500 sm:block">{site.headerSubtitle}</div>
						</div>
					</Link>

					<HeaderNav links={site.navLinks} />

					<div className="flex items-center gap-2">
						<div className="hidden items-center gap-2 md:flex">
							<ThemeButton />
							<ButtonLink href="/demo" variant="primary" className="btn-demo">
								{site.ctaPrimary}
							</ButtonLink>
							<ButtonLink href="/contact" variant="secondary">
								{site.ctaSecondary}
							</ButtonLink>
						</div>

						<div className="flex items-center gap-2 md:hidden">
							<ButtonLink href="/demo" variant="primary" className="btn-demo">
								{site.ctaPrimary}
							</ButtonLink>
							<details className="relative">
								<summary className="list-none cursor-pointer rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 focus:outline-none">
									Menu
								</summary>
								<div className="absolute right-0 mt-2 w-56 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg">
									<nav className="grid p-2">
										{site.navLinks.map((item) => (
											<Link
												key={item.href}
												href={item.href}
												className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-[color:var(--heading)]"
											>
												{item.label}
											</Link>
										))}
										<div className="my-2 border-t border-slate-200" />
										<Link
											href="/contact"
											className="rounded-lg px-3 py-2 text-sm font-semibold text-[color:var(--heading)] hover:bg-slate-50"
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