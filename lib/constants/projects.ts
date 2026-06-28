export interface Project {
  id: number;
  titleFr: string;
  titleEn: string;
  descFr: string;
  descEn: string;
  tags: string[];
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    titleFr: "Prediction de ventes",
    titleEn: "Sales Prediction",
    descFr: "Modele de machine learning pour prevoir les ventes d'un commerce.",
    descEn: "Machine learning model to predict retail sales.",
    tags: ["Python", "Scikit-learn", "Pandas"],
  },
  {
    id: 2,
    titleFr: "Classification d'images",
    titleEn: "Image Classification",
    descFr: "Reseau de neurones convolutionnel pour classifier des images.",
    descEn: "Convolutional neural network for image classification.",
    tags: ["TensorFlow", "Keras", "CNN"],
  },
  {
    id: 3,
    titleFr: "Analyse de sentiments",
    titleEn: "Sentiment Analysis",
    descFr: "NLP pour analyser les sentiments des avis clients.",
    descEn: "NLP to analyze customer review sentiment.",
    tags: ["NLP", "Python", "Transformers"],
  },
  {
    id: 4,
    titleFr: "Dashboard energie",
    titleEn: "Energy Dashboard",
    descFr: "Tableau de bord interactif pour visualiser la consommation energetique.",
    descEn: "Interactive dashboard for energy consumption visualization.",
    tags: ["Power BI", "SQL", "Python"],
  },
  {
    id: 5,
    titleFr: "Recommandation de films",
    titleEn: "Movie Recommendation",
    descFr: "Systeme de recommendation base sur le filtering collaboratif.",
    descEn: "Recommendation system based on collaborative filtering.",
    tags: ["Python", "Surprise", "Pandas"],
  },
  {
    id: 6,
    titleFr: "Detection de fraudes",
    titleEn: "Fraud Detection",
    descFr: "Modele de detection de transactions frauduleuses.",
    descEn: "Fraudulent transaction detection model.",
    tags: ["Python", "XGBoost", "SMOTE"],
  },
];
