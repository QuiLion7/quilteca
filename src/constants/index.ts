const currentYear = new Date().getFullYear();

export const years = Array.from(
  { length: currentYear - 1994 + 1 },
  (_, i) => 1994 + i,
).reverse();

export const areaOfKnowledge = [
  "Linguagens",
  "Matemática",
  "Humanas",
  "Natureza",
];

export const curriculumComponents = {
  Linguagens: [
    "Artes",
    "Educação Física",
    "Língua Espanhola",
    "Língua Inglesa",
    "Língua Portuguesa",
  ],
  Matemática: ["Matemática"],
  Humanas: ["Filosofia", "Geografia", "História", "Sociologia"],
  Natureza: ["Biologia", "Física", "Química"],
};

export const difficultyLevel = [
  "Muito Fácil",
  "Fácil",
  "Médio",
  "Difícil",
  "Muito Difícil",
];

export const authorsList = [
  "Adaptada",
  "ENEM",
  "Olimpíada",
  "SISEDU",
  "Vestibular",
];

export const subjectsList = {
  Artes: [
    "História da Arte",
    "Teoria da Arte",
    "Práticas Artísticas",
    "Arte Contemporânea",
    "Arte Digital",
  ],
  Biologia: [
    "Evolução e Diversidade Biológica",
    "Ecologia",
    "Genética e Biologia Molecular",
    "Fisiologia e Anatomia",
    "Biodiversidade e Conservação",
  ],
  "Educação Física": [
    "Desenvolvimento Psicomotor",
    "Saúde e Bem-estar",
    "Práticas Esportivas",
    "Educação Física e Saúde Mental",
    "Ginástica e Esportes de Equipes",
  ],
  Física: [
    "Mecânica Clássica",
    "Mecânica Quântica",
    "Física do Estado Sólido",
    "Física Atômica e Molecular",
    "Física do Espaço e Tempo",
  ],
  Filosofia: [
    "Epistemologia",
    "Metafísica",
    "Ética",
    "Filosofia da Ciência",
    "Filosofia da Mente",
  ],
  Geografia: [
    "Geografia Física",
    "Geografia Humana",
    "Geografia Ambiental",
    "Geografia Cultural",
    "Geografia Urbana",
  ],
  História: [
    "História Antiga",
    "História Medieval",
    "História Moderna",
    "História Contemporânea",
    "História Global",
  ],
  "Língua Espanhola": [
    "Gramática Espanhola",
    "Literatura Espanhola",
    "Cultura Espanhola",
    "Língua Espanhola e Tecnologia",
    "Língua Espanhola e Mídia",
  ],
  "Língua Inglesa": [
    "Gramática Inglesa",
    "Literatura Inglesa",
    "Cultura Inglesa",
    "Língua Inglesa e Tecnologia",
    "Língua Inglesa e Mídia",
  ],
  "Língua Portuguesa": [
    "Gramática Portuguesa",
    "Literatura Portuguesa",
    "Cultura Portuguesa",
    "Língua Portuguesa e Tecnologia",
    "Língua Portuguesa e Mídia",
  ],
  Matemática: [
    "Matemática Básica",
    "Álgebra",
    "Cálculo",
    "Estatística",
    "Matemática Aplicada",
  ],
  Química: [
    "Química Geral",
    "Química Orgânica",
    "Química Inorgânica",
    "Fisico-Química",
    "Bioquímica",
    "Química Ambiental",
  ],
  Sociologia: [
    "Teorias Sociais",
    "Sociologia da Família",
    "Sociologia da Educação",
    "Sociologia da Cultura",
    "Sociologia da Política",
  ],
};

interface Subject {
  [topic: string]: (string | Subtopic)[];
}

interface Subtopic {
  [subtopic: string]: string[];
}

interface SpecificSubjectList {
  [subject: string]: Subject[];
}

