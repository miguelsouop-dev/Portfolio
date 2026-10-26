import { Component, computed, inject, signal, isDevMode } from '@angular/core';
import { RoleService } from '../../../../core/services/role.service';
import { LanguageService } from '../../../../core/services/language.service';
import { SKILLS_BY_ROLE, SKILLS_SECTION_TEXT } from '../../../../data/skills.data';
import { SKILL_BRAND_COLORS } from '../../../../data/portofolio-colors.constants';
import { SkillCategory } from '../../../../core/models/portfolio.model';

interface SkillViewModel {
  name: string;
  iconUrl: string;
  brandColor: string;
}

interface SkillCategoryViewModel extends Omit<SkillCategory, 'skills'> {
  skills: SkillViewModel[];
}

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [],
  templateUrl: './skills-section.component.html',
  styleUrl: './skills-section.component.css',
})
export class SkillsSectionComponent {
  roleService = inject(RoleService);
  langService = inject(LanguageService);

  readonly skillsContent = computed(
    () => SKILLS_SECTION_TEXT[this.roleService.activeRole()][this.langService.currentLang()],
  );

  readonly skillCategories = computed<SkillCategoryViewModel[]>(() =>
    SKILLS_BY_ROLE[this.roleService.activeRole()].map((category) => ({
      ...category,
      skills: category.skills.map((skill) => ({
        name: skill.name,
        iconUrl: skill.iconUrl,
        brandColor: this.resolveBrandColor(skill.name),
      })),
    })),
  );

  private readonly failedIcons = signal<ReadonlySet<string>>(new Set());

  private resolveBrandColor(skillName: string): string {
    const color = SKILL_BRAND_COLORS[skillName];
    if (!color && isDevMode()) {
      console.warn(
        `[SkillsSection] Aucune brandColor pour la compétence "${skillName}" dans SKILL_BRAND_COLORS`,
      );
    }
    return color ?? 'var(--accent-color)';
  }

  hasIconFailed(iconUrl: string): boolean {
    return this.failedIcons().has(iconUrl);
  }

  onIconError(iconUrl: string): void {
    this.failedIcons.update((icons) => new Set(icons).add(iconUrl));
  }

  iconFallbackLabel(name: string): string {
    return name.trim().charAt(0).toUpperCase();
  }
}
