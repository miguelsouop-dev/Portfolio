import { LanguageType, RoleType } from '../core/models/portfolio.model';

/** Lien d'ancre de navigation vers une section du portfolio. */
export interface NavItem {
  /** `id` du DOM cible (section correspondante). */
  id: string;
  label: Record<LanguageType, string>;
}

/**
 * Navigation principale (header).
 * Consommée aussi par le footer (voir FOOTER_NAV dans footer.data.ts).
 */
export const HEADER_NAV: NavItem[] = [
  { id: 'hero', label: { fr: 'Accueil', en: 'Home' } },
  { id: 'about', label: { fr: 'À propos', en: 'About' } },
  { id: 'skills', label: { fr: 'Compétences', en: 'Skills' } },
  { id: 'projects', label: { fr: 'Projets', en: 'Projects' } },
  { id: 'contact', label: { fr: 'Contact', en: 'Contact' } },
];

/** Libellés affichés des casquettes (header, modale projet…), bilingues. */
export const ROLE_LABELS: Record<LanguageType, Record<RoleType, string>> = {
  fr: {
    'Développeur Fullstack': 'Développeur Fullstack',
    'Ethical Hacker': 'Ethical Hacker',
    'UI/UX Designer': 'UI/UX Designer',
  },
  en: {
    'Développeur Fullstack': 'Fullstack Developer',
    'Ethical Hacker': 'Ethical Hacker',
    'UI/UX Designer': 'UI/UX Designer',
  },
};
