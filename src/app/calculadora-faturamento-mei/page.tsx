"use client";

import { AdPlaceholder } from "@/components/AdPlaceholder";
import { AlertBox } from "@/components/AlertBox";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/Container";
import { FAQ } from "@/components/FAQ";
import { InternalLinkCard } from "@/components/InternalLinkCard";
import { ResultCard } from "@/components/ResultCard";
import { StructuredData, breadcrumbSchema, faqSchema, webApplicationSchema } from "@/components/StructuredData";
import { MeiType, months } from "@/data/meiConfig";
import { seoKeywords } from "@/data/seoKeywords";
import { calculateRevenueProjection } from "@/lib/meiCalculations";
import { formatCurrency, parseCurrencyInput } from "@/utils/formatters";
import Link from "next/link";
import { useMemo, useState } from "react";

const independenceNotice =
  "O MEI Calculado é um site independente e não possui vínculo com o Governo Federal, Receita Federal, Portal do Empreendedor ou Sebrae.";

const faqs = [
  { question: "Como saber quanto ainda posso faturar como MEI?", answer: "Compare o faturamento projetado com o limite proporcional e acompanhe mês a mês antes de chegar perto do teto." },
  { question: "A projeção de faturamento MEI é oficial?", answer: "Não. É uma estimativa independente baseada nos valores que você informa." },
  { question: "O que fazer se a projeção passar do limite?", answer: "Revise seus registros e procure contador, Sebrae ou fonte oficial antes de tomar decisões." }
];

