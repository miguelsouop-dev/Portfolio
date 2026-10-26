import { LanguageType, RoleType, SkillCategory } from '../core/models/portfolio.model';

/** Textes de l'en-tête de la section Compétences, par casquette. */
export const SKILLS_SECTION_TEXT: Record<
  RoleType,
  Record<LanguageType, { title: string; description: string }>
> = {
  'Développeur Fullstack': {
    fr: {
      title: 'Compétences',
      description: 'Les langages, frameworks et outils avec lesquels je travaille au quotidien.',
    },
    en: {
      title: 'Skills',
      description: 'The languages, frameworks and tools I work with every day.',
    },
  },
  'Ethical Hacker': {
    fr: {
      title: 'Compétences',
      description: 'Les stacks, frameworks et outils avec lesquels je travaille au quotidien.',
    },
    en: {
      title: 'Skills',
      description: 'The stacks, frameworks and tools I work with every day.',
    },
  },
  'UI/UX Designer': {
    fr: {
      title: 'Compétences',
      description: 'Les outils avec lesquels je travaille au quotidien.',
    },
    en: {
      title: 'Skills',
      description: 'The tools I work with every day.',
    },
  },
};

// --- COMPÉTENCES SPÉCIFIQUES PAR CASQUETTE ---
export const SKILLS_BY_ROLE: Record<RoleType, SkillCategory[]> = {
  'Développeur Fullstack': [
    {
      title: { fr: 'Développement Frontend', en: 'Frontend Development' },
      skills: [
        { name: 'HTML5', iconUrl: 'assets/icons/frontend/html.svg' },
        { name: 'CSS3', iconUrl: 'assets/icons/frontend/css.svg' },
        { name: 'JavaScript', iconUrl: 'assets/icons/frontend/js.svg' },
        { name: 'TailwindCSS', iconUrl: 'assets/icons/frontend/tailwind.svg' },
        { name: 'Angular', iconUrl: 'assets/icons/frontend/angular.svg' },
        { name: 'React.js', iconUrl: 'assets/icons/frontend/react.svg' },
        { name: 'Flutter', iconUrl: 'assets/icons/frontend/flutter.svg' },
      ],
    },
    {
      title: { fr: 'Développement Backend', en: 'Backend Development' },
      skills: [
        { name: 'PHP', iconUrl: 'assets/icons/backend/php.svg' },
        { name: 'Python', iconUrl: 'assets/icons/backend/python.svg' },
        { name: 'Laravel', iconUrl: 'assets/icons/backend/laravel.svg' },
        { name: 'Django', iconUrl: 'assets/icons/backend/django.svg' },
        { name: 'Django REST', iconUrl: 'assets/icons/backend/django-rest.svg' },
        { name: 'NestJS', iconUrl: 'assets/icons/backend/nestjs.svg' },
      ],
    },
    {
      title: { fr: 'Base de données', en: 'Database' },
      skills: [
        { name: 'PostgreSQL', iconUrl: 'assets/icons/db/postgresql.svg' },
        { name: 'MySQL', iconUrl: 'assets/icons/db/mysql.svg' },
        { name: 'SQLite', iconUrl: 'assets/icons/db/sqlite.svg' },
      ],
    },
    {
      title: { fr: 'DevOps', en: 'DevOps' },
      skills: [
        { name: 'Git', iconUrl: 'assets/icons/devops/git.svg' },
        { name: 'GitHub', iconUrl: 'assets/icons/devops/github.svg' },
        { name: 'Docker', iconUrl: 'assets/icons/devops/docker.svg' },
        { name: 'Nginx', iconUrl: 'assets/icons/devops/nginx.svg' },
        { name: 'Linux', iconUrl: 'assets/icons/devops/linux.svg' },
      ],
    },
  ],

  'Ethical Hacker': [
    {
      title: { fr: 'Systèmes & Réseaux', en: 'Systems & Networks' },
      skills: [
        { name: 'Cisco Packet Tracer', iconUrl: 'assets/icons/reseaux/cisco.svg' },
        { name: 'VirtualBox', iconUrl: 'assets/icons/reseaux/virtualbox.svg' },
        { name: 'VMware', iconUrl: 'assets/icons/reseaux/vmware.svg' },
        { name: 'GNS3', iconUrl: 'assets/icons/reseaux/gns3.svg' },
      ],
    },
    {
      title: { fr: 'Cybersécurité', en: 'Cybersecurity' },
      skills: [
        { name: 'Burp Suite', iconUrl: 'assets/icons/cybersec/burpsuite.svg' },
        { name: 'Linux', iconUrl: 'assets/icons/cybersec/linux.svg' },
        { name: 'Red Team', iconUrl: 'assets/icons/cybersec/red-team.svg' },
        { name: 'OWASP Top 10', iconUrl: 'assets/icons/cybersec/owasp.svg' },
        { name: 'Pentesting', iconUrl: 'assets/icons/cybersec/pentesting.svg' },
        { name: 'Metasploit', iconUrl: 'assets/icons/cybersec/metasploit.svg' },
        { name: 'OSINT', iconUrl: 'assets/icons/cybersec/osint.svg' },
        { name: 'Nmap', iconUrl: 'assets/icons/cybersec/nmap.svg' },
      ],
    },
  ],

  'UI/UX Designer': [
    {
      title: { fr: 'Design UI/UX', en: 'UI/UX Design' },
      skills: [
        { name: 'Figma', iconUrl: 'assets/icons/design/figma.svg' },
        { name: 'Adobe XD', iconUrl: 'assets/icons/design/adobe-xd.svg' },
      ],
    },
  ],
};