export const specificSubjectList: SpecificSubjectList = {
  Artes: [
    {
      "História da Arte": [
        "Pré-História da Arte",
        "Arte Antiga",
        "Arte Medieval",
        "Renascimento",
        "Barroco",
        "Impressionismo",
        "Modernismo",
        "Arte Contemporânea",
      ],
    },
    {
      "Teoria da Arte": [
        "Estética",
        "Semiótica",
        "Teoria da Cor",
        "Teoria da Forma",
        "Teoria da Composição",
      ],
    },
    {
      "Práticas Artísticas": [
        "Desenho",
        "Pintura",
        "Escultura",
        "Fotografia",
        "Arte Digital",
        "Artes Gráficas",
        "Arte Performática",
      ],
    },
    {
      "Arte Contemporânea": [
        "Movimentos Artísticos Contemporâneos",
        "Artistas Contemporâneos",
        "Técnicas Contemporâneas",
        "Temas Contemporâneos",
      ],
    },
    {
      "Arte Digital": [
        "Arte Gerada por Computador",
        "Arte de Mídia Digital",
        "Arte Interativa",
        "Arte em Rede",
        "Estética da Arte Digital",
      ],
    },
  ],
  Biologia: [
    {
      "Evolução e Diversidade Biológica": [
        "Teoria da Evolução",
        "Evidências da Evolução",
        "Processos Evolutivos",
        "Diversidade Biológica",
      ],
    },
    {
      Ecologia: [
        "Ecossistemas",
        "Cadeias Alimentares",
        "Ciclos Biogeoquímicos",
        "Sucessão Ecológica",
      ],
    },
    {
      "Genética e Biologia Molecular": [
        "Mendelismo",
        "Genética de Populações",
        "DNA e RNA",
        "Replicação e Transcrição",
        "Expressão Gênica",
        "Engenharia Genética",
      ],
    },
    {
      "Fisiologia e Anatomia": [
        "Sistemas Orgânicos",
        "Anatomia Humana",
        "Fisiologia Humana",
        "Homeostase",
        "Fisiologia Vegetal",
      ],
    },
    {
      "Biodiversidade e Conservação": [
        "Conservação de Espécies",
        "Preservação de Ecossistemas",
        "Impacto Ambiental",
        "Desenvolvimento Sustentável",
      ],
    },
  ],
  "Educação Física": [
    {
      "Desenvolvimento Psicomotor": [
        "Coordenação Motora",
        "Desenvolvimento Neuromotor",
        "Percepção Corporal",
      ],
    },
    {
      "Saúde e Bem-estar": [
        "Alimentação Saudável",
        "Atividade Física",
        "Prevenção de Lesões",
        "Saúde Mental",
      ],
    },
    {
      "Práticas Esportivas": [
        "Esportes Individuais",
        "Esportes Coletivos",
        "Atividades Recreativas",
      ],
    },
    {
      "Educação Física e Saúde Mental": [
        "Terapia Ocupacional",
        "Exercícios Terapêuticos",
        "Meditação e Relaxamento",
      ],
    },
    {
      "Ginástica e Esportes de Equipes": [
        "Ginástica Artística",
        "Ginástica Rítmica",
        "Basquetebol",
        "Futebol",
        "Voleibol",
      ],
    },
  ],
  Física: [
    {
      "Mecânica Clássica": [
        "Cinemática",
        "Dinâmica",
        "Leis de Newton",
        "Gravitação",
      ],
    },
    {
      "Mecânica Quântica": [
        "Dualidade Onda-Partícula",
        "Modelo Atômico de Bohr",
        "Princípio da Incerteza",
        "Mecânica Ondulatória",
      ],
    },
    {
      "Física do Estado Sólido": [
        "Estrutura Cristalina",
        "Propriedades dos Materiais",
        "Semicondutores",
        "Materiais Magnéticos",
      ],
    },
    {
      "Física Atômica e Molecular": [
        "Estrutura Atômica",
        "Modelos Atômicos",
        "Ligações Químicas",
        "Espectroscopia",
      ],
    },
    {
      "Física do Espaço e Tempo": [
        "Relatividade Restrita",
        "Relatividade Geral",
        "Cosmologia",
        "Buracos Negros",
      ],
    },
  ],
  Filosofia: [
    {
      Epistemologia: [
        "Teoria do Conhecimento",
        "Racionalismo",
        "Empirismo",
        "Ceticismo",
      ],
    },
    {
      Metafísica: [
        "Natureza da Realidade",
        "Ontologia",
        "Cosmologia",
        "Existencialismo",
      ],
    },
    {
      Ética: [
        "Teorias Éticas",
        "Ética Normativa",
        "Ética Aplicada",
        "Bioética",
      ],
    },
    {
      "Filosofia da Ciência": [
        "Natureza da Ciência",
        "Metodologia Científica",
        "Filosofia da Matemática",
        "Filosofia da Física",
      ],
    },
    {
      "Filosofia da Mente": [
        "Consciência",
        "Intencionalidade",
        "Dualismo",
        "Materialismo",
      ],
    },
  ],
  Geografia: [
    {
      "Geografia Física": [
        "Geomorfologia",
        "Climatologia",
        "Hidrografia",
        "Biogeografia",
      ],
    },
    {
      "Geografia Humana": [
        "Demografia",
        "Migrações",
        "Urbanização",
        "Globalização",
      ],
    },
    {
      "Geografia Ambiental": [
        "Poluição",
        "Desmatamento",
        "Desenvolvimento Sustentável",
        "Conservação Ambiental",
      ],
    },
    {
      "Geografia Cultural": [
        "Cultura",
        "Etnografia",
        "Patrimônio Cultural",
        "Turismo Cultural",
      ],
    },
    {
      "Geografia Urbana": [
        "Planejamento Urbano",
        "Gestão de Espaços Urbanos",
        "Infraestrutura Urbana",
        "Problemas Socioambientais Urbanos",
      ],
    },
  ],
  História: [
    {
      "História Antiga": [
        "Civilizações Antigas",
        "Mesopotâmia",
        "Egito",
        "Grécia Antiga",
        "Roma Antiga",
      ],
    },
    {
      "História Medieval": [
        "Idade Média",
        "Feudalismo",
        "Cruzadas",
        "Renascimento Carolíngio",
      ],
    },
    {
      "História Moderna": [
        "Renascimento",
        "Reforma Protestante",
        "Absolutismo",
        "Revolução Científica",
        "Iluminismo",
      ],
    },
    {
      "História Contemporânea": [
        "Revolução Francesa",
        "Revolução Industrial",
        "Imperialismo",
        "Primeira Guerra Mundial",
        "Segunda Guerra Mundial",
      ],
    },
    {
      "História Global": [
        "Globalização",
        "Colonialismo",
        "Descolonização",
        "Guerra Fria",
        "Novas Tecnologias e Comunicações",
      ],
    },
  ],
  "Língua Espanhola": [
    {
      "Gramática Espanhola": [
        "Morfologia",
        "Sintaxe",
        "Semântica",
        "Fonologia",
      ],
    },
    {
      "Literatura Espanhola": [
        "Épocas Literárias",
        "Autores Representativos",
        "Gêneros Literários",
        "Movimentos Literários",
      ],
    },
    {
      "Cultura Espanhola": [
        "História e Cultura",
        "Tradições e Costumes",
        "Arte e Arquitetura",
        "Gastronomia",
      ],
    },
    {
      "Língua Espanhola e Tecnologia": [
        "Internet e Redes Sociais",
        "Tecnologias de Comunicação",
        "Inovação Tecnológica",
        "Impacto da Tecnologia na Sociedade",
      ],
    },
    {
      "Língua Espanhola e Mídia": [
        "Mídia Impressa",
        "Mídia Digital",
        "Jornalismo",
        "Publicidade e Propaganda",
      ],
    },
  ],
  "Língua Inglesa": [
    {
      "Gramática Inglesa": [
        "Parts of Speech",
        "Sentence Structure",
        "Verb Tenses",
        "Punctuation",
      ],
    },
    {
      "Literatura Inglesa": [
        "British Literature",
        "American Literature",
        "World Literature",
        "Literary Movements",
      ],
    },
    {
      "Cultura Inglesa": [
        "British Culture",
        "American Culture",
        "Globalization and English",
        "Cultural Identities",
      ],
    },
    {
      "Língua Inglesa e Tecnologia": [
        "Digital Communication",
        "Language Learning Apps",
        "Online Learning Platforms",
        "Artificial Intelligence and Language",
      ],
    },
    {
      "Língua Inglesa e Mídia": [
        "Mass Media",
        "Digital Media",
        "Journalism",
        "Advertising",
      ],
    },
  ],
  "Língua Portuguesa": [
    {
      "Gramática Portuguesa": [
        "Morfologia",
        "Sintaxe",
        "Semântica",
        "Fonologia",
      ],
    },
    {
      "Literatura Portuguesa": [
        "Épocas Literárias",
        "Autores Representativos",
        "Gêneros Literários",
        "Movimentos Literários",
      ],
    },
    {
      "Cultura Portuguesa": [
        "História e Cultura",
        "Tradições e Costumes",
        "Arte e Arquitetura",
        "Gastronomia",
      ],
    },
    {
      "Língua Portuguesa e Tecnologia": [
        "Internet e Redes Sociais",
        "Tecnologias de Comunicação",
        "Inovação Tecnológica",
        "Impacto da Tecnologia na Sociedade",
      ],
    },
    {
      "Língua Portuguesa e Mídia": [
        "Mídia Impressa",
        "Mídia Digital",
        "Jornalismo",
        "Publicidade e Propaganda",
      ],
    },
  ],
  Matemática: [
    {
      "Matemática Básica": [
        "Operações Fundamentais",
        "Números Naturais",
        "Números Inteiros",
        "Números Racionais",
        "Números Reais",
      ],
    },
    {
      Álgebra: [
        "Equações e Inequações",
        "Sistemas Lineares",
        "Matrizes",
        "Determinantes",
        "Análise Combinatória",
      ],
    },
    {
      Cálculo: [
        "Limites e Continuidade",
        "Derivadas",
        "Integrais",
        "Equações Diferenciais",
      ],
    },
    {
      Estatística: [
        "Análise Descritiva",
        "Probabilidade",
        "Distribuições de Probabilidade",
        "Inferência Estatística",
      ],
    },
    {
      "Matemática Aplicada": [
        "Geometria Analítica",
        "Cálculo Vetorial",
        "Matemática Financeira",
        "Modelagem Matemática",
      ],
    },
  ],
  Química: [
    {
      "Química Geral": [
        "Introdução à Química",
        "Estrutura da Matéria",
        "Estados da Matéria",
        "Termoquímica",
        "Cinética Química",
        "Equilíbrio Químico",
      ],
    },
    {
      "Química Orgânica": [
        "Introdução à Química Orgânica",
        "Hidrocarbonetos",
        "Funções Oxigenadas",
        "Funções Nitrogenadas",
        "Reações Orgânicas",
      ],
    },
    {
      "Química Inorgânica": [
        "Ácidos e Bases",
        "Ligações Químicas",
        "Tabela Periódica",
      ],
    },
    {
      "Fisico-Química": [
        "Termodinâmica",
        "Eletroquímica",
        "Cinética Química",
        "Equilíbrio Químico",
        "Estudo dos Gases",
      ],
    },
    {
      Bioquímica: ["Compostos Bioquímicos", "Metabolismo", "Enzimologia"],
    },
    {
      "Química Ambiental": [
        "Poluentes Ambientais",
        "Tratamento de Efluentes",
        "Impactos Ambientais",
        "Legislação Ambiental",
      ],
    },
  ],
  Sociologia: [
    {
      "Teorias Sociais": [
        "Funcionalismo",
        "Conflito",
        "Interacionismo Simbólico",
        "Estruturalismo",
        "Pós-estruturalismo",
      ],
    },
    {
      "Sociologia da Família": [
        "Estruturas Familiares",
        "Transformações na Família Contemporânea",
        "Dinâmica Familiar",
        "Paternidade e Maternidade",
      ],
    },
    {
      "Sociologia da Educação": [
        "Sistema Educacional",
        "Desigualdade Educacional",
        "Políticas Educacionais",
        "Educação Inclusiva",
      ],
    },
    {
      "Sociologia da Cultura": [
        "Cultura Popular",
        "Indústria Cultural",
        "Cultura de Massa",
        "Globalização Cultural",
      ],
    },
    {
      "Sociologia da Política": [
        "Teorias Políticas",
        "Participação Política",
        "Movimentos Sociais",
        "Democracia e Autoritarismo",
      ],
    },
  ],
};

