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
    descFr: "Modele de machine learning pour prevoir les ventes d'un commerce a partir de donnees historiques.",
    descEn: "Machine learning model to predict retail sales from historical data.",
    tags: ["Python", "Scikit-learn", "Pandas"],
  },
  {
    id: 2,
    titleFr: "Classification d'images",
    titleEn: "Image Classification",
    descFr: "Reseau de neurones convolutionnel pour classifier des images avec une precision de 92%.",
    descEn: "Convolutional neural network for image classification achieving 92% accuracy.",
    tags: ["TensorFlow", "Keras", "CNN"],
  },
  {
    id: 3,
    titleFr: "Analyse de sentiments",
    titleEn: "Sentiment Analysis",
    descFr: "Modele NLP pour analyser les sentiments des avis clients en temps reel.",
    descEn: "NLP model to analyze customer review sentiment in real time.",
    tags: ["NLP", "Python", "Transformers"],
  },
  {
    id: 4,
    titleFr: "Dashboard energie",
    titleEn: "Energy Dashboard",
    descFr: "Tableau de bord interactif pour visualiser et analyser la consommation energetique.",
    descEn: "Interactive dashboard for energy consumption visualization and analysis.",
    tags: ["Power BI", "SQL", "Python"],
  },
  {
    id: 5,
    titleFr: "Recommandation de films",
    titleEn: "Movie Recommendation",
    descFr: "Systeme de recommendation base sur le filtrage collaboratif et le content-based filtering.",
    descEn: "Recommendation system based on collaborative and content-based filtering.",
    tags: ["Python", "Surprise", "Pandas"],
  },
  {
    id: 6,
    titleFr: "Detection de fraudes",
    titleEn: "Fraud Detection",
    descFr: "Modele de detection de transactions frauduleuses avec XGBoost et techniques de resampling SMOTE.",
    descEn: "Fraud transaction detection model using XGBoost and SMOTE resampling.",
    tags: ["Python", "XGBoost", "SMOTE"],
  },
  {
    id: 7,
    titleFr: "Chatbot intelligent",
    titleEn: "Intelligent Chatbot",
    descFr: "Assistant conversationnel base sur les transformers pour repondre aux questions frequentes.",
    descEn: "Conversational assistant based on transformers for FAQ handling.",
    tags: ["Python", "Transformers", "FastAPI"],
  },
  {
    id: 8,
    titleFr: "Analyse de marche",
    titleEn: "Market Analysis",
    descFr: "Pipeline complet d'analyse de marche avec scraping, nettoyage et visualisation des donnees.",
    descEn: "Complete market analysis pipeline with scraping, cleaning, and data visualization.",
    tags: ["Python", "BeautifulSoup", "Plotly"],
  },
  {
    id: 9,
    titleFr: "Reconnaissance faciale",
    titleEn: "Face Recognition",
    descFr: "Systeme de reconnaissance faciale utilisant des reseaux siamese et OpenCV.",
    descEn: "Face recognition system using siamese networks and OpenCV.",
    tags: ["Python", "OpenCV", "Deep Learning"],
  },
  {
    id: 10,
    titleFr: "Optimisation de stock",
    titleEn: "Stock Optimization",
    descFr: "Modele de prevision et d'optimisation des stocks pour la gestion de la chaine d'approvisionnement.",
    descEn: "Inventory forecasting and optimization model for supply chain management.",
    tags: ["Python", "Prophet", "SQL"],
  },
];
