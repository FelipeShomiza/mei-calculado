import { GuidePageProps } from "@/components/GuidePage";
import { meiConfig } from "@/data/meiConfig";

const currentYear = new Date().getFullYear();
const currencyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL"
});
const commonAnnualLimit = currencyFormatter.format(meiConfig.common.annualLimit);
const truckerAnnualLimit = currencyFormatter.format(meiConfig.trucker.annualLimit);

export const guides: Record<string, GuidePageProps & { description: string }> = {
  "qual-o-limite-do-mei": {
    title: "Qual o limite do MEI?",
    description: "Entenda o limite anual do MEI e quando usar o limite proporcional.",
    intro: "O limite do MEI depende do tipo de MEI e do tempo de atividade no ano.",
    sections: [
      { heading: "Limite anual", text: `No ano atual (${currentYear}), a calculadora usa como referência o limite anual de ${commonAnnualLimit} para MEI comum, conforme informado pelo Portal do Empreendedor/Gov.br. O MEI Caminhoneiro usa limite diferente.` },
      { heading: "Quando o limite é proporcional", text: "Se a abertura ocorreu no meio do ano, a estimativa usa os meses ativos até dezembro." },
      { heading: "Cuidados", text: "Valores e regras podem mudar. Confirme sempre em canais oficiais antes de tomar decisões." }
    ],
    faq: [
      { question: "O limite é sempre anual?", answer: "Normalmente sim, mas quem abre no meio do ano deve observar a proporcionalidade." },
      { question: "MEI Caminhoneiro tem outro limite?", answer: "Sim, este site separa MEI comum e MEI Caminhoneiro." },
      { question: "A calculadora é oficial?", answer: "Não. É uma ferramenta independente e informativa." }
    ]
  },
  "mei-abriu-no-meio-do-ano-quanto-pode-faturar": {
    title: "MEI abriu no meio do ano: quanto pode faturar?",
    description: "Veja como calcular o limite proporcional quando o MEI abre depois de janeiro.",
    intro: "Quem abriu o MEI depois de janeiro deve estimar o limite pelos meses ativos no ano.",
    sections: [
      { heading: "Como contar os meses", text: "Conte do mês de abertura até dezembro. Se abriu em junho, são 7 meses ativos." },
      { heading: "Cálculo simples", text: "Multiplique os meses ativos pelo limite mensal proporcional da categoria do MEI." },
      { heading: "Exemplo", text: "MEI comum aberto em julho usa 6 meses multiplicados por R$ 6.750,00." }
    ],
    faq: [
      { question: "Janeiro conta?", answer: "Sim. Abertura em janeiro considera 12 meses." },
      { question: "Dezembro conta?", answer: "Sim. Abertura em dezembro considera 1 mês." },
      { question: "Preciso confirmar?", answer: "Sim, especialmente se estiver perto do limite." }
    ]
  },
  "mei-estourou-o-limite-o-que-fazer": {
    title: "MEI estourou o limite: o que fazer?",
    description: "Entenda os cuidados quando o faturamento do MEI passa do limite.",
    intro: "Passar do limite pode ter consequências fiscais. Evite agir com base apenas em simulações.",
    sections: [
      { heading: "Primeiro passo", text: "Organize seu faturamento real, notas emitidas e receitas recebidas para entender o tamanho da diferença." },
      { heading: "Procure orientação", text: "Fale com contador, Sebrae ou canal oficial para verificar enquadramento, impostos e próximos passos." },
      { heading: "Use calculadoras como apoio", text: "As ferramentas ajudam a estimar, mas não substituem análise contábil." }
    ],
    faq: [
      { question: "Posso ignorar se passou pouco?", answer: "Não é recomendado. Confirme a regra aplicável ao seu caso." },
      { question: "Preciso de contador?", answer: "Em situações de estouro de limite, é uma decisão prudente." },
      { question: "O site calcula multa?", answer: "Não. O foco aqui é estimativa de limite e faturamento." }
    ]
  },
  "mei-precisa-emitir-nota-fiscal": {
    title: "MEI precisa emitir nota fiscal?",
    description: "Guia simples sobre nota fiscal para MEI e cuidados importantes.",
    intro: "A obrigação de emitir nota pode depender de quem compra, da atividade e das regras locais.",
    sections: [
      { heading: "Venda para empresas", text: "Em muitos casos, a emissão para pessoa jurídica é exigida. Confirme a regra oficial." },
      { heading: "Venda para pessoa física", text: "Pode haver diferenças de obrigação conforme situação e município." },
      { heading: "Organização", text: "Mesmo quando não há nota, registrar receitas ajuda no relatório mensal e no controle do limite." }
    ],
    faq: [
      { question: "Nota conta no limite?", answer: "O limite considera faturamento, não apenas notas emitidas." },
      { question: "Regras são iguais no Brasil todo?", answer: "Algumas obrigações podem variar, principalmente em serviços municipais." },
      { question: "Onde confirmar?", answer: "Em canais oficiais, prefeitura, Receita Federal ou com contador." }
    ]
  },
  "mei-pode-vender-online": {
    title: "MEI pode vender online?",
    description: "Entenda cuidados básicos para MEI que vende pela internet.",
    intro: "O MEI pode atuar online quando a atividade é permitida e as obrigações são cumpridas.",
    sections: [
      { heading: "Atividade permitida", text: "Confira se a atividade exercida está adequada ao MEI antes de vender online." },
      { heading: "Controle de faturamento", text: "Vendas por marketplace, loja virtual e redes sociais também entram no faturamento." },
      { heading: "Notas e entregas", text: "Guarde registros e confirme regras de nota fiscal e envio de mercadorias." }
    ],
    faq: [
      { question: "Marketplace conta no limite?", answer: "Sim, vendas online fazem parte do faturamento." },
      { question: "Preciso de loja própria?", answer: "Não necessariamente." },
      { question: "Posso vender para fora do estado?", answer: "Pode haver regras fiscais específicas. Confirme antes." }
    ]
  },
  "quanto-o-mei-paga-por-mes": {
    title: "Quanto o MEI paga por mês?",
    description: "Veja como estimar o pagamento mensal do MEI pelo DAS.",
    intro: "O pagamento mensal do MEI é feito pelo DAS, cujo valor varia por atividade e pode mudar com o tempo.",
    sections: [
      { heading: "DAS mensal", text: "O DAS reúne valores ligados à contribuição previdenciária e a tributos conforme a atividade." },
      { heading: "Atividade importa", text: "Comércio, serviços e atividades mistas podem ter valores diferentes." },
      { heading: "Valores atualizáveis", text: "Revise os valores anualmente no arquivo central de configuração do projeto." }
    ],
    faq: [
      { question: "O valor é igual para todos?", answer: "Não. Depende da atividade e do tipo de MEI." },
      { question: "Posso atrasar?", answer: "Atrasos podem gerar encargos. Confira canais oficiais." },
      { question: "A calculadora mostra 2026?", answer: "Sim, com valores 2026 configurados manualmente." }
    ]
  },
  "o-que-e-das-mei": {
    title: "O que é DAS MEI?",
    description: "Entenda o que é a guia DAS do MEI em linguagem simples.",
    intro: "DAS é a guia mensal usada pelo MEI para pagar suas obrigações principais.",
    sections: [
      { heading: "Para que serve", text: "O pagamento ajuda a manter o MEI regular e inclui contribuições e impostos conforme a atividade." },
      { heading: "Valor estimado", text: "O valor pode variar por atividade e por ano. Use a calculadora apenas como apoio." },
      { heading: "Onde conferir", text: "Confirme sempre nos canais oficiais antes de pagar." }
    ],
    faq: [
      { question: "DAS é imposto?", answer: "Ele reúne obrigações mensais do MEI, incluindo tributos e contribuição, conforme o caso." },
      { question: "Tenho que pagar sem faturar?", answer: "Confirme a regra oficial para sua situação." },
      { question: "O site emite DAS?", answer: "Não. Apenas mostra uma estimativa." }
    ]
  },
  "mei-caminhoneiro-limite": {
    title: "MEI Caminhoneiro: qual o limite?",
    description: "Veja o limite usado para MEI Caminhoneiro e Transportador Autônomo de Cargas.",
    intro: "O MEI Caminhoneiro tem limite diferente do MEI comum e precisa ser calculado separadamente.",
    sections: [
      { heading: "Limite anual", text: `No ano atual (${currentYear}), a calculadora usa como referência o limite anual de ${truckerAnnualLimit} para MEI Caminhoneiro/Transportador Autônomo de Cargas, conforme informado pelo Portal do Empreendedor/Gov.br.` },
      { heading: "Limite proporcional", text: "Se a abertura foi no meio do ano, use os meses ativos multiplicados por R$ 20.966,67." },
      { heading: "Cuidados", text: "Confira se a atividade e o enquadramento estão corretos antes de usar o resultado." }
    ],
    faq: [
      { question: "É igual ao MEI comum?", answer: "Não. O limite do MEI Caminhoneiro é maior." },
      { question: "A regra proporcional também vale?", answer: "A estimativa proporcional usa os meses ativos no ano." },
      { question: "Onde confirmar?", answer: "Em fontes oficiais, Sebrae ou contador." }
    ]
  }
};
