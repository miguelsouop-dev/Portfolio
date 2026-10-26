import { LanguageType, RoleType } from '../core/models/portfolio.model';
import { HEADER_NAV, NavItem } from './header.data';

/**
 * Description du footer, dynamique selon la casquette active (RoleService.activeRole())
 * puis la langue courante (LanguageService.currentLang()).
 */
export const FOOTER_DESCRIPTIONS: Record<LanguageType, Record<RoleType, string>> = {
  fr: {
    'Développeur Fullstack':
      'Transformer la complexité technique en produits digitaux scalables, performants et orientés utilisateur.',
    'Ethical Hacker':
      'Anticiper les menaces et fortifier les infrastructures pour bâtir un écosystème numérique impénétrable.',
    'UI/UX Designer':
      "Sculpter des expériences visuelles intuitives où chaque détail graphique sert l'émotion et l'usage.",
  },
  en: {
    'Développeur Fullstack':
      'Transforming technical complexity into scalable, high-performance, and user-centric digital products.',
    'Ethical Hacker':
      'Anticipating threats and hardening infrastructures to build an impenetrable digital ecosystem.',
    'UI/UX Designer':
      'Sculpting intuitive visual experiences where every graphical detail serves emotion and usability.',
  },
};

/** Métadonnées de clôture propres à chaque casquette. */
export interface FooterRoleMeta {
  /** Petit label au-dessus de la ligne de clôture (ex: « Cybersécurité »). */
  tag: string;
  /** Ligne de remerciement liée au rôle. */
  closing: string;
}

export const FOOTER_ROLE_META: Record<LanguageType, Record<RoleType, FooterRoleMeta>> = {
  fr: {
    'Développeur Fullstack': {
      tag: 'Développement',
      closing: 'Développeur Fullstack — Merci de votre visite.',
    },
    'Ethical Hacker': {
      tag: 'Cybersécurité',
      closing: 'Ethical Hacker — Merci de votre visite.',
    },
    'UI/UX Designer': {
      tag: 'Design',
      closing: 'Designer UI/UX — Merci de votre visite.',
    },
  },
  en: {
    'Développeur Fullstack': {
      tag: 'Development',
      closing: 'Fullstack Developer — Thanks for visiting.',
    },
    'Ethical Hacker': {
      tag: 'Cybersecurity',
      closing: 'Ethical Hacker — Thanks for visiting.',
    },
    'UI/UX Designer': {
      tag: 'Design',
      closing: 'UI/UX Designer — Thanks for visiting.',
    },
  },
};

/** Libellés génériques du footer. */
export const FOOTER_TEXT: Record<LanguageType, { rights: string; scrollTop: string }> = {
  fr: { rights: 'Tous droits réservés.', scrollTop: 'Remonter en haut' },
  en: { rights: 'All rights reserved.', scrollTop: 'Back to top' },
};

/** Ancres de navigation du footer : les mêmes que l'en-tête (Accueil → Contact). */
export const FOOTER_NAV: NavItem[] = HEADER_NAV;
