import { Component, computed, inject } from '@angular/core';
import { RoleService } from '../../../../core/services/role.service';
import { LanguageService } from '../../../../core/services/language.service';
import { EXPERIENCES_DATA, EXPERIENCE_SECTION_TEXT } from '../../../../data/experience.data';
import { ExperienceItem } from '../../../../core/models/experience.model';

@Component({
  selector: 'app-experience-section',
  standalone: true,
  imports: [],
  templateUrl: './experience-section.component.html',
  styleUrl: './experience-section.component.css',
})
export class ExperienceSectionComponent {
  roleService = inject(RoleService);
  langService = inject(LanguageService);

  /** Expériences de la casquette active uniquement. */
  readonly experiences = computed<ExperienceItem[]>(() => {
    const role = this.roleService.activeRole();
    return EXPERIENCES_DATA.filter((item) => item.roleType === role);
  });

  readonly text = computed(() => EXPERIENCE_SECTION_TEXT[this.langService.currentLang()]);

  trackExperience(_index: number, item: ExperienceItem): string {
    return `${item.roleType}-${item.period.en}-${item.title.en}`;
  }
}
