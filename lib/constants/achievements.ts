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
    titleFr: "Kaggle Competition",
    titleEn: "Kaggle Competition",
    issuer: "Kaggle",
    date: "2024",
  },
];
