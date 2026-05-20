import { SectionReveal } from './MotionWrappers';

export default function Experience() {
  return (
    <SectionReveal className="space-y-12" id="experience">
      <div className="flex items-center gap-4">
        <span className="h-[1px] w-12 bg-primary-container" />
        <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase tracking-widest text-primary">Experience</h2>
      </div>
      <div className="relative pl-8 space-y-12">
        <div className="absolute left-0 top-4 bottom-4 w-px timeline-line opacity-20" />
        <div className="relative">
          <div className="absolute -left-[37px] top-2 h-4 w-4 rounded-full bg-primary ring-4 ring-background shadow-[0_0_15px_#ff5545]" />
          <div className="glass-panel p-8 rounded-xl crimson-glow border border-outline-variant/10">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-headline-md text-headline-md text-primary">Software Intern</h3>
                <p className="font-label-md text-label-md text-on-surface-variant">HVF Avadi (Defence)</p>
              </div>
              <span className="font-code-sm text-code-sm px-3 py-1 bg-primary/5 border border-primary/20 rounded-full text-primary whitespace-nowrap">
                2024 - Present
              </span>
            </div>
            <p className="font-body-md text-body-md text-on-surface mb-6 leading-relaxed">
              Developing high-security applications within a defence environment. Working with PHP and MySQL to architect robust data retrieval systems and maintain internal software infrastructure.
            </p>
            <div className="flex flex-wrap gap-2">
              {['PHP', 'MySQL'].map((tech) => (
                <span key={tech} className="font-label-md text-label-md bg-surface-container-high px-3 py-1 rounded-lg border border-outline-variant/10 text-on-surface-variant">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