export const bnccCompetenceList = {
  Linguagens: [
    "Competência 1",
    "Competência 2",
    "Competência 3",
    "Competência 4",
    "Competência 5",
    "Competência 6",
    "Competência 7",
  ],
  Matemática: [
    "Competência 1",
    "Competência 2",
    "Competência 3",
    "Competência 4",
    "Competência 5",
  ],
  Humanas: [
    "Competência 1",
    "Competência 2",
    "Competência 3",
    "Competência 4",
    "Competência 5",
    "Competência 6",
  ],
  Natureza: ["Competência 1", "Competência 2", "Competência 3"],
};

interface BNCCCompetences {
  [competence: string]: string[];
}

interface BNCCAbilities {
  [area: string]: BNCCCompetences;
}

export const bnccAbilitysList: BNCCAbilities = {
  Linguagens: {
    "Competência 1": [
      "EM13CHS101",
      "EM13CHS102",
      "EM13CHS103",
      "EM13CHS104",
      "EM13CHS105",
      "EM13CHS106",
    ],
    "Competência 2": [
      "EM13CHS201",
      "EM13CHS202",
      "EM13CHS203",
      "EM13CHS204",
      "EM13CHS205",
      "EM13CHS206",
    ],
    "Competência 3": [
      "EM13CHS301",
      "EM13CHS302",
      "EM13CHS303",
      "EM13CHS304",
      "EM13CHS305",
      "EM13CHS306",
    ],
    "Competência 4": ["EM13CHS401", "EM13CHS402", "EM13CHS403", "EM13CHS404"],
    "Competência 5": ["EM13CHS501", "EM13CHS502", "EM13CHS503", "EM13CHS504"],
    "Competência 6": [
      "EM13CHS601",
      "EM13CHS602",
      "EM13CHS603",
      "EM13CHS604",
      "EM13CHS605",
      "EM13CHS606",
    ],
  },
  Matemática: {
    "Competência 1": [
      "EM13MAT101",
      "EM13MAT102",
      "EM13MAT103",
      "EM13MAT104",
      "EM13MAT105",
      "EM13MAT106",
    ],
    "Competência 2": ["EM13MAT201", "EM13MAT202", "EM13MAT203"],
    "Competência 3": [
      "EM13MAT301",
      "EM13MAT302",
      "EM13MAT303",
      "EM13MAT304",
      "EM13MAT305",
      "EM13MAT306",
      "EM13MAT307",
      "EM13MAT308",
      "EM13MAT309",
      "EM13MAT310",
      "EM13MAT311",
      "EM13MAT312",
      "EM13MAT313",
      "EM13MAT314",
      "EM13MAT315",
      "EM13MAT316",
    ],
    "Competência 4": [
      "EM13MAT401",
      "EM13MAT402",
      "EM13MAT403",
      "EM13MAT404",
      "EM13MAT405",
      "EM13MAT406",
      "EM13MAT407",
    ],
    "Competência 5": [
      "EM13MAT501",
      "EM13MAT502",
      "EM13MAT503",
      "EM13MAT504",
      "EM13MAT505",
      "EM13MAT506",
      "EM13MAT507",
      "EM13MAT508",
      "EM13MAT509",
      "EM13MAT510",
      "EM13MAT511",
    ],
  },
  Humanas: {
    "Competência 1": [
      "EM13CHS101",
      "EM13CHS102",
      "EM13CHS103",
      "EM13CHS104",
      "EM13CHS105",
      "EM13CHS106",
    ],
    "Competência 2": [
      "EM13CHS201",
      "EM13CHS202",
      "EM13CHS203",
      "EM13CHS204",
      "EM13CHS205",
      "EM13CHS206",
    ],
    "Competência 3": [
      "EM13CHS301",
      "EM13CHS302",
      "EM13CHS303",
      "EM13CHS304",
      "EM13CHS305",
      "EM13CHS306",
    ],
    "Competência 4": ["EM13CHS401", "EM13CHS402", "EM13CHS403", "EM13CHS404"],
    "Competência 5": ["EM13CHS501", "EM13CHS502", "EM13CHS503", "EM13CHS504"],
    "Competência 6": [
      "EM13CHS601",
      "EM13CHS602",
      "EM13CHS603",
      "EM13CHS604",
      "EM13CHS605",
      "EM13CHS606",
    ],
  },
  Natureza: {
    "Competência 1": [
      "EM13CNT101",
      "EM13CNT102",
      "EM13CNT103",
      "EM13CNT104",
      "EM13CNT105",
      "EM13CNT106",
      "EM13CNT107",
    ],
    "Competência 2": [
      "EM13CNT201",
      "EM13CNT202",
      "EM13CNT203",
      "EM13CNT204",
      "EM13CNT205",
      "EM13CNT206",
      "EM13CNT207",
      "EM13CNT208",
      "EM13CNT209",
    ],
    "Competência 3": [
      "EM13CNT301",
      "EM13CNT302",
      "EM13CNT303",
      "EM13CNT304",
      "EM13CNT305",
      "EM13CNT306",
      "EM13CNT307",
      "EM13CNT308",
      "EM13CNT309",
      "EM13CNT310",
    ],
  },
};

