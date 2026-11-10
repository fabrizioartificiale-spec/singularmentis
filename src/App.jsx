export default function App() {
  return (
    <div className="min-h-screen bg-nero-chiaro text-avorio">
      <header className="px-6 py-6 border-b border-argento bg-nero-chiaro/90 backdrop-blur sticky top-0 z-20 animate-fade-in animate-delay-100">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-extrabold tracking-tighter uppercase text-avorio hover-lift">
            SINGULARMENTIS
          </h1>
          <nav className="hidden md:flex space-x-8 text-sm font-semibold uppercase tracking-widest text-avorio/70">
            <a href="#home" className="hover:text-oro transition-colors hover-lift">Home</a>
            <a href="#progetto" className="hover:text-oro transition-colors hover-lift">Il progetto</a>
            <a href="#metodo" className="hover:text-oro transition-colors hover-lift">Il metodo</a>
            <a href="#professionisti" className="hover:text-oro transition-colors hover-lift">I professionisti</a>
            <a href="#individuale" className="hover:text-oro transition-colors hover-lift">Psicoterapia individuale</a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6">
        {/* Hero con gradiente chiaro */}
        <section id="home" className="relative overflow-hidden animate-fade-in animate-delay-100">
          <div
            className="absolute inset-0 -z-10 bg-hero-gradient"
          />
          <div className="absolute inset-0 -z-10 bg-nero-chiaro/40"></div>
          <div className="relative z-10 max-w-3xl mx-auto px-6 py-24 text-center text-nero-chiaro">
            <span className="text-xs font-extrabold uppercase tracking-widest text-oro border-b-2 border-oro inline-block mb-10 pb-2 animate-slide-left animate-delay-200">
              Nuovo modello psicoterapeutico
            </span>
            <h2 className="text-6xl md:text-8xl font-extrabold uppercase tracking-tight mb-10 leading-tight text-nero-chiaro animate-slide-right animate-delay-300">
              SINGULARMENTIS
            </h2>
            <p className="text-lg md:text-xl max-w-xl mx-auto text-nero-chiaro/80 leading-relaxed mb-12 font-light animate-fade-in animate-delay-400">
              Un metodo fondato sull’unicità di ogni storia di vita. L’anamnesi emotivo-funzionale si sviluppa attraverso una batteria di domande aperte, in videochiamata, per individuare e isolare le criticità della sofferenza esistenziale.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-scale-in animate-delay-500">
              <a href="#metodo" className="px-10 py-5 btn-primary text-nero-chiaro font-bold uppercase tracking-wide">
                Scopri il metodo
              </a>
              <a href="#individuale" className="px-10 py-5 btn-outline text-avorio font-bold uppercase tracking-wide">
                Psicoterapia individuale
              </a>
            </div>
          </div>
        </section>

        {/* Separatore geometrico */}
        <div className="max-w-6xl mx-auto my-20 animate-fade-in animate-delay-600">
          <div className="flex items-center justify-center gap-4">
            <div className="flex-1 line-horizontal"></div>
            <span className="px-6 text-xs font-extrabold uppercase tracking-widest text-oro hover-lift">Il metodo</span>
            <div className="flex-1 line-horizontal"></div>
          </div>
        </div>

        {/* Presentazione con immagine */}
        <section id="progetto" className="py-24 border-t border-argento border-b border-argento bg-nero-chiaro/10 animate-scale-in animate-delay-700">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-left animate-delay-700">
              <h3 className="text-4xl font-extrabold uppercase tracking-tight mb-8 leading-tight">
                Singularmentis —<br />
                <span className="text-oro">il progetto</span>
              </h3>
              <p className="text-lg md:text-xl text-avorio/80 leading-relaxed mb-8 font-light">
                Singularmentis è un metodo psicoterapeutico sviluppato da un gruppo di professionisti.
                Il modello identifica l’unicità di ogni storia di vita e pone in essa lo strumento
                d’indagine per ottenere l’anamnesi emotivo-funzionale.
              </p>
              <p className="text-lg md:text-xl text-avorio/80 leading-relaxed font-light">
                La scarsa accettazione di sé, le inibizioni di spinte motivazionali,
                i comportamenti disadattivi e ogni altra espressione di perdita di significato
                del proprio vivere quotidiano sono intesi come manifestazione di una
                narrazione depotenziata della trama emotiva.
              </p>
            </div>
            <div className="relative animate-slide-right animate-delay-800">
              <div className="absolute -inset-4 bg-oro/10 blur-3xl rounded-full"></div>
              <img
                src="https://images.unsplash.com/photo-1616410606267-7e6e3239994b?q=80&w=800&auto=format&fit=crop"
                alt=""
                className="relative rounded-lg border-4 border-avorio shadow-xl object-cover object-center aspect-[4/5] hover-lift"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* 4 Quadranti con contrasto — tutti dello stesso colore chiaro */}
        <section id="metodo" className="py-24 border-t border-argento border-b border-argento animate-fade-in animate-delay-900">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-end mb-20 animate-slide-left animate-delay-900">
              <div>
                <h3 className="text-5xl font-extrabold uppercase tracking-tight leading-tight">
                  Il metodo
                </h3>
                <p className="text-avorio/60 mt-4 text-lg font-light">
                  Anamnesi emotivo-funzionale attraverso i quattro quadranti di riferimento
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Quadrante I — tutti chiari */}
              <div className="group relative p-12 bg-avorio text-nero-chiaro border-2 border-argento hover:border-oro transition-all duration-200 hover:-translate-y-2 hover:shadow-none hover-lift animate-scale-in animate-delay-900">
                <div className="absolute top-6 right-6 w-10 h-10 border border-argento/30 rounded-sm group-hover:border-oro transition-colors"></div>
                <h4 className="text-2xl font-extrabold uppercase mb-4 tracking-tight text-oro">Quadrante I</h4>
                <p className="text-xs font-extrabold uppercase tracking-widest text-oro/70 mb-6">Proattivo del cambiamento</p>
                <p className="text-sm text-nero-chiaro/90 leading-relaxed mb-8 font-medium">
                  Amore e Socialità — generatori esperienziali che favoriscono il cambiamento,
                  consentendo di riscoprire connessioni creative nell’incontro con l’altro.
                </p>
                <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-oro">
                  <span className="w-1 h-1 bg-oro rounded-full"></span>
                  + / +
                </span>
              </div>

              {/* Quadrante II — tutti chiari */}
              <div className="group relative p-12 bg-avorio text-nero-chiaro border-2 border-argento hover:border-oro transition-all duration-200 hover:-translate-y-2 hover:shadow-none hover-lift animate-scale-in animate-delay-1000">
                <div className="absolute top-6 right-6 w-10 h-10 border border-argento/30 rounded-sm group-hover:border-oro transition-colors"></div>
                <h4 className="text-2xl font-extrabold uppercase mb-4 tracking-tight text-oro">Quadrante II</h4>
                <p className="text-xs font-extrabold uppercase tracking-widest text-oro/70 mb-6">Scelte</p>
                <p className="text-sm text-nero-chiaro/90 leading-relaxed mb-8 font-medium">
                  Piacere / Dispiacere — la forza vitale che spinge a conoscere il mondo;
                  la direzione determinata dagli equilibri orienta le nostre scelte.
                </p>
                <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-oro">
                  <span className="w-1 h-1 bg-oro rounded-full"></span>
                  - / +
                </span>
              </div>

              {/* Quadrante III — tutti chiari */}
              <div className="group relative p-12 bg-avorio text-nero-chiaro border-2 border-argento hover:border-oro transition-all duration-200 hover:-translate-y-2 hover:shadow-none hover-lift animate-scale-in animate-delay-1100">
                <div className="absolute top-6 right-6 w-10 h-10 border border-argento/30 rounded-sm group-hover:border-oro transition-colors"></div>
                <h4 className="text-2xl font-extrabold uppercase mb-4 tracking-tight text-oro">Quadrante III</h4>
                <p className="text-xs font-extrabold uppercase tracking-widest text-oro/70 mb-6">Resistenze</p>
                <p className="text-sm text-nero-chiaro/90 leading-relaxed mb-8 font-medium">
                  Paura / Distruzione — generatori esperienziali che, nel rapporto
                  tormentato con il mondo esterno, possono manifestarsi come destrutturazione
                  o ricostruzione della potenza creativa.
                </p>
                <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-oro">
                  <span className="w-1 h-1 bg-oro rounded-full"></span>
                  - / -
                </span>
              </div>

              {/* Quadrante IV — tutti chiari */}
              <div className="group relative p-12 bg-avorio text-nero-chiaro border-2 border-argento hover:border-oro transition-all duration-200 hover:-translate-y-2 hover:shadow-none hover-lift animate-scale-in animate-delay-1200">
                <div className="absolute top-6 right-6 w-10 h-10 border border-argento/30 rounded-sm group-hover:border-oro transition-colors"></div>
                <h4 className="text-2xl font-extrabold uppercase mb-4 tracking-tight text-oro">Quadrante IV</h4>
                <p className="text-xs font-extrabold uppercase tracking-widest text-oro/70 mb-6">Consapevolezze</p>
                <p className="text-sm text-nero-chiaro/90 leading-relaxed mb-8 font-medium">
                  Disabilità / Competenze — i racconti che definiscono il “saper fare”,
                  la biografia narrativa di ogni individuo orientata alla realizzazione di obiettivi.
                </p>
                <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-oro">
                  <span className="w-1 h-1 bg-oro rounded-full"></span>
                  + / -
                </span>
              </div>
            </div>

            <div className="mt-20 max-w-2xl mx-auto text-center text-avorio/60 leading-relaxed font-light animate-fade-in animate-delay-1300">
              L’anamnesi avviene attraverso una batteria di 200 domande aperte,
              somministrata in più appuntamenti in videochiamata, per azzerare le
              distanze e favorire un ambiente protetto e familiare.
            </div>
          </div>
        </section>

        {/* Psicoterapia individuale con immagine */}
        <section id="individuale" className="py-24 border-t border-argento border-b border-argento bg-nero-chiaro/10 animate-scale-in animate-delay-1400">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative animate-slide-right animate-delay-1400">
              <div className="absolute -inset-4 bg-oro/10 blur-3xl rounded-full"></div>
              <img
                src="https://images.unsplash.com/photo-1505986291706-7c90e9b0b98b?q=80&w=800&auto=format&fit=crop"
                alt=""
                className="relative rounded-lg border-4 border-avorio shadow-xl object-cover object-center aspect-[4/5] hover-lift"
                loading="lazy"
              />
            </div>
            <div className="order-1 lg:order-2 animate-slide-left animate-delay-1400">
              <h3 className="text-4xl font-extrabold uppercase tracking-tight mb-8 leading-tight">
                Psicoterapia<br />
                <span className="text-oro">individuale</span>
              </h3>
              <p className="text-lg md:text-xl text-avorio/80 leading-relaxed mb-8 font-light">
                Servizio confermato: psicoterapia individuale. Il sito è una vetrina
                professionale senza prenotazioni online. Per informazioni e appuntamenti,
                contattare direttamente i professionisti del gruppo SINGULARMENTIS.
              </p>
              <div className="bg-oro p-8 text-avorio font-light text-sm leading-relaxed border-t-4 border-argento animate-pulse-oro">
                “Riconsegnare al singolo la sua verità, fuori da qualsiasi
                generalizzazione o categorizzazione.”
              </div>
            </div>
          </div>
        </section>

        {/* I professionisti */}
        <section id="professionisti" className="py-24 animate-fade-in animate-delay-1500">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-end mb-16 animate-slide-left animate-delay-1500">
              <h3 className="text-4xl font-extrabold uppercase tracking-tight">I professionisti</h3>
              <span className="text-xs font-extrabold uppercase tracking-widest text-oro border-b-2 border-argento pb-2 inline-block hover-lift">In aggiornamento</span>
            </div>
            <p className="text-lg text-avorio/60 max-w-2xl text-center mx-auto font-light animate-fade-in animate-delay-1600">
              Le schede dei professionisti verranno inserite direttamente
              dal gruppo di professionisti di SINGULARMENTIS.
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-nero-chiaro text-avorio py-20 border-t border-argento/30 animate-fade-in animate-delay-1700">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex flex-col sm:flex-row sm:justify-center gap-8 mb-12 animate-fade-in animate-delay-1700">
            <a href="#home" className="text-sm font-semibold uppercase tracking-wide hover:text-oro transition-colors text-avorio/60 hover-lift">Home</a>
            <a href="#progetto" className="text-sm font-semibold uppercase tracking-wide hover:text-oro transition-colors text-avorio/60 hover-lift">Il progetto</a>
            <a href="#metodo" className="text-sm font-semibold uppercase tracking-wide hover:text-oro transition-colors text-avorio/60 hover-lift">Il metodo</a>
            <a href="#individuale" className="text-sm font-semibold uppercase tracking-wide hover:text-oro transition-colors text-avorio/60 hover-lift">Psicoterapia individuale</a>
          </div>
          <div className="h-[1px] bg-argento/20 my-12"></div>
          <p className="text-sm font-extrabold uppercase tracking-widest mb-2 animate-fade-in animate-delay-1800">
            &copy; 2026 SINGULARMENTIS
          </p>
          <p className="text-xs text-avorio/40 animate-fade-in animate-delay-1900">
            Sito vetrina professionale — contenuti in allestimento
          </p>
        </div>
      </footer>
    </div>
  );
}
