export interface Skill {
  name: string;
  category: string;
}

export interface SkillCategory {
  nameFr: string;
  nameEn: string;
  skills: string[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    nameFr: "Langages",
    nameEn: "Languages",
    skills: ["Python", "SQL", "JavaScript", "TypeScript", "HTML5", "CSS3"],
  },
  {
    nameFr: "Machine Learning",
    nameEn: "Machine Learning",
    skills: ["TensorFlow", "Scikit-learn", "PyTorch", "Keras", "OpenCV", "XGBoost"],
  },
  {
    nameFr: "Analyse de donnees",
    nameEn: "Data Analysis",
    skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Power BI", "Tableau"],
  },
  {
    nameFr: "Outils & DevOps",
    nameEn: "Tools & DevOps",
    skills: ["Git", "Docker", "Linux", "Jupyter", "VS Code"],
  },
  {
    nameFr: "Web & Frameworks",
    nameEn: "Web & Frameworks",
    skills: ["React", "Next.js", "Tailwind CSS", "FastAPI", "Node.js"],
  },
  {
    nameFr: "Bases de donnees",
    nameEn: "Databases",
    skills: ["PostgreSQL", "MongoDB"],
  },
];
