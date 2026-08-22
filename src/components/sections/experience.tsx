"use client";

import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { TechBadge } from "@/components/ui/tech-badge";
import { achievements } from "@/data/experience";

export function Experience() {
  return (
    <section id="achievements" className="py-32 px-6">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          label="// achievements"
          title="What I've Accomplished"
          description="Hackathons, competitive programming, and extracurriculars."
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-accent/40 to-transparent md:left-1/2 md:-translate-x-px" />

          <div className="space-y-12">
            {achievements.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                className={`relative flex flex-col gap-4 pl-12 md:pl-0 ${
                  i % 2 === 0
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-[13px] top-6 z-10 flex h-3 w-3 items-center justify-center rounded-full border-2 border-primary bg-background md:left-1/2 md:-translate-x-1/2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                </div>

                {/* Card */}
                <div className="md:w-[calc(50%-2rem)]">
                  <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="mb-2 flex items-center gap-2">
                        <Trophy className="h-4 w-4 text-primary" />
                        <span className="font-mono text-xs text-primary">
                          {item.period}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="mb-3 text-sm text-muted-foreground">
                        {item.subtitle}
                      </p>
                      <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((t) => (
                          <TechBadge key={t}>{t}</TechBadge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
