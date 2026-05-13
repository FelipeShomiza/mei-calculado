import { SimplePage } from "@/components/SimplePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre o MEI Calculado",
  description: "Conheça o MEI Calculado, um site independente com calculadoras informativas para microempreendedores individuais."
};

export default function Page() {
  return (
    <SimplePage title="Sobre o MEI Calculado">
      <p>
        O MEI Calculado foi criado para ajudar microempreendedores individuais a organizar contas simples do dia a dia: limite de faturamento,
        limite proporcional para quem abriu o CNPJ no meio do ano, estimativa do DAS e resumo mensal de receitas e despesas.
      </p>
      <p>
        As ferramentas rodam no próprio navegador, sem cadastro, sem login e sem envio dos valores digitados para servidor. A ideia é dar uma
        referência rápida para o MEI entender seus números antes de conferir as regras aplicáveis ao seu caso.
      </p>
      <p>
        O MEI Calculado é um site independente e não possui vínculo com o Governo Federal, Receita Federal, Portal do Empreendedor ou Sebrae.
      </p>
      <p>
        O conteúdo é informativo e pode conter simplificações. Antes de tomar decisões fiscais, financeiras ou empresariais, confirme as informações
        em fontes oficiais, no Sebrae ou com um contador de confiança.
      </p>
    </SimplePage>
  );
}
