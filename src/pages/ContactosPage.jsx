import React, { useState } from 'react';
import Layout from '../components/Layout';

function ContactosPage() {
  const [copiedKey, setCopiedKey] = useState(null);

  const copyText = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  return (
    <Layout>
      <div className="w-full space-y-12">
        
        {/* Cabeçalho amplo */}
        <div className="border-b border-emerald-500/20 pb-6 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>DISPONÍVEL PARA PRIMEIRO EMPREGO &bull; CONTACTO DIRETO</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Contactos &amp; Oportunidades
          </h1>
          <p className="text-slate-300 max-w-2xl text-base">
            Estou disponível para entrevistas, propostas de primeiro emprego e projetos colaborativos. Não hesite em contactar-me por qualquer um dos canais abaixo.
          </p>
        </div>

        {/* Layout Amplo em Grelha moderna ocupando o ecrã inteiro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Cartões Principais de Contacto (8 colunas em 12) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Email */}
            <div className="bg-[#080d15]/85 border border-emerald-500/25 rounded-2xl p-6 backdrop-blur-sm space-y-4 hover:border-emerald-500/50 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider block font-semibold">
                  Correio Eletrónico
                </span>
                <h3 className="text-lg font-bold text-white mt-1 break-all">
                  joaorafaelcarvalho1999@gmail.com
                </h3>
                <p className="text-xs text-slate-400 mt-2">
                  Canal preferencial para envio de propostas e contacto formal.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center gap-2">
                <a
                  href="mailto:joaorafaelcarvalho1999@gmail.com"
                  className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold py-2 px-3 rounded-lg text-center transition-colors shadow-[0_0_12px_rgba(16,185,129,0.25)]"
                >
                  Enviar Email
                </a>
                <button
                  type="button"
                  onClick={() => copyText('joaorafaelcarvalho1999@gmail.com', 'email')}
                  className="bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium py-2 px-3 rounded-lg transition-colors border border-slate-700"
                >
                  {copiedKey === 'email' ? 'Copiado!' : 'Copiar'}
                </button>
              </div>
            </div>

            {/* Telefone */}
            <div className="bg-[#080d15]/85 border border-emerald-500/25 rounded-2xl p-6 backdrop-blur-sm space-y-4 hover:border-emerald-500/50 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider block font-semibold">
                  Telemóvel / WhatsApp
                </span>
                <h3 className="text-lg font-bold text-white mt-1">
                  +351 927 614 359
                </h3>
                <p className="text-xs text-slate-400 mt-2">
                  Disponível para chamadas em horário comercial ou mensagens.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center gap-2">
                <a
                  href="tel:927614359"
                  className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold py-2 px-3 rounded-lg text-center transition-colors shadow-[0_0_12px_rgba(16,185,129,0.25)]"
                >
                  Ligar
                </a>
                <button
                  type="button"
                  onClick={() => copyText('927614359', 'phone')}
                  className="bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium py-2 px-3 rounded-lg transition-colors border border-slate-700"
                >
                  {copiedKey === 'phone' ? 'Copiado!' : 'Copiar'}
                </button>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="bg-[#080d15]/85 border border-emerald-500/25 rounded-2xl p-6 backdrop-blur-sm space-y-4 hover:border-emerald-500/50 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-4">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </div>
                <span className="text-xs font-mono text-blue-400 uppercase tracking-wider block font-semibold">
                  Rede Profissional
                </span>
                <h3 className="text-lg font-bold text-white mt-1">
                  LinkedIn
                </h3>
                <p className="text-xs text-slate-400 mt-2">
                  Perfil profissional com histórico académico e associativo detalhado.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <a
                  href="https://www.linkedin.com/in/jo%C3%A3o-carvalho-75459a442"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold py-2 px-3 rounded-lg text-center transition-colors shadow-[0_0_12px_rgba(37,99,235,0.3)]"
                >
                  Aceder ao Perfil LinkedIn &rarr;
                </a>
              </div>
            </div>

            {/* GitHub */}
            <div className="bg-[#080d15]/85 border border-emerald-500/25 rounded-2xl p-6 backdrop-blur-sm space-y-4 hover:border-emerald-500/50 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-700/20 border border-slate-600/40 flex items-center justify-center text-white mb-4">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </div>
                <span className="text-xs font-mono text-slate-300 uppercase tracking-wider block font-semibold">
                  Repositórios de Código
                </span>
                <h3 className="text-lg font-bold text-white mt-1">
                  GitHub
                </h3>
                <p className="text-xs text-slate-400 mt-2">
                  Repositórios de projetos pessoais, código aberto e trabalhos práticos.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <a
                  href="https://github.com/joaorafaelcarvalho"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold py-2 px-3 rounded-lg text-center transition-colors border border-slate-700"
                >
                  Visitar GitHub &rarr;
                </a>
              </div>
            </div>

          </div>

          {/* Coluna Lateral Informativa (4 colunas em 12) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#080d15]/85 border border-emerald-500/25 rounded-2xl p-6 backdrop-blur-sm space-y-5">
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider block font-semibold">
                Localização &amp; Disponibilidade
              </span>

              <div className="space-y-4 text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <span className="text-emerald-400 text-base">&bull;</span>
                  <div>
                    <strong className="text-white block">Residência:</strong>
                    Castelo Branco, Portugal
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-emerald-400 text-base">&bull;</span>
                  <div>
                    <strong className="text-white block">Regime de Trabalho:</strong>
                    Presencial, Híbrido ou Remoto
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-emerald-400 text-base">&bull;</span>
                  <div>
                    <strong className="text-white block">Objetivo:</strong>
                    Primeiro Emprego / Oportunidade Júnior na área de software e tecnologia
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <a
                  href="/curriculo.pdf"
                  download="João_Carvalho_Curriculo.pdf"
                  className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold py-2.5 px-4 rounded-xl transition-all shadow-[0_0_15px_rgba(16,185,129,0.25)]"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  <span>Descarregar Currículo Completo (PDF)</span>
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </Layout>
  );
}

export default ContactosPage;
