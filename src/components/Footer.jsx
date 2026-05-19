export default function Footer() {
  const links = [
    { label: 'GitHub', href: 'https://github.com/Devprasath17' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/devprasath-k-k-553b36293' },
  ];

  return (
    <footer className="w-full py-16 border-t border-outline-variant/10 bg-background/50">
      <div className="flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-gutter max-w-container-max mx-auto gap-8">
        <div className="space-y-2 text-center md:text-left">
          <p className="font-display text-headline-md text-primary uppercase text-glow">DEVPRA SATH K K</p>
          <p className="font-label-md text-label-md text-on-surface-variant opacity-80">Built with ❤️ by Devprasath using React</p>
        </div>
        <div className="flex gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              className="text-on-surface-variant hover:text-primary transition-all font-label-md text-label-md uppercase tracking-widest"
              href={link.href}
              target="_blank"
              rel="noreferrer noopener"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
