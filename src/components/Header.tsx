import Link from "next/link";
import { Container } from "./Container";

const nav = [
  { href: "/calculadora-limite-mei", label: "Limite MEI" },
  { href: "/calculadora-faturamento-mei", label: "Faturamento" },
  { href: "/calculadora-das-mei", label: "DAS" },
  { href: "/relatorio-mensal-mei", label: "Relatório" },
  { href: "/guias", label: "Guias" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
      <Container className="flex min-h-16 flex-col items-start justify-center gap-2 py-3 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="flex shrink-0 items-center gap-2" aria-label="MEI Calculado - página inicial">
          <img src="/logo.svg" alt="MEI Calculado" className="h-11 w-auto" width="220" height="52" />
        </Link>
        <nav className="flex w-full gap-2 overflow-x-auto pb-1 text-sm font-bold text-slate-700 sm:w-auto sm:gap-3 sm:pb-0 md:gap-5">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="shrink-0 rounded-full px-3 py-2 hover:bg-blue-50 hover:text-blue-700">
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
