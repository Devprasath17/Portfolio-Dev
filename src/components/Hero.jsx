export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center gap-8 md:gap-12 py-12" id="home">
      <div className="relative w-48 h-48 md:w-80 md:h-80 flex-shrink-0 group">
        <div className="absolute inset-0 bg-primary-container/30 rounded-full blur-3xl group-hover:bg-primary-container/40 transition-all duration-700" />
        <div className="absolute inset-0 bg-gradient-to-tr from-primary-container to-transparent rounded-full opacity-20 group-hover:opacity-40 transition-opacity" />
        <div className="w-full h-full rounded-full border-2 border-primary-container relative z-10 overflow-hidden bg-surface-container flex items-center justify-center">
          <img
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOhggg_LNVuP9JMKdnXfOjui7Pq57vTpXUHhgCqZS4obSFCfEtF92dqCOiKtQn8_zkFyjAJV6Nntg7QR37dXXHyd7JkFhdq_kyt__VHxEWP-CoKM9gkBGvA4iDh5v2BoHGiqoQXgCOGawbEE8jsbJVeT6EUz3oefXvZsUIe4mqpcC95hsIuvZaXqba1tdPq21hV4AzLl4JxILH1Nw18BZNAxy7i2H4AKxy-lCweIDNBXbQemlgEUGSTO_F1AHBHKj7HI7MlC6PUbNZ"
            alt="Devprasath K K"
          />
        </div>
        <div className="absolute -z-10 -top-4 -right-4 w-32 h-32 rounded-full bg-primary-container/10 blur-xl animate-pulse" />
      </div>

      <div className="flex-1 space-y-6 text-center md:text-left">
        <div className="space-y-2">
          <p className="font-label-md text-label-md text-primary uppercase tracking-widest">Architect of Shadows</p>
          <h1 className="font-display text-4xl md:text-display text-primary leading-tight uppercase text-glow">Devprasath K K</h1>
        </div>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto md:mx-0">
          Full Stack Developer specializing in MERN stack, building scalable web applications and REST APIs.
        </p>

        <div className="grid grid-cols-2 gap-4 pt-4">
          <div className="glass-panel p-4 rounded-xl border border-outline-variant/10">
            <p className="text-primary font-display text-headline-md">5+</p>
            <p className="text-code-sm text-on-surface-variant font-label-md uppercase">Projects Built</p>
          </div>
          <div className="glass-panel p-4 rounded-xl border border-outline-variant/10">
            <p className="text-primary font-display text-headline-md">MERN</p>
            <p className="text-code-sm text-on-surface-variant font-label-md uppercase">Stack Expertise</p>
          </div>
          <div className="glass-panel p-4 rounded-xl border border-outline-variant/10">
            <p className="text-primary font-display text-headline-md">Intern</p>
            <p className="text-code-sm text-on-surface-variant font-label-md uppercase">Experience</p>
          </div>
          <div className="glass-panel p-4 rounded-xl border border-outline-variant/10">
            <p className="text-primary font-display text-headline-md">Active</p>
            <p className="text-code-sm text-on-surface-variant font-label-md uppercase">Problem Solver</p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-6">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="bg-primary-container hover:bg-primary-container/90 text-on-primary-container px-8 py-4 rounded-xl font-display font-bold uppercase tracking-wider transition-all flex items-center gap-2 group shadow-lg shadow-primary-container/20"
          >
            <span>Download Resume (PDF)</span>
            <span className="material-symbols-outlined group-hover:translate-y-0.5 transition-transform">download</span>
          </a>
          <a
            className="border border-outline-variant/30 hover:border-primary px-8 py-4 rounded-xl font-display font-bold uppercase tracking-wider text-primary transition-all backdrop-blur-sm"
            href="#contact"
          >
            Initiate Contact
          </a>
        </div>
      </div>
    </section>
  );
}
