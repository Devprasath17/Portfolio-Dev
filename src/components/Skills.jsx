export default function Skills() {
  return (
    <section className="space-y-12" id="skills">
      <div className="flex items-center gap-4">
        <span className="h-[1px] w-12 bg-primary-container" />
        <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase tracking-widest text-primary">Skills</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
        <div className="glass-panel p-8 rounded-xl space-y-6 crimson-glow">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary-container">code</span>
            <h3 className="font-headline-md text-headline-md">Languages</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {['JavaScript (ES6+)', 'TypeScript', 'Python', 'Java'].map((skill) => (
              <span key={skill} className="font-label-md text-label-md px-3 py-1.5 bg-primary-container/5 border border-outline-variant/20 rounded text-on-surface-variant">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="glass-panel p-8 rounded-xl space-y-6 lg:row-span-2 crimson-glow">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary-container">layers</span>
            <h3 className="font-headline-md text-headline-md">Frameworks</h3>
          </div>
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="font-label-md text-code-sm text-primary-container uppercase tracking-tighter">Frontend</p>
              <div className="flex flex-wrap gap-2">
                {['React.js', 'Next.js', 'Tailwind CSS'].map((item) => (
                  <span key={item} className="font-label-md text-label-md px-3 py-1.5 bg-primary-container/5 border border-outline-variant/20 rounded text-on-surface-variant">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <p className="font-label-md text-code-sm text-primary-container uppercase tracking-tighter">Backend</p>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'Express', 'FastAPI'].map((item) => (
                  <span key={item} className="font-label-md text-label-md px-3 py-1.5 bg-primary-container/5 border border-outline-variant/20 rounded text-on-surface-variant">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <p className="font-label-md text-code-sm text-primary-container uppercase tracking-tighter">Mobile</p>
              <div className="flex flex-wrap gap-2">
                <span className="font-label-md text-label-md px-3 py-1.5 bg-primary-container/5 border border-outline-variant/20 rounded text-on-surface-variant">React Native</span>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-panel p-8 rounded-xl space-y-6 crimson-glow">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary-container">database</span>
            <h3 className="font-headline-md text-headline-md">Databases</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {['MongoDB', 'PostgreSQL', 'Redis'].map((item) => (
              <span key={item} className="font-label-md text-label-md px-3 py-1.5 bg-primary-container/5 border border-outline-variant/20 rounded text-on-surface-variant">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="glass-panel p-8 rounded-xl space-y-6 crimson-glow">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary-container">construction</span>
            <h3 className="font-headline-md text-headline-md">Tools</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {['Docker', 'Git/GitHub', 'Postman'].map((item) => (
              <span key={item} className="font-label-md text-label-md px-3 py-1.5 bg-primary-container/5 border border-outline-variant/20 rounded text-on-surface-variant">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
