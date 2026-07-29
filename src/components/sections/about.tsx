"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/motion/fade-in";
import { Card, CardContent } from "@/components/ui/card";

// Stat definitions — numeric value + optional suffix
const stats = [
  { label: "GPA", numeric: 8.43, suffix: "", display: "8.43", decimals: 2 },
  { label: "Problems Solved", numeric: 1000, suffix: "+", display: "1000+", decimals: 0 },
  { label: "Projects Shipped", numeric: 6, suffix: "", display: "6", decimals: 0 },
  { label: "Tech Stacks", numeric: 15, suffix: "+", display: "15+", decimals: 0 },
];

// Animated counter using useMotionValue + animate() from motion.dev docs
function AnimatedCounter({
  target,
  suffix,
  decimals,
}: {
  target: number;
  suffix: string;
  decimals: number;
}) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!isInView) return;
    // animate() returns a playback controller — drives value from 0 to target
    const controls = animate(0, target, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1], // expo out — fast start, smooth settle
      onUpdate: (v) => setValue(parseFloat(v.toFixed(decimals))),
    });
    return () => controls.stop();
  }, [isInView, target, decimals]);

  return (
    <span ref={ref}>
      {decimals > 0 ? value.toFixed(decimals) : Math.floor(value)}
      {suffix}
    </span>
  );
}

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
              <div className="relative overflow-hidden rounded-2xl border border-border/50 neon-glow bg-[#0a0606] h-[480px]">
                {/* Red glow at top */}
                <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(ellipse_at_top,hsl(0_80%_30%)_0%,transparent_60%)] opacity-40" />
                {/* Photo — fill+cover crops the white background edges */}
                <Image
                  src="/images/profile-pic.png"
                  alt="Kishan Garhwal"
                  fill
                  className="object-cover object-top scale-105"
                  priority
                />
                {/* Gradient overlay fading into dark at bottom */}
                <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-background via-background/30 to-transparent" />
              </div>
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
> kishan_garhwal

$ cat skills.txt
> kotlin, android, c++,
> next.js, firebase, ai

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
                  Hey, I&apos;m Kishan, a Computer Science student at IIIT
                  Lucknow. Most of my time goes into exploring mobile development
                  and building software—especially projects involving Android, AI, and
                  Full-Stack web development.
                </p>
                <p>
                  I enjoy participating in competitive programming
                  contests. I&apos;m currently a Knight on LeetCode and Pupil on Codeforces, and
                  spend a lot of time practicing DSA, having solved over 1000 algorithmic problems.
                </p>
                <p>
                  At college, I&apos;m part of the App wing for AXIOS (our
                  technical society), where we help juniors
                  get started with Android development. Always happy to chat about
                  tech, open-source or competitive programming!
                </p>
              </div>

              {/* Stats grid — animated counters */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.85, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 20,
                      delay: i * 0.1,
                    }}
                    whileHover={{ scale: 1.04, y: -2 }}
                  >
                    <Card className="border-border/50 bg-card/50 backdrop-blur-sm cursor-default">
                      <CardContent className="p-4 text-center">
                        <p className="text-2xl font-bold gradient-text">
                          <AnimatedCounter
                            target={stat.numeric}
                            suffix={stat.suffix}
                            decimals={stat.decimals}
                          />
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
