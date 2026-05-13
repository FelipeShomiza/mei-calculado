import { SimplePage } from "@/components/SimplePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Entenda como o MEI Calculado trata dados digitados nas calculadoras, cookies, métricas e uso futuro de AdSense."
};

export default function Page() {
  return (
    <SimplePage title="Política de Privacidade">
      <p>
        O MEI Calculado não salva os dados digitados nas calculadoras. Os cálculos rodam no navegador do usuário e o projeto não usa banco de dados,
        backend, área de login ou envio de informações para servidor próprio.
      </p>
      <p>
        O site não coleta dados sensíveis intencionalmente. Evite inserir documentos, senhas, dados bancários, códigos de acesso ou informações
        pessoais desnecessárias em campos livres, como observações do relatório mensal.
      </p>
      <p>
        Futuramente, o site poderá usar Google AdSense para exibição de anúncios e ferramentas de métricas, como Google Analytics. Essas ferramentas
        podem utilizar cookies ou tecnologias semelhantes para anúncios, medição de audiência, segurança e melhoria do site.
      </p>
      <p>
        Quando anúncios ou métricas forem ativados, o usuário poderá consultar as políticas dos respectivos fornecedores para entender como esses
        terceiros tratam cookies e dados de navegação.
      </p>
      <p>
        O MEI Calculado é um site independente e não possui vínculo com o Governo Federal, Receita Federal, Portal do Empreendedor ou Sebrae.
      </p>
    </SimplePage>
  );
}
