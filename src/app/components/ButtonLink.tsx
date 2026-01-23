import Link from "next/link";
 
type Props = { href: string; variant?: "primary" | "secondary" | "ghost"; children: React.ReactNode };
 
export default function ButtonLink({ href, variant = "primary", children }: Props) {
  const base =
    "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-[color:color-mix(in_oklab,var(--brand)_25%,transparent)]";
  const styles =
    variant === "primary"
      ? "bg-[color:var(--brand)] text-white shadow-sm hover:opacity-95"
      : variant === "secondary"
      ? "bg-white text-[color:var(--brand)] border border-slate-200 hover:bg-slate-50"
      : "text-[color:var(--brand)] hover:bg-slate-50";
  return (
    <Link className={`${base} ${styles}`} href={href}>
      {children}
    </Link>
  );
}
