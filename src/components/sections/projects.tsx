"use client";

import { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import {
  Brain,
  Shield,
  BookOpen,
  Package,
  ExternalLink,
  Code,
  Globe,
  Image as ImageIcon,
  Terminal,
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
  Code,
  Globe,
  Image: ImageIcon,
  Terminal,
};

// Per-card tilt component using useMotionValue — from motion.dev motion values docs
function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // useTransform maps raw mouse position → rotation degrees
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), {
    stiffness: 300,
    damping: 30,
  });
  // Subtle shine layer moves with mouse
  const shineX = useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"]);
  const shineY = useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    // Normalise to -0.5 → 0.5
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    // Animate back to flat using the spring — set() drives the motion value
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className={cn("relative", className)}
    >
      {/* Shine overlay — useTransform-driven radial gradient position */}
      <motion.div
        style={{
          background: useTransform(
            [shineX, shineY],
            ([x, y]) =>
              `radial-gradient(circle at ${x} ${y}, oklch(1 0 0 / 6%) 0%, transparent 60%)`
          ),
        }}
        className="pointer-events-none absolute inset-0 z-10 rounded-[inherit]"
      />
      {children}
    </motion.div>
  );
}

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
                <TiltCard className="h-full">
                  <Card className="group relative h-full overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-colors duration-300 hover:border-primary/30 hover:neon-glow">
                    {/* Gradient accent */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                    />

                    <CardContent className="relative p-6">
                      <div className="mb-4 flex items-center gap-3">
                        <motion.div
                          whileHover={{ rotate: 10, scale: 1.15 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/50 bg-background/50"
                        >
                          <Icon className="h-5 w-5 text-primary" />
                        </motion.div>
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
                </TiltCard>
              </motion.div>
            );
          })}
        </StaggerChildren>
      </div>
    </section>
  );
}
