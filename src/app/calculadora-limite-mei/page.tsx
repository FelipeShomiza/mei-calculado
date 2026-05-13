"use client";

import { AdPlaceholder } from "@/components/AdPlaceholder";
import { AlertBox } from "@/components/AlertBox";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/Container";
import { FAQ } from "@/components/FAQ";
import { InternalLinkCard } from "@/components/InternalLinkCard";
import { ResultCard } from "@/components/ResultCard";
import { SourceBox } from "@/components/SourceBox";
import { MeiType, months } from "@/data/meiConfig";
import { calculateRemainingRevenue, getUsageStatus } from "@/lib/meiCalculations";
import { formatCurrency, formatPercent, parseCurrencyInput } from "@/utils/formatters";
import { useMemo, useState } from "react";

const independenceNotice =
  "O MEI Calculado é um site independente e não possui vínculo com o Governo Federal, Receita Federal, Portal do Empreendedor ou Sebrae.";

const faqs = [
  { question: "Qual limite usar se abri o MEI no meio do ano?", answer: "Use o limite proporcional: meses ativos no ano multiplicados pelo limite mensal da categoria." },
  { question: "MEI comum e caminhoneiro têm o mesmo limite?", answer: "Não. O MEI Caminhoneiro possui limite proporcional mensal maior." },
  { question: "Passei do limite. O que fazer?", answer: "Procure contador ou canal oficial antes de decidir qualquer ação." },
  { question: "A calculadora substitui a Receita Federal?", answer: "Não. Ela é apenas informativa e independente." },
  { question: "Os valores são atualizados automaticamente?", answer: "Não. Os valores precisam ser revisados manualmente todos os anos." }
];

export default function LimiteMeiPage() {
  const [year, setYear] = useState(String(new Date().getFullYear()));
  const [openingMonth, setOpeningMonth] = useState(1);
  const [type, setType] = useState<MeiType>("comum");
  const [revenue, setRevenue] = useState("");

  const referenceYear = year.trim() || "ano informado";
  const currentRevenue = parseCurrencyInput(revenue);
  const result = useMemo(() => calculateRemainingRevenue(type, openingMonth, currentRevenue), [type, openingMonth, currentRevenue]);
  const exceeded = result.remainingRevenue < 0;
  const status = getUsageStatus(result.usagePercentage, exceeded);

  return (
    <Container className="py-10">
      <Breadcrumbs items={[{ label: "Calculadora de limite MEI" }]} />
      <h1 className="text-3xl font-black text-slate-950">Calculadora de Limite MEI</h1>
      <p className="mt-3 max-w-3xl leading-7 text-slate-600">
        Informe o mês de abertura e o faturamento acumulado para estimar o limite proporcional do ano. Os dados ficam no seu navegador e não são
        enviados para servidor.
      </p>
      <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <section className="rounded-2xl border border-slate-200 bg-white p-5">
          <div className="grid gap-4">
            <label>
              Ano de referência
              <input value={year} onChange={(e) => setYear(e.target.value)} inputMode="numeric" placeholder="Ex.: 2026" />
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
              Faturamento atual em {referenceYear}
              <input value={revenue} onChange={(e) => setRevenue(e.target.value)} placeholder="Ex.: 35.000,00" inputMode="decimal" />
              {!revenue.trim() ? <span className="text-xs font-medium text-slate-500">Campo vazio será considerado como R$ 0,00.</span> : null}
            </label>
            <label>
              Tipo de MEI
              <select value={type} onChange={(e) => setType(e.target.value as MeiType)}>
                <option value="comum">MEI comum</option>
                <option value="caminhoneiro">MEI Caminhoneiro / Transportador Autônomo de Cargas</option>
              </select>
            </label>
          </div>
        </section>
        <section className="grid gap-4">
          <AlertBox type={status}>
            {exceeded
              ? "Você pode ter ultrapassado o limite. Procure um contador ou canal oficial antes de tomar decisões."
              : status === "success"
                ? "Você usou menos de 70% do limite estimado."
                : status === "warning"
                  ? "Atenção: você está entre 70% e 90% do limite."
                  : "Cuidado: você já passou de 90% do limite estimado."}
          </AlertBox>
          <div className="grid gap-4 sm:grid-cols-2">
            <ResultCard title="Meses ativos no ano" value={`${result.activeMonths} meses`} tone="slate" />
            <ResultCard title="Limite proporcional" value={formatCurrency(result.proportionalLimit)} tone="green" />
            <ResultCard title="Faturamento informado" value={formatCurrency(result.currentRevenue)} tone="slate" />
            <ResultCard title={exceeded ? "Valor acima do limite" : "Quanto ainda pode faturar"} value={formatCurrency(Math.abs(result.remainingRevenue))} tone={exceeded ? "slate" : "green"} />
            <ResultCard title="Percentual usado" value={formatPercent(result.usagePercentage)} />
            <ResultCard title="Média máxima mensal restante" value={formatCurrency(result.monthlyRemainingLimit)} />
          </div>
          <AlertBox type="info">{independenceNotice} Cálculo informativo; confira fontes oficiais quando estiver perto do limite.</AlertBox>
          <AdPlaceholder />
        </section>
      </div>
      <article className="prose-mei mt-12">
        <h2>Como funciona o limite anual</h2>
        <p>O limite do MEI comum costuma ser tratado por ano-calendário. Para quem abriu o MEI em janeiro, considera-se o ano completo.</p>
        <h2>Limite proporcional</h2>
        <p>Se o MEI foi aberto no meio do ano, o cálculo informativo usa os meses ativos até dezembro. Junho a dezembro, por exemplo, soma 7 meses.</p>
        <h2>Como usar o resultado</h2>
        <p>
          Use o valor restante como alerta de organização. Se o faturamento real estiver muito perto do limite, confira notas emitidas, recebimentos,
          vendas sem nota e orientação profissional antes de tomar decisões.
        </p>
      </article>
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <FAQ items={faqs} />
        <SourceBox />
      </div>
      <section className="mt-10 grid gap-4 md:grid-cols-3">
        <InternalLinkCard href="/calculadora-faturamento-mei" title="Projetar faturamento" text="Veja se a média mensal pode estourar o limite." />
        <InternalLinkCard href="/guias/mei-abriu-no-meio-do-ano-quanto-pode-faturar" title="Abriu no meio do ano?" text="Entenda a regra proporcional com exemplos simples." />
        <InternalLinkCard href="/guias/mei-estourou-o-limite-o-que-fazer" title="Passou do limite?" text="Veja cuidados antes de tomar decisões." />
      </section>
    </Container>
  );
}
