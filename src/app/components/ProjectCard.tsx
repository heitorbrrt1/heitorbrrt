import { ExternalLink, Github, Layers } from "lucide-react";
import { Badge } from "@/app/components/badge";
import { cn } from "@/lib/utils";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  gitUrl?: string;
  webUrl?: string;
  isConnected?: boolean;
  connectionPosition?: "first" | "last";
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

type ProjectTheme = {
  glow: string;
  border: string;
  badge: string;
  techBg: string;
  techHover: string;
};

type ProjectThemeExtended = ProjectTheme & {
  titleHover: string;
};

function getProjectTheme(title: string): ProjectThemeExtended {
  if (title.includes("Agro Óleo")) {
    return {
      glow: "shadow-[0_0_30px_hsl(var(--project-agrooleo)/0.3)]",
      border: "hover:border-[hsl(var(--project-agrooleo)/0.6)] ring-1 ring-[hsl(var(--project-agrooleo)/0.2)]",
      badge: "bg-[hsl(var(--project-agrooleo)/0.15)] border-[hsl(var(--project-agrooleo)/0.4)] text-[hsl(var(--project-agrooleo))]",
      techBg: "bg-[hsl(var(--project-agrooleo)/0.1)]",
      techHover: "group-hover:bg-[hsl(var(--project-agrooleo)/0.2)] group-hover:text-[hsl(var(--project-agrooleo))]",
      titleHover: "group-hover:text-[hsl(var(--project-agrooleo))]",
    };
  }
  if (title.includes("Jul.ia")) {
    return {
      glow: "shadow-[0_0_30px_hsl(var(--project-julia-secondary)/0.3)]",
      border: "hover:border-[hsl(var(--project-julia-secondary)/0.6)] ring-1 ring-[hsl(var(--project-julia-primary)/0.3)]",
      badge: "bg-[hsl(var(--project-julia-primary)/0.3)] border-[hsl(var(--project-julia-secondary)/0.5)] text-[hsl(var(--project-julia-secondary))]",
      techBg: "bg-[hsl(var(--project-julia-primary)/0.3)]",
      techHover: "group-hover:bg-[hsl(var(--project-julia-primary)/0.5)] group-hover:text-[hsl(var(--project-julia-secondary))]",
      titleHover: "group-hover:text-[hsl(var(--project-julia-secondary))]",
    };
  }
  if (title.includes("FeelGood")) {
    return {
      glow: "shadow-[0_0_30px_hsl(var(--project-feelgood-primary)/0.3)]",
      border: "hover:border-[hsl(var(--project-feelgood-primary)/0.6)] ring-1 ring-[hsl(var(--project-feelgood-secondary)/0.3)]",
      badge: "bg-[hsl(var(--project-feelgood-secondary)/0.2)] border-[hsl(var(--project-feelgood-primary)/0.4)] text-[hsl(var(--project-feelgood-primary))]",
      techBg: "bg-[hsl(var(--project-feelgood-secondary)/0.15)]",
      techHover: "group-hover:bg-[hsl(var(--project-feelgood-secondary)/0.3)] group-hover:text-[hsl(var(--project-feelgood-primary))]",
      titleHover: "group-hover:text-[hsl(var(--project-feelgood-primary))]",
    };
  }
  if (title.includes("COpEsp")) {
    return {
      glow: "shadow-[0_0_30px_hsl(var(--project-copesp)/0.4)]",
      border: "hover:border-[hsl(var(--project-copesp))] ring-1 ring-[hsl(var(--project-copesp)/0.4)]",
      badge: "bg-[hsl(var(--project-copesp)/0.4)] border-[hsl(var(--project-copesp))] text-purple-300",
      techBg: "bg-[hsl(var(--project-copesp)/0.3)]",
      techHover: "group-hover:bg-[hsl(var(--project-copesp)/0.5)] group-hover:text-purple-600",
      titleHover: "group-hover:text-[hsl(var(--project-copesp))]",
    };
  }
  // Default theme
  return {
    glow: "",
    border: "hover:border-glass-border/60",
    badge: "",
    techBg: "bg-secondary/80",
    techHover: "group-hover:bg-secondary group-hover:text-foreground",
    titleHover: "group-hover:text-primary",
  };
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const isAgroOleo = project.title.includes("Agro Óleo");
  const isFirst = project.connectionPosition === "first";
  const isLast = project.connectionPosition === "last";
  const theme = getProjectTheme(project.title);

  return (
    <div
      className={cn(
        "group relative",
        isFirst && "connected-line-right",
        isLast && "connected-line-left"
      )}
      style={{ animationDelay: `${index * 100}ms` }}
    >

      {/* Card */}
      <div
        className={cn(
          "relative h-full rounded-xl p-6 transition-all duration-300",
          "bg-glass/60 backdrop-blur-xl border border-glass-border/30",
          "hover:bg-glass/80",
          "group-hover:-translate-y-1",
          theme.border,
          theme.glow && `hover:${theme.glow}`
        )}
      >
        {/* Connected badge for Agro Óleo */}
        {isAgroOleo && (
          <div className="absolute -top-3 left-6">
            <Badge
              variant="outline"
              className={cn("text-xs font-mono bg-black!", theme.badge)}
            >
              <Layers className="w-3 h-3 mr-1" />
              Full-Stack System
            </Badge>
          </div>
        )}

        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <h3 className={cn(
            "text-lg font-semibold text-foreground transition-colors",
            theme.titleHover
          )}>
            {project.title}
          </h3>
          <div className="flex gap-2 shrink-0">
            {project.gitUrl && (
              <a
                href={project.gitUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                aria-label="View GitHub repository"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {project.webUrl && (
              <a
                href={project.webUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                aria-label="View live project"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className={cn(
                "px-2.5 py-1 text-xs font-mono rounded-md transition-colors",
                "text-muted-foreground",
                theme.techBg,
                theme.techHover
              )}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
