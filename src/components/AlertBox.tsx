import { ReactNode } from "react";

const styles = {
  info: "border-blue-200 bg-blue-50 text-blue-950",
  success: "border-green-200 bg-green-50 text-green-950",
  warning: "border-amber-200 bg-amber-50 text-amber-950",
  danger: "border-red-200 bg-red-50 text-red-950"
};

export function AlertBox({ children, type = "info" }: { children: ReactNode; type?: keyof typeof styles }) {
  return <div className={`rounded-2xl border p-4 text-sm leading-6 ${styles[type]}`}>{children}</div>;
}
