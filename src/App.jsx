export default function App() {
  return (
    <div className="min-h-screen bg-sfondo text-avorio">
      {/* Header */}
      <header className="px-6 py-6 border-b border-argento bg-sfondo/90 backdrop-blur sticky top-0 z-20 animate-fade-in animate-delay-100">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3 hover-lift cursor-default">
            <img
              src="/logo.png"
              alt="Logo SINGULARMENTIS"
              className="w-24 h-auto"
            />
          </div>
          <nav className="hidden md:flex space-x-6 text-sm font-semibold uppercase tracking-widest text-avorio/70">
            <a href="#home" className="hover:text-verde-menta transition-colors hover-lift">Home</a>
            <a href="#percorso" className="hover:text-verde-menta transition-colors hover-lift">Il percorso</a>
            <a href="#singolarita" className="hover:text-verde-menta transition-colors hover-lift">La singolarità</a>
            <a href="#chi-siamo" className="hover:text-verde-menta transition-colors hover-lift">Chi siamo</a>
            <a href="#contatti" className="hover:text-verde-menta transition-colors hover-lift">Contatti</a>
          </nav>
          <a href="#area-personale" className="px-5 py-2 border-2 border-verde-menta text-verde-menta text-sm font-bold uppercase tracking-wide hover:bg-verde-menta/10 hover:text-verde-menta transition-all duration-200 hover-lift">
            Area personale
          </a>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6">
        {/* Hero */}
        <section id="home" className="relative overflow-hidden animate-fade-in animate-delay-100">
          <div className="absolute inset-0 -z-10 bg-hero" />
          <div className="relative z-10 max-w-3xl mx-auto px-6 py-24 text-center">
            <span className="text-xs font-extrabold uppercase tracking-widest text-verde-menta border-b-2 border-verde-menta inline-block mb-10 pb-2 animate-slide-left animate-delay-200">
              La tua verità, il tuo linguaggio, il tuo percorso.
            </span>
            <h2 className="text-5xl md:text-7xl font-extrabold uppercase tracking-tight mb-6 leading-tight text-avorio animate-slide-right animate-delay-300">
              Qual è la tua verità?
            </h2>
            <p className="text-lg md:text-xl max-w-xl mx-auto text-avorio/80 leading-relaxed mb-10 font-light animate-fade-in animate-delay-400">
              Ogni persona è un linguaggio unico.<br />
              Un percorso per ascoltarla, comprenderla,<br />
              e realizzare ciò che ti rende irripetibile.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in animate-delay-500">
              <a href="#percorso" className="px-10 py-5 btn-primary font-bold uppercase tracking-wide">
                Entra nel tuo viaggio
              </a>
            </div>
          </div>
        </section>

        {/* Il percorso Singularmentis */}
        <section id="percorso" className="py-24 border-t border-argento border-b border-argento bg-sfondo-chiaro animate-scale-in animate-delay-700">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-slide-left animate-delay-700">
              <h3 className="text-4xl font-extrabold uppercase tracking-tight mb-3">
                Il percorso Singularmentis
              </h3>
              <div className="h-[1px] bg-argento w-20 mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Fase 1 - Verde menta */}
              <div className="relative p-8 border-2 border-verde-menta-light rounded-xl bg-sfondo hover:border-verde-menta transition-all duration-200 hover-lift animate-slide-left animate-delay-700 group">
                <div className="w-12 h-12 bg-verde-menta/20 border-2 border-verde-menta rounded-full flex items-center justify-center mb-6 group-hover:bg-verde-menta group-hover:text-sfondo transition-all duration-200">
                  <span className="text-xl text-verde-menta">1</span>
                </div>
                <h4 className="text-xl font-bold uppercase mb-3 text-avorio">Conosci la tua storia</h4>
                <p className="text-sm text-avorio/60 leading-relaxed">
                  Una video-intervista con il tuo referente per esplorare la tua storia,
                  le tue emozioni e ciò che ti ha formato.
                </p>
              </div>

              {/* Fase 2 - Azzurro */}
              <div className="relative p-8 border-2 border-azzurro-logo-light rounded-xl bg-sfondo hover:border-azzurro-logo transition-all duration-200 hover-lift animate-slide-right animate-delay-800 group">
                <div className="w-12 h-12 bg-azzurro-logo/20 border-2 border-azzurro-logo rounded-full flex items-center justify-center mb-6 group-hover:bg-azzurro-logo group-hover:text-sfondo transition-all duration-200">
                  <span className="text-xl text-azzurro-logo">2</span>
                </div>
                <h4 className="text-xl font-bold uppercase mb-3 text-avorio">Ricevi la tua mappa</h4>
                <p className="text-sm text-avorio/60 leading-relaxed">
                  Una restituzione unica della tua singolarità: risorse, aree di crescita,
                  resilienze e possibilità evolutive.
                </p>
              </div>

              {/* Fase 3 - Rosa */}
              <div className="relative p-8 border-2 border-rosa-logo-light rounded-xl bg-sfondo hover:border-rosa-logo transition-all duration-200 hover-lift animate-slide-left animate-delay-900 group">
                <div className="w-12 h-12 bg-rosa-logo/20 border-2 border-rosa-logo rounded-full flex items-center justify-center mb-6 group-hover:bg-rosa-logo group-hover:text-sfondo transition-all duration-200">
                  <span className="text-xl text-rosa-logo">3</span>
                </div>
                <h4 className="text-xl font-bold uppercase mb-3 text-avorio">Costruiamo il tuo percorso</h4>
                <p className="text-sm text-avorio/60 leading-relaxed">
                  Un protocollo personalizzato attraverso libri, film, musica, scrittura
                  e attività esperienziali per esprimere il tuo linguaggio.
                </p>
              </div>

              {/* Fase 4 - Beige */}
              <div className="relative p-8 border-2 border-beige-logo-light rounded-xl bg-sfondo hover:border-beige-logo transition-all duration-200 hover-lift animate-slide-right animate-delay-1000 group">
                <div className="w-12 h-12 bg-beige-logo/20 border-2 border-beige-logo rounded-full flex items-center justify-center mb-6 group-hover:bg-beige-logo group-hover:text-sfondo transition-all duration-200">
                  <span className="text-xl text-beige-logo">4</span>
                </div>
                <h4 className="text-xl font-bold uppercase mb-3 text-avorio">Diventa autore del cambiamento</h4>
                <p className="text-sm text-avorio/60 leading-relaxed">
                  Un cammino di un anno con follow-up periodici per monitorare,
                  comprendere e dare forma al tuo cambiamento.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* La singolarità */}
        <section id="singolarita" className="py-24 animate-fade-in animate-delay-1100">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-slide-left animate-delay-1100">
              <h3 className="text-4xl font-extrabold uppercase tracking-tight mb-3">
                La singolarità
              </h3>
              <div className="h-[1px] bg-argento w-20 mx-auto" />
            </div>
            <div className="bg-sfondo-chiaro border border-argento/30 rounded-2xl p-12">
              <p className="text-xl text-avorio/80 leading-relaxed font-light italic mb-8">
                "Il viaggio non è diventare qualcun altro.<br />
                È incontrare ciò che di te chiede di essere espresso."
              </p>
              <div className="flex justify-center">
                <div className="h-[1px] bg-argento w-32" />
              </div>
            </div>
          </div>
        </section>

        {/* Chi siamo - Professionisti */}
        <section id="chi-siamo" className="py-24 border-t border-argento border-b border-argento bg-sfondo-chiaro animate-scale-in animate-delay-1300">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-slide-left animate-delay-1300">
              <h3 className="text-4xl font-extrabold uppercase tracking-tight mb-3">
                Chi siamo
              </h3>
              <div className="h-[1px] bg-argento w-20 mx-auto" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="bg-sfondo border border-argento/30 rounded-2xl p-8">
                <h4 className="text-2xl font-bold uppercase mb-4 text-avorio">
                  I professionisti
                </h4>
                <p className="text-avorio/60 text-sm leading-relaxed mb-6">
                  Le schede dei professionisti verranno inserite direttamente
                  dal gruppo di professionisti di SINGULARMENTIS.
                </p>
              </div>

              <div className="bg-sfondo border border-argento/30 rounded-2xl p-8">
                <h4 className="text-2xl font-bold uppercase mb-4 text-avorio">
                  Annamaria Laudato
                </h4>
                <p className="text-xs text-verde-menta/80 uppercase tracking-widest font-bold mb-3">
                  Psicologa • Psicoterapeuta • Supervisore
                </p>
                <p className="text-avorio/60 text-sm leading-relaxed mb-4">
                  Psicologa e psicoterapeuta a orientamento psicodinamico, con esperienza
                  nell'ambito della salute mentale e della riabilitazione psichiatrica.
                </p>
                <ul className="space-y-2 text-sm text-avorio/60">
                  <li className="flex items-start gap-2">
                    <span className="text-verde-menta">📍</span>
                    Formia (LT) · Roma
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-verde-menta">📞</span>
                    349 816 8380
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-verde-menta">✉️</span>
                    annamaria.laudato0202@gmail.com
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-verde-menta">💼</span>
                    Studio privato · Formia e Roma
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contatti */}
        <section id="contatti" className="py-24 animate-fade-in animate-delay-1500">
          <div className="max-w-6xl mx-auto">
            <div className="bg-verde-menta p-12 rounded-2xl text-center">
              <h3 className="text-3xl font-extrabold uppercase mb-4 text-sfondo">
                Contatti
              </h3>
              <p className="text-sfondo/90 text-lg mb-6">
                Per informazioni e appuntamenti, contatta direttamente
                i professionisti del gruppo SINGULARMENTIS.
              </p>
              <a href="mailto:annamaria.laudato0202@gmail.com" className="px-8 py-3 bg-sfondo text-verde-menta font-bold uppercase tracking-wide rounded hover:bg-sfondo-chiaro transition-colors">
                Scrivici
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-sfondo text-avorio py-12 border-t border-argento/30 animate-fade-in animate-delay-1600">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <img
              src="/logo.png"
              alt="Logo SINGULARMENTIS"
              className="w-20 h-auto"
            />
            <span className="text-xs font-extrabold uppercase tracking-widest text-avorio/60">
              SINGULARMENTIS
            </span>
          </div>
          <nav className="flex flex-col sm:flex-row justify-center gap-6 mb-8 text-sm text-avorio/60">
            <a href="#home" className="hover:text-verde-menta transition-colors">Home</a>
            <a href="#percorso" className="hover:text-verde-menta transition-colors">Il percorso</a>
            <a href="#singolarita" className="hover:text-verde-menta transition-colors">La singolarità</a>
            <a href="#chi-siamo" className="hover:text-verde-menta transition-colors">Chi siamo</a>
            <a href="#contatti" className="hover:text-verde-menta transition-colors">Contatti</a>
          </nav>
          <p className="text-xs text-avorio/40">
            © 2026 SINGULARMENTIS — Sito vetrina professionale — contenuti in allestimento
          </p>
        </div>
      </footer>
    </div>
  );
}
