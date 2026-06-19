export type ServiceCategory = "agencia" | "tec" | "news";

export type ServiceItem = {
  title: string;
  description: string;
  icon: string;
  category: ServiceCategory;
};

export const services: ServiceItem[] = [
  // ======================
  // ZENTRY AGÊNCIA
  // ======================
  {
    title: "Gestão de mídias sociais",
    description:
      "Criamos estratégias e conteúdos que fortalecem sua marca, aumentam seu alcance e geram conexão com o público.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3h6m-9 3h9M3.75 5.25h16.5v13.5H3.75V5.25z" /></svg>`,
    category: "agencia",
  },
  {
    title: "Tráfego pago",
    description:
      "Campanhas estratégicas no Instagram, Facebook e Google para gerar vendas, leads e crescimento acelerado.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3 17.25V6.75m6 10.5V9.75m6 7.5v-4.5m6 4.5V4.5" /></svg>`,
    category: "agencia",
  },
  {
    title: "Branding e posicionamento",
    description:
      "Construímos marcas fortes, memoráveis e estratégicas para destacar sua empresa no mercado.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3l7.5 4.5v9L12 21l-7.5-4.5v-9L12 3z" /></svg>`,
    category: "agencia",
  },
  {
    title: "Produção de vídeos",
    description:
      "Criamos vídeos profissionais, institucionais, comerciais e conteúdos estratégicos para redes sociais.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6.75a2.25 2.25 0 00-2.25-2.25h-6A2.25 2.25 0 005.25 6.75v10.5A2.25 2.25 0 007.5 19.5h6a2.25 2.25 0 002.25-2.25V13.5l3 3v-9l-3 3z" /></svg>`,
    category: "agencia",
  },
  {
    title: "Marketing Offline",
    description:
      "Planejamento de mídia outdoor, campanhas físicas e ativações de marca.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5.25h18M3 18.75h18M6.75 8.25v7.5m10.5-7.5v7.5" /></svg>`,
    category: "agencia",
  },
  {
    title: "Estratégias de marketing",
    description:
      "Ações estratégicas focadas em crescimento, autoridade e fortalecimento da marca.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5-2.25A9 9 0 1112 3a9 9 0 018 4.75z" /></svg>`,
    category: "agencia",
  },

  // ======================
  // ZENTRY TEC
  // ======================
  {
    title: "Desenvolvimento de aplicativos",
    description:
      "Criamos aplicativos personalizados e soluções digitais modernas.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h3m-7.5 0h12A1.5 1.5 0 0119.5 7.5v9A1.5 1.5 0 0118 18H6a1.5 1.5 0 01-1.5-1.5v-9A1.5 1.5 0 016 6z" /></svg>`,
    category: "tec",
  },
  {
    title: "Desenvolvimento de sites",
    description:
      "Sites modernos, responsivos e focados em conversão.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 4.5h16.5v15h-16.5v-15z" /></svg>`,
    category: "tec",
  },
  {
    title: "Sistemas personalizados",
    description:
      "Sistemas inteligentes para gestão e automação empresarial.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 6.75h15m-15 5.25h15m-15 5.25h15" /></svg>`,
    category: "tec",
  },
  {
    title: "Automação digital",
    description:
      "Ferramentas para aumentar produtividade e performance.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9.75 3v3m4.5-3v3m-7.5 4.5h10.5m-12 9h13.5A1.5 1.5 0 0020.25 18V8.25A1.5 1.5 0 0018.75 6.75H5.25A1.5 1.5 0 003.75 8.25V18A1.5 1.5 0 005.25 19.5z" /></svg>`,
    category: "tec",
  },
  {
    title: "Consultoria em tecnologia",
    description:
      "Transformação digital com soluções estratégicas.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M11.25 3.75l1.5 0m-7.5 3l1.061 1.061m11.378 0L18.75 6.75M4.5 12h1.5m12 0h1.5m-2.811 5.189L18.75 17.25m-11.378 0L5.25 17.25M12 18.75v1.5" /></svg>`,
    category: "tec",
  },

  // ======================
  // ZENTRY NEWS
  // ======================
  {
    title: "Cobertura de eventos",
    description:
      "Cobertura estratégica de eventos e experiências.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6.75v10.5m-7.5-10.5v10.5" /></svg>`,
    category: "news",
  },
  {
    title: "Portal de notícias",
    description:
      "Conteúdos sobre negócios, tecnologia e tendências.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 7.5v9A1.5 1.5 0 0118 18H6a1.5 1.5 0 01-1.5-1.5v-9A1.5 1.5 0 016 6h12a1.5 1.5 0 011.5 1.5z" /></svg>`,
    category: "news",
  },
  {
    title: "Divulgação estratégica",
    description:
      "Mais visibilidade para marcas e eventos.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M10.34 3.94a1.5 1.5 0 012.32 0l1.02 1.29a1.5 1.5 0 001.14.57l1.64.07a1.5 1.5 0 011.4 1.93l-.49 1.57a1.5 1.5 0 00.34 1.48l1.1 1.22a1.5 1.5 0 010 2.01l-1.1 1.22a1.5 1.5 0 00-.34 1.48l.49 1.57a1.5 1.5 0 01-1.4 1.93l-1.64.07a1.5 1.5 0 00-1.14.57l-1.02 1.29a1.5 1.5 0 01-2.32 0z" /></svg>`,
    category: "news",
  },
  {
    title: "Cultura",
    description: "Conteúdos e iniciativas que valorizam arte, comportamento, tendências e o impacto da cultura na sociedade moderna.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 9.75l-3-3m0 0l3-3m-3 3h12m-3 12l3-3m0 0l-3-3m3 3H6" /></svg>`,
    category: "news",
},
  
];