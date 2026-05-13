import Link from "next/link";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <Container className="grid gap-8 py-10 md:grid-cols-[1.2fr_0.8fr_1fr]">
        <div>
          <p className="font-black text-blue-800">MEI Calculado</p>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Projeto independente com calculadoras informativas para MEI. Não é site oficial do governo.
          </p>
        </div>
        <div className="grid gap-2 text-sm font-bold text-slate-600">
          <Link className="hover:text-blue-700" href="/sobre">Sobre</Link>
          <Link className="hover:text-blue-700" href="/contato">Contato</Link>
          <Link className="hover:text-blue-700" href="/politica-de-privacidade">Privacidade</Link>
          <Link className="hover:text-blue-700" href="/termos-de-uso">Termos de uso</Link>
        </div>
        <p className="text-sm leading-6 text-slate-600">
          Confira sempre fontes oficiais e procure contador, Sebrae ou canais da Receita Federal antes de tomar decisões importantes.
        </p>
      </Container>
    </footer>
  );
}
