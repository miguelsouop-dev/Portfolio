import { RoleType } from '../core/models/portfolio.model';

/**
 * SOURCE DE VÉRITÉ UNIQUE DES COULEURS DU PORTFOLIO.
 *
 * Toute couleur de l'interface doit être déclarée ici puis exposée au CSS
 * via des variables custom properties (voir PaletteService) et des tokens
 * Tailwind (voir src/styles.css). Aucun code hexadécimal ne doit apparaître
 * dans les templates HTML.
 */
export const PORTFOLIO_COLORS = {
  /** Fond de page (sections, header) */
  canvas: '#0A0A0B',
  /** Fond des cartes, panneaux et menus */
  surface: '#141416',
  /** Texte principal */
  ink: '#FFFFFF',
  /** Bouton flottant WhatsApp */
  whatsapp: '#25D366',
  /** Curseur de la scrollbar */
  scrollbarThumb: '#222226',
} as const;

/** Couleur d'accentuation par rôle actif (utilisée par --accent-color). */
export const ROLE_ACCENT_COLORS: Record<RoleType, string> = {
  'Développeur Fullstack': '#002CF9',
  'Ethical Hacker': '#FF001A',
  'UI/UX Designer': '#F33CA4',
};

/** Bordure inactuelle des contrôles, teintée par rôle (utilisée par --accent-color-muted). */
export const ROLE_ACCENT_MUTED_COLORS: Record<RoleType, string> = {
  'Développeur Fullstack': '#1E3A8A',
  'Ethical Hacker': '#7F1D1D',
  'UI/UX Designer': '#831843',
};

// --- COULEURS DE MARQUE DES TECHNOLOGIES (HEX) ---
// Clé : nom affiché de la compétence (doit correspondre EXACTEMENT à SkillItem.name dans SKILLS_BY_ROLE)
export const SKILL_BRAND_COLORS: Readonly<Record<string, string>> = {
  // Frontend
  HTML5: '#E34F26',
  CSS3: '#7e57c2',
  JavaScript: '#F7DF1E',
  TailwindCSS: '#06B6D4',
  Angular: '#DD0031',
  'React.js': '#61DAFB',
  Flutter: '#02569B',

  // Backend
  PHP: '#777BB4',
  Python: '#ffe366',
  Laravel: '#FF2D20',
  Django: '#44B78B',
  'Django REST': '#44B78B',
  NestJS: '#E0234E',

  // Base de données
  PostgreSQL: '#4169E1',
  MySQL: '#00758F',
  SQLite: '#50aae0',

  // DevOps
  Git: '#F05032',
  GitHub: '#FFFFFF',
  Docker: '#2496ED',
  Nginx: '#009639',
  Linux: '#FCC624',

  // Systèmes & Réseaux
  'Cisco Packet Tracer': '#1BA0D7',
  VirtualBox: '#00758a',
  VMware: '#f38b00',
  GNS3: '#4B9CD3',

  // Cybersécurité
  'Burp Suite': '#002CF9',
  'Red Team': '#FF001A',
  'OWASP Top 10': '#FFC800',
  Pentesting: '#00FF66',
  Metasploit: '#1278B3',
  OSINT: '#E50914',
  Nmap: '#1890FF',

  // Design UI/UX
  Figma: '#F24E1E',
  'Adobe XD': '#FF61F6',
};
