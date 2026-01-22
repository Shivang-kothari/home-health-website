import Link from "next/link";
 
type Props = { href: string; variant?: "primary" | "secondary" | "ghost"; children: React.ReactNode };
 
export default function ButtonLink({ href, variant = "primary", children }: Props) {
  const base =
    "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold transition-shadow transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  const styles =
    variant === "primary"
      ? "bg-teal-600 text-white hover:bg-teal-550 shadow-sm"
      : variant === "secondary"
      ? "bg-white text-teal-700 border border-teal-100 hover:bg-accent"
      : "text-teal-700 hover:bg-accent";
  return (
    <Link className={`${base} ${styles}`} href={href}>
      {children}
    </Link>
  );
}
