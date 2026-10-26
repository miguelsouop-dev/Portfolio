import { LanguageType, RoleType } from '../core/models/portfolio.model';
import { Project, ProjectCategory } from '../core/models/project.model';

// --- FILTRES PAR CASQUETTE ---
export const FILTERS_BY_ROLE: Record<RoleType, ProjectCategory[]> = {
  'Développeur Fullstack': ['Web', 'Mobile'],
  'Ethical Hacker': ['Réseau', 'Pentest', 'Labs'],
  'UI/UX Designer': ['Web', 'Mobile'],
};

// --- LIBELLÉS DE CATÉGORIES (BILINGUES) ---
export const PROJECT_CATEGORY_LABELS: Record<LanguageType, Record<ProjectCategory, string>> = {
  fr: {
    Web: 'Web',
    Mobile: 'Mobile',
    'Réseau': 'Réseau',
    Pentest: 'Pentest',
    Labs: 'Labs',
  },
  en: {
    Web: 'Web',
    Mobile: 'Mobile',
    'Réseau': 'Network',
    Pentest: 'Pentest',
    Labs: 'Labs',
  },
};

// --- TEXTES DE LA SECTION (BILINGUES) ---
export const PROJECTS_SECTION_TEXT: Record<
  LanguageType,
  { badge: string; hint: string; empty: string; all: string; viewProject: string; viewLive: string }
> = {
  fr: {
    badge: 'PROJETS',
    hint: 'Découvrez quelques-uns de mes projets récents',
    empty: 'Aucun projet dans cette catégorie pour le moment.',
    all: 'Tous',
    viewProject: 'Voir le projet',
    viewLive: 'Voir en ligne',
  },
  en: {
    badge: 'PROJECTS',
    hint: 'Discover some of my recent projects',
    empty: 'No project in this category yet.',
    all: 'All',
    viewProject: 'View project',
    viewLive: 'View live',
  },
};

