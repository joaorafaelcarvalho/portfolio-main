import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const CURRENT_YEAR = new Date().getFullYear();

function Layout({ children }) {
  return (
    <div className="min-h-screen text-slate-100 relative flex flex-col selection:bg-emerald-500 selection:text-black">
      {/* Imagem de Fundo Matrix enviada pelo utilizador com overlay para contraste */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed pointer-events-none"
        style={{ backgroundImage: `url('/bg-matrix.png')` }}
      />
      
      {/* Camada de escurecimento para garantir contraste e legibilidade */}
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-[#05090e]/85 via-[#060b12]/92 to-[#04070a]/95 pointer-events-none" />

      {/* Navbar que ocupa a largura total */}
      <header className="sticky top-0 z-50 w-full bg-[#060b12]/90 backdrop-blur-md border-b border-emerald-500/20">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 h-18 flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center"
          >
            <span className="text-xl sm:text-2xl font-black tracking-wider text-white font-mono hover:text-emerald-400 transition-colors">
              PORTFOLIO
            </span>
          </Link>

          {/* Links na ordem pedida: Sobre, Projetos, Contactos */}
          <nav className="flex items-center gap-2 sm:gap-6 text-sm font-medium">
            <NavLink
              to="/sobre"
              className={({ isActive }) =>
                `px-3 sm:px-4 py-2 rounded-lg transition-colors ${
                  isActive
                    ? 'text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`
              }
            >
              Sobre
            </NavLink>

            <NavLink
              to="/projetos"
              className={({ isActive }) =>
                `px-3 sm:px-4 py-2 rounded-lg transition-colors ${
                  isActive
                    ? 'text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`
              }
            >
              Projetos
            </NavLink>

            <NavLink
              to="/contactos"
              className={({ isActive }) =>
                `px-3 sm:px-4 py-2 rounded-lg transition-colors ${
                  isActive
                    ? 'text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`
              }
            >
              Contactos
            </NavLink>
          </nav>
        </div>
      </header>

      {/* Conteúdo dinâmico ocupando a tela com amplitude */}
      <main className="flex-1 relative z-10 w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 py-8 sm:py-12">
        {children}
      </main>

      {/* Rodapé limpo, sem ponto verde, sem finalista, sem links, apenas o nome completo */}
      <footer className="relative z-10 w-full border-t border-emerald-500/20 bg-[#05090e]/90 backdrop-blur-md py-6 text-xs text-slate-400">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between">
          <p className="font-mono text-slate-300">
            &copy; {CURRENT_YEAR} João Rafael Andrade de Carvalho
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
