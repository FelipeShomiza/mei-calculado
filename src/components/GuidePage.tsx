import { AdPlaceholder } from "./AdPlaceholder";
import { AlertBox } from "./AlertBox";
import { Breadcrumbs } from "./Breadcrumbs";
import { Container } from "./Container";
import { FAQ, FAQItem } from "./FAQ";
import { InternalLinkCard } from "./InternalLinkCard";
import { SourceBox } from "./SourceBox";

export type GuidePageProps = {
  title: string;
  intro: string;
  sections: { heading: string; text: string }[];
  faq: FAQItem[];
};

export function GuidePage({ title, intro, sections, faq }: GuidePageProps) {
  return (
    <Container className="py-10">
      <Breadcrumbs items={[{ href: "/guias/qual-o-limite-do-mei", label: "Guias" }]} />
      <article className="prose-mei max-w-3xl">
        <h1 className="text-3xl font-black leading-tight text-slate-950">{title}</h1>
        <p className="mt-4 text-lg leading-8 text-slate-600">{intro}</p>
        <div className="my-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="mt-0 text-lg font-black text-slate-950">Sumário</h2>
          <ul>
            {sections.map((section) => (
              <li key={section.heading}>{section.heading}</li>
            ))}
          </ul>
        </div>
        {sections.slice(0, 1).map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            <p>{section.text}</p>
          </section>
        ))}
        <AdPlaceholder />
        {sections.slice(1).map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            <p>{section.text}</p>
          </section>
        ))}
      </article>
      <section className="mt-10 grid gap-4 md:grid-cols-3">
        <InternalLinkCard href="/calculadora-limite-mei" title="Calculadora de limite" text="Calcule o limite proporcional do MEI." />
        <InternalLinkCard href="/calculadora-faturamento-mei" title="Projeção de faturamento" text="Simule o faturamento até dezembro." />
        <InternalLinkCard href="/calculadora-das-mei" title="DAS MEI" text="Veja o valor estimado mensal." />
      </section>
      <section className="mt-8 grid gap-4 md:grid-cols-2">
        <InternalLinkCard href="/relatorio-mensal-mei" title="Relatório mensal" text="Organize receitas, despesas e observações do mês." />
        <InternalLinkCard href="/guias/mei-estourou-o-limite-o-que-fazer" title="Passou do limite?" text="Veja cuidados e próximos passos antes de decidir." />
      </section>
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <FAQ items={faq} />
        <SourceBox />
      </div>
      <div className="mt-8">
        <AlertBox type="info">Conteúdo informativo. Consulte fontes oficiais, contador ou Sebrae para confirmar regras aplicáveis ao seu caso.</AlertBox>
      </div>
    </Container>
  );
}
