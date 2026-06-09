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
      { name: "Python", level: 95 },
      { name: "C++", level: 90 },
      { name: "JavaScript", level: 80 },
      { name: "C", level: 75 },
      { name: "SQL", level: 78 },
    ],
  },
  {
    category: "AI / Machine Learning",
    icon: "Brain",
    skills: [
      { name: "LangChain / LangGraph", level: 90 },
      { name: "PyTorch", level: 85 },
      { name: "Scikit-learn", level: 82 },
      { name: "TensorFlow / Keras", level: 80 },
      { name: "Hugging Face", level: 82 },
    ],
  },
  {
    category: "Web & Databases",
    icon: "Globe",
    skills: [
      { name: "FastAPI", level: 85 },
      { name: "Next.js / React", level: 78 },
      { name: "MongoDB", level: 82 },
      { name: "Streamlit", level: 80 },
      { name: "PostgreSQL", level: 75 },
    ],
  },
  {
    category: "Tools & Platforms",
    icon: "Terminal",
    skills: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 75 },
      { name: "Jupyter Notebook", level: 88 },
      { name: "LangSmith", level: 80 },
      { name: "Anaconda", level: 78 },
    ],
  },
];
