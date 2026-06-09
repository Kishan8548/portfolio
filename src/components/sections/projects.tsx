"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Shield,
  BookOpen,
  Package,
  ExternalLink,
} from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { TechBadge } from "@/components/ui/tech-badge";
import { buttonVariants } from "@/components/ui/button";
import { StaggerChildren, staggerItem } from "@/components/motion/stagger-children";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  Brain,
  Shield,
  BookOpen,
  Package,
};

export function Projects() {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="// projects"
          title="What I've Built"
          description="Some of the things I've built recently."
        />

        <StaggerChildren className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => {
            const Icon = iconMap[project.icon] ?? Brain;
            return (
              <motion.div key={project.title} variants={staggerItem}>
                <Card className="group relative h-full overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:neon-glow">
                  {/* Gradient accent */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                  />

                  <CardContent className="relative p-6">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/50 bg-background/50">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-semibold text-lg">{project.title}</h3>
                    </div>

                    <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>

                    <div className="mb-4 flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <TechBadge key={t}>{t}</TechBadge>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-2 pt-2 border-t border-border/30">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cn(
                            buttonVariants({ variant: "ghost", size: "sm" }),
                            "h-8 gap-1.5 text-xs text-muted-foreground hover:text-foreground"
                          )}
                        >
                          <GithubIcon className="h-3.5 w-3.5" />
                          Code
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cn(
                            buttonVariants({ variant: "ghost", size: "sm" }),
                            "h-8 gap-1.5 text-xs text-muted-foreground hover:text-foreground"
                          )}
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                          Live Demo
                        </a>
                      )}
                      {project.extra && (
                        <a
                          href={project.extra.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cn(
                            buttonVariants({ variant: "ghost", size: "sm" }),
                            "h-8 gap-1.5 text-xs text-muted-foreground hover:text-foreground"
                          )}
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                          {project.extra.label}
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </StaggerChildren>
      </div>
    </section>
  );
}
