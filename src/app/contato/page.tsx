import { SimplePage } from "@/components/SimplePage";
import { canonicalUrl, defaultOpenGraphImage } from "@/data/seoKeywords";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato do MEI Calculado",
  description: "Fale com o MEI Calculado para enviar sugestões, correções ou avisos sobre as calculadoras e guias do site.",
  alternates: { canonical: canonicalUrl("/contato") },
  openGraph: {
    title: "Contato do MEI Calculado",
    description: "Fale com o MEI Calculado para enviar sugestões, correções ou avisos sobre as calculadoras e guias do site.",
    url: canonicalUrl("/contato"),
    images: [defaultOpenGraphImage]
  }
};

export default function Page() {
  return (
    <SimplePage title="Contato" path="/contato">
      <p>
        Para falar sobre o projeto, enviar sugestões, apontar correções ou avisar sobre valores que precisam ser revisados, use o e-mail abaixo.
      </p>
      <p>
        <strong>
          <a href="mailto:meicalculado@gmail.com">meicalculado@gmail.com</a>
        </strong>
      </p>
      <p>
        Não envie dados sensíveis, documentos, senhas, números de acesso ou informações fiscais privadas. O MEI Calculado não presta consultoria
        contábil individual e não substitui contador, Sebrae, Receita Federal ou canais oficiais.
      </p>
      <p>
        O MEI Calculado é um site independente e não possui vínculo com o Governo Federal, Receita Federal, Portal do Empreendedor ou Sebrae.
      </p>
    </SimplePage>
  );
}
