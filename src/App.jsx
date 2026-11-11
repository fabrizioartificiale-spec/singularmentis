import { useState } from 'react';

export default function App() {
  const [activeFase, setActiveFase] = useState(1);

  return (
    <div className="min-h-screen bg-sfondo text-testo">
      {/* Header */}
      <header className="px-6 py-6 border-b border-sabbia bg-sfondo/90 backdrop-blur sticky top-0 z-20 animate-fade-in animate-delay-100">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3 hover-lift cursor-default">
            <img
              src="/logo.png"
              alt="Logo Singularmentis"
              className="w-20 h-auto md:w-24"
            />
          </div>
          <nav className="hidden md:flex space-x-8 text-sm font-semibold uppercase tracking-widest text-testo/70">
            <a href="#home" className="border-b-2 border-verde-petrolio pb-1 hover:text-verde-petrolio transition-colors hover-lift">Home</a>
            <a href="#progetto" className="hover:text-verde-petrolio transition-colors hover-lift">Il Progetto</a>
            <a href="#teoria" className="hover:text-verde-petrolio transition-colors hover-lift">Teoria e Ricerche</a>
            <a href="#approfondimenti" className="hover:text-verde-petrolio transition-colors hover-lift">Approfondimenti</a>
            <a href="#gruppi" className="hover:text-verde-petrolio transition-colors hover-lift">Gruppi e Comunità</a>
            <a href="#contatti" className="hover:text-verde-petrolio transition-colors hover-lift">Contatti</a>
          </nav>
          <button className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-verde-petrolio hover:text-verde-petrolio-hover transition-colors">
            <span>🔍</span> Cerca
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6">
        {/* Hero */}
        <section id="home" className="relative overflow-hidden animate-fade-in animate-delay-100">
          <div className="absolute inset-0 -z-10 bg-hero" />
          <div className="wave wave-1" />
          <div className="wave wave-2" />
          <div className="relative z-10 max-w-5xl mx-auto px-6 py-16 md:py-28 lg:py-40">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Colonna sinistra: testo */}
              <div className="text-center lg:text-left animate-fade-in animate-delay-100">
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-8">
                  <span className="text-sm font-extrabold uppercase tracking-widest text-verde-petrolio border-b-2 border-verde-petrolio pb-1">
                    Singularmentis
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight text-testo animate-slide-right animate-delay-300">
                  La singolarità come orizzonte
                </h1>
                <div className="h-[1px] w-16 bg-verde-petrolio mx-auto lg:mx-0 mb-8 animate-slide-left animate-delay-400" />
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

              {/* Colonna destra: illustrazione evolutiva a matita */}
              <div className="relative max-w-md mx-auto lg:mx-0 animate-fade-in animate-delay-300">
                <div className="text-center mb-8 text-sabbia text-xs uppercase tracking-widest font-bold">
                  Il bambino che cresce
                </div>

                {/* Fase 1 - schizzo su foglio con orsacchiotto */}
                <div
                  className={`mb-10 opacity-60 transition-opacity duration-700 ${activeFase === 1 ? 'opacity-100 scale-105' : 'opacity-60 scale-100'}`}
                >
                  <div className="relative w-64 h-64 mx-auto">
                    <svg
                      className="w-full h-full pencil"
                      viewBox="0 0 240 240"
                      aria-label="Fase 1 - schizzo su foglio con orsacchiotto"
                    >
                      {/* Foglietto */}
                      <rect x="40" y="40" w="160" h="160" fill="none" stroke="#D1D5DB" strokeWidth="1" />
                      {/* Schizzo bambino piccolo */}
                      <circle cx="120" cy="70" r="20" stroke="#6B7280" strokeWidth="1.5" fill="none" />
                      <line x1="120" y1="90" x2="120" y2="130" stroke="#6B7280" strokeWidth="1.5" />
                      <line x1="100" y1="100" x2="140" y2="100" stroke="#6B7280" strokeWidth="1.5" />
                      <line x1="105" y1="130" x2="90" y2="160" stroke="#6B7280" strokeWidth="1.5" />
                      <line x1="135" y1="130" x2="150" y2="160" stroke="#6B7280" strokeWidth="1.5" />
                      {/* Orsacchiotto accanto */}
                      <path d="M 60 100 Q 50 90 55 75 Q 65 70 75 78 Q 85 70 95 78 Q 105 70 100 90 Q 95 100 105 105 Q 100 115 90 110 Q 80 115 70 110 Q 65 105 60 100 Z" fill="none" stroke="#9CA3AF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="58" cy="82" r="3" fill="none" stroke="#9CA3AF" strokeWidth="1" />
                      <circle cx="82" cy="82" r="3" fill="none" stroke="#9CA3AF" strokeWidth="1" />
                      <path d="M 65 90 Q 72 88 79 90" fill="none" stroke="#9CA3AF" strokeWidth="1" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div className="mt-4 text-xs text-testo/60 font-medium uppercase tracking-widest">
                    1. schizzo su carta
                  </div>
                </div>

                {/* Fase 2 - bambino con orsacchiotto più definito */}
                <div
                  className={`mb-10 opacity-60 transition-opacity duration-700 ${activeFase === 2 ? 'opacity-100 scale-105' : 'opacity-60 scale-100'}`}
                >
                  <div className="relative w-64 h-64 mx-auto">
                    <svg
                      className="w-full h-full pencil"
                      viewBox="0 0 240 240"
                      aria-label="Fase 2 - bambino con orsacchiotto definito"
                    >
                      <rect x="40" y="40" w="160" h="160" fill="none" stroke="#D1D5DB" strokeWidth="1" />
                      <ellipse cx="120" cy="65" rx="22" ry="26" stroke="#6B7280" strokeWidth="1.5" fill="none" />
                      <line x1="120" y1="91" x2="120" y2="135" stroke="#6B7280" strokeWidth="1.5" />
                      <line x1="98" y1="104" x2="142" y2="104" stroke="#6B7280" strokeWidth="1.5" />
                      <line x1="106" y1="135" x2="88" y2="168" stroke="#6B7280" strokeWidth="1.5" />
                      <line x1="134" y1="135" x2="152" y2="168" stroke="#6B7280" strokeWidth="1.5" />
                      <line x1="106" y1="168" x2="92" y2="195" stroke="#6B7280" strokeWidth="1.5" />
                      <line x1="134" y1="168" x2="148" y2="195" stroke="#6B7280" strokeWidth="1.5" />
                      {/* Orsacchiotto più definito */}
                      <path d="M 70 95 Q 60 85 68 72 Q 78 68 88 74 Q 98 68 108 74 Q 118 68 108 90 Q 112 100 100 96 Q 90 100 80 94 Q 74 90 70 95 Z" fill="none" stroke="#9CA3AF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="72" cy="76" r="3.5" fill="none" stroke="#9CA3AF" strokeWidth="1" />
                      <circle cx="94" cy="76" r="3.5" fill="none" stroke="#9CA3AF" strokeWidth="1" />
                    </svg>
                  </div>
                  <div className="mt-4 text-xs text-testo/60 font-medium uppercase tracking-widest">
                    2. bambino con il suo orsacchiotto
                  </div>
                </div>

                {/* Fase 3 - bambino cresciuto con dettagli */}
                <div
                  className={`mb-10 opacity-60 transition-opacity duration-700 ${activeFase === 3 ? 'opacity-100 scale-105' : 'opacity-60 scale-100'}`}
                >
                  <div className="relative w-64 h-64 mx-auto">
                    <svg
                      className="w-full h-full pencil"
                      viewBox="0 0 240 240"
                      aria-label="Fase 3 - bambino cresciuto"
                    >
                      <rect x="40" y="40" w="160" h="160" fill="none" stroke="#D1D5DB" strokeWidth="1" />
                      <path d="M 98 58 Q 120 46 142 58 Q 150 80 146 100 Q 142 120 126 116 Q 110 120 104 116 Q 98 100 94 80 Q 102 58 110 58 Q 118 58 116 58 Z" fill="none" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <line x1="120" y1="100" x2="120" y2="138" stroke="#6B7280" strokeWidth="1.2" strokeLinecap="round" />
                      <path d="M 104 116 Q 120 112 136 116" fill="none" stroke="#6B7280" strokeWidth="1.2" strokeLinecap="round" />
                      <circle cx="108" cy="90" r="4" fill="none" stroke="#6B7280" strokeWidth="1" />
                      <circle cx="132" cy="90" r="4" fill="none" stroke="#6B7280" strokeWidth="1" />
                      <line x1="110" y1="138" x2="92" y2="170" stroke="#6B7280" strokeWidth="1.2" strokeLinecap="round" />
                      <line x1="130" y1="138" x2="148" y2="170" stroke="#6B7280" strokeWidth="1.2" strokeLinecap="round" />
                      <line x1="104" y1="170" x2="88" y2="198" stroke="#6B7280" strokeWidth="1.2" strokeLinecap="round" />
                      <line x1="136" y1="170" x2="152" y2="198" stroke="#6B7280" strokeWidth="1.2" strokeLinecap="round" />
                      {/* Orsacchiotto piccolo in mano */}
                      <path d="M 88 140 Q 82 132 86 122 Q 94 116 102 124 Q 112 116 108 128 Q 100 136 90 140 Z" fill="none" stroke="#9CA3AF" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="mt-4 text-xs text-testo/60 font-medium uppercase tracking-widest">
                    3. bambino cresciuto
                  </div>
                </div>

                {/* Fase 4 - ragazzo/adulto giovane */}
                <div
                  className={`mb-10 opacity-60 transition-opacity duration-700 ${activeFase === 4 ? 'opacity-100 scale-105' : 'opacity-60 scale-100'}`}
                >
                  <div className="relative w-64 h-64 mx-auto">
                    <svg
                      className="w-full h-full pencil"
                      viewBox="0 0 240 240"
                      aria-label="Fase 4 - ragazzo giovane"
                    >
                      <rect x="40" y="40" w="160" h="160" fill="none" stroke="#D1D5DB" strokeWidth="1" />
                      <path d="M 94 64 Q 120 50 146 64 Q 154 88 150 112 Q 144 136 126 132 Q 110 136 104 112 Q 98 88 106 64 Q 102 60 120 60 Q 138 60 134 64 Z" fill="none" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <line x1="120" y1="114" x2="120" y2="150" stroke="#6B7280" strokeWidth="1.2" strokeLinecap="round" />
                      <path d="M 104 130 Q 120 126 136 130" fill="none" stroke="#6B7280" strokeWidth="1.2" strokeLinecap="round" />
                      <circle cx="106" cy="96" r="4.5" fill="none" stroke="#6B7280" strokeWidth="1" />
                      <circle cx="134" cy="96" r="4.5" fill="none" stroke="#6B7280" strokeWidth="1" />
                      <ellipse cx="120" cy="100" rx="16" ry="12" fill="none" stroke="#6B7280" strokeWidth="1" />
                      <path d="M 102 94 Q 120 98 138 94" fill="none" stroke="#6B7280" strokeWidth="1" strokeLinecap="round" />
                      <line x1="106" y1="150" x2="90" y2="180" stroke="#6B7280" strokeWidth="1.2" strokeLinecap="round" />
                      <line x1="134" y1="150" x2="150" y2="180" stroke="#6B7280" strokeWidth="1.2" strokeLinecap="round" />
                      <line x1="92" y1="180" x2="80" y2="208" stroke="#6B7280" strokeWidth="1.2" strokeLinecap="round" />
                      <line x1="148" y1="180" x2="160" y2="208" stroke="#6B7280" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div className="mt-4 text-xs text-testo/60 font-medium uppercase tracking-widest">
                    4. ragazzo giovane
                  </div>
                </div>

                {/* Selettore fasi */}
                <div className="flex justify-center gap-3 mt-10">
                  {[1, 2, 3, 4].map((n) => (
                    <button
                      key={n}
                      onClick={() => setActiveFase(n)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        activeFase === n
                          ? 'bg-verde-petrolio scale-125'
                          : 'bg-sabbia/60 hover:bg-verde-petrolio/80'
                      }`}
                      aria-label={`Fase ${n}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Il Progetto */}
        <section id="progetto" className="py-20 border-t border-sabbia border-b border-sabbia bg-sfondo-chiaro animate-scale-in animate-delay-700">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-slide-left animate-delay-700">
              <h3 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight mb-3 text-testo">
                Il Progetto
              </h3>
              <div className="h-[1px] bg-sabbia w-20 mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="relative p-8 border-2 border-verde-petrolio-soft rounded-xl bg-white hover:border-verde-petrolio transition-all duration-200 hover-lift animate-slide-left animate-delay-700 group">
                <div className="w-12 h-12 bg-verde-petrolio/10 border-2 border-verde-petrolio rounded-full flex items-center justify-center mb-6 group-hover:bg-verde-petrolio group-hover:text-white transition-all duration-200">
                  <span className="text-xl text-verde-petrolio">1</span>
                </div>
                <h4 className="text-xl font-bold uppercase mb-3 text-testo">Conosci la tua storia</h4>
                <p className="text-sm text-testo/60 leading-relaxed">
                  Una video-intervista con il tuo referente per esplorare la tua storia,
                  le tue emozioni e ciò che ti ha formato.
                </p>
              </div>

              <div className="relative p-8 border-2 border-sabbia rounded-xl bg-white hover:border-verde-petrolio transition-all duration-200 hover-lift animate-slide-right animate-delay-800 group">
                <div className="w-12 h-12 bg-sabbia border-2 border-sabbia rounded-full flex items-center justify-center mb-6 group-hover:bg-verde-petrolio group-hover:border-verde-petrolio group-hover:text-white transition-all duration-200">
                  <span className="text-xl text-testo">2</span>
                </div>
                <h4 className="text-xl font-bold uppercase mb-3 text-testo">Ricevi la tua mappa</h4>
                <p className="text-sm text-testo/60 leading-relaxed">
                  Una restituzione unica della tua singolarità: risorse, aree di crescita,
                  resilienze e possibilità evolutive.
                </p>
              </div>

              <div className="relative p-8 border-2 border-sabbia rounded-xl bg-white hover:border-verde-petrolio transition-all duration-200 hover-lift animate-slide-left animate-delay-900 group">
                <div className="w-12 h-12 bg-sabbia border-2 border-sabbia rounded-full flex items-center justify-center mb-6 group-hover:bg-verde-petrolio group-hover:border-verde-petrolio group-hover:text-white transition-all duration-200">
                  <span className="text-xl text-testo">3</span>
                </div>
                <h4 className="text-xl font-bold uppercase mb-3 text-testo">Costruiamo il tuo percorso</h4>
                <p className="text-sm text-testo/60 leading-relaxed">
                  Un protocollo personalizzato attraverso libri, film, musica, scrittura
                  e attività esperienziali per esprimere il tuo linguaggio.
                </p>
              </div>

              <div className="relative p-8 border-2 border-sabbia rounded-xl bg-white hover:border-verde-petrolio transition-all duration-200 hover-lift animate-slide-right animate-delay-1000 group">
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
            <div className="text-center mb-12 animate-slide-left animate-delay-1100">
              <h3 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight mb-3 text-testo">
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
        <section id="chi-siamo" className="py-20 border-t border-sabbia border-b border-sabbia bg-sfondo-chiaro animate-scale-in animate-delay-1300">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-slide-left animate-delay-1300">
              <h3 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight mb-3 text-testo">
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
              <h3 className="text-3xl font-extrabold uppercase mb-4 text-white">
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
            <span className="text-xs font-extrabold uppercase tracking-widest text-testo/60">
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
