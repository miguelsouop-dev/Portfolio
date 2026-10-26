import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleService } from '../../../../core/services/role.service';
import { LanguageService } from '../../../../core/services/language.service';
import { ABOUT_BY_ROLE, ABOUT_HINT } from '../../../../data/about.data';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.css',
})
export class AboutSectionComponent {
  roleService = inject(RoleService);
  langService = inject(LanguageService);

  aboutContent = computed(() => {
    const lang = this.langService.currentLang();
    const role = this.roleService.activeRole();
    return ABOUT_BY_ROLE[role][lang];
  });

  sectionHint = computed(() => ABOUT_HINT[this.langService.currentLang()]);
}
