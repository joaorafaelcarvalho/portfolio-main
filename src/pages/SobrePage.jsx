import React from 'react';
import Layout from '../components/Layout';

function SobrePage() {
  const skillCategories = [
    {
      title: "Linguagens de Programação",
      skills: ["Java", "C", "C++", "C#", "Python", "PHP", "JavaScript", "MIPS / Assembly"]
    },
    {
      title: "Frontend & Interfaces Web",
      skills: ["React.js", "Tailwind CSS", "Bootstrap", "HTML5", "CSS3", "JavaScript (ES6+)"]
    },
    {
      title: "Backend & Bases de Dados",
      skills: ["Node.js", "MySQL", "MongoDB", "REST APIs", "SQL"]
    },
    {
      title: "Computação Gráfica, IA & Ferramentas",
      skills: ["OpenGL", "FreeGLUT", "IA Generativa", "Prompt Engineering", "OutSystems", "Git & GitHub"]
    },
    {
      title: "Competências Humanas & Liderança",
      skills: ["Gestão de Equipas", "Comunicação Interpessoal", "Gestão Orçamental", "Resolução de Conflitos", "Planeamento de Eventos", "Resiliência & Organização"]
    }
  ];

  return (
    <Layout>
      <div className="w-full space-y-12">
        
        {/* Cabeçalho da Página com layout amplo */}
        <div className="border-b border-emerald-500/20 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Sobre Mim
          </h1>
          
          <div className="flex items-center gap-3">
            <a
              href="/curriculo.pdf"
              download="Joao-Carvalho-CV.pdf"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-medium py-2.5 px-4 rounded-xl text-sm transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>Descarregar CV (PDF)</span>
            </a>
          </div>
        </div>

        {/* 1. Apresentação Pessoal & Percurso Académico */}
        <section className="bg-[#080d15]/85 border border-emerald-500/25 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row gap-8 lg:gap-10 items-start">
            
            {/* Foto de perfil reduzida em 50% com bordas arredondadas */}
            <div className="shrink-0 flex flex-col items-center">
              <div className="w-50 h-50 sm:w-70 sm:h-70 rounded-3xl overflow-hidden bg-slate-950">
                <img
                  src="/foto-perfil.png"
                  alt="João Rafael Andrade de Carvalho"
                  className="w-full h-full object-cover object-top"
                />
              </div>

            </div>

            {/* Texto de Apresentação sem 'Apresentação & Percurso' e sem barra lateral verde */}
            <div className="flex-1 space-y-5">
              {/* Frase em destaque conforme pedido, sem barra lateral verde */}
              <p className="text-xl sm:text-2xl font-bold text-white leading-relaxed">
                Sou estudante de Informática e Multimédia da Escola Superior de Tecnologia na Universidade Politécnica de Castelo Branco (ESTCB / IPCB), estando atualmente no último ano da Licenciatura.
              </p>

              <div className="space-y-4 text-base text-slate-300 leading-relaxed">
                <p>
                  Ao longo de todo o meu percurso académico — desde o Ensino Profissional até à Licenciatura —, mantive praticamente sempre o <strong>estatuto de trabalhador-estudante</strong>. Conciliar exigências profissionais com os prazos e a complexidade técnica dos projetos da licenciatura desenvolveu em mim uma elevada capacidade de organização, rigor na gestão do tempo, resiliência e foco na resolução de problemas.
                </p>
                <p>
                  Atualmente, estou à procura de oportunidades de primeiro emprego onde possa aplicar os meus conhecimentos técnicos, colaborar ativamente em equipa e continuar a evoluir como profissional no setor das tecnologias de informação.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* 2. Secção Separada e Autónoma: Associação de Estudantes da ESTCB */}
        <section className="bg-[#080d15]/85 border border-emerald-500/25 rounded-2xl p-6 sm:p-8 backdrop-blur-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Associação de Estudantes da ESTCB
            </h2>
            <span className="text-xs font-mono text-grey-400 bg-grey-500/10 px-3 py-1 rounded-md border border-grey-500/20">
              2019 &ndash; 2026
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                A minha aptidão para o trabalho em equipa, comunicação interpessoal e tomada de decisões sob pressão foi largamente forjada na Associação de Estudantes da ESTCB. Desempenhei funções de dirigente associativo ininterruptamente durante 7 anos, assumindo cargos de topo na Direção: <strong>Vice-Presidente (2023)</strong> e <strong>Tesoureiro (2025)</strong>.
              </p>
              <p>
                Esta vivência implicou coordenar equipas multidisciplinares, gerir orçamentos e recursos com responsabilidade, mediar interesses de centenas de estudantes e planear eventos de grande envergadura. Foi uma escola viva de inteligência emocional, empatia e compromisso com o coletivo.
              </p>
            </div>

            <div className="md:col-span-3 flex flex-col items-center gap-4">
                        <img src="/certificado-estcb.jpg" className="w-3/4 h-auto object-contain rounded-xl"
                />
              
            </div>
          </div>
        </section>

      </div>
    </Layout>
  );
}

export default SobrePage;
