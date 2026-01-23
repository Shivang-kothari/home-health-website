import Link from "next/link";
 
type Props = { href: string; variant?: "primary" | "secondary" | "ghost"; children: React.ReactNode };
 
export default function ButtonLink({ href, variant = "primary", children }: Props) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white";
  const styles =
    variant === "primary"
      ? "text-white shadow-sm hover:shadow-md"
      : variant === "secondary"
      ? "bg-white text-slate-900 border border-slate-200 hover:bg-slate-50"
      : "text-slate-900 hover:bg-white/70";

  const primaryStyle =
    "bg-[linear-gradient(135deg,var(--brand),var(--brand-2))] ring-1 ring-black/5 hover:translate-y-[-1px]";

  return (
    <Link className={`${base} ${styles} ${variant === "primary" ? primaryStyle : ""}`} href={href}>
      {children}
    </Link>
  );
}