export const bnccCompetence = {
  Linguagens: [
    "Compreender o funcionamento das diferentes linguagens e práticas culturais (artísticas, corporais e verbais) e mobilizar esses conhecimentos na recepção e produção de discursos nos diferentes campos de atuação social e nas diversas mídias, para ampliar as formas de participação social, o entendimento e as possibilidades de explicação e interpretação crítica da realidade e para continuar aprendendo.",
    "Compreender os processos identitários, conflitos e relações de poder que permeiam as práticas sociais de linguagem, respeitando as diversidades e a pluralidade de ideias e posições, e atuar socialmente com base em princípios e valores assentados na democracia, na igualdade e nos Direitos Humanos, exercitando o autoconhecimento, a empatia, o diálogo, a resolução de conflitos e a cooperação, e combatendo preconceitos de qualquer natureza.",
    "Utilizar diferentes linguagens (artísticas, corporais e verbais) para exercer, com autonomia e colaboração, protagonismo e autoria na vida pessoal e coletiva, de forma crítica, criativa, ética e solidária, defendendo pontos de vista que respeitem o outro e promovam os Direitos Humanos, a consciência socioambiental e o consumo responsável, em âmbito local, regional e global.",
    "Compreender as línguas como fenômeno (geo)político, histórico, cultural, social, variável, heterogêneo e sensível aos contextos de uso, reconhecendo suas variedades e vivenciando-as como formas de expressões identitárias, pessoais e coletivas, bem como agindo no enfrentamento de preconceitos de qualquer natureza.",
    "Compreender os processos de produção e negociação de sentidos nas práticas corporais, reconhecendo-as e vivenciando-as como formas de expressão de valores e identidades, em uma perspectiva democrática e de respeito à diversidade.",
    "Apreciar esteticamente as mais diversas produções artísticas e culturais, considerando suas características locais, regionais e globais, e mobilizar seus conhecimentos sobre as linguagens artísticas para dar significado e (re)construir produções autorais individuais e coletivas, exercendo protagonismo de maneira crítica e criativa, com respeito à diversidade de saberes, identidades e culturas.",
    "Mobilizar práticas de linguagem no universo digital, considerando as dimensões técnicas, críticas, criativas, éticas e estéticas, para expandir as formas de produzir sentidos, de engajar-se em práticas autorais e coletivas, e de aprender a aprender nos campos da ciência, cultura, trabalho, informação e vida pessoal e coletiva.",
  ],
  Matemática: [
    "Utilizar estratégias, conceitos e procedimentos matemáticos para interpretar situações em diversos contextos, sejam atividades cotidianas, sejam fatos das Ciências da Natureza e Humanas, das questões socioeconômicas ou tecnológicas, divulgados por diferentes meios, de modo a contribuir para uma formação geral.",
    "Propor ou participar de ações para investigar desafios do mundo contemporâneo e tomar decisões éticas e socialmente responsáveis, com base na análise de problemas sociais, como os voltados a situações de saúde, sustentabilidade, das implicações da tecnologia no mundo do trabalho, entre outros, mobilizando e articulando conceitos, procedimentos e linguagens próprios da Matemática.",
    "Utilizar estratégias, conceitos, definições e procedimentos matemáticos para interpretar, construir modelos e resolver problemas em diversos contextos, analisando a plausibilidade dos resultados e a adequação das soluções propostas, de modo a construir argumentação consistente.",
    "Compreender e utilizar, com flexibilidade e precisão, diferentes registros de representação matemáticos (algébrico, geométrico, estatístico, computacional etc.), na busca de solução e comunicação de resultados de problemas.",
    "Investigar e estabelecer conjecturas a respeito de diferentes conceitos e propriedades matemáticas, empregando estratégias e recursos, como observação de padrões, experimentações e diferentes tecnologias, identificando a necessidade, ou não, de uma demonstração cada vez mais formal na validação das referidas conjecturas.",
  ],
  Natureza: [
    "Analisar fenômenos naturais e processos tecnológicos, com base nas interações e relações entre matéria e energia, para propor ações individuais e coletivas que aperfeiçoem processos produtivos, minimizem impactos socioambientais e melhorem as condições de vida em âmbito local, regional e global.",
    "Analisar e utilizar interpretações sobre a dinâmica da Vida, da Terra e do Cosmos para elaborar argumentos, realizar previsões sobre o funcionamento e a evolução dos seres vivos e do Universo, e fundamentar e defender decisões éticas e responsáveis.",
    "Investigar situações-problema e avaliar aplicações do conhecimento científico e tecnológico e suas implicações no mundo, utilizando procedimentos e linguagens próprios das Ciências da Natureza, para propor soluções que considerem demandas locais, regionais e/ou globais, e comunicar suas descobertas e conclusões a públicos variados, em diversos contextos e por meio de diferentes mídias e tecnologias digitais de informação e comunicação (TDIC).",
  ],
  Humanas: [
    "Analisar processos políticos, econômicos, sociais, ambientais e culturais nos âmbitos local, regional, nacional e mundial em diferentes tempos, a partir da pluralidade de procedimentos epistemológicos, científicos e tecnológicos, de modo a compreender e posicionar-se criticamente em relação a eles, considerando diferentes pontos de vista e tomando decisões baseadas em argumentos e fontes de natureza científica.",
    "Analisar a formação de territórios e fronteiras em diferentes tempos e espaços, mediante a compreensão das relações de poder que determinam as territorialidades e o papel geopolítico dos Estados-nações.",
    "Analisar e avaliar criticamente as relações de diferentes grupos, povos e sociedades com a natureza (produção, distribuição e consumo) e seus impactos econômicos e socioambientais, com vistas à proposição de alternativas que respeitem e promovam a consciência, a ética socioambiental e o consumo responsável em âmbito local, regional, nacional e global.",
    "Analisar as relações de produção, capital e trabalho em diferentes territórios, contextos e culturas, discutindo o papel dessas relações na construção, consolidação e transformação das sociedades.",
    "Identificar e combater as diversas formas de injustiça, preconceito e violência, adotando princípios éticos, democráticos, inclusivos e solidários, e respeitando os Direitos Humanos.",
    "Participar do debate público de forma crítica, respeitando diferentes posições e fazendo escolhas alinhadas ao exercício da cidadania e ao seu projeto de vida, com liberdade, autonomia, consciência crítica e responsabilidade.",
  ],
};
