"use client";

import { AdPlaceholder } from "@/components/AdPlaceholder";
import { AlertBox } from "@/components/AlertBox";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/Container";
import { FAQ } from "@/components/FAQ";
import { InternalLinkCard } from "@/components/InternalLinkCard";
import { ResultCard } from "@/components/ResultCard";
import { SourceBox } from "@/components/SourceBox";
import { StructuredData, breadcrumbSchema, faqSchema, webApplicationSchema } from "@/components/StructuredData";
import { MeiType, months } from "@/data/meiConfig";
import { seoKeywords } from "@/data/seoKeywords";
import { calculateDisqualificationRisk } from "@/lib/meiCalculations";
import { formatCurrency, formatPercent, parseCurrencyInput } from "@/utils/formatters";
import Link from "next/link";
import { useMemo, useState } from "react";

const independenceNotice =
  "O MEI Calculado é um site independente e não possui vínculo com o Governo Federal, Receita Federal, Portal do Empreendedor ou Sebrae.";

const faqs = [
  {
    question: "Esta calculadora confirma o desenquadramento do MEI?",
    answer: "Não. Ela faz uma simulação informativa de limite e faturamento projetado. Para confirmar regras e efeitos no seu caso, procure contador, Sebrae ou canais oficiais."
  },
  {
    question: "O que significa ficar perto do limite?",
    answer: "Neste simulador, perto do limite é um alerta informativo quando a projeção usa 90% ou mais do limite estimado, sem ultrapassar o valor."
  },
  {
    question: "O limite muda para MEI Caminhoneiro?",
    answer: "Sim. O simulador separa MEI comum e MEI Caminhoneiro usando os valores centralizados no projeto."
  },
  {
    question: "Faturamento previsto até dezembro é lucro?",
    answer: "Não. Informe uma estimativa de faturamento bruto que ainda espera receber até dezembro, sem tratar esse campo como lucro."
  }
];

function statusLabel(status: "dentro" | "perto" | "acima") {
  if (status === "acima") return "Acima do limite";
  if (status === "perto") return "Perto do limite";
  return "Dentro do limite";
}

