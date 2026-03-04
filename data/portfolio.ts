import type {
  SiteConfig,
  SocialLinks,
  ExperienceEntry,
  EducationEntry,
  Publication,
  Project,
  SkillCategory,
} from "@/types";

export const siteConfig: SiteConfig = {
  name: "Mithun Shivakoti",
  title: "Data Scientist & ML Engineer",
  description:
    "Data Scientist & ML Engineer with publications at ICLR, IJCAI, and NeurIPS. Building scalable AI systems with real production impact. ASU MS '26.",
  url: "https://mithunshivakoti.com",
  ogImage: "/og-image.png",
  email: "mshivako@asu.edu",
  openToWork: true,
  availabilityNote: "Available May 2026",
};

export const socialLinks: SocialLinks = {
  github: "https://github.com/mithunshivakoti",
  linkedin: "https://www.linkedin.com/in/mithunshivakoti/",
  scholar: "https://scholar.google.com/citations?user=7_cJVY8AAAAJ&hl=en",
  twitter: "",
  resume: "/resume.pdf",
};

export const hero = {
  greeting: "Hi, I'm",
  name: "Mithun Shivakoti",
  tagline: "Building intelligent systems that matter.",
  subTagline: "Data Scientist & ML Engineer · ICLR · NeurIPS · IJCAI · ASU '26",
  profileImage: "/profile.jpg",
  cta: {
    primary: { label: "View My Work", href: "#projects" },
    secondary: { label: "Download Resume", href: "/resume.pdf" },
  },
};

export const about = {
  paragraphs: [
    "I'm a Data Science grad student at Arizona State University (graduating May 2026), with research published at ICLR, IJCAI, and NeurIPS — and hands-on production experience deploying ML systems at scale.",
    "From shipping a DistilBERT voice-AI classifier at under 100ms latency, to building a RAG system serving 50,000+ businesses, I bridge the gap between research and real-world impact.",
    "I'm actively looking for full-time Data Scientist and ML Engineer roles. Authorized to work in the US on OPT (STEM OPT eligible).",
  ],
  highlights: [
    { label: "Papers Published", value: "11+" },
    { label: "Internships", value: "4" },
    { label: "Graduating", value: "May 2026" },
    { label: "Work Auth", value: "OPT / STEM" },
  ],
};

// ─── EXPERIENCE ────────────────────────────────────────────────────────────────
export const experience: ExperienceEntry[] = [
  {
    company: "DriveHealth",
    role: "Artificial Intelligence Intern",
    location: "Gilbert, United States",
    period: "May 2025 – Aug 2025",
    type: "internship",
    description: [
      "Deployed a DistilBERT-based NLP model for voice AI classification achieving 98% accuracy with less than 100 ms inference latency in production.",
      "Integrated Human-in-the-Loop validation pipelines using Argilla and Label Studio, reducing model iteration cycles and improving annotation throughput.",
      "Redesigned backend architecture by extracting user operations into a dedicated microservice with secure TCP communication and database isolation, enabling independent scaling and improved maintainability of the core ML platform.",
    ],
    tech: ["DistilBERT", "Python", "Argilla", "Label Studio", "FastAPI", "Docker"],
  },
  {
    company: "SignalX",
    role: "Software Development Engineer Intern",
    location: "Hyderabad, India",
    period: "Jan 2024 – Jun 2024",
    type: "internship",
    description: [
      "Built an OCR model to automate captcha solving, scaling throughput from 70,000 to 700,000 daily.",
      "Engineered an adverse media classification module (96% accuracy), improving corporate risk analysis speed.",
      "Automated summarization of 30+ page reports into 1-page briefs, cutting analysis time by 90%.",
      "Built and deployed a RAG system integrating Gemini 1.5 (GCP) and GPT-4 with vector-based document retrieval, delivering regulatory compliance assistance to 50,000+ businesses.",
    ],
    tech: ["Python", "OCR", "RAG", "Gemini 1.5", "GPT-4", "GCP", "LangChain", "PostgreSQL"],
  },
  {
    company: "TE Connectivity",
    role: "Machine Learning Engineer Intern",
    location: "Bengaluru, India",
    period: "Oct 2022 – Aug 2023",
    type: "internship",
    description: [
      "Developed regression-based optimization pipeline (GPR + Ridge + ElasticNet) reducing signal loss to below 1%.",
      "Designed modular experimentation pipelines improving reproducibility and accelerating model validation.",
    ],
    tech: ["Python", "Scikit-learn", "GPR", "Ridge Regression", "ElasticNet", "MLflow"],
  },
  {
    company: "Omdena",
    role: "Junior Machine Learning Engineer Intern",
    location: "Colombo, Sri Lanka",
    period: "Jan 2023 – Mar 2023",
    type: "internship",
    description: [
      "Developed and evaluated supervised classification models for early autism risk detection using structured clinical data, achieving over 96% validation accuracy through feature engineering and cross-validation.",
    ],
    tech: ["Python", "Scikit-learn", "Feature Engineering", "Cross-Validation", "Pandas"],
  },
];

