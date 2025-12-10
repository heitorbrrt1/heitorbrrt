import { Code, Crown, Server, MapPin, Calendar } from "lucide-react";
import { type Experience } from "@/app/components/data/experiences";
import { cn } from "@/lib/utils";

const typeConfig = {
  dev: {
    icon: Code,
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-400/10',
    borderColor: 'border-emerald-400/30',
  },
  leadership: {
    icon: Crown,
    color: 'text-amber-400',
    bgColor: 'bg-amber-400/10',
    borderColor: 'border-amber-400/30',
  },
  devops: {
    icon: Server,
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-400/10',
    borderColor: 'border-cyan-400/30',
  },
};

export default function ExperienceCard({ experience, index }: { experience: Experience; index: number }) {
  const config = typeConfig[experience.type];
  const Icon = config.icon;

  return (
    <div 
      className={cn(
        "group relative p-6 rounded-xl border transition-all duration-300",
        "bg-card/50 backdrop-blur-sm",
        config.borderColor,
        "hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
      )}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Type indicator */}
      <div className={cn(
        "absolute -top-3 left-6 px-3 py-1 rounded-full text-xs font-mono flex items-center gap-1.5",
        config.bgColor,
        config.color,
        "border",
        config.borderColor
      )}>
        <Icon className="w-3 h-3" />
        {experience.type === 'dev' && 'Desenvolvimento'}
        {experience.type === 'leadership' && 'Liderança'}
        {experience.type === 'devops' && 'Full Stack & DevOps'}
      </div>

      {/* Header */}
      <div className="mt-2 mb-4">
        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
          {experience.role}
        </h3>
        <p className={cn("text-base font-medium", config.color)}>
          {experience.company}
        </p>
        <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5" />
            {experience.location}
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            {experience.period}
          </span>
        </div>
      </div>

      {/* Highlights */}
      <ul className="space-y-2 mb-4">
        {experience.highlights.map((highlight, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
            <span className={cn("mt-1.5 w-1.5 h-1.5 rounded-full shrink-0", config.bgColor, config.color.replace('text-', 'bg-'))} />
            {highlight}
          </li>
        ))}
      </ul>

      {/* Technologies */}
      {experience.technologies && (
        <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
          {experience.technologies.map((tech) => (
            <span 
              key={tech}
              className="px-2 py-1 text-xs font-mono bg-muted/50 text-muted-foreground rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}