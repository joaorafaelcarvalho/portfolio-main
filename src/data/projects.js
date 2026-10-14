const projects = [
  {
    id: "kombat-ia",
    title: "Kombat IA",
    category: "IA Generativa",
    institution: "ESTCB / IPCB",
    shortDescription: "Jogo de luta interativo que explora a integração de IA generativa no processo de criação de software, mecânicas de combate e engenharia de prompts.",
    stack: ["JavaScript", "IA Generativa", "Prompt Engineering", "Web"],
    featured: true,
    description: [
      "O Kombat IA é um jogo de luta interativo, explorando a integração de Inteligência Artificial generativa no processo de criação de software. O projeto envolveu a implementação da lógica de jogo, das mecânicas de combate, das regras e dos sistemas de interação e feedback ao jogador, com recurso à engenharia de prompts como ferramenta de apoio ao desenvolvimento.",
      "Ao longo do projeto, foram trabalhadas linguagens e tecnologias de programação para estruturar o funcionamento do jogo, implementar as suas funcionalidades e desenvolver uma experiência interativa e funcional. Este trabalho permitiu consolidar competências em programação, desenvolvimento de aplicações multimédia e utilização de ferramentas de IA generativa."
    ],
    images: [
      { src: "/kombat-ia-1.png" },
      { src: "/kombat-ia-2.png"},
      { src: "/kombat-ia-3.png" },
      { src: "/kombat-ia-4.png" },
      { src: "/kombat-ia-5.png" }
    ],
    repoUrl: null,
    liveUrl: "https://kombatia.vercel.app/"
  },
  {
    id: "alien-invasion",
    title: "Alien Invasion",
    category: "Computação Gráfica",
    institution: "ESTCB / IPCB",
    shortDescription: "Jogo 2D desenvolvido em C++ com OpenGL e FreeGLUT, com mecânicas dinâmicas de combate espacial e rotação 360°.",
    stack: ["C++", "OpenGL", "FreeGLUT"],
    featured: true,
    description: [
      "O Alien Invasion é um videojogo 2D desenvolvido em C++ com recurso à biblioteca gráfica OpenGL e ao toolkit FreeGLUT, no âmbito da unidade curricular de Computação Gráfica.",
      "Inspirado no clássico Space Invaders, o projeto evoluiu para uma experiência de combate espacial dinâmica, na qual o jogador dispõe de liberdade de movimento e rotação em 360 graus, enfrentando desafios num ambiente bidimensional.",
      "Este projeto permitiu explorar e aplicar conceitos fundamentais de computação gráfica, programação e desenvolvimento de videojogos, desde a conceção das mecânicas de jogabilidade e dos elementos visuais até à implementação dos sistemas de movimento, rotação e interação.",
      "O desenvolvimento foi dividido em duas vertentes principais: o Game Design Document (GDD), dedicado à definição da experiência de jogo, e o relatório técnico, centrado na arquitetura do código, na gestão de memória e nos algoritmos matemáticos responsáveis pelo funcionamento do motor do jogo.",
      "O Alien Invasion representou uma oportunidade para aprofundar competências em C++, OpenGL e modelação matemática aplicada à computação gráfica, aliando a criatividade à resolução de desafios técnicos no desenvolvimento de um videojogo interativo."
    ],
    images: [
      { src: "/alien-invasion-1.png" },
      { src: "/alien-invasion-2.png" }
    ],
    repoUrl: null,
    liveUrl: null
  },
  {
    id: "sigrae",
    title: "Sistema Interativo para Geração de Recursos e Avaliação Educativa",
    category: "IA Generativa",
    institution: "ESTCB / IPCB",
    shortDescription: "Sistema interativo que integra IA generativa no contexto educativo para apoiar a criação de recursos pedagógicos e processos de avaliação.",
    stack: ["Python", "JavaScript", "CSS"],
    featured: true,
    description: [
      "Este projeto consiste no desenvolvimento de um sistema interativo que integra Inteligência Artificial generativa no contexto educativo, com o objetivo de apoiar a criação de recursos pedagógicos e facilitar os processos de avaliação da aprendizagem.",
      "Desenvolvido no âmbito da unidade curricular de Design de Sistemas Interativos, o projeto explora o potencial da inteligência artificial na criação de experiências de aprendizagem mais personalizadas, dinâmicas e adaptadas às necessidades dos alunos.",
      "Ao longo do desenvolvimento, foram considerados aspetos relacionados com a interação entre o utilizador e o sistema, a usabilidade e a aplicação da IA como ferramenta de apoio ao trabalho docente.",
      "Este trabalho permitiu aprofundar conhecimentos em design de sistemas interativos e explorar novas possibilidades de aplicação da Inteligência Artificial generativa na educação, procurando desenvolver uma solução que promova a eficiência na criação de conteúdos e contribua para uma experiência de aprendizagem mais envolvente e personalizada."
    ],
    images: [
      { src: "dist/quiz-1.JPG" },
      { src: "dist/quiz-2.JPG" },
      { src: "dist/quiz-3.JPG" },
      { src: "dist/quiz-4.JPG" },
      { src: "dist/quiz-5.JPG" }
    ],
    repoUrl: null,
    liveUrl: null
  },
  {
    id: "Felixbus",
    title: "Felixbus",
    category: "Base de dados/ Web",
    institution: "ESTCB / IPCB",
    shortDescription: "Sistema web desenvolvido para gestão/compra  de bilhetes de transporte rodoviário, com integração de base de dados relacional e funcionalidades de pesquisa e gestão de dados.",
    stack: ["PHP", "MySQL", "CSS", "HTML"],
    featured: true,
    description: [
  "Este projeto consistiu no desenvolvimento de uma aplicação web destinada à gestão de um website para uma empresa de transportes rodoviários de passageiros, recorrendo às tecnologias PHP e SQL. O trabalho teve como principal objetivo implementar funcionalidades que permitissem gerir e organizar a informação de forma eficiente, através da integração de uma base de dados.",      
"Ao longo do projeto, foram desenvolvidas competências de programação, análise e resolução de problemas, bem como funcionalidades de pesquisa, gestão de dados e importação e exportação da base de dados. Este trabalho permitiu consolidar conhecimentos na área do desenvolvimento web e da gestão de bases de dados, aplicando conceitos teóricos na construção de uma solução funcional."
],
    images: [
      { src: "dist/felix-1.JPG" },
      { src: "dist/felix-2.JPG" },
      { src: "dist/felix-3.JPG" },
      { src: "dist/felix-4.JPG" },
      { src: "dist/felix-5.JPG" }
    ],
    repoUrl: null,
    liveUrl: null
  },
    {
    id: "portal-gestao-ae",
    title: "Plataforma de Gestão e Serviços AE ESTCB",
    category: "Engenharia de Software & Web",
    institution: "AE ESTCB",
    shortDescription: "Sistema web desenvolvido para gestão de iniciativas académicas, apoio aos estudantes e organização de recursos da Associação.",
    stack: ["React", "Node.js", "MySQL", "Tailwind CSS"],
    featured: true,
    description: [
      "Desenvolvido para modernizar os processos internos e o atendimento ao estudante na Associação de Estudantes da ESTCB, o sistema integra módulos de gestão de iniciativas, controlo de recursos e comunicação direta com a comunidade académica.",
      "O projeto aliou a experiência prática de sete anos em dirigismo associativo com a arquitetura de software moderno, permitindo automatizar tarefas administrativas e assegurar um canal digital fiável e acessível a todos os estudantes.",
      "Implementou funcionalidades de base de dados relacional (MySQL), API em Node.js e interface reativa e intuitiva em React, otimizando o fluxo de trabalho da direção e dos colaboradores da associação."
    ],
    images: [

    ],
    repoUrl: null,
    liveUrl: null
  }
];

export default projects;
