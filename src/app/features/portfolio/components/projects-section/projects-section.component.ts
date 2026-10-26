import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleService } from '../../../../core/services/role.service';
import { LanguageService } from '../../../../core/services/language.service';
import {
  FILTERS_BY_ROLE,
  PROJECTS_BY_ROLE,
  PROJECTS_SECTION_TEXT,
  PROJECT_CATEGORY_LABELS,
} from '../../../../data/projects.data';
import { Project, ProjectCategory } from '../../../../core/models/project.model';
import { ProjectDetailModalComponent } from '../../../../shared/components/project-modal/project-detail-modal.component';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [CommonModule, ProjectDetailModalComponent],
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.component.css',
})
export class ProjectsSectionComponent {
  roleService = inject(RoleService);
  langService = inject(LanguageService);

  readonly selectedProject = signal<Project | null>(null);
  private readonly selectedCategory = signal<ProjectCategory | 'Tous'>('Tous');

  readonly projects = computed<Project[]>(() => PROJECTS_BY_ROLE[this.roleService.activeRole()]);

  readonly filters = computed<(ProjectCategory | 'Tous')[]>(() => [
    'Tous',
    ...FILTERS_BY_ROLE[this.roleService.activeRole()],
  ]);

  readonly activeFilter = computed<ProjectCategory | 'Tous'>(() => {
    const category = this.selectedCategory();
    return this.filters().includes(category) ? category : 'Tous';
  });

  readonly filteredProjects = computed<Project[]>(() => {
    const category = this.activeFilter();
    return category === 'Tous'
      ? this.projects()
      : this.projects().filter((project) => project.category === category);
  });

  readonly text = computed(() => PROJECTS_SECTION_TEXT[this.langService.currentLang()]);

  allLabel(): string {
    return this.text().all;
  }

  filterLabel(filter: ProjectCategory | 'Tous'): string {
    return filter === 'Tous' ? this.allLabel() : this.categoryLabel(filter);
  }

  /** Libellé bilingue d'une catégorie (ex : « Réseau » → « Network »). */
  categoryLabel(category: ProjectCategory): string {
    return PROJECT_CATEGORY_LABELS[this.langService.currentLang()][category];
  }

  selectFilter(filter: ProjectCategory | 'Tous'): void {
    this.selectedCategory.set(filter);
  }

  openProject(project: Project): void {
    this.selectedProject.set(project);
  }

  closeProject(): void {
    this.selectedProject.set(null);
  }
}
