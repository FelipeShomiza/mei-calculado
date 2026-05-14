"use client";

import { AdPlaceholder } from "@/components/AdPlaceholder";
import { AlertBox } from "@/components/AlertBox";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/Container";
import { FAQ } from "@/components/FAQ";
import { InternalLinkCard } from "@/components/InternalLinkCard";
import { ResultCard } from "@/components/ResultCard";
import { StructuredData, breadcrumbSchema, faqSchema, webApplicationSchema } from "@/components/StructuredData";
import { ActivityType, MeiType, meiConfig } from "@/data/meiConfig";
import { seoKeywords } from "@/data/seoKeywords";
import { calculateDasValue } from "@/lib/meiCalculations";
import { formatCurrency } from "@/utils/formatters";
import Link from "next/link";
import { useMemo, useState } from "react";

const independenceNotice =
  "O MEI Calculado é um site independente e não possui vínculo com o Governo Federal, Receita Federal, Portal do Empreendedor ou Sebrae.";

const faqs = [
  { question: "O DAS muda todo ano?", answer: "Pode mudar. Por isso os valores devem ser revisados anualmente em fontes oficiais." },
  { question: "Este valor é oficial?", answer: "Não. É uma estimativa configurada no site para facilitar a consulta." },
  { question: "O que compõe o DAS?", answer: "Em geral, envolve contribuição previdenciária e impostos conforme a atividade, como ISS ou ICMS quando aplicável." }
];

export default function DasMeiPage() {
  const [type, setType] = useState<MeiType>("comum");
  const [activity, setActivity] = useState<ActivityType>("comercio");
  const value = useMemo(() => calculateDasValue(type, activity), [type, activity]);

  return (
    <Container className="py-10">
      <StructuredData
        data={[
          breadcrumbSchema([
            { path: "/", name: "Início" },
            { path: "/calculadora-das-mei", name: "Calculadora DAS MEI" }
          ]),
          faqSchema(faqs),
          webApplicationSchema({
            name: "Calculadora DAS MEI 2026",
            path: seoKeywords.das.path,
            description: seoKeywords.das.description
          })
        ]}
      />
      <Breadcrumbs items={[{ label: "Calculadora DAS MEI" }]} />
      <h1 className="text-3xl font-black text-slate-950">Calculadora DAS MEI 2026</h1>
      <p className="mt-3 max-w-3xl leading-7 text-slate-600">
        Veja uma estimativa mensal do DAS conforme o tipo de MEI e a atividade informada. A consulta acontece apenas no navegador.
      </p>
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
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
              Atividade
              <select value={activity} onChange={(e) => setActivity(e.target.value as ActivityType)}>
                <option value="comercio">Comércio/Indústria</option>
                <option value="servicos">Serviços</option>
                <option value="comercio-servicos">Comércio e Serviços</option>
              </select>
            </label>
          </div>
        </section>
        <section className="grid gap-4">
          <ResultCard title="Valor estimado mensal" value={formatCurrency(value)} tone="green">
            Valores DAS {meiConfig.dasYear} revisados manualmente no projeto.
          </ResultCard>
          <AlertBox type="warning">O DAS pode mudar. Confira sempre canais oficiais antes de pagar ou tomar decisões.</AlertBox>
          <AlertBox type="info">{independenceNotice}</AlertBox>
          <AdPlaceholder />
        </section>
      </div>
      <article className="prose-mei mt-10">
        <h2>O que compõe o DAS</h2>
        <p>
          O DAS é a guia mensal do MEI. A composição pode envolver contribuição ao INSS e tributos como ICMS ou ISS, conforme a atividade exercida.
        </p>
        <h2>Diferença entre comércio, serviços e atividade mista</h2>
        <p>
          MEI de comércio ou indústria costuma ter composição diferente de MEI de serviços. Quem exerce comércio e serviços no mesmo CNPJ pode ter uma
          estimativa mista. Por isso a calculadora separa DAS MEI comércio, DAS MEI serviços e comércio + serviços.
        </p>
        <h2>Por que o valor DAS MEI muda</h2>
        <p>
          O valor mensal pode mudar por ano, salário mínimo, atividade e regras vigentes. Confira também o guia{" "}
          <Link href="/guias/quanto-o-mei-paga-por-mes" className="font-bold text-blue-700 underline">
            quanto o MEI paga por mês
          </Link>{" "}
          para entender a contribuição mensal MEI em linguagem simples.
        </p>
        <h2>Como usar a estimativa</h2>
        <p>
          Use o valor como referência de organização financeira. Antes de pagar, atrasar ou regularizar guias, confira a informação no canal oficial
          de emissão do DAS ou com orientação profissional. Se quiser entender o termo, leia{" "}
          <Link href="/guias/o-que-e-das-mei" className="font-bold text-blue-700 underline">
            o que é DAS MEI
          </Link>
          .
        </p>
      </article>
      <div className="mt-8">
        <h2 className="mb-5 text-2xl font-black text-slate-950">Perguntas frequentes sobre DAS MEI</h2>
        <FAQ items={faqs} />
      </div>
      <section className="mt-10 grid gap-4 md:grid-cols-3">
        <InternalLinkCard href="/guias/o-que-e-das-mei" title="O que é DAS?" text="Entenda a guia mensal em linguagem simples." />
        <InternalLinkCard href="/guias/quanto-o-mei-paga-por-mes" title="Quanto o MEI paga?" text="Veja cuidados sobre o pagamento mensal." />
        <InternalLinkCard href="/calculadora-limite-mei" title="Calcular limite" text="Confira o limite proporcional do seu MEI." />
      </section>
    </Container>
  );
}
