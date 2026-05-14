"use client";

import { AlertBox } from "@/components/AlertBox";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { InternalLinkCard } from "@/components/InternalLinkCard";
import { ResultCard } from "@/components/ResultCard";
import { StructuredData, breadcrumbSchema, webApplicationSchema } from "@/components/StructuredData";
import { months } from "@/data/meiConfig";
import { seoKeywords } from "@/data/seoKeywords";
import { formatCurrency, parseCurrencyInput } from "@/utils/formatters";
import Link from "next/link";
import { useMemo, useState } from "react";

const independenceNotice =
  "O MEI Calculado é um site independente e não possui vínculo com o Governo Federal, Receita Federal, Portal do Empreendedor ou Sebrae.";

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
    () =>
      `Relatório mensal MEI - ${months[month - 1]} de ${year || "ano informado"}\nReceita com nota fiscal: ${formatCurrency(parseCurrencyInput(invoiceRevenue))}\nReceita sem nota fiscal: ${formatCurrency(parseCurrencyInput(noInvoiceRevenue))}\nReceita total: ${formatCurrency(totalRevenue)}\nDespesas: ${formatCurrency(totalExpenses)}\nSaldo estimado: ${formatCurrency(balance)}\nObservações: ${notes || "Sem observações."}`,
    [month, year, invoiceRevenue, noInvoiceRevenue, totalRevenue, totalExpenses, balance, notes]
  );

  return (
    <Container className="py-10">
      <StructuredData
        data={[
          breadcrumbSchema([
            { path: "/", name: "Início" },
            { path: "/relatorio-mensal-mei", name: "Relatório mensal MEI" }
          ]),
          webApplicationSchema({
            name: "Relatório Mensal MEI",
            path: seoKeywords.relatorio.path,
            description: seoKeywords.relatorio.description
          })
        ]}
      />
      <Breadcrumbs items={[{ label: "Relatório mensal MEI" }]} />
      <h1 className="text-3xl font-black text-slate-950">Relatório mensal MEI para controle de receitas</h1>
      <p className="mt-3 max-w-3xl leading-7 text-slate-600">
        Monte um resumo mensal simples para controle próprio. Nada é salvo em servidor; o texto é gerado no seu navegador.
      </p>
      <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <section className="rounded-2xl border border-slate-200 bg-white p-5">
          <div className="grid gap-4">
            <label>
              Mês
              <select value={month} onChange={(e) => setMonth(Number(e.target.value))}>
                {months.map((m, i) => (
                  <option key={m} value={i + 1}>
                    {m}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Ano
              <input value={year} onChange={(e) => setYear(e.target.value)} inputMode="numeric" placeholder="Ex.: 2026" />
            </label>
            <label>
              Receita com nota fiscal
              <input value={invoiceRevenue} onChange={(e) => setInvoiceRevenue(e.target.value)} placeholder="Ex.: 5.000,00" inputMode="decimal" />
              {!invoiceRevenue.trim() ? <span className="text-xs font-medium text-slate-500">Campo vazio será considerado como R$ 0,00.</span> : null}
            </label>
            <label>
              Receita sem nota fiscal
              <input value={noInvoiceRevenue} onChange={(e) => setNoInvoiceRevenue(e.target.value)} placeholder="Ex.: 1.500,00" inputMode="decimal" />
              {!noInvoiceRevenue.trim() ? <span className="text-xs font-medium text-slate-500">Campo vazio será considerado como R$ 0,00.</span> : null}
            </label>
            <label>
              Despesas opcionais
              <input value={expenses} onChange={(e) => setExpenses(e.target.value)} placeholder="Ex.: 900,00" inputMode="decimal" />
              {!expenses.trim() ? <span className="text-xs font-medium text-slate-500">Campo vazio será considerado como R$ 0,00.</span> : null}
            </label>
            <label>
              Observações opcionais
              <textarea value={notes} onChange={(e) => setNotes(e.target.value)} rows={4} />
            </label>
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
            <Button variant="secondary" onClick={() => window.print()}>
              Imprimir relatório
            </Button>
          </div>
          <AlertBox type="info">{independenceNotice} O relatório é apenas um controle auxiliar e não substitui obrigações oficiais.</AlertBox>
        </section>
      </div>
      <article className="prose-mei mt-10">
        <h2>Quando usar o relatório mensal MEI</h2>
        <p>
          Use este modelo de relatório mensal MEI para organizar receita com nota, receita sem nota, despesas e observações do mês. Ele ajuda no
          controle mensal MEI, mas não substitui relatórios oficiais quando eles forem exigidos.
        </p>
        <h2>Como relacionar com o limite de faturamento</h2>
        <p>
          Depois de somar a receita mensal MEI, use a{" "}
          <Link href="/calculadora-limite-mei" className="font-bold text-blue-700 underline">
            calculadora limite MEI
          </Link>{" "}
          para comparar o faturamento acumulado com o limite proporcional.
        </p>
      </article>
      <section className="mt-10 grid gap-4 md:grid-cols-3">
        <InternalLinkCard href="/calculadora-limite-mei" title="Comparar com limite" text="Use o faturamento acumulado para acompanhar o limite." />
        <InternalLinkCard href="/guias/mei-precisa-emitir-nota-fiscal" title="Nota fiscal" text="Veja cuidados básicos sobre emissão de nota." />
        <InternalLinkCard href="/guias/mei-pode-vender-online" title="Venda online" text="Entenda como registrar vendas pela internet." />
      </section>
    </Container>
  );
}
