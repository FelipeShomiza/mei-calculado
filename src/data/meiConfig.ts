export type MeiType = "comum" | "caminhoneiro";
export type ActivityType = "comercio" | "servicos" | "comercio-servicos";

// Revise estes valores anualmente antes de publicar ou atualizar o site.
// Eles não são atualizados automaticamente e devem ser conferidos em fontes oficiais.
export const meiConfig = {
  currency: "BRL",
  referenceYear: 2026,
  dasYear: 2026,
  common: {
    annualLimit: 81000,
    monthlyLimit: 6750
  },
  trucker: {
    annualLimit: 251600,
    monthlyLimit: 20966.67
  },
  das2026: {
    comum: {
      comercio: 82.05,
      servicos: 86.05,
      "comercio-servicos": 87.05
    },
    caminhoneiro: {
      comercio: 195.52,
      servicos: 199.52,
      "comercio-servicos": 200.52
    }
  }
} as const;

export const officialSources = [
  {
    label: "Portal do Empreendedor",
    url: "https://www.gov.br/empresas-e-negocios/pt-br/empreendedor"
  },
  {
    label: "Receita Federal",
    url: "https://www.gov.br/receitafederal"
  },
  {
    label: "Sebrae",
    url: "https://sebrae.com.br"
  }
];

export const months = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro"
];
