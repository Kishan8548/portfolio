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
    title: "EduVerse",
    description:
      "Multi-agent tutoring system built on Gemma 4 with Socratic pedagogy, adversarial RAG, and self-improving DPO fine-tuning. Built for the Kaggle Gemma 4 Good Hackathon.",
    tech: ["Python", "LangGraph", "Gemma 4", "Next.js", "MongoDB"],
    gradient: "from-cyan-500/20 to-blue-600/20",
    icon: "Brain",
    github: "https://github.com/ayanokojix21/EduVerse",
    live: "https://edu-verse-pink.vercel.app",
  },
  {
    title: "SevakAI",
    description:
      "AI-powered disaster response platform with multimodal emergency triage, volunteer matching engine, and cross-NGO escalation — built for Google Solution Challenge 2026.",
    tech: ["Flutter", "Firebase", "Gemini API", "Cloudinary", "OpenStreetMap"],
    gradient: "from-purple-500/20 to-pink-600/20",
    icon: "Shield",
    github: "https://github.com/ayanokojix21/Sevak-AI",
    live: "https://sevak-ai-3d2dc.firebaseapp.com",
  },
  {
    title: "langchain-google-classroom",
    description:
      "An open-source data loader published on PyPI. It allows you to easily ingest Google Classroom materials, including Drive attachments, into LangChain.",
    tech: ["Python", "LangChain", "Google APIs", "PyPI", "GitHub Actions"],
    gradient: "from-green-500/20 to-emerald-600/20",
    icon: "BookOpen",
    github: "https://github.com/ayanokojix21/langchain-google-classroom",
    extra: {
      label: "PyPI",
      url: "https://pypi.org/project/langchain-google-classroom/",
    },
  },
  {
    title: "SDKGen",
    description:
      "Agentic multi-agent system that reads any API docs page and generates a fully-typed, live-tested SDK — injected directly into VS Code. No OpenAPI spec required.",
    tech: ["Python", "LangGraph", "Gemini", "FastAPI", "Chrome Extension"],
    gradient: "from-orange-500/20 to-red-600/20",
    icon: "Package",
    github: "https://github.com/ayanokojix21/SDKGen",
  },
];
