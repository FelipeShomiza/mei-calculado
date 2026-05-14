import { Breadcrumbs } from "./Breadcrumbs";
import { Container } from "./Container";
import { StructuredData, breadcrumbSchema } from "./StructuredData";

export function SimplePage({ title, children, path }: { title: string; children: React.ReactNode; path?: string }) {
  return (
    <Container className="py-10">
      {path ? (
        <StructuredData
          data={breadcrumbSchema([
            { path: "/", name: "Início" },
            { path, name: title }
          ])}
        />
      ) : null}
      <Breadcrumbs items={[{ label: title }]} />
      <article className="prose-mei max-w-3xl rounded-2xl border border-slate-200 bg-white p-6">
        <h1 className="text-3xl font-black text-slate-950">{title}</h1>
        {children}
      </article>
    </Container>
  );
}
