export interface Chapter {
  number: number;
  title: string;
  description: string;
}

export interface BookPart {
  id: string;
  partNumber: string;
  title: string;
  subtitle: string;
  iconName: string;
  chapters: Chapter[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  city: string;
  highlight: string;
}

export interface Differentiator {
  number: string;
  title: string;
  description: string;
  points?: string[];
}

export interface ObjectionItem {
  question: string;
  answer: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const BOOK_PARTS: BookPart[] = [
  {
    id: "part-1",
    partNumber: "PARTE I",
    title: "CONHECENDO A ANSIEDADE",
    subtitle: "Compreenda o sistema de alarme do seu corpo e quebre o ciclo do medo.",
    iconName: "BookOpen",
    chapters: [
      {
        number: 1,
        title: "O que é essa inquietação?",
        description:
          "Você vai entender a ansiedade como um sistema de alarme — e descobrir que ela não é sua inimiga, mas um sinal que merece ser ouvido."
      },
      {
        number: 2,
        title: "Os muitos rostos da ansiedade",
        description:
          "A ansiedade não se manifesta da mesma forma em todo mundo. Você vai reconhecer qual rosto da ansiedade mais se parece com o seu — a preocupação constante, o pânico, a ansiedade social ou as memórias traumáticas."
      },
      {
        number: 3,
        title: "Quando a ansiedade se torna um hábito",
        description:
          "Aqui você vai desvendar o ciclo que mantém o medo vivo — e descobrir que a ansiedade, embora pareça um monstro, nada mais é do que um hábito que pode ser desaprendido."
      }
    ]
  },
  {
    id: "part-2",
    partNumber: "PARTE II",
    title: "AS FERRAMENTAS PARA A CALMA",
    subtitle: "Práticas de atenção plena, autocompaixão e regulação emocional no seu dia a dia.",
    iconName: "Compass",
    chapters: [
      {
        number: 4,
        title: "Ouvindo o seu crítico interior",
        description:
          "Aprenda a identificar a voz que está por trás da ansiedade — a voz que critica, que duvida, que antecipa o pior — e descubra o poder de um novo diálogo."
      },
      {
        number: 5,
        title: "A arte de estar aqui e agora",
        description:
          "A atenção plena é o antídoto para a fuga mental. Você vai aprender a se ancorar no presente, longe das tempestades do passado e do futuro."
      },
      {
        number: 6,
        title: "A coragem de ser gentil consigo mesmo",
        description:
          "A autocrítica alimenta a ansiedade. A autocompaixão a acalma. Você vai descobrir que ser gentil consigo mesmo não é fraqueza — é o alicerce da sua força interior."
      }
    ]
  },
  {
    id: "part-3",
    partNumber: "PARTE III",
    title: "CUIDANDO DE SI — UM ESTILO DE VIDA QUE ACALMA",
    subtitle: "Os pilares biológicos, sociais e criativos para uma mente em equilíbrio.",
    iconName: "HeartHandshake",
    chapters: [
      {
        number: 7,
        title: "Alimentando a mente e o corpo",
        description:
          "A conexão entre corpo e mente é profunda. Você vai aprender como a alimentação, o movimento e o sono são pilares fundamentais do bem-estar emocional."
      },
      {
        number: 8,
        title: "A força dos laços que apoiam",
        description:
          "Relacionamentos saudáveis são um abrigo para a ansiedade. Descubra como construir laços que te sustentam — e como se afastar daqueles que te esgotam."
      },
      {
        number: 9,
        title: "Encontrando a sua própria voz",
        description:
          "A criatividade é uma válvula de escape para a energia ansiosa. Você vai descobrir formas de expressão que te conectam com quem você realmente é."
      }
    ]
  },
  {
    id: "part-4",
    partNumber: "PARTE IV",
    title: "O CAMINHO À FRENTE",
    subtitle: "Exposição gradual e consolidação da paz como prática diária.",
    iconName: "Sun",
    chapters: [
      {
        number: 10,
        title: "Enfrentando os medos com passos firmes",
        description:
          "A evitação é a armadilha que mantém a ansiedade viva. Você vai aprender a técnica da exposição gradual — a 'escadinha do medo' — para enfrentar seus medos passo a passo."
      },
      {
        number: 11,
        title: "Um novo começo a cada dia",
        description:
          "A jornada não termina aqui. Você vai aprender a integrar tudo o que aprendeu em um estilo de vida — e descobrir que a paz não é um destino, mas uma prática diária."
      }
    ]
  }
];

export const DIFFERENTIATORS: Differentiator[] = [
  {
    number: "01",
    title: "Escrito por uma psicóloga que realmente entende do assunto",
    description:
      "Glaucia Freitas é psicóloga formada pela PUC-RS com especialização em Terapias Cognitivo-Comportamentais e Saúde Mental. Há mais de uma década, ela atende pessoas que enfrentam a ansiedade em suas diversas formas — tanto no consultório quanto através de grupos de apoio. A autora reuniu aqui o essencial do que aplica em sua prática clínica, traduzindo conceitos técnicos em passos claros e aplicáveis."
  },
  {
    number: "02",
    title: "Uma abordagem que integra corpo, mente e emoções",
    description:
      "Diferente de outros livros que focam apenas em uma dimensão, 'Acalme a Ansiedade' oferece uma visão holística e completa:",
    points: [
      "Técnicas cognitivas para transformar seus pensamentos",
      "Práticas de atenção plena para acalmar a mente",
      "Estratégias de autocompaixão para se tratar com gentileza",
      "Cuidados com o corpo — alimentação, movimento e sono",
      "Fortalecimento de relacionamentos como porto seguro",
      "Expressão criativa como válvula de escape"
    ]
  },
  {
    number: "03",
    title: "Linguagem acolhedora que te faz sentir compreendido",
    description:
      "Uma das maiores queixas de quem sofre com ansiedade é a sensação de solidão. Este livro foi escrito com uma linguagem que valida sua experiência, que diz 'eu te entendo' em cada página. Não é um manual frio e técnico. É um companheiro de jornada."
  },
  {
    number: "04",
    title: "Ferramentas práticas que você pode usar imediatamente",
    description:
      "Cada capítulo termina com exercícios práticos que você pode começar a aplicar hoje mesmo. Não importa se você tem 5 minutos ou 1 hora — sempre há algo que você pode fazer para começar a transformar sua relação com a ansiedade."
  },
  {
    number: "05",
    title: "Uma jornada no seu próprio ritmo",
    description:
      "Este livro foi pensado para ser lido com calma, de preferência num sofá confortável, com uma xícara de chá ao lado. Não há pressa. Não há metas impossíveis. Há apenas um convite: o de dedicar um tempo a si mesmo."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t-1",
    author: "Mariana S.",
    city: "São Paulo, SP",
    highlight: "Não há nada de errado comigo",
    quote:
      "Este livro chegou num momento em que eu já não sabia mais o que fazer com a ansiedade. A autora me ensinou que não há nada de errado comigo — e me deu ferramentas que realmente funcionam. Hoje, consigo respirar antes de entrar em pânico."
  },
  {
    id: "t-2",
    author: "Carlos A.",
    city: "Belo Horizonte, MG",
    highlight: "Práticas simples, mas transformadoras",
    quote:
      "Li vários livros sobre ansiedade, mas nenhum me tocou como este. A forma como a autora explica o ciclo da ansiedade me fez enxergar meus padrões pela primeira vez. As práticas são simples, mas transformadoras."
  },
  {
    id: "t-3",
    author: "Fernanda L.",
    city: "Rio de Janeiro, RJ",
    highlight: "O capítulo sobre autocompaixão mudou minha vida",
    quote:
      "Sempre fui muito autocrítica, e isso só piorava minha ansiedade. O capítulo sobre autocompaixão mudou minha vida. Aprendi a me tratar com a mesma gentileza que trato minhas amigas."
  },
  {
    id: "t-4",
    author: "Rafael P.",
    city: "Porto Alegre, RS",
    highlight: "A escadinha do medo me ajudou",
    quote:
      "Eu tinha medo de enfrentar situações sociais. A técnica da 'escadinha do medo' me ajudou a dar passos pequenos, mas consistentes. Hoje consigo participar de reuniões sem entrar em pânico."
  },
  {
    id: "t-5",
    author: "Adriana C.",
    city: "Curitiba, PR",
    highlight: "A abordagem holística é o diferencial",
    quote:
      "A abordagem holística deste livro é o que o diferencia. Não é só sobre pensamentos — é sobre corpo, alimentação, sono, relacionamentos. Finalmente entendi que cuidar de mim como um todo é o caminho."
  }
];

export const WHO_NEEDS_THIS: string[] = [
  "Você que acorda com o coração acelerado e a mente já disparando preocupações",
  "Você que evita situações sociais por medo de ser julgado",
  "Você que tem ataques de pânico e sente que vai perder o controle",
  "Você que se preocupa excessivamente com tudo, o tempo todo",
  "Você que tem dificuldade para dormir porque a mente não para",
  "Você que se sente sozinho na sua luta contra a ansiedade",
  "Você que já tentou de tudo e parece que nada funciona",
  "Você que quer ferramentas práticas, não apenas teorias",
  "Você que busca paz interior — e está disposto a construir essa paz, um passo de cada vez"
];

export const WHAT_YOU_WILL_DISCOVER: string[] = [
  "A ansiedade não é sua inimiga — é um sistema de alarme que pode ser recalibrado",
  "Você não está sozinho — milhões de pessoas compartilham essa experiência",
  "O ciclo da ansiedade pode ser quebrado — e você tem o poder de fazer isso",
  "Suas crenças mais profundas sobre si mesmo podem ser transformadas",
  "O autocuidado não é egoísmo — é a base para cuidar de tudo e de todos",
  "A paz interior não é um destino — é uma prática diária que você pode cultivar",
  "Você é mais forte do que imagina — e tem recursos que nem sabia que possuía"
];

export const WHAT_YOU_WILL_LEARN: string[] = [
  "Identificar os gatilhos que ativam sua ansiedade",
  "Transformar seu diálogo interno — do crítico para o compassivo",
  "Usar a respiração como âncora nos momentos de pânico",
  "Praticar a atenção plena no dia a dia — mesmo com uma agenda corrida",
  "Cuidar do corpo como parte fundamental do cuidado com a mente",
  "Construir relacionamentos que te sustentam (e se afastar dos que te esgotam)",
  "Expressar sua criatividade como válvula de escape",
  "Enfrentar seus medos passo a passo, com coragem e autocompaixão",
  "Prevenir recaídas e manter o equilíbrio a longo prazo"
];

export const OBJECTIONS: ObjectionItem[] = [
  {
    question: "Já tentei de tudo e nada funciona. Por que este livro seria diferente?",
    answer:
      "Eu entendo essa sensação. Já ouvi isso de centenas de pessoas no meu consultório. A diferença está na abordagem: este livro não te dá uma fórmula mágica. Ele te dá uma caixa de ferramentas. E mais importante: ele te ensina como usar cada ferramenta no seu ritmo, respeitando suas limitações. Você não precisa aplicar tudo de uma vez. A transformação não acontece da noite para o dia — mas acontece. E começa com um único passo."
  },
  {
    question: "Não tenho tempo para ler um livro inteiro.",
    answer:
      "Entendo perfeitamente. A vida é corrida. Mas este livro foi pensado para ser lido em pequenas doses. Cada capítulo é independente, e você pode começar pelo que mais te interessa no momento. Além disso, as práticas são curtas — 5 minutos por dia já fazem diferença. Se você tem tempo para se preocupar, tem tempo para aprender a acalmar sua mente."
  },
  {
    question: "Este livro é para mim ou é mais um manual genérico?",
    answer:
      "Este livro foi escrito a partir de anos de atendimento clínico, ouvindo histórias reais de pessoas como você. Cada capítulo reflete uma necessidade real que meus pacientes trouxeram ao consultório. Não é um livro genérico. É um livro humano, com exemplos da vida real, linguagem acolhedora e ferramentas que funcionam na prática."
  },
  {
    question: "E se eu precisar de ajuda além do livro?",
    answer:
      "Este livro é um guia complementar, não um substituto para a terapia. Se a ansiedade estiver te paralisando, te impedindo de viver sua vida, procure um psicólogo ou psiquiatra. Isso não é fraqueza — é um ato de profunda sabedoria e amor próprio. Veja este livro e a terapia como aliados."
  },
  {
    question: "O livro realmente vale o investimento?",
    answer:
      "Pense no custo da ansiedade na sua vida. As noites mal dormidas, a energia desperdiçada, as oportunidades perdidas, os relacionamentos prejudicados. Agora pense: quanto vale a sua paz interior? Este livro custa menos do que uma sessão de terapia — e oferece ferramentas que você pode usar pelo resto da vida."
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "1. Este livro substitui a terapia?",
    answer:
      "Não. Este livro é um guia complementar e uma ferramenta de autoconhecimento. Ele não substitui, em hipótese alguma, o trabalho de um psicólogo ou psiquiatra. Se a ansiedade estiver te paralisando, procure ajuda profissional. Isso não é fraqueza — é sabedoria."
  },
  {
    question: "2. O livro é apenas para quem tem ansiedade severa?",
    answer:
      "Não. Este livro é para qualquer pessoa que queira compreender melhor sua ansiedade e aprender ferramentas para lidar com ela — desde quem tem episódios leves até quem convive com quadros mais intensos. As ferramentas são escaláveis e aplicáveis em diferentes níveis de intensidade."
  },
  {
    question: "3. Quanto tempo leva para ver resultados?",
    answer:
      "Cada pessoa é única. Algumas sentem alívio imediato com as práticas de respiração e atenção plena. Outras percebem mudanças mais profundas após algumas semanas de prática consistente. O importante é a constância, não a velocidade."
  },
  {
    question: "4. Posso ler apenas os capítulos que me interessam mais?",
    answer:
      "Sim! O livro foi estruturado para ser lido de forma flexível. Você pode começar pelo capítulo que mais ressoa com sua experiência atual. Cada capítulo é independente, embora a leitura completa ofereça uma visão mais integrada."
  },
  {
    question: "5. O livro está disponível em outros formatos?",
    answer:
      "Atualmente, o livro está disponível em formato e-book (PDF), compatível com todos os dispositivos — computador, tablet, celular e leitores digitais. Você recebe o arquivo imediatamente após a compra e pode ler onde e quando quiser."
  }
];

export interface BonusItem {
  title: string;
  description: string;
  features: string[];
  value: string;
}

export const BONUS_ITEM: BonusItem = {
  title: "Guia Prático: 21 Dias para Acalmar sua Mente",
  description:
    "Um caderno de exercícios diários em PDF elaborado pela psicóloga Glaucia Freitas com atividades breves de 5 a 10 minutos para consolidação dos aprendizados do livro.",
  features: [
    "21 exercícios diários de TCC aplicados à rotina",
    "Áudio-guia em texto com técnicas de respiração 4-7-8",
    "Checklist de monitoramento de gatilhos ansiosos",
    "Roteiro para desativar crises noturnas em minutos"
  ],
  value: "R$ 47,00"
};