// ─── EDUCATION ─────────────────────────────────────────────────────────────────
export const education: EducationEntry[] = [
  {
    institution: "Arizona State University",
    degree: "Master of Science",
    field: "Data Science",
    location: "Tempe, AZ",
    period: "Aug 2024 – May 2026",
    gpa: "3.96 / 4.00",
    relevantCourses: [
      "Machine Learning",
      "Deep Learning",
      "Natural Language Processing",
      "Statistical Methods",
      "Data Mining",
      "Big Data Systems",
    ],
  },
  {
    institution: "Vellore Institute of Technology",
    degree: "Bachelor of Technology",
    field: "Computer Science (AI)",
    location: "Vellore, India",
    period: "Sept 2020 – May 2024",
    gpa: "9.12 / 10",
    relevantCourses: [
      "Artificial Intelligence",
      "Machine Learning",
      "Computer Vision",
      "Data Structures",
      "Database Systems",
      "Deep Learning",
    ],
  },
];

// ─── PUBLICATIONS ──────────────────────────────────────────────────────────────
export const publications: Publication[] = [
  {
    title:
      "Abg-SciQA: A Dataset for Understanding and Resolving Ambiguity in Scientific Questions",
    authors: ["T Chen", "KR Liou", "Mithun Shivakoti", "A Gaur", "P Kumari", "M Guo", "H Wei"],
    venue: "ICLR",
    year: 2025,
    abstract:
      "Benchmarking and enhancing ambiguity detection and clarification in language models. Introduces a dataset for understanding and resolving ambiguity in scientific questions, targeting foundation model limitations in handling ambiguous queries.",
    featured: true,
    tags: ["NLP", "LLM", "Ambiguity Detection", "Scientific QA"],
  },
  {
    title: "DeepShade: Enable Shade Simulation by Text-conditioned Image Generation",
    authors: ["L Da", "X Liu", "Mithun Shivakoti", "TP Kutralingam", "Y Yang", "H Wei"],
    venue: "IJCAI",
    year: 2025,
    abstract:
      "A diffusion-based model trained on satellite imagery and 3D simulations to simulate time-dependent urban shadow patterns. Achieves SSIM of 0.84 — a 97.8% improvement over baseline — with applications in shade-aware urban route optimization and heat island mitigation.",
    featured: true,
    tags: ["Diffusion Models", "Computer Vision", "Urban AI", "Image Generation"],
  },
  {
    title:
      "ShadeBench: A Benchmark Dataset and Method for Shade Simulation in Sustainable Society",
    authors: ["L Da", "X Liu", "Mithun Shivakoti", "TP Kutralingam", "Y Yang", "H Wei"],
    venue: "NeurIPS",
    year: 2025,
    abstract:
      "A benchmark dataset and evaluation framework for shade simulation presented at the UrbanAI workshop. Enables reproducible evaluation of shade prediction methods for sustainable urban planning and smart city applications.",
    featured: true,
    tags: ["Benchmark", "Urban AI", "Sustainability", "Smart Cities"],
  },
  {
    title:
      "KNOXRT: Knowledge-Networked Optimization for eXploratory Real-time Training",
    authors: ["S Mishra", "K Jeeveth", "Mithun Shivakoti", "V Aravindan", "R Singh"],
    venue: "IEEE",
    year: 2024,
    abstract:
      "Real-time threat detection system integrating CNN-LSTM, CNN-GRU, CNN-GAN, and tree-based ensembles. Achieved 99.48% classification accuracy using a CNN-GRU + Random Forest ensemble.",
    featured: false,
    tags: ["Deep Learning", "Cybersecurity", "CNN", "Real-Time"],
  },
  {
    title:
      "A Comparative Study on Prediction of Soil Health and Crop Recommendation Using Machine Learning Models",
    authors: ["Mithun Shivakoti", "RK Srinivasa"],
    venue: "Book Chapter",
    year: 2024,
    abstract:
      "Comprehensive comparison of machine learning models for soil health assessment and crop recommendation. Published in Research Advances in Intelligent Computing.",
    featured: false,
    tags: ["Agriculture AI", "Supervised Learning", "Crop Prediction"],
  },
  {
    title:
      "Prognoza: Parkinson's Disease Prediction Using Classification Algorithms",
    authors: ["Mithun Shivakoti", "SC Medaramatla", "D Godavarthi", "N Shivakoti"],
    venue: "EAI",
    year: 2023,
    abstract:
      "Classification-based approach for early-stage Parkinson's disease prediction. Published in EAI Endorsed Transactions on Pervasive Health and Technology with 9 citations.",
    featured: false,
    tags: ["Healthcare AI", "Classification", "Neurology"],
  },
  {
    title:
      "An Enhanced Laryngeal Tissue Classification Model Using Deep Learning Techniques",
    authors: ["Mithun Shivakoti", "SC Medaramatla", "K Jeeveth", "K Srinivasa Reddy"],
    venue: "Conference",
    year: 2023,
    abstract:
      "CNN-based deep learning for early-stage laryngeal tissue cancer detection (95% accuracy). Classifies four distinct tissue types from medical imaging.",
    featured: false,
    tags: ["Medical AI", "CNN", "Cancer Detection"],
  },
  {
    title: "An Efficient Regression Method To Predict Soil pH Using RGB Values",
    authors: ["Mithun Shivakoti", "AR Srinivasa Reddy"],
    venue: "Journal",
    year: 2023,
    abstract:
      "Regression-based method for predicting soil pH from RGB image data, enabling fast low-cost soil analysis without lab equipment.",
    featured: false,
    tags: ["Regression", "Agriculture", "Image Analysis"],
  },
  {
    title: "System and Method for Predicting Water Quality",
    authors: ["Mithun Shivakoti", "Sagar Dhanraj Pande"],
    venue: "Patent",
    year: 2023,
    abstract:
      "Indian Patent (App. 202,341,061,009) for an ML-based system to predict water quality from environmental sensor data.",
    featured: false,
    tags: ["Patent", "Water Quality", "Environmental AI"],
  },
];

