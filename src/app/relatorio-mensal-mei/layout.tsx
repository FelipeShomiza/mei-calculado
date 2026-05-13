import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Relatório Mensal MEI",
  description: "Monte um relatório mensal MEI simples com receitas, despesas, saldo estimado, resumo para copiar e opção de impressão."
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
