import Link from "next/link";

export function CalculatorCard({ href, title, description }: { href: string; title: string; description: string }) {
  return (
    <Link href={href} className="group block rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md">
      <span className="mb-4 block h-1.5 w-12 rounded-full bg-green-500 transition group-hover:w-16" />
      <h3 className="text-lg font-black text-slate-950">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
      <span className="mt-4 inline-block text-sm font-bold text-blue-700">Abrir ferramenta</span>
    </Link>
  );
}
