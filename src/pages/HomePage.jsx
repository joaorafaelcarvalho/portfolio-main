import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import projects from '../data/projects';

// Ícones SVG minimalistas
const Icons = {
  ExternalLink: () => (
    <svg className="w-3.5 h-3.5 inline-block ml-1 opacity-70 group-hover:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  ),
  Download: () => (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
  ),
  Mail: () => (
    <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  Phone: () => (
    <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  ),
  GitHub: () => (
    <svg className="w-4 h-4 fill-current text-slate-400" viewBox="0 0 24 24">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  ),
  LinkedIn: () => (
    <svg className="w-4 h-4 fill-current text-slate-400" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  ),
  Check: () => (
    <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  ),
  Copy: () => (
    <svg className="w-3.5 h-3.5 text-slate-400 hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  )
};

function HomePage() {
  const [copiedItem, setCopiedItem] = useState(null);

  const copyToClipboard = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(key);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  return (
    <div className="min-h-screen bg-[#0d1117] text-slate-200">
      {/* Navbar clássica e discreta */}
      <header className="sticky top-0 z-40 bg-[#161b22]/95 backdrop-blur-sm border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="#" className="font-semibold text-white tracking-tight hover:text-blue-400 transition-colors text-sm sm:text-base">
            João Rafael Carvalho
          </a>

          <nav className="flex items-center space-x-6 text-xs sm:text-sm text-slate-300">
            <a href="#projetos" className="hover:text-white transition-colors">Projetos</a>
            <a href="#trajetoria" className="hover:text-white transition-colors">Trajetória</a>
            <a href="#tecnologias" className="hover:text-white transition-colors">Tecnologias</a>
            <a href="#contactos" className="text-blue-400 hover:text-blue-300 transition-colors">Contacto</a>
          </nav>
        </div>
      </header>

      {/* Conteúdo Principal num fluxo natural e coeso */}
      <main className="max-w-4xl mx-auto px-6 py-12 space-y-20">

        {/* 1. Apresentação Integrada: Quem é, O que faz, e Ações Imediatas */}
        <section className="space-y-6 pt-2">
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Desenvolvedor de Software
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
              Licenciado em Informática e Multimédia pela Escola Superior de Tecnologia de Castelo Branco (ESTCB) e atualmente a ingressar no Mestrado em Engenharia Informática. Percurso desenvolvido quase na totalidade com estatuto de trabalhador-estudante, conciliando a vertente técnica em engenharia de software com 7 anos de liderança na Associação de Estudantes da ESTCB.
            </p>
          </div>

          {/* Links e Ações Rápidas integradas na apresentação (sem precisar de blocos artificiais no fim) */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="/curriculo.pdf"
              download="João_Carvalho_Curriculo.pdf"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded text-sm transition-colors"
            >
              <Icons.Download />
              <span>Descarregar Currículo (PDF)</span>
            </a>

            <div className="flex items-center gap-4 text-sm text-slate-400 pl-1">
              <a href="mailto:joaorafaelcarvalho1999@gmail.com" className="hover:text-white transition-colors flex items-center gap-1.5">
                <Icons.Mail />
                <span className="hidden sm:inline">Email</span>
              </a>
              <span>&bull;</span>
              <a href="tel:927614359" className="hover:text-white transition-colors flex items-center gap-1.5">
                <Icons.Phone />
                <span className="hidden sm:inline">927 614 359</span>
              </a>
              <span>&bull;</span>
              <a href="https://github.com/joaorafaelcarvalho" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5">
                <Icons.GitHub />
                <span>GitHub</span>
              </a>
              <span>&bull;</span>
              <a href="https://www.linkedin.com/in/jo%C3%A3o-carvalho-75459a442" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5">
                <Icons.LinkedIn />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </section>

        {/* 2. Projetos em Primeiro Plano: O que foi construído */}
        <section id="projetos" className="scroll-mt-20 space-y-6">
          <div className="border-b border-slate-800 pb-2 flex items-baseline justify-between">
            <h2 className="text-xl font-bold text-white">
              Projetos Desenvolvidos
            </h2>
            <span className="text-xs text-slate-400">
              Trabalhos práticos, videojogos e sistemas interativos
            </span>
          </div>

          <div className="space-y-6">
            {projects.map((project) => (
              <article
                key={project.id}
                className="bg-[#161b22] border border-slate-800 rounded-md p-5 sm:p-6 hover:border-slate-700 transition"
              >
                <div className="flex flex-col md:flex-row gap-5 items-start justify-between">
                  <div className="space-y-3 flex-1">
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs">
                      <span className="text-slate-400 font-medium">
                        {project.category}
                      </span>
                      {project.institution && (
                        <>
                          <span className="text-slate-600">&bull;</span>
                          <span className="text-emerald-400 font-medium">
                            Trabalho realizado para: <strong className="text-slate-200">{project.institution}</strong>
                          </span>
                        </>
                      )}
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      <Link to={`/projeto/${project.id}`} className="hover:text-blue-400 transition-colors">
                        {project.title}
                      </Link>
                    </h3>

                    <p className="text-sm text-slate-300 leading-relaxed">
                      {project.shortDescription}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="bg-[#21262d] text-slate-300 border border-slate-700/70 px-2 py-0.5 rounded text-xs font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 text-xs font-medium pt-2">
                      <Link
                        to={`/projeto/${project.id}`}
                        className="text-blue-400 hover:underline"
                      >
                        Página do projeto &rarr;
                      </Link>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-emerald-400 hover:underline inline-flex items-center"
                        >
                          Jogar / Testar online
                          <Icons.ExternalLink />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Pré-visualização gráfica se existirem capturas */}
                  {project.images && project.images.length > 0 && (
                    <Link
                      to={`/projeto/${project.id}`}
                      className="hidden sm:block w-36 h-24 rounded border border-slate-800 overflow-hidden bg-black shrink-0 hover:border-slate-600 transition"
                    >
                      <img
                        src={project.images[0].src}
                        alt={project.images[0].alt}
                        className="w-full h-full object-cover"
                      />
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 3. Trajetória, Resiliência e Liderança (Sobre Mim + 7 Anos de Associativismo ESTCB) */}
        <section id="trajetoria" className="scroll-mt-20 space-y-6">
          <div className="border-b border-slate-800 pb-2">
            <h2 className="text-xl font-bold text-white">
              Trajetória e Percurso
            </h2>
          </div>

          <div className="bg-[#161b22] border border-slate-800 rounded-md p-6 sm:p-7 space-y-6">
            {/* Bloco 1: Percurso Pessoal e Resiliência */}
            <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed text-justify">
              <p>
                Profissional de Tecnologias de Informação, com um percurso marcado pela resiliência, pela capacidade de gestão do tempo e pela conciliação entre a vida académica e profissional. Ao longo do meu percurso académico, desde o Ensino Profissional até à Licenciatura em Informática e Multimédia na ESTCB, e encontrando-me atualmente a ingressar no Mestrado em Engenharia Informática, desenvolvi e consolidei as minhas competências, mantendo praticamente sempre o estatuto de trabalhador-estudante. Este percurso, exigente e desafiante, permitiu-me desenvolver uma elevada capacidade de adaptação, organização, planeamento e superação de obstáculos.
              </p>
              <p>
                De trato fácil e com um perfil naturalmente sociável, valorizo a comunicação clara e as relações interpessoais no contexto profissional. Considero-me um elemento de equipa, habituado a colaborar com pessoas de diferentes perfis e a contribuir para um ambiente de trabalho positivo e produtivo. Acredito que a cooperação, a partilha de conhecimentos e a comunicação eficaz são fundamentais para o desenvolvimento de soluções eficientes e para o sucesso coletivo.
              </p>
            </div>

            {/* Linha de separação interna orgânica */}
            <hr className="border-slate-800" />

            {/* Bloco 2: Liderança e Gestão na Associação de Estudantes da ESTCB */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h3 className="text-base font-semibold text-white">
                  Associação de Estudantes da ESTCB &mdash; Dirigismo e Liderança
                </h3>
                <span className="text-xs text-slate-400">
                  2019 &ndash; 2026 (Vice-Presidente 2023 &bull; Tesoureiro 2025)
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-8 space-y-3 text-sm text-slate-300 leading-relaxed text-justify">
                  <p>
                    A minha aptidão para o trabalho em equipa foi largamente consolidada na Associação de Estudantes da ESTCB, onde desempenhei funções de dirigente associativo ininterruptamente entre 2019 e 2026. Durante este período de sete anos, assumi sucessivas responsabilidades diretivas, destacando-se os mandatos como Vice-Presidente (2023) e Tesoureiro (2025) da Direção.
                  </p>
                  <p>
                    Esta vivência constante em gestão associativa envolveu a coordenação de pessoas, a gestão rigorosa de orçamentos e recursos, e a organização de eventos. Foi uma experiência fundamental para afinar as minhas capacidades de liderança, resolução de problemas e tomada de decisão em contextos dinâmicos e de elevada pressão.
                  </p>
                </div>

                <div className="md:col-span-4 flex flex-col items-center">
                  <div className="border border-slate-700 bg-black/40 p-2 rounded max-w-[13rem]">
                    <img
                      src="/certificado-estcb.jpg"
                      alt="Certificado de Dirigismo Associativo da Associação de Estudantes da ESTCB"
                      className="w-full h-auto object-contain rounded"
                    />
                    <p className="text-[10px] text-slate-400 text-center mt-1.5 font-medium">
                      Certificado de Funções &bull; AE ESTCB
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Tecnologias e Ferramentas: Organização Clara e Técnica */}
        <section id="tecnologias" className="scroll-mt-20 space-y-4">
          <div className="border-b border-slate-800 pb-2">
            <h2 className="text-xl font-bold text-white">
              Tecnologias e Ferramentas
            </h2>
          </div>

          <div className="bg-[#161b22] border border-slate-800 rounded-md p-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 text-sm">
              <div>
                <span className="text-xs text-slate-400 font-semibold block mb-2 uppercase tracking-wide">
                  Linguagens de Programação
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {['Java', 'C', 'C++', 'C#', 'Python', 'PHP', 'MIPS / Assembly'].map((t) => (
                    <span key={t} className="bg-[#21262d] text-slate-200 border border-slate-700 px-2.5 py-1 rounded text-xs font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-xs text-slate-400 font-semibold block mb-2 uppercase tracking-wide">
                  Frontend & Web
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {['React.js', 'Tailwind CSS', 'Bootstrap', 'HTML', 'CSS'].map((t) => (
                    <span key={t} className="bg-[#21262d] text-slate-200 border border-slate-700 px-2.5 py-1 rounded text-xs font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-xs text-slate-400 font-semibold block mb-2 uppercase tracking-wide">
                  Backend & Bases de Dados
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {['Node.js', 'MySQL', 'MongoDB'].map((t) => (
                    <span key={t} className="bg-[#21262d] text-slate-200 border border-slate-700 px-2.5 py-1 rounded text-xs font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-xs text-slate-400 font-semibold block mb-2 uppercase tracking-wide">
                  Gráfica, IA & Outros Sistemas
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {['OpenGL', 'FreeGLUT', 'OutSystems', 'IA Generativa'].map((t) => (
                    <span key={t} className="bg-[#21262d] text-slate-200 border border-slate-700 px-2.5 py-1 rounded text-xs font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Contactos e Fecho */}
        <section id="contactos" className="scroll-mt-20 pt-4 border-t border-slate-800">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h2 className="text-lg font-bold text-white">Contactos Diretos</h2>
              <p className="text-xs text-slate-400">
                Disponível para discutir projetos, ideias ou propostas de trabalho.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs">
              <div className="flex items-center gap-1.5 bg-[#161b22] border border-slate-800 px-3 py-1.5 rounded">
                <a href="mailto:joaorafaelcarvalho1999@gmail.com" className="text-slate-300 hover:text-white">
                  joaorafaelcarvalho1999@gmail.com
                </a>
                <button
                  type="button"
                  onClick={() => copyToClipboard('joaorafaelcarvalho1999@gmail.com', 'email')}
                  className="p-1 hover:bg-slate-800 rounded text-slate-400 hover:text-white transition"
                  title="Copiar email"
                >
                  {copiedItem === 'email' ? <Icons.Check /> : <Icons.Copy />}
                </button>
              </div>

              <div className="flex items-center gap-1.5 bg-[#161b22] border border-slate-800 px-3 py-1.5 rounded">
                <a href="tel:927614359" className="text-slate-300 hover:text-white">
                  927 614 359
                </a>
                <button
                  type="button"
                  onClick={() => copyToClipboard('927614359', 'phone')}
                  className="p-1 hover:bg-slate-800 rounded text-slate-400 hover:text-white transition"
                  title="Copiar número"
                >
                  {copiedItem === 'phone' ? <Icons.Check /> : <Icons.Copy />}
                </button>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Rodapé simples */}
      <footer className="border-t border-slate-800 bg-[#161b22] py-6 text-center text-xs text-slate-500">
        <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>&copy; {new Date().getFullYear()} João Rafael Carvalho</p>
          <p className="text-slate-600">Castelo Branco, Portugal</p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
