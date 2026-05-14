import Link from "next/link";
import { AdPlaceholder } from "./AdPlaceholder";
import { AlertBox } from "./AlertBox";
import { Breadcrumbs } from "./Breadcrumbs";
import { Container } from "./Container";
import { FAQ, FAQItem } from "./FAQ";
import { InternalLinkCard } from "./InternalLinkCard";
import { SourceBox } from "./SourceBox";
import { StructuredData, breadcrumbSchema, faqSchema } from "./StructuredData";

export type GuidePageProps = {
  title: string;
  intro: string;
  sections: { heading: string; text: string }[];
  faq: FAQItem[];
  relatedLinks?: { href: string; label: string }[];
};

const independenceNotice =
  "O MEI Calculado é um site independente e não possui vínculo com o Governo Federal, Receita Federal, Portal do Empreendedor ou Sebrae.";

export function GuidePage({ title, intro, sections, faq, relatedLinks = [], path }: GuidePageProps & { path: string }) {
  return (
    <Container className="py-10">
      <StructuredData
        data={[
          breadcrumbSchema([
            { path: "/", name: "Início" },
            { path: "/guias", name: "Guias" },
            { path, name: title }
          ]),
          faqSchema(faq)
        ]}
      />
      <Breadcrumbs items={[{ href: "/guias", label: "Guias" }, { label: title }]} />
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
        {sections.slice(0, 2).map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            <p>{section.text}</p>
          </section>
        ))}
        <AdPlaceholder />
        {sections.slice(2).map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            <p>{section.text}</p>
          </section>
        ))}
        {relatedLinks.length ? (
          <section>
            <h2>Quando usar as calculadoras</h2>
            <p>
              Para transformar essa explicação em uma estimativa, veja também{" "}
              {relatedLinks.map((link, index) => (
                <span key={link.href}>
                  <Link href={link.href} className="font-bold text-blue-700 underline">
                    {link.label}
                  </Link>
                  {index < relatedLinks.length - 2 ? ", " : index === relatedLinks.length - 2 ? " e " : "."}
                </span>
              ))}
            </p>
          </section>
        ) : null}
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
        <section>
          <h2 className="mb-5 text-2xl font-black text-slate-950">Perguntas frequentes</h2>
          <FAQ items={faq} />
        </section>
        <SourceBox />
      </div>
      <div className="mt-8">
        <AlertBox type="info">{independenceNotice} Conteúdo informativo. Consulte fontes oficiais, contador ou Sebrae para confirmar regras aplicáveis ao seu caso.</AlertBox>
      </div>
    </Container>
  );
}
