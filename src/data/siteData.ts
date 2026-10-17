export interface Product {
  id: string;
  name: string;
  category: 'molas' | 'espuma' | 'camas' | 'acessorios';
  badge?: string;
  description: string;
  supportWeight: string;
  comfortLevel: string;
  sizes: string[];
  features: string[];
  imageUrl: string;
  fallbackImageUrl?: string;
  whatsappMessage: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
  verified: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface Differential {
  id: string;
  title: string;
  description: string;
  iconName: 'Bed' | 'ShieldCheck' | 'Truck' | 'MapPin' | 'Clock' | 'CreditCard' | 'ThumbsUp' | 'Sparkles';
}

export const siteData = {
  company: {
    name: "Mimoso Colchões",
    shortName: "Mimoso",
    segment: "Loja de Colchões, Camas, Box e Sistemas de Dormir",
    tagline: "Colchões de alta qualidade, conforto superior e noites bem dormidas no CPA II em Cuiabá",
    phoneDisplay: "(65) 99295-7629",
    phoneInternational: "+55 65 99295-7629",
    phoneDigits: "5565992957629",
    cep: "78055-508",
    address: {
      street: "Av. Brasil, 13A",
      neighborhood: "Cpa II",
      city: "Cuiabá",
      state: "MT",
      full: "Av. Brasil, 13A - Cpa II, Cuiabá - MT, 78055-508, Brasil",
    },
    hours: {
      summary: "Segunda a Sábado: 09h às 18h",
      days: "Segunda a Sábado",
      weekdays: "09:00 às 18:00",
      saturday: "09:00 às 18:00",
      sunday: "Fechado (Atendimento WhatsApp disponível)",
    },
    googleRating: 5.0,
    googleReviewCount: 7,
    instagram: "@mimosocolchoes",
    instagramUrl: "https://www.instagram.com/mimosocolchoes",
    googleMapsSearchUrl: "https://maps.google.com/?q=Av.+Brasil,+13A+-+Cpa+II,+Cuiab%C3%A1+-+MT,+78055-508",
    googleMapsEmbedUrl: "https://maps.google.com/maps?q=Av.+Brasil,+13A+-+Cpa+II,+Cuiab%C3%A1+-+MT,+78055-508&t=&z=16&ie=UTF8&iwloc=&output=embed",
  },

  getWhatsAppUrl: (customMessage?: string) => {
    const defaultMsg = "Olá! Vim pelo site da Mimoso Colchões e gostaria de solicitar um orçamento.";
    const message = customMessage || defaultMsg;
    return `https://wa.me/5565992957629?text=${encodeURIComponent(message)}`;
  },

  statistics: [
    {
      value: "5.0 / 5.0",
      label: "Nota Máxima no Google",
      description: "Avaliações 100% positivas de clientes no CPA II e Cuiabá",
    },
    {
      value: "Consultoria",
      label: "Atendimento Especializado",
      description: "Orientação precisa para a densidade e molejo conforme seu biotipo",
    },
    {
      value: "Linha Completa",
      label: "Variedade em Camas",
      description: "Solteiro, Casal, Queen, King Size e Camas Box Baú",
    },
    {
      value: "Direto no WhatsApp",
      label: "Orçamento Rápido",
      description: "Atendimento sem burocracia com fotos, medidas e valores",
    },
  ],

  categories: [
    { id: 'todos', label: 'Todos os Modelos' },
    { id: 'molas', label: 'Molas Ensacadas' },
    { id: 'espuma', label: 'Espuma Alta Densidade' },
    { id: 'camas', label: 'Camas Box e Baús' },
    { id: 'acessorios', label: 'Travesseiros e Acessórios' },
  ],

  products: [
    {
      id: 'mola-pocket-pillow',
      name: 'Colchão Molas Ensacadas Individual Pillow Top',
      category: 'molas',
      badge: 'Mais Vendido',
      description: 'Molas ensacadas que não transmitem vibração de um lado para o outro. Camada pillow top macia com sustentação lombar equilibrada.',
      supportWeight: 'Até 130 kg por pessoa',
      comfortLevel: 'Intermediário Confortável',
      sizes: ['Casal (1,38 x 1,88m)', 'Queen (1,58 x 1,98m)', 'King (1,93 x 2,03m)'],
      features: ['Molas ensacadas individualmente', 'Pillow Top europeu de alta resiliência', 'Tecido com tratamento antiácaro e antialérgico', 'Garantia de fábrica'],
      imageUrl: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80',
      fallbackImageUrl: 'https://images.unsplash.com/photo-1540518614846-7ede433c4550?auto=format&fit=crop&w=800&q=80',
      whatsappMessage: 'Olá! Gostaria de um orçamento para o Colchão de Molas Ensacadas Pillow Top na Mimoso Colchões.',
    },
    {
      id: 'mola-pocket-titanium',
      name: 'Colchão King Size Molas Ensacadas Titanium Luxury',
      category: 'molas',
      badge: 'Linha Premium',
      description: 'Estrutura robusta para quem busca amplitude, sofisticação e conforto de hotel 5 estrelas em Cuiabá.',
      supportWeight: 'Até 140 kg por pessoa',
      comfortLevel: 'Firme Confortável',
      sizes: ['Queen (1,58 x 1,98m)', 'King (1,93 x 2,03m)'],
      features: ['Bitola de aço carbono temperado', 'Malha nobre de toque aveludado', 'Isolamento acústico de movimento', 'Borda de contenção perimetral reforçada'],
      imageUrl: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=800&q=80',
      fallbackImageUrl: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80',
      whatsappMessage: 'Olá! Gostaria de informações e valores sobre o Colchão King Size Molas Ensacadas Titanium Luxury.',
    },
    {
      id: 'espuma-d45-ortopedico',
      name: 'Colchão Espuma Alta Densidade D45 Ortopédico',
      category: 'espuma',
      badge: 'Alta Firmeza',
      description: 'Projetado para alinhamento correto da coluna vertebral e alívio de pontos de pressão. Espuma selada de alta resiliência.',
      supportWeight: 'Até 150 kg por pessoa',
      comfortLevel: 'Firme Ortopédico',
      sizes: ['Solteiro (0,88 x 1,88m)', 'Casal (1,38 x 1,88m)', 'Queen (1,58 x 1,98m)'],
      features: ['Densidade D45 certificada', 'Ideal para correção postural', 'Camada dupla de conforto progressivo', 'Tecido jacquard com toque fresco'],
      imageUrl: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=800&q=80',
      fallbackImageUrl: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80',
      whatsappMessage: 'Olá! Gostaria de um orçamento para o Colchão Espuma Alta Densidade D45 na Mimoso Colchões.',
    },
    {
      id: 'espuma-d33-pro-coluna',
      name: 'Colchão Espuma Densidade D33 Pró-Coluna',
      category: 'espuma',
      badge: 'Custo-Benefício',
      description: 'O equilíbrio perfeito entre suporte e aconchego para pessoas de até 100 kg. Excelente durabilidade para o dia a dia.',
      supportWeight: 'Até 100 kg por pessoa',
      comfortLevel: 'Médio Firme',
      sizes: ['Solteiro (0,88 x 1,88m)', 'Casal (1,38 x 1,88m)'],
      features: ['Espuma D33 uniforme', 'Tecido respirável ideal para o clima de Cuiabá', 'Tratamento hipoalergênico', 'Garantia oficial'],
      imageUrl: 'https://images.unsplash.com/photo-1582533561751-ef6f6ab93a2e?auto=format&fit=crop&w=800&q=80',
      fallbackImageUrl: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80',
      whatsappMessage: 'Olá! Gostaria de saber os preços disponíveis para o Colchão Espuma D33 na Mimoso Colchões.',
    },
    {
      id: 'cama-box-bau-bipartida',
      name: 'Cama Box Baú Bipartida com Pistões a Gás',
      category: 'camas',
      badge: 'Mais Prática',
      description: 'Aproveitamento total do espaço no quarto com abertura suave por pistões hidráulicos. Estrutura maciça em madeira de reflorestamento tratada.',
      supportWeight: 'Suporte integral reforçado',
      comfortLevel: 'Base Rígida para Colchão',
      sizes: ['Casal (1,38 x 1,88m)', 'Queen (1,58 x 1,98m)', 'King (1,93 x 2,03m)'],
      features: ['Amplo espaço interno para roupas de cama', 'Pistões a gás de acionamento leve', 'Revestimento em courino ou linho fácil de limpar', 'Pés em madeira maciça com sapatas'],
      imageUrl: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80',
      fallbackImageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
      whatsappMessage: 'Olá! Gostaria de saber medidas e preços da Cama Box Baú Bipartida na Mimoso Colchões.',
    },
    {
      id: 'cama-box-base-rigida',
      name: 'Base Cama Box Rígida com Revestimento Nobre',
      category: 'camas',
      badge: 'Estrutura Robusta',
      description: 'Base estável e duradoura para qualquer tipo de colchão. Acabamento primoroso com cantoneiras plásticas protetoras e rodízios.',
      supportWeight: 'Até 300 kg total',
      comfortLevel: 'Base Firme',
      sizes: ['Solteiro (0,88 x 1,88m)', 'Casal (1,38 x 1,88m)', 'Queen (1,58 x 1,98m)', 'King (1,93 x 2,03m)'],
      features: ['Madeira tratada anticupim e antifungo', 'Pés de madeira rosqueáveis com regulagem', 'Tecido antiderrapante na superfície superior', 'Acabamento em linho cinza ou grafite'],
      imageUrl: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80',
      fallbackImageUrl: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80',
      whatsappMessage: 'Olá! Gostaria de consultar valores para Base Cama Box Rígida na Mimoso Colchões.',
    },
    {
      id: 'cabeceira-estofada-painel',
      name: 'Cabeceira Estofada em Linho e Suede',
      category: 'acessorios',
      badge: 'Decoração & Conforto',
      description: 'Acabamento elegante para completar o conjunto de dormir. Enchimento macio para leitura e apoio confortável das costas.',
      supportWeight: 'Fixação em parede ou base box',
      comfortLevel: 'Apoio Confortável',
      sizes: ['Solteiro', 'Casal', 'Queen', 'King'],
      features: ['Espuma de alta densidade no estofamento', 'Fácil instalação e higienização', 'Cores neutras e sofisticadas', 'Design moderno com costura geométrica'],
      imageUrl: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80',
      fallbackImageUrl: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=800&q=80',
      whatsappMessage: 'Olá! Gostaria de ver os modelos e cores de Cabeceira Estofada na Mimoso Colchões.',
    },
    {
      id: 'kit-travesseiros-visco',
      name: 'Travesseiro Cervical Viscoelástico e Protetores Impermeáveis',
      category: 'acessorios',
      badge: 'Saúde & Proteção',
      description: 'Espuma com memória que se molda aos contornos do pescoço e coluna cervical, acompanhada de capa protetora impermeável respirável.',
      supportWeight: 'Alívio de tensão cervical',
      comfortLevel: 'Ergonômico Adaptativo',
      sizes: ['Padrão 50 x 70 cm'],
      features: ['Tecnologia viscoelástica moldada', 'Capa com zíper lavável', 'Barreira impermeável que protege o colchão contra líquidos e poeira', 'Hipoalergênico e antiácaro'],
      imageUrl: 'https://images.unsplash.com/photo-1629949009765-40fc74c95018?auto=format&fit=crop&w=800&q=80',
      fallbackImageUrl: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80',
      whatsappMessage: 'Olá! Gostaria de informações sobre os Travesseiros Ortopédicos e Protetores na Mimoso Colchões.',
    },
  ] as Product[],

  differentials: [
    {
      id: '1',
      title: 'Consultoria de Sono por Biotipo',
      description: 'Orientamos a escolha técnica correta entre molas ensacadas e espumas D33/D45 com base no seu peso, altura e posição de dormir.',
      iconName: 'Bed',
    },
    {
      id: '2',
      title: 'Garantia de Fábrica Comprovada',
      description: 'Trabalhamos exclusivamente com marcas confiáveis, espumas seladas e molejos com rigoroso controle de qualidade e durabilidade.',
      iconName: 'ShieldCheck',
    },
    {
      id: '3',
      title: 'Entrega e Montagem em Cuiabá',
      description: 'Logística rápida para o CPA II, Cuiabá e Várzea Grande, com equipe cuidadosa no transporte e na instalação da cama box.',
      iconName: 'Truck',
    },
    {
      id: '4',
      title: 'Localização de Fácil Acesso no CPA II',
      description: 'Loja ampla na Av. Brasil, 13A, com facilidade para estacionar e testar o conforto dos colchões pessoalmente antes da compra.',
      iconName: 'MapPin',
    },
    {
      id: '5',
      title: 'Condições de Pagamento Flexíveis',
      description: 'Preços competitivos, desconto especial à vista no Pix e parcelamento facilitado no cartão de crédito em até 12x.',
      iconName: 'CreditCard',
    },
    {
      id: '6',
      title: 'Atendimento Ágil pelo WhatsApp',
      description: 'Receba fotos reais dos produtos, especificações completas de medidas e simulações de orçamento direto no seu celular.',
      iconName: 'Clock',
    },
  ] as Differential[],

  reviews: [
    {
      id: 'rev-1',
      name: 'Paulo Roberto',
      rating: 5,
      text: 'Atendimento impecável na loja do CPA II. O vendedor me auxiliou a escolher o colchão ideal para o meu conforto. Entrega super rápida.',
      date: 'Avaliação recente no Google',
      verified: true,
    },
    {
      id: 'rev-2',
      name: 'Camila Freitas',
      rating: 5,
      text: 'Ótima variedade de colchões e preços justos. Comprei o conjunto box com o colchão de molas e estou extremamente satisfeita com a qualidade.',
      date: 'Avaliação recente no Google',
      verified: true,
    },
    {
      id: 'rev-3',
      name: 'Marcos Vinicius Silva',
      rating: 5,
      text: 'Excelente atendimento em Cuiabá. O colchão ortopédico D45 eliminou as dores lombares que eu sentia ao acordar. Muito satisfeito com a durabilidade.',
      date: 'Avaliação recente no Google',
      verified: true,
    },
    {
      id: 'rev-4',
      name: 'Luciana Ferreira',
      rating: 5,
      text: 'A cama box com baú tem muito espaço e pistões muito leves. O colchão queen é maravilhoso. Recomendo a Mimoso Colchões para quem mora no CPA.',
      date: 'Avaliação recente no Google',
      verified: true,
    },
  ] as Review[],

  faq: [
    {
      id: 'faq-1',
      question: 'Vocês fazem entrega em Cuiabá e região?',
      answer: 'Sim! Realizamos entrega e montagem rápida de colchões, bases e camas box em toda a região de Cuiabá e Várzea Grande. Consulte o prazo e taxa para o seu bairro diretamente pelo nosso WhatsApp.',
    },
    {
      id: 'faq-2',
      question: 'Como saber qual a densidade ou tipo de colchão ideal para mim?',
      answer: 'O colchão ideal depende da sua altura, peso corporal e preferência de maciez ou firmeza. Para quem dorme a dois com pesos diferentes, o colchão de molas ensacadas individuais é a melhor escolha porque isola os movimentos. Para quem busca firmeza e alinhamento ortopédico, as espumas D33 e D45 são recomendadas. Nossa equipe orienta tudo de forma personalizada pelo WhatsApp.',
    },
    {
      id: 'faq-3',
      question: 'Quais são as formas de pagamento aceitas?',
      answer: 'Aceitamos Pix (com condições especiais de desconto à vista), cartões de crédito com opções de parcelamento facilitado em até 12x, cartão de débito e transferência bancária.',
    },
    {
      id: 'faq-4',
      question: 'Onde a loja física está localizada no CPA II?',
      answer: 'Estamos localizados na Av. Brasil, 13A - Cpa II, Cuiabá - MT (CEP 78055-508). É uma localização de fácil acesso com espaço para estacionar na frente.',
    },
    {
      id: 'faq-5',
      question: 'Os colchões possuem garantia?',
      answer: 'Sim, todos os nossos produtos contam com garantia oficial de fábrica contra defeitos de fabricação e deformações estruturais, respaldados pelas marcas fabricantes.',
    },
    {
      id: 'faq-6',
      question: 'Vocês vendem a cama box separada do colchão?',
      answer: 'Sim! Você pode adquirir apenas o colchão, apenas a base cama box (tradicional ou com baú) ou o conjunto completo com desconto especial.',
    },
  ] as FaqItem[],

  sizesGuide: [
    { name: 'Solteiro', dimensions: '0,88 x 1,88 m', target: 'Quartos compactos, jovens e adultos individuais' },
    { name: 'Solteiro Americano', dimensions: '0,96 x 2,03 m', target: 'Maior comprimento para pessoas altas' },
    { name: 'Casal Padrão', dimensions: '1,38 x 1,88 m', target: 'O tamanho clássico para dormitórios de casal' },
    { name: 'Queen Size', dimensions: '1,58 x 1,98 m', target: 'Mais conforto e liberdade para o casal' },
    { name: 'King Size', dimensions: '1,93 x 2,03 m', target: 'Máxima amplitude, luxo e espaço livre' },
  ],
};
