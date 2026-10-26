import { Component, HostListener, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleService } from '../../../core/services/role.service';
import { LanguageService } from '../../../core/services/language.service';
import { ThemeService } from '../../../core/services/theme.service';
import { HEADER_NAV, NavItem, ROLE_LABELS } from '../../../data/header.data';
import { RoleType } from '../../../core/models/portfolio.model';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  roleService = inject(RoleService);
  langService = inject(LanguageService);
  themeService = inject(ThemeService);

  roles: RoleType[] = ['Développeur Fullstack', 'Ethical Hacker', 'UI/UX Designer'];
  readonly navItems: NavItem[] = HEADER_NAV;
  // Signal pour gérer l'ouverture/fermeture du menu de langue
  isLangMenuOpen = signal<boolean>(false);

  get currentLang() {
    return this.langService.currentLang();
  }

  /** Libellé bilingue d'une casquette (ex : « Fullstack Developer » en EN). */
  roleLabel(role: RoleType): string {
    return ROLE_LABELS[this.langService.currentLang()][role];
  }

  selectRole(role: RoleType) {
    this.roleService.setRole(role);
  }

  toggleLangMenu(event: MouseEvent) {
    event.stopPropagation();
    this.isLangMenuOpen.update((isOpen) => !isOpen);
  }

  setLanguage(lang: 'fr' | 'en') {
    if (this.langService.currentLang() !== lang) {
      this.langService.toggleLanguage(); // Ou une méthode setLang(lang) si elle existe dans ton service
    }
    this.isLangMenuOpen.set(false);
  }

  // Fermer le menu si on clique en dehors
  @HostListener('document:click')
  onDocumentClick() {
    this.isLangMenuOpen.set(false);
  }

  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
