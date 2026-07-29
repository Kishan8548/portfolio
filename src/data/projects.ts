export interface Project {
  title: string;
  description: string;
  tech: string[];
  gradient: string;
  icon: string;
  github?: string;
  live?: string;
  extra?: { label: string; url: string };
}

export const projects: Project[] = [
  {
    title: "Nudge AI",
    description:
      "A multi-agent system that lives in your browser, transcribes meetings on the fly, extracts decisions, and autonomously sends reminders until every action item is marked complete.",
    tech: ["Agentic AI", "Next.js", "Chrome Extension"],
    gradient: "from-red-500/20 to-rose-600/20",
    icon: "Brain",
    github: "https://github.com/Kishan8548/Nudge",
    live: "https://nudge-three-coral.vercel.app/",
  },
  {
    title: "CF Companion",
    description:
      "A sleek, brutalist Android application designed for Codeforces users. Provides real-time access to user profiles, contest history, and friends, with dynamic UI rank theming.",
    tech: ["Kotlin", "MVVM", "Retrofit", "Firebase", "Android"],
    gradient: "from-rose-500/20 to-pink-600/20",
    icon: "Terminal",
    github: "https://github.com/Kishan8548/CodeForces",
  },
  {
    title: "Axiom",
    description:
      "A specialized Android application acting as the mobile interface for an Agentic Backend. A fully integrated Agentic Workflow Manager to effectively oversee and interact with autonomous AI agents.",
    tech: ["Kotlin", "MVVM", "Material Components", "Android"],
    gradient: "from-orange-500/20 to-red-600/20",
    icon: "Code",
    github: "https://github.com/Kishan8548/Axiom",
  },
  {
    title: "DropZone",
    description:
      "A real-time image sharing Android application leveraging Cloudinary and Firebase Firestore. Includes dynamic image fetching and secure authentication.",
    tech: ["Kotlin", "Firebase", "Cloudinary", "Android Studio"],
    gradient: "from-amber-500/20 to-orange-600/20",
    icon: "Globe",
    github: "https://github.com/Kishan8548/DropZone",
  },
  {
    title: "SevakAI",
    description:
      "AI-powered disaster response platform with multimodal emergency triage, volunteer matching engine, and cross-NGO escalation — built for Google Solution Challenge 2026.",
    tech: ["Flutter", "Firebase", "Gemini API", "Cloudinary"],
    gradient: "from-red-600/20 to-red-900/20",
    icon: "Shield",
    github: "https://github.com/Kishan8548/Sevak-AI",
    live: "https://sevak-ai-3d2dc.firebaseapp.com",
  },
  {
    title: "WanderLens",
    description:
      "A modern, AI-powered Android travel journal that transforms your photos into rich, narrated stories using Google Gemini AI, Cloudinary, and Firebase.",
    tech: ["Kotlin", "MVVM", "Gemini API", "Firebase", "Cloudinary"],
    gradient: "from-yellow-500/20 to-orange-600/20",
    icon: "Image",
    github: "https://github.com/Kishan8548/Wanderlens",
  },
];
