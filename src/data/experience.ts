export interface Achievement {
  title: string;
  subtitle: string;
  period: string;
  description: string;
  tags: string[];
}

export const achievements: Achievement[] = [
  {
    title: "Amazon ML Summer School 2026",
    subtitle: "Selected Participant — Machine Learning",
    period: "2026",
    description:
      "Selected for Amazon's prestigious ML Summer School 2026, a highly competitive program covering core ML concepts including supervised learning, deep learning, NLP, and reinforcement learning.",
    tags: ["Amazon", "Machine Learning", "ML Summer School"],
  },
  {
    title: "Competitive Programming",
    subtitle: "LeetCode Knight · Codeforces Pupil",
    period: "2025",
    description:
      "Reached Knight on LeetCode (1950+ rating) and Pupil on Codeforces through consistent participation in rated contests and a strong focus on algorithms and data structures.",
    tags: ["LeetCode", "Codeforces", "Knight", "Pupil"],
  },
  {
    title: "1000+ Problems Solved",
    subtitle: "Across LeetCode & Codeforces",
    period: "2024 — Present",
    description:
      "Solved over 1000 algorithmic problems across LeetCode and Codeforces, covering topics like dynamic programming, graphs, trees, greedy, and number theory.",
    tags: ["DSA", "Algorithms", "1000+", "Problem Solving"],
  },
  {
    title: "AXIOS App Wing",
    subtitle: "App Wing Member @ IIIT Lucknow",
    period: "2025 — Present",
    description:
      "Part of the core App development team for our college's technical society. I help build applications and collaborate with peers on mobile tech.",
    tags: ["Android Development", "App Wing"],
  },
  {
    title: "Open Source Contributor",
    subtitle: "Active Contributor to Oppia & Wikimedia",
    period: "2024 — Present",
    description:
      "Actively contributing to major open-source projects including Oppia and Wikimedia, focusing on feature development and issue resolution.",
    tags: ["Open Source", "Oppia", "Wikimedia"],
  },
  {
    title: "Flipkart GRiD 8.0",
    subtitle: "Semifinalist in Software Development Track",
    period: "2026",
    description:
      "Advanced to the semifinals of Flipkart GRiD 8.0, showcasing strong problem-solving skills and technical proficiency.",
    tags: ["Hackathon", "Flipkart GRiD", "Semifinalist"],
  },
];
