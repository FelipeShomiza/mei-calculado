import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calculadora DAS MEI 2026",
  description: "Veja o valor mensal estimado do DAS MEI em 2026 para comércio, serviços, atividade mista e MEI Caminhoneiro."
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
