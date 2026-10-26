export type RoleType = 'Développeur Fullstack' | 'Ethical Hacker' | 'UI/UX Designer';
export type LanguageType = 'fr' | 'en';
export type ThemeMode = 'dark' | 'light';

export interface SkillItem {
  name: string;
  iconUrl: string; // Chemin du logo officiel en couleur
}

export interface SkillCategory {
  title: Record<LanguageType, string>; // ex: { fr: 'Développement Frontend', en: 'Frontend Development' }
  skills: SkillItem[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string; // 'Tous', 'Web', 'Mobile', 'Design', 'Hacking', etc.
  roleCategory: RoleType;
  shortDescription: string;
  fullDescription: string;
  thumbnail: string;
  images: string[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

