"use client";

import { useScroll, useSpring, motion } from "framer-motion";

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();

  // useSpring smooths the raw scroll motion value — exactly as described in motion.dev docs
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX, originX: 0 }}
      className="fixed top-0 left-0 right-0 z-[9999] h-[3px] bg-gradient-to-r from-primary via-accent to-primary"
    />
  );
}
