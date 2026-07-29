export interface Achievement {
  title: string;
  subtitle: string;
  period: string;
  description: string;
  tags: string[];
}

export const achievements: Achievement[] = [
  {
    title: "LeetCode — Knight",
    subtitle: "Max Rating: 1950+ · 1000+ Problems Solved",
    period: "2025",
    description:
      "Active in competitive programming on LeetCode. Reached Knight badge by solving 1000+ algorithmic problems.",
    tags: ["Competitive Programming", "DSA", "Knight"],
  },
  {
    title: "Codeforces — Pupil",
    subtitle: "Max Rating: Pupil · Regular Contestant",
    period: "2025",
    description:
      "Consistent participation in Codeforces rounds. Achieved Pupil rank with a strong focus on algorithmic problem solving and data structures.",
    tags: ["Codeforces", "Pupil", "Problem Solving"],
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
];
