import { SimplePage } from "@/components/SimplePage";
import { Metadata } from "next";

export const metadata: Metadata = { title: "Contato", description: "Entre em contato com o MEI Calculado." };

export default function Page() {
  return (
    <SimplePage title="Contato">
      <p>Para falar sobre o projeto, sugestões ou correções, use o e-mail:</p>
      <p><strong>meicalculado@gmail.com</strong></p>
      <p>Não envie dados sensíveis. Este site não presta consultoria contábil individual.</p>
    </SimplePage>
  );
}
