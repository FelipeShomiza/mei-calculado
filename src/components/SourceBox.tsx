import { officialSources } from "@/data/meiConfig";

export function SourceBox() {
  return (
    <aside className="rounded-2xl border border-green-200 bg-green-50 p-5">
      <h2 className="text-lg font-black text-green-950">Fontes oficiais para conferir</h2>
      <p className="mt-2 text-sm leading-6 text-green-950">
        Use estes links para validar regras, valores e obrigações antes de tomar decisões.
      </p>
      <div className="mt-4 grid gap-2 text-sm font-bold text-green-900">
        {officialSources.map((source) => (
          <a key={source.url} href={source.url} target="_blank" rel="noreferrer" className="underline">
            {source.label}
          </a>
        ))}
      </div>
    </aside>
  );
}
