export default function Contact() {
  const mailAddress = 'devprasath2812@gmail.com';

  const handleEmailClick = () => {
    window.location.href = `mailto:${mailAddress}`;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get('name') || 'Visitor';
    const email = formData.get('email') || '';
    const message = formData.get('message') || '';
    const subject = `Portfolio Contact from ${name}`;
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0A${message}`;
    window.location.href = `mailto:${mailAddress}?subject=${encodeURIComponent(subject)}&body=${body}`;
  };

  return (
    <section className="space-y-12" id="contact">
      <div className="flex items-center gap-4">
        <span className="h-[1px] w-12 bg-primary-container" />
        <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase tracking-widest text-primary">Contact</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <p className="font-body-lg text-on-surface-variant">
            Ready to collaborate on high-stakes digital architecture? Transmit your requirements through any available channel.
          </p>
          <div className="space-y-6">
            <button
              type="button"
              onClick={handleEmailClick}
              className="group w-full text-left"
            >
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-outline-variant/30 flex items-center justify-center group-hover:border-primary transition-colors">
                  <span className="material-symbols-outlined text-primary">mail</span>
                </div>
                <div className="flex-1">
                  <p className="text-label-md font-label-md text-primary uppercase">Email</p>
                  <p className="text-on-surface group-hover:text-primary transition-colors">{mailAddress}</p>
                </div>
                <span className="text-primary-container text-sm font-label-md uppercase opacity-0 group-hover:opacity-100 transition-opacity">Email</span>
              </div>
            </button>
            <a className="flex items-center gap-4 group" href="tel:+918438849180">
              <div className="w-12 h-12 rounded-full border border-outline-variant/30 flex items-center justify-center group-hover:border-primary transition-colors">
                <span className="material-symbols-outlined text-primary">call</span>
              </div>
              <div>
                <p className="text-label-md font-label-md text-primary uppercase">Phone</p>
                <p className="text-on-surface group-hover:text-primary transition-colors">+91 8438849180</p>
              </div>
            </a>
          </div>
          <div className="flex gap-4 pt-4">
            <a
              className="w-12 h-12 flex items-center justify-center rounded-xl bg-surface-container-high border border-outline-variant/20 hover:border-primary transition-all text-on-surface-variant hover:text-primary hover:shadow-[0_0_15px_rgba(255,85,69,0.3)]"
              href="https://github.com/Devprasath17"
              target="_blank"
              rel="noreferrer noopener"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              className="w-12 h-12 flex items-center justify-center rounded-xl bg-surface-container-high border border-outline-variant/20 hover:border-primary transition-all text-on-surface-variant hover:text-primary hover:shadow-[0_0_15px_rgba(255,85,69,0.3)]"
              href="https://www.linkedin.com/in/devprasath-k-k-553b36293"
              target="_blank"
              rel="noreferrer noopener"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="glass-panel p-8 rounded-2xl crimson-glow border border-outline-variant/10">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-1">
              <label className="font-label-md text-label-md text-primary uppercase tracking-widest">Name</label>
              <input
                name="name"
                className="w-full bg-surface-container-high border border-outline-variant/20 rounded-lg text-on-surface focus:border-primary focus:ring-0 transition-colors px-4 py-3"
                placeholder="Your name..."
                type="text"
              />
            </div>
            <div className="space-y-1">
              <label className="font-label-md text-label-md text-primary uppercase tracking-widest">Email</label>
              <input
                name="email"
                className="w-full bg-surface-container-high border border-outline-variant/20 rounded-lg text-on-surface focus:border-primary focus:ring-0 transition-colors px-4 py-3"
                placeholder="your@email.com"
                type="email"
              />
            </div>
            <div className="space-y-1">
              <label className="font-label-md text-label-md text-primary uppercase tracking-widest">Message</label>
              <textarea
                name="message"
                className="w-full bg-surface-container-high border border-outline-variant/20 rounded-lg text-on-surface focus:border-primary focus:ring-0 transition-colors px-4 py-3"
                placeholder="How can I help you?"
                rows="4"
              />
            </div>
            <button
              className="w-full py-4 bg-primary-container text-on-primary-container font-display font-bold uppercase tracking-widest rounded-lg hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary-container/20"
              type="submit"
            >
              <span>Send Message</span>
              <span className="material-symbols-outlined text-[20px]">send</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
