import { useState } from 'react';

export default function App() {
  const [activeFase, setActiveFase] = useState(1);

  return (
    <div className="min-h-screen bg-sfondo text-testo">
      {/* Header */}
      <header className="px-6 py-6 border-b border-sabbia bg-sfondo/90 backdrop-blur sticky top-0 z-20 animate-fade-in">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-default">
            <img
              src="/logo.png"
              alt="Logo Singularmentis"
              className="w-20 h-auto md:w-24"
            />
          </div>
          <nav className="hidden md:flex space-x-8 text-sm font-medium tracking-wide text-testo/70">
            <a href="#home" className="border-b-2 border-verde-petrolio pb-1">Home</a>
            <a href="#progetto" className="hover:text-verde-petrolio transition-colors">Il Progetto</a>
            <a href="#teoria" className="hover:text-verde-petrolio transition-colors">Teoria e Ricerche</a>
            <a href="#approfondimenti" className="hover:text-verde-petrolio transition-colors">Approfondimenti</a>
            <a href="#gruppi" className="hover:text-verde-petrolio transition-colors">Gruppi e Comunità</a>
            <a href="#contatti" className="hover:text-verde-petrolio transition-colors">Contatti</a>
          </nav>
          <button className="hidden md:flex items-center gap-2 text-sm font-medium text-verde-petrolio hover:text-verde-petrolio-hover transition-colors">
            <span>🔍</span> Cerca
          </button>
        </div>
        {/* Linea sottile sotto navbar come nelle immagini di riferimento */}
        <div className="h-[1px] bg-sabbia w-full mt-1" />
      </header>

      <main className="max-w-6xl mx-auto px-6">
        {/* Hero */}
        <section id="home" className="relative overflow-hidden animate-fade-in">
          <div className="absolute inset-0 -z-10 bg-hero" />
          <div className="wave wave-1" />
          <div className="wave wave-2" />
          <div className="relative z-10 max-w-5xl mx-auto px-6 py-16 md:py-28 lg:py-40">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Colonna sinistra: testo */}
              <div className="text-center lg:text-left animate-slide-up animate-delay-100">
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-8">
                  <span className="text-sm font-extrabold uppercase tracking-widest text-verde-petrolio border-b-2 border-verde-petrolio pb-1">
                    Singularmentis
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight text-testo font-normal italic animate-slide-right animate-delay-300">
                  La singolarità come orizzonte
                </h1>
                <div className="line-hero mx-auto lg:mx-0 mb-8 animate-slide-left animate-delay-400" />
                <p className="text-base md:text-lg max-w-xl mx-auto lg:mx-0 text-testo/70 leading-relaxed mb-12 font-light animate-fade-in animate-delay-500">
                  Un progetto di pensiero, clinica e cultura<br />
                  per esplorare la singolarità dell’essere umano,<br />
                  oltre le categorie, dentro le storie.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-scale-in animate-delay-600">
                  <a href="#progetto" className="px-10 py-4 btn-primary font-bold uppercase tracking-wide text-sm">
                    Scopri il progetto →
                  </a>
                </div>
              </div>

              {/* Colonna destra: illustrazione evolutiva a matita (sequenza orizzontale con freccia) */}
              <div className="relative max-w-md mx-auto lg:mx-0 animate-fade-in animate-delay-300">
                <div className="text-center mb-8 text-sabbia text-xs uppercase tracking-widest font-bold">
                  Il bambino che cresce
                </div>

                {/* Container sequenza orizzontale */}
                <div className="relative flex items-center justify-center gap-2 min-h-[340px]">
                  {/* Fase 1 */}
                  <div
                    className={`relative opacity-60 transition-opacity duration-700 ${activeFase === 1 ? 'opacity-100' : 'opacity-60'}`}
                  >
                    <div className="w-40 h-40 mx-auto">
                      <svg className="w-full h-full pencil" viewBox="0 0 200 200" aria-label="Fase 1 - schizzo iniziale">
                        <rect x="20" y="30" w="160" h="140" fill="none" stroke="#D1D5DB" strokeWidth="1" />
                        <circle cx="100" cy="60" r="16" stroke="#6B7280" strokeWidth="1.2" fill="none" />
                        <line x1="100" y1="76" x2="100" y2="108" stroke="#6B7280" strokeWidth="1.2" />
                        <line x1="86" y1="88" x2="114" y2="88" stroke="#6B7280" strokeWidth="1.2" />
                        <line x1="90" y1="108" x2="76" y2="136" stroke="#6B7280" strokeWidth="1.2" />
                        <line x1="110" y1="108" x2="124" y2="136" stroke="#6B7280" strokeWidth="1.2" />
                        {/* Orsacchiotto */}
                        <path d="M 62 98 Q 52 88 58 76 Q 68 72 78 76 Q 88 72 98 76 Q 108 72 102 86 Q 100 96 92 92 Q 82 96 72 92 Q 67 88 62 98 Z" fill="none" stroke="#9CA3AF" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="60" cy="80" r="2" fill="none" stroke="#9CA3AF" strokeWidth="1" />
                        <circle cx="80" cy="80" r="2" fill="none" stroke="#9CA3AF" strokeWidth="1" />
                      </svg>
                    </div>
                    <div className="text-[10px] text-testo/50 uppercase tracking-widest mt-2 font-medium">
                      schizzo iniziale
                    </div>
                  </div>

                  {/* Freccia curva tra fase 1 e 2 */}
                  <svg className="w-16 h-16 text-sabbia" viewBox="0 0 100 100">
                    <path d="M 20 50 Q 50 20 80 50" fill="none" stroke="#D8D0C2" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M 78 44 Q 82 50 78 56" fill="none" stroke="#D8D0C2" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>

                  {/* Fase 2 */}
                  <div
                    className={`relative opacity-60 transition-opacity duration-700 ${activeFase === 2 ? 'opacity-100' : 'opacity-60'}`}
                  >
                    <div className="w-40 h-40 mx-auto">
                      <svg className="w-full h-full pencil" viewBox="0 0 200 200" aria-label="Fase 2 - figura più definita">
                        <rect x="20" y="30" w="160" h="140" fill="none" stroke="#D1D5DB" strokeWidth="1" />
                        <ellipse cx="100" cy="64" rx="20" ry="24" stroke="#6B7280" strokeWidth="1.2" fill="none" />
                        <line x1="100" y1="88" x2="100" y2="120" stroke="#6B7280" strokeWidth="1.2" />
                        <line x1="84" y1="98" x2="116" y2="98" stroke="#6B7280" strokeWidth="1.2" />
                        <line x1="92" y1="120" x2="76" y2="148" stroke="#6B7280" strokeWidth="1.2" />
                        <line x1="108" y1="120" x2="124" y2="148" stroke="#6B7280" strokeWidth="1.2" />
                        <line x1="92" y1="148" x2="80" y2="176" stroke="#6B7280" strokeWidth="1.2" />
                        <line x1="108" y1="148" x2="120" y2="176" stroke="#6B7280" strokeWidth="1.2" />
                        {/* Orsacchiotto */}
                        <path d="M 68 104 Q 58 94 66 82 Q 76 78 86 82 Q 96 78 90 92 Q 88 102 80 98 Q 70 102 64 98 Q 59 94 66 104 Z" fill="none" stroke="#9CA3AF" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="66" cy="84" r="2" fill="none" stroke="#9CA3AF" strokeWidth="1" />
                        <circle cx="84" cy="84" r="2" fill="none" stroke="#9CA3AF" strokeWidth="1" />
                      </svg>
                    </div>
                    <div className="text-[10px] text-testo/50 uppercase tracking-widest mt-2 font-medium">
                      figura definita
                    </div>
                  </div>

                  {/* Freccia curva tra fase 2 e 3 */}
                  <svg className="w-16 h-16 text-sabbia" viewBox="0 0 100 100">
                    <path d="M 20 50 Q 50 20 80 50" fill="none" stroke="#D8D0C2" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M 78 44 Q 82 50 78 56" fill="none" stroke="#D8D0C2" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>

                  {/* Fase 3 */}
                  <div
                    className={`relative opacity-60 transition-opacity duration-700 ${activeFase === 3 ? 'opacity-100' : 'opacity-60'}`}
                  >
                    <div className="w-40 h-40 mx-auto">
                      <svg className="w-full h-full pencil" viewBox="0 0 200 200" aria-label="Fase 3 - dettagli e proporzioni">
                        <rect x="20" y="30" w="160" h="140" fill="none" stroke="#D1D5DB" strokeWidth="1" />
                        <path d="M 80 56 Q 100 44 120 56 Q 126 76 122 96 Q 118 116 104 112 Q 90 116 84 96 Q 88 76 94 56 Q 92 52 100 52 Q 108 52 106 56 Z" fill="none" stroke="#6B7280" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        <line x1="100" y1="100" x2="100" y2="128" stroke="#6B7280" strokeWidth="1.2" />
                        <path d="M 86 112 Q 100 108 114 112" fill="none" stroke="#6B7280" strokeWidth="1.2" />
                        <circle cx="90" cy="88" r="3" fill="none" stroke="#6B7280" strokeWidth="1" />
                        <circle cx="110" cy="88" r="3" fill="none" stroke="#6B7280" strokeWidth="1" />
                        <line x1="90" y1="128" x2="76" y2="152" stroke="#6B7280" strokeWidth="1.2" />
                        <line x1="110" y1="128" x2="124" y2="152" stroke="#6B7280" strokeWidth="1.2" />
                        <line x1="84" y1="152" x2="72" y2="176" stroke="#6B7280" strokeWidth="1.2" />
                        <line x1="116" y1="152" x2="128" y2="176" stroke="#6B7280" strokeWidth="1.2" />
                      </svg>
                    </div>
                    <div className="text-[10px] text-testo/50 uppercase tracking-widest mt-2 font-medium">
                      dettagli e proporzioni
                    </div>
                  </div>

                  {/* Freccia curva tra fase 3 e 4 */}
                  <svg className="w-16 h-16 text-sabbia" viewBox="0 0 100 100">
                    <path d="M 20 50 Q 50 20 80 50" fill="none" stroke="#D8D0C2" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M 78 44 Q 82 50 78 56" fill="none" stroke="#D8D0C2" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>

                  {/* Fase 4 */}
                  <div
                    className={`relative opacity-60 transition-opacity duration-700 ${activeFase === 4 ? 'opacity-100' : 'opacity-60'}`}
                  >
                    <div className="w-40 h-40 mx-auto">
                      <svg className="w-full h-full pencil" viewBox="0 0 200 200" aria-label="Fase 4 - ritratto giovane">
                        <rect x="20" y="30" w="160" h="140" fill="none" stroke="#D1D5DB" strokeWidth="1" />
                        <path d="M 76 62 Q 100 48 124 62 Q 130 86 126 110 Q 120 130 104 126 Q 88 130 82 110 Q 76 86 84 62 Q 82 58 100 58 Q 118 58 116 62 Z" fill="none" stroke="#6B7280" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        <line x1="100" y1="112" x2="100" y2="140" stroke="#6B7280" strokeWidth="1.2" />
                        <path d="M 86 126 Q 100 122 114 126" fill="none" stroke="#6B7280" strokeWidth="1.2" />
                        <circle cx="88" cy="94" r="3.5" fill="none" stroke="#6B7280" strokeWidth="1" />
                        <circle cx="112" cy="94" r="3.5" fill="none" stroke="#6B7280" strokeWidth="1" />
                        <ellipse cx="100" cy="98" rx="14" ry="10" fill="none" stroke="#6B7280" strokeWidth="1" />
                        <path d="M 84 92 Q 100 96 116 92" fill="none" stroke="#6B7280" strokeWidth="1" />
                        <line x1="90" y1="140" x2="76" y2="164" stroke="#6B7280" strokeWidth="1.2" />
                        <line x1="110" y1="140" x2="124" y2="164" stroke="#6B7280" strokeWidth="1.2" />
                        <line x1="82" y1="164" x2="70" y2="184" stroke="#6B7280" strokeWidth="1.2" />
                        <line x1="118" y1="164" x2="130" y2="184" stroke="#6B7280" strokeWidth="1.2" />
                      </svg>
                    </div>
                    <div className="text-[10px] text-testo/50 uppercase tracking-widest mt-2 font-medium">
                      ritratto giovane
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Il Progetto */}
        <section id="progetto" className="py-20 border-t border-sabbia border-b border-sabbia bg-sfondo-chiaro animate-slide-up animate-delay-700">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-slide-up animate-delay-700">
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-3 text-testo">
                Il Progetto
              </h3>
              <div className="h-[1px] bg-sabbia w-20 mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="relative p-8 border-2 border-verde-petrolio-soft rounded-xl bg-white hover:border-verde-petrolio transition-all duration-200 hover-lift animate-slide-up animate-delay-700 group">
                <div className="w-12 h-12 bg-verde-petrolio/10 border-2 border-verde-petrolio rounded-full flex items-center justify-center mb-6 group-hover:bg-verde-petrolio group-hover:text-white transition-all duration-200">
                  <span className="text-xl text-verde-petrolio">1</span>
                </div>
                <h4 className="text-xl font-bold uppercase mb-3 text-testo">Conosci la tua storia</h4>
                <p className="text-sm text-testo/60 leading-relaxed">
                  Una video-intervista con il tuo referente per esplorare la tua storia,
                  le tue emozioni e ciò che ti ha formato.
                </p>
              </div>

              <div className="relative p-8 border-2 border-sabbia rounded-xl bg-white hover:border-verde-petrolio transition-all duration-200 hover-lift animate-slide-up animate-delay-800 group">
                <div className="w-12 h-12 bg-sabbia border-2 border-sabbia rounded-full flex items-center justify-center mb-6 group-hover:bg-verde-petrolio group-hover:border-verde-petrolio group-hover:text-white transition-all duration-200">
                  <span className="text-xl text-testo">2</span>
                </div>
                <h4 className="text-xl font-bold uppercase mb-3 text-testo">Ricevi la tua mappa</h4>
                <p className="text-sm text-testo/60 leading-relaxed">
                  Una restituzione unica della tua singolarità: risorse, aree di crescita,
                  resilienze e possibilità evolutive.
                </p>
              </div>

              <div className="relative p-8 border-2 border-sabbia rounded-xl bg-white hover:border-verde-petrolio transition-all duration-200 hover-lift animate-slide-up animate-delay-900 group">
                <div className="w-12 h-12 bg-sabbia border-2 border-sabbia rounded-full flex items-center justify-center mb-6 group-hover:bg-verde-petrolio group-hover:border-verde-petrolio group-hover:text-white transition-all duration-200">
                  <span className="text-xl text-testo">3</span>
                </div>
                <h4 className="text-xl font-bold uppercase mb-3 text-testo">Costruiamo il tuo percorso</h4>
                <p className="text-sm text-testo/60 leading-relaxed">
                  Un protocollo personalizzato attraverso libri, film, musica, scrittura
                  e attività esperienziali per esprimere il tuo linguaggio.
                </p>
              </div>

              <div className="relative p-8 border-2 border-sabbia rounded-xl bg-white hover:border-verde-petrolio transition-all duration-200 hover-lift animate-slide-up animate-delay-1000 group">
                <div className="w-12 h-12 bg-sabbia border-2 border-sabbia rounded-full flex items-center justify-center mb-6 group-hover:bg-verde-petrolio group-hover:border-verde-petrolio group-hover:text-white transition-all duration-200">
                  <span className="text-xl text-testo">4</span>
                </div>
                <h4 className="text-xl font-bold uppercase mb-3 text-testo">Diventa autore del cambiamento</h4>
                <p className="text-sm text-testo/60 leading-relaxed">
                  Un cammino di un anno con follow-up periodici per monitorare,
                  comprendere e dare forma al tuo cambiamento.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* La singolarità */}
        <section id="singolarita" className="py-20 animate-fade-in animate-delay-1100">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-slide-up animate-delay-1100">
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-3 text-testo">
                La singolarità
              </h3>
              <div className="h-[1px] bg-sabbia w-20 mx-auto" />
            </div>
            <div className="bg-sfondo-chiaro border border-sabbia/30 rounded-2xl p-12">
              <p className="text-xl text-testo/70 leading-relaxed font-light italic mb-8">
                "Il viaggio non è diventare qualcun altro.<br />
                È incontrare ciò che di te chiede di essere espresso."
              </p>
              <div className="flex justify-center">
                <div className="h-[1px] bg-sabbia w-32" />
              </div>
            </div>
          </div>
        </section>

        {/* Chi siamo - Professionisti */}
        <section id="chi-siamo" className="py-20 border-t border-sabbia border-b border-sabbia bg-sfondo-chiaro animate-slide-up animate-delay-1300">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-slide-up animate-delay-1300">
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-3 text-testo">
                Chi siamo
              </h3>
              <div className="h-[1px] bg-sabbia w-20 mx-auto" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="bg-sfondo-chiaro border border-sabbia/30 rounded-2xl p-8">
                <h4 className="text-2xl font-bold uppercase mb-4 text-testo">
                  I professionisti
                </h4>
                <p className="text-testo/60 text-sm leading-relaxed mb-6">
                  Le schede dei professionisti verranno inserite direttamente
                  dal gruppo di professionisti di SINGULARMENTIS.
                </p>
              </div>

              <div className="bg-sfondo-chiaro border border-sabbia/30 rounded-2xl p-8">
                <h4 className="text-2xl font-bold uppercase mb-4 text-testo">
                  Annamaria Laudato
                </h4>
                <p className="text-xs text-verde-petrolio/80 uppercase tracking-widest font-bold mb-3">
                  Psicologa • Psicoterapeuta • Supervisore
                </p>
                <p className="text-testo/60 text-sm leading-relaxed mb-4">
                  Psicologa e psicoterapeuta a orientamento psicodinamico, con esperienza
                  nell'ambito della salute mentale e della riabilitazione psichiatrica.
                </p>
                <ul className="space-y-2 text-sm text-testo/60">
                  <li className="flex items-start gap-2">
                    <span className="text-verde-petrolio">📍</span>
                    Formia (LT) · Roma
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-verde-petrolio">📞</span>
                    349 816 8380
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-verde-petrolio">✉️</span>
                    annamaria.laudato0202@gmail.com
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-verde-petrolio">💼</span>
                    Studio privato · Formia e Roma
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contatti */}
        <section id="contatti" className="py-20 animate-fade-in animate-delay-1500">
          <div className="max-w-6xl mx-auto">
            <div className="bg-verde-petrolio p-12 rounded-2xl text-center">
              <h3 className="text-3xl font-bold uppercase mb-4 text-white">
                Contatti
              </h3>
              <p className="text-white/90 text-lg mb-6">
                Per informazioni e appuntamenti, contatta direttamente
                i professionisti del gruppo SINGULARMENTIS.
              </p>
              <a href="mailto:annamaria.laudato0202@gmail.com" className="px-8 py-3 bg-white text-verde-petrolio font-bold uppercase tracking-wide rounded-full hover:bg-sabbia transition-colors">
                Scrivici
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-sfondo text-testo py-12 border-t border-sabbia/30 animate-fade-in animate-delay-1600">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <img
              src="/logo.png"
              alt="Logo Singularmentis"
              className="w-16 h-auto md:w-20"
            />
            <span className="text-xs font-bold uppercase tracking-widest text-testo/60">
              SINGULARMENTIS
            </span>
          </div>
          <nav className="flex flex-col sm:flex-row justify-center gap-6 mb-8 text-sm text-testo/60">
            <a href="#home" className="hover:text-verde-petrolio transition-colors">Home</a>
            <a href="#progetto" className="hover:text-verde-petrolio transition-colors">Il Progetto</a>
            <a href="#teoria" className="hover:text-verde-petrolio transition-colors">Teoria e Ricerche</a>
            <a href="#approfondimenti" className="hover:text-verde-petrolio transition-colors">Approfondimenti</a>
            <a href="#gruppi" className="hover:text-verde-petrolio transition-colors">Gruppi e Comunità</a>
            <a href="#contatti" className="hover:text-verde-petrolio transition-colors">Contatti</a>
          </nav>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10 border-t border-sabbia/30 pt-8">
            <div className="flex flex-col items-center text-center">
              <svg className="w-6 h-6 text-verde-petrolio mb-3" viewBox="0 0 32 32" fill="none" stroke="#2C5F5E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2 C7 2 3 6 3 11 C3 16 7 20 12 20 C17 20 21 16 21 11 C21 6 17 2 12 2 Z" />
                <path d="M12 11 C9 11 9 15 12 15 C15 15 15 11 12 11 Z" fill="#2C5F5E" />
              </svg>
              <span className="text-xs font-bold uppercase tracking-widest text-testo">La singolarità</span>
              <span className="text-[10px] text-testo/50 mt-1">Oltre le categorie</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <svg className="w-6 h-6 text-verde-petrolio mb-3" viewBox="0 0 32 32" fill="none" stroke="#2C5F5E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 16 C8 16 12 12 16 16 C20 12 24 16 24 16" />
              </svg>
              <span className="text-xs font-bold uppercase tracking-widest text-testo">Teoria dell'incompiuto</span>
              <span className="text-[10px] text-testo/50 mt-1">Un'idea di possibilità</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <svg className="w-6 h-6 text-verde-petrolio mb-3" viewBox="0 0 32 32" fill="none" stroke="#2C5F5E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8 L12 12 L16 16 L20 12 L16 8 Z" />
                <path d="M16 12 L12 16 M16 12 L20 16" />
              </svg>
              <span className="text-xs font-bold uppercase tracking-widest text-testo">L'identità</span>
              <span className="text-[10px] text-testo/50 mt-1">Tra mancanza e desiderio</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <svg className="w-6 h-6 text-verde-petrolio mb-3" viewBox="0 0 32 32" fill="none" stroke="#2C5F5E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 24 C8 24 12 20 16 24 C20 20 24 24 24 24" />
                <path d="M16 24 L16 16" />
              </svg>
              <span className="text-xs font-bold uppercase tracking-widest text-testo">I correttivi identitari</span>
              <span className="text-[10px] text-testo/50 mt-1">Per una vita più nostra</span>
            </div>
          </div>
          <p className="text-xs text-testo/40">
            © 2026 SINGULARMENTIS — Sito vetrina professionale — contenuti in allestimento
          </p>
        </div>
      </footer>
    </div>
  );
}
