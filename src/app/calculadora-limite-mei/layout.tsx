import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calculadora de Limite MEI proporcional",
  description: "Calcule o limite proporcional do MEI comum ou MEI Caminhoneiro pelo mês de abertura e veja quanto ainda pode faturar."
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
