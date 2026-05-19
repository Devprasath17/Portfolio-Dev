export default function ProjectCard({ project }) {
  return (
    <div className="glass-panel rounded-xl overflow-hidden crimson-glow group flex flex-col">
      {project.image ? (
        <div className="aspect-video w-full overflow-hidden bg-surface-container-highest">
          <img
            alt={project.title}
            src={project.image}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60"
          />
        </div>
      ) : (
        <div className="aspect-square w-full bg-surface-container-high p-8 flex items-center justify-center relative">
          <span className="material-symbols-outlined text-[100px] text-primary-container/20 group-hover:text-primary-container transition-all">
            {project.icon}
          </span>
        </div>
      )}

      <div className="p-8 space-y-6 flex-1 flex flex-col">
        <div className="space-y-3">
          <h3 className="font-headline-md text-headline-md text-primary">{project.title}</h3>
          <p className="text-primary-container font-label-md text-code-sm uppercase tracking-tighter">Stack: {project.stack}</p>
          <ul className="font-body-md text-body-md text-on-surface-variant leading-relaxed list-disc list-inside space-y-1">
            {project.description.map((item) => (
              <li key={item} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </ul>
        </div>
        <div className="flex gap-4 mt-auto">
          <a className="flex items-center gap-2 text-primary font-label-md hover:underline" href={project.liveUrl}>
            <span className="material-symbols-outlined text-[18px]">link</span> Live Demo
          </a>
          <a className="flex items-center gap-2 text-on-surface-variant font-label-md hover:text-primary" href={project.sourceUrl}>
            <span className="material-symbols-outlined text-[18px]">code</span> GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
