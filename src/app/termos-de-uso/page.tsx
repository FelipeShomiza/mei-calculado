import { SimplePage } from "@/components/SimplePage";
import { Metadata } from "next";

export const metadata: Metadata = { title: "Termos de uso", description: "Termos de uso do MEI Calculado." };

export default function Page() {
  return (
    <SimplePage title="Termos de uso">
      <p>O uso do MEI Calculado é informativo. O site não substitui contador, Sebrae, Receita Federal ou canais oficiais.</p>
      <p>O usuário é responsável por confirmar informações antes de tomar decisões fiscais, financeiras ou empresariais.</p>
      <p>O site pode conter erros, simplificações ou valores desatualizados. Revise sempre os dados em fontes oficiais.</p>
    </SimplePage>
  );
}
