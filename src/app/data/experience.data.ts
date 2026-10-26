import { LanguageType, RoleType } from '../core/models/portfolio.model';
import { ExperienceItem } from '../core/models/experience.model';

// --- PARCOURS PROFESSIONNEL (filtré par casquette via `roleType`, traduit fr / en) ---
export const EXPERIENCES_DATA: ExperienceItem[] = [
  // --- 🔵 DEVELOPPEUR FULLSTACK ---
  {
    period: { fr: '2026 — Auj.', en: '2026 — Present' },
    title: { fr: 'Développeur Fullstack', en: 'Fullstack Developer' },
    company: 'Rollo Technologies',
    roleType: 'Développeur Fullstack',
  },
  {
    period: { fr: '2025 — 2026', en: '2025 — 2026' },
    title: {
      fr: 'Formation en Développement Python',
      en: 'Python Development Training',
    },
    company: 'Getsmartergroup Professional Institute',
    roleType: 'Développeur Fullstack',
  },
  {
    period: { fr: '2024 — 2025', en: '2024 — 2025' },
    title: { fr: 'Formation en Développement PHP', en: 'PHP Development Training' },
    company: 'Getsmartergroup Professional Institute',
    roleType: 'Développeur Fullstack',
  },
  {
    period: { fr: '2022 — 2023', en: '2022 — 2023' },
    title: { fr: 'Etudiant en informatique', en: 'Computer Science Student' },
    company: 'IAI-Cameroun',
    roleType: 'Développeur Fullstack',
  },

  // --- 🔴 ETHICAL HACKER ---
  {
    period: { fr: '2026 — Auj.', en: '2026 — Present' },
    title: { fr: 'Pentester Junior', en: 'Junior Pentester' },
    company: 'Rollo Technologies',
    roleType: 'Ethical Hacker',
  },
  {
    period: { fr: '2025 — 2026', en: '2025 — 2026' },
    title: { fr: 'Formation en cybersécurité', en: 'Cybersecurity Training' },
    company: 'Getsmartergroup Professional Institute',
    roleType: 'Ethical Hacker',
  },

  // --- 🌸 UI/UX DESIGNER ---
  {
    period: { fr: '2026 — Auj.', en: '2026 — Present' },
    title: { fr: 'Designer Junior', en: 'Junior Designer' },
    company: 'Freelance',
    roleType: 'UI/UX Designer',
  },
  {
    period: { fr: '2025 — 2026', en: '2025 — 2026' },
    title: { fr: 'Formation en design', en: 'Design Training' },
    company: 'Getsmartergroup Professional Institute',
    roleType: 'UI/UX Designer',
  },
];

// --- TEXTES DE LA SECTION (BILINGUES) ---
export const EXPERIENCE_SECTION_TEXT: Record<
  LanguageType,
  { badge: string; hint: string; empty: string; period: string; title: string; company: string }
> = {
  fr: {
    badge: 'EXPÉRIENCE',
    hint: 'Parcours professionnel et formations, filtrés selon la casquette active.',
    empty: 'Aucune expérience pour cette casquette pour le moment.',
    period: 'Période',
    title: 'Intitulé',
    company: 'Entreprise',
  },
  en: {
    badge: 'EXPERIENCE',
    hint: 'Professional background and training, filtered by the active role.',
    empty: 'No experience for this role yet.',
    period: 'Period',
    title: 'Title',
    company: 'Company',
  },
};
