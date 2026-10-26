import { Service } from '@angular/core';
import {
  PORTFOLIO_COLORS,
  ROLE_ACCENT_COLORS,
  ROLE_ACCENT_MUTED_COLORS,
} from '../../data/portofolio-colors.constants';
import { RoleType } from '../models/portfolio.model';

/**
 * Correspondance entre les clés de la palette et les variables CSS
 * exposedues au document (pilotées par les tokens Tailwind de src/styles.css).
 */
const CSS_VARIABLES = {
  canvas: '--palette-canvas',
  surface: '--palette-surface',
  ink: '--palette-ink',
  whatsapp: '--palette-whatsapp',
  scrollbarThumb: '--palette-scrollbar-thumb',
} as const;

/**
 * Convertit une couleur hexadécimale en canaux RGB utilisables
 * dans `rgba(var(--accent-color-rgb), 0.35)`.
 */
export function hexToRgbChannels(hex: string): string {
  const normalized = hex.replace('#', '');
  const expanded =
    normalized.length === 3
      ? normalized
          .split('')
          .map((char) => char + char)
          .join('')
      : normalized;
  const value = parseInt(expanded, 16);

  return `${(value >> 16) & 255}, ${(value >> 8) & 255}, ${value & 255}`;
}

/**
 * Applique la palette centralisée au document.
 * Les valeurs proviennent exclusivement de `portofolio-colors.constants.ts` :
 * les modifier ici met à jour toute l'interface.
 */
@Service()
export class PaletteService {
  /** Applique les couleurs statiques de la palette. */
  apply(): void {
    const root = this.rootElement();
    if (!root) {
      return;
    }

    (Object.keys(CSS_VARIABLES) as (keyof typeof CSS_VARIABLES)[]).forEach((key) => {
      root.style.setProperty(CSS_VARIABLES[key], PORTFOLIO_COLORS[key]);
    });
  }

  /** Applique la couleur d'accent (et sa version atténuée) du rôle actif. */
  applyRoleAccent(role: RoleType): void {
    const root = this.rootElement();
    if (!root) {
      return;
    }

    const accent = ROLE_ACCENT_COLORS[role];

    root.style.setProperty('--accent-color', accent);
    root.style.setProperty('--accent-color-rgb', hexToRgbChannels(accent));
    root.style.setProperty('--accent-color-muted', ROLE_ACCENT_MUTED_COLORS[role]);
  }

  private rootElement(): HTMLElement | null {
    return typeof document === 'undefined' ? null : document.documentElement;
  }
}
