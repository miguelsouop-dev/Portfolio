import { Service, inject, signal } from '@angular/core';
import { ThemeMode } from '../models/portfolio.model';
import { PaletteService } from './palette.service';

const THEME_STORAGE_KEY = 'portfolio_theme_mode';

@Service()
export class ThemeService {
  private readonly palette = inject(PaletteService);

  // Le thème par défaut est TOUJOURS 'dark'
  private readonly themeMode = signal<ThemeMode>('dark');

  readonly mode = this.themeMode.asReadonly();

  constructor() {
    // Nettoie un éventuel enregistrement persistant antérieur pour garantir le dark par défaut
    if (typeof window !== 'undefined') {
      try {
        localStorage.removeItem(THEME_STORAGE_KEY);
        sessionStorage.removeItem(THEME_STORAGE_KEY);
      } catch {
        // Ignorer
      }
    }
    this.applyTheme('dark');
  }

  toggleTheme(): void {
    this.themeMode.update((current) => {
      const next = current === 'dark' ? 'light' : 'dark';
      this.applyTheme(next);
      return next;
    });
  }

  setTheme(mode: ThemeMode): void {
    this.themeMode.set(mode);
    this.applyTheme(mode);
  }

  private applyTheme(mode: ThemeMode): void {
    if (typeof document === 'undefined') {
      return;
    }
    document.body.dataset['theme'] = mode;
    document.body.classList.toggle('theme-light', mode === 'light');
    document.body.classList.toggle('theme-dark', mode === 'dark');
    document.documentElement.style.colorScheme = mode;

    // Met à jour dynamiquement les custom properties CSS de la palette
    this.palette.applyTheme(mode);
  }
}
