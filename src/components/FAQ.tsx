export type FAQItem = {
  question: string;
  answer: string;
};

export function FAQ({ items }: { items: FAQItem[] }) {
  return (
    <section className="grid gap-3">
      {items.map((item) => (
        <details key={item.question} className="rounded-2xl border border-slate-200 bg-white p-4">
          <summary className="cursor-pointer font-black text-slate-900">{item.question}</summary>
          <p className="mt-3 text-sm leading-6 text-slate-600">{item.answer}</p>
        </details>
      ))}
    </section>
  );
}
