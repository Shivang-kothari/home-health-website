import Link from "next/link";
 
type Props = { href: string; variant?: "primary" | "secondary" | "ghost"; children: React.ReactNode };
 
export default function ButtonLink({ href, variant = "primary", children }: Props) {
  const base =
    "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold transition-shadow transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-200";
  const styles =
    variant === "primary"
      ? "bg-blue-600 text-white hover:bg-blue-500 shadow-sm"
      : variant === "secondary"
      ? "bg-white text-slate-900 border border-slate-200 hover:bg-slate-50"
      : "text-slate-700 hover:bg-slate-50";
  return (
    <Link className={`${base} ${styles}`} href={href}>
      {children}
    </Link>
  );
}
