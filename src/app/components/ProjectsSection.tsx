import { PROJECTS } from "@/app/components/data/projects";
import { ProjectCard } from "./ProjectCard";

export default function ProjectsSection() {
  const processedProjects = PROJECTS.map((project) => {
    const isAgroOleoUI = project.title === "Agro Óleo - UI";
    const isAgroOleoAPI = project.title === "Agro Óleo - API & Infra";
    const isFrequencia = project.title === "Frequência Escolar";
    const isTransporte = project.title === "Transporte Escolar";

    return {
      ...project,
      isConnected: isAgroOleoUI || isAgroOleoAPI || isFrequencia || isTransporte,
      connectionPosition: isAgroOleoUI
        ? ("first" as const)
        : isAgroOleoAPI
        ? ("last" as const)
        : isFrequencia
        ? ("first" as const)
        : isTransporte
        ? ("last" as const)
        : undefined,
    };
  });

  // Group projects: put Agro Óleo together
  const agroOleoProjects = processedProjects.filter(
    (p) => p.title.includes("Agro Óleo")
  );
  const schoolProjects = processedProjects.filter((p) =>
    p.title.includes("Frequência") || p.title.includes("Transporte")
  );
  const otherProjects = processedProjects.filter(
    (p) =>
      !p.title.includes("Agro Óleo") &&
      !p.title.includes("Frequência") &&
      !p.title.includes("Transporte")
  );

  return (
    <section className="relative" id="projects">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-64 h-64 rounded-full bg-primary/5 blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 rounded-full bg-accent/5 blur-3xl animate-pulse-slow" />
      </div>

      <div className="container relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Projetos
          </h2>
        </div>

        <div className="mb-12">
          <div className="relative">
            <div className="h-px bg-linear-to-r from-transparent via-[hsl(var(--project-agrooleo)/0.5)] to-transparent" />
            <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-0">
              <span className="text-sm font-mono text-[hsl(var(--project-agrooleo))] px-3 py-1 bg-background rounded-full border border-[hsl(var(--project-agrooleo)/0.3)] bg-black">
                Sistema Completo
              </span>
            </div>
          </div>

          <div className="relative px-4 md:px-6 py-6">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-[hsl(var(--project-agrooleo)/0.5)] to-transparent" />
            <div className="absolute right-0 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-[hsl(var(--project-agrooleo)/0.5)] to-transparent" />
            
            <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-[hsl(var(--project-agrooleo)/0.5)] rounded-tl" />
            <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-[hsl(var(--project-agrooleo)/0.5)] rounded-tr" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-[hsl(var(--project-agrooleo)/0.5)] rounded-bl" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-[hsl(var(--project-agrooleo)/0.5)] rounded-br" />

            <div className="grid md:grid-cols-2 gap-12">
              {agroOleoProjects.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              ))}
            </div>
          </div>

          <div className="h-px bg-linear-to-r from-transparent via-[hsl(var(--project-agrooleo)/0.5)] to-transparent" />
        </div>

        {schoolProjects.length > 0 && (
          <div className="mb-8">
            <div className="relative">
              <div className="h-px bg-linear-to-r from-transparent via-[hsl(var(--project-school)/0.5)] to-transparent" />
            </div>

            <div className="relative px-4 md:px-6 py-6">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-[hsl(var(--project-school)/0.5)] to-transparent" />
              <div className="absolute right-0 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-[hsl(var(--project-school)/0.5)] to-transparent" />
              
              <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-[hsl(var(--project-school)/0.5)] rounded-tl" />
              <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-[hsl(var(--project-school)/0.5)] rounded-tr" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-[hsl(var(--project-school)/0.5)] rounded-bl" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-[hsl(var(--project-school)/0.5)] rounded-br" />

              <div className="grid md:grid-cols-2 gap-12">
                {schoolProjects.map((project, index) => (
                  <ProjectCard key={project.title} project={project} index={index + agroOleoProjects.length} />
                ))}
              </div>
            </div>

            <div className="h-px bg-linear-to-r from-transparent via-[hsl(var(--project-school)/0.5)] to-transparent" />
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index + agroOleoProjects.length + schoolProjects.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}