"use client";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { InternalLinkCard } from "@/components/InternalLinkCard";
import { ResultCard } from "@/components/ResultCard";
import { months } from "@/data/meiConfig";
import { formatCurrency, parseCurrencyInput } from "@/utils/formatters";
import { useMemo, useState } from "react";

export default function RelatorioMensalPage() {
  const [month, setMonth] = useState(1);
  const [year, setYear] = useState(String(new Date().getFullYear()));
  const [invoiceRevenue, setInvoiceRevenue] = useState("");
  const [noInvoiceRevenue, setNoInvoiceRevenue] = useState("");
  const [expenses, setExpenses] = useState("");
  const [notes, setNotes] = useState("");
  const totalRevenue = parseCurrencyInput(invoiceRevenue) + parseCurrencyInput(noInvoiceRevenue);
  const totalExpenses = parseCurrencyInput(expenses);
  const balance = totalRevenue - totalExpenses;
  const summary = useMemo(
    () => `Relatório mensal MEI - ${months[month - 1]} de ${year}\nReceita com nota fiscal: ${formatCurrency(parseCurrencyInput(invoiceRevenue))}\nReceita sem nota fiscal: ${formatCurrency(parseCurrencyInput(noInvoiceRevenue))}\nReceita total: ${formatCurrency(totalRevenue)}\nDespesas: ${formatCurrency(totalExpenses)}\nSaldo estimado: ${formatCurrency(balance)}\nObservações: ${notes || "Sem observações."}`,
    [month, year, invoiceRevenue, noInvoiceRevenue, totalRevenue, totalExpenses, balance, notes]
  );

  return (
    <Container className="py-10">
      <Breadcrumbs items={[{ href: "/relatorio-mensal-mei", label: "Relatório mensal MEI" }]} />
      <h1 className="text-3xl font-black text-slate-950">Relatório Mensal MEI</h1>
      <p className="mt-3 max-w-3xl leading-7 text-slate-600">Monte um resumo mensal simples para controle próprio. Nada é salvo em servidor.</p>
      <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <section className="rounded-2xl border border-slate-200 bg-white p-5">
          <div className="grid gap-4">
            <label>Mês<select value={month} onChange={(e) => setMonth(Number(e.target.value))}>{months.map((m, i) => <option key={m} value={i + 1}>{m}</option>)}</select></label>
            <label>Ano<input value={year} onChange={(e) => setYear(e.target.value)} inputMode="numeric" /></label>
            <label>Receita com nota fiscal<input value={invoiceRevenue} onChange={(e) => setInvoiceRevenue(e.target.value)} placeholder="Ex.: 5.000,00" inputMode="decimal" /></label>
            <label>Receita sem nota fiscal<input value={noInvoiceRevenue} onChange={(e) => setNoInvoiceRevenue(e.target.value)} placeholder="Ex.: 1.500,00" inputMode="decimal" /></label>
            <label>Despesas opcionais<input value={expenses} onChange={(e) => setExpenses(e.target.value)} placeholder="Ex.: 900,00" inputMode="decimal" /></label>
            <label>Observações opcionais<textarea value={notes} onChange={(e) => setNotes(e.target.value)} rows={4} /></label>
          </div>
        </section>
        <section className="grid gap-4">
          <div className="grid gap-4 sm:grid-cols-3">
            <ResultCard title="Receita total" value={formatCurrency(totalRevenue)} tone="green" />
            <ResultCard title="Despesas totais" value={formatCurrency(totalExpenses)} />
            <ResultCard title="Saldo estimado" value={formatCurrency(balance)} tone={balance >= 0 ? "green" : "slate"} />
          </div>
          <textarea className="min-h-64 font-mono text-sm" readOnly value={summary} />
          <div className="flex flex-wrap gap-3">
            <Button onClick={() => navigator.clipboard?.writeText(summary)}>Copiar resumo</Button>
            <Button variant="secondary" onClick={() => window.print()}>Imprimir relatório</Button>
          </div>
        </section>
      </div>
      <section className="mt-10 grid gap-4 md:grid-cols-3">
        <InternalLinkCard href="/calculadora-limite-mei" title="Comparar com limite" text="Use o faturamento acumulado para acompanhar o limite." />
        <InternalLinkCard href="/guias/mei-precisa-emitir-nota-fiscal" title="Nota fiscal" text="Veja cuidados básicos sobre emissão de nota." />
        <InternalLinkCard href="/guias/mei-pode-vender-online" title="Venda online" text="Entenda como registrar vendas pela internet." />
      </section>
    </Container>
  );
}
