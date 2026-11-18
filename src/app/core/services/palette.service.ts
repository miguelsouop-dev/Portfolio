import { Service } from '@angular/core';
import {
  PORTFOLIO_DARK_COLORS,
  PORTFOLIO_LIGHT_COLORS,
  ROLE_ACCENT_COLORS,
  ROLE_ACCENT_MUTED_COLORS,
} from '../../data/portofolio-colors.constants';
import { RoleType, ThemeMode } from '../models/portfolio.model';

/**
 * Correspondance entre les clés de la palette et les variables CSS
 * exposées au document (pilotées par les tokens Tailwind de src/styles.css).
 */
const CSS_VARIABLES = {
  canvas: '--palette-canvas',
  surface: '--palette-surface',
  surfaceElevated: '--palette-surface-elevated',
  ink: '--palette-ink',
  inkMuted: '--palette-ink-muted',
  inkFaint: '--palette-ink-faint',
  border: '--palette-border',
  borderSubtle: '--palette-border-subtle',
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
  /** Applique les couleurs de la palette selon le mode (dark ou light). */
  apply(mode: ThemeMode = 'dark'): void {
    const root = this.rootElement();
    if (!root) {
      return;
    }

    const palette = mode === 'light' ? PORTFOLIO_LIGHT_COLORS : PORTFOLIO_DARK_COLORS;

    (Object.keys(CSS_VARIABLES) as (keyof typeof CSS_VARIABLES)[]).forEach((key) => {
      root.style.setProperty(CSS_VARIABLES[key], palette[key]);
    });
  }

  /** Met à jour la palette lors d'un changement de thème. */
  applyTheme(mode: ThemeMode): void {
    this.apply(mode);
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
