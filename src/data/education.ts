export interface Education {
  institution: string;
  degree: string;
  period: string;
  gpa: string;
  location: string;
  coursework: string[];
}

export const education: Education[] = [
  {
    institution: "Indian Institute of Information Technology Lucknow",
    degree: "Bachelor of Technology in Computer Science",
    period: "Aug 2024 — Apr 2028",
    gpa: "8.51 / 10.0",
    location: "Lucknow, Uttar Pradesh, India",
    coursework: [
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Object-Oriented Programming",
      "Web Development",
      "Computer Networks",
    ],
  },
];
