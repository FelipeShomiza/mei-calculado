import { GuidePageProps } from "@/components/GuidePage";
import { meiConfig } from "@/data/meiConfig";

const currentYear = new Date().getFullYear();
const currencyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL"
});
const commonAnnualLimit = currencyFormatter.format(meiConfig.common.annualLimit);
const commonMonthlyLimit = currencyFormatter.format(meiConfig.common.monthlyLimit);
const truckerAnnualLimit = currencyFormatter.format(meiConfig.trucker.annualLimit);
const truckerMonthlyLimit = currencyFormatter.format(meiConfig.trucker.monthlyLimit);

export const guides: Record<string, GuidePageProps & { description: string }> = {
  "qual-o-limite-do-mei": {
    title: "Qual o limite do MEI em 2026?",
    description: "Entenda o limite anual do MEI, o limite proporcional e os cuidados antes de tomar decisões.",
    intro: "O limite do MEI depende do tipo de MEI, do tempo de atividade no ano e do faturamento real da empresa.",
    relatedLinks: [
      { href: "/calculadora-limite-mei", label: "a calculadora limite MEI" },
      { href: "/guias/mei-abriu-no-meio-do-ano-quanto-pode-faturar", label: "o guia de limite proporcional" }
    ],
    sections: [
      {
        heading: "Limite anual do MEI comum",
        text: `No ano atual (${currentYear}), este projeto usa como referência o limite anual de ${commonAnnualLimit} para MEI comum. Esse valor fica centralizado no projeto para revisão manual e deve ser conferido em fontes oficiais antes de decisões importantes.`
      },
      {
        heading: "Quando o limite é proporcional",
        text: `Quem abriu o MEI depois de janeiro não costuma usar o ano cheio como referência. A estimativa proporcional considera os meses ativos até dezembro e multiplica essa quantidade por ${commonMonthlyLimit}, no caso do MEI comum.`
      },
      {
        heading: "O que entra no faturamento",
        text: "Para acompanhar o limite, olhe o faturamento da atividade, e não apenas o dinheiro que sobrou depois das despesas. Vendas com nota, vendas sem nota, recebimentos por maquininha, marketplace e transferências ligadas ao negócio precisam ser organizados com cuidado."
      },
      {
        heading: "Cuidados perto do limite",
        text: "Se o resultado ficar perto do limite, evite decidir sozinho com base em uma simulação. Revise seus registros, confira regras atualizadas e procure contador, Sebrae ou Receita Federal para entender o que se aplica ao seu caso."
      }
    ],
    faq: [
      { question: "O limite é sempre anual?", answer: "Normalmente sim, mas quem abre no meio do ano deve observar a proporcionalidade." },
      { question: "MEI Caminhoneiro tem outro limite?", answer: "Sim. Este site separa MEI comum e MEI Caminhoneiro porque os valores de referência são diferentes." },
      { question: "A calculadora é oficial?", answer: "Não. É uma ferramenta independente e informativa." }
    ]
  },
  "mei-abriu-no-meio-do-ano-quanto-pode-faturar": {
    title: "MEI abriu no meio do ano: quanto pode faturar?",
    description: "Veja como calcular o limite proporcional quando o MEI abre depois de janeiro.",
    intro: "Quem abriu o MEI depois de janeiro precisa ter atenção ao limite proporcional do ano de abertura.",
    relatedLinks: [
      { href: "/calculadora-limite-mei", label: "a calculadora de limite proporcional MEI" },
      { href: "/calculadora-faturamento-mei", label: "a calculadora de faturamento MEI" }
    ],
    sections: [
      {
        heading: "Como contar os meses",
        text: "Conte do mês de abertura até dezembro, incluindo o próprio mês de abertura. Se o MEI foi aberto em junho, por exemplo, a estimativa considera junho, julho, agosto, setembro, outubro, novembro e dezembro."
      },
      {
        heading: "Como fazer a conta",
        text: `Para MEI comum, multiplique os meses ativos por ${commonMonthlyLimit}. Para MEI Caminhoneiro, a referência mensal usada no projeto é ${truckerMonthlyLimit}. Esse é um cálculo informativo e precisa ser conferido se houver dúvida.`
      },
      {
        heading: "Exemplo prático",
        text: "Um MEI comum aberto em julho tem 6 meses ativos até dezembro. A estimativa usa 6 vezes o limite mensal proporcional. Se o faturamento projetado passar disso, vale buscar orientação antes de seguir vendendo como se nada tivesse acontecido."
      },
      {
        heading: "Organização desde o primeiro mês",
        text: "Guarde notas, comprovantes de venda e registros de recebimento desde o início. O limite proporcional pode parecer confortável no começo, mas poucos meses de faturamento alto podem aproximar o MEI do teto rapidamente."
      }
    ],
    faq: [
      { question: "Janeiro conta?", answer: "Sim. Abertura em janeiro considera 12 meses." },
      { question: "Dezembro conta?", answer: "Sim. Abertura em dezembro considera 1 mês." },
      { question: "Preciso confirmar?", answer: "Sim, especialmente se estiver perto do limite ou se houver mudança de regra." }
    ]
  },
  "mei-estourou-o-limite-o-que-fazer": {
    title: "MEI estourou o limite: o que fazer?",
    description: "Entenda cuidados importantes quando o faturamento do MEI passa do limite.",
    intro: "Passar do limite pode ter consequências fiscais e de enquadramento. O primeiro passo é organizar os números reais.",
    relatedLinks: [
      { href: "/calculadora-desenquadramento-mei", label: "a calculadora de desenquadramento MEI" },
      { href: "/calculadora-faturamento-mei", label: "a calculadora de faturamento MEI" },
      { href: "/calculadora-limite-mei", label: "a calculadora limite MEI" }
    ],
    sections: [
      {
        heading: "Levante o faturamento correto",
        text: "Separe vendas com nota, vendas sem nota, recebimentos por plataformas, maquininha, PIX e outros meios ligados à atividade. O objetivo é entender o faturamento bruto da empresa, não apenas o saldo da conta."
      },
      {
        heading: "MEI passou de 81 mil",
        text: "Quando o MEI comum passa de 81 mil no ano, é importante revisar quanto passou e se existe regra específica para o seu caso. Não use esse número de forma isolada: confirme valores atuais, limite proporcional e orientação oficial."
      },
      {
        heading: "MEI ultrapassou limite em 20%",
        text: "Buscas sobre MEI ultrapassou limite 20% costumam envolver desenquadramento e efeitos fiscais. O MEI Calculado não define enquadramento nem calcula imposto devido; use as ferramentas apenas para organizar o valor estimado antes de buscar orientação."
      },
      {
        heading: "Não deixe para o fim do ano",
        text: "Se você percebeu o problema antes de dezembro, acompanhe mês a mês. Esperar pode dificultar a organização de documentos, pagamento de obrigações e eventual mudança de regime."
      },
      {
        heading: "Desenquadramento MEI e orientação",
        text: "Em caso de estouro de limite, é prudente falar com contador, Sebrae ou canais oficiais. Este site não calcula multa, desenquadramento ou imposto devido em situações específicas."
      }
    ],
    faq: [
      { question: "Posso ignorar se passou pouco?", answer: "Não é recomendado. Confirme a regra aplicável ao seu caso." },
      { question: "Preciso de contador?", answer: "Em situações de estouro de limite, é uma decisão prudente." },
      { question: "O site calcula multa?", answer: "Não. O foco aqui é estimativa de limite, faturamento e organização." }
    ]
  },
  "mei-precisa-emitir-nota-fiscal": {
    title: "MEI precisa emitir nota fiscal?",
    description: "Guia simples sobre nota fiscal para MEI, vendas para empresas e controle de faturamento.",
    intro: "A obrigação de emitir nota pode depender de quem compra, da atividade exercida e de regras federais, estaduais ou municipais.",
    relatedLinks: [
      { href: "/relatorio-mensal-mei", label: "o relatório mensal MEI" },
      { href: "/calculadora-limite-mei", label: "a calculadora limite MEI" }
    ],
    sections: [
      {
        heading: "Venda para empresas",
        text: "Em muitos casos, a emissão de nota para pessoa jurídica é exigida. Se você presta serviço ou vende para outra empresa, confira a regra aplicável antes de combinar prazos, preços e forma de pagamento."
      },
      {
        heading: "Venda para pessoa física",
        text: "A obrigação pode mudar conforme atividade, município e situação da operação. Mesmo quando a nota não for exigida, o faturamento continua precisando ser acompanhado."
      },
      {
        heading: "Nota fiscal e limite do MEI",
        text: "O limite considera faturamento, não apenas notas emitidas. Vendas sem nota, quando existirem, também precisam entrar no controle financeiro para evitar surpresa no fim do ano."
      },
      {
        heading: "Controle mensal",
        text: "Use o relatório mensal para separar receita com nota, receita sem nota e observações. Isso ajuda a conversar com contador ou atendimento oficial caso surjam dúvidas."
      }
    ],
    faq: [
      { question: "Nota conta no limite?", answer: "O limite considera faturamento, não apenas notas emitidas." },
      { question: "Regras são iguais no Brasil todo?", answer: "Algumas obrigações podem variar, principalmente em serviços municipais." },
      { question: "Onde confirmar?", answer: "Em canais oficiais, prefeitura, Receita Federal, Sebrae ou com contador." }
    ]
  },
  "mei-pode-vender-online": {
    title: "MEI pode vender online?",
    description: "Entenda cuidados básicos para MEI que vende pela internet, marketplace ou redes sociais.",
    intro: "O MEI pode atuar online quando a atividade é permitida e as obrigações da empresa são acompanhadas com cuidado.",
    relatedLinks: [
      { href: "/calculadora-faturamento-mei", label: "a calculadora de faturamento MEI" },
      { href: "/relatorio-mensal-mei", label: "o controle mensal MEI" }
    ],
    sections: [
      {
        heading: "Atividade permitida",
        text: "Antes de vender online, confira se a atividade exercida está adequada ao MEI. A forma de venda pode ser digital, mas a atividade econômica precisa fazer sentido com o cadastro da empresa."
      },
      {
        heading: "Marketplace, loja virtual e redes sociais",
        text: "Vendas por marketplace, loja própria, WhatsApp, Instagram, aplicativos e outros canais entram no faturamento do negócio. Isso inclui vendas em plataformas como Shopee e Mercado Livre, quando ligadas à atividade do MEI."
      },
      {
        heading: "Faturamento bruto",
        text: "Acompanhe o valor vendido antes de descontar taxas, frete, anúncios e custo de produto. Para decisões fiscais, confirme com contador como cada valor deve ser tratado no seu caso."
      },
      {
        heading: "Notas, entregas e comprovantes",
        text: "Guarde registros de pedido, entrega, cancelamento e reembolso. Esses documentos ajudam a explicar o faturamento real e a conferir se o limite está sendo respeitado."
      }
    ],
    faq: [
      { question: "Marketplace conta no limite?", answer: "Sim, vendas online fazem parte do faturamento da atividade." },
      { question: "Preciso de loja própria?", answer: "Não necessariamente. O importante é acompanhar atividade, faturamento e obrigações." },
      { question: "Posso vender para fora do estado?", answer: "Pode haver regras fiscais específicas. Confirme antes." }
    ]
  },
  "quanto-o-mei-paga-por-mes": {
    title: "Quanto o MEI paga por mês?",
    description: "Veja como estimar o pagamento mensal do MEI pelo DAS e por que conferir valores oficiais.",
    intro: "O pagamento mensal do MEI é feito pelo DAS, cujo valor varia por atividade e pode mudar com o tempo.",
    relatedLinks: [
      { href: "/calculadora-das-mei", label: "a calculadora DAS MEI" },
      { href: "/guias/o-que-e-das-mei", label: "o guia sobre DAS MEI" }
    ],
    sections: [
      {
        heading: "O que é pago no DAS",
        text: "O DAS reúne valores ligados à contribuição previdenciária e a tributos conforme a atividade. Comércio, serviços e atividade mista podem ter valores diferentes."
      },
      {
        heading: "Por que o valor muda",
        text: "O valor pode mudar por causa de reajustes, salário mínimo, tipo de atividade e regras vigentes. Por isso, a calculadora usa uma configuração manual que precisa ser revisada periodicamente."
      },
      {
        heading: "Como se organizar",
        text: "Inclua o DAS no controle mensal do MEI, mesmo em meses com pouco faturamento. Atrasos podem gerar encargos e dificultar a regularidade da empresa."
      },
      {
        heading: "Antes de pagar",
        text: "Use a calculadora como referência rápida, mas gere e confira a guia no canal oficial. O MEI Calculado não emite DAS e não substitui o sistema oficial."
      }
    ],
    faq: [
      { question: "O valor é igual para todos?", answer: "Não. Depende da atividade e do tipo de MEI." },
      { question: "Posso atrasar?", answer: "Atrasos podem gerar encargos. Confira canais oficiais." },
      { question: "A calculadora mostra 2026?", answer: "Sim, com valores 2026 configurados manualmente no projeto." }
    ]
  },
  "o-que-e-das-mei": {
    title: "O que é DAS MEI?",
    description: "Entenda o que é a guia DAS do MEI, para que serve e onde conferir antes de pagar.",
    intro: "DAS é a guia mensal usada pelo MEI para pagar suas principais obrigações em um documento único.",
    relatedLinks: [
      { href: "/calculadora-das-mei", label: "a calculadora DAS MEI 2026" },
      { href: "/guias/quanto-o-mei-paga-por-mes", label: "o guia de valor mensal MEI" }
    ],
    sections: [
      {
        heading: "Para que serve",
        text: "O pagamento ajuda a manter o MEI regular e inclui contribuições e impostos conforme a atividade. Ele faz parte da rotina de organização financeira do microempreendedor."
      },
      {
        heading: "O que a calculadora mostra",
        text: "A calculadora exibe uma estimativa mensal baseada nos valores configurados no projeto. Ela não gera boleto, não consulta situação fiscal e não confirma pendências."
      },
      {
        heading: "Onde conferir",
        text: "Antes de pagar, regularizar atrasos ou tomar decisões, confira o valor no canal oficial. Em caso de dúvida, procure Sebrae, Receita Federal ou contador."
      },
      {
        heading: "Cuidado com atrasos",
        text: "Se houver guias atrasadas, não use apenas uma estimativa simples. Podem existir acréscimos, regras específicas e necessidade de emitir guia atualizada."
      }
    ],
    faq: [
      { question: "DAS é imposto?", answer: "Ele reúne obrigações mensais do MEI, incluindo tributos e contribuição, conforme o caso." },
      { question: "Tenho que pagar sem faturar?", answer: "Confirme a regra oficial para sua situação." },
      { question: "O site emite DAS?", answer: "Não. Apenas mostra uma estimativa." }
    ]
  },
  "mei-caminhoneiro-limite": {
    title: "MEI Caminhoneiro: limite 2026",
    description: "Veja o limite usado para MEI Caminhoneiro e Transportador Autônomo de Cargas.",
    intro: "O MEI Caminhoneiro tem limite diferente do MEI comum e precisa ser calculado separadamente.",
    relatedLinks: [
      { href: "/calculadora-limite-mei", label: "a calculadora limite MEI" },
      { href: "/calculadora-faturamento-mei", label: "a projeção de faturamento MEI" }
    ],
    sections: [
      {
        heading: "Limite anual do MEI Caminhoneiro",
        text: `No ano atual (${currentYear}), este projeto usa como referência o limite anual de ${truckerAnnualLimit} para MEI Caminhoneiro/Transportador Autônomo de Cargas. Confira o enquadramento em fonte oficial antes de usar o resultado para decisão.`
      },
      {
        heading: "Limite proporcional",
        text: `Se a abertura foi no meio do ano, a estimativa proporcional usa os meses ativos multiplicados por ${truckerMonthlyLimit}. Essa conta ajuda a visualizar o teto aproximado para o ano de abertura.`
      },
      {
        heading: "Diferença para MEI comum",
        text: "O limite do MEI Caminhoneiro é maior do que o limite do MEI comum, mas isso não significa que qualquer transportador possa usar automaticamente esse enquadramento. A atividade e as condições precisam estar corretas."
      },
      {
        heading: "Quando buscar ajuda",
        text: "Se o faturamento estiver alto, se houver contrato recorrente ou dúvida sobre enquadramento, fale com contador, Sebrae ou canal oficial. A calculadora é apenas uma estimativa independente."
      }
    ],
    faq: [
      { question: "É igual ao MEI comum?", answer: "Não. O limite do MEI Caminhoneiro é maior." },
      { question: "A regra proporcional também vale?", answer: "A estimativa proporcional usa os meses ativos no ano." },
      { question: "Onde confirmar?", answer: "Em fontes oficiais, Sebrae ou contador." }
    ]
  }
};
