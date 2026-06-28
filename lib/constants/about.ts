export interface Education {
  id: number;
  schoolFr: string;
  schoolEn: string;
  degreeFr: string;
  degreeEn: string;
  fieldFr: string;
  fieldEn: string;
  period: string;
}

export interface Experience {
  id: number;
  companyFr: string;
  companyEn: string;
  roleFr: string;
  roleEn: string;
  descFr: string;
  descEn: string;
  period: string;
}

export const EDUCATION: Education[] = [
  {
    id: 1,
    schoolFr: "Universite",
    schoolEn: "University",
    degreeFr: "Licence Informatique",
    degreeEn: "Bachelor in Computer Science",
    fieldFr: "Data & Intelligence Artificielle",
    fieldEn: "Data & Artificial Intelligence",
    period: "2022 - Present",
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: 1,
    companyFr: "Stage",
    companyEn: "Internship",
    roleFr: "Data Analyst / ML Engineer",
    roleEn: "Data Analyst / ML Engineer",
    descFr: "Developpement de modeles de machine learning et analyse de donnees pour des projets clients.",
    descEn: "Development of machine learning models and data analysis for client projects.",
    period: "2024",
  },
];
