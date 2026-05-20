import { SectionReveal } from './MotionWrappers';

export default function Education() {
  return (
    <SectionReveal className="space-y-12" id="education">
      <div className="flex items-center gap-4">
        <span className="h-[1px] w-12 bg-primary-container" />
        <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase tracking-widest text-primary">Education</h2>
      </div>
      <div className="relative pl-8">
        <div className="absolute left-0 top-4 bottom-4 w-px timeline-line opacity-20" />
        <div className="relative">
          <div className="absolute -left-[37px] top-2 h-4 w-4 rounded-full bg-primary ring-4 ring-background shadow-[0_0_15px_#ff5545]" />
          <div className="glass-panel p-8 rounded-xl crimson-glow border border-outline-variant/10">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-headline-md text-headline-md text-primary text-xl">B.E. Computer Science Engineering</h3>
                <p className="font-label-md text-label-md text-on-surface-variant">Prathyusha Engineering College</p>
              </div>
              <span className="font-code-sm text-code-sm px-3 py-1 bg-primary/5 border border-primary/20 rounded-full text-primary whitespace-nowrap">
                2023 – 2027
              </span>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <div className="px-4 py-2 bg-primary-container/10 border border-primary-container/30 rounded-lg">
                <span className="font-label-md text-label-md text-primary uppercase">CGPA: 8.1</span>
              </div>
              <span className="material-symbols-outlined text-primary">school</span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Specializing in software architecture and algorithms. Actively engaged in technical research and development of scalable web solutions.
            </p>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
