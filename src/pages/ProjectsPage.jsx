import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import projects from '../data/projects';
import Layout from '../components/Layout';

function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const categories = ['Todos', ...new Set(projects.map((p) => p.category))];

  const filteredProjects = selectedCategory === 'Todos'
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  const techStack = [
    { name: "React.js", category: "Frontend" },
    { name: "JavaScript", category: "Linguagem" },
    { name: "C++", category: "Linguagem" },
    { name: "C#", category: "Linguagem" },
    { name: "Java", category: "Linguagem" },
    { name: "Python", category: "Linguagem" },
    { name: "OpenGL / FreeGLUT", category: "Gráfica" },
    { name: "IA Generativa", category: "Inteligência Artificial" },
    { name: "Node.js", category: "Backend" },
    { name: "MySQL", category: "Base de Dados" },
    { name: "MongoDB", category: "Base de Dados" },
    { name: "Tailwind CSS", category: "Frontend" },
    { name: "PHP", category: "Backend" },
    { name: "OutSystems", category: "Plataforma" }
  ];

  return (
    <Layout>
      <div className="w-full space-y-12">
        
        {/* Cabeçalho da Página em formato amplo */}
        <div className="border-b border-emerald-500/20 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
              <span>PORTFÓLIO COMPLETO &bull; {projects.length} PROJETOS REGISTADOS</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Todos os Projetos
            </h1>
            <p className="text-slate-300 max-w-2xl text-base">
              Aplicações, sistemas e videojogos desenvolvidos com foco em arquitetura de código, interatividade e integração de novas tecnologias.
            </p>
          </div>

          {/* Filtros rápidos por categoria */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  selectedCategory === cat
                    ? 'bg-emerald-600 text-white font-semibold shadow-[0_0_12px_rgba(16,185,129,0.3)]'
                    : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grelha de Projetos ocupando toda a largura */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col justify-between bg-[#080d15]/85 hover:bg-[#0c1422]/90 border border-emerald-500/20 hover:border-emerald-500/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-[0_0_25px_rgba(16,185,129,0.15)] backdrop-blur-sm"
            >
              <div className="space-y-4">
                {/* Imagem do Projeto */}
                {project.images && project.images.length > 0 ? (
                  <Link 
                    to={`/projeto/${project.id}`} 
                    className="block aspect-video w-full rounded-xl overflow-hidden bg-black/60 border border-emerald-500/20 group-hover:border-emerald-500/50 transition-colors"
                  >
                    <img
                      src={project.images[0].src}
                      alt={project.images[0].alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </Link>
                ) : (
                  <div className="aspect-video w-full rounded-xl bg-gradient-to-br from-emerald-950/40 via-slate-900/80 to-slate-950 border border-emerald-500/20 flex flex-col items-center justify-center p-4 text-center">
                    <span className="font-mono text-xs text-emerald-400 mb-1">PROJETO DE ENGENHARIA</span>
                    <span className="text-sm font-semibold text-slate-300">{project.category}</span>
                  </div>
                )}

                <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span className="text-emerald-400/90 font-medium">{project.category}</span>
                  {project.institution && (
                    <span className="text-slate-300 font-semibold">{project.institution}</span>
                  )}
                </div>

                <h2 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors leading-snug">
                  <Link to={`/projeto/${project.id}`}>
                    {project.title}
                  </Link>
                </h2>

                <p className="text-sm text-slate-300 line-clamp-3 leading-relaxed">
                  {project.shortDescription}
                </p>

                {/* Stack Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-emerald-950/40 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-md text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Ações inferiores */}
              <div className="pt-6 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-medium">
                <Link
                  to={`/projeto/${project.id}`}
                  className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                >
                  <span>Ver especificações completas</span>
                  <span>&rarr;</span>
                </Link>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-200 hover:text-white inline-flex items-center gap-1 bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700/80"
                  >
                    <span>Testar Online</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </section>

        {/* Secção de Competências associada aos Projetos (como solicitado no prompt) */}
        <section className="bg-[#080d15]/85 border border-emerald-500/25 rounded-2xl p-6 sm:p-8 backdrop-blur-sm space-y-6">
          <div className="border-b border-slate-800 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider block font-semibold">
                Competências Técnicas Aplicadas
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
                Linguagens e Ferramentas Empregadas nestes Projetos
              </h2>
            </div>
            <Link
              to="/sobre"
              className="text-xs font-mono text-emerald-400 hover:underline inline-flex items-center gap-1"
            >
              <span>Ver todas as competências no perfil</span>
              <span>&rarr;</span>
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {techStack.map((item) => (
              <div
                key={item.name}
                className="bg-slate-900/80 border border-emerald-500/20 hover:border-emerald-500/50 p-3 rounded-xl transition-all flex flex-col justify-between"
              >
                <span className="text-xs font-mono text-emerald-400 font-medium">
                  {item.category}
                </span>
                <span className="text-sm font-bold text-white mt-2">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </section>

      </div>
    </Layout>
  );
}

export default ProjectsPage;
