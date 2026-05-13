import { ReactNode } from "react";

const toneStyles = {
  blue: "border-blue-100 bg-blue-50 text-blue-950",
  green: "border-green-100 bg-green-50 text-green-950",
  slate: "border-slate-200 bg-white text-slate-950"
};

export function ResultCard({
  title,
  value,
  children,
  tone = "blue"
}: {
  title: string;
  value: string;
  children?: ReactNode;
  tone?: keyof typeof toneStyles;
}) {
  return (
    <div className={`min-w-0 rounded-2xl border p-5 shadow-sm ${toneStyles[tone]}`}>
      <p className="text-sm font-bold opacity-80">{title}</p>
      <p className="mt-2 break-words text-2xl font-black leading-tight sm:text-3xl">{value}</p>
      {children ? <div className="mt-3 text-sm leading-6 opacity-90">{children}</div> : null}
    </div>
  );
}
