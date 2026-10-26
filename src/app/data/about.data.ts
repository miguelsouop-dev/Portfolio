import { LanguageType, RoleType } from '../core/models/portfolio.model';

export interface AboutContent {
  badge: string;
  title: string;
  description: string;
  codeSnippetTitle: string;
  experienceYears: string;
  experienceLabel: string;
  projectsCount: string;
  projectsLabel: string;
}

/** Contenus de la section "À propos", par casquette puis par langue. */
export const ABOUT_BY_ROLE: Record<RoleType, Record<LanguageType, AboutContent>> = {
  'Développeur Fullstack': {
    fr: {
      badge: 'À PROPOS',
      title:
        'Je suis Miguel Souop, développeur full-stack spécialisé dans Laravel, Django, Flutter et Angular.',
      description:
        "J'accompagne entreprises et particuliers dans la création d'applications web, mobiles, plateformes sur mesure ainsi que dans la sécurisation et l'administration de systèmes et réseaux. J'ai travaillé sur de nombreux projets parmi lesquels 'SITUR', où j'ai été le chef d'une équipe de brillants développeurs !",
      codeSnippetTitle: 'script.ts',
      experienceYears: '2+',
      experienceLabel: "Années d'expérience",
      projectsCount: '15+',
      projectsLabel: 'Projets réalisés',
    },
    en: {
      badge: 'ABOUT',
      title:
        'I am Miguel Souop, a full-stack developer specializing in Laravel, Django, Flutter, and Angular.',
      description:
        "I help companies and individuals build web and mobile applications, custom platforms, as well as securing and administering systems and networks. I have worked on many projects, including 'SITUR', where I led a team of brilliant developers!",
      codeSnippetTitle: 'script.ts',
      experienceYears: '2+',
      experienceLabel: 'Years of Experience',
      projectsCount: '15+',
      projectsLabel: 'Projects Completed',
    },
  },

  'Ethical Hacker': {
    fr: {
      badge: 'À PROPOS',
      title: 'Je suis Miguel Souop, Ethical Hacker Red Teamer passionné de cybersécurité.',
      description:
        "Spécialisé dans l'analyse de vulnérabilités, l'énumération de réseaux et le pentesting d'applications web et mobiles. Mon approche consiste à adopter la posture d'un attaquant réel pour vous aider à fortifier la résilience de vos systèmes.",
      codeSnippetTitle: 'terminal.sh',
      experienceYears: '1+',
      experienceLabel: 'Année en Cybersécurité',
      projectsCount: '10+',
      projectsLabel: 'Audits & CTFs',
    },
    en: {
      badge: 'ABOUT',
      title:
        'I am Miguel Souop, an ethical hacker and red teamer with a passion for cybersecurity.',
      description:
        'Specialized in vulnerability assessment, network enumeration, and web/mobile application pentesting. I adopt a real-world attacker mindset to strengthen system security.',
      codeSnippetTitle: 'terminal.sh',
      experienceYears: '1+',
      experienceLabel: 'Year in Cybersecurity',
      projectsCount: '10+',
      projectsLabel: 'Audits & CTFs',
    },
  },

  'UI/UX Designer': {
    fr: {
      badge: 'À PROPOS',
      title: 'Je suis Miguel Souop, UI/UX Designer spécialiste web et mobile.',
      description:
        "Raconter une histoire à travers des interfaces épurées, de la recherche utilisateur au prototypage haute fidélité sur Figma et Adobe XD. Je crée des parcours fluides en harmonie avec l'identité de la marque.",
      codeSnippetTitle: 'design-system.fig',
      experienceYears: '1+',
      experienceLabel: 'Année en Design',
      projectsCount: '10+',
      projectsLabel: 'Projets créatifs',
    },
    en: {
      badge: 'ABOUT',
      title: 'I am Miguel Souop, a UI/UX designer specializing in web and mobile.',
      description:
        'Storytelling through clean interfaces, user research, and high-fidelity prototyping in Figma and Adobe XD. I design frictionless user journeys in harmony with the brand identity.',
      codeSnippetTitle: 'design-system.fig',
      experienceYears: '1+',
      experienceLabel: 'Year in Design',
      projectsCount: '10+',
      projectsLabel: 'Creative Projects',
    },
  },
};

/** petite accroche affichée à droite du badge "À propos". */
export const ABOUT_HINT: Record<LanguageType, string> = {
  fr: 'Qui suis-je ?',
  en: 'Who am I?',
};
