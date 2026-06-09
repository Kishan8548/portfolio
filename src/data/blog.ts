export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tag: string;
  url: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: "EduVerse: The Self-Improving AI",
    excerpt:
      "A detailed writeup of our approach for the Gemma 4 Good hackathon, explaining how we used adversarial RAG and preference learning to build an AI tutor.",
    date: "May 2026",
    readTime: "15 min read",
    tag: "Kaggle",
    url: "https://www.kaggle.com/competitions/gemma-4-good-hackathon/writeups/eduverse",
  },
];
