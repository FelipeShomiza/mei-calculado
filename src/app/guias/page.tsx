import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/Container";
import { InternalLinkCard } from "@/components/InternalLinkCard";
import { guides } from "@/data/guides";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guias para MEI",
  description: "Veja guias simples sobre limite MEI, DAS, nota fiscal, venda online, MEI Caminhoneiro e organização mensal."
};

export default function GuiasPage() {
  return (
    <Container className="py-10">
      <Breadcrumbs items={[{ label: "Guias para MEI" }]} />
      <h1 className="text-3xl font-black text-slate-950">Guias para MEI</h1>
      <p className="mt-3 max-w-3xl leading-7 text-slate-600">
        Conteúdos práticos para entender limites, DAS, nota fiscal, venda online e organização mensal. Tudo é informativo e deve ser conferido em
        fontes oficiais quando houver decisão importante.
      </p>
      <section className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {Object.entries(guides).map(([slug, guide]) => (
          <InternalLinkCard key={slug} href={`/guias/${slug}`} title={guide.title} text={guide.description} />
        ))}
      </section>
    </Container>
  );
}
