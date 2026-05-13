import { SimplePage } from "@/components/SimplePage";
import { Metadata } from "next";

export const metadata: Metadata = { title: "Sobre", description: "Conheça o projeto independente MEI Calculado." };

export default function Page() {
  return (
    <SimplePage title="Sobre o MEI Calculado">
      <p>O MEI Calculado é um projeto independente criado para ajudar Microempreendedores Individuais com cálculos simples e informativos.</p>
      <p>O site oferece ferramentas gratuitas para estimar limite de faturamento, DAS e relatórios mensais. Ele não é oficial, não substitui contador e não representa órgãos do governo.</p>
    </SimplePage>
  );
}
