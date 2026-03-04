export type Venue =
  | "NeurIPS"
  | "IJCAI"
  | "ICLR"
  | "AAAI"
  | "ICML"
  | "ACL"
  | "EMNLP"
  | "CVPR"
  | "ICCV"
  | "IEEE"
  | "EAI"
  | "Patent"
  | "Book Chapter"
  | "Journal"
  | "Conference"
  | "Workshop"
  | "Preprint"
  | string;

export interface Achievement {
  title: string;
  description: string;
  icon: string;
  highlight: boolean;
}

export interface Certification {
  name: string;
  issuer: string;
}

export type ExperienceType =
  | "internship"
  | "research"
  | "full-time"
  | "part-time";

export interface ExperienceEntry {
  company: string;
  role: string;
  location: string;
  period: string;
  type: ExperienceType;
  description: string[];
  tech: string[];
  logo?: string;
  link?: string;
}

export interface EducationEntry {
  institution: string;
  degree: string;
  field: string;
  location: string;
  period: string;
  gpa?: string;
  thesis?: string;
  relevantCourses?: string[];
  logo?: string;
}

export interface Publication {
  title: string;
  authors: string[];
  venue: Venue;
  year: number;
  abstract: string;
  paperUrl?: string;
  codeUrl?: string;
  projectUrl?: string;
  featured: boolean;
  tags: string[];
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  image?: string;
  tags: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  ogImage: string;
  email: string;
  openToWork: boolean;
  availabilityNote: string;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  scholar: string;
  twitter?: string;
  resume: string;
}