export default function CalculadoraDesenquadramentoMeiPage() {
  const [type, setType] = useState<MeiType>("comum");
  const [openingMonth, setOpeningMonth] = useState(1);
  const [accumulated, setAccumulated] = useState("");
  const [expectedUntilDecember, setExpectedUntilDecember] = useState("");

  const result = useMemo(
    () => calculateDisqualificationRisk(type, openingMonth, parseCurrencyInput(accumulated), parseCurrencyInput(expectedUntilDecember)),
    [type, openingMonth, accumulated, expectedUntilDecember]
  );

  const alertType = result.status === "acima" ? "danger" : result.status === "perto" ? "warning" : "success";
  const differenceTitle = result.difference < 0 ? "Valor acima do limite" : "Diferença para o limite";

  return (
    <Container className="py-10">
      <StructuredData
        data={[
          breadcrumbSchema([
            { path: "/", name: "Início" },
            { path: "/calculadora-desenquadramento-mei", name: "Calculadora de desenquadramento MEI" }
          ]),
          faqSchema(faqs),
          webApplicationSchema({
            name: "Calculadora de Desenquadramento MEI",
            path: seoKeywords.desenquadramento.path,
            description: seoKeywords.desenquadramento.description
          })
        ]}
      />
      <Breadcrumbs items={[{ label: "Calculadora de desenquadramento MEI" }]} />
      <h1 className="text-3xl font-black text-slate-950">Calculadora de desenquadramento MEI</h1>
      <p className="mt-3 max-w-3xl leading-7 text-slate-600">
        Simule de forma informativa se o faturamento do MEI pode ultrapassar o limite anual ou proporcional. A ferramenta não confirma
        desenquadramento, não calcula imposto devido e não substitui orientação profissional.
      </p>

      <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <section className="rounded-2xl border border-slate-200 bg-white p-5">
          <div className="grid gap-4">
            <label>
              Tipo de MEI
              <select value={type} onChange={(event) => setType(event.target.value as MeiType)}>
                <option value="comum">MEI comum</option>
                <option value="caminhoneiro">MEI Caminhoneiro</option>
              </select>
            </label>
            <label>
              Mês de abertura
              <select value={openingMonth} onChange={(event) => setOpeningMonth(Number(event.target.value))}>
                {months.map((month, index) => (
                  <option key={month} value={index + 1}>
                    {month}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Faturamento acumulado no ano
              <input value={accumulated} onChange={(event) => setAccumulated(event.target.value)} placeholder="Ex.: 62.000,00" inputMode="decimal" />
              {!accumulated.trim() ? <span className="text-xs font-medium text-slate-500">Campo vazio será considerado como R$ 0,00.</span> : null}
            </label>
            <label>
              Faturamento previsto até dezembro
              <input
                value={expectedUntilDecember}
                onChange={(event) => setExpectedUntilDecember(event.target.value)}
                placeholder="Ex.: 18.000,00"
                inputMode="decimal"
              />
              {!expectedUntilDecember.trim() ? <span className="text-xs font-medium text-slate-500">Campo vazio será considerado como R$ 0,00.</span> : null}
            </label>
          </div>
        </section>

        <section className="grid gap-4">
          <AlertBox type={alertType}>
            {result.status === "acima"
              ? "A projeção ficou acima do limite estimado. Procure contador, Sebrae ou fonte oficial antes de decidir próximos passos."
              : result.status === "perto"
                ? "A projeção está perto do limite estimado. Revise seus registros e busque orientação se houver dúvida."
                : "A projeção está dentro do limite estimado com os valores informados."}
          </AlertBox>
          <div className="grid gap-4 sm:grid-cols-2">
            <ResultCard title="Limite proporcional estimado" value={formatCurrency(result.proportionalLimit)} tone="green" />
            <ResultCard title="Faturamento total projetado" value={formatCurrency(result.projectedRevenue)} />
            <ResultCard title={differenceTitle} value={formatCurrency(Math.abs(result.difference))} tone={result.difference < 0 ? "slate" : "green"} />
            <ResultCard title="Percentual usado do limite" value={formatPercent(result.usagePercentage)} />
            <ResultCard title="Status" value={statusLabel(result.status)} tone={result.status === "dentro" ? "green" : "slate"} />
            <ResultCard title="Meses ativos no ano" value={`${result.activeMonths} meses`} tone="slate" />
          </div>
          {(result.status === "acima" || result.status === "perto") ? (
            <AlertBox type="warning">
              Quando o faturamento estiver perto ou acima do limite, use esta simulação apenas como alerta inicial. Confira o caso com contador,
              Sebrae ou canais oficiais antes de tomar decisões fiscais.
            </AlertBox>
          ) : null}
          <AlertBox type="info">{independenceNotice} Os dados digitados ficam apenas no navegador.</AlertBox>
          <AdPlaceholder />
        </section>
      </div>

      <article className="prose-mei mt-12">
        <h2>O que é desenquadramento MEI?</h2>
        <p>
          Desenquadramento é a saída do regime de MEI quando a empresa deixa de atender alguma condição exigida para permanecer como
          microempreendedor individual. O faturamento acima do limite é uma das situações que merecem atenção, mas a confirmação depende da regra
          aplicável ao caso.
        </p>

        <h2>Quando usar esta calculadora?</h2>
        <p>
          Use esta calculadora quando quiser comparar o faturamento acumulado e o faturamento ainda previsto até dezembro com o limite estimado para o
          seu tipo de MEI. Para ver apenas o saldo restante, consulte também a{" "}
          <Link href="/calculadora-limite-mei" className="font-bold text-blue-700 underline">
            calculadora limite MEI
          </Link>
          . Para trabalhar com média mensal, veja a{" "}
          <Link href="/calculadora-faturamento-mei" className="font-bold text-blue-700 underline">
            calculadora de faturamento MEI
          </Link>
          .
        </p>

        <h2>Exemplo prático</h2>
        <p>
          Se um MEI comum abriu em janeiro, já faturou uma parte relevante do limite e ainda espera receber novos valores até dezembro, a soma desses
          campos mostra o faturamento total projetado. Se a projeção ficar perto ou acima do limite, o resultado deve ser tratado como sinal para
          organizar documentos e buscar orientação.
        </p>

        <h2>O que fazer se passou do limite?</h2>
        <p>
          Revise o faturamento bruto, confira notas emitidas, vendas sem nota, recebimentos por maquininha, PIX, marketplace e outros canais ligados à
          atividade. Depois, procure contador, Sebrae ou canais oficiais para entender o que se aplica ao seu caso. O guia{" "}
          <Link href="/guias/mei-estourou-o-limite-o-que-fazer" className="font-bold text-blue-700 underline">
            MEI estourou o limite: o que fazer
          </Link>{" "}
          também reúne cuidados importantes antes de qualquer decisão.
        </p>

        <h2>Perguntas frequentes</h2>
      </article>

      <section className="mt-5">
        <FAQ items={faqs} />
      </section>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <SourceBox />
        <AlertBox type="info">
          <strong>Aviso importante:</strong> esta página é uma simulação informativa, gratuita e independente. Ela não confirma enquadramento, não
          calcula multa, não calcula imposto devido e não substitui contador, Sebrae, Receita Federal ou canais oficiais.
        </AlertBox>
      </div>

      <section className="mt-10 grid gap-4 md:grid-cols-3">
        <InternalLinkCard href="/calculadora-limite-mei" title="Calcular limite MEI" text="Veja limite proporcional, saldo restante e percentual usado." />
        <InternalLinkCard href="/calculadora-faturamento-mei" title="Projetar faturamento" text="Simule a média mensal até dezembro." />
        <InternalLinkCard href="/guias/mei-estourou-o-limite-o-que-fazer" title="Passou do limite?" text="Entenda cuidados antes de decidir." />
      </section>
    </Container>
  );
}