export default function FaturamentoMeiPage() {
  const [type, setType] = useState<MeiType>("comum");
  const [openingMonth, setOpeningMonth] = useState(1);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);
  const [accumulated, setAccumulated] = useState("");
  const [average, setAverage] = useState("");
  const result = useMemo(
    () => calculateRevenueProjection(type, openingMonth, currentMonth, parseCurrencyInput(accumulated), parseCurrencyInput(average)),
    [type, openingMonth, currentMonth, accumulated, average]
  );

  return (
    <Container className="py-10">
      <StructuredData
        data={[
          breadcrumbSchema([
            { path: "/", name: "Início" },
            { path: "/calculadora-faturamento-mei", name: "Calculadora faturamento MEI" }
          ]),
          faqSchema(faqs),
          webApplicationSchema({
            name: "Calculadora de Faturamento MEI",
            path: seoKeywords.faturamento.path,
            description: seoKeywords.faturamento.description
          })
        ]}
      />
      <Breadcrumbs items={[{ label: "Calculadora de faturamento MEI" }]} />
      <h1 className="text-3xl font-black text-slate-950">Calculadora faturamento MEI</h1>
      <p className="mt-3 max-w-3xl leading-7 text-slate-600">
        Simule o faturamento de agora até dezembro e veja se a projeção fica dentro do limite proporcional. Os valores digitados não são salvos nem
        enviados para servidor.
      </p>
      <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <section className="rounded-2xl border border-slate-200 bg-white p-5">
          <div className="grid gap-4">
            <label>
              Tipo de MEI
              <select value={type} onChange={(e) => setType(e.target.value as MeiType)}>
                <option value="comum">MEI comum</option>
                <option value="caminhoneiro">MEI Caminhoneiro</option>
              </select>
            </label>
            <label>
              Mês de abertura
              <select value={openingMonth} onChange={(e) => setOpeningMonth(Number(e.target.value))}>
                {months.map((m, i) => (
                  <option key={m} value={i + 1}>
                    {m}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Mês atual
              <select value={currentMonth} onChange={(e) => setCurrentMonth(Number(e.target.value))}>
                {months.map((m, i) => (
                  <option key={m} value={i + 1}>
                    {m}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Faturamento já acumulado
              <input value={accumulated} onChange={(e) => setAccumulated(e.target.value)} placeholder="Ex.: 42.000,00" inputMode="decimal" />
              {!accumulated.trim() ? <span className="text-xs font-medium text-slate-500">Campo vazio será considerado como R$ 0,00.</span> : null}
            </label>
            <label>
              Média esperada por mês, de agora até dezembro
              <input value={average} onChange={(e) => setAverage(e.target.value)} placeholder="Ex.: 6.000,00" inputMode="decimal" />
              {!average.trim() ? <span className="text-xs font-medium text-slate-500">Campo vazio será considerado como R$ 0,00.</span> : null}
            </label>
          </div>
        </section>
        <section className="grid gap-4">
          <AlertBox type={result.status === "acima" ? "danger" : result.status === "perto" ? "warning" : "success"}>
            {result.status === "acima"
              ? "A projeção ficou acima do limite. Confira com um contador ou fonte oficial."
              : result.status === "perto"
                ? "A projeção está perto do limite. Acompanhe o faturamento com atenção."
                : "A projeção está dentro do limite estimado."}
          </AlertBox>
          <div className="grid gap-4 sm:grid-cols-2">
            <ResultCard title="Limite proporcional" value={formatCurrency(result.proportionalLimit)} tone="green" />
            <ResultCard title="Faturamento projetado" value={formatCurrency(result.projectedRevenue)} />
            <ResultCard title={result.difference < 0 ? "Valor acima do limite" : "Diferença para o limite"} value={formatCurrency(Math.abs(result.difference))} tone={result.difference < 0 ? "slate" : "green"} />
            <ResultCard title="Média mensal possível" value={formatCurrency(result.allowedMonthlyRevenue)} />
          </div>
          <AlertBox type="info">{independenceNotice} A projeção é apenas informativa e depende dos valores que você informar.</AlertBox>
          <AdPlaceholder />
        </section>
      </div>
      <article className="prose-mei mt-10">
        <h2>Como projetar faturamento até dezembro</h2>
        <p>
          Informe o faturamento acumulado até agora e uma média mensal esperada para os próximos meses. A calculadora soma esses valores e compara a
          projeção com o limite proporcional do MEI.
        </p>
        <h2>Como saber quanto ainda posso faturar como MEI</h2>
        <p>
          O resultado "média mensal possível" mostra uma estimativa do valor que ainda caberia por mês até dezembro. Para uma análise mais direta do
          saldo restante, use também a{" "}
          <Link href="/calculadora-limite-mei" className="font-bold text-blue-700 underline">
            calculadora limite MEI
          </Link>
          .
        </p>
        <h2>Exemplo com faturamento acumulado</h2>
        <p>
          Se o MEI já faturou uma parte relevante do limite e espera meses fortes até dezembro, a projeção pode indicar risco de ultrapassar o teto.
          Nesse caso, confira o guia{" "}
          <Link href="/guias/mei-estourou-o-limite-o-que-fazer" className="font-bold text-blue-700 underline">
            MEI estourou o limite: o que fazer
          </Link>
          .
        </p>
        <h2>Quando a projeção ajuda</h2>
        <p>
          Esta calculadora é útil para perceber cedo se a média dos próximos meses pode levar o MEI para perto do limite. Ela não substitui o controle
          real do faturamento, notas emitidas e recebimentos.
        </p>
      </article>
      <section className="mt-8">
        <h2 className="mb-5 text-2xl font-black text-slate-950">Perguntas frequentes sobre faturamento MEI</h2>
        <FAQ items={faqs} />
      </section>
      <section className="mt-10 grid gap-4 md:grid-cols-3">
        <InternalLinkCard href="/calculadora-limite-mei" title="Calcular limite exato" text="Confira meses ativos, percentual usado e saldo restante." />
        <InternalLinkCard href="/calculadora-desenquadramento-mei" title="Risco de desenquadramento" text="Compare a projeção com o limite proporcional." />
        <InternalLinkCard href="/relatorio-mensal-mei" title="Organizar o mês" text="Monte um resumo mensal de receitas e despesas." />
        <InternalLinkCard href="/guias/qual-o-limite-do-mei" title="Entender o limite" text="Veja como funciona o limite anual e proporcional." />
      </section>
    </Container>
  );
}
