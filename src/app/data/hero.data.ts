import { LanguageType, RoleType } from '../core/models/portfolio.model';

export interface HeroContent {
  category: string;
  greeting: string;
  name: string;
  roleTitle: string;
  catchphrase: string;
  description: string;
  primaryBtn: string;
  secondaryBtn: string;
}

/** Contenus du hero, par casquette puis par langue. */
export const HERO_BY_ROLE: Record<RoleType, Record<LanguageType, HeroContent>> = {
  'Développeur Fullstack': {
    fr: {
      category: 'Web & Mobile',
      greeting: 'Bonjour, je suis',
      name: 'Miguel Souop',
      roleTitle: 'Développeur Fullstack',
      catchphrase: 'Je transforme les idées en produits rapides, robustes et élégants.',
      description:
        "Développeur Fullstack Web & Mobile passionné, je conçois des applications robustes, scalables et centrées sur l'expérience utilisateur. De la modélisation de bases de données complexes au développement d'interfaces fluides en passerelles API performantes, je transforme des idées complexes en produits digitaux prêts à passer à l'échelle.",
      primaryBtn: 'Voir les projets',
      secondaryBtn: 'Télécharger CV',
    },
    en: {
      category: 'Web & Mobile',
      greeting: "Hello, I'm",
      name: 'Miguel Souop',
      roleTitle: 'Fullstack Developer',
      catchphrase: 'I turn ideas into fast, robust, and elegant products.',
      description:
        'Passionate Fullstack Web & Mobile Developer, I design robust, scalable, and user-centric applications. From complex database modeling to fluid interfaces and high-performance API gateways, I transform complex ideas into digital products ready to scale.',
      primaryBtn: 'View Projects',
      secondaryBtn: 'Download Resume',
    },
  },

  'Ethical Hacker': {
    fr: {
      category: 'Cybersecurity & Red Teaming',
      greeting: 'Bonjour, je suis',
      name: 'Miguel Souop',
      roleTitle: 'Ethical Hacker',
      catchphrase: "Je pense comme l'attaquant pour protéger le défenseur.",
      description:
        "Ethical Hacker, Red Teamer et Chercheur de failles, spécialisé dans l'évaluation d'impact, les tests d'infiltration (Pentest) et la sécurisation d'infrastructures web & mobiles. Mon rôle est d'anticiper les attaques, d'identifier les vulnérabilités avant qu'elles ne soient exploitées et de garantir la résilience de vos systèmes.",
      primaryBtn: 'Voir les projets',
      secondaryBtn: 'Me contacter',
    },
    en: {
      category: 'Cybersecurity & Red Teaming',
      greeting: "Hello, I'm",
      name: 'Miguel Souop',
      roleTitle: 'Ethical Hacker',
      catchphrase: 'I think like the attacker to protect the defender.',
      description:
        'Ethical Hacker, Red Teamer, and Vulnerability Researcher, specializing in impact assessment, penetration testing (pentesting), and securing web and mobile infrastructures. My role is to anticipate attacks, identify vulnerabilities before they can be exploited, and ensure the resilience of your systems.',
      primaryBtn: 'View Projects',
      secondaryBtn: 'Contact Me',
    },
  },

  'UI/UX Designer': {
    fr: {
      category: 'UI/UX & Visual Design',
      greeting: 'Bonjour, je suis',
      name: 'Miguel Souop',
      roleTitle: 'UI/UX Designer',
      catchphrase: 'Je crée des interfaces fluides, séduisantes et centrées sur l’humain.',
      description:
        "UI/UX Designer passionné par la création d'interfaces élégantes, intuitives et captivantes. J'allie recherche utilisateur, wireframing méticuleux et prototypage interactif pour concevoir des expériences visuelles mémorables qui enchantent les utilisateurs et maximisent l'engagement.",
      primaryBtn: 'Voir les projets',
      secondaryBtn: 'Me contacter',
    },
    en: {
      category: 'UI/UX & Visual Design',
      greeting: "Hello, I'm",
      name: 'Miguel Souop',
      roleTitle: 'UI/UX Designer',
      catchphrase: 'I craft fluid, captivating, human-centered interfaces.',
      description:
        "Passionate UI/UX Designer, I craft elegant, intuitive, and captivating interfaces. Combining user research, meticulous wireframing, and interactive prototyping, I design memorable visual experiences that delight users and maximize engagement.",
      primaryBtn: 'View Projects',
      secondaryBtn: 'Contact Me',
    },
  },
};
