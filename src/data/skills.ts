export interface Skill {
  name: string;
  level: number; // 0-100
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    icon: "Code",
    skills: [
      { name: "C++", level: 95 },
      { name: "Kotlin", level: 90 },
      { name: "Python", level: 85 },
      { name: "JavaScript / TypeScript", level: 85 },
      { name: "Java", level: 80 },
    ],
  },
  {
    category: "Android Development",
    icon: "Terminal",
    skills: [
      { name: "Android SDK", level: 95 },
      { name: "Jetpack Compose", level: 90 },
      { name: "MVVM Architecture", level: 90 },
      { name: "Firebase", level: 85 },
      { name: "XML", level: 85 },
    ],
  },
  {
    category: "Web & Backend",
    icon: "Globe",
    skills: [
      { name: "React / Next.js", level: 85 },
      { name: "Node.js / Express", level: 80 },
      { name: "MongoDB / MySQL", level: 80 },
      { name: "Supabase", level: 75 },
      { name: "REST APIs", level: 85 },
    ],
  },
  {
    category: "AI / Machine Learning",
    icon: "Brain",
    skills: [
      { name: "LangChain / LangGraph", level: 85 },
      { name: "TensorFlow", level: 80 },
      { name: "Google Gemini", level: 85 },
      { name: "NumPy / Pandas", level: 80 },
      { name: "LLMs", level: 85 },
    ],
  },
];
