// Portfolio Types

export interface Skill {
  name: string;
  level: number;
  icon: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export interface Project {
  title: string;
  description: string;
  category: 'web' | 'mobile' | 'ui';
  tags: string[];
  links: {
    live?: string;
    github?: string;
    behance?: string;
  };
  icon: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  label: string;
}

export interface PortfolioData {
  hero: {
    name: string;
    subtitle: string;
    title: string;
    description: string;
  };
  stats: {
    years: number;
    projects: number;
    clients: number;
  };
  about: {
    role: string;
    paragraphs: string[];
  };
  contact: ContactInfo;
  social: SocialLink[];
}
