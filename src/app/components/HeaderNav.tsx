"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLink = { href: string; label: string };

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function HeaderNav({ links }: { links: NavLink[] }) {
  const pathname = usePathname() || "/";

  return (
    <nav className="hidden md:block">
      <div className="inline-flex items-center gap-1 rounded-full bg-white/70 p-1 ring-1 ring-black/10 backdrop-blur">
        {links.map((l) => {
          const active = isActive(pathname, l.href);
          return (
            <Link
              key={l.href}
              href={l.href}
              aria-current={active ? "page" : undefined}
              className={[
                "rounded-full px-3 py-1.5 text-sm font-medium transition-colors",
                active
                  ? "bg-black/5 text-[color:var(--heading)]"
                  : "text-slate-700 hover:bg-black/5 hover:text-[color:var(--heading)]",
              ].join(" ")}
            >
              {l.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

