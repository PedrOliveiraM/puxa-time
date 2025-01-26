export const PLANS = {
  basicMonthly: {
    productName: "basic_monthly",
    title: "Essencial",
    originalPrice: "5,99/mês", // Preço original
    price: "3,99/mês", // Preço com desconto
    description: "Descubra o essencial: perfeito para começar a organizar sua pelada",
    features: [
      "Sem anúncios",
      "Acesso ao modo de sorteio por chegada e prioridade",
    ],
    isPopular: false,
    period: "Mensal",
  },
  basicAnnual: {
    productName: "basic_annual",
    title: "Essencial",
    originalPrice: "79,99/ano", // Preço original
    price: "39,99/ano", // Preço com desconto
    description: "Economize mais de 50%! Essencial para quem busca organização e praticidade.",
    features: [
      "Sem anúncios",
      "Acesso a até 3 modos de sorteio",
    ],
    isPopular: false,
    period: "Anual",
  },
  premiumMonthly: {
    productName: "premium_monthly",
    title: "Pro",
    originalPrice: "9,99/mês", // Preço original
    price: "6,99/mês", // Preço com desconto
    description: "Acesso completo: alcance o máximo potencial com todas as funcionalidades.",
    features: [
      "Sem anúncios",
      "Acesso total a todos os modos de sorteio",
      "Placares personalizados",
      "Atualizações exclusivas e suporte prioritário",
    ],
    isPopular: true,
    period: "Mensal",
  },
  premiumAnnual: {
    productName: "premium_annual",
    title: "Pro",
    originalPrice: "119,99/ano", // Preço original
    price: "39,99/ano", // Preço com desconto
    description: "Economize 67%! e tenha acesso completo com funcionalidades exclusivas.",
    features: [
      "Sem anúncios",
      "Acesso total a todos os modos de sorteio",
      "Placares personalizados",
      "Atualizações exclusivas e suporte prioritário",
    ],
    isPopular: true,
    period: "Anual",
  },
} as const;

export type PlanType = keyof typeof PLANS;