// ─── ACHIEVEMENTS ──────────────────────────────────────────────────────────────
export const achievements = [
  {
    title: "Winner — Smart India Hackathon 2022",
    description: "Top 1% from 200,000+ students nationwide.",
    icon: "🏆",
    highlight: true,
  },
  {
    title: "Finalist — Singapore India Hackathon 2023",
    description: "1 of 24 students selected from 200,000+ across India.",
    icon: "🌏",
    highlight: true,
  },
  {
    title: "Finalist — UNESCO India Africa Hackathon 2022",
    description: "1 of 200 students selected from 200,000+ across India.",
    icon: "🌍",
    highlight: false,
  },
  {
    title: "Runner Up — Signal Integrity Optimization Contest 2023",
    description: "2nd Prize among teams across India.",
    icon: "🥈",
    highlight: false,
  },
  {
    title: "Top 15 / 500+ Teams — Engineering Clinics 2022",
    description: "1 of 90 students selected from 3,000+ at VIT.",
    icon: "⭐",
    highlight: false,
  },
];

// ─── CERTIFICATIONS ────────────────────────────────────────────────────────────
export const certifications = [
  { name: "Oracle Cloud Infrastructure 2024 Generative AI Professional", issuer: "Oracle" },
  { name: "Artificial Intelligence Analyst", issuer: "IBM" },
  { name: "Fundamentals of Deep Learning", issuer: "NVIDIA" },
  { name: "Career Essentials in Generative AI", issuer: "Microsoft" },
];

