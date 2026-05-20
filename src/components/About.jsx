import { SectionReveal } from './MotionWrappers';

export default function About() {
  return (
    <SectionReveal className="space-y-12" id="about">
      <div className="flex items-center gap-4">
        <span className="h-[1px] w-12 bg-primary-container" />
        <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase tracking-widest text-primary">About</h2>
      </div>
      <div className="glass-panel p-8 rounded-2xl border border-outline-variant/10 space-y-6">
        <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
          Passionate developer with a strong foundation in Computer Science Engineering. I bridge the gap between complex backend logic and intuitive frontend experiences. My approach blends technical precision with a cinematic design sensibility, ensuring every application is as performant as it is visually striking.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <div className="flex items-center gap-2 text-primary font-label-md">
            <span className="material-symbols-outlined text-[18px]">location_on</span>
            <span>Chennai, India</span>
          </div>
          <div className="flex items-center gap-2 text-primary font-label-md">
            <span className="material-symbols-outlined text-[18px]">verified</span>
            <span>B.E. CSE Student</span>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
