"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { TechBadge } from "@/components/ui/tech-badge";
import { FadeIn } from "@/components/motion/fade-in";
import { education } from "@/data/education";

export function Education() {
  return (
    <section id="education" className="py-32 px-6">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          label="// education"
          title="Where I Study"
          description="My academic background."
        />

        <FadeIn>
          <div className="space-y-6">
            {education.map((edu, i) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden">
                  {/* Gradient top accent */}
                  <div className="h-1 w-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500" />

                  <CardContent className="p-6 sm:p-8">
                    <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                      {/* Left: Info */}
                      <div className="flex-1 space-y-3">
                        <div className="flex items-center gap-2">
                          <GraduationCap className="h-5 w-5 text-primary" />
                          <span className="font-mono text-xs text-primary">
                            {edu.period}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold">
                          {edu.institution}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {edu.degree}
                        </p>
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <MapPin className="h-3.5 w-3.5" />
                          {edu.location}
                        </div>
                      </div>

                      {/* Right: GPA */}
                      <div className="flex-shrink-0">
                        <Card className="border-border/50 bg-background/50">
                          <CardContent className="px-6 py-4 text-center">
                            <p className="text-3xl font-bold gradient-text">
                              {edu.gpa}
                            </p>
                            <p className="mt-1 text-xs font-mono text-muted-foreground">
                              GPA
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>

                    {/* Coursework */}
                    <div className="mt-6">
                      <p className="mb-3 text-xs font-mono text-muted-foreground uppercase tracking-wider">
                        Relevant Coursework
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course) => (
                          <TechBadge key={course}>{course}</TechBadge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
