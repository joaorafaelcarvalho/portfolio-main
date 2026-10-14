import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import projects from '../data/projects';
import Layout from '../components/Layout';

function ProjectDetailPage() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <Layout>
        <div className="w-full min-h-[50vh] flex flex-col items-center justify-center text-center space-y-4">
          <h1 className="text-3xl font-bold text-white">Projeto não encontrado</h1>
          <p className="text-slate-400">O projeto solicitado não existe ou foi movido.</p>
          <Link 
            to="/projetos" 
            className="text-grey-400 hover:underline text-sm font-mono"
          >
            &larr; Voltar à lista de projetos
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="w-full space-y-10">
        
        {/* Navegação Superior & Categoria */}
        <div className="flex items-center justify-between border-b border-emerald-500/20 pb-4 text-xs font-mono">
          <Link
            to="/projetos"
            className="text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1.5 font-semibold"
          >
            <span>&larr;</span>
            <span>Voltar a Todos os Projetos</span>
          </Link>
          
        </div>

        {/* Cabeçalho do Projeto com amplitude total */}
        <section className="space-y-4">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
            <span className="text-emerald-400 font-semibold">{project.category}</span>
            {project.institution && (
              <>
                <span className="text-slate-600">&bull;</span>
                <span className="text-slate-300">
                  Instituição: <strong className="text-white">{project.institution}</strong>
                </span>
              </>
            )}
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {project.title}
          </h1>

          <p className="text-base sm:text-xl text-slate-300 max-w-4xl leading-relaxed">
            {project.shortDescription}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-3">
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="bg-GREY-950/40 text-grey-300 border border-grey-500/30 px-3 py-1 rounded-lg text-xs font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm py-2.5 px-5 rounded-xl transition-all shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                >
                  <span>Pagina Web</span>
                  <span>&rarr;</span>
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700 text-sm py-2.5 px-4 rounded-xl transition-colors"
                >
                  <span>Ver no GitHub</span>
                </a>
              )}
            </div>
          </div>
        </section>

        {/* Descrição Detalhada em bloco amplo */}
        <section className="bg-[#080d15]/85 border border-emerald-500/25 rounded-2xl p-6 sm:p-8 backdrop-blur-sm space-y-4 text-slate-300 leading-relaxed text-base">

          {project.description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </section>

        {/* Galeria de Capturas se existir */}
        {project.images && project.images.length > 0 && (
          <section className="space-y-6">
            <div className="border-b border-emerald-500/20 pb-3 flex items-center justify-between">
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Capturas 
              </h2>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.images.map((image, index) => (
                <div 
                  key={index} 
                  className={`
                    block aspect-video w-full rounded-xl overflow-hidden bg-black/60 border border-emerald-200/20 ${
                      index === 0 && project.images.length % 2 !== 0 ? 'md:col-span-2' : ''
                    }
                  `}
                >
                  <div className="overflow-hidden bg-slate-950 rounded-xl">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-300"
                    />
                  </div>
                  <p className="mt-3 text-center text-xs font-mono text-slate-400 py-1">
                    {image.alt}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

      </div>
    </Layout>
  );
}

export default ProjectDetailPage;
