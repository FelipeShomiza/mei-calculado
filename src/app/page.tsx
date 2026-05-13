import { AdPlaceholder } from "@/components/AdPlaceholder";
import { AlertBox } from "@/components/AlertBox";
import { Button } from "@/components/Button";
import { CalculatorCard } from "@/components/CalculatorCard";
import { Container } from "@/components/Container";
import { FAQ } from "@/components/FAQ";
import { InternalLinkCard } from "@/components/InternalLinkCard";

const faqs = [
  {
    question: "O MEI Calculado é um site oficial?",
    answer: "Não. O MEI Calculado é um projeto independente com cálculos informativos para facilitar a vida do MEI."
  },
  {
    question: "Os dados digitados são salvos?",
    answer: "Não. As calculadoras rodam no navegador e não usam banco de dados."
  },
  {
    question: "Posso usar os resultados para tomar decisões fiscais?",
    answer: "Use como estimativa. Em casos importantes, confira fontes oficiais e fale com contador, Sebrae ou Receita Federal."
  }
];

export default function Home() {
  return (
    <>
      <section className="border-b border-slate-100 bg-white">
        <Container className="grid gap-8 py-14 md:grid-cols-[1.2fr_0.8fr] md:items-center md:py-20">
          <div>
            <p className="text-sm font-black uppercase tracking-wide text-green-700">Site independente para MEI</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight text-slate-950 sm:text-5xl">
              Calculadoras gratuitas para MEI
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Calcule limite proporcional, projeção de faturamento, valor estimado do DAS e monte um relatório mensal simples, sem cadastro.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/calculadora-limite-mei">Calcular limite MEI</Button>
              <Button href="/calculadora-das-mei" variant="secondary">Ver DAS MEI</Button>
            </div>
          </div>
          <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-green-50 p-6 shadow-sm">
            <p className="text-sm font-bold text-blue-900">Resumo rápido</p>
            <p className="mt-3 text-3xl font-black text-blue-950">Limite, DAS e relatórios em poucos cliques</p>
            <ul className="mt-4 grid gap-2 text-sm font-bold text-blue-900">
              <li>Sem login</li>
              <li>Sem banco de dados</li>
              <li>Compatível com celular</li>
            </ul>
          </div>
        </Container>
      </section>
      <Container>
        <AdPlaceholder />
        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <CalculatorCard href="/calculadora-limite-mei" title="Calculadora de Limite MEI" description="Veja o limite proporcional pelo mês de abertura." />
          <CalculatorCard href="/calculadora-faturamento-mei" title="Calculadora de Faturamento MEI" description="Projete se o faturamento pode passar do limite." />
          <CalculatorCard href="/calculadora-das-mei" title="Calculadora DAS MEI" description="Consulte o valor estimado mensal por atividade." />
          <CalculatorCard href="/relatorio-mensal-mei" title="Relatório Mensal MEI" description="Monte um resumo mensal para organizar receitas." />
        </section>
        <section className="mt-14 grid gap-6 md:grid-cols-2 md:items-start">
          <div>
            <h2 className="text-2xl font-black text-slate-950">Por que usar o MEI Calculado?</h2>
            <p className="mt-3 leading-7 text-slate-600">
              O objetivo é oferecer ferramentas rápidas, leves e fáceis de entender, com linguagem simples para quem cuida do próprio MEI e quer organizar números básicos.
            </p>
          </div>
          <AlertBox type="warning">
            <strong>Aviso importante:</strong> este site não substitui contador, Sebrae, Receita Federal ou canais oficiais. Os cálculos são informativos.
          </AlertBox>
        </section>
        <section className="mt-14">
          <h2 className="mb-5 text-2xl font-black text-slate-950">Guias úteis</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <InternalLinkCard href="/guias/qual-o-limite-do-mei" title="Qual o limite do MEI?" text="Entenda limite anual e proporcional." />
            <InternalLinkCard href="/guias/quanto-o-mei-paga-por-mes" title="Quanto o MEI paga por mês?" text="Veja como pensar no DAS mensal." />
            <InternalLinkCard href="/guias/mei-abriu-no-meio-do-ano-quanto-pode-faturar" title="Abriu no meio do ano?" text="Calcule o limite proporcional." />
            <InternalLinkCard href="/guias/mei-caminhoneiro-limite" title="MEI Caminhoneiro" text="Veja o limite específico para transportador." />
            <InternalLinkCard href="/guias/mei-precisa-emitir-nota-fiscal" title="Nota fiscal" text="Entenda cuidados comuns sobre emissão." />
            <InternalLinkCard href="/guias/mei-pode-vender-online" title="Venda online" text="Organize o faturamento de vendas pela internet." />
          </div>
        </section>
        <section className="mt-14">
          <h2 className="mb-5 text-2xl font-black text-slate-950">FAQ</h2>
          <FAQ items={faqs} />
        </section>
      </Container>
    </>
  );
}
