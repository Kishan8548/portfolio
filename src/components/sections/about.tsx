"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/motion/fade-in";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  { label: "GPA", value: "9.15" },
  { label: "Problems Solved", value: "750+" },
  { label: "Projects Shipped", value: "4" },
  { label: "PyPI Packages", value: "1" },
];

export function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="// about"
          title="Building AI That Actually Works"
          description="A quick overview of who I am and what I do."
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image + Terminal */}
          <FadeIn direction="left">
            <div className="space-y-6">
              <div className="relative overflow-hidden rounded-2xl border border-border/50 neon-glow bg-gradient-to-b from-primary/20 via-background to-background flex items-end justify-center">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,var(--color-primary)_0,transparent_70%)] opacity-20" />
                <Image
                  src="/images/profile-pic-nishchal.png"
                  alt="Nishchal Chandel"
                  width={600}
                  height={600}
                  className="relative z-10 w-full aspect-square object-cover scale-110 translate-y-8 [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)] -webkit-[mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)]"
                  priority
                />
              </div>

              {/* Terminal block */}
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-4">
                  <div className="mb-3 flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-500/70" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500/70" />
                    <div className="h-3 w-3 rounded-full bg-green-500/70" />
                    <span className="ml-2 font-mono text-xs text-muted-foreground">
                      terminal
                    </span>
                  </div>
                  <pre className="font-mono text-xs leading-relaxed text-muted-foreground">
                    <code>
                      {`$ whoami
> nishchal_chandel

$ cat skills.txt
> python, langchain, pytorch,
> next.js, mongodb, c++

$ echo $STATUS
> student @ iiit lucknow`}
                    </code>
                  </pre>
                </CardContent>
              </Card>
            </div>
          </FadeIn>

          {/* Bio + Stats */}
          <FadeIn direction="right" delay={0.2}>
            <div className="flex flex-col justify-center space-y-8">
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Hey, I&apos;m Nishchal, a Computer Science student at IIIT
                  Lucknow. Most of my time goes into exploring machine learning
                  and building software—especially projects involving LLMs and
                  multi-agent systems.
                </p>
                <p>
                  I enjoy participating in hackathons and competitive programming
                  contests. I&apos;m currently a Specialist on Codeforces and
                  spend a lot of time practicing DSA. Recently, I&apos;ve also
                  been getting more involved in the open-source community.
                </p>
                <p>
                  At college, I&apos;m part of the ML wing for AXIOS (our
                  technical society), where we host sessions to help juniors
                  get started with machine learning. Always happy to chat about
                  AI or open-source
                </p>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                  >
                    <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                      <CardContent className="p-4 text-center">
                        <p className="text-2xl font-bold gradient-text">
                          {stat.value}
                        </p>
                        <p className="mt-1 text-xs font-mono text-muted-foreground">
                          {stat.label}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
