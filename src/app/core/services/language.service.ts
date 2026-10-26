import { Service, signal } from '@angular/core';
import { LanguageType } from '../models/portfolio.model';

@Service()
export class LanguageService {
  private readonly lang = signal<LanguageType>('fr');

  readonly currentLang = this.lang.asReadonly();

  toggleLanguage(): void {
    this.lang.update((current) => (current === 'fr' ? 'en' : 'fr'));
  }
}
