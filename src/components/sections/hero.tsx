"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useState, useRef } from "react";
import { InteractiveHeroBackground } from "@/components/ui/interactive-hero-background";

const roles = [
  "Android Developer",
  "Competitive Programmer",
  "Open Source Contributor",
  "AI Enthusiast",
];

function TypewriterRole() {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];
    if (!deleting && displayed.length < current.length) {
      const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
      return () => clearTimeout(t);
    } else if (!deleting && displayed.length === current.length) {
      const t = setTimeout(() => setDeleting(true), 1800);
      return () => clearTimeout(t);
    } else if (deleting && displayed.length > 0) {
      const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
      return () => clearTimeout(t);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % roles.length);
    }
  }, [displayed, deleting, index]);

  return (
    <span className="gradient-text font-mono">
      {displayed}
      <span className="animate-pulse ml-0.5">|</span>
    </span>
  );
}

export function Hero() {
  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-16"
    >
      {/* High-tech interactive canvas constellation + cyber grid */}
      <InteractiveHeroBackground />

      <div
        className="relative z-10 mx-auto max-w-4xl text-center pointer-events-auto"
      >
        {/* Status badge — spring bounce in */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-border/50 bg-secondary/50 px-4 py-1.5 text-sm backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
          </span>
          B.Tech CSE &apos;28 · IIIT Lucknow
        </motion.div>

        {/* Name — spring slide up */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 18, delay: 0.1 }}
          className="mb-4 text-5xl font-bold tracking-tight sm:text-7xl"
        >
          Kishan{" "}
          <span className="gradient-text">Garhwal</span>
        </motion.h1>

        {/* Typewriter role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 18, delay: 0.2 }}
          className="mb-4 min-h-[2rem] text-lg"
        >
          <TypewriterRole />
        </motion.div>

        {/* Handle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 18, delay: 0.28 }}
          className="mb-6 font-mono text-sm text-muted-foreground/60"
        >
          @Kishan8548
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 18, delay: 0.35 }}
          className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground sm:text-xl"
        >
          CS undergrad at IIIT Lucknow. Mostly building Android applications, doing competitive programming, and trying out new open-source AI tools.
        </motion.p>

        {/* CTAs — spring physics on hover */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 18, delay: 0.42 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <motion.a
            href="#projects"
            className={cn(buttonVariants({ size: "lg" }), "neon-glow")}
            whileHover={{ scale: 1.06, y: -3 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            View Projects
          </motion.a>
          <motion.a
            href="https://drive.google.com/file/d/1LeRMGoQE1t-gg5P5yuZFFxQF-dn2Lxwt/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: "outline", size: "lg" })}
            whileHover={{ scale: 1.06, y: -3 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Download className="mr-2 h-4 w-4" />
            Resume
          </motion.a>
          <div className="flex items-center gap-2">
            <motion.a
              href="https://github.com/Kishan8548"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className={buttonVariants({ variant: "ghost", size: "icon" })}
              whileHover={{ scale: 1.2, rotate: 8 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <GithubIcon className="h-5 w-5" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/kishan-garhwal-122298331/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={buttonVariants({ variant: "ghost", size: "icon" })}
              whileHover={{ scale: 1.2, rotate: -8 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <LinkedinIcon className="h-5 w-5" />
            </motion.a>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-20"
        >
          <a
            href="#about"
            className="inline-flex flex-col items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            <span className="font-mono">scroll</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown className="h-4 w-4" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
