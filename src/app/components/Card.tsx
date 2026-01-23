import type { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  className?: string;
}>;

export default function Card({ className = "", children }: Props) {
  return (
    <div className={`card ${className}`.trim()}>
      {children}
    </div>
  );
}

