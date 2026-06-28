export interface Achievement {
  id: number;
  titleFr: string;
  titleEn: string;
  issuer: string;
  date: string;
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 1,
    titleFr: "Certification Data Science",
    titleEn: "Data Science Certification",
    issuer: "Coursera",
    date: "2024",
  },
  {
    id: 2,
    titleFr: "Kaggle Competition - Top 10%",
    titleEn: "Kaggle Competition - Top 10%",
    issuer: "Kaggle",
    date: "2024",
  },
  {
    id: 3,
    titleFr: "Certification Python avance",
    titleEn: "Advanced Python Certification",
    issuer: "OpenClassrooms",
    date: "2024",
  },
  {
    id: 4,
    titleFr: "Hackathon IA - Mention honorable",
    titleEn: "AI Hackathon - Honorable Mention",
    issuer: "Dataforgood",
    date: "2025",
  },
  {
    id: 5,
    titleFr: "Certification Machine Learning",
    titleEn: "Machine Learning Certification",
    issuer: "Stanford Online (Coursera)",
    date: "2025",
  },
];
