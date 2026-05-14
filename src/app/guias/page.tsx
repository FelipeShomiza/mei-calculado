import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/Container";
import { InternalLinkCard } from "@/components/InternalLinkCard";
import { StructuredData, breadcrumbSchema } from "@/components/StructuredData";
import { guides } from "@/data/guides";
import { canonicalUrl, defaultOpenGraphImage, seoKeywords } from "@/data/seoKeywords";
import { Metadata } from "next";

const seo = seoKeywords.guias;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: [seo.primaryKeyword, ...seo.secondaryKeywords],
  alternates: {
    canonical: canonicalUrl(seo.path)
  },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: canonicalUrl(seo.path),
    images: [defaultOpenGraphImage]
  }
};

export default function GuiasPage() {
  return (
    <Container className="py-10">
      <StructuredData
        data={breadcrumbSchema([
          { path: "/", name: "Início" },
          { path: "/guias", name: "Guias" }
        ])}
      />
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
