export interface Achievement {
  title: string;
  subtitle: string;
  period: string;
  description: string;
  tags: string[];
}

export const achievements: Achievement[] = [
  {
    title: "Hack4Good by Notion",
    subtitle: "1st Place — State-Level Hackathon",
    period: "2026",
    description:
      "Built a project using Notion's API and won 1st place in this state-level hackathon.",
    tags: ["Hackathon", "1st Place"],
  },
  {
    title: "Kaggle Competition",
    subtitle: "1st Place — CNN Skin Lesion Classification",
    period: "2025",
    description:
      "Placed 1st in a competition focused on classifying skin lesions using Convolutional Neural Networks.",
    tags: ["Kaggle", "Deep Learning", "1st Place"],
  },
  {
    title: "Codeforces — Specialist",
    subtitle: "Max Rating: 1448 · 750+ Problems Solved",
    period: "2026 — Present",
    description:
      "Active in competitive programming. Reached Specialist rank on Codeforces and have solved 750+ problems across various platforms.",
    tags: ["Competitive Programming", "DSA"],
  },
  {
    title: "AXIOS ML Wing",
    subtitle: "Machine Learning Wing Member @ IIIT Lucknow",
    period: "2025 — Present",
    description:
      "Part of the core ML team for our college's technical society. I help organize events and teach machine learning basics to juniors.",
    tags: ["Teaching", "Machine Learning"],
  },
];
