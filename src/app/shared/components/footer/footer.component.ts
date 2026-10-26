import { Component, computed, inject } from '@angular/core';
import { RoleService } from '../../../core/services/role.service';
import { LanguageService } from '../../../core/services/language.service';
import {
  FOOTER_DESCRIPTIONS,
  FOOTER_NAV,
  FOOTER_ROLE_META,
  FOOTER_TEXT,
  FooterRoleMeta,
} from '../../../data/footer.data';
import { NavItem } from '../../../data/header.data';
import { LanguageType } from '../../../core/models/portfolio.model';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  private readonly roleService = inject(RoleService);
  private readonly langService = inject(LanguageService);

  readonly navItems: NavItem[] = FOOTER_NAV;
  readonly year: number = new Date().getFullYear();

  /** Langue courante (réactive). */
  lang(): LanguageType {
    return this.langService.currentLang();
  }

  /** Description dynamique selon la casquette active. */
  readonly description = computed(() =>
    FOOTER_DESCRIPTIONS[this.langService.currentLang()][this.roleService.activeRole()],
  );

  /** Métadonnées de clôture propres à la casquette active. */
  readonly roleMeta = computed<FooterRoleMeta>(() =>
    FOOTER_ROLE_META[this.langService.currentLang()][this.roleService.activeRole()],
  );

  /** Libellés génériques (copyright, bouton scroll-to-top). */
  readonly text = computed(() => FOOTER_TEXT[this.langService.currentLang()]);

  readonly copyright = computed(
    () => `© ${this.year} Miguel Souop — ${FOOTER_TEXT[this.langService.currentLang()].rights}`,
  );

  // Remonter en haut de la page en douceur
  scrollToTop(event: Event): void {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Navigation par ancres vers les sections
  scrollTo(sectionId: string): void {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }
}
