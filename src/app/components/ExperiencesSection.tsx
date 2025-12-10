import { Briefcase } from "lucide-react";
import { experiences } from "@/app/components/data/experiences";
import { cn } from "@/lib/utils";
import ExperienceCard from "./ExperienceCard";

export default function ExperienceSection() {
  return (
    <section id="experiencia" className="bg-muted/30">
      <div className="container">
        <div className="flex items-center gap-3 mb-12">
          <div className="p-2 rounded-lg bg-[#12d393]/10 text-[#12d393]">
            <Briefcase className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Experiência Profissional
            </h2>
            <p className="text-muted-foreground font-mono text-sm mt-1">
              {"// Minha jornada no desenvolvimento"}
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-[#12d393]/50 via-[#12d393]/20 to-transparent hidden md:block" />

          <div className="grid gap-8 md:gap-12">
            {experiences.map((experience, index) => (
              <div 
                key={experience.id}
                className={cn(
                  "md:w-[calc(50%-2rem)]",
                  index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                )}
              >
                <div className={cn(
                  "hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-[#12d393] bg-black",
                  "items-center justify-center"
                )}>
                  <div className="w-2 h-2 rounded-full bg-[#12d393]" />
                </div>
                
                <ExperienceCard experience={experience} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}