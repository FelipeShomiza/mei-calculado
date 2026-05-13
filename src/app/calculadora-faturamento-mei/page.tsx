"use client";

import { AdPlaceholder } from "@/components/AdPlaceholder";
import { AlertBox } from "@/components/AlertBox";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/Container";
import { InternalLinkCard } from "@/components/InternalLinkCard";
import { ResultCard } from "@/components/ResultCard";
import { MeiType, months } from "@/data/meiConfig";
import { calculateRevenueProjection } from "@/lib/meiCalculations";
import { formatCurrency, parseCurrencyInput } from "@/utils/formatters";
import { useMemo, useState } from "react";

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
      <Breadcrumbs items={[{ href: "/calculadora-faturamento-mei", label: "Calculadora de faturamento MEI" }]} />
      <h1 className="text-3xl font-black text-slate-950">Calculadora de Faturamento MEI</h1>
      <p className="mt-3 max-w-3xl leading-7 text-slate-600">Simule o faturamento de agora até dezembro e veja se a projeção fica dentro do limite proporcional.</p>
      <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <section className="rounded-2xl border border-slate-200 bg-white p-5">
          <div className="grid gap-4">
            <label>Tipo de MEI<select value={type} onChange={(e) => setType(e.target.value as MeiType)}><option value="comum">MEI comum</option><option value="caminhoneiro">MEI Caminhoneiro</option></select></label>
            <label>Mês de abertura<select value={openingMonth} onChange={(e) => setOpeningMonth(Number(e.target.value))}>{months.map((m, i) => <option key={m} value={i + 1}>{m}</option>)}</select></label>
            <label>Mês atual<select value={currentMonth} onChange={(e) => setCurrentMonth(Number(e.target.value))}>{months.map((m, i) => <option key={m} value={i + 1}>{m}</option>)}</select></label>
            <label>Faturamento já acumulado<input value={accumulated} onChange={(e) => setAccumulated(e.target.value)} placeholder="Ex.: 42.000,00" inputMode="decimal" /></label>
            <label>Média esperada por mês, de agora até dezembro<input value={average} onChange={(e) => setAverage(e.target.value)} placeholder="Ex.: 6.000,00" inputMode="decimal" /></label>
          </div>
        </section>
        <section className="grid gap-4">
          <AlertBox type={result.status === "acima" ? "danger" : result.status === "perto" ? "warning" : "success"}>
            {result.status === "acima" ? "A projeção ficou acima do limite. Confira com um contador ou fonte oficial." : result.status === "perto" ? "A projeção está perto do limite. Acompanhe o faturamento com atenção." : "A projeção está dentro do limite estimado."}
          </AlertBox>
          <div className="grid gap-4 sm:grid-cols-2">
            <ResultCard title="Limite proporcional" value={formatCurrency(result.proportionalLimit)} tone="green" />
            <ResultCard title="Faturamento projetado" value={formatCurrency(result.projectedRevenue)} />
            <ResultCard title={result.difference < 0 ? "Valor acima do limite" : "Diferença para o limite"} value={formatCurrency(Math.abs(result.difference))} tone={result.difference < 0 ? "slate" : "green"} />
            <ResultCard title="Média mensal possível" value={formatCurrency(result.allowedMonthlyRevenue)} />
          </div>
          <AdPlaceholder />
        </section>
      </div>
      <section className="mt-10 grid gap-4 md:grid-cols-3">
        <InternalLinkCard href="/calculadora-limite-mei" title="Calcular limite exato" text="Confira meses ativos, percentual usado e saldo restante." />
        <InternalLinkCard href="/relatorio-mensal-mei" title="Organizar o mês" text="Monte um resumo mensal de receitas e despesas." />
        <InternalLinkCard href="/guias/qual-o-limite-do-mei" title="Entender o limite" text="Veja como funciona o limite anual e proporcional." />
      </section>
    </Container>
  );
}
