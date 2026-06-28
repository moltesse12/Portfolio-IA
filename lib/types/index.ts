export type ProjectProps = {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  link?: string;
};

export type AchievementProps = {
  title: string;
  issuer: string;
  date: string;
  link?: string;
};

export type EducationProps = {
  school: string;
  degree: string;
  field: string;
  period: string;
};

export type ExperienceProps = {
  company: string;
  role: string;
  description: string;
  period: string;
};
