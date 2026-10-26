import { LanguageType, RoleType } from './portfolio.model';

export type ProjectCategory = 'Web' | 'Mobile' | 'Réseau' | 'Pentest' | 'Labs';

export interface Project {
  id: string;
  title: string;
  /** Textes traduisibles : clé par langue (fr / en). */
  shortDescription: Record<LanguageType, string>;
  fullDescription: Record<LanguageType, string>;
  category: ProjectCategory;
  roleType: RoleType;
  image: string;
  gallery?: string[];
  technologies: string[];
  features?: Record<LanguageType, string[]>;
  githubUrl?: string;
  demoUrl?: string;
  figmaUrl?: string;
}
