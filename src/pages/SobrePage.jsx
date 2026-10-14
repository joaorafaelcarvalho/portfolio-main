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
              download="João_Carvalho_Curriculo.pdf"
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
              <div className="w-40 h-40 sm:w-44 sm:h-44 rounded-3xl overflow-hidden border-2 border-emerald-500/40 bg-slate-950">
                <img
                  src="/foto-perfil.png"
                  alt="João Rafael Andrade de Carvalho"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Informações pontuais sem associativismo e sem disponibilidade */}
              <div className="mt-4 w-full space-y-2 text-xs border-t border-slate-800/80 pt-3">
                <div className="flex flex-col gap-0.5">
                  <span className="text-slate-400">Situação:</span>
                  <span className="text-emerald-400 font-semibold">Último Ano de Licenciatura</span>
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-slate-400">Instituição:</span>
                  <span className="text-slate-200">ESTCB &bull; Politécnico de Castelo Branco</span>
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-slate-400">Estatuto:</span>
                  <span className="text-slate-200">Trabalhador-Estudante</span>
                </div>
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
              Associação de Estudantes da ESTCB &mdash; 7 Anos de Liderança
            </h2>
            <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-md border border-emerald-500/20">
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

            <div className="md:col-span-4 flex flex-col items-center">
              <div className="border border-emerald-500/30 rounded-2xl overflow-hidden bg-black/60 p-2.5 max-w-[200px]">
                <img
                  src="/certificado-estcb.jpg"
                  alt="Certificado de Dirigismo Associativo da Associação de Estudantes da ESTCB"
                  className="w-full h-auto object-contain rounded-xl"
                />
                <p className="text-[11px] text-slate-400 text-center mt-2 font-mono">
                  Certificado de Funções &bull; AE ESTCB
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Secção de Competências integrada no Sobre */}
        <section className="space-y-6 pt-4">
          <div className="border-b border-emerald-500/20 pb-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Competências &amp; Ferramentas
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {skillCategories.map((cat) => (
              <div
                key={cat.title}
                className="bg-[#080d15]/85 border border-emerald-500/25 rounded-2xl p-5 backdrop-blur-sm space-y-3 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-sm font-semibold text-white tracking-wide uppercase font-mono pb-2 border-b border-slate-800">
                    {cat.title}
                  </h3>
                  <div className="flex flex-wrap gap-1.5 pt-3">
                    {cat.skills.map((s) => (
                      <span
                        key={s}
                        className="bg-emerald-950/30 text-emerald-300 border border-emerald-500/25 px-2.5 py-1 rounded-lg text-xs font-mono"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </Layout>
  );
}

export default SobrePage;
