import React from 'react';
import { Link } from 'react-router-dom';
import projects from '../data/projects';
import Layout from '../components/Layout';

function HomePage() {
  const featuredProjects = projects.slice(0, 4);

  return (
    <Layout>
      <div className="w-full space-y-10">
        
        {/* Cabeçalho da página inicial */}
        <section className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-emerald-500/20">
          <div className="space-y-3 max-w-4xl">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              Projetos em Destaque
            </h1>
            
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <Link
              to="/projetos"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-medium py-3 px-5 rounded-xl text-sm transition-colors"
            >
              <span>Ver Todos os Projetos</span>
              <span>&rarr;</span>
            </Link>
          </div>
        </section>

        {/* Grelha ampla com 4 projetos em destaque, sem animações de zoom/salto */}
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {featuredProjects.map((project, idx) => (
            <article
              key={project.id}
              className="flex flex-col justify-between bg-[#080d15]/85 border border-emerald-500/20 rounded-2xl p-6 backdrop-blur-sm"
            >
              <div className="space-y-4">
                {/* Imagem estática sem animação */}
                {project.images && project.images.length > 0 ? (
                  <Link 
                    to={`/projeto/${project.id}`} 
                    className="block aspect-video w-full rounded-xl overflow-hidden bg-black/60 border border-emerald-500/20"
                  >
                    <img
                      src={project.images[0].src}
                      alt={project.images[0].alt}
                      className="w-full h-full object-cover"
                    />
                  </Link>
                ) : (
                  <div className="aspect-video w-full rounded-xl bg-gradient-to-br from-emerald-950/40 via-slate-900/80 to-slate-950 border border-emerald-500/20 flex flex-col items-center justify-center p-4 text-center">
                    <span className="font-mono text-xs text-emerald-400 mb-1">PROJETO #{idx + 1}</span>
                    <span className="text-sm font-semibold text-slate-300">{project.category}</span>
                  </div>
                )}

                <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span className="text-emerald-400/90 font-medium">{project.category}</span>
                  <span>{project.institution}</span>
                </div>

                <h2 className="text-xl font-bold text-white hover:text-emerald-400 transition-colors leading-snug">
                  <Link to={`/projeto/${project.id}`}>
                    {project.title}
                  </Link>
                </h2>

                <p className="text-sm text-slate-300 line-clamp-3 leading-relaxed">
                  {project.shortDescription}
                </p>

                {/* Tags de Tecnologias */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-emerald-950/40 text-grey-200 border border-grey-200/30 px-1 py-0.5 rounded-md text-s font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </section>

      </div>
    </Layout>
  );
}

export default HomePage;