// --- PROJETS SPÉCIFIQUES PAR CASQUETTE ---
export const PROJECTS_BY_ROLE: Record<RoleType, Project[]> = {
  'Développeur Fullstack': [
    {
      id: 'situr',
      title: 'SITUR — Transport Urbain',
      shortDescription: {
        fr: 'Plateforme Web & Mobile de numérisation du transport urbain : billetterie, scan QR et fleet management.',
        en: 'Web & Mobile platform digitizing urban transport: ticketing, QR scanning and fleet management.',
      },
      fullDescription: {
        fr: "SITUR est une plateforme complète de digitalisation du transport urbain développée en équipe. J'ai occupé le rôle de chef de projet et développeur fullstack, pilotant la conception de l'architecture, l'API Laravel et l'application mobile Flutter. Le système permet l'achat de tickets mobiles, la validation par scan de QR code, le suivi des véhicules en temps réel et la gestion de flotte pour les opérateurs.",
        en: 'SITUR is a complete team-built platform for urban transport digitization. I worked as project lead and fullstack developer, driving the architecture design, the Laravel API and the Flutter mobile app. The system supports mobile ticket purchase, QR code validation, real-time vehicle tracking and fleet management for operators.',
      },
      category: 'Web',
      roleType: 'Développeur Fullstack',
      image: 'assets/images/projects/situr-dashboard.jpg',
      gallery: [
        'assets/images/projects/situr-dashboard.jpg',
        'assets/images/projects/situr-dashboard-3.jpg',
        'assets/images/projects/situr-dashboard-4.jpg',
      ],
      technologies: ['Laravel', 'Blade', 'MySQL', 'REST API', 'TailwindCSS', 'Firebase'],
      features: {
        fr: [
          'Billetterie mobile avec paiement intégré',
          'Validation des tickets par scan de QR code',
          'Tableau de bord de gestion de flotte en temps réel',
          'Suivi et géolocalisation des véhicules',
          'API REST sécurisée et scalable',
        ],
        en: [
          'Mobile ticketing with integrated payment',
          'Ticket validation via QR code scan',
          'Real-time fleet management dashboard',
          'Vehicle tracking and geolocation',
          'Secure and scalable REST API',
        ],
      },
      githubUrl: 'https://github.com/miguelsouop/situr',
      demoUrl: 'https://situr.demo.miguelsouop.dev',
    },

    {
      id: 'vsecurity-web',
      title: 'VSecurity — Console de Sécurité',
      shortDescription: {
        fr: "Interface web d'analyse de vulnérabilités et de supervision de la posture de sécurité.",
        en: 'Web interface for vulnerability analysis and security posture monitoring.',
      },
      fullDescription: {
        fr: "VSecurity est une interface web conçue pour centraliser le suivi de la sécurité applicative. Elle agrège les résultats de scans, met en évidence les vulnérabilités critiques et fournit des recommandations de remédiation. J'ai développé le frontend et contribué à l'analyse des failles web remontées par la plateforme.",
        en: 'VSecurity is a web interface designed to centralize application security tracking. It aggregates scan results, highlights critical vulnerabilities and provides remediation recommendations. I built the frontend and contributed to the analysis of web flaws reported by the platform.',
      },
      category: 'Web',
      roleType: 'Développeur Fullstack',
      image: 'assets/images/projects/vsecurity-web.jpg',
      gallery: [
        'assets/images/projects/vsecurity-web.jpg',
        'assets/images/projects/vsecurity-web.jpg',
      ],
      technologies: ['Laravel', 'Blade', 'MySQL', 'Chart.js'],
      features: {
        fr: [
          'Tableau de bord de vulnérabilités en temps réel',
          "Génération de rapports d'audit exportables",
          'Gestion des assets et des scans',
          'Suivi des remédiations par sévérité',
        ],
        en: [
          'Real-time vulnerability dashboard',
          'Exportable audit reports',
          'Asset and scan management',
          'Remediation tracking by severity',
        ],
      },
      githubUrl: 'https://github.com/miguelsouop/vsecurity',
      demoUrl: 'https://vsecurity.demo.miguelsouop.dev',
    },

    {
      id: 'bigbazzar-dashboard',
      title: 'Big Bazzard',
      shortDescription: {
        fr: 'Site vitrine et plateforme de présentation de projets pour une entreprise de construction.',
        en: 'Showcase website and project presentation platform for a construction company.',
      },
      fullDescription: {
        fr: 'SM Construction est un site vitrine professionnel conçu pour mettre en valeur les réalisations et services d’une entreprise de BTP. Le projet couvre la conception du layout, la galerie de projets, le formulaire de contact et une administration simple du contenu. Un travail poussé sur le responsive et la performance a été mené.',
        en: 'SM Construction is a professional showcase website designed to highlight the achievements and services of a construction company. The project covers the layout design, project gallery, contact form and a simple content back office. Significant work was put into responsiveness and performance.',
      },
      category: 'Web',
      roleType: 'Développeur Fullstack',
      image: 'assets/images/projects/bigbazzar-dashboard.jpg',
      gallery: [
        'assets/images/projects/bigbazzar-dashboard.jpg',
        'assets/images/projects/bigbazzar-dashboard.jpg',
      ],
      technologies: ['Laravel', 'TailwindCSS', 'MySQL'],
      features: {
        fr: [
          'Galerie de réalisations filtrable',
          'Pages services et présentation de l’entreprise',
          'Formulaire de contact avec notifications email',
          'Back-office de gestion du contenu',
        ],
        en: [
          'Filterable achievements gallery',
          'Services and company presentation pages',
          'Contact form with email notifications',
          'Content management back office',
        ],
      },
      githubUrl: 'https://github.com/miguelsouop/sm-construction',
      demoUrl: 'https://smconstruction.demo.miguelsouop.dev',
    },

    {
      id: 'carrefour-market',
      title: 'Carrefour Market',
      shortDescription: {
        fr: 'Application mobile de gestion de dépenses et de suivi budgétaire personnel.',
        en: 'Mobile app for expense tracking and personal budget management.',
      },
      fullDescription: {
        fr: "FYNOQ est une application mobile permettant de suivre ses revenus, dépenses et objectifs d'épargne au quotidien. Développée en Flutter, elle s'appuie sur une API Laravel pour la synchronisation des données et propose des visualisations claires de la santé financière de l'utilisateur.",
        en: 'FYNOQ is a mobile app for tracking daily income, expenses and savings goals. Built in Flutter, it relies on a Laravel API for data synchronization and provides clear visualizations of the user financial health.',
      },
      category: 'Web',
      roleType: 'Développeur Fullstack',
      image: 'assets/images/projects/carrefour-market.jpg',
      gallery: [
        'assets/images/projects/carrefour-market.jpg',
        'assets/images/projects/carrefour-market.jpg',
      ],
      technologies: ['HTML', 'CSS', 'TailwindCSS'],
      features: {
        fr: [
          'Suivi des revenus et dépenses',
          'Objectifs d’épargne et budget mensuel',
          'Statistiques et graphiques de dépenses',
          'Mode hors-ligne avec synchronisation',
        ],
        en: [
          'Income and expense tracking',
          'Savings goals and monthly budget',
          'Spending statistics and charts',
          'Offline mode with synchronization',
        ],
      },
      githubUrl: 'https://github.com/miguelsouop/fynoq',
    },

    {
      id: 'situr-mobile',
      title: 'Situr Mobile',
      shortDescription: {
        fr: 'Application mobile de billetterie et de suivi des transports SITUR.',
        en: 'Mobile ticketing and transit tracking app for SITUR.',
      },
      fullDescription: {
        fr: "Application mobile Flutter développée pour accompagner la plateforme SITUR : achat et rechargement de tickets, validation par QR code, suivi en temps réel des bus et notifications de parcours. L'API Laravel assure la synchronisation des données et la gestion du portefeuille utilisateur.",
        en: 'Mobile Flutter application built to support the SITUR platform: ticket purchase and top-up, QR code validation, real-time bus tracking and journey notifications. The Laravel API handles data synchronization and user wallet management.',
      },
      category: 'Mobile',
      roleType: 'Développeur Fullstack',
      image: 'assets/images/projects/situr-mobile.jpg',
      gallery: [
        'assets/images/projects/situr-mobile.jpg',
        'assets/images/projects/situr-mobile.jpg',
      ],
      technologies: ['Flutter', 'Dart', 'Laravel', 'MVVM', 'REST-API', 'Pusher'],
      features: {
        fr: [
          'Achat et rechargement de tickets mobiles',
          'Validation des tickets par QR code',
          'Suivi en temps réel des bus à proximité',
          'Notifications push d’itinéraire et synchronisation temps réel',
        ],
        en: [
          'Mobile ticket purchase and top-up',
          'Ticket validation via QR code',
          'Real-time nearby bus tracking',
          'Push journey notifications and real-time synchronization',
        ],
      },
      githubUrl: 'https://github.com/miguelsouop/situr-mobile',
    },
  ],

  'Ethical Hacker': [
    {
      id: 'pentest-web-vuln-market',
      title: 'Pentest Applicatif Web — Vuln-Market',
      shortDescription: {
        fr: "Test d'intrusion complet sur application web : reconnaissance, exploitation et rapport de remédiation.",
        en: 'Complete web application penetration test: reconnaissance, exploitation and remediation report.',
      },
      fullDescription: {
        fr: "Audit de sécurité offensif mené sur une application web dans un cadre autorisé. Le périmètre couvrait la reconnaissance, l'énumération de sous-domaines, la détection de vulnérabilités (OWASP Top 10) et l'exploitation contrôlée. Un rapport détaillé avec niveau de criticité, preuves d'exploitation et recommandations de remédiation a été livré.",
        en: 'Offensive security audit carried out on a web application under an authorized scope. The engagement covered reconnaissance, subdomain enumeration, vulnerability detection (OWASP Top 10) and controlled exploitation. A detailed report with severity levels, exploitation proof and remediation recommendations was delivered.',
      },
      category: 'Pentest',
      roleType: 'Ethical Hacker',
      image: 'assets/images/projects/vuln-market.jpg',
      gallery: ['assets/images/projects/vuln-market.jpg', 'assets/images/projects/vuln-market.jpg'],
      technologies: ['Burp Suite', 'Nmap', 'OWASP Top 10', 'Linux'],
      features: {
        fr: [
          'Reconnaissance et énumération de surface d’attaque',
          'Détection de failles OWASP Top 10 (XSS, SQLi, IDOR)',
          'Exploitation contrôlée et preuve d’impact',
          'Rapport d’audit avec criticité et remédiation',
        ],
        en: [
          'Reconnaissance and attack surface enumeration',
          'OWASP Top 10 vulnerability detection (XSS, SQLi, IDOR)',
          'Controlled exploitation and impact proof',
          'Audit report with severity levels and remediation',
        ],
      },
      demoUrl: 'https://example.com/pentest-report',
    },
    {
      id: 'network-audit',
      title: 'Audit Réseau & Enumeration',
      shortDescription: {
        fr: 'Cartographie réseau, découverte d’hôtes et analyse de la posture de sécurité d’une infrastructure.',
        en: 'Network mapping, host discovery and infrastructure security posture analysis.',
      },
      fullDescription: {
        fr: "Audit réseau complet consistant à cartographier l'infrastructure, identifier les hôtes et services exposés, analyser les en-têtes de sécurité et détecter les configurations à risque. Le livrable inclut une cartographie réseau annotée et un plan de durcissement priorisé.",
        en: 'Complete network audit consisting of mapping the infrastructure, identifying exposed hosts and services, analyzing security headers and detecting risky configurations. The deliverable includes an annotated network map and a prioritized hardening plan.',
      },
      category: 'Réseau',
      roleType: 'Ethical Hacker',
      image: 'assets/images/projects/network.jpg',
      gallery: ['assets/images/projects/network.jpg', 'assets/images/projects/network.jpg'],
      technologies: ['VLAN', 'Cisco Packet Tracer', 'Réseau informatique', 'Trunck'],
      features: {
        fr: [
          'Découverte d’hôtes et scan de ports/services',
          'Cartographie de la topologie réseau',
          'Analyse des en-têtes et configurations de sécurité',
          'Plan de durcissement priorisé',
        ],
        en: [
          'Host discovery and port/service scanning',
          'Network topology mapping',
          'Security header and configuration analysis',
          'Prioritized hardening plan',
        ],
      },
    },
    {
      id: 'raven-1-vm',
      title: 'Raven 1 machine virtuelle',
      shortDescription: {
        fr: 'Laboratoire virtualisé de simulation d’attaques et d’entraînement offensif (CTF).',
        en: 'Virtualized lab for attack simulation and offensive training (CTF).',
      },
      fullDescription: {
        fr: "Mise en place d'un laboratoire virtualisé isolé pour l'entraînement offensif : machines vulnérables, réseau segmenté, scénarios d'escalade de privilèges et challenges CTF. Ce lab sert de terrain d'expérimentation pour l'exploitation et la détection.",
        en: 'Setup of an isolated virtualized lab for offensive training: vulnerable machines, segmented network, privilege escalation scenarios and CTF challenges. This lab serves as an experimentation ground for exploitation and detection.',
      },
      category: 'Labs',
      roleType: 'Ethical Hacker',
      image: 'assets/images/projects/raven-1-vm.jpg',
      gallery: ['assets/images/projects/raven-1-vm.jpg', 'assets/images/projects/raven-1-vm.jpg'],
      technologies: ['VMware', 'VirtualBox', 'Kali Linux', 'Metasploit', 'OSINT'],
      features: {
        fr: [
          'Réseau virtualisé segmenté et isolé',
          'Scénarios d’escalade de privilèges',
          'Challenges CTF et post-exploitation',
          'Journalisation et détection des attaques',
        ],
        en: [
          'Segmented and isolated virtual network',
          'Privilege escalation scenarios',
          'CTF and post-exploitation challenges',
          'Attack logging and detection',
        ],
      },
      githubUrl: 'https://github.com/miguelsouop/red-team-lab',
    },

    {
      id: 'raven-2-vm',
      title: 'Raven 2 machine virtuelle',
      shortDescription: {
        fr: 'Poursuite du lab CTF Raven : énumération avancée, pivoting et escalade de privilèges.',
        en: 'Continuation of the Raven CTF lab: advanced enumeration, pivoting and privilege escalation.',
      },
      fullDescription: {
        fr: "Seconde machine du laboratoire Raven, exploitée après la première pour travailler l'énumération approfondie, le pivoting réseau et l'escalade de privilèges. Toute la chaîne d'attaque a été documentée : reconnaissance, exploitation, maintien d'accès et détection, avec des leçons de sécurité associées à chaque étape.",
        en: 'Second machine of the Raven lab, exploited after the first one to practice deep enumeration, network pivoting and privilege escalation. The full attack chain was documented: reconnaissance, exploitation, persistence and detection, with security lessons for each step.',
      },
      category: 'Labs',
      roleType: 'Ethical Hacker',
      image: 'assets/images/projects/raven-2-vm.jpg',
      gallery: ['assets/images/projects/raven-2-vm.jpg', 'assets/images/projects/raven-2-vm.jpg'],
      technologies: ['VMware', 'VirtualBox', 'Kali Linux', 'Metasploit', 'OSINT'],
      features: {
        fr: [
          'Énumération approfondie des services exposés',
          'Pivoting réseau et mouvement latéral',
          'Escalade de privilèges documentée',
          'Analyse post-mortem et remédiations',
        ],
        en: [
          'Deep enumeration of exposed services',
          'Network pivoting and lateral movement',
          'Documented privilege escalation',
          'Post-mortem analysis and remediations',
        ],
      },
      githubUrl: 'https://github.com/miguelsouop/red-team-lab',
    },
  ],

  'UI/UX Designer': [
    {
      id: 'situr-web',
      title: 'SITUR — Parcours Utilisateur Transport',
      shortDescription: {
        fr: 'Conception UI/UX du parcours d’achat et de validation de tickets de transport urbain.',
        en: 'UI/UX design of the ticket purchase and validation journey for urban transport.',
      },
      fullDescription: {
        fr: "Refonte de l'expérience utilisateur de SITUR autour du parcours d'achat et de validation de ticket. Le travail couvre les personas, les user flows, la conception d'écrans mobiles épurés et un prototype interactif testé auprès d'utilisateurs, avec itérations successives.",
        en: 'Redesign of the SITUR user experience around the ticket purchase and validation journey. The work covers personas, user flows, clean mobile screen design and an interactive prototype tested with users, with successive iterations.',
      },
      category: 'Web',
      roleType: 'UI/UX Designer',
      image: 'assets/images/projects/design-web-situr.jpg',
      gallery: [
        'assets/images/projects/design-web-situr.jpg',
        'assets/images/projects/design-web-situr.jpg',
      ],
      technologies: ['Figma', 'User Research', 'Prototypage'],
      features: {
        fr: [
          'Personas et user flows complets',
          'Écrans mobiles épurés et accessibles',
          'Prototype interactif testé auprès d’utilisateurs',
          'Itérations guidées par les retours',
        ],
        en: [
          'Complete personas and user flows',
          'Clean and accessible mobile screens',
          'Interactive prototype tested with users',
          'Iterations driven by feedback',
        ],
      },
      figmaUrl: 'https://www.figma.com/file/example/situr-ux',
    },

    {
      id: 'situr-uiux',
      title: 'SITUR — Design Mobile',
      shortDescription: {
        fr: "Design de l'application mobile de gestion des transports interurbains SITUR.",
        en: 'Design of the SITUR intercity transport mobile app.',
      },
      fullDescription: {
        fr: "Conception complète de l'interface mobile de SITUR : recherches utilisateurs, wireframes, design system (couleurs, typographies, composants UI) et maquettes haute fidélité avec prototypage interactif sur Figma. L'accent a été mis sur la simplicité du parcours d'achat de billets, le suivi en temps réel des bus et l'expérience de validation par QR Code/NFC.",
        en: 'Complete design of the SITUR mobile interface: user research, wireframes, design system (colors, typography, UI components) and high-fidelity mockups with interactive prototyping in Figma. Focus was put on the simplicity of the ticket purchase journey, real-time bus tracking and QR code/NFC validation experience.',
      },
      category: 'Mobile',
      roleType: 'UI/UX Designer',
      image: 'assets/images/projects/design-mobile-situr.jpg',
      gallery: [
        'assets/images/projects/design-mobile-situr.jpg',
        'assets/images/projects/design-mobile-situr.jpg',
      ],
      technologies: ['Figma', 'Prototypage', 'Design System'],
      features: {
        fr: [
          'Recherche utilisateur et wireframing du parcours voyageur',
          'Design system complet et cohérent pour le réseau SITUR',
          "Interface d'achat de tickets et de recharge de portefeuille",
          'Maquettes haute fidélité avec prototypage interactif',
        ],
        en: [
          'User research and traveler journey wireframing',
          'Complete and coherent design system for the SITUR network',
          'Ticket purchase and wallet top-up interface',
          'High-fidelity mockups with interactive prototyping',
        ],
      },
      figmaUrl: 'https://www.figma.com/file/example/situr-mobile-design',
    },

    {
      id: 'sm-construction-uiux',
      title: 'SM Construction — Layout Web',
      shortDescription: {
        fr: 'Conception du layout et de l’identité visuelle d’un site vitrine BTP moderne.',
        en: 'Layout and visual identity design for a modern construction company website.',
      },
      fullDescription: {
        fr: "Création du layout complet et de l'identité visuelle du site SM Construction : grille, typographie, palette, composants et déclinaisons responsive. L'objectif était d'offrir une image professionnelle et moderne valorisant les réalisations de l'entreprise.",
        en: 'Creation of the complete layout and visual identity of the SM Construction website: grid, typography, palette, components and responsive variants. The goal was to deliver a professional, modern image showcasing the company achievements.',
      },
      category: 'Web',
      roleType: 'UI/UX Designer',
      image: 'assets/images/projects/sm-construction.jpg',
      gallery: [
        'assets/images/projects/sm-construction.jpg',
        'assets/images/projects/sm-construction.jpg',
      ],
      technologies: ['Adobe XD', 'Design System', 'Responsive Design'],
      features: {
        fr: [
          'Identité visuelle et palette de marque',
          'Grille et système typographique',
          'Composants réutilisables et déclinaisons responsive',
          'Maquettes desktop et mobile cohérentes',
        ],
        en: [
          'Visual identity and brand palette',
          'Grid and typography system',
          'Reusable components and responsive variants',
          'Consistent desktop and mobile mockups',
        ],
      },
      figmaUrl: 'https://www.figma.com/file/example/sm-construction',
    },
    {
      id: 'luxura-uiux',
      title: 'Luxura — Layout Web',
      shortDescription: {
        fr: 'Conception du layout et de l’identité visuelle d’un site vitrine premium moderne.',
        en: 'Layout and visual identity design for a modern premium showcase website.',
      },
      fullDescription: {
        fr: "Création du layout complet et de l'identité visuelle du site Luxura : grille, typographie, palette, composants et déclinaisons responsive. L'objectif était d'offrir une image professionnelle et moderne valorisant les réalisations de l'entreprise.",
        en: 'Creation of the complete layout and visual identity of the Luxura website: grid, typography, palette, components and responsive variants. The goal was to deliver a professional, modern image showcasing the company achievements.',
      },
      category: 'Web',
      roleType: 'UI/UX Designer',
      image: 'assets/images/projects/luxura-2.jpg',
      gallery: ['assets/images/projects/luxura-2.jpg', 'assets/images/projects/luxura-1.jpg'],
      technologies: ['Adobe XD', 'Design System', 'Responsive Design'],
      features: {
        fr: [
          'Identité visuelle et palette de marque',
          'Grille et système typographique',
          'Composants réutilisables et déclinaisons responsive',
          'Maquettes desktop et mobile cohérentes',
        ],
        en: [
          'Visual identity and brand palette',
          'Grid and typography system',
          'Reusable components and responsive variants',
          'Consistent desktop and mobile mockups',
        ],
      },
      figmaUrl: 'https://www.figma.com/file/example/luxura',
    },
  ],
};
