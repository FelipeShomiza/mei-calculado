import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calculadora de Faturamento MEI",
  description: "Projete o faturamento do MEI até dezembro e veja se a estimativa fica dentro, perto ou acima do limite proporcional."
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
