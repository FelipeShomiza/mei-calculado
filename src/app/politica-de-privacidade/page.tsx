import { SimplePage } from "@/components/SimplePage";
import { Metadata } from "next";

export const metadata: Metadata = { title: "Política de privacidade", description: "Política de privacidade do MEI Calculado." };

export default function Page() {
  return (
    <SimplePage title="Política de privacidade">
      <p>O MEI Calculado não salva os dados digitados nas calculadoras. Os cálculos rodam no navegador e não usam banco de dados.</p>
      <p>Futuramente, o site poderá usar Google AdSense, Google Analytics ou ferramenta similar. Isso pode envolver cookies de anúncios e métricas.</p>
      <p>O site não coleta dados sensíveis intencionalmente. Evite inserir informações pessoais desnecessárias nos campos livres.</p>
    </SimplePage>
  );
}
