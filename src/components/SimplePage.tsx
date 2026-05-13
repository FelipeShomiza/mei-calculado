import { Breadcrumbs } from "./Breadcrumbs";
import { Container } from "./Container";

export function SimplePage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Container className="py-10">
      <Breadcrumbs items={[{ label: title }]} />
      <article className="prose-mei max-w-3xl rounded-2xl border border-slate-200 bg-white p-6">
        <h1 className="text-3xl font-black text-slate-950">{title}</h1>
        {children}
      </article>
    </Container>
  );
}
