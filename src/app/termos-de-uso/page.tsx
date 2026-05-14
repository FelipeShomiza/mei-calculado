import { SimplePage } from "@/components/SimplePage";
import { canonicalUrl, defaultOpenGraphImage } from "@/data/seoKeywords";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: "Leia os termos de uso do MEI Calculado e entenda o caráter informativo das calculadoras e guias do site.",
  alternates: { canonical: canonicalUrl("/termos-de-uso") },
  openGraph: {
    title: "Termos de Uso",
    description: "Leia os termos de uso do MEI Calculado e entenda o caráter informativo das calculadoras e guias do site.",
    url: canonicalUrl("/termos-de-uso"),
    images: [defaultOpenGraphImage]
  }
};

export default function Page() {
  return (
    <SimplePage title="Termos de Uso" path="/termos-de-uso">
      <p>
        O conteúdo do MEI Calculado é informativo. As calculadoras e guias ajudam a organizar estimativas, mas não substituem contador, Sebrae,
        Receita Federal, Portal do Empreendedor, prefeitura ou qualquer canal oficial.
      </p>
      <p>
        Valores, limites, regras fiscais, obrigações acessórias e procedimentos podem mudar. O usuário deve confirmar as informações em fontes
        oficiais ou com profissional habilitado antes de tomar decisões fiscais, financeiras ou empresariais.
      </p>
      <p>
        As ferramentas podem conter simplificações, arredondamentos ou dados que precisem de revisão. Use os resultados como ponto de partida para
        análise, nunca como promessa de enquadramento, cálculo oficial ou resultado garantido.
      </p>
      <p>
        O MEI Calculado é um site independente e não possui vínculo com o Governo Federal, Receita Federal, Portal do Empreendedor ou Sebrae.
      </p>
    </SimplePage>
  );
}
