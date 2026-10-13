import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import projects from '../data/projects';

function ProjectDetailPage() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0d1117] text-slate-200 flex flex-col items-center justify-center px-6">
        <h1 className="text-2xl font-bold mb-3 text-white">Projeto não encontrado</h1>
        <Link 
          to="/" 
          className="text-sm text-blue-400 hover:underline"
        >
          &larr; Voltar ao Portfólio
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0d1117] text-slate-200">
      {/* Navbar Clássica */}
      <header className="sticky top-0 z-40 bg-[#161b22] border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link 
            to="/" 
            className="text-sm font-medium text-slate-300 hover:text-white transition-colors flex items-center gap-2"
          >
            <span>&larr;</span>
            <span>Voltar ao Portfólio</span>
          </Link>

          <span className="text-xs font-mono text-slate-400">
            {project.category}
          </span>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="max-w-4xl mx-auto px-6 py-12 space-y-10">
        {/* Cabeçalho do Projeto */}
        <section className="border-b border-slate-800 pb-8 space-y-4">
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <span className="text-slate-400 font-medium">
              {project.category}
            </span>
            {project.institution && (
              <>
                <span className="text-slate-600">&bull;</span>
                <span className="text-slate-300">
                  Trabalho realizado para: <strong className="text-white">{project.institution}</strong>
                </span>
              </>
            )}
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {project.title}
          </h1>

          <p className="text-base text-slate-300 leading-relaxed max-w-3xl">
            {project.shortDescription}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="bg-[#21262d] text-slate-300 border border-slate-700/80 px-2.5 py-1 rounded text-xs font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm py-2 px-4 rounded transition-colors"
              >
                <span>Jogar / Aceder ao Projeto Online</span>
                <span>&rarr;</span>
              </a>
            )}
          </div>
        </section>

        {/* Descrição Detalhada */}
        <section className="bg-[#161b22] border border-slate-800 rounded-md p-6 sm:p-8 space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base text-justify">
          <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wide border-b border-slate-800 pb-2">
            Descrição do Projeto
          </h2>
          {project.description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </section>

        {/* Galeria de Capturas */}
        {project.images && project.images.length > 0 && (
          <section className="space-y-4">
            <div className="border-b border-slate-800 pb-2 flex items-center justify-between">
              <h2 className="text-lg font-bold text-white">
                Capturas do Projeto
              </h2>
              <span className="text-xs text-slate-400">
                {project.images.length} {project.images.length === 1 ? 'imagem' : 'imagens'}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.images.map((image, index) => (
                <div 
                  key={index} 
                  className={`border border-slate-800 bg-[#161b22] p-2 rounded-md ${
                    index === 0 && project.images.length % 2 !== 0 ? 'md:col-span-2' : ''
                  }`}
                >
                  <div className="overflow-hidden bg-black rounded">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <p className="mt-2 text-center text-xs text-slate-400 py-1 font-medium">
                    {image.alt}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Links de Acesso */}
        {(project.repoUrl || project.liveUrl) && (
          <section className="pt-2 flex flex-wrap gap-4 border-t border-slate-800">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2.5 px-4 rounded text-sm transition-colors"
              >
                <span>Aceder ao Jogo Ao Vivo ({new URL(project.liveUrl).hostname})</span>
                <span>&rarr;</span>
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#21262d] hover:bg-slate-700 text-slate-200 border border-slate-700 py-2.5 px-4 rounded text-sm transition-colors"
              >
                <span>Ver Código no GitHub</span>
                <span>&rarr;</span>
              </a>
            )}
          </section>
        )}

        {/* Rodapé de Navegação */}
        <div className="pt-6 border-t border-slate-800">
          <Link
            to="/"
            className="text-sm font-medium text-blue-400 hover:underline"
          >
            &larr; Voltar à página principal
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-[#161b22] py-8 text-center text-xs text-slate-500">
        <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>&copy; {new Date().getFullYear()} João Rafael Carvalho. Portfólio Pessoal.</p>
          <p className="text-slate-600">Construído em React &amp; Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}

export default ProjectDetailPage;