// ─── PROJECTS ──────────────────────────────────────────────────────────────────
export const projects: Project[] = [
  {
    title: "DeepShade: Text-conditioned Shade Simulation",
    description:
      "Conditional diffusion model trained on satellite imagery & 3D simulations to predict time-dependent urban shadow patterns. SSIM ~0.84 (97.8% improvement over baseline). Applied to shade-aware route optimization. Published at IJCAI 2025.",
    tech: ["PyTorch", "Diffusion Models", "Satellite Imagery", "Computer Vision", "Python"],
    githubUrl: "https://github.com/mithunshivakoti",
    featured: true,
    tags: ["Diffusion", "Computer Vision", "IJCAI 2025"],
  },
  {
    title: "KNOXRT: Real-time Threat Detection",
    description:
      "Real-time cybersecurity threat detection integrating CNN-LSTM, CNN-GRU, CNN-GAN and tree-based ensembles. 99.48% accuracy using CNN-GRU + Random Forest ensemble.",
    tech: ["PyTorch", "CNN-LSTM", "CNN-GRU", "Random Forest", "Python", "Scikit-learn"],
    githubUrl: "https://github.com/mithunshivakoti",
    featured: true,
    tags: ["Cybersecurity", "Deep Learning", "IEEE 2024"],
  },
  {
    title: "Sentinel: Insider Trading Prediction",
    description:
      "Real-time risk scoring system combining SGX data, price fluctuations, and volume analysis to flag anomalous insider trading. Stock price forecasting module with <3% error rate.",
    tech: ["Python", "Time Series", "Anomaly Detection", "Scikit-learn", "PostgreSQL"],
    githubUrl: "https://github.com/mithunshivakoti",
    featured: true,
    tags: ["Finance AI", "Anomaly Detection", "Time Series"],
  },
  {
    title: "Adaptive Drift-Mitigation Framework",
    description:
      "Sliding-window concept drift detection with automated model retraining for edge ML systems. Handles shifting data distributions and emergent classes without manual intervention.",
    tech: ["Python", "Scikit-learn", "Edge ML", "Streaming Data", "Docker"],
    githubUrl: "https://github.com/mithunshivakoti",
    featured: false,
    tags: ["MLOps", "Concept Drift", "Edge AI"],
  },
  {
    title: "Terveys: Soil Health Intelligence",
    description:
      "Smartphone-based soil health assessment via RGB image analysis. Deep learning predicts soil type and pH, saving farmers up to 75% of time vs. physical testing.",
    tech: ["Python", "TensorFlow", "Computer Vision", "Deep Learning", "Mobile"],
    githubUrl: "https://github.com/mithunshivakoti",
    featured: false,
    tags: ["Agriculture AI", "Computer Vision", "Deep Learning"],
  },
  {
    title: "Vital Monitoring — Arduino Nicla Smart Mask",
    description:
      "Real-time wearable data collection from smart masks, with a trained model predicting potential collapses by analyzing breathing patterns and heart rate. Integrated hardware sensors directly into the mask for continuous edge inference.",
    tech: ["Arduino Nicla", "Python", "Edge ML", "Signal Processing", "Wearables"],
    featured: false,
    tags: ["Edge AI", "Healthcare", "IoT", "Wearables"],
  },
  {
    title: "Spoof Call Detection for Police Control Room",
    description:
      "ML + NLP model classifying incoming calls as human or system-generated spoof calls, cutting average police connection time from 25–30 seconds to 10 seconds. Includes a real-time call recording website for voice analysis.",
    tech: ["Python", "NLP", "Machine Learning", "Voice Analysis", "Web"],
    featured: false,
    tags: ["NLP", "Public Safety", "Classification", "Voice AI"],
  },
  {
    title: "Laryngeal Tissue Cancer Classification",
    description:
      "Custom CNN-based deep learning model for early-stage laryngeal tissue cancer detection (95% accuracy). Classifies four distinct tissue types from medical imaging, enabling faster clinical diagnosis.",
    tech: ["Python", "PyTorch", "CNN", "Medical Imaging", "Deep Learning"],
    featured: false,
    tags: ["Medical AI", "CNN", "Cancer Detection", "Computer Vision"],
  },
  {
    title: "OS Viz — Operating Systems Visualizer",
    description:
      "Interactive visualization platform for OS concepts, with an integrated Ubuntu terminal and animated algorithm walkthroughs. Makes complex OS internals accessible to a wide audience.",
    tech: ["JavaScript", "HTML/CSS", "Ubuntu Terminal", "Web"],
    featured: false,
    tags: ["Education", "Visualization", "Web", "Systems"],
  },
];

// ─── SKILLS ────────────────────────────────────────────────────────────────────
export const skills: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["Python", "SQL", "R", "Java", "MATLAB", "Bash"],
  },
  {
    category: "ML / DL Frameworks",
    skills: [
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "HuggingFace Transformers",
      "Keras",
      "LangChain",
    ],
  },
  {
    category: "Specializations",
    skills: [
      "Large Language Models (LLMs)",
      "NLP",
      "Computer Vision",
      "Generative AI",
      "Time Series Forecasting",
      "Anomaly Detection",
      "Reinforcement Learning",
    ],
  },
  {
    category: "Data Engineering",
    skills: [
      "Pandas",
      "NumPy",
      "Feature Engineering",
      "ETL Pipelines",
      "EDA",
      "SHAP / LIME",
      "Drift Detection",
    ],
  },
  {
    category: "MLOps & Cloud",
    skills: [
      "MLflow",
      "Docker",
      "Kubernetes",
      "Airflow",
      "FastAPI",
      "Flask",
      "AWS (S3, EC2, SageMaker, Lambda)",
      "GCP (Vertex AI, BigQuery)",
      "CI/CD",
    ],
  },
  {
    category: "Databases & Tools",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Git", "Jupyter", "Linux"],
  },
];

// ─── CONTACT ───────────────────────────────────────────────────────────────────
export const contact = {
  heading: "Let's Work Together",
  subheading:
    "Actively seeking full-time Data Scientist and ML Engineer roles. Open to industry, research, and applied AI positions.",
  email: "mshivako@asu.edu",
  location: "Tempe, AZ — open to relocation & remote",
};
