import Link from "next/link";

export function Breadcrumbs({ items }: { items: { href: string; label: string }[] }) {
  return (
    <nav className="mb-6 text-sm font-bold text-slate-500" aria-label="Breadcrumb">
      <Link href="/" className="hover:text-blue-700">
        Início
      </Link>
      {items.map((item) => (
        <span key={item.href}>
          <span className="mx-2">/</span>
          <Link href={item.href} className="hover:text-blue-700">
            {item.label}
          </Link>
        </span>
      ))}
    </nav>
  );
}
