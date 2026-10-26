import { LanguageType, RoleType } from './portfolio.model';

/**
 * Une entrée du parcours professionnel / formation.
 * `roleType` permet le filtrage dynamique selon la casquette active
 * (Développeur Fullstack / Ethical Hacker / UI/UX Designer).
 * Les champs traduisibles sont fournis par langue (fr / en).
 */
export interface ExperienceItem {
  period: Record<LanguageType, string>;
  title: Record<LanguageType, string>;
  company: string;
  roleType: RoleType;
}
