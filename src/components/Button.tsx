import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href?: string;
  children: ReactNode;
  type?: "button" | "submit";
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
};

export function Button({ href, children, type = "button", onClick, variant = "primary", className = "" }: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-blue-700 text-white hover:bg-blue-800"
      : "border border-slate-300 bg-white text-slate-800 hover:bg-slate-50";
  const base = `inline-flex min-h-11 items-center justify-center rounded-xl px-5 py-3 text-sm font-bold transition ${styles} ${className}`;

  if (href) {
    return (
      <Link className={base} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={base} type={type} onClick={onClick}>
      {children}
    </button>
  );
}
