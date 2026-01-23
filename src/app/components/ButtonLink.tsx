import Link from "next/link";
 
type Props = { href: string; variant?: "primary" | "secondary" | "ghost"; children: React.ReactNode };
 
export default function ButtonLink({ href, variant = "primary", children }: Props) {
  const base =
    "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-teal-200 focus:ring-offset-2 focus:ring-offset-white";
  const styles =
    variant === "primary"
      ? "bg-teal-600 text-white hover:bg-teal-700 shadow-sm"
      : variant === "secondary"
      ? "bg-white text-teal-700 border border-slate-200 hover:bg-slate-50"
      : "text-teal-700 hover:bg-slate-50";
  return (
    <Link className={`${base} ${styles}`} href={href}>
      {children}
    </Link>
  );
}
