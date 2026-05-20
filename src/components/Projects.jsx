import ProjectCard from './ProjectCard';
import { SectionReveal } from './MotionWrappers';
import projects from '../data/projects';

export default function Projects() {
  return (
    <SectionReveal className="space-y-12" id="projects">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="flex items-center gap-4">
          <span className="h-[1px] w-12 bg-primary-container" />
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase tracking-widest text-primary">Projects</h2>
        </div>
        <p className="font-label-md text-label-md text-on-surface-variant max-w-xs text-center md:text-right">
          Tactical digital solutions engineered for scale and speed.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </SectionReveal>
  );
}
