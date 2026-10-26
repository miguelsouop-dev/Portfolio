import { Service, signal } from '@angular/core';
import { ThemeMode } from '../models/portfolio.model';

@Service()
export class ThemeService {
  private readonly themeMode = signal<ThemeMode>('dark');

  readonly mode = this.themeMode.asReadonly();

  constructor() {
    this.applyTheme(this.themeMode());
  }

  toggleTheme(): void {
    this.themeMode.update((current) => {
      const next = current === 'dark' ? 'light' : 'dark';
      this.applyTheme(next);
      return next;
    });
  }

  private applyTheme(mode: ThemeMode): void {
    if (typeof document === 'undefined') {
      return;
    }
    document.body.dataset['theme'] = mode;
    document.body.classList.toggle('theme-light', mode === 'light');
    document.body.classList.toggle('theme-dark', mode === 'dark');
  }
}
