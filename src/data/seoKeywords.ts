export type SeoKeywordEntry = {
  path: string;
  title: string;
  description: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
};

export const siteUrl = "https://meicalculado.com.br";

export const defaultOpenGraphImage = {
  url: "/og-image.svg",
  width: 1200,
  height: 630,
  alt: "MEI Calculado - Calculadoras gratuitas para MEI"
};

export const seoKeywords: Record<string, SeoKeywordEntry> = {
  home: {
    path: "/",
    title: "Calculadoras para MEI gratuitas",
    description: "Use calculadoras para MEI: limite proporcional, faturamento, DAS e relatório mensal. Site independente, gratuito e informativo.",
    primaryKeyword: "calculadoras para MEI",
    secondaryKeywords: ["calculadora MEI", "ferramentas para MEI", "calculadora limite MEI", "calculadora DAS MEI"]
  },
  limite: {
    path: "/calculadora-limite-mei",
    title: "Calculadora Limite MEI 2026",
    description: "Use a calculadora limite MEI 2026 para estimar limite proporcional, quanto ainda pode faturar e alertas perto do teto.",
    primaryKeyword: "calculadora limite MEI",
    secondaryKeywords: [
      "limite proporcional MEI",
      "quanto posso faturar como MEI",
      "MEI abriu no meio do ano quanto pode faturar",
      "calcular limite MEI proporcional",
      "limite MEI 2026"
    ]
  },
  faturamento: {
    path: "/calculadora-faturamento-mei",
    title: "Calculadora de Faturamento MEI",
    description: "Projete o faturamento MEI até dezembro e veja quanto ainda pode faturar antes de chegar ao limite proporcional.",
    primaryKeyword: "calculadora faturamento MEI",
    secondaryKeywords: [
      "quanto ainda posso faturar como MEI",
      "projeção faturamento MEI",
      "MEI vai ultrapassar o limite",
      "calcular faturamento anual MEI"
    ]
  },
  desenquadramento: {
    path: "/calculadora-desenquadramento-mei",
    title: "Calculadora de Desenquadramento MEI | Simule se passou do limite",
    description: "Simule de forma informativa se o faturamento do MEI pode ultrapassar o limite anual ou proporcional. Ferramenta independente, gratuita e não oficial.",
    primaryKeyword: "calculadora desenquadramento MEI",
    secondaryKeywords: [
      "desenquadramento MEI por faturamento",
      "MEI passou do limite",
      "simulador desenquadramento MEI",
      "risco de desenquadramento MEI"
    ]
  },
  das: {
    path: "/calculadora-das-mei",
    title: "Calculadora DAS MEI 2026",
    description: "Use a calculadora DAS MEI 2026 para estimar a contribuição mensal de comércio, serviços ou atividade mista.",
    primaryKeyword: "calculadora DAS MEI",
    secondaryKeywords: ["quanto o MEI paga por mês", "valor DAS MEI 2026", "DAS MEI comércio", "DAS MEI serviços", "contribuição mensal MEI"]
  },
  relatorio: {
    path: "/relatorio-mensal-mei",
    title: "Relatório Mensal MEI",
    description: "Monte um relatório mensal MEI simples para controlar receita com nota, receita sem nota, despesas e saldo estimado.",
    primaryKeyword: "relatório mensal MEI",
    secondaryKeywords: ["modelo relatório mensal MEI", "controle mensal MEI", "receita mensal MEI", "relatório de receitas brutas MEI"]
  },
  guias: {
    path: "/guias",
    title: "Guias para MEI",
    description: "Veja guias para MEI sobre limite, DAS, nota fiscal, venda online, faturamento proporcional e MEI Caminhoneiro.",
    primaryKeyword: "guias para MEI",
    secondaryKeywords: ["dúvidas MEI", "limite MEI", "DAS MEI", "nota fiscal MEI"]
  },
  "qual-o-limite-do-mei": {
    path: "/guias/qual-o-limite-do-mei",
    title: "Qual o limite do MEI em 2026?",
    description: "Entenda qual o limite do MEI, limite anual, limite proporcional e quanto o MEI pode faturar por ano.",
    primaryKeyword: "qual o limite do MEI",
    secondaryKeywords: ["limite MEI 2026", "limite anual MEI", "quanto MEI pode faturar por ano"]
  },
  "mei-abriu-no-meio-do-ano-quanto-pode-faturar": {
    path: "/guias/mei-abriu-no-meio-do-ano-quanto-pode-faturar",
    title: "MEI abriu no meio do ano: quanto pode faturar?",
    description: "Veja quanto pode faturar um MEI aberto no meio do ano e como calcular limite proporcional em julho, novembro ou outro mês.",
    primaryKeyword: "MEI abriu no meio do ano quanto pode faturar",
    secondaryKeywords: ["limite proporcional MEI", "MEI abriu em julho quanto pode faturar", "MEI aberto em novembro limite"]
  },
  "mei-estourou-o-limite-o-que-fazer": {
    path: "/guias/mei-estourou-o-limite-o-que-fazer",
    title: "MEI estourou o limite: o que fazer?",
    description: "Entenda o que fazer quando o MEI estourou o limite, passou de 81 mil ou pode precisar avaliar desenquadramento.",
    primaryKeyword: "MEI estourou o limite o que fazer",
    secondaryKeywords: ["MEI passou de 81 mil", "MEI ultrapassou limite 20%", "desenquadramento MEI"]
  },
  "mei-precisa-emitir-nota-fiscal": {
    path: "/guias/mei-precisa-emitir-nota-fiscal",
    title: "MEI precisa emitir nota fiscal?",
    description: "Veja quando MEI precisa emitir nota fiscal para pessoa física, empresa e como controlar faturamento com ou sem nota.",
    primaryKeyword: "MEI precisa emitir nota fiscal",
    secondaryKeywords: ["MEI emite nota para pessoa física", "MEI emite nota para empresa", "nota fiscal MEI"]
  },
  "mei-pode-vender-online": {
    path: "/guias/mei-pode-vender-online",
    title: "MEI pode vender online?",
    description: "Entenda se MEI pode vender online, em marketplaces como Shopee e Mercado Livre, e como acompanhar faturamento.",
    primaryKeyword: "MEI pode vender online",
    secondaryKeywords: ["MEI pode vender na Shopee", "MEI pode vender no Mercado Livre", "MEI ecommerce"]
  },
  "quanto-o-mei-paga-por-mes": {
    path: "/guias/quanto-o-mei-paga-por-mes",
    title: "Quanto o MEI paga por mês?",
    description: "Entenda quanto o MEI paga por mês, valor mensal do DAS MEI e cuidados para conferir a contribuição mensal.",
    primaryKeyword: "quanto o MEI paga por mês",
    secondaryKeywords: ["valor mensal MEI", "DAS MEI valor", "contribuição mensal MEI"]
  },
  "o-que-e-das-mei": {
    path: "/guias/o-que-e-das-mei",
    title: "O que é DAS MEI?",
    description: "Entenda o que é DAS MEI, para que serve, como funciona a contribuição MEI e por que conferir canais oficiais.",
    primaryKeyword: "o que é DAS MEI",
    secondaryKeywords: ["para que serve DAS MEI", "DAS MEI explicação", "contribuição MEI"]
  },
  "mei-caminhoneiro-limite": {
    path: "/guias/mei-caminhoneiro-limite",
    title: "MEI Caminhoneiro: limite 2026",
    description: "Veja o limite MEI Caminhoneiro 2026, faturamento proporcional e cuidados para transportador autônomo de cargas MEI.",
    primaryKeyword: "MEI caminhoneiro limite",
    secondaryKeywords: ["limite MEI caminhoneiro 2026", "transportador autônomo de cargas MEI", "faturamento MEI caminhoneiro"]
  }
};

export function canonicalUrl(path: string): string {
  return `${siteUrl}${path === "/" ? "" : path}`;
}
